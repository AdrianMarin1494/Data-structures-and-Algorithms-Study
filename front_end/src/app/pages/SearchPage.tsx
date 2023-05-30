"useClient";

import React, {useState} from "react";

import Searching from "../components/Searching/Searching";
import LinearSearch from "../components/Searching/LinearSearch/LinearSearch";
import BinarySearch from "../components/Searching/BinarySearch/BinarySearch";
import SearchingQuestions from "../components/Searching/SearchingQuestions";

const SearchPage = () => {
  const [isLinearSearchVisible, setisLinearSearchVisible] = useState(false);
  const [isBinarySearchVisible, setIsBinarySearchVisible] = useState(false);
  const [isSearchingQuestionsVisible, setSearchingQuestionsVisible] = useState(true);
  
  return (
    <div>
        <Searching />
        <button onClick={() => setisLinearSearchVisible((prevState: boolean) => !prevState)}>Show Linear Search</button>
        {isLinearSearchVisible && <LinearSearch />}
        <button onClick={() => setIsBinarySearchVisible((prevState: boolean) => !prevState)}>Show Binary Search</button>
        {isBinarySearchVisible && <BinarySearch />}
        <button onClick={() => setSearchingQuestionsVisible((prevState: boolean) => !prevState)}>Show Searching Exercises</button>
        {isSearchingQuestionsVisible && <SearchingQuestions />}
    </div>
  );
}

export default SearchPage;