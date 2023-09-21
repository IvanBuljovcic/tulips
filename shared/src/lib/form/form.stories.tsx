import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './form';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Form',
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Primary = {
  args: {},
  render: () => <Form />
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Form!/gi)).toBeTruthy();
  },
};
