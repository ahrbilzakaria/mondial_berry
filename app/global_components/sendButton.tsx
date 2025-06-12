"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedSendButtonProps {
  isSubmitting?: boolean;
  isSuccess?: boolean;
  text?: string;
  successText?: string;
  className?: string;
  onClick?: () => void;
}

export default function AnimatedSendButton({
  isSubmitting = false,
  isSuccess = false,
  text = "Envoyer",
  successText = "Envoyé!",
  className,
  onClick,
  ...props
}: AnimatedSendButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const [animating, setAnimating] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isSubmitting && !isSuccess && onClick) {
      setAnimating(true);
      onClick();

      setTimeout(() => {
        setAnimating(false);
      }, 1000);
    }
  };

  return (
    <Button
      type="submit"
      disabled={isSubmitting}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer",
        "bg-gradient-to-r from-[#FF4F79] to-[#941936]",
        "hover:from-[#FF6B8E] hover:to-[#B02142]",
        "active:from-[#E03A64] active:to-[#7A1429]",
        "rounded-full w-full font-semibold md:text-xl text-md md:p-6 p-4 shadow-lg",
        isSubmitting && "cursor-not-allowed opacity-90",
        isSuccess && "bg-accent",
        className
      )}
      {...props}
    >
      <span
        className={cn(
          "flex items-center justify-center gap-2 transition-all duration-300",
          (isSubmitting || animating) && "translate-y-[-100px]",
          isSuccess && "translate-y-[-100px]"
        )}
      >
        {text} <Send className="h-5 w-5" />
      </span>

      {/* Loading spinner */}
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          !isSubmitting ? "translate-y-[100px]" : "translate-y-0"
        )}
      >
        <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </span>

      {/* Success state */}
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300",
          !isSuccess ? "translate-y-[100px]" : "translate-y-0"
        )}
      >
        {successText} <Check className="h-5 w-5" />
      </span>

      {/* Animation overlay */}
      <span
        className={cn(
          "absolute inset-0 bg-white/20 translate-x-[-100%]",
          animating && "animate-slide-right"
        )}
      />
    </Button>
  );
}
