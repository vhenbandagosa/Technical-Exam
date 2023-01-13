import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Image from "../../images/background.svg";
import { Context } from "../../contexts";

export default function Login({ children }) {
  const { dispatchSignIn, logInAction } = useContext(Context);
  const { handleReset } = logInAction;

  return (
    <div className="login">
      <div className="App__Aside">
        <img src={Image} alt="" className="App__Aside_Image" />
      </div>
      <div className="App__Form">
        <div className="FormTitle">
          <NavLink
            to="/sign-in"
            activeClassName="FormTitle__Link--Active"
            className="FormTitle__Link"
            onClick={() => handleReset(dispatchSignIn)}
          >
            Sign In
          </NavLink>
        </div>
        {children}
      </div>
    </div>
  );
}
