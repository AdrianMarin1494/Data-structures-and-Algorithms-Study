"use client";

import {useState} from "react";

import SearchingQuestion from "./SearchingQuestion";

const questionsAndAnswers = [
    {id: 1, question: "Is .indexOf() JavaScript method?", answers: {correctAnswer: "Yes", firstAnswer: "Yes", secondAnswer: "No"}},
    {id: 2, question: "Is .includes() JavaScript method?", answers: {correctAnswer: "firstAnswer", firstAnswer: "Yes", secondAnswer: "No"}},    
]

const SearchingQuestions = () => {
    const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);

    const test = questionsAndAnswers.map((item) => {return <SearchingQuestion key={item["id"]} question={item}/>})

    return (
        <div>
            {/* {test} */}
            <div>
                <h3>{questionsAndAnswers[0]["question"]}</h3>
                <input type="radio" id="firstAnswer" name="firstSearchingQuestion" value="1" 
                    onClick={() => setCorrectAnswersCounter(prevCounter => prevCounter + 1)}
                />
                <label htmlFor="firstAnswer">{questionsAndAnswers[0]["answers"]["firstAnswer"]}</label>
                <br />
                <input type="radio" id="secondAnswer" name="firstSearchingQuestion" value="0"
                    onClick={() => setCorrectAnswersCounter(prevCounter => prevCounter - 0)}
                />
                <label htmlFor="secondAnswer">{questionsAndAnswers[0]["answers"]["secondAnswer"]}</label>
            </div>
            <div>
                <h3>{questionsAndAnswers[1]["question"]}</h3>
                <input type="radio" id="firstAnswer" name="secondSearchingQuestion" value="1"
                    onClick={() => setCorrectAnswersCounter(prevCounter => prevCounter + 1)}
                />
                <label htmlFor="firstAnswer">{questionsAndAnswers[1]["answers"]["firstAnswer"]}</label>
                <br />
                <input type="radio" id="secondAnswer" name="secondSearchingQuestion" value="0"
                    onClick={() => setCorrectAnswersCounter(prevCounter => prevCounter - 0)}
                />
                <label htmlFor="secondAnswer">{questionsAndAnswers[1]["answers"]["secondAnswer"]}</label>
            </div>
            <p>Score: {correctAnswersCounter} ({(correctAnswersCounter / questionsAndAnswers.length) * 100}%)</p>
        </div>
    );
};

export default SearchingQuestions;