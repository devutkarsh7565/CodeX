import useAuth from "../Hooks/useAuth";
import { auth, provider } from "../Hooks/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { auths } = useAuth();
  const navigate = useNavigate();
  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("Auth", true);
      auths.setIsAuth(true);
      console.log("user login successfully");
      navigate("/");
    });
  };
  return (
    <>
      <div class="flex justify-between w-[182px] h-[42px] border-[#4285f4] border  mb-8">
        <div class=" mt-[1px] ml-[1px] w-[40px] h-[40px]  border-[#4285f4] border-b border-r bg-[#fff]">
          <img
            class=" mt-3 ml-3 w-[18px] h-[18px]"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p class="w-[141px] font-normal text-sm flex items-center pl-2 text-white cursor-pointer bg-[#4285f4] hover:text-[#4285f4] hover:bg-[white] ">
          <b onClick={signUpWithGoogle}>Sign in with google</b>
        </p>
      </div>
    </>
  );
};

export default Login;
