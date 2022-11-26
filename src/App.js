import "./App.css";
import { FcExpand } from "react-icons/fc";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import { useState } from "react";
// import * as ReactBootstrap from "react-bootstrap";

function App() {
  const [showSessionRec, setshowSessionRec] = useState(true);
  const [showOngClasses, setshowOngClasses] = useState(true);
  const [results, setResults] = useState(false);
  return (
    <div className="App">
      <Header />

      {/* Toggle for Session Recording */}
      <div className="container-1">
        <div className="container-1-1">
          <span>SESSION RECORDINGS</span>
        </div>
        <div className="container-1-2">
          <a href="">RECENT</a>
          <a href="">SEE ALL</a>
          <button onClick={() => setshowSessionRec(!showSessionRec)}>
            <FcExpand />
          </button>
        </div>
      </div>
      {showSessionRec ? (
        <div className="cards-recording">
          <Dashboard title={"Essentials of HRM"} />
          <Dashboard
            text={
              "prof .poulami Banerjee -- Essentials of HRM session 15 (additional)"
            }
          />

          <Dashboard />
          <Dashboard />
          {/* <Dashboard /> */}
        </div>
      ) : (
        <div className="on-hide">4 Calender Events</div>
      )}

      {/* toggle for Ongoing Courses and assignments */}

      <div className="ong-courses-container">
        <div className="ong-courses-container1">
          <p>ONGOING COURSES</p>
        </div>
        <div>
          <a href="">SEE ALL</a>
          <button onClick={() => setshowOngClasses(!showOngClasses)}>
            <FcExpand />
          </button>
        </div>
        <div className="assignments-container">
          <span>Assignments</span>
          <div>
            <a href="">SEE ALL</a>
            <button onClick={() => setshowOngClasses(!showOngClasses)}>
              <FcExpand />
            </button>
          </div>
        </div>
      </div>

      {/* toggle for results */}
      <div className="container-1">
        <div className="container-1-1">
          <span>RESULTS</span>
        </div>
        <div className="container-1-2">
          <a href="">SEE ALL</a>
          <button onClick={() => setResults(!results)}>
            <FcExpand />
          </button>
        </div>
        {results ? (
          <div className="cards-recording">Load Results</div>
        ) : (
          <div className="on-hide">No RESULTS !</div>
        )}
      </div>

      <div className="announce-container">
        <div className="announce-container-1">
          <p>Announcements</p>
        </div>
        <div>
          <a href="">SEE ALL</a>
          <button onClick={() => setshowOngClasses(!showOngClasses)}>
            <FcExpand />
          </button>
        </div>
        <div className="assignments-container2">
          <div>
            <p>Assignments</p>
          </div>
          <div>
            <a href="">SEE ALL</a>
            <button onClick={() => setshowOngClasses(!showOngClasses)}>
              <FcExpand />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
