// import { resumeData } from "@/data/dummyResume";
import { useEffect, useState } from "react";

const setOnStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return key;
};

const getOnStorage = (key) => {
  const resumeData = localStorage.getItem(key);
  return resumeData;
};


const updateOnStorage = (data, parent, key) => {
  const [resumeInfo, setResumeInfo] = useState();
  const { name, value } = data;
  console.log("entered",name,value);
  
  
  console.log(resumeInfo);
  

  // if (parent === "") {
  //   setResumeInfo((prev) => ({ ...prev, [name]: value }));
  // } else {
  //   setResumeInfo((prev) => {
  //     return { ...prev, parent: { ...prev.parent, [name]: key } };
  //   });
  // }

  // useEffect(() => {
  //   localStorage.setItem(key, JSON.stringify(resumeInfo));
  // }, [resumeInfo]);

  // return {
  //   resumeInfo,
  //   setResumeInfo,
  // };
};

export { setOnStorage, getOnStorage, updateOnStorage };
