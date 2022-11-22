import Button from "../Button/Button";

const Buttons = () => {
  const buttonArray = [
    {text: "button1", color: "green"},
    {text: "button2", color: "green"},
    {text: "button3", color: "green"},
    {text: "button4", color: "red"},
    {text: "button5", color: "green"},
  ];
  return (
    <>
      <Button text="green" backgroundColor="green" />
      <Button text="red" backgroundColor="red" />
      {/* {buttonArray.map((button) => {
        const {text, color} = button;
        return <Button text={text} backgroundColor={color as "green"} />;
      })} */}
      {buttonArray.map(({text, color}) => (
        <Button text={text} backgroundColor={color as "green"} />
      ))}
    </>
  );
};

export default Buttons;
