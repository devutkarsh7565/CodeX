import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import LogOutButton from "./LogOutButton";
import useNewQuestion from "../Hooks/useNewQuestion";
import UserNavigate from "../Hooks/useNavigate";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useLogOut from "../Hooks/useLogOut";
const Navbar = () => {
  const { newProblem } = useNewQuestion();
  // const userUpcomingNavigate = (movieId) => {
  //   UserNavigate(movieId);
  // };
  const navigate = useNavigate();
  const { auths } = useAuth();
  const { userLogOut } = useLogOut();
  const handleUserLogOut = () => {
    userLogOut(auths.setIsAuth);
  };
  const userNavigate = () => {
    if (!auths.isAuth) {
      navigate("/login");
    } else {
      navigate(`question/${newProblem.newQuestion.name}`);
    }
  };
  return (
    <>
      <nav className="sticky w-full top-0 z-10 md:flex justify-center  bg-[#1E242A]">
        <div className="flex justify-center xl:w-[75rem] lg:w-[69rem] md:w-[70rem] items-center h-24 border-b border-green-500">
          <div className="flex justify-start items-center w-1/2 mx-10 text-4xl font-light text-white">
            Code<span className="text-[#22C55E]">X</span>
          </div>
          <div className="flex justify-evenly items-center w-1/2 text-white font-light text-xl">
            <Link to="/">Home</Link>
            {/* <Link to={`question/${newProblem.newQuestion.name}`}>
              createNotes
            </Link> */}
            <div className="text-green-500" onClick={userNavigate}>
              createNotes
            </div>
            <Link to="/notes">Notes</Link>
            <Link to="/contest">Contest</Link>

            {auths.isAuth ? (
              <button
                className="font-Raleway text-sm font-semibold py-2 bg-[#4285f4] border hover:border-[#4285f4] hover:text-[#4285f4]  hover:bg-white  px-2 mx-1  text-[#f3efef]  duration-500"
                onClick={handleUserLogOut}
              >
                SignOut
              </button>
            ) : (
              <Link
                className="font-Raleway text-sm font-semibold py-2 bg-[#4285f4] border hover:border-[#4285f4] hover:text-[#4285f4] hover:bg-white  px-2 mx-1  text-[#f3efef]  duration-500"
                to="/login"
              >
                LOGIN
              </Link>
            )}

            {/* <Link to="/login">Login</Link> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
