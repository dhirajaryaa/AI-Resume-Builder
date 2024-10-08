import { AddNewResume, ResumeCard } from "@/components";
import useUser from "@/hooks/useUser";
import { getResumes } from "@/redux/database/dbSlice";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, loading } = useUser();
  const dispatch = useDispatch();
  const { resumes } = useSelector((state) => state.db);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserChecked, setIsUserChecked] = useState(false);

  useEffect(() => {
    // Check if user is authenticated before fetching resumes
    if (user && !resumes.length > 0) {
      setIsLoading(true);
      dispatch(getResumes({ uid: user?.uid })).finally(() => {
        setIsLoading(false); // Stop loading after the fetch is done
      });
    } else {
      setIsUserChecked(true); // User check is done
    }
  }, [user, dispatch]);

  // Show loading state while checking authentication or fetching resumes
  if (loading || isLoading) {
    return (
      <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center">
        <LoaderCircle className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  // Redirect to homepage if user is not logged in
  if (!user && isUserChecked) {
    return <Navigate to="/" />;
  }

  // Dashboard UI if user is authenticated and data is loaded
  return (
    <main className="p-8 sm:px-10 md:px-20 lg:px-32">
      <h1 className="font-bold text-2xl sm:text-3xl">My Resume</h1>
      <p className="text-sm sm:text-lg text-gray-600">
        <span>Start & Explore AI Resume Builder, Create Resume with AI</span>
      </p>
      <section className="w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AddNewResume />
        {resumes?.map((item) => (
          <ResumeCard key={item.docId} resume={item} />
        ))}
      </section>
    </main>
  );
};

export default Dashboard;
