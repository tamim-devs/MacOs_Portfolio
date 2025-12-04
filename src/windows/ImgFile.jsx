import React, { useState } from "react";
import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";

const ImgFile = ({ data }) => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <div className="w-[500px] bg-white rounded-lg shadow">

      {/* Header with Zoom Buttons */}
      <div className="window-header w-full bg-white border-b flex justify-between items-center px-3 py-2 cursor-move">
        <WindowControls target="imgfile" />

        {/* Name + Zoom Controls */}
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold">{data?.name}</p>

          {/* Zoom Buttons */}
          <div className="flex gap-1 ml-2">
            <button
              onClick={zoomOut}
              className="px-1 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              title="Zoom Out"
            >
              ➖
            </button>
            <button
              onClick={resetZoom}
              className="px-1 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              title="Reset Zoom"
            >
              🔄
            </button>
            <button
              onClick={zoomIn}
              className="px-1 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              title="Zoom In"
            >
              ➕
            </button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="p-20 overflow-auto  flex justify-center">
        <img
          src={data?.src}
          alt={data?.name}
          className="max-h-[300px] object-contain rounded transition-transform duration-300"
          style={{ transform: `scale(${zoom})` }}
        />
      </div>

      {/* Description */}
      {data?.description && (
        <div className="px-4 pb-4 text-sm whitespace-pre-line text-gray-700">
          {data.description.join("\n")}
        </div>
      )}

    </div>
  );
};

export default WindowWrapper(ImgFile, "imgfile");
