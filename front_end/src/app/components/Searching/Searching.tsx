"use client";

import React, {useState} from "react";

const javaScriptMethods: Array<string> = [
  "There are many different search methods on arrays in JavaScript:",
  "indexOf",
  "includes",
  "find",
  "findIndex"
];
const indexOfDetails: {definition: string, syntax: Array<string>, result: string} = {
    definition: "Find the index of an item in an array",
    syntax: [
      "const myArray = ['Apple', 'Banana', 'Lemon'];",
      "myArray.indexOf('Banana')"
    ],
    result: "Output: 1"
}
const includesDetails: {definition: string, syntax: Array<string>, result: string} = {
    definition: "Check if the array includes a specific item",
    syntax: [
      "const myArray = ['Apple', 'Banana', 'Lemon'];",
      "myArray.includes('Lemon')"
    ],
    result: "Output: true"
}

const Searching = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const indexOfDetailsSyntaxListItems = indexOfDetails["syntax"].map((item: string, idx: number) => <li key={idx}>{item}</li> );
  const includesDetailsSyntaxListItems = includesDetails["syntax"].map((item: string, idx: number) => <li key={idx}>{item}</li> );
  
  return (
    <div>
        <input type="checkbox" onChange={(e) => setIsCompleted(e.target.checked)}/><span>Completed?</span>
        <h2>Searching</h2>
        <div>
          <h3>{indexOfDetails["definition"]}</h3>
          <ul>{indexOfDetailsSyntaxListItems}</ul>
          <p>{indexOfDetails["result"]}</p>
        </div>
        <div>
          <h3>{includesDetails["definition"]}</h3>
          <ul>{includesDetailsSyntaxListItems}</ul>
          <p>{includesDetails["result"]}</p>
        </div>
    </div>
  );
}

export default Searching;