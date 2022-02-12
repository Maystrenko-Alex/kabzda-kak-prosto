import { Story } from "@storybook/react";
import { MyButton, MyButtonPropsType } from "./MyButton";

export default {
  title: 'MyComponents/MyButton',
  component: MyButton,
  argTypes: {
    color: {
      options: ['blue', 'white', 'green', 'red', 'yellow'],
      control: { type: 'select' },
    },
  }
}

const Template: Story<MyButtonPropsType> = (args) => <MyButton {...args} />;

export const MyButtonPrimary = Template.bind({});
MyButtonPrimary.args = {
  title: 'button',
  color: 'green',
};

export const MyButtonSecondary = Template.bind({});
MyButtonSecondary.args = {
  title: 'buttonSec',
  // color: 'black'
} 