import { map } from "@firebase/util";
import { useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import useFirestore from "../Hooks/useFirestore";
import { useContext } from "react";
import { FirestoreContext } from "../Provider/FirestoreProvider";
import { useNavigate, Outlet, useOutlet, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
const Questions = () => {
  const { question } = useParams();
  const { getNotesData, removeNotesData, editNotesData } = useFirestore();
  const { auths } = useAuth();
  const {
    storeQuestion,
    setStoreQuestion,
    showStoreQuestion,
    setShowStoreQuestion,
  } = useContext(FirestoreContext);
  const navigate = useNavigate();
  useEffect(() => {
    getNotesData();
  }, [auths.isAuth == true, editNotesData]);
  useEffect(() => {
    setStoreQuestion([]);
  }, [auths.isAuth == false]);
  const handleNavigate = (question) => {
    setShowStoreQuestion(question);
    navigate(`/notes/${question.name}`);
    console.log(showStoreQuestion);
  };

  const outlet = useOutlet();
  if (outlet)
    return (
      <div className="w-full h-full flex justify-center ">
        <Outlet />
      </div>
    );

  return (
    <>
      <div className="w-[72rem] flex flex-col justify-start items-center my-10">
        {storeQuestion?.map((questions, index) => (
          <div
            onClick={() => handleNavigate(questions)}
            className="flex flex-col justify-start items-start w-[69rem] border border-green-500 h-40 rounded-md drop-shadow-lg shadow-green-500 my-4"
          >
            <div className="flex justify-around items-center w-full h-20  ">
              <div className="w-1/2 flex justify-start text-3xl px-3 text-white">
                {questions.name}
              </div>
              <div className="w-1/2 flex justify-end text-white px-3">
                {questions.tags?.map((tag, index) => (
                  <div className="flex justify-start items-center mx-1 py-2 px-3 rounded-md border border-green-700 text-xl font-light text-green-500">
                    <span className="mr-1">{tag}</span>
                    <TiDelete className="text-2xl ml-1 " />
                  </div>
                ))}
                <button
                  onClick={() => removeNotesData(questions.id)}
                  className="flex justify-start items-center mx-1 py-2 px-3 rounded-md border border-red-700 text-xl font-light text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex items-center h-20 px-3 text-3xl text-green-500">
              {questions.group}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
