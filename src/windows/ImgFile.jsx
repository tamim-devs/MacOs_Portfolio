import React, { useState } from "react";
import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";

const ImgFile = ({ data }) => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));
  const resetZoom = () => setZoom(1);

  return (
    <div
      className="
        w-full 
        max-w-[95vw]           /* MOBILE FULL WIDTH */
        sm:max-w-[600px]       /* TABLET */
        md:max-w-[700px]       /* DESKTOP */
        bg-white rounded-lg shadow
        flex flex-col
      "
    >

      {/* Header */}
      <div className="window-header w-full bg-white border-b flex justify-between items-center px-3 py-2 cursor-move">
        <WindowControls target="imgfile" />

        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold truncate max-w-[120px] sm:max-w-[200px]">
            {data?.name}
          </p>

          {/* Zoom Buttons */}
          <div className="flex gap-1 ml-2">
            <button
              onClick={zoomOut}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              title="Zoom Out"
            >
              ➖
            </button>
            <button
              onClick={resetZoom}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              title="Reset Zoom"
            >
              🔄
            </button>
            <button
              onClick={zoomIn}
              className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
              title="Zoom In"
            >
              ➕
            </button>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div
        className="
          p-3 sm:p-6 md:p-10
          overflow-auto 
          flex justify-center items-center
          max-h-[70vh]     /* Prevent window overflow */
        "
      >
        <img
          src={data?.src}
          alt={data?.name}
          className="
            max-h-[60vh]
            w-auto
            object-contain 
            rounded 
            transition-transform duration-300
          "
          style={{ transform: `scale(${zoom})` }}
        />
      </div>

      {/* Optional Description */}
      {data?.description && (
        <div className="px-4 pb-4 text-sm whitespace-pre-line text-gray-700">
          {data.description.join("\n")}
        </div>
      )}

    </div>
  );
};

export default WindowWrapper(ImgFile, "imgfile");
