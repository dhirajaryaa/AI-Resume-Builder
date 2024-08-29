import { PlusSquare, SquareSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AddNewResume = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [input,setInput] = useState("");

  return (
    <div>
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
              <p>Add a title for your new Resume</p>
              <Input o className="my-2" placeholder={"Ex. Backend Developer"} />
            </DialogDescription>
            <div className="flex items-center gap-3 justify-end">
              <Button variant={"ghost"} onClick={() => setIsOpenDialog(false)}>
                Cancel
              </Button>
              <Button>Add</Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewResume;
