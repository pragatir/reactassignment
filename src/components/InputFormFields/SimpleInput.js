import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";


const Input = ({ label, initialValue, changeInput }) => {
    const [value, setValue] = useState(initialValue);
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Label>{label}</Form.Label>
                </Col>
                <Col>
                    <Form.Control placeholder={value} changeInput={setValue(value)} />{value}
                </Col>
            </Row>
        </Form>
    )
}


export default Input;