import React from "react";
import { locations } from "#constants";
import Welcome from "#components/Welcome";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

const Home = () => {
  const desktopFolders = locations.work.children;
  const { openWindow } = useWindowStore();
  const { setActiveLocations } = useLocationStore();

  const openFinderFolder = (folder) => {
    setActiveLocations(folder);
    openWindow("finder");
  };

  return (
    <div className="relative w-full h-full p-8 select-none bg-transparent">

      {/* Desktop Folders */}
      <div className="absolute grid grid-cols-5 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10 gap-10">
        {desktopFolders.map((folder) => (
          <div
            key={folder.id}
            onClick={() => openFinderFolder(folder)}
            className="flex flex-col items-center gap-2 cursor-pointer group"
          >
            {/* Folder Icon */}
            <div className="
              transition-all 
              group-hover:scale-110 
              group-hover:-translate-y-1 
              drop-shadow-[0_10px_8px_rgba(0,0,0,0.25)]
            ">
              <img
                src={folder.icon}
                alt={folder.name}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Folder Label */}
            <p className="
              text-[11px] 
              text-white 
              text-center 
              px-2 py-1 
              rounded-md 
              bg-black/40 
              backdrop-blur-sm 
              shadow-sm 
              group-hover:bg-black/50
            ">
              {folder.name}
            </p>
          </div>
        ))}
      </div>

      {/* Welcome floating center */}
      <div
        className="
          absolute 
          top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2
          opacity-90
          z-40
          select-auto
          pointer-events-none
        "
      >
        {/* Show only on sm+ screens */}
        <div className="pointer-events-auto select-text hidden sm:block">
          <Welcome />
        </div>
      </div>

    </div>
  );
};

export default Home;
