import React, { useState } from "react";
import "../styles/is.css";
function InsertionSortPage(props) {
    const [requested, setRequested] = useState(() => {
        return "none";
      });
      const [array, setArray] = useState(() => {
        return "1";
      });
      const [isStarted, setIsStarted] = useState(() => {
        return false;
      });
      const [calls, setCalls] = useState(() => {
        return [];
      });
      const [callNumber, setCallNumber] = useState(() => {
        return 0;
      });
      const [iterations, setIterations] = useState(() => {
        return [];
      });
      const [itrNumber, setItrNumber] = useState(() => {
        return 0;
      });

      return (
        <div class="ismain">
          <h3>Insertion Sort:</h3>
          <br />
          <p>
            To start, please enter the array(do not include brackets and select the
            seperation character) and the solution you are looking for:
          </p>
          <input
            style={{ width: "150px" }}
            type="text"
            class="isArr"
            id="isArray"
          ></input>
          <div class="speratorSelction">
            <span>Select Array Serperator</span>
            <br />
            <form>
              <input name="select" id="select" type="radio" value=","></input>
              <span>,</span>
              <br />
              <input name="select" id="select" type="radio" value=" "></input>
              <span>Space</span>
              <br />
              <input name="select" id="select" type="radio" value=""></input>
              <span>No Space</span>
            </form>
          </div>
          <button class="resetIS" onClick={() => resetIS()}>
            Reset IS
          </button>
          <button class="startIS" onClick={() => setIsStarted(true)}>
            Start IS
          </button>
          {startIS()}
        </div>
      );

      function resetIS() {
        setIsStarted(false);
        setCalls([]);
        setIterations([]);
      }
      function getRadioOutput() {
        var elm = document.getElementsByName("select");
        for (var i = 0; i < elm.length; i++) {
          if (elm[i].checked) {
            return elm[i].value;
          }
        }
      }

      function startIS() {
        var callNum = 1;
        var itrNum = 1;
        if (isStarted === true) {
          var array = getArray().split(getRadioOutput());
          var numberedArray = [];
          array.forEach((str) => {
            numberedArray.push(parseInt(str));
          });
          insertionSort(numberedArray, 0, numberedArray.length - 1);
          return (
            <div class="isSolutions">
              <div id="isCalls" class="displaySetting">
                <div>Calls</div>
                {calls.map((call) => {
                  //setCallNumber((prevCall) => prevCall + 1);
                  return (
                    <div>
                      <span>
                        {callNum++}: {call}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div id="spacer" class="displaySetting"></div>
              <div id="isIter" class="displaySetting">
                <div>Iterations</div>
                {iterations.map((itr) => {
                  //setItrNumber((prevItr) => prevItr + 1);
                  return (
                    <div>
                      <span>
                        {itrNum++}: {itr}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      }

      function getArray() {
        if (isStarted) {
          return document.getElementById("isArray").value;
        }
      }

      function insertionSort(arr, low, high) {
        calls.push(`IS(${low},${high})`);
        iterations.push(String(arr));
      }
  }
  
  export default InsertionSortPage;