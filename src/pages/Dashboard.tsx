import { Outlet } from "react-router-dom";
import { Header } from "@components";

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default Dashboard;
