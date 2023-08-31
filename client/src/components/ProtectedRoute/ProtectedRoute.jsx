import "./ProtectedRoute.css";
import React from "react";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContainer } from "../MyContainer";

export default function ProtectedRoute(props) {
  const { allowedRoles } = props;
  const { isLoggedIn, userData } = useContext(UserContext);

  const pleaseLogin = (
    <React.Fragment>
      <p>You have to be logged in to view this content</p>

      <p>
        Click <Link to="/signin"> here </Link> to login.{" "}
      </p>
    </React.Fragment>
  );

  const notAllowed = (
    <React.Fragment>
      <p>You dont have sufficent privilages to view this content</p>
    </React.Fragment>
  );

  const noRolesSet = (
    <React.Fragment>
      <p>
        This page can not be accesed by anybody because 'allowed roles' are not
        set!!
      </p>
    </React.Fragment>
  );

  const result = () => {
    if (!allowedRoles) {
      return noRolesSet;
    }

    if (!isLoggedIn) {
      return pleaseLogin;
    }

    if (allowedRoles.includes(userData.role)) {
      return <React.Fragment>{props.children}</React.Fragment>;
    } else {
      return notAllowed;
    }
  };
  return (
    <MyContainer>
      <div className="d-flex flex-column justify-content-center">
        {result()}
      </div>
    </MyContainer>
  );
}
