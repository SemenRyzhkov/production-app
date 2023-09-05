import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;
export const Primary: Story = {
  decorators: [
    StoreDecorator({
      loginForm: { username: 'admin', password: '123' },
    }),
  ],
  args: {},
};
