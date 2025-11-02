import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./App.module.css";
// import "./App.scss";

function App() {
  const [count, setCount] = useState(0);
  const firstname = "Hồ";
  const lastname = "Thịnh";

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={classes.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={`${classes.logo} ${classes.logo}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="button" style={{ fontSize: "30px" }}>
        {firstname}+{lastname} = {firstname + " " + "Quốc" + " " + lastname}
      </div>
    </>
  );
}

export default App;
