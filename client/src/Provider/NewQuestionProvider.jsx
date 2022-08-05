import { useState, createContext } from "react";

export const NewQuestionContext = createContext(null);

const NewQuestionProvider = ({ children }) => {
  const [newQuestion, setNewQuestion] = useState({});
  const newQuestionContextValue = { newQuestion, setNewQuestion };
  if (newQuestion !== {}) {
    console.log(newQuestion);
    console.log(newQuestion?.name);
  }
  return (
    <>
      <NewQuestionContext.Provider value={newQuestionContextValue}>
        {children}
      </NewQuestionContext.Provider>
    </>
  );
};

export default NewQuestionProvider;
