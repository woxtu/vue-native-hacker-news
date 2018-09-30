<template>
  <touchable-opacity :on-press="onPress">
    <text class="text underline"><slot /></text>
  </touchable-opacity>
</template>

<script>
export default {
  props: {
    onPress: { type: Function, default: null },
  },
}
</script>

<style scoped>
.text {
  font-size: 16;
  color: #ff6600;
}

.underline {
  text-decoration-line: underline;
}
</style>
