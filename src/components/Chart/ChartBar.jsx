const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar h-full flex flex-col items-center relative group">
      {props.value > 0 && (
        <div className="absolute bottom-full mb-1 text-[10px] font-bold text-white -rotate-90 origin-bottom tracking-tighter whitespace-nowrap min-w-max">
          {props.value.toLocaleString("vi-VN")}
        </div>
      )}
      <div className="chart-bar__inner h-full w-full border border-[#313131] rounded-xl bg-[#c3b4f3] overflow-hidden flex flex-col justify-end z-10">
        <div
          className="chart-bar__fill bg-[#4826b9] w-full transition-all duration-300 ease-out"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label font-bold text-xs text-center mt-1">
        {props.label}
      </div>
    </div>
  );
};

export default ChartBar;
