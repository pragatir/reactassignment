// vendor
import React, { useState } from "react";
// component
import FormField from "./FormField";
import Input from "./InputFormFields";
// styles
import "./FormWrapper.css";

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
  }

  const submit = () => {
    submitFeedback(form);
  }
  return (
    <form action="#">
      <FormField formTitle={formTitle} />
      <br />
      <Input formData={formData} />
      <div className="wrapper">
        <label className="label" id="title4" htmlFor="Field4">
          Message
          </label>
        <textarea
          id="Field4"
          name="Field4"
          spellCheck="true"
          rows="10"
          cols="50"
          tabIndex="4"
        />
      </div>
      <div className="wrapper">
        <label className="label" id="title5" htmlFor="Field5">
          Country
          </label>
        <select name="states">
          <option value="volvo">India</option>
          <option value="saab">USA</option>
          <option value="opel">UK</option>
          <option value="audi">China</option>
        </select>
      </div>
      <div className="wrapper">
        <label className="label" id="title6" htmlFor="Field6">
          Gender
          </label>
        <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Female
        </div>
      <div className="wrapper submit-btn">
        <input
          id="Field7"
          name="Field7"
          type="submit"
          value="Submit"
          tabIndex="5"
        />
      </div>
    </form >
  );
};

export default FormWrapper;
