import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import useSocket from "./Hooks/useSocket";
import LayoutWrapper from "./Components/LayoutWrapper";
import Home from "./Pages/Home";
import NewQuestions from "./Pages/NewQuestion";
import Questions from "./Pages/Questions";
import Login from "./Pages/Login";
import QuestionResults from "./Components/QuestionResults";
const socket = io.connect("http://localhost:10043");
const App = () => {
  const { getSocketData } = useSocket();
  useEffect(() => {
    getSocketData();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<LayoutWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/question/:question" element={<NewQuestions />} />
          {/* <Route path="/questions" element={<Questions />} /> */}
          <Route path="/notes" element={<Questions />}>
            <Route path=":question" element={<QuestionResults />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
