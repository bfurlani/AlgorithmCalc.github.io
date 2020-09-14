import React from "react";
import "../styles/qs.css";
function QuickSortPage(props) {
  return (
    <div class="qsmain">
      <h3>Quick Sort:</h3>
      <br />
      <p>
        To start, please enter the array(do not include brackets and select the
        seperation character) and the solution you are looking for:
      </p>
      <input class="qsArr" id="qsArray"></input>
    </div>
  );
}

export default QuickSortPage;
