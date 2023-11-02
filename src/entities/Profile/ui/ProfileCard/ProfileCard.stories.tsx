import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country, Currency } from 'shared/const/common';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: 'enteties/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;
export const Primary: Story = {
  //   decorators: [
  //     StoreDecorator({
  //       loginForm: { username: 'admin', password: '123' },
  //     }),
  //   ],
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname: 'Test',
      first: 'Test',
      currency: Currency.USD,
      city: 'New',
      avatar,
    },
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Error: Story = {
  args: {
    error: 'true',
  },
};
