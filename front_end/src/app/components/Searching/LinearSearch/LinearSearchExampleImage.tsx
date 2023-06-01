"use client";

import LinearSearchExample from "../../../assets/LinearSearchExample.jpg";

const LinearSearchExampleImage = (props: any) => {
    const hideHandler = () => {
        props.onHide(false);
        console.log("on child")
    };
    return (

        <div style={{
            "position": "absolute", 
            "zIndex": "50", 
        }}>
            <img style={{width: "35vw", height: "30vh"}} src={LinearSearchExample.src} />
            <button onClick={hideHandler}>Hide</button>
        </div>
    );
};

export default LinearSearchExampleImage;

