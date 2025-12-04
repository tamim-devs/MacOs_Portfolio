import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { FONT_WEIGHT } from "../constants";

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    setupTextHover(titleRef.current, "title");
    setupTextHover(subtitleRef.current, "subtitle");
  }, []);

  const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, i) => (
      <span
        key={i}
        className={className}
        style={{
          fontVariationSettings: `'wght ${baseWeight}'`,
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const setupTextHover = (container, type) => {
    if (!container) return;

    const letters = container.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHT[type];

    const animateLetters = (letter, weight, duration = 0.25) => {
      return gsap.to(letter, {
        duration,
        ease: "power2.out",
        fontVariationSettings: `'wght' ${weight}`,
      });
    };

    const handleMouseMove = (e) => {
      const { left } = container.getBoundingClientRect();
      const mouseX = e.clientX - left;

      letters.forEach((letter) => {
        const { left: l, width: w } = letter.getBoundingClientRect();
        const distance = Math.abs(mouseX - (l - left + w / 2));
        const intensity = Math.exp(-(distance / 200));

        animateLetters(letter, min + (max - min) * intensity);
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", () =>
      letters.forEach((letter) => animateLetters(letter, base))
    );
  };

  return (
    <section
      id="welcome"
      className="scale-[0.75] w-0 h-0 md:scale-90 lg:scale-100 text-center"
    >
      {/* Subtitle */}
      <p className="no-underline" ref={subtitleRef}>
        {renderText(
          "Hey, I'm Tamim ! Welcome to My",
          "text-xl md:text-2xl font-georama",
          100
        )}
      </p>

      {/* Title */}
      <h1 ref={titleRef} className="my-4">
        {renderText(
          "Portfolio",
          "text-5xl md:text-2xl lg:text-8xl font-georama italic",
        )}
      </h1>

      <div className="small-device mt-3">
        <p className="text-sm opacity-70">
          This portfolio is designed for desktop/tablet screens only.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
