import React, { useState, useEffect } from "react";
import "../sudo-interpretter/sudoInter.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import { highlight, languages, py } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
function SudoInterpretter(props) {
  const [sudoCode, setCode] = useState(() => {
    return "//Enter Code Here";
  });
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <>
      <div class="editorContainer">
        <label class="show-for-large-up">Run</label>
        <Editor
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
}

export default SudoInterpretter;
