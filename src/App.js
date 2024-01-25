import React, { useEffect, useState } from "react";
import "./App.css";
import Tweet from "./Tweet";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    /*
    // Make a GET request
    fetch("https://coursera-twitter-api.herokuapp.com/tweets")
      .then((response) => {
        // Check if the request was successful (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setData(response.data);
        // Parse the JSON in the response
        return response.json();
      })
      .then((data) => {
        // Handle the data
        console.log(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Fetch Error:", error);
      });
      */

    try {
      const response = await axios.get(
        "https://coursera-twitter-api.herokuapp.com/tweets"
      );
      setData(response.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.error("Resource not found:", error.response.data);
      } else {
        console.error("Axios Error:", error);
      }
    }
  };

  useEffect(() => {
    console.log("here");
    fetchData();
  }, []);

  return (
    <div style={{ background: "red", padding: "30px" }} className="App">
      {data.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </div>
  );
}

export default App;
