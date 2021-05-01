import React, { useState, useEffect } from "react";
import "./App.css";

// const jobAPI = "https://ai-recruiter.herokuapp.com/api/job/index/JOB_0x1";
const jobAPI = "https://api.github.com/users/sandeepinigithub";

function App() {
  const [t, setT] = useState({});
  useEffect(() => {
    getJobDetails();
  });

  const getJobDetails = async () => {
    const response = await fetch(jobAPI);
    const jsonData = await response.json();
    setT(jsonData);
    console.log(t);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>AI Recruiter Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{t.name}</h5>
        <h5 className="info-item">{t.location}</h5>
        <h5 className="info-item">{t.blog}</h5>
        <h5 className="info-item">{t.company}</h5>
      </div>
    </div>
  );
}
export default App;
