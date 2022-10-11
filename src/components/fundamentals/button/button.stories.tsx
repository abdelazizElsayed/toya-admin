import { ComponentMeta } from "@storybook/react"
import React from "react"
import Button from "."
import HappyIcon from "../icons/happy-icon"

export default {
  title: "Fundamentals/Button",
  component: Button,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "ghost"],
      },
    },
  },
} as ComponentMeta<typeof Button>

const Template = args => <Button {...args}>Action</Button>

export const PrimaryLarge:any = Template.bind({})
PrimaryLarge.args = {
  variant: "primary",
  size: "large",
}

export const PrimaryLargeLoading:any = Template.bind({})
PrimaryLargeLoading.args = {
  variant: "primary",
  size: "large",
  loading: true,
  children: "Loading",
}

export const PrimaryMedium:any = Template.bind({})
PrimaryMedium.args = {
  variant: "primary",
  size: "medium",
}

export const PrimaryMediumLoading:any = Template.bind({})
PrimaryMediumLoading.args = {
  variant: "primary",
  size: "medium",
  loading: true,
}

export const PrimarySmall:any = Template.bind({})
PrimarySmall.args = {
  variant: "primary",
  size: "small",
}

export const PrimarySmallLoading:any = Template.bind({})
PrimarySmallLoading.args = {
  variant: "primary",
  size: "small",
  loading: true,
}

export const SecondaryLarge:any = Template.bind({})
SecondaryLarge.args = {
  variant: "secondary",
  size: "large",
}

export const SecondaryLargeLoading:any = Template.bind({})
SecondaryLargeLoading.args = {
  variant: "secondary",
  size: "large",
  loading: true,
  children: "Loading",
}

export const SecondaryMedium:any = Template.bind({})
SecondaryMedium.args = {
  variant: "secondary",
  size: "medium",
}

export const SecondaryMediumLoading:any = Template.bind({})
SecondaryMediumLoading.args = {
  variant: "secondary",
  size: "medium",
  loading: true,
}

export const SecondarySmall:any = Template.bind({})
SecondarySmall.args = {
  variant: "secondary",
  size: "small",
}

export const SecondarySmallLoading:any = Template.bind({})
SecondarySmallLoading.args = {
  variant: "secondary",
  size: "small",
  loading: true,
}

export const GhostLarge:any = Template.bind({})
GhostLarge.args = {
  variant: "ghost",
  size: "large",
}

export const GhostLargeLoading:any = Template.bind({})
GhostLargeLoading.args = {
  variant: "ghost",
  size: "large",
  loading: true,
  children: "Loading",
}

export const GhostMedium:any = Template.bind({})
GhostMedium.args = {
  variant: "ghost",
  size: "medium",
}

export const GhostMediumLoading:any = Template.bind({})
GhostMediumLoading.args = {
  variant: "ghost",
  size: "medium",
  loading: true,
}

export const GhostSmall:any = Template.bind({})
GhostSmall.args = {
  variant: "ghost",
  size: "small",
}

export const GhostSmallLoading:any = Template.bind({})
GhostSmallLoading.args = {
  variant: "ghost",
  size: "small",
  loading: true,
}

const TemplateWithIcon = args => (
  <Button {...args}>
    <HappyIcon size={20} /> Action
  </Button>
)

export const PrimaryLargeIcon:any = TemplateWithIcon.bind({})
PrimaryLargeIcon.args = {
  variant: "primary",
  size: "large",
}

export const PrimaryMediumIcon:any = TemplateWithIcon.bind({})
PrimaryMediumIcon.args = {
  variant: "primary",
  size: "medium",
}

export const PrimarySmallIcon:any = TemplateWithIcon.bind({})
PrimarySmallIcon.args = {
  variant: "primary",
  size: "small",
}

export const SecondaryLargeIcon:any = TemplateWithIcon.bind({})
SecondaryLargeIcon.args = {
  variant: "secondary",
  size: "large",
}

export const SecondaryMediumIcon:any = TemplateWithIcon.bind({})
SecondaryMediumIcon.args = {
  variant: "secondary",
  size: "medium",
}

export const SecondarySmallIcon:any = TemplateWithIcon.bind({})
SecondarySmallIcon.args = {
  variant: "secondary",
  size: "small",
}

export const GhostLargeIcon:any = TemplateWithIcon.bind({})
GhostLargeIcon.args = {
  variant: "ghost",
  size: "large",
}

export const GhostMediumIcon:any = TemplateWithIcon.bind({})
GhostMediumIcon.args = {
  variant: "ghost",
  size: "medium",
}

export const GhostSmallIcon:any = TemplateWithIcon.bind({})
GhostSmallIcon.args = {
  variant: "ghost",
  size: "small",
}
