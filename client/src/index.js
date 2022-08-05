import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import NewQuestionProvider from "./Provider/NewQuestionProvider";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NewQuestionProvider>
      {" "}
      <ChakraProvider>
        {" "}
        <App />
      </ChakraProvider>
    </NewQuestionProvider>
  </Router>
);
