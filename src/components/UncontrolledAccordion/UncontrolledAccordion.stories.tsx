import { Story } from "@storybook/react";
import React from "react";
import {UncontrolledAccordionPropsType, UncontrolledAccrodion} from './UncontrolledAccordion';

export default {
  title: 'MyComponents/UncontrolledAccordion',
  component: 'UncontrolledAccordion',
  // argTypes: {
  //   onClick: {action : "click"}
  // }
};
// const callback = action('accordion mode change event fired');
const Template : Story<UncontrolledAccordionPropsType> = (args) => <UncontrolledAccrodion {...args} />;

export const ModeChanging = Template.bind({});
ModeChanging.args = {
  title: 'Users'
}