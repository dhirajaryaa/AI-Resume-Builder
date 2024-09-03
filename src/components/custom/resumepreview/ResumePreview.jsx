import { useContext } from "react";
import {
  Education,
  PersonalDetails,
  ProfessionalExperience,
  Skills,
  Summary,
} from "./components";
import { ResumeDataContext } from "@/context/ResumeDataContext";
const ResumePreview = () => {
  const {resumeData} = useContext(ResumeDataContext);

  

  return (
    <section
      className={`shadow-lg h-full p-6 lg:p-14 border-t-8 max-w-100`}
      style={{ borderColor: resumeData?.themeColor }}
    >
      {/* personalDetails  */}
      <PersonalDetails resumeData={resumeData} />

      {/* summary */}
      <Summary summary={resumeData?.summary} />
      {/* education */}
      <Education resumeData={resumeData} />

      {/* workExperience */}
      <ProfessionalExperience resumeData={resumeData} />

      {/* skills */}
      <Skills resumeData={resumeData} />
    </section>
  );
};

export default ResumePreview;
