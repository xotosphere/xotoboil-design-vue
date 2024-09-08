<template>
  <button type="button" :class="classes" :style="style" @click="onClick">
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
  import './button.css'
  import { computed } from 'vue'

  const props = withDefaults(
    defineProps<{
      label: string
      primary?: boolean
      size?: 'small' | 'medium' | 'large'
      backgroundColor?: string
    }>(),
    { primary: false }
  )

  const emit = defineEmits<{
    (e: 'click', id: number): void
  }>()

  const classes = computed(() => ({
    'dsf-button': true,
    'dsf-button--primary': props.primary,
    'dsf-button--secondary': !props.primary,
    [`dsf-button--${props.size || 'medium'}`]: true
  }))

  const style = computed(() => ({
    backgroundColor: props.backgroundColor
  }))

  const onClick = () => {
    emit('click', 1)
  }
</script>
