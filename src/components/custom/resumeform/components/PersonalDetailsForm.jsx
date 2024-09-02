import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ResumeDataContext } from "@/context/ResumeDataContext";
import { Loader2Icon} from "lucide-react";
import { useContext } from "react";
import { useSelector } from "react-redux";
export const PersonalDetailsForm = () => {
  const { setResumeData } = useContext(ResumeDataContext);
  const { isLoading } = useSelector((state) => state.db);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, [name]: value },
    }));
  };

  return (
    <section className="border-t-4 border-primary rounded-lg shadow-lg p-4 mt-4">
      <h2 className="font-bold text-lg">Personal Details</h2>
      <p className="text-xs text-muted-foreground ">
        Enter your personal details here. This information will be used to
        create your resume.
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input
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
          >
            {
          isLoading ?
          <Loader2Icon className="animate-spin"/>:"Save"
          }
          </Button>
        </div>
      </form>
    </section>
  );
};
