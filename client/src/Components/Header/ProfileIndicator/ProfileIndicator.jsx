import React, { useContext } from "react";
import "./ProfileIndicator.css";
import { UserContext } from "../../../context/userContext";
import LoggedIn from "./LoggedIn/LoggedIn";

export default function ProfileIndicator() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="ProfileIndicator">{isLoggedIn ? <LoggedIn /> : null}</div>
  );
}
