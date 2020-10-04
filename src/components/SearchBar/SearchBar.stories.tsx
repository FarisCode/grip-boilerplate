import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { SearchBar, SearchBarProps } from "./SearchBar";

export default {
  title: "SearchBar",
  component: SearchBar,
} as Meta;

const Template: Story<SearchBarProps> = (args) => (
  <SearchBar {...args} />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
};
