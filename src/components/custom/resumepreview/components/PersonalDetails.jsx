import React from "react";

const PersonalDetails = ({ resumeData }) => {
  const { firstName, lastName, email, phone, address, jobRole } =
    resumeData?.personalDetails || {};
  return (
    <>
      <h2
        className={`text-xl font-bold text-center`}
        style={{ color: resumeData?.themeColor }}
      >
        {firstName} {lastName}
      </h2>
      <h2 className={`text-sm font-medium text-center`}>{jobRole}</h2>
      <h2
        className="font-medium text-xs text-center"
        style={{ color: resumeData?.themeColor }}
      >
        {address}
      </h2>
      <div
        className="flex items-center justify-between pt-3"
        style={{ color: resumeData?.themeColor }}
      >
        <h3 className="font-medium text-sm">{phone}</h3>
        <h3 className="font-medium text-sm">{email}</h3>
      </div>
      <hr
        className="border-[2px] mt-6"
        style={{ borderColor: resumeData?.themeColor }}
      />
    </>
  );
};

export default PersonalDetails;