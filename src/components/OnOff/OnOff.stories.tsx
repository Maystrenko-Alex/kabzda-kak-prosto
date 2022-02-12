import { Story } from "@storybook/react";
import React, { useState } from "react";
import { OnOff, OnOffPropsType } from "./OnOff";

export default {
  title: 'MyComponents/OnOff',
  component: OnOff
};

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
  on: true,
  callBack:x=>x
}

export const OffMode = Template.bind({});
OffMode.args = {
  on: false,
  callBack: x=>x
}

// export const OnOffMode = Template.bind({});
// const [on, setOn] = useState<boolean>(false);
// OnOffMode.args = {
//   on: on,
//   callBack: {{setOn(!on)}},
// }

export const OnOffMode = () => {
  const [on, setOn] = useState<boolean>(false);
  return <OnOff on={on} callBack={()=>setOn(!on)}/>
}