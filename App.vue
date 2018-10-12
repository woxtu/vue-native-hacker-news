<template>
  <app-style-provider>
    <app-loading v-if="!isAppReady" />
    <nb-root v-else>
      <app-navigation />
    </nb-root>
  </app-style-provider>
</template>

<script>
import './plugins/native-base'
import './plugins/vuex'

import Expo, { AppLoading } from 'expo'
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
    AppLoading,
    AppNavigation,
    AppStyleProvider,
  },
  data () {
    return {
      isAppReady: false,
    }
  },
  async created () {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.isAppReady = true
  },
}
</script>
