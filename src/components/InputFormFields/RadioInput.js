import React, { useState } from "react";
import { Form, Row, Col, Button, ButtonGroup } from "react-bootstrap";

const Input = ({ label, initialValue, setCurrentValue, valueSet }) => {
    const [value, setValue] = useState(initialValue);
    const changeValue = (newValue) => {
        setCurrentValue(newValue);
        setValue(newValue)
    };

    return (
        <Form>
            <fieldset>
                <Row>
                    <Col>
                        <Form.Label>{label}</Form.Label>
                    </Col>
                    <Col>
                        <ButtonGroup style={{ width: "100%" }} variant="light">
                            {valueSet.map((radioLabel, i) => (
                                <Button
                                    variant={value === radioLabel ? "success" : "light"}
                                    key={i}
                                    onClick={() => changeValue(radioLabel)}
                                    active={value === radioLabel}>
                                    {radioLabel}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </Col>
                </Row>
            </fieldset>
        </Form>
    )
}


export default Input;