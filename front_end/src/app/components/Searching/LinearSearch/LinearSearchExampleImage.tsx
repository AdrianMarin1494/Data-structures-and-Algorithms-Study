"use client";

import LinearSearchExample from "../../../assets/LinearSearchExample.jpg";

const LinearSearchExampleImage = () => {
    return (

        <div style={{
            "position": "absolute", 
            "zIndex": "50", 
            "paddingLeft": "10vw",
        }}>
            <img style={{width: "35vw", height: "30vh"}} src={LinearSearchExample.src} />
        </div>
    );
};

export default LinearSearchExampleImage;