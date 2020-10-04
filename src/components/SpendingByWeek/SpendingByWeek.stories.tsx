import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { SpendingByWeek, SpendingByWeekProps } from "./SpendingByWeek";

export default {
  title: "SpendingByWeek",
  component: SpendingByWeek,
} as Meta;

const Template: Story<SpendingByWeekProps> = (args) => (
  <SpendingByWeek {...args} />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
};
