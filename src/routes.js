import React from "react";

import MergeSortPage from "./components/mergesort-page";
import QuickSortPage from "./components/quicksort-page";
import Home from "./components/home";

const routes = {
  "/": () => <Home />,
  "/quicksort": () => <QuickSortPage />,
  "/mergesort": () => <MergeSortPage />,
  "/heapsort": () => <MergeSortPage />,
};

export default routes;
