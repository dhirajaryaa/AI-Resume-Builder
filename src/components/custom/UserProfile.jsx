import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogOut, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserProfile = ({ user }) => {
  return (
    <div className="flex items-center gap-4">
      <Link to={"/dashboard"}>
        <Button>DashBoard</Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-full border-2 border-primary">
            <Avatar>
              <AvatarImage src={user.photoURL} />
              <AvatarFallback className={"text-xl"}>
                {user.displayName[0]}
              </AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfile;
