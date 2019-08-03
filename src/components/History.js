import React from "react";
import { Card } from "react-bootstrap";

const Histroy = ({ feedbacks } = {}) => {
    return (
        <>
            {feedbacks.map((feedback, index) => (
                <Card className="" key={index}>
                    <Card.Title>{feedback.fullName}</Card.Title>
                    <Card.Body>
                        {feedback.email}
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}


export default Histroy;