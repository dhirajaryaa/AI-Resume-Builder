import React from "react";

const ProfessionalExperience = ({
  resumeData: { workExperience, themeColor },
}) => {
  return (
    <>
      <h2
        className="font-bold text-xl text-center"
        style={{ color: themeColor }}
      >
        Professional Experience
      </h2>
      <hr className="border-[1px] my-2" style={{ borderColor: themeColor }} />
      {workExperience.map((data, index) => {
        return (
          <div key={index}>
            <h2 className="font-bold text-lg" style={{ color: themeColor }}>
              {data.jobTitle}
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{data.company}</p>
              <p className="text-sm font-semibold">
                {data.startDate} To {data.endDate}
              </p>
            </div>
            <ul className="list-disc my-2">
              {data.responsibilities.map((data, index) => {
                return (
                  <li key={index} className="text-sm">
                    {data}
                  </li>
                );
              })}
            </ul>
            
          </div>
        );
      })}
    </>
  );
};

export default ProfessionalExperience;
