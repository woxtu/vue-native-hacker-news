<template>
  <nb-root>
    <app-navigation />
  </nb-root>
</template>

<script>
import './plugins/native-base'

import { StackNavigator } from 'vue-native-router'
import Main from './screens/Main.vue'
import Item from './screens/Item.vue'

const AppNavigation = StackNavigator({
  Main: { screen: Main },
  Item: { screen: Item },
}, {
  initialRouteName: 'Item',
  headerMode: 'none',
})

export default {
  components: {
    AppNavigation,
  },
}
</script>
