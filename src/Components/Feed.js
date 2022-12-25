import React from "react";
import DataCard from "./DataCard";

function Feed() {
  return (
    <div className="bg-red-400 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <DataCard />
        <DataCard />
        <DataCard />
      </div>
    </div>
  );
}

export default Feed;
