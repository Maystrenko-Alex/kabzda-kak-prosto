import { Story } from "@storybook/react";
import React from "react";
import { Rating, RatingPropsType, RatingType } from "./Rating";

export default {
  title: 'MyComponents/Rating',
  component: Rating,
  // callBack: {action: ('clicked')}
}

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>

export const EmptyRating = Template.bind({});
// EmptyRating.args = {
//   value: 1
// }
