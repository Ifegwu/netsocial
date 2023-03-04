import { get } from 'http';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then(response => {
      console.log(response)
      setActivities(response.data)
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {activities.map((activity: any) => (
            <li key={activity.id}>{activity.title}</li>
          ))}
        </div>      
      </header>
    </div>
  );
}

export default App;
