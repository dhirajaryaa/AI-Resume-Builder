import { ResumeForm, ResumePreview } from "@/components";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import useUser from "@/hooks/useUser";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

const EditResume = () => {
  const { user, loading } = useUser();
  const { resumes } = useSelector((state) => state.db);
  const [resumeData, setResumeData] = useState(null);
  const { resumeId } = useParams();

  useEffect(() => {
    if (!resumeData) {
      const data = resumes?.filter((data) => data.docId === resumeId)[0] || {}
      console.log(data);
      
      setResumeData(data);
    }
  }, [resumeData]);

  if (loading) {
    return (
      <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center">
        <LoaderCircle className="w-12 h-12 animate-spin" />
      </div>
    );
  }

  if (!user && !loading) {
    return <Navigate to="/" replace />;
  }

  return (
    <ResumeDataContext.Provider value={{ resumeData, setResumeData }}>
      <main className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
        {/* Resume Form section  */}
        <ResumeForm />

        {/* Resume Preview section  */}
        <ResumePreview />
      </main>
    </ResumeDataContext.Provider>
  );
};

export default EditResume;
