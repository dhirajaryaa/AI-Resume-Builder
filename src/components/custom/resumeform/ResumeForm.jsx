import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { PersonalDetailsForm } from "./components/personalDetailsForm";
import { resumeData} from "@/data/dummyResume";

const ResumeForm = ({resumeData}) => {
  
  const [activeIndex, setActiveIndex] = useState(1);
  // const [resumeData,setResumeData] = useState(data)
  

  return (
    <section>
      <div className="flex items-center justify-between">
        <Button variant="secondary" size="sm" className="flex gap-2 shadow-md">
          <LayoutGrid /> Theme
        </Button>

        <div className="flex gap-3">
          {activeIndex > 1 && (
            <Button
              size="sm"
           
              onClick={() => setActiveIndex((prev) => prev - 1)}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            size="sm"
            className="flex gap-2"
            onClick={() => setActiveIndex((prev) => prev + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>

{/* Personal Details  */}
<PersonalDetailsForm />

    </section>
  );
};

export default ResumeForm;
