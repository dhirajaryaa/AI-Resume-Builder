import React from "react";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const SignIn = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <Card className="w-2/5">
        <CardHeader>
          <CardTitle>Welcome Back to ResuCraft!</CardTitle>
          <CardDescription>
          Log in to continue building your perfect resume.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Input id="name" placeholder="Name of your project" />
                
              </div>
            </div>
          </form> */}
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button> */}
          <Button className={"w-10/12 mx-auto"}>Sign With Google</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SignIn;
