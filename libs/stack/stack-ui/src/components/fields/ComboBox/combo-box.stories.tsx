import type { Meta, StoryObj } from '@storybook/react'
import { Item, Section } from 'react-stately'
import ComboBox from '.'

const meta: Meta<typeof ComboBox> = {
  title: 'Form/Fields/ComboBox',
  component: ComboBox,
  args: {
    id: 'brand',
    name: 'brand',
    label: 'Brand',
    placeholder: 'Select a brand',
    allowsCustomValue: true,
    menuTrigger: 'focus',
    onSelectionChange: () => console.log('selection changed'),
    onInputChange: () => console.log('input changed'),
    children: [
      <Item key="1">CTV</Item>,
      <Item key="2">TSN</Item>,
      <Item key="3">Crave</Item>,
      <Item key="4">CTV Comedy</Item>,
      <Item key="5">CTV Sci-fi</Item>,
      <Item key="6">CTV Drama</Item>,
      <Item key="7">CTV News</Item>,
      <Item key="8">CTV Sports</Item>,
      <Item key="9">CTV Kids</Item>,
      <Item key="10">Bell Media</Item>,
      <Item key="11">Bell</Item>,
      <Item key="12">Bell Sports</Item>,
      <Item key="13">Bell Kids</Item>,
      <Item key="14">Bell Drama</Item>,
      <Item key="15">Bell News</Item>,
      <Item key="16">Bell Sports</Item>,
      <Item key="17">Bell Kids</Item>,
      <Item key="18">Bell Drama</Item>,
    ],
  },
}
export default meta

type Story = StoryObj<typeof ComboBox>

export const Default: Story = {
  name: 'Default',
  args: {
    name: 'brand-default',
  },
}

export const Disabled: Story = {
  name: 'Disabled',
  args: {
    name: 'brand-disabled',
    isDisabled: true,
    icon: 'ArrowDown',
  },
}

export const WithError: Story = {
  name: 'With Error',
  args: {
    isInvalid: true,
    name: 'brand-error',
    errorMessage: 'This is an error message',
  },
}

export const WithSections: Story = {
  name: 'With Sections',
  args: {
    name: 'brand-with-sections',
    children: [
      <Section key="section-1" title="CTV">
        <Item key="item-1">CTV</Item>
        <Item key="item-2">TSN</Item>
        <Item key="item-3">Crave</Item>
        <Item key="item-4">CTV Comedy</Item>
        <Item key="item-5">CTV Sci-fi</Item>
      </Section>,
      <Section key="section-2" title="Bell">
        <Item key="item-6">Bell</Item>
        <Item key="item-7">Bell Sports</Item>
        <Item key="item-8">Bell Kids</Item>
        <Item key="item-9">Bell Drama</Item>
      </Section>,
    ],
  },
}

export const AllowsCustomValue: Story = {
  name: 'Allows Custom Value',
  args: {
    name: 'brand-custom',
    allowsCustomValue: true,
  },
}

export const FocusTrigger: Story = {
  name: 'Focus Trigger',
  args: {
    name: 'brand-focus',
    menuTrigger: 'focus',
  },
}
