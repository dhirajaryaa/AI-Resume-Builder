import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import useUser from "@/hooks/useUser";
import { updateResume } from "@/redux/database/dbSlice";
import { CircleX, Loader2Icon } from "lucide-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SkillsForm = ({ activeIndex, setEnableNext }) => {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const { isLoading } = useSelector((state) => state.db);
  const { resumeId } = useParams();
  const dispatch = useDispatch();
  const { user } = useUser();
  const [skillsList, setSkillsList] = useState(resumeData.skills || [{}]);

  const handleInputChange = useCallback((e, index) => {
    const { name, value } = e.target;

    setSkillsList((prev) => {
      const newSkillsList = [...prev];
      if (!newSkillsList[index]) {
        newSkillsList[index] = {};
      }
      newSkillsList[index] = { ...newSkillsList[index], [name]: value };
      return newSkillsList;
    });
  });

  useEffect(() => {
    setResumeData((prev) => {
      return { ...prev, skills: skillsList };
    });
  }, [skillsList]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateResume({ resumeData, docId: resumeId, uid: user.uid }));
    activeIndex(5);
    setEnableNext(true);
  };

  const handleNewSkills = ()=>{
    setSkillsList((prev)=>[...prev,{}])
  }
  const handleRemoveSkills = ()=>{
    setSkillsList((prev)=>prev.slice(0,-1))
  }

  return (
    <section className="border-t-4 border-primary rounded-lg shadow-lg p-4 mt-4">
      <h2 className="font-bold text-lg">Skills</h2>
      <p className="text-xs text-muted-foreground ">
        List your skills and expertise. This information will be used to help
        you craft a compelling resume.
      </p>
      <form onSubmit={onSubmit}>
        {skillsList?.map((item, index) => (
          <div className="grid grid-cols-2 gap-4 mt-4 relative border-2 p-4 rounded-lg" key={index}>
            <div className="absolute  -top-2 -right-2">
              <Button className="rounded-full" onClick={handleRemoveSkills} variant="outline" size="xs">
                <CircleX />
              </Button>
            </div>
            <div>
              <Label htmlFor="skillsName">Skills Name</Label>
              <Input
                value={item?.skillsName}
                required
                onChange={(e) => handleInputChange(e, index)}
                type="text"
                name="skillsName"
                id="skillsName"
                placeholder="Skills Name"
              />
            </div>
            <div >
              <Label htmlFor="knowledge">Laval</Label>
              <Input
                value={item?.knowledge || 0}
                min={0}
                max={100}
                required
                onChange={(e) => handleInputChange(e, index)}
                type="range"
                name="knowledge"
                id="knowledge"
                className="accent-primary w-full"
              />
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between gap-5 mt-8">
          <Button
            size="sm"
            variant="outline"
            className="border-primary border-2 text-primary shadow-md hover:text-primary flex gap-3"
            type="button"
            onClick={handleNewSkills}
          >
            Add More Skills
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
      </form>
    </section>
  );
};

export default SkillsForm;
