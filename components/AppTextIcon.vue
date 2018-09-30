<template>
  <nb-icon
    :type="type"
    :name="name"
    :class="['text', { bold, small, gray }]"
  />
</template>

<script>
export default {
  props: {
    type: { type: String, default: null },
    name: { type: String, default: null },
    bold: { type: Boolean, default: false },
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

.small {
  font-size: 13;
}

.gray {
  color: #888;
}
</style>
