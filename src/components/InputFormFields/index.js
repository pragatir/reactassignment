import React from "react";

import SimpleInput from "./SimpleInput";
import EmailInput from "./EmailInput";
import NumberInput from "./NumberInput";
import TextAreaInput from "./TextAreaInput";
import DropdownInput from "./DropdownInput";
import RadioInput from "./RadioInput";

const getInputField = (type) => {
    switch (type) {
        case "simple":
            return SimpleInput;
        case "email":
            return EmailInput;
        case "number":
            return NumberInput;
        case "textArea":
            return TextAreaInput;
        case "dropdown":
            return DropdownInput;
        case "radio":
            return RadioInput;
        default:
            return SimpleInput;
    }
}


const Input = ({ formData }) => {
    return (
        <>
            {formData.map((field, index) => {
                const Field = getInputField(field.type);
                return (
                    <div key={index}>
                        {
                            <>
                                <Field {...field} />
                                <br />
                            </>
                        }
                    </div>
                )
            })}
        </>
    );
}
export default Input;
