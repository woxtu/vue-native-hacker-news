<template>
  <nb-header :has-segment="hasSegment" :style="styles.header">
    <nb-left class="left">
      <app-icon-button
        v-if="leftIcon"
        :name="leftIcon"
        :on-press="onPressLeft"
      />
    </nb-left>
    <nb-body class="body">
      <nb-title>{{ title }}</nb-title>
    </nb-body>
    <nb-right class="right">
      <app-icon-button
        v-if="rightIcon"
        :name="rightIcon"
        :on-press="onPressRight"
      />
    </nb-right>
  </nb-header>
</template>

<script>
import { Platform, StatusBar } from 'react-native'
import AppIconButton from './AppIconButton.vue'

export default {
  components: {
    AppIconButton,
  },
  props: {
    title: { type:String, default: null },
    hasSegment: { type: Boolean, default: false },
    leftIcon: { type:String, default: null },
    onPressLeft: { type:Function, default: null },
    rightIcon: { type:String , default: null },
    onPressRight: { type: Function, default: null },
  },
  data () {
    return {
      styles: {
        header: {
          ...Platform.select({
            android: {
              paddingTop: StatusBar.currentHeight,
              height: 56 + StatusBar.currentHeight,
            },
          }),
        },
      },
    }
  },
}
</script>

<style>
.left {
  flex-grow: 0;
  flex-basis: 40;
}

.body {
  flex: 1;
}

.right {
  flex-grow: 0;
  flex-basis: 40;
}
</style>
