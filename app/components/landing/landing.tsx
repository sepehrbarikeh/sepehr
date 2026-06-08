"use client";

import DeveloperScene from "./developerScene";
import { useLandingScroll } from "./useLandingScroll";

export default function Landing() {
  const scope = useLandingScroll();

  return (
    <section
      ref={scope}
      className="landing-wrapper relative h-[180vh] bg-[#0a0a0c]"
      id="hero-section"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="glow-left absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="glow-right absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <DeveloperScene />
      </div>
    </section>
  );
}