"use client";

import { gsap,useGSAP } from "@/app/lib/gsap";
import { useRef } from "react";

export function useLandingAnimation() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".landing-badge", {
        opacity: 0,
        y: 30,
        duration: 0.6,
      })
        .from(
          ".landing-title",
          {
            opacity: 0,
            y: 50,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          ".landing-subtitle",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".landing-buttons button",
          {
            opacity: 0,
            y: 20,
            stagger: 0.12,
            duration: 0.5,
          },
          "-=0.4"
        )
        .from(
          ".landing-scene",
          {
            opacity: 0,
            scale: 0.9,
            x: 80,
            duration: 1,
          },
          "-=0.8"
        );
    },
    { scope }
  );

  return scope;
}