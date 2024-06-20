import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setjokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/fivejoks")
      .then((Response) => {
        setjokes(Response.data);
      })
      .catch((error) => {
        console.log("error" + error);
      });
  });
  return (
    <>
      <div>I will become a very good programmer in few months baby</div>
      <p>jokes: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.setup}</h3>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </>
  );
}

export default App;
