import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { SpendingAverage, SpendingAverageProps } from "./SpendingAverage";

export default {
  title: "SpendingAverage",
  component: SpendingAverage,
} as Meta;

const Template: Story<SpendingAverageProps> = (args) => (
  <SpendingAverage {...args} />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
};
