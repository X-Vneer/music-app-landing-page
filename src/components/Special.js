import { useRef, useState } from "react";
import Title from "./Title";
import useIntersection from "./useIntersection";

function Special() {
  const myRef = useRef();
  const { isVisible } = useIntersection(myRef, [0.35, 1]);

  const [search, setsearch] = useState("");
  function handleChange(event) {
    const { value } = event.target;
    setsearch(value);
  }

  return (
    <div className="special sec" id="search">
      <div className="container" ref={myRef}>
        <div
          className="image"
          style={
            isVisible ? {} : { transform: "translatey(-100px)", opacity: 0 }
          }
        >
          <div>
            <img
              src={require("../img/d2.png")}
              alt=""
              style={
                isVisible
                  ? {}
                  : { transform: "translatex( -150px)", opacity: 0 }
              }
            />
            <img
              src={require("../img/d3.png")}
              alt=""
              style={
                isVisible
                  ? {}
                  : { transform: "translate(150px, -150px)", opacity: 0 }
              }
            />
            <img
              src={require("../img/d4.png")}
              alt=""
              style={
                isVisible
                  ? {}
                  : { transform: "translate(150px, 150px)", opacity: 0 }
              }
            />
          </div>
        </div>
        <div className="content">
          <div className="search-bar">
            <input
              id="search"
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Enter keywork or URL"
            />
            <label htmlFor="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33.08"
                height="34.195"
                viewBox="0 0 33.08 34.195"
              >
                <path
                  id="search"
                  d="M33.5,31.118l-8.14-8.454A13.824,13.824,0,1,0,22.7,25.095l8.2,8.517a1.8,1.8,0,1,0,2.6-2.493ZM14.788,3.613A10.19,10.19,0,1,1,4.582,13.8,10.2,10.2,0,0,1,14.788,3.613Z"
                  transform="translate(-0.977 -0.026)"
                />
              </svg>
            </label>
          </div>
          <Title title="Name or direct URL" text="search music by" />
          <img src={require("../img/com.jpg")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Special;
