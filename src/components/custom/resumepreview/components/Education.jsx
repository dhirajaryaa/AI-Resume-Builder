import React from "react";

const Education = ({ resumeData: { education, themeColor } }) => {
  return (
    <>
      <h2
        className="font-bold text-xl text-center"
        style={{ color: themeColor }}
      >Education</h2>
       <hr className='border-[1px] my-2' style={{ borderColor: themeColor }}/>
       {
        education.map((data)=>{
          return(
            <>
            <div> 

            </div>

            </>
          )
        })
       }
    </>
  );
};

export default Education;
