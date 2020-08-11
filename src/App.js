import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import { Spinner } from "react-bootstrap";
import "./css/App.css";
import "./css/config.css";
import "./css/responsive.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsloaded] = useState(false);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("All");

  const handleClick = (e) => {
    setSelected(e.currentTarget.id);
  };

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=yp96c5XQUhXYnIg1j7X2VHdkfkuD4Ceu"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsloaded(true);
          setData(data.response.docs.slice(0, 500));
        },
        (error) => {
          setIsloaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <Spinner animation="border" role="status" className="spinner">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <React.Fragment>
        <Navbar data={data} doClick={handleClick} selected={selected} />
      </React.Fragment>
    );
  }
}

export default App;
