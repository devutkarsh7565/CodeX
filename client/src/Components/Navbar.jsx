import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import LogOutButton from "./LogOutButton";
import useNewQuestion from "../Hooks/useNewQuestion";

const Navbar = () => {
  const { newProblem } = useNewQuestion();

  return (
    <>
      <nav className="sticky w-full top-0 z-10 md:flex justify-center  bg-[#1E242A]">
        <div className="flex justify-center xl:w-[75rem] lg:w-[69rem] md:w-[70rem] items-center h-24 border-b border-green-500">
          <div className="flex justify-start items-center w-1/2 mx-10 text-4xl font-light text-white">
            Code<span className="text-[#22C55E]">X</span>
          </div>
          <div className="flex justify-evenly items-center w-1/2 text-white font-light text-xl">
            <Link to="/">Home</Link>
            <Link to={`/question/${newProblem.newQuestion.name}`}>
              createNotes
            </Link>
            <Link to="/questions">Notes</Link>
            <Link to="/contest">Contest</Link>

            <Link to="/logout">
              <BsThreeDotsVertical />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
