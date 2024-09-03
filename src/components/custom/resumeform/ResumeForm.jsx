import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import React, { useState } from "react";
import { PersonalDetailsForm } from "./components/personalDetailsForm";

const ResumeForm = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);

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
              disabled={!enableNext}
            >
              <ArrowLeft />
            </Button>
          )}
          <Button
            size="sm"
            className="flex gap-2"
            onClick={() => setActiveIndex((prev) => prev + 1)}
            disabled={!enableNext}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>

      {/* Personal Details  */}
      <PersonalDetailsForm activeIndex={(v) => setActiveIndex(v)} setEnableNext={setEnableNext} />
    </section>
  );
};

export default ResumeForm;
