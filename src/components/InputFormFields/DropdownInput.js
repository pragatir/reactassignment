import React from "react";
import { Form, Row, Col } from "react-bootstrap";


const Input = ({ label, initialValue, setCurrentValue, valueSet }) => {

    return (
        <Form>
            <Row>
                <Col>
                    <Form.Label>{label}</Form.Label>
                </Col>
                <Col>
                    <Form.Control as="select" onChange={(e) => setCurrentValue(e.target.value)}>
                        {valueSet.map(({ name, value }, i) => (
                            <option key={i} value={value}>{name}</option>
                        ))}
                    </Form.Control>
                </Col>
            </Row>
        </Form>
    )
}


export default Input;