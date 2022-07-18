import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {

  return (
    <div className='chart'>
        {props.dataPoints.map((dataPoint)=>
        <ChartBar 
        key={dataPoint.id}
        value={dataPoint.value}
        maxValue={null}
        label={dataPoint.lable} />)}
    </div>
  )
}

export default Chart