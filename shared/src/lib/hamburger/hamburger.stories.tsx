import type { Meta, StoryObj } from '@storybook/react';
import { Hamburger } from './hamburger';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Hamburger> = {
  component: Hamburger,
  title: 'Hamburger',
};
export default meta;
type Story = StoryObj<typeof Hamburger>;

export const Closed: Story = {
  args: {},
  render: () => <Hamburger />,
};

export const Open: Story = {
  args: {},
  render: () => <Hamburger />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByTestId('hamburger-icon'));

    expect(
      canvas.getByTestId('hamburger-icon').getAttribute('class')
    ).toContain('isActive');
  },
};
