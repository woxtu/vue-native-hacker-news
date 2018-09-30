<template>
  <nb-button
    :disabled="disabled"
    :on-press="onPress"
    transparent
  >
    <nb-icon :type="type" :name="name" />
  </nb-button>
</template>

<script>
export default {
  props: {
    type: { type: String, default: null },
    name: { type: String, default: null },
    disabled: { type: Boolean, default: false },
    onPress: { type: Function, default: null },
  },
}
</script>
