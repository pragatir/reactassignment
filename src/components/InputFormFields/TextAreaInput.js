import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";


const Input = ({ label, initialValue, setCurrentValue }) => {
    const [value, setValue] = useState(initialValue);

    const changeValue = (newValue) => {
        setCurrentValue(newValue);
        setValue(newValue)
    };

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Label>{label}</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="textarea" rows="3" onChange={(e) => changeValue(e.target.value)} />
                </Col>
            </Row>
        </Form>
    )
}


export default Input;