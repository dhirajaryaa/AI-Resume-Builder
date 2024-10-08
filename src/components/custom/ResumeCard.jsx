
import { Book } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  const navigate = useNavigate();

  const handelClick = () => {
    // dispatch(getResume({ uid: user.uid, docId: resume?.docId }));
    navigate(`/dashboard/resume/${resume?.docId}/edit`);
  };

  return (
    <div
      onClick={handelClick}
      className="flex relative items-center justify-center h-[350px] border-2 rounded-xl  transition-all  bg-secondary hover:shadow-primary border-primary hover:scale-105 cursor-pointer hover:shadow-md overflow-hidden"
    >
      <Book size={28} />
      <div className="bg-gray-200 flex-none absolute bottom-0 left-0 h-12 w-full p-2 ">
        {resume.title}
      </div>
    </div>
  );
};

export default ResumeCard;
