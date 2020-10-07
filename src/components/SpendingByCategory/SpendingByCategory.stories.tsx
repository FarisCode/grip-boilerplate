import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import {
  SpendingByCategory,
  SpendingByCategoryProps,
} from "./SpendingByCategory";

export default {
  title: "SpendingByCategory",
  component: SpendingByCategory,
  argTypes: {},
} as Meta;

const Template: Story<SpendingByCategoryProps> = (args) => (
  <SpendingByCategory {...args} />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
  data: {
    Fashion: 13,
    Food: 23,
    Business: 32,
    Merchant: 8,
    Finance: 15,
  },
};
