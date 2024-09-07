// import { resumeData } from "@/data/dummyResume";
import React from "react";

const Skills = ({ resumeData }) => {

  return (
    <>
      <h2
        className="font-bold text-xl text-center mt-3 text-primary"
        style={{ color: resumeData?.themeColor }}
      >
        Skills
      </h2>
      <hr
        className="border-[1px] my-2 border-primary"
        style={{ borderColor: resumeData?.themeColor }}
      />
      <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-5 items-center">
        {resumeData?.skills&&resumeData?.skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="text-xs  font-semibold flex justify-between w-full"
            >
              <h3>{skill?.name}</h3>

              <div className="bg-gray-200 h-2 w-28">
                <div
                  className="h-2"
                  style={{
                    width: skill?.knowledge,
                    backgroundColor: resumeData?.themeColor,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
