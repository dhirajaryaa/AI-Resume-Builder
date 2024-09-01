import { ResumeForm, ResumePreview } from "@/components";
import { getOnStorage, setOnStorage } from "@/hooks/useLocalStorage";
import React, { useEffect, useState } from "react";
import { resumeData as data } from "@/data/dummyResume";

const EditResume = () => {
  useEffect(() => {
    setOnStorage("resumeData", data);
  }, []);
  const [resumeData, setResumeInfo] = useState(getOnStorage("resumeData"));

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8">
      {/* Resume Form section  */}
      <ResumeForm resumeData={resumeData} />

      {/* Resume Preview section  */}
      <ResumePreview resumeData={resumeData} />
    </main>
  );
};

export default EditResume;
