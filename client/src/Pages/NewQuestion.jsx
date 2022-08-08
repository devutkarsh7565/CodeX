import QuestionDetail from "../Components/QuestionDetail";
import useNewQuestion from "../Hooks/useNewQuestion";
import { BiLinkExternal } from "react-icons/bi";
import Editor from "../Components/Editor";

const NewQuestions = () => {
  const { newProblem } = useNewQuestion();
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
            <div className="my-4">
              <Editor />
            </div>
          </div>
        </div>
      </>
    );
  }
  // </div>;
};

export default NewQuestions;
