import React from "react";
import DataCard from "./DataCard";

function Feed() {
  return (
    <div className="bg-red-400 p-4 col-span-2 gap-4 xl:col-span-7">
      <div className="flex space-x-3">
        <DataCard />
        <DataCard />
        <DataCard />
      </div>
    </div>
  );
}

export default Feed;
