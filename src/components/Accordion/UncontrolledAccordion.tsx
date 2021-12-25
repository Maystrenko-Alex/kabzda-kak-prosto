import React, { useState } from "react";
import {AccordionTitle, AccordionBody } from './Accordion'

export type AccordionPropsType = {
  title: string
  // collapsed: true | false
  
}

// type AccordionTitlePropsType = {
//   titleValue: string
// }

export const UncontrolledAccrodion = (props: AccordionPropsType) => {
  
  const [collapsed, setCollapsed] = useState(false);

  let status = collapsed;
  console.log('status:', status);
  return (
    <div>
      <AccordionTitle titleValue={props.title} />
      <button onClick={()=>setCollapsed(!status)}>TOGGLE</button>
      { !status && <AccordionBody />}
    </div>
  );
}