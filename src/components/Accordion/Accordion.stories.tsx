import { useState } from "@storybook/addons";
import { Story } from "@storybook/react";
import React from "react";
import { ItemsType } from "../../App";
import {Accordion, AccordionPropsType} from './Accordion';



export default {
  title: 'MyComponents/Accordion',
  component: Accordion,
  argTypes: {
    color: {
      options: ['blue', 'white', 'green', 'red', 'yellow'],
      control: { type: 'inline-radio' },
    }
  }
}
const items: ItemsType = [
  {title: 'Dimich', value: '1'},
  {title: 'Valera', value: '2'},
  {title: 'Artem', value: '3'},
  {title: 'Viktor', value: '4'}
]
const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const CollapsedMenu = Template.bind({});
CollapsedMenu.args = {
  title: 'Menu',
  collapsed: true,
  items: items
};

export const UnCollapsedMenu = Template.bind({});
UnCollapsedMenu.args = {
  title: 'Menu',
  collapsed: false,
  items: items
};



export const ModeChanged: Story<AccordionPropsType> = (args) => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion {...args} collapsed={value} onClick={setValue}/>;
}
ModeChanged.args = {
  title:"Menu",
  items: items,
  // onChange: ()=>('action'),
  // onClick: () => ('user  should be happy')
}