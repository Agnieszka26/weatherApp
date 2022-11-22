import {FunctionComponent} from "react";
import User from "../Users/Users";
import UserProps from "../User/user";

interface UsersProps { 
  users:any ;
}

const Users: FunctionComponent<UsersProps> = ({users}) => {
  console.log(users);
  return (
    <>
      {users?.map((user) => {
        return (
          <User
            firstName={user?.name?.first}
            lastName={user?.name?.last}
            picture={user?.picture?.medium}
            email={user?.email}
          />
        );
      })}
    </>
  );
};

export default Users;
