import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Some text',
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Some text',
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Some text',
  },
};

export const PrimaryDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: 'Title',
    text: 'Some text',
  },
};

export const OnlyTitleDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    title: 'Title',
  },
};

export const OnlyTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],

  args: {
    text: 'Some text',
  },
};

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'Some text',
    size: TextSize.L,
  },
};
