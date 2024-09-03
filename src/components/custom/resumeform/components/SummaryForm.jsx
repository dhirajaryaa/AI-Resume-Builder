import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import useUser from "@/hooks/useUser";
import { updateResume } from "@/redux/database/dbSlice";
import { Loader2Icon } from "lucide-react";
import { useCallback, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SummaryForm = ({ activeIndex, setEnableNext }) => {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const { isLoading } = useSelector((state) => state.db);
  const { resumeId } = useParams();
  const dispatch = useDispatch();
  const { user } = useUser();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setResumeData({ ...resumeData, [name]: value });

    const formRef = useRef(null);
  });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateResume({ resumeData, docId: resumeId, uid: user.uid }));
    activeIndex(2);
    setEnableNext(true);
    if (formRef.current) formRef.current.reset();
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
            <Input
              required
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="summary"
              id="summary"
              placeholder="Summary"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-5 mt-8">
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
      </form>
    </section>
  );
};

export default SummaryForm;
