import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import React, { useState } from "react";
import { PersonalDetailsForm } from "./components/personalDetailsForm";

const ResumeForm = () => {
  const [activeIndex, setActiveIndex] = useState(1);

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
