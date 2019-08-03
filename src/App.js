import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import FormWrapper from "./components/FormWrapper";
import NavBar from "./components/NavBar";
import History from "./components/History";

const formTitle = "Enquiry Form";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const submitFeedback = (feedback) => setFeedbacks([...feedbacks, feedback]);
  
  return (
    <div className="App">
      <NavBar title="Enquiry Site" />
      <div className="App-header">
        <Router>
          <Route path="/" exact
            render={() => <FormWrapper submitFeedback={submitFeedback} formTitle={formTitle}/>}
          />
          <Route path="/history" exact
            render={() => <History feedbacks={feedbacks} />}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;