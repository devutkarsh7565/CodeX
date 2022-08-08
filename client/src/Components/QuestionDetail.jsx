import useNewQuestion from "../Hooks/useNewQuestion";
const QuestionDetail = () => {
  const { newProblem } = useNewQuestion();
  if (newProblem.newQuestion !== {}) {
    return (
      <>
        <div className="flex flex-col items-start justify-start w-[75rem]">
          <div className="text-white">
            problem name : {newProblem.newQuestion.name}
          </div>
        </div>
      </>
    );
  }
};

export default QuestionDetail;
