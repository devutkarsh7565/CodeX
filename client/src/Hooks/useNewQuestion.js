import { useContext } from "react";
import { NewQuestionContext } from "../Provider/NewQuestionProvider";
const useNewQuestion = () => {
  const newProblem = useContext(NewQuestionContext);
  return { newProblem };
};

export default useNewQuestion;
