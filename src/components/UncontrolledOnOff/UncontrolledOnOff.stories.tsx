import { Story } from "@storybook/react";
import React from "react";
import { UncontrolledOnOff, UncontrolledOnOffPropsType } from "./UncontrolledOnOff";

export default {
  title: 'MyComponents/UncontrolledOnOff',
  component: UncontrolledOnOff,
}

const Template : Story<UncontrolledOnOffPropsType> = (args) => <UncontrolledOnOff {...args}/>;

export const OnMode = Template.bind({});
OnMode.args = {
  defaultOn: true
}

export const OffMode = Template.bind({});
OffMode.args = {
  defaultOn: false
}

export const DefaultMode = Template.bind({});
