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

const UserProfile = ({ user }) => {
  return (
    <div className="flex items-center gap-4">
      <Link to={"/dashboard"}>
        <Button>DashBoard</Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-full p-1 border-2 border-primary">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-12 h-12 rounded-full"
            />
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
