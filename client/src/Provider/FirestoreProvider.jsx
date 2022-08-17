import { createContext, useState } from "react";
export const FirestoreContext = createContext(null);

const FirestoreProvider = ({ children }) => {
  const [storeQuestion, setStoreQuestion] = useState([]);
  const [showStoreQuestion, setShowStoreQuestion] = useState();
  const [edit, setEdit] = useState(false);
  const [editCode, setEditCode] = useState();
  const favouriteValue = {
    setStoreQuestion,
    storeQuestion,
    showStoreQuestion,
    setShowStoreQuestion,
    edit,
    setEdit,
    editCode,
    setEditCode,
  };
  return (
    <>
      <FirestoreContext.Provider value={favouriteValue}>
        {children}
      </FirestoreContext.Provider>
    </>
  );
};

export default FirestoreProvider;
