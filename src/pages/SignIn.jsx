import React from "react";
import { Button } from "@/components/ui/button";


const SignIn = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col sm:w-2/5 w-11/12 mx-auto bg-secondary p-6 rounded-xl">
        <div>
          <h1 className="text-xl font-bold text-center">
            Welcome Back to ResuCraft!
          </h1>

          <p className="text-sm text-center font-semibold text-gray-500">
            Log in to continue building your perfect resume.
          </p>
        </div>
        <div className="w-full mx-auto text-center py-6">
          <Button>
            <img
              src="https://www.svgrepo.com/show/452216/google.svg"
              alt="Google"
              className="w-8 drop-shadow-lg mx-3"
            />
            <span className="text-lg">Sign in Google</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
