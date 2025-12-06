import React from 'react';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(props.maxValue || 0, ...dataPointValues);

  return (
    <div className='chart p-4 rounded-xl bg-[#f8dfff] text-center flex justify-around h-40 overflow-x-auto custom-scrollbar'>
      <div className='flex justify-around h-full w-full min-w-[600px]'> 
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
      </div>
    </div>
  );
};

export default Chart;
