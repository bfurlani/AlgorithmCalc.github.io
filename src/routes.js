import React from "react";

import MergeSortPage from "./components/mergesort-page";
import QuickSortPage from "./components/quicksort-page";
import Home from "./components/home";
import InsertionSortPage from "./components/insertionsort-page";

const routes = {
  "/": () => <Home />,
  "/quicksort": () => <QuickSortPage />,
  "/mergesort": () => <MergeSortPage />,
  "/heapsort": () => <MergeSortPage />,
  "/insertionsort": () => <InsertionSortPage />,
};

export default routes;
