import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserProfile } from "../index";
import useUser from "@/hooks/useUser";

const Header = () => {
  const { user } = useUser();

  return (
    <nav className="w-full shadow-lg flex items-center justify-between px-4 py-2">
      {/* logo */}
      <Link to={"/"} className="w-6 sm:w-9 gap-2 flex items-center ">
        <img src="./logo.svg" alt="Logo" />
        <span className="text-xl  sm:text-2xl  font-semibold text-primary">
          ResuCraft
        </span>
      </Link>
      {/* signin  */}
      {user ? (
        <UserProfile user={user} />
      ) : (
        <Link to={"/auth/signin"}>
          <Button>SignIn</Button>
        </Link>
      )}
    </nav>
  );
};

export default Header;
