import { useRoutes, A } from "hookrouter";
import React from "react";
import "./styles/home.css";
import Routes from "./routes";

function App() {
  const routeResult = useRoutes(Routes);
  return (
    <div class="Nav">
      <span
        style={{
          fontSize: "35px",
          position: "absolute",
          marginLeft: "10px",
          marginTop: "10px",
        }}
      >
        Algorithm Calculator
      </span>
      <div class="NavBtns">
        <button class="homeBtn">
          <a href="/">Home</a>
        </button>
        <button
          onMouseOver={() => displayList("sortingContainer")}
          onMouseOut={() => removeListFromView("sortingContainer")}
          class="Sorting"
        >
          <span>Sorting</span>
        </button>
        <div
          id="sortingContainer"
          onMouseOver={() => displayList("sortingContainer")}
          onMouseOut={() => removeListFromView("sortingContainer")}
        >
          <button>
            <a href="/quicksort">QuickSort</a>
          </button>
          <br />
          <button>
            <a href="/mergesort">MergeSort</a>
          </button>
          <br />
          <button>
            <a href="/insertionsort">InsertionSort</a>
          </button>
          <br />
        </div>
        <button class="sudoInt">
          <a href="sudoInter">Sudo Interpretter</a>
        </button>
      </div>
      {routeResult}
    </div>
  );

  function displayList(id) {
    document.getElementById(id).style.top = "unset";
  }
  function removeListFromView(id) {
    document.getElementById(id).style.top = "-1000px";
  }
}

export default App;
