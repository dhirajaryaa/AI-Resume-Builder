import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { signInGoogle } from "../redux/auth/authSlice";
import { useNavigate } from "react-router-dom";
import useUser from "@/hooks/useUser";
import Google from "../assets/google.svg"

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <section className="w-full h-screen flex items-center justify-center ">
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
          <Button onClick={() => dispatch(signInGoogle())}>
            <div className=" mx-2 drop-shadow-lg">
            
              <img src={Google} alt="Google Icon" className="w-8"/>
            </div>
            <span className="text-lg">Sign in Google</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
