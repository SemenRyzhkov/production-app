import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
