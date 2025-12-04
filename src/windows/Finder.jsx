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

  React.useEffect(() => {
    if (data) {
      setActiveLocations(data);
    }
  }, [data]);

  const openItem = (item) => {
    if (item.kind === "folder") return setActiveLocations(item);
    if (item.fileType === "pdf") return openWindow("resume", item);
    if (item.fileType === "txt") return openWindow("txtfile", item);
    if (item.fileType === "img") return openWindow("imgfile", item);
    if (item.fileType === "url" && item.href) return window.open(item.href, "_blank");
  };

  const renderListSection = (name, items) => (
    <div className="w-full">
      {name && <h3 className="text-sm font-bold text-gray-700 px-4 pt-4">{name}</h3>}
      <ul className="flex flex-col px-4 gap-1">
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocations(item)}
            className={clsx(
              "cursor-pointer rounded-md px-2 py-2 transition flex items-center gap-2",
              item.id === activeLocation?.id
                ? "bg-blue-100 text-blue-800"
                : "hover:bg-gray-200"
            )}
          >
            <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="window-header bg-white flex flex-col border-b-2 border-gray-300 rounded-t-md h-full">
      {/* Top bar */}
      <div className="flex justify-between items-center px-3 py-2">
        <WindowControls target="finder" />
        <Search className="text-xl" />
      </div>

      {/* Main */}
      <div className="flex w-full h-full bg-white py-4 flex-col md:flex-row">
        {/* Sidebar */}
        <div className="sidebar w-full md:w-[230px] border-r border-gray-300 flex flex-col flex-shrink-0 overflow-y-auto max-h-[calc(100vh-60px)] mb-4 md:mb-0">
          {renderListSection("Favorites", Object.values(locations))}
          {renderListSection("My Projects", locations.work.children)}
        </div>

        {/* Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-4 overflow-y-auto max-h-[calc(100vh-60px)]">
          {activeLocation?.children?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition"
              onClick={() => openItem(item)}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-md border border-gray-300 object-contain"
              />
              <p className="text-xs sm:text-sm text-gray-800 text-center truncate w-full">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WindowWrapper(Finder, "finder");
