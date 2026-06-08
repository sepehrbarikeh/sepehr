"use client";

import { useEffect, RefObject } from "react";
import { gsap } from "@/app/lib/gsap";

export function useMouseParallax(
  ref: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const x =
        (e.clientX / window.innerWidth - 0.5) * 2;

      const y =
        (e.clientY / window.innerHeight - 0.5) * 2;

      gsap.to(".parallax-scene", {
        x: x * 25,
        y: y * 25,
        duration: 1.4,
        ease: "power3.out",
      });

      gsap.to(".glow-left", {
        x: x * -35,
        y: y * -35,
        duration: 2,
      });

      gsap.to(".glow-right", {
        x: x * 35,
        y: y * 35,
        duration: 2,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove
      );
    };
  }, [ref]);
}