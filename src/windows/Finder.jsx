import React from "react";
import WindowControls from "#components/WindowControls";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = ({ data }) => {
  const { activeLocation, setActiveLocations } = useLocationStore();
  const { openWindow } = useWindowStore();

  // ⭐ FIX: Finder opens with specific location (from Dock)
  React.useEffect(() => {
    if (data) {
      setActiveLocations(data); // open Tamim directly
    }
  }, [data]);

  const openItem = (item) => {
    if (item.kind === "folder") {
      return setActiveLocations(item);
    }
    if (item.fileType === "pdf") return openWindow("resume", item);
    if (item.fileType === "txt") return openWindow("txtfile", item);
    if (item.fileType === "img") return openWindow("imgfile", item);
    if (item.fileType === "url" && item.href) return window.open(item.href, "_blank");
  };

  const renderListSection = (name, items) => (
    <div className="w-full">
      {name && <h3 className="text-sm font-bold text-gray-700 px-6 pt-6">{name}</h3>}
      <ul className="flex flex-col px-6 gap-1">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocations(item)}
            className={clsx(
              "cursor-pointer rounded-md px-2 py-2 transition flex items-center gap-2",
              item.id === activeLocation?.id ? "bg-blue-100 text-blue-800" : "hover:bg-gray-200"
            )}
          >
            <img src={item.icon} alt={item.name} className="w-5" />
            <p className="text-sm font-medium">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="window-header bg-white flex flex-col border-b-2 border-gray-300 rounded-t-md">
      {/* Top bar */}
      <div className="flex justify-between items-center px-3 py-2">
        <WindowControls target="finder" />
        <Search className="text-xl" />
      </div>

      {/* Main */}
      <div className="flex w-full h-full bg-white py-4">
        {/* Sidebar */}
        <div className="sidebar w-[230px] border-r border-gray-300 flex flex-col">
          {renderListSection("Favorites", Object.values(locations))}
          {renderListSection("My Projects", locations.work.children)}
        </div>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-4 gap-6 p-6">
          {activeLocation?.children?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition"
              onClick={() => openItem(item)}
            >
              <img src={item.icon} className="w-14" />
              <p className="text-xs text-gray-800 text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WindowWrapper(Finder, "finder");
