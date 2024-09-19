import React from "react";
import Chart from "react-apexcharts";
export default function index({ options, series, type }) {
  return (
    <div className="p-2">
      <div id="chart">
        <Chart options={options} series={series} type={type} height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
