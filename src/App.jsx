import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import CodeSys from "./Components/CodeSys";

function App() {
  const [codeType, setCodeType] = useState("-1");
  const intialValue = [
    {
      type: "ABC123",
      values: ["A", "B", "C", "1", "2", "3"],
    },
    {
      type: "0-9",
      values: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    {
      type: "MN012",
      values: ["M", "N", "0", "1", "2"],
    },
  ];
  return (
    <>
      <CodeSys
        codeType={codeType}
        setCodeType={setCodeType}
        codeTypes={intialValue}
      />
    </>
  );
}

export default App;
