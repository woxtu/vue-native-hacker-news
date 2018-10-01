<template>
  <nb-container>
    <app-header
      :title="title"
      :on-press-left="goBack"
      left-icon="arrow-back"
    />
    <web-view
      ref="webView"
      :source="source"
      :on-navigation-state-change="onNavigationStateChange"
    />
    <nb-footer>
      <nb-body class="flex-row space-between">
        <app-icon-button
          :disabled="!canGoBack"
          :on-press="() => $refs.webView.goBack()"
          name="arrow-back"
        />
        <app-icon-button
          :disabled="!canGoForward"
          :on-press="() => $refs.webView.goForward()"
          name="arrow-forward"
        />
        <app-icon-button />
        <app-icon-button
          :disabled="!url"
          :on-press="openInBrowser"
          name="compass"
        />
      </nb-body>
    </nb-footer>
  </nb-container>
</template>

<script>
import { Linking } from 'react-native'
import AppIconButton from '../components/AppIconButton.vue'
import AppHeader from '../components/AppHeader.vue'

export default {
  components: {
    AppIconButton,
    AppHeader,
  },
  props: {
    navigation: { type: Object, default: null },
  },
  data () {
    return {
      source: this.navigation.getParam('source'),
      url: null,
      title: null,
      canGoForward: false,
      canGoBack: false,
    }
  },
  methods: {
    goBack () {
      this.navigation.goBack()
    },
    openInBrowser () {
      Linking.openURL(this.url)
    },
    onNavigationStateChange ({ navigationType, title, canGoForward, canGoBack, url }) {
      if (!navigationType) {
        this.url = url
        this.title = title
        this.canGoForward = canGoForward
        this.canGoBack = canGoBack
      }
    },
  },
}
</script>

<style>
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.space-between {
  justify-content: space-between;
}
</style>
