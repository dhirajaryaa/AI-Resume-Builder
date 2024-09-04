import React from "react";

const Education = ({ resumeData }) => {
  return (
    <>
      <h2
        className="font-bold text-xl text-center mt-2 text-primary"
        style={{ color: resumeData?.themeColor }}
      >
        Education
      </h2>
      <hr
        className="border-[1px] my-2 border-primary"
        style={{ borderColor: resumeData?.themeColor }}
      />
      {resumeData?.education &&
        resumeData?.education.map((data, index) => {
          return (
            <div key={index} className="py-2">
              <h2
                className="font-bold text-primary"
                style={{ color: resumeData?.themeColor }}
              >
                {data?.degree}
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{data?.institution}</p>
                <p className="text-sm font-semibold">
                  <span>Year: </span>
                  {data?.yearOfCompletion}
                </p>
              </div>
              <p className="text-xs font-normal mt-2"> {data?.description}</p>
            </div>
          );
        })}
    </>
  );
};

export default Education;
