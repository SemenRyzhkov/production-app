import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
  args: {},
};
