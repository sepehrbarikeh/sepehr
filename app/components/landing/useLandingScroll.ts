"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/app/lib/gsap";

export function useLandingScroll() {
  const scope = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".landing-wrapper",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      tl.to(".landing-scene", {
        scale: 0.88,
        opacity: 0.2,
      //  filter: "blur(4px)",
        ease: "none",
      });

      tl.to(
        ".floating-word",
        {
          opacity: 0,
          duration: 0.2,
          stagger: 0.01,
        },
        0
      );
    },
    { scope }
  );

  return scope;
}