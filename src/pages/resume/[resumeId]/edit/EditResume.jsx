import { ResumeForm, ResumePreview } from "@/components";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import { resumeData as data } from "@/data/dummyResume";
import { useEffect, useState } from "react";

const EditResume = () => {
  const [resumeData, setResumeData] = useState();
  useEffect(() => {
    setResumeData(data);
  }, []);

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
