import useNewQuestion from "../Hooks/useNewQuestion";
const NewQuestions = () => {
  const { newProblem } = useNewQuestion();
  if (newProblem.newQuestion !== {}) {
    return (
      <>
        <div className="flex flex-col items-start justify-start w-[75rem]">
          <div>problem name : {newProblem.newQuestion.name}</div>
        </div>
      </>
    );
  }
};

export default NewQuestions;
