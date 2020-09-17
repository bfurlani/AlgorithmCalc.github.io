/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../sudo-interpretter/sudoInter.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import { highlight, languages, py } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
function SudoInterpretter(props) {
  const [codeMaps, setCodeMaps] = useState(() => {
    return new Map();
  });
  var sudoInsideFunctionKeywords = [
    "print",
    "if",
    "for",
    "while",
    "()",
    "return",
    "=",
    "==",
  ];
  var lineType;
  var currentFunctionMap = new Map();
  var currentFunctionInsideLines = [];
  const [interpreterRunning, setRunningStatus] = useState(() => {
    return false;
  });
  const [insideFunction, setInsideFunction] = useState(() => {
    return false;
  });
  const [currentFunction, setCurrentFunction] = useState(() => {
    return "";
  });
  const [sudoCode, setCode] = useState(() => {
    return `procedure_two(n):
    counter = 0
    for i=1 to n:
        counter = counter+2
    for j = floor( n/2 ) to n:
        counter = counter - 1
    return counter`;
  });
  useEffect(() => {
    if (interpreterRunning) {
      startInterpreter();
      setRunningStatus(false);
      console.log(codeMaps);
    }
    if (codeMaps.has("")) {
      codeMaps.delete("");
    }
  }, [interpreterRunning, sudoCode, codeMaps, checkLineType]);
  return (
    <>
      <div id="disclaimer" style={{ marginLeft: "10px" }}>
        <h3 style={{ position: "absolute", top: -100 }}>
          Sudo Code Interpreter
        </h3>
        <span>
          <b>
            *Sudo Code based on{" "}
            <u>
              Introduction to Algorithms <emph>Third Edition</emph>
            </u>
            <br />
            by: Thomas H. Cornmen
            <br />
            Charles E. Leiserson
            <br />
            Ronald L. Rivest
            <br />
            Clifford Stein*
          </b>
        </span>
      </div>
      <div class="editorContainer">
        <button onClick={() => setRunningStatus(true)}>
          <span style={{ fontSize: 25 }}>Run</span>
          <PlayCircleFilledIcon fontSize="40px" />
        </button>
        <Editor
          id="codeEditor"
          preClassName="line-numbers"
          value={sudoCode}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
            width: "450px",
            height: "400px",
          }}
        />
      </div>
      <div id="sudoCodeOutput">
        <span style={{ color: "cornflowerblue" }}>Output</span>
        {currentFunction}
      </div>
      <div
        style={{
          position: "absolute",
          top: "800px",
          width: "75%",
          height: "fit-content",
        }}
      >
        <h3>Python Interpreter</h3>
        <iframe
          title="pythonInterpreter"
          src="https://trinket.io/embed/python/3d8d7ce66b"
          width="100%"
          height="356"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );

  function startInterpreter() {
    var codeLines = [];
    codeLines = sudoCode.split(`\n`);
    console.log(codeLines);
    codeLines.forEach((line) => {
      if (!codeMaps.has(line)) {
        lineType = checkLineType(line);
        if (lineType === "functionHeader") {
          setCurrentFunction(line);
        } else {
          currentFunctionInsideLines.push(
            currentFunctionMap.set(line, lineType)
          );
        }
      }
      codeMaps.set(currentFunction, currentFunctionMap);
    });
  }

  function checkLineType(line) {
    if (insideFunction === false) {
      if (line.includes("):") && !line.includes(" ")) {
        return "functionHeader";
      }
    }

    if (line.includes(sudoInsideFunctionKeywords[0])) {
      return sudoInsideFunctionKeywords[0];
    } else if (line.includes(sudoInsideFunctionKeywords[1])) {
      return sudoInsideFunctionKeywords[1];
    } else if (line.includes(sudoInsideFunctionKeywords[2])) {
      return sudoInsideFunctionKeywords[2];
    } else if (line.includes(sudoInsideFunctionKeywords[3])) {
      return sudoInsideFunctionKeywords[3];
    } else if (line.includes(sudoInsideFunctionKeywords[4])) {
      return "functionCall";
    } else if (line.includes(sudoInsideFunctionKeywords[5])) {
      return sudoInsideFunctionKeywords[5];
    } else if (line.includes(sudoInsideFunctionKeywords[6])) {
      return "assignment";
    } else if (line.includes(sudoInsideFunctionKeywords[7])) {
      return "equality";
    }
  }

  function functionBuilder(functionStrings) {}
}

export default SudoInterpretter;
