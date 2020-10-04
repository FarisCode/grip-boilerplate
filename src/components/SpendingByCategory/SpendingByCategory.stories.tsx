import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { SpendingByCategory, SpendingByCategoryProps } from "./SpendingByCategory";

export default {
  title: "SpendingByCategory",
  component: SpendingByCategory,
} as Meta;

const Template: Story<SpendingByCategoryProps> = (args) => (
  <SpendingByCategory {...args} />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
};
