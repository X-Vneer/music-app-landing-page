import { useState } from "react";
import DownloadApp from "./DownloadApp";

function Landing() {
  const [load, setload] = useState(true);
  return (
    <div
      id="home"
      className="landing sec"
      onLoad={() => {
        setload(false);
      }}
    >
      <div className="container">
        <div className="content">
          <h1>
            Experience the <span>best quality music</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
            ratione, illo ipsum sequi tempore voluptatibus.
          </p>
          <DownloadApp />
        </div>
        <div className="right">
          <div className={`image ${load && "start"}`}>
            <img
              src={require("../img/p 2.png")}
              className="img-2"
              alt="landing"
            />
            <img
              src={require("../img/p 3.png")}
              className="img-3"
              alt="landing"
            />
            <img
              src={require("../img/p 4.png")}
              className="img-4"
              alt="landing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
