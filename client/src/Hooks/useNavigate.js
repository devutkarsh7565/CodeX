import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const UserNavigate = () => {
  const navigate = useNavigate();
  const { auths } = useAuth();
  const userNavigate = (content) => {
    if (!auths.isAuth) {
      navigate("/login");
    } else {
      navigate(`/question/${content}`);
    }
  };
  return { userNavigate };
};

export default UserNavigate;
