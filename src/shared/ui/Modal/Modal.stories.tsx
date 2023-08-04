import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;
export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maioresullam et earum iste, hic non reiciendis distinctio possimus ipsam? Eum deserunt distinctio dolorum a!',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maioresullam et earum iste, hic non reiciendis distinctio possimus ipsam? Eum deserunt distinctio dolorum a!',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
