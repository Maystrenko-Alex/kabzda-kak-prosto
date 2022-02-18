import React, { useReducer } from "react";
import { reducer, TOGGLE_CONSTANT } from "./reducer";

export type UncontrolledAccordionPropsType = {
  title: string
}


export const UncontrolledAccrodion = (props: UncontrolledAccordionPropsType) => {
  let [state, dispatch] = useReducer(reducer, {collapsed: false})
  // const [collapsed, setCollapsed] = useState(true);
  console.log('UN rendering');
  return (
    <div>
      {/* <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)} /> */}
      <AccordionTitle title={props.title} onClick={() => dispatch({ type: TOGGLE_CONSTANT })} />
      {!state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering');
  return <h3 onClick={props.onClick}>--{props.title}--</h3>
}

function AccordionBody() {
  console.log('AccordionBody rendering');
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}