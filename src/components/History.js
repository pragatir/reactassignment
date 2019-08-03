import React from "react";

const Histroy = ({ feedbacks } = {}) => {
    return (
        <>
            {feedbacks.map((feedback, index) => (
                <div id={index}>
                    {feedback}
                </div>
            ))}
        </>
    )
}


export default Histroy;