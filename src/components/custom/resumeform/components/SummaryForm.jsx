import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import useUser from "@/hooks/useUser";
import { updateResume } from "@/redux/database/dbSlice";
import { Bot, Loader2Icon } from "lucide-react";
import { useCallback, useContext, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SummaryForm = ({ activeIndex, setEnableNext }) => {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const { isLoading } = useSelector((state) => state.db);
  const { resumeId } = useParams();
  const dispatch = useDispatch();
  const { user } = useUser();
  const [summary, setSummary] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateResume({ resumeData, docId: resumeId, uid: user.uid }));
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
                size="sm"
                type="button"
                variant="outline"
                className="border-primary border-2 text-primary hover:text-primary flex gap-3">
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
    </section>
  );
};

export default SummaryForm;
