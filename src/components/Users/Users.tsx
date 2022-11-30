import {FunctionComponent} from "react";
import User from "../User/User";
import {UserDate} from "../User/userModel";
import style from "./Users.module.scss";
interface UsersProps {
  users: UserDate[];
}

const Users: FunctionComponent<UsersProps> = ({users}) => {
  return (
    <>
      <div className={style.cardContainer}>
        {users?.map((user) => {
          const {email, name} = user;
          const large = user.picture?.large;

          return (
            <User
              key={user.id?.value}
              name={name}
              picture={{
                large,
              }}
              email={email}
            />
          );
        })}
      </div>
    </>
  );
};

export default Users;
