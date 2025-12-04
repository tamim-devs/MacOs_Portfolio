import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";

const TxtFile = ({ data }) => {
  return (
    <div className="w-[450px] bg-white rounded-lg shadow">

      {/* HEADER: drag handle */}
      <div className="window-header w-full bg-white border-b flex justify-between items-center px-3 py-2 cursor-move">
        <WindowControls target="txtfile" />
        <p className="text-sm font-semibold">{data?.name}</p>
      </div>

      {/* CONTENT */}
      <div className="p-4 text-sm whitespace-pre-line">
        {data?.description?.join("\n")}
      </div>

    </div>
  );
};

export default WindowWrapper(TxtFile, "txtfile");
