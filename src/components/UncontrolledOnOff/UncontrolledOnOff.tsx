import { useState } from "react";

export type UncontrolledOnOffPropsType = {
  onChange: (on: boolean) => void
  defaultOn?: boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {

  const [on, setOn] = useState<boolean>(props.defaultOn || false);
  const switchOn = () => {
    setOn(true)
    props.onChange(true)
  }
  const switchOff = () => {
    setOn(false)
    props.onChange(false)
  }

  const onStyle = {
    width: "25px",
    height: "25px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    backgroundColor: on ? "green" : "white"
  };
  const offStyle = {
    width: "25px",
    height: "25px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    backgroundColor: on ? "white" : "red"
  };
  const indicatorStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    backgroundColor: on ? "green" : "red"
  };
  return (
    <div>
      <div onClick={switchOn} style={onStyle}>On</div>
      <div onClick={switchOff} style={offStyle}>Off</div>
      <div onClick={() => alert("push on Button")} style={indicatorStyle}></div>
    </div>
  );
}