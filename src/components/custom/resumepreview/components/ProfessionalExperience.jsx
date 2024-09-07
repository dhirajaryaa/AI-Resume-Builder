import React from "react";

const ProfessionalExperience = ({ resumeData }) => {
  return (
    <>
      <h2
        className="font-bold text-xl text-center mt-2 text-primary"
        style={{ color: resumeData?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr
        className="border-[1px] my-2 border-primary"
        style={{ borderColor: resumeData?.themeColor }}
      />
      {resumeData?.workExperience &&
        resumeData?.workExperience?.map((data, index) => {
          return (
            <div key={index}>
              <h2
                className="font-bold text-lg text-primary"
                style={{ color: resumeData?.themeColor }}
              >
                {data?.jobTitle}
              </h2>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">{data.company}</p>
                <p className="text-sm font-semibold">
                  {data?.startDate} To {data?.endDate}
                </p>
              </div>
              <p className="my-2 text-sm">{data?.responsibilities}</p>
              {/* <ul className="list-disc my-2">
              {data?.responsibilities?.map((data, index) => {
                return (
                  <li key={index} className="text-sm">
                    {data}
                  </li>
                );
              })}
            </ul> */}
            </div>
          );
        })}
    </>
  );
};

export default ProfessionalExperience;
