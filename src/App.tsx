// import Buttons from "./components/Buttons/Buttons";
import Users from "./components/Users/Users";
import axios from "axios";
import {FormEvent, useEffect, useState} from "react";
import Input from "./components/Input/Input";
import {UserDate} from "./components/User/userModel";
import {FunctionComponent} from "react";
import {api} from "./api";

const App: FunctionComponent = () => {
  const [users, setUsers] = useState<UserDate[] | null>(null);
  const [value, setValue] = useState<string>("");

  async function getUsers() {
    try {
      // const response = await axios.get("https://randomuser.me/api/?results=5");

      const usersResponse = await api.get(`?results=${value}`);
      setUsers(usersResponse.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  useEffect(() => {
    getUsers();
  }, []); //każda funkcja odpowiada za jedną rzecz 
  if (!users) return <></>;
  return (
    <>
      {/* <Buttons /> */}

      <Input handleChange={handleChange} value={value} />
      <Users users={users} />
    </>
  );
};

export default App;
