import { AddNewResume } from "@/components";
import useUser from "@/hooks/useUser";
import { Loader, LoaderCircle } from "lucide-react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, loading } = useUser();

  // loading state 
  if (loading) {
    return (
      <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center">
        <LoaderCircle className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  // user not login redirect to homepage 
  if (!user && loading) {
    return <Navigate to={"/"} />;
  }

  // Dashboard 
  return <main className="p-8 sm:px-10 md:px-20 lg:px-32">
    
    <h1 className="font-bold text-2xl sm:text-3xl">My Resume</h1>
    <p className="text-sm sm:text-lg text-gray-600">Start & Explore AI Resume Builder, Create Resume with AI</p>
    <section className="w-full mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
    <AddNewResume />
    </section>
  </main>;
};

export default Dashboard;
