"use client";

const SearchingQuestion = (props: any) => {
    return (
        <div>
            <h3>{props.question["question"]}</h3>
            <input type="checkbox"/><span>{props.question["answers"]["firstAnswer"]}</span><br />
            <input type="checkbox"/><span>{props.question["answers"]["secondAnswer"]}</span>
        </div>
    );
};

export default SearchingQuestion;