import s from './OnOff.module.css';

export type OnOffPropsType = {
  on: boolean
  callBack: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

  const switchOn = ()=>props.callBack(true);
  const switchOff = ()=>props.callBack(false);
 
  const onStyle = {
    width: "25px",
    height: "25px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    backgroundColor: props.on ? "green" : "white"
  };
  const offStyle = {
    width: "25px",
    height: "25px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    backgroundColor: props.on ? "white" : "red"
  };
  const indicatorStyle = {
    width: "15px",
    height: "15px",
    borderRadius: "15px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "10px",
    backgroundColor: props.on ? "green" : "red"
  };
  return (
    <div className={s.wrapper}>
      <div onClick={switchOn} style={onStyle}>On</div>
      <div onClick={switchOff} style={offStyle}>Off</div>
      <div onClick={()=>alert("push on Button")} style={indicatorStyle}></div>
    </div>
  );
}