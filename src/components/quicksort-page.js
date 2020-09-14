import React, { useState } from "react";
import "../styles/qs.css";
function QuickSortPage(props) {
  const [requested, setRequested] = useState(() => {
    return "none";
  });
  const [array, setArray] = useState(() => {
    return "1";
  });
  const [qsStarted, setQsStarted] = useState(() => {
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
    <div class="qsmain">
      <h3>Quick Sort:</h3>
      <br />
      <p>
        To start, please enter the array(do not include brackets and select the
        seperation character) and the solution you are looking for:
      </p>
      <input
        style={{ width: "150px" }}
        type="text"
        class="qsArr"
        id="qsArray"
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
      <button class="resetQS" onClick={() => resetQS()}>
        Reset QS
      </button>
      <button class="startQS" onClick={() => setQsStarted(true)}>
        Start QS
      </button>
      {startQS()}
    </div>
  );

  function resetQS() {
    setQsStarted(false);
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

  function startQS() {
    var callNum = 1;
    var itrNum = 1;
    if (qsStarted === true) {
      var array = getArray().split(getRadioOutput());
      quickSort(array, 0, array.length - 1);
      return (
        <div class="qsSolutions">
          <div id="qsCalls" class="displaySetting">
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
          <div id="qsIter" class="displaySetting">
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
    if (qsStarted) {
      return document.getElementById("qsArray").value;
    }
  }

  // function quickSort(origArray) {
  //   if (origArray.length <= 1) {
  //     return origArray;
  //   } else {
  //     var left = [];
  //     var right = [];
  //     var newArray = [];
  //     var pivot = origArray.pop();
  //     var length = origArray.length;

  //     for (var i = 0; i < length; i++) {
  //       if (origArray[i] <= pivot) {
  //         left.push(origArray[i]);
  //       } else {
  //         right.push(origArray[i]);
  //       }
  //     }

  //     return newArray.concat(quickSort(left), pivot, quickSort(right));
  //   }
  // }

  function partition(arr, low, high) {
    calls.push(`P(${low},${high})`);
    var i = low - 1;
    var pivot = arr[high];
    for (var j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i = i + 1;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  function quickSort(arr, low, high) {
    calls.push(`QS(${low},${high})`);
    iterations.push(String(arr));
    if (low < high) {
      var pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
}

export default QuickSortPage;
