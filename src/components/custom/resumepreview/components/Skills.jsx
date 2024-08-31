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
            className="text-sm  font-semibold flex justify-between w-full"
          >
            <p>{item.name}</p>
            <p style={{ color: themeColor }}>{item.knowledge}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
