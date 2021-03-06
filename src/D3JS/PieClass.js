import * as React from 'react';
import * as d3 from 'd3';

const data = [25, 375, 110, 50, 75, 65, 150];

export const SimplePieChart = () => {
  const height = 400;
  const width = 400;

  let pie = d3.pie()(data);

  return (
    <svg height={height} width={width}>
      <g transform={'translate(${width / 2},${height / 2})'}>
        <Slice pie={pie} />
      </g>
    </svg>
  );
}
  const Slice = props => {
    let { pie } = props;

    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(100);

    let interpolate = d3.interpolateRgb("#EAAF79", "#BC3358");

    return pie.map((slice, index) => {
      let sliceColor = interpolate(index / (pie.length - 1));

      return <data d={arc(slice)} fill={sliceColor} />;
    });
  };
