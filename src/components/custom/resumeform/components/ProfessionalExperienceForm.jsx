import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import useUser from "@/hooks/useUser";
import { updateResume } from "@/redux/database/dbSlice";
import { BriefcaseBusiness, Loader2Icon } from "lucide-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProfessionalExperienceForm = ({ activeIndex, setEnableNext }) => {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const { isLoading } = useSelector((state) => state.db);
  const { resumeId } = useParams();
  const dispatch = useDispatch();
  const { user } = useUser();
  const [workExperience, setWorkExperience] = useState(
    resumeData?.workExperience || [{}]
  );

  const handleInputChange = useCallback((e, index) => {
    const { name, value } = e.target;

    setWorkExperience((prev) => {
      const newWorkExperience = [...prev];
      if (!newWorkExperience[index]) {
        newWorkExperience[index] = {};
      }
      newWorkExperience[index] = { ...newWorkExperience[index], [name]: value };
      return newWorkExperience;
    });
  });

  useEffect(() => {
    setResumeData((prev) => {
      return { ...prev, workExperience };
    });
  }, [workExperience]);

  const handleNewWorkExperience = () => {
    setWorkExperience([...workExperience, {}]);
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    console.log(resumeData);

    dispatch(updateResume({ resumeData, docId: resumeId, uid: user.uid }));
    activeIndex(3);
    setEnableNext(true);
  };

  return (
    <section className="border-t-4 border-primary rounded-lg shadow-lg p-4 mt-4">
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p className="text-xs text-muted-foreground ">
        Highlight your work experience and achievements to stand out to
        potential employers.
      </p>

      {workExperience?.map((data, index) => {
        return (
          <form onSubmit={(e) => e.preventDefault()} key={index}>
            <div className="grid grid-cols-2 gap-4 mt-4 border-2 rounded-lg p-4">
              <div>
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  value={data?.jobTitle}
                  name="jobTitle"
                  id="jobTitle"
                  placeholder="Job Title"
                />
              </div>
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  value={data?.company}
                  name="company"
                  id="company"
                  placeholder="Company Name"
                />
              </div>
              <div>
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  type="number"
                  value={data?.startDate}
                  name="startDate"
                  id="startDate"
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Start Date"
                />
              </div>
              <div>
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  type="number"
                  value={data?.endDate}
                  name="endDate"
                  id="endDate"
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="End Date"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  value={data?.location}
                  name="location"
                  id="location"
                  placeholder="Location"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="responsibilities">Responsibilities</Label>
                <Textarea
                  className="h-36"
                  name="responsibilities"
                  id="responsibilities"
                  placeholder="Responsibilities"
                  value={data?.responsibilities}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
            </div>
          </form>
        );
      })}

      <div className="flex items-center justify-between gap-5 mt-8">
        <Button
          size="sm"
          variant="outline"
          className="border-primary border-2 text-primary shadow-md hover:text-primary flex gap-3"
          type="button"
          onClick={handleNewWorkExperience}
        >
          <BriefcaseBusiness />
          Add More Experiences
        </Button>
        <Button
          size="lg"
          className="flex gap-2 shadow-md"
          type="submit"
          disabled={isLoading}
          onClick={onSubmit}
        >
          {isLoading ? <Loader2Icon className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </section>
  );
};

export default ProfessionalExperienceForm;
