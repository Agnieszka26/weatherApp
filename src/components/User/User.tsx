import {FunctionComponent} from "react";
import "./User.module.scss";
import {UserProps} from "../User/userModel";

import styles from "./User.module.scss";

const User: FunctionComponent<UserProps> = ({picture, email, name}) => {
  return (

    <div className={styles.card}>
      <img
        src={picture?.large}
        alt={picture?.large}
        className={styles.image}
      />
      <div className={styles.container}>
        <h4>
          <b>
            {name?.first} {name?.last}
          </b>
        </h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default User;
