import React from "react";

const Education = ({ resumeData: { education, themeColor } }) => {
  return (
    <>
      <h2
        className="font-bold text-xl text-center mt-2"
        style={{ color: themeColor }}
      >Education</h2>
       <hr className='border-[1px] my-2' style={{ borderColor: themeColor }}/>
       {
        education.map((data,index)=>{
          return(
            <div key={index} className="py-2">
            <h2 className="font-bold" style={{ color: themeColor }}>
              {data.degree}
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">{data.institution}</p>
              <p className="text-sm font-semibold">
                <span>Year: </span>
                {data.yearOfCompletion}
              </p>
            </div>
                       
          </div>
          )
        })
       }
    </>
  );
};

export default Education;
