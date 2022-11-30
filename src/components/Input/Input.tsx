import {FormEvent, FunctionComponent} from "react";

interface InputProps {
  handleChange: (event: FormEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: FunctionComponent<InputProps> = ({handleChange, value}) => {
  return (
    <>
      <input onChange={handleChange} value={value} type="number" />
    </>
  );
};

export default Input;
