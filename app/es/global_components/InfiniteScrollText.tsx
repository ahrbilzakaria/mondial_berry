"use client";

import { useEffect, useRef, useState } from "react";

interface InfiniteScrollTextProps {
  text: string;
  speed?: "slow" | "medium" | "fast" | "ultra-fast" | number;
  textSize?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
  gradient?: string;
  backgroundColor?: string;
  className?: string;
  scrollEffect?: boolean;
}

export default function InfiniteScrollText({
  text,
  speed = "medium",
  className = "",
  scrollEffect = true,
}: InfiniteScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const getAnimationDuration = (speed: InfiniteScrollTextProps["speed"]) => {
    if (typeof speed === "number") return speed;
    switch (speed) {
      case "slow":
        return 80;
      case "medium":
        return 40;
      case "fast":
        return 30;
      case "ultra-fast":
        return 20;
      default:
        return 30;
    }
  };

  useEffect(() => {
    if (!scrollEffect) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = rect.top < windowHeight && rect.bottom > 0;
      setIsVisible(visible);

      if (visible) {
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const progress = Math.max(
          0,
          Math.min(
            1.8,
            (windowHeight - elementTop) / (windowHeight + elementHeight)
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollEffect]);

  const baseDuration = getAnimationDuration(speed);
  const dynamicDuration = scrollEffect
    ? baseDuration * (0.8 + scrollProgress * 1.5)
    : baseDuration;

  const scrollTransform = scrollEffect
    ? `translateY(${(scrollProgress - 0.5) * 50}px)`
    : "translateY(0)";

  const scrollingText = `${text} • `;

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden whitespace-nowrap ${className}`}
      style={{
        transform: scrollTransform,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        className="inline-flex animate-scroll "
        style={{
          animationDuration: `${dynamicDuration}s`,
          animationPlayState: scrollEffect && !isVisible ? "paused" : "running",
          opacity: scrollEffect ? Math.max(0.4, scrollProgress) : 1,
        }}
      >
        <span
          className={`lg:text-[10rem] md:text-[8rem] text-[5rem] font-bold ${className} px-4`}
        >
          {scrollingText.repeat(10)}
        </span>
        <span
          className={`lg:text-[10rem] md:text-[8rem] text-[5rem] font-bold ${className} px-4`}
        >
          {scrollingText.repeat(10)}
        </span>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
