import { useState } from "react";
type PropsType = {
  
}


export const OnOff = (props: PropsType) => {

  const [on, setOn] = useState<true | false>(true);
  console.log("on:", on);
 
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
      <div onClick={()=>setOn(true)} style={onStyle}>On</div>
      <div onClick={()=>setOn(false)} style={offStyle}>Off</div>
      <div onClick={()=>alert("push on Button")} style={indicatorStyle}></div>
    </div>
  );
}