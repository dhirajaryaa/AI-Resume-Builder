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

const updateOnStorage = ({ data, parent, key }) => {
  const { name, value } = data;
  const [prevData, setPrevData] = useState((prevValue = prevData));
  const [resumeInfo, setResumeInfo] = useState(() => getOnStorage(key));

  if (parent === "") {
    setResumeInfo((prev) => ({ ...prev, [name]: value }));
  } else {
    setResumeInfo((prev) => {
      return { ...prev, parent: { ...prev.parent, [name]: key } };
    });
  }

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(resumeInfo));
  }, [resumeInfo]);

  return {
    prevData,
    setPrevData,
    resumeInfo,
    setResumeInfo,
  };
};

export { setOnStorage, getOnStorage, updateOnStorage };
