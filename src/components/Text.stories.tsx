import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text"

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children:  'Não era isso que devia aparecer',
    size: 'sm'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  } 
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  } 
}
export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Componente de paragrafo</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disabled: true,
      }
    }
  } 
}