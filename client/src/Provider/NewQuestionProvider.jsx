import { useState, createContext } from "react";

export const NewQuestionContext = createContext(null);

const NewQuestionProvider = ({ children }) => {
  const [newQuestion, setNewQuestion] = useState({});
  const [tags, setTags] = useState([]);
  const [code, setCode] = useState("");
  const newQuestionContextValue = {
    newQuestion,
    setNewQuestion,
    tags,
    setTags,
    code,
    setCode,
  };
  // if (newQuestion !== {}) {
  //   console.log(newQuestion);
  //   console.log(newQuestion?.name);
  // }
  return (
    <>
      <NewQuestionContext.Provider value={newQuestionContextValue}>
        {children}
      </NewQuestionContext.Provider>
    </>
  );
};

export default NewQuestionProvider;
