import {
  getDocs,
  addDoc,
  collection,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useContext } from "react";
import { FirestoreContext } from "../Provider/FirestoreProvider";
import { auth, db } from "./firebase";
const useFirestore = () => {
  const { storeQuestion, setStoreQuestion, editCode } =
    useContext(FirestoreContext);
  const addNotesData = async (data) => {
    await addDoc(collection(db, "users", auth.currentUser.uid, "questions"), {
      group: data.body.group,
      url: data.body.url,
      name: data.body.name,
      code: data.code,
      tags: data.tags,

      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
  };

  const editNotesData = async (data) => {
    const docRef = doc(db, "users", auth.currentUser.uid, "questions", data.id);

    const realData = {
      code: editCode,
      name: data.name,
      group: data.group,
      url: data.url,
      tags: data.tags,
    };

    setDoc(docRef, realData)
      .then((docRef) => {
        console.log("Entire Document has been updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    // await addDoc(collection(db, "users", auth.currentUser.uid, "questions"), {
    //   group: data.group,
    //   url: data.url,
    //   name: data.name,
    //   code: code,
    //   tags: data.tags,

    //   author: {
    //     name: auth.currentUser.displayName,
    //     id: auth.currentUser.uid,
    //   },
    // });
  };

  const getNotesData = async () => {
    let favList = [];
    const querySnapshot = await getDocs(
      collection(db, "users", auth.currentUser.uid, "questions")
    );
    querySnapshot.forEach((doc) => {
      favList.push({ ...doc.data(), id: doc.id });
      // console.log(doc.id, " => ", doc.data());
    });
    setStoreQuestion(favList);
  };
  // if (storeQuestion !== []) {
  //   console.log(`storeQuestion:${storeQuestion}`);
  // }

  const removeNotesData = async (name) => {
    try {
      await deleteDoc(
        doc(db, "users", auth.currentUser.uid, "questions", name)
      );
      console.log(`delted succesfully${name}`);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addNotesData,
    getNotesData,
    removeNotesData,
    setStoreQuestion,
    storeQuestion,
    editNotesData,
  };
};

export default useFirestore;
