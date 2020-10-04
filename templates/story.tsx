import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { TemplateName, TemplateNameProps } from "./TemplateName";

export default {
  title: "TemplateName",
  component: TemplateName,
} as Meta;

const Template: Story<TemplateNameProps> = (args) => (
  <TemplateName {...args} />
);

export const DefaultStory = Template.bind({});
DefaultStory.args = {
};
