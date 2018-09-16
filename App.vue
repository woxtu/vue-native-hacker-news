<template>
  <app-navigation />
</template>

<script>
import { StackNavigator } from 'vue-native-router'
import Main from './screens/Main.vue'

const AppNavigation = StackNavigator({
  Main: { screen: Main },
}, {
  initialRouteName: 'Main',
  headerMode: 'none',
})

export default {
  components: {
    AppNavigation,
  },
}
</script>
