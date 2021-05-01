import React, { useState, useEffect } from "react";
import "./App.css";

const jobAPI = "/api/hr/index/HR_0x1";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    getJobDetails();
  }, []);

  
  const getJobDetails = async () => {
    const response = await fetch(jobAPI);
    console.log("response", response)
    const jsonData = await response.json();
    console.log("jsonData", )
    setData(jsonData.data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>AI Recruiter Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{data.name}</h5>
        <h5 className="info-item">{data.email}</h5>
        <h5 className="info-item">{data.company}</h5>
      </div>
    </div>
  );
}
export default App;