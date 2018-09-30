<template>
  <text :class="['text', { bold, large, small, gray }]"><slot /></text>
</template>

<script>
export default {
  props: {
    bold: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
    small: { type: Boolean, default: false },
    gray: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
.text {
  font-size: 16;
  color: #333;
}

.bold {
  font-weight: bold;
}

.large {
  font-size: 18;
}

.small {
  font-size: 13;
}

.gray {
  color: #888;
}
</style>
