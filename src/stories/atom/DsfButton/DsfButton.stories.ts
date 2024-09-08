import type { Meta, StoryObj } from '@storybook/vue3'

import DsfButton from './DsfButton.vue'

const meta = {
  title: 'atom/DsfButton',
  component: DsfButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
  args: { primary: false }
} satisfies Meta<typeof DsfButton>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { primary: true, label: 'DsfButton' }
}

export const Secondary: Story = {
  args: { primary: false, label: 'DsfButton' }
}

export const Large: Story = {
  args: { label: 'DsfButton', size: 'large' }
}

export const Small: Story = {
  args: { label: 'DsfButton', size: 'small' }
}
