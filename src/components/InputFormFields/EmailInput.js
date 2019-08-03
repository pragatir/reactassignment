import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const emailRegex = new RegExp(/^\w+([-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);

export const emailValidator = email => {
    return emailRegex.test(email);
};

const Input = ({ label, initialValue, setCurrentValue }) => {
    const [value, setValue] = useState(initialValue);

    const changeValue = (newValue) => {
        if (emailValidator(newValue)) setCurrentValue(newValue);
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
                    <Form.Control placeholder={"abc@test.com"} onChange={(e) => changeValue(e.target.value)} value={value} />
                </Col>
            </Row>
        </Form>
    )
}


export default Input;