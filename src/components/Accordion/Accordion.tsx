type AccordionPropsType = {
  title: string
  collapsed: boolean
  callBack: (collapsed: boolean) => void
}

export const Accordion = (props: AccordionPropsType) => {
  const switchCollapsed = () => props.callBack(!props.collapsed)
  return (
    <div>
      <AccordionTitle title={props.title} callBack={switchCollapsed} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string
  callBack: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  return <h3 onClick={props.callBack}>--{props.title}--</h3>
}

const AccordionBody = () => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}