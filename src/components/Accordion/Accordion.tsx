import { ItemsType } from "../../App";

export type AccordionPropsType = {
  title: string
  color?: string
  items: ItemsType
  /**
   * the parameter on which the collapse or expand list depends
   */
  collapsed: boolean
  onClick: (collapsed: boolean) => void
  onChange: () => void
}

export const Accordion = (props: AccordionPropsType) => {
  const switchCollapsed = () => props.onClick(!props.collapsed)
  return (
    <div>
      <AccordionTitle title={props.title} onClick={switchCollapsed} color={props.color}/>
      {!props.collapsed && <AccordionBody items={props.items} onClick={props.onChange}/>}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string
  color?: string
  onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3 
  onClick={props.onClick}
  style={{color: props.color ? props.color : 'black'}}>
    --{props.title}--
  </h3>
}

type AccordionBodyPropsType = {
  items: ItemsType
  onClick: () => void
}
const AccordionBody = (props: AccordionBodyPropsType) => {
  const itemsJSX = props.items.map( item => <li key={item.value} onClick={props.onClick}>{item.title}</li> );
  return (
    <ul>
      {itemsJSX}
    </ul>
  );
}