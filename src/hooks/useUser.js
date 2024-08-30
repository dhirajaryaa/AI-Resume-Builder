import { auth } from "@/firebase/firebase";
import { checkAuth } from "@/redux/auth/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start loading when setting up the listener
    
    if (!user) {
      setLoading(true);
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        // Dispatch action to check user authentication status
        dispatch(checkAuth(currentUser)).finally(() => {
          setLoading(false); // Stop loading after the check is done
        });
      });
      // Cleanup subscription on component unmount
    return () => unsubscribe();
    }

  }, [dispatch]);

  return { user, loading };
};

export default useUser;
