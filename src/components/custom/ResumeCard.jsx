import { Book } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ResumeCard = ({ resume }) => {
  const navigate = useNavigate()
  return (
    <div
    onClick={() => navigate(`/dashboard/resume/${resume?.docId}/edit`)}
     className="flex relative items-center justify-center h-[300px] border-2 rounded-xl  transition-all  bg-secondary hover:shadow-primary border-primary hover:scale-105 cursor-pointer hover:shadow-md overflow-hidden">
      <Book size={28} />
      <div className="bg-gray-200 flex-none absolute bottom-0 left-0 h-12 w-full p-2 ">
        {resume.title}
      </div>
    </div>
  );
};

export default ResumeCard;
