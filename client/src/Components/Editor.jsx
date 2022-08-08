import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
import "@wcj/dark-mode";
const Editor = () => {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const [dark, setDark] = useState(false);
  var num = 0;
  const handleClick = () => {
    num++;
    if (num % 2 == 0) {
      setDark(false);
    } else {
      setDark(true);
    }
  };
  // hello hello

  const color = () => {
    if (dark) {
      return "#0F3D3E";
    } else {
      return "#E8F9FD";
    }
  };

  return (
    <>
      <div>
        <dark-mode
          onclick={handleClick}
          style={{ fontSize: 20 }}
          parmanent
          light="Dark"
          dark="Dark"
        ></dark-mode>
        <CodeEditor
          value={code}
          language="cpp"
          placeholder="Please enter Your code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 20,
            backgroundColor: { color },
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
          className="w-[72rem] h-[30rem] rounded-xl border-green-500 border-2"
        />{" "}
      </div>
    </>
  );
};

export default Editor;
