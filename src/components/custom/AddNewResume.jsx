import { LoaderCircle, PlusSquare } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { createResume } from "@/redux/database/dbSlice";
import { useNavigate } from "react-router-dom";

const AddNewResume = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [input, setInput] = useState("");
  const { isLoading, recentDocId } = useSelector((state) => state.db);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreate = () => {
    dispatch(createResume({ title: input, uid: user.uid })).finally(() => {
      setIsOpenDialog(false);
    });
    setInput("");
  };
  // useEffect(() => {
  //   setInput("");
  //   navigate(`/dashboard/resume/${recentDocId}/edit`);
  // }, [recentDocId]);
  if (recentDocId) {
    setInput("");
    navigate(`/dashboard/resume/${recentDocId}/edit`);
  }

  return (
    <>
      <div
        onClick={() => setIsOpenDialog(true)}
        className="flex items-center justify-center h-[300px] border-2 rounded-xl hover:shadow-lg transition-all duration-200 bg-secondary border-dashed hover:scale-105 cursor-pointer"
      >
        <PlusSquare size={28} />
      </div>

      <Dialog open={isOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <span className="block">Add a title for your new Resume</span>
              <Input
                onChange={(e) => setInput(e.target.value)}
                className="my-2"
                placeholder={"Ex. Backend Developer"}
              />
            </DialogDescription>
            <div className="flex items-center gap-3 justify-end">
              <Button variant={"ghost"} onClick={() => setIsOpenDialog(false)}>
                Cancel
              </Button>

              <Button disabled={!input} onClick={onCreate}>
                {isLoading ? (
                  <LoaderCircle className="w-6 h-6 animate-spin" />
                ) : (
                  "Create"
                )}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewResume;
