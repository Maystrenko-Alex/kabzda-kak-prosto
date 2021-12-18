export type AccordionPropsType = {
  title: string
  collapsed: true | false
}

type AccordionTitlePropsType = {
  titleValue: string
}

export function Accordion(props: AccordionPropsType) {
  if (props.collapsed) {
    return (
      <div>
        <AccordionTitle titleValue={props.title} />
      </div>
    )
  } else {
    return (
      <div>
        <AccordionTitle titleValue={props.title} />
        <AccordionBody />
      </div>
    );
  }
}

function AccordionTitle(props: AccordionTitlePropsType) {
  debugger
  return <h3>{props.titleValue}</h3>
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}