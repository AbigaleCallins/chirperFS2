import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import ChirpCard from "./components/ChirpCard.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [username, setUsername] = useState("");
  const [content, setContent] = useState("");
  const [chirps, setChirps] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/api/chirps")
      .then(res => res.json())
      .then(chirps => setChirps(chirps))
      .catch(err => console.log(err));
  }, [])

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleChirpSubmit = (e) => {
    e.preventDefault();

    const newChirp = {
      id: uuidv4(),
      username: username,
      content: content,
      _created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    };

    setChirps([...chirps, newChirp]);
  };

  return (
    <Router>
      <div className="container text-body text-center">
        <div className="row">
          <div className="col-12 p-0">
            <nav>
              <img
                className="banner"
                src="./assets/banner.jpg"
                alt="logo for awesome site yay"
              />
              <h1>Ghibli Chirpr</h1>
            </nav>
          </div>
        </div>
        <div className="row">
          <form action="">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Username"
                aria-label="Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <textarea
                className="form-control mb-2"
                aria-label="With textarea"
                placeholder="(500 characters max)"
                value={content}
                onChange={handleContentChange}
                cols="30"
                rows="10"
              ></textarea>
              <button className="btn btn-dark" onClick={handleChirpSubmit}>
                Chirp It!
              </button>
            </div>
          </form>
          <div className=" chirps mb-4">
            {chirps.map((chirp) => (
              <ChirpCard
                key={chirp.id}
                username={chirp.username}
                content={chirp.content}
                _created={chirp._created}
              />
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
