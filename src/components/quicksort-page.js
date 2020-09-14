import React, { useState } from "react";
import "../styles/qs.css";
function QuickSortPage(props) {
  const [requested, setRequested] = useState(() => {
    return "none";
  });
  const [array, setArray] = useState(() => {
    return "1";
  });
  return (
    <div class="qsmain">
      <h3>Quick Sort:</h3>
      <br />
      <p>
        To start, please enter the array(do not include brackets and select the
        seperation character) and the solution you are looking for:
      </p>
      <input type="text" class="qsArr" id="qsArray"></input>
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
      <button class="startQS" onClick={() => setArray(getArray())}>
        Start QS
      </button>
    </div>
  );

  function getArray() {
    return document.getElementById("qsArray").value;
  }

  function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }
  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }
      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  }
}

export default QuickSortPage;
