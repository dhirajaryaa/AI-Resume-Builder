import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import useUser from "@/hooks/useUser";
import { updateResume } from "@/redux/database/dbSlice";
import { GraduationCap, Loader2Icon } from "lucide-react";
import { useCallback, useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EducationForm = ({ activeIndex, setEnableNext }) => {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const { isLoading } = useSelector((state) => state.db);
  const { resumeId } = useParams();
  const dispatch = useDispatch();
  const { user } = useUser();
  const [education, setEducation] = useState(resumeData?.education || [{}]);

  const handleInputChange = useCallback((e, index) => {
    const { name, value } = e.target;

    setResumeData((prev) => {
      // if (!education[index]) {
      //   education[index] = {};
      // }
      education[index] = { ...education[index], [name]: value };
      return { ...prev, education };
    });
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateResume({ resumeData, docId: resumeId, uid: user.uid }));
    activeIndex(2);
    setEnableNext(true);
  };

  return (
    <section className="border-t-4 border-primary rounded-lg shadow-lg p-4 mt-4">
      <h2 className="font-bold text-lg">Education</h2>
      <p className="text-xs text-muted-foreground ">
        Add your educational background to make your resume more attractive to
        potential employers.
      </p>

      {education.map((data, index) => {
        return (
          <form onSubmit={onSubmit} key={index}>
            <div className="grid grid-cols-2 gap-4 mt-4 border-2 rounded-lg p-4">
              <div>
                <Label htmlFor="degree">Degree Title</Label>
                <Input
                  required
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  name="degree"
                  id="degree"
                  placeholder="Degree Title"
                />
              </div>
              <div>
                <Label htmlFor="yearOfCompletion">Completion Year</Label>
                <Input
                  required
                  type="number"
                  name="yearOfCompletion"
                  id="yearOfCompletion"
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Completion Year"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="institution">Institution Name</Label>
                <Input
                  required
                  onChange={(e) => handleInputChange(e, index)}
                  type="text"
                  name="institution"
                  id="institution"
                  placeholder="Institution Name"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  className="h-36"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={resumeData?.education?.description}
                  onChange={(e) => handleInputChange(e, index)}
                />
              </div>
            </div>
          </form>
        );
      })}

      {/* <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4 mt-4 border-2 rounded-lg p-4">
          <div>
            <Label htmlFor="degree">Degree Title</Label>
            <Input
              required
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="degree"
              id="degree"
              placeholder="Degree Title"
            />
          </div>
          <div>
            <Label htmlFor="yearOfCompletion">Completion Year</Label>
            <Input
              required
              type="number"
              name="yearOfCompletion"
              id="yearOfCompletion"
              onChange={(e) => handleInputChange(e)}
              placeholder="Completion Year"
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="institution">Institution Name</Label>
            <Input
              required
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="institution"
              id="institution"
              placeholder="Institution Name"
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              className="h-36"
              name="description"
              id="description"
              placeholder="Description"
              value={resumeData?.education?.description}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
      </form> */}

      <div className="flex items-center justify-between gap-5 mt-8">
        <Button
          size="sm"
          variant="outline"
          className="border-primary border-2 text-primary shadow-md hover:text-primary flex gap-3"
          type="button"
          onClick={setEducation([...education, {}])}
        >
          <GraduationCap />
          Add More Education
        </Button>
        <Button
          size="lg"
          className="flex gap-2 shadow-md"
          type="submit"
          disabled={isLoading}
          // onClick={onSubmit}
        >
          {isLoading ? <Loader2Icon className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </section>
  );
};

export default EducationForm;
