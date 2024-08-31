import React from "react";

const Skills = ({ resumeData: { skills, themeColor } }) => {
  return (
    <>
      <h2
        className="font-bold text-xl text-center mt-3"
        style={{ color: themeColor }}
      >
        Skills
      </h2>
      <hr className="border-[1px] my-2" style={{ borderColor: themeColor }} />
      <div className="grid grid-cols-2 gap-x-10 gap-y-3 mt-5">
        {skills.map((item, index) => (
          <div
            key={index}
            className="text-xs  font-semibold flex justify-between w-full"
          >
            <h3>{item.name}</h3>
            <div className="bg-gray-200 h-2 w-28">
              <div
                className="h-2"
                style={{
                  backgroundColor: themeColor,
                  width: item.knowledge + "%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
