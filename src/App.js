import DashboardHeader from "./Components/DashboardHeader";
import Feed from "./Components/Feed";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div>
      <DashboardHeader />

      <div className="h-screen grid grid-cols-1 md:grid-cols-4 md:max-w-full xl:grid-cols-8   mx-auto">
        <div className="h-full hidden col-span-1 min-w-fit md:inline-grid   bg-slate-700 rounded-xl p-5">
          <SideBar />
          SideBar
        </div>
        <Feed className="bg-red-400" />
      </div>
    </div>
  );
}

export default App;
