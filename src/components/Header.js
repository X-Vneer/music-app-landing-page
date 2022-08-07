import logo from "../img/MuzicLogo.png";
import { useState } from "react";
import icon from "../img/bars.svg";
import Menu from "./Menu";

export default function Header() {
  const [sh, setSh] = useState(false);
  const showStyle = {
    opacity: 1,
    top: "72px",
    zIndex: 10,
  };
  function show() {
    setSh((sh) => !sh);
  }

  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo" />

        <Menu style={sh ? showStyle : {}} />
        <div className="buttons">
          <button>Sign up</button>
          <button className="active">Log in</button>
          <div className="show-icon" onClick={show}>
            <img src={icon} alt="icon" />
          </div>
        </div>
      </div>
    </header>
  );
}
