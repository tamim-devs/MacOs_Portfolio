import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";

const ImgFile = ({ data }) => {
  return (
    <div className="w-[500px] bg-white rounded-lg shadow">

      {/* Header */}
      <div className="window-header w-full bg-white border-b flex justify-between items-center px-3 py-2 cursor-move">
        <WindowControls target="imgfile" />
        <p className="text-sm font-semibold">{data?.name}</p>
      </div>

      {/* Image */}
      <div className="p-3 flex justify-center">
        <img
          src={data?.src}
          alt={data?.name}
          className="max-h-[300px] object-contain rounded"
        />
      </div>

      {/* Description (Optional) */}
      {data?.description && (
        <div className="px-4 pb-4 text-sm whitespace-pre-line text-gray-700">
          {data.description.join("\n")}
        </div>
      )}

    </div>
  );
};

export default WindowWrapper(ImgFile, "imgfile");
