<template>
  <nb-segment class="segment">
    <nb-button
      v-for="(item, index) in data"
      :key="item"
      :first="index === 0"
      :last="index === data.length - 1"
      :active="item === value"
      :on-press="onPressItem.bind(this, item)"
      class="button"
    >
      <nb-text>{{ item }}</nb-text>
    </nb-button>
  </nb-segment>
</template>

<script>
export default {
  props: {
    data: { type: Array, default: () => [] },

    // for v-model
    value: { type: String, default: null },
    onChange: { type: Function, default: null },
  },
  methods: {
    onPressItem (value) {
      this.onChange && this.onChange({ nativeEvent: { text: value } })
    },
  },
}
</script>

<style>
.segment {
  padding-right: 10;
  padding-left: 10;
}

.button {
  flex: 1;
  align-items: center;
  justify-content: center;
}
</style>
