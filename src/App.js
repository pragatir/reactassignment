import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import FormWrapper from "./components/FormWrapper";
import NavBar from "./components/NavBar";
import History from "./components/History";

const formTitle = "Enquiry Form";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      "fullName": "Ritesh Firodiya",
      "email": "firodiya.ritesh@gmail.com",
      "phoneNo": "9226737797",
      "message": "Hi Globant!, this is sample initial mock data 1",
      "country": "India",
      "gender": "Male",
    },
    {
      "fullName": "Ritesh Firodiya",
      "email": "firodiya.ritesh@gmail.com",
      "phoneNo": "9226737797",
      "message": "Hi Globant!, this is sample initial mock data 2",
      "country": "India",
      "gender": "Male",
    }
  ]);
  const submitFeedback = (feedback) => setFeedbacks([...feedbacks, feedback]);

  useEffect(() => {
    console.log(feedbacks);
  }, [feedbacks]);
  return (
    <div className="App">
      <NavBar title="Enquiry Site" />
      <div className="App-header">
        <Router>
          <Route path="/" exact
            render={(props) => <FormWrapper submitFeedback={submitFeedback} formTitle={formTitle} />}
          />
          <Route path="/history" exact
            render={(props) => <History feedbacks={feedbacks} />}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;