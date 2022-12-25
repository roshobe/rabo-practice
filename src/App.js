import DashboardHeader from "./Components/DashboardHeader";
import Feed from "./Components/Feed";
import { useState } from "react";
import SideBar from "./Components/SideBar";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <DashboardHeader />
      <div className="flex">
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
