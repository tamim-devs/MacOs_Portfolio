import WindowControls from "#components/WindowControls";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import React from "react";

const Contact = () => {
  return (
    <div className="w-[380px] bg-white/80 backdrop-blur-xl rounded-xl shadow-lg overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200">
        <WindowControls target="contact" />
        <p className="text-sm font-medium text-gray-700">Contact</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5 text-center">

        {/* Profile Photo */}
        <img
          src="/images/tamim.png"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto ring-4 ring-gray-200 shadow-md"
        />

        <h3 className="text-2xl font-semibold text-gray-900">Let's Connect</h3>

        <p className="text-gray-600 no-underline leading-relaxed max-w-xs mx-auto">
          I work with Frontend development, MERN Stack, and React Native. I enjoy creating simple and clean web and mobile interfaces while learning and improving every day. If you have an idea or need help with a project, feel free to reach out!
        </p>

        {/* Social Buttons */}
        <ul className="flex flex-wrap justify-center gap-3 mt-2">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white  px-4 py-2 rounded-xl text- font-medium shadow 
                           hover:brightness-110 hover:scale-[1.05] transition"
                style={{ backgroundColor: bg }}
              >
                <img src={icon} alt={text} className="w-6 h-6" />
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WindowWrapper(Contact, "contact");
