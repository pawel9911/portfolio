import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Dashboard;
