import useNewQuestion from "../Hooks/useNewQuestion";
import { useNavigate } from "react-router-dom";

import LandingPageFirst from "../Components/LandingPageFirst";
import LandingPageNotesAndContestInfo from "../Components/LandingPageNotesAndContestInfo";
const Home = () => {
  const navigate = useNavigate();
  const { newProblem } = useNewQuestion();
  if (newProblem.newQuestion !== {}) {
    navigate(`/question/${newProblem.newQuestion.name}`);
  }

  return (
    <>
      <div className="min-h-screen ">
        {" "}
        <LandingPageFirst />
        <LandingPageNotesAndContestInfo />
      </div>
    </>
  );
};

export default Home;
