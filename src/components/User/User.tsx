import {FunctionComponent} from "react";
import "./User.module.scss";
// import UserProps from "../User/user";
import React from "react";

interface UserProps {
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
}

const User: FunctionComponent<UserProps> = ({
  firstName,
  lastName,
  picture,
  email,
}) => {
  return (
    <div className="card">
      <img src={picture} alt={firstName} className="image" />
      <div className="container">
        <h4>
          <b>
            {firstName} {lastName}
          </b>
        </h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default User;
