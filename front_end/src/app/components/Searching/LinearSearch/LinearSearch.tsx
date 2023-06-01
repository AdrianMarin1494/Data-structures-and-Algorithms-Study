"useClient";

import React, {useState} from "react";

import LinearSearchExampleImage from "./LinearSearchExampleImage";

const linearSearchDefinition: string = "Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want";
const linearSearchExample: Array<string> = [
  "const myArr = [1, 2, 7, 8, 5]",
  "check myArr[0] if is equal to 7",
  "check myArr[1] if is equal to 7",
  "check myArr[2] if is equal to 7",
  "returns true or the index of it",
];
const linearSearchPseudocode = {
  definition: [
    "This function accepts an array and a value",
    "Loop through the array and check if the current array element is equal to the value"
  ],
  pseudocode: `
    function linearSearch(arr, val) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === val) {
              console.log(i);
              return i;
          }
      }
      console.log(-1);
      return -1;
    }
  `
}
const linearSearchBigO: Array<string> = [
  "time complexity",
  "Best case: O(1)",
  "Average: O(n)",
  "Worst case: O(n)"
]


const LinearSearch = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isExampleImageVisible, setIsExampleImageVisible] = useState(false);

  const title: string = "Linear Search";
  const linearSearchExampleListItems = linearSearchExample.map((item: string, idx: number) => <li key={idx}>{item}</li>)
  const linearSearchBigOListItems = linearSearchBigO.map((item: string, idx: number) => <li key={idx}>{item}</li>);

  const showExampleImageHandler = () => {
    setIsExampleImageVisible(prevState => !prevState)
  };

  const hideHandler = (status: boolean) => {  
    setIsExampleImageVisible(status);
    console.log("onParent");
    console.log(status);
    console.log(isExampleImageVisible);
  };

  return (
    <div>
      <h2>{title}</h2>
      <input type="checkbox" onChange={(e) => setIsCompleted(e.target.checked)} /><span>Completed?</span>
      <div>
        <h3>Linear Search definition</h3>
        <p>{linearSearchDefinition}</p>
      </div>
      <div>
        <h3>Linear Search example</h3><button onClick={showExampleImageHandler}>Show Image</button>
        <ul>{linearSearchExampleListItems}</ul>
        {isExampleImageVisible && <LinearSearchExampleImage onHide={hideHandler}/>}
      </div>
      <div>
        <h3>Linear Search Big O</h3>
        <ul>{linearSearchBigOListItems}</ul>
      </div>
    </div>
  );
}

export default LinearSearch;