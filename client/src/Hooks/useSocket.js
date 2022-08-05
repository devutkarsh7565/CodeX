import useNewQuestion from "./useNewQuestion";

import io from "socket.io-client";

const socket = io.connect("http://localhost:10043");

const useSocket = () => {
  const { newProblem } = useNewQuestion();
  const getSocketData = () => {
    socket.on("send-new-problem", (data) => {
      console.log(data);
      //   console.log(data.name);
      newProblem.setNewQuestion(data);
    });
  };

  return { getSocketData };
};

export default useSocket;
