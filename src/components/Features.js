import { useRef } from "react";
import Title from "./Title";
import useIntersection from "./useIntersection";

function Features() {
  const ref = useRef();
  const { isVisible } = useIntersection(ref, [0]);

  return (
    <div className="features sec" id="features">
      <div className="container">
        <Title
          title="Music Experience"
          text="An Amazing App Can Change Your Daily Life"
        />

        <div className="cols" ref={ref}>
          <div
            className="col"
            style={
              isVisible
                ? {}
                : { transform: "translate(-150px, 150px)", opacity: 0 }
            }
          >
            <div className="icon">
              <img src={require("../img/Group 2.png")} alt="" />
            </div>
            <div className="content">
              <h6>For Live Music</h6>
              <p>
                Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
                Suspendisse.
              </p>
              <a href="/">Learn more</a>
            </div>
          </div>
          <div
            className="col"
            style={
              isVisible ? {} : { transform: "translateY(150px)", opacity: 0 }
            }
          >
            <div className="icon">
              <img src={require("../img/music icon.png")} alt="" />
            </div>
            <div className="content">
              <h6>For Daily Music</h6>
              <p>
                Nunc elementum, dolor vitae lacinia pulvinar, augue felis
                scelerisque libero, sit amet laoreet lorem.
              </p>
              <a href="/">Learn more</a>
            </div>
          </div>
          <div
            className="col"
            style={
              isVisible
                ? {}
                : { transform: "translate(150px, -150px)", opacity: 0 }
            }
          >
            <div className="icon">
              <img src={require("../img/Group 4.png")} alt="" />
            </div>
            <div className="content">
              <h6>For Artists</h6>
              <p>
                Cras ullamcorper nisi accumsan, porta nulla nec, suscipit nibh.
                Nullam bibendum, diam eu vestibulum imperdiet
              </p>
              <a href="/">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
