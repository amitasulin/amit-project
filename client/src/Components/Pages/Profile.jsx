import React, { useContext } from "react";

import { UserContext } from "../../context/userContext";

export default function Profile() {
  const { userData } = useContext(UserContext);

  console.log(userData);
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User Profile</h5>
              <hr />
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={userData.profilePicture}
                    alt="User Avatar"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <div className="col-md-8">
                  <h6>First Name: {userData?.firstName}</h6>
                  <h6>Last Name: {userData?.lastName}</h6>
                  <h6>ID : {userData?.id}</h6>

                  <h6>Email: {userData?.email}</h6>
                  <h6>Role: {userData?.role}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
