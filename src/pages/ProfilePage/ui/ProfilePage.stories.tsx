import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from 'shared/assets/tests/storybook.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'shared/const/common';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
  decorators: [
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      profile: {
        form: {
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
    }),
  ],
  args: {},
};
