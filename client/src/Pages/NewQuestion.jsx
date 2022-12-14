import QuestionDetail from "../Components/QuestionDetail";
import useNewQuestion from "../Hooks/useNewQuestion";
import { BiLinkExternal } from "react-icons/bi";
import Editor from "../Components/Editor";
import useFirestore from "../Hooks/useFirestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewQuestions = () => {
  const { newProblem } = useNewQuestion();
  const { addNotesData } = useFirestore();
  const obj = {
    body: newProblem.newQuestion,
    tags: newProblem.tags,
    code: newProblem.code,
  };
  const storeQuestion = () => {
    addNotesData(obj);
    toast.success("🦄 Saved Sucessfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (newProblem.newQuestion !== {}) {
    return (
      <>
        <div className="min-h-screen">
          <div className="flex flex-col items-start justify-start w-[72rem]">
            <div className="text-green-500 text-3xl m-4 mt-8 ">
              {newProblem.newQuestion.group}
            </div>
            <div className="text-white text-5xl m-4">
              Problem Name - {newProblem.newQuestion.name}
            </div>
            <div className="flex justify-start items-center m-4">
              <h1 className="text-white text-2xl mx-2">Problem Link</h1>
              <a
                href={newProblem.newQuestion.url}
                className="text-green-500 text-3xl"
              >
                <BiLinkExternal />
              </a>
            </div>
            <div className="my-4 flex flex-col justify-start items-end">
              <Editor />
              <button
                className="py-2 px-3 rounded-md text-green-500 border border-green-500 text-xl font-light mr-2 focus:bg-black"
                onClick={storeQuestion}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </>
    );
  }
  // </div>;
};

export default NewQuestions;
