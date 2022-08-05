import { Link } from "react-router-dom";
const LogOutButton = () => {
  return (
    <>
      <div className="w-[8rem] h-[16rem] flex flex-col justify-start items-start text-white">
        <Link className="text-white" to="/profile">
          Profile
        </Link>
        <Link to="/logout">log out</Link>
      </div>
    </>
  );
};

export default LogOutButton;
