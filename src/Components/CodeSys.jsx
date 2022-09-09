import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const CodeSys = (props) => {
  const { codeTypes, setCodeType } = props;

  const [buttonClicked, setClikedButton] = useState(false);
  const [type, setType] = useState("");
  const [typeValue, setTypeValue] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [codes, setCodes] = useState([]);

  const handleClick = (value) => {
    setType(value.type);
    setTypeValue(value.values);
    setClikedButton(true);
    setCodeType("0");
  };

  const handleValueButtons = (value) => {
    setInputValue((prev) => prev + value);
  };

  const handleAddNewButton = () => {
    if (inputValue) {
      setClikedButton(false);
      setCodes((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleClear = () => {
    setInputValue("");
    setClikedButton(false);
  };

  return (
    <div className="p-5">
      <h2>Create New Code</h2>
      {!buttonClicked ? (
        <div className="d-flex">
          {codeTypes.map((value) => (
            <Button
              onClick={() => handleClick(value)}
              className="m-3"
              variant="primary"
            >
              Code:{value.type}
            </Button>
          ))}
        </div>
      ) : (
        <>
          <p>Code Type :{type}</p>
          <p>
            Code so far :
            <input
              type="text"
              style={{ border: "none" }}
              defaultValue={inputValue}
            />
          </p>
          <div>
            {typeValue.map((e) => (
              <Button
                className="m-3"
                variant="warning"
                onClick={() => handleValueButtons(e)}
              >
                {e}
              </Button>
            ))}
            <div>
              <Button className="m-3" onClick={handleAddNewButton}>
                {" "}
                Add New Code
              </Button>
              <Button className="m-3" onClick={handleClear}>
                Clear Code
              </Button>
            </div>
          </div>
        </>
      )}

      <div>
        <h2>List of Codes Created</h2>
        {codes.map((code) => (
          <li>{code}</li>
        ))}
      </div>
    </div>
  );
};

export default CodeSys;
