import { dockApps } from "#constants";
import { locations } from "#constants";   // FIXED
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { Tooltip } from "react-tooltip";

const Dock = () => {
  const { windows, openWindow, closeWindow } = useWindowStore();
  const dockRef = useRef(null);

  // DOCK ANIMATION
  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 200);

        gsap.to(icon, {
          duration: 0.2,
          ease: "power1.Out",
          scale: 1 + 0.5 * intensity,
          y: -15 * intensity,
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } = dock.getBoundingClientRect();
      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.Out",
        })
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  // APP TOGGLE HANDLER
  const toogleApp = (app) => {
    if (!app.canOpen) return;

    // SPECIAL CASE → GALLERY APP → OPEN ABOUT/TAMIM
    if (app.id === "photos") {
      const tamimFolder = locations.about.children[0]; // EXACT FOLDER
      openWindow("finder", tamimFolder);
      return;
    }

    // DEFAULT BEHAVIOUR
    const win = windows[app.id];
    if (win?.isOpen) closeWindow(app.id);
    else openWindow(app.id);
  };

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              disabled={!canOpen}
              onClick={() => toogleApp({ id, name, icon, canOpen })}
            >
              <img src={icon} alt={name} loading="lazy" className={canOpen ? "" : "opacity-60"} />
            </button>
          </div>
        ))}
        <Tooltip id="dock-tooltip" place="top" className="tooltip" />
      </div>
    </section>
  );
};

export default Dock;
