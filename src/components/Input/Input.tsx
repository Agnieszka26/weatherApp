import {FormEvent, FunctionComponent, useEffect, useState} from "react";

interface InputProps {
  handleChange: (event: FormEvent<HTMLInputElement> ) => void;
  value: string;
}

const Input: FunctionComponent<InputProps> = ({handleChange, value}) => {
  // const [value, setValue] = useState("");

  // const handleChange = (event: FormEvent<HTMLInputElement>) => {
  //   setValue(event.currentTarget.value);
  // };
  // useEffect(() => {
  //   console.log("value: ", value);
  // }, [value]);

  return (
    <>
      <input onChange={handleChange} value={value} />
    </>
  );
};

export default Input;
