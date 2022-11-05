import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@uncontrol/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gustavojuneo.png',
    alt: 'Gustavo Juneo',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
