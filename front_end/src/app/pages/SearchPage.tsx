"useClient";

import React, {useState} from "react";

import Searching from "../components/Searching/Searching";
import LinearSearch from "../components/Searching/LinearSearch/LinearSearch";
import BinarySearch from "../components/Searching/BinarySearch/BinarySearch";
import SearchingExercises from "../components/Searching/SearchingExercises";

const SearchPage = () => {
  const [isLinearSearchVisible, setisLinearSearchVisible] = useState(false);
  const [isBinarySearchVisible, setIsBinarySearchVisible] = useState(false);
  const [isSearchingExercisesVisible, setIsSearchingExercisesVisible] = useState(false);
  
  return (
    <div>
        <Searching />
        <button onClick={() => setisLinearSearchVisible((prevState: boolean) => !prevState)}>Show Linear Search</button>
        {isLinearSearchVisible && <LinearSearch />}
        <button onClick={() => setIsBinarySearchVisible((prevState: boolean) => !prevState)}>Show Binary Search</button>
        {isBinarySearchVisible && <BinarySearch />}
        <button onClick={() => setIsSearchingExercisesVisible((prevState: boolean) => !prevState)}></button>
    </div>
  );
}

export default SearchPage;