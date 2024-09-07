import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import useUser from "@/hooks/useUser";
import { updateResume } from "@/redux/database/dbSlice";
import { Loader2Icon } from "lucide-react";
import { useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PersonalDetailsForm = ({ activeIndex, setEnableNext }) => {
  const { resumeData, setResumeData } = useContext(ResumeDataContext);
  const { isLoading } = useSelector((state) => state.db);
  const { resumeId } = useParams();
  const dispatch = useDispatch();
  const { user } = useUser();

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, [name]: value },
    }));
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateResume({ resumeData, docId: resumeId, uid: user.uid }));
    // activeIndex(2);
    setEnableNext(true);
  };

  return (
    <section className="border-t-4 border-primary rounded-lg shadow-lg p-4 mt-4">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p className="text-xs text-muted-foreground ">
        Enter your personal details here. This information will be used to
        create your resume.
      </p>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              defaultValue={resumeData?.personalDetails?.firstName}
              required
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              defaultValue={resumeData?.personalDetails?.lastName}
              required
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="jobRole">Job Role</Label>
            <Input
              defaultValue={resumeData?.personalDetails?.jobRole}
              required
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="jobRole"
              id="jobRole"
              placeholder="Job Role"
            />
          </div>
          <div className="col-span-2">
            <Label htmlFor="address">Address</Label>
            <Input
              defaultValue={resumeData?.personalDetails?.address}
              required
              onChange={(e) => handleInputChange(e)}
              type="text"
              name="address"
              id="address"
              placeholder="Address"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              defaultValue={resumeData?.personalDetails?.phone}
              required
              type="text"
              name="phone"
              id="phone"
              onChange={(e) => handleInputChange(e)}
              placeholder="Phone"
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              defaultValue={resumeData?.personalDetails?.email}
              required
              type="email"
              name="email"
              id="email"
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-5 mt-8">
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

export default PersonalDetailsForm;
