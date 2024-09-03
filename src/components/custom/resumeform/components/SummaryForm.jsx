import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import useUser from "@/hooks/useUser";
import { generateWithAi } from "@/redux/ai/aiSlice";
import { updateResume } from "@/redux/database/dbSlice";
import { Bot, Loader2Icon } from "lucide-react";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SummaryForm = ({ activeIndex, setEnableNext }) => {
  const { resumeData } = useContext(ResumeDataContext);
  const { isLoading } = useSelector((state) => state.db);
  const { resumeId } = useParams();
  const dispatch = useDispatch();
  const { user } = useUser();
  const { result } = useSelector((state) => state.ai);
  const [summary, setSummary] = useState(resumeData?.summary || "");
  const prompt =
    "Generate a resume summary in 3-4 lines for a {Front End Developer} at different experience levels: beginner, intermediate, and experienced. The summaries should be in JSON or object inside on array format and include levels and a brief summary of the candidate's skills, achievements, and experience. ";

  const generateSummary = () => {
    const PROMPT = prompt.replace(
      "{Front End Developer}",
      resumeData?.jobTitle
    );
    dispatch(generateWithAi({ prompt: PROMPT }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateResume({
        resumeData: { ...resumeData, summary },
        docId: resumeId,
        uid: user.uid,
      })
    );
    activeIndex(2);
    setEnableNext(true);
  };
  return (
    <section className="border-t-4 border-primary rounded-lg shadow-lg p-4 mt-4">
      <h2 className="font-bold text-lg">Summary</h2>
      <p className="text-xs text-muted-foreground ">
        Highlight your strengths, achievements and career goals to make a
        lasting impression on potential employers.
      </p>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="col-span-2">
            <div className="flex items-center justify-between gap-4 mb-3">
              <Label htmlFor="summary">Add Summary</Label>
              <Button
                onClick={generateSummary}
                size="sm"
                type="button"
                variant="outline"
                className="border-primary border-2 text-primary hover:text-primary flex gap-3"
              >
                <Bot />
                Generate with Ai
              </Button>
            </div>
            <Textarea
              className="h-36"
              placeholder="Write Your Summary."
              defaultValue={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-5 mt-8">
          <Button
            size="lg"
            className="flex gap-2 shadow-md"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <Loader2Icon className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>

      {result && (
        <div className="w-full rounded-lg mt-4 border-2  p-4 my-3 shadow-lg">
          <h2 className="font-bold text-lg">AI Suggested Summary</h2>
          <p className="text-xs text-muted-foreground ">
            Write a compelling summary that highlights your strengths,
            achievements and career goals to make a lasting impression on
            potential employers.
          </p>
          {result.map((item,index) => {
            return (
              <div className="my-4 rounded-lg bg-secondary p-3 border-2 " key={index}>
                  <h2 className="font-semibold text-sm my-1">Level: {item?.level}</h2>
                  <p className=" text-xs">{item?.summary}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default SummaryForm;
