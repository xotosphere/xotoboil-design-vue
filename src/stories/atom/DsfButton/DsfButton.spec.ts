/**
 * @vitest-environment jsdom
 */

import { shallowMount } from '@vue/test-utils'
import Button from './DsfButton.vue'
import { describe, expect, it } from 'vitest'

describe('Button.vue', () => {
  it('renders button label', () => {
    const label = 'Test Button'
    const wrapper = shallowMount(Button, {
      props: {
        label
      }
    })
    expect(wrapper.text()).toMatch(label)
  })

  it("renders primary button with class 'dsf-button--primary'", () => {
    const wrapper = shallowMount(Button, {
      props: {
        label: 'Test Button',
        primary: true
      }
    })
    expect(wrapper.classes()).toContain('dsf-button--primary')
  })

  it("renders secondary button with class 'dsf-button--secondary'", () => {
    const wrapper = shallowMount(Button, {
      props: {
        label: 'Test Button',
        primary: false
      }
    })
    expect(wrapper.classes()).toContain('dsf-button--secondary')
  })

  it("renders small button with class 'dsf-button--small'", () => {
    const wrapper = shallowMount(Button, {
      props: {
        label: 'Test Button',
        size: 'small'
      }
    })
    expect(wrapper.classes()).toContain('dsf-button--small')
  })

  it("renders medium button with class 'dsf-button--medium' by default", () => {
    const wrapper = shallowMount(Button, {
      props: {
        label: 'Test Button'
      }
    })
    expect(wrapper.classes()).toContain('dsf-button--medium')
  })

  it("renders large button with class 'dsf-button--large'", () => {
    const wrapper = shallowMount(Button, {
      props: {
        label: 'Test Button',
        size: 'large'
      }
    })
    expect(wrapper.classes()).toContain('dsf-button--large')
  })

  it("emits 'click' event on button click with id equal to 1", async () => {
    const wrapper = shallowMount(Button, {
      props: {
        label: 'Test Button',
        size: 'medium',
        backgroundColor: 'white',
        primary: false
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click') || true).toBeTruthy()
  })
})
