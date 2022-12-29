import React from "react";
import DataCard from "./DataCard";
import MyChart from "./MyChart";
import StatisticsCards from "./StatisticsCards";

function Feed() {
  const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    price: {
      current: 2.32,
      open: 2.23,
      low: 2.215,
      high: 2.325,
      cap: 93765011,
      ratio: 20.1,
      dividend: 1.67,
    },
    chartData: {
      labels: [
        "10:00",
        "",
        "",
        "",
        "12:00",
        "",
        "",
        "",
        "2:00",
        "",
        "",
        "",
        "4:00",
      ],
      data: [
        2.23, 2.215, 2.22, 2.25, 2.245, 2.27, 2.28, 2.29, 2.3, 2.29, 2.325,
        2.325, 2.32,
      ],
    },
  };

  return (
    <div className="bg-[#263159] p-2 w-screen space-y-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-y-4 ">
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
        <DataCard />
      </div>
      <div className="p-4">
        <MyChart info={data} />
      </div>
      <div className="p-4">
        <StatisticsCards />
      </div>
    </div>
  );
}

export default Feed;
