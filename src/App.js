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
        <button class>
          <a href="/">Home</a>
        </button>
        <button>
          <a href="/quicksort">QuickSort</a>
        </button>
        <button>
          <a href="/mergesort">MergeSort</a>
        </button>
        <button>
          <a href="/insertionsort">InsertionSort</a>
        </button>
      </div>
      {routeResult}
    </div>
  );
}

export default App;
