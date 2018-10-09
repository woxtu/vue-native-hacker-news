<template>
  <app-style-provider>
    <nb-root>
      <app-navigation />
    </nb-root>
  </app-style-provider>
</template>

<script>
import './plugins/native-base'
import './plugins/vuex'

import { StackNavigator } from 'vue-native-router'
import Main from './screens/Main.vue'
import Item from './screens/Item.vue'
import WebView from './screens/WebView.vue'
import AppStyleProvider from './components/AppStyleProvider'

const AppNavigation = StackNavigator({
  Main: { screen: Main },
  Item: { screen: Item },
  WebView: { screen: WebView },
}, {
  initialRouteName: 'Main',
  headerMode: 'none',
})

export default {
  components: {
    AppNavigation,
    AppStyleProvider,
  },
}
</script>
