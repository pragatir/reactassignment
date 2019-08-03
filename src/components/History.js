import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import FormField from "./FormField";

const Histroy = ({ feedbacks } = {}) => {
    return (
        <div className="container">
            <FormField formTitle={"History"} style={{ textAlign: "center" }} />
            {feedbacks.map((feedback, index) => (
                <div key={index}>
                    <Card style={{ color: "black" }}>
                        <Card.Header>{feedback.fullName}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col><b>Email:</b>{feedback.email}</Col>
                                <Col><b>Phone No: </b>{feedback.phoneNo}</Col>
                                <Col><b>Gender:</b>{feedback.gender}</Col>
                                <Col><b>Country:</b>{feedback.country}</Col>
                            </Row>
                            <Row>
                                <Col><b>Message: </b>{feedback.message}</Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                </div>
            ))}
        </div>
    )
}


export default Histroy;