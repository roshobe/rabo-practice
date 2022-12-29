import React from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);

function StatisticsCards() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      yAxes: {
        ticks: {},
        grid: {
          display: false,
          drawBorder: false,
        },
      },

      xAxes: {
        ticks: {
          display: false,
        },
        grid: {
          circular: false,
          borderColor: "rgba(255, 255, 255, .2)",
          color: "rgba(255, 255, 255, .2)",
          borderDash: [5, 5],
        },
      },
    },
    layout: {
      padding: {
        right: 10,
      },
    },
  };

  //

  //

  const chart = {
    labels: [1, 2, 1, 3, 5, 4, 7],
    datasets: [
      {
        label: "",
        data: [1, 2, 1, 3, 5, 4, 7],
        backgroundColor: "rgba(101, 116, 205, 0.1)",
        borderColor: "rgba(101, 116, 205, 0.8)",
        fill: "start",
        tension: 0.4,
      },
    ],
  };

  const chart2 = {
    labels: [2, 3, 2, 9, 7, 7, 4],
    datasets: [
      {
        label: "",
        data: [2, 3, 2, 9, 7, 7, 4],
        backgroundColor: "rgba(246, 109, 155, 0.1)",
        borderColor: "rgba(246, 109, 155, 0.8)",
        fill: "start",
        tension: 0.4,
      },
    ],
  };

  const chart1 = {
    labels: [2, 5, 1, 3, 2, 6, 7],
    datasets: [
      {
        label: "",
        data: [2, 5, 1, 3, 2, 6, 7],
        backgroundColor: "rgba(246, 153, 63, 0.1)",
        borderColor: "rgba(246, 153, 63, 0.8)",
        fill: "start",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <div className="w-full max-w-3xl">
        <div className="-mx-2 md:flex">
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Users
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    3,682
                  </h3>
                  <p className="text-xs text-green-500 leading-tight">
                    ▲ 57.1%
                  </p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <Line type="line" data={chart} options={options}></Line>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Subscribers
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    11,427
                  </h3>
                  <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <Line type="line" data={chart1} options={options} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Comments
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    8,028
                  </h3>
                  <p className="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <Line type="line" data={chart2} options={options} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsCards;
