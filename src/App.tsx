import Buttons from "./components/Buttons/Buttons";
import Users from "./components/Users/Users";
import axios from "axios";
import {FormEvent, useEffect, useState} from "react";
import Input from "./components/Input/Input";

function App() {
  const [result, setResults] = useState([]);
  async function getUsers() {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=5");
      setResults(response.data.results);//to musi byc otypowane i usestate tez - tablica czego 
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Buttons />
      <Input handleChange={function (event: FormEvent<HTMLInputElement>): void {
        throw new Error("Function not implemented.");
      } } value={""} />
      <Users users={result} />
    </>
  );
}

export default App;
