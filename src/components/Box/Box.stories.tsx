import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Box, BoxProps } from "./Box";

export default {
  title: "Box",
  component: Box,
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <Box {...args} />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
};
