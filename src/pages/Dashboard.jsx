import useUser from "@/hooks/useUser";
import { Loader, LoaderCircle } from "lucide-react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, loading } = useUser();

  if (loading) {
    console.log("rerender");

    return (
      <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center">
        <LoaderCircle className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  if (!user && loading) {
    return <Navigate to={"/"} />;
  }

  return <div>Dashboard</div>;
};

export default Dashboard;
