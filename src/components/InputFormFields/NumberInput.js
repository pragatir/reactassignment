import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const phoneno = /^\d{10}$/;

const validatePhoneNumber = (input) => input.match(phoneno);

const Input = ({ label, initialValue, setCurrentValue }) => {
    const [value, setValue] = useState(initialValue);

    const changeValue = (newValue) => {
        if (validatePhoneNumber(newValue)) setCurrentValue(newValue);
        else setCurrentValue("");
        setValue(newValue)
    };

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Label>{label}</Form.Label>
                </Col>
                <Col>
                    <Form.Control type="number" placeholder={"0000000001"} onChange={(e) => changeValue(e.target.value)} />
                </Col>
            </Row>
        </Form>
    )
}


export default Input;