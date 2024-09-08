import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import React, { useState } from "react";
import {
  PersonalDetailsForm,
  SummaryForm,
  EducationForm,
  ProfessionalExperienceForm,
  SkillsForm,
} from "./";

const ResumeForm = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(true);

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
      {activeIndex === 1 ? (
        <PersonalDetailsForm
          activeIndex={(v) => setActiveIndex(v)}
          setEnableNext={setEnableNext}
        />
      ) : null}

      {/* Summary Details  */}
      {activeIndex === 2 ? (
        <SummaryForm
          activeIndex={(v) => setActiveIndex(v)}
          setEnableNext={setEnableNext}
        />
      ) : null}

      {/* Education Details  */}

      {activeIndex === 3 ? (
        <EducationForm
          activeIndex={(v) => setActiveIndex(v)}
          setEnableNext={setEnableNext}
        />
      ) : null}

      {/* Professional Experience */}

      {activeIndex === 4 ? (
        <ProfessionalExperienceForm
          activeIndex={(v) => setActiveIndex(v)}
          setEnableNext={setEnableNext}
        />
      ) : null}

            {/* Skills */}

            {activeIndex === 5 ? (
        <SkillsForm
          activeIndex={(v) => setActiveIndex(v)}
          setEnableNext={setEnableNext}
        />
      ) : null}
    </section>
  );
};

export default ResumeForm;
