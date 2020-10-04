import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { NavigationSidebar, NavigationSidebarProps } from "./NavigationSidebar";

export default {
  title: "NavigationSidebar",
  component: NavigationSidebar,
} as Meta;

const Template: Story<NavigationSidebarProps> = (args) => (
  <NavigationSidebar {...args} />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
};
