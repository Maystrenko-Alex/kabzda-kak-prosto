import { useState } from "react";

type UncontrolledOnOffPropsType = {
  callBack: (uncOn: boolean) => void
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {

  const [on, setOn] = useState<true | false>(true);
  const setOnClick = () => {
    setOn(true);
    props.callBack(true);
  }
  const setOffClick = () => {
    setOn(false);
    props.callBack(false);
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
      <div onClick={setOnClick} style={onStyle}>On</div>
      <div onClick={setOffClick} style={offStyle}>Off</div>
      <div onClick={() => alert("push on Button")} style={indicatorStyle}></div>
    </div>
  );
}