// vendor
import React, { useState } from "react";
import { Button } from "react-bootstrap";
// component
import FormField from "./FormField";
import Input from "./InputFormFields";
// styles
import "./FormWrapper.css";

const mandatoryFields = ["fullName", "email", "phoneNo", "message", "country", "gender",]

const FormWrapper = ({ formTitle, submitFeedback }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const formData = [
    { type: "simple", label: "Full Name", initialValue: fullName, setCurrentValue: setFullName, },
    { type: "email", label: "Email", initialValue: email, setCurrentValue: setEmail, },
    { type: "number", label: "Phone no", initialValue: phoneNo, setCurrentValue: setPhoneNo, },
    { type: "textArea", label: "Message", initialValue: message, setCurrentValue: setMessage, },
    {
      type: "dropdown", label: "Country", initialValue: country, setCurrentValue: setCountry, valueSet: [
        { name: "India", value: "volvo" },
        { name: "USA", value: "saab" },
        { name: "UK", value: "opel" },
        { name: "China", value: "audi" },
      ]
    },
    { type: "radio", label: "Gender", initialValue: gender, setCurrentValue: setGender, valueSet: ["Male", "Female"] },
  ];

  const form = {
    "fullName": fullName,
    "email": email,
    "phoneNo": phoneNo,
    "message": message,
    "country": country,
    "gender": gender,
  
  };

  const isValid = mandatoryFields.reduce((isValid, field) => {
    if (isValid && form[field]) return true;
    return false;
  }, true);

  const validateAndSubmit = () => {
    if (isValid) submitFeedback(form);
  };
  
  return (
      <div>
      <FormField formTitle={formTitle} />
        <br />
        <Input formData={formData} />
          <Button
          variant="success"
          type="submit"
          value="Submit"
          onClick={() => validateAndSubmit()}
          size={"md"}
          >Submit</Button>
        </div >
  );
        };

export default FormWrapper;
