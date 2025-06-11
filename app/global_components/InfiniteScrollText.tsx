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

  // Convert speed to duration in seconds
  const getAnimationDuration = (speed: InfiniteScrollTextProps["speed"]) => {
    if (typeof speed === "number") return speed;

    switch (speed) {
      case "slow":
        return 60;
      case "medium":
        return 30;
      case "fast":
        return 15;
      case "ultra-fast":
        return 8;
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

      // Check if element is visible
      const visible = rect.top < windowHeight && rect.bottom > 0;
      setIsVisible(visible);

      if (visible) {
        // Calculate scroll progress (0 to 1)
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
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollEffect]);

  const baseDuration = getAnimationDuration(speed);
  // Modify speed based on scroll progress
  const dynamicDuration = scrollEffect
    ? baseDuration * (0.5 + scrollProgress * 1.5)
    : baseDuration;

  // Calculate transform based on scroll
  const scrollTransform = scrollEffect
    ? `translateY(${(scrollProgress - 0.5) * 50}px)`
    : "translateY(0)";

  const scrollingText = `${text} • `;

  return (
    <div
      ref={containerRef}
      className={`w-full py-30 overflow-hidden ${className}`}
      style={{
        transform: scrollTransform,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll ${dynamicDuration}s linear infinite`,
          animationPlayState: scrollEffect && !isVisible ? "paused" : "running",
          opacity: scrollEffect ? Math.max(0.4, scrollProgress) : 1,
        }}
      >
        {" "}
        <span
          className={`lg:text-[10rem] md:text-[8rem] text-[6rem]  font-bold mx-8 ${className}`}
        >
          {scrollingText.repeat(10)}
        </span>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
