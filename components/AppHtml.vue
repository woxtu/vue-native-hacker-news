<template>
  <html
    :base-font-style="baseFontStyle"
    :html="source"
    :tags-styles="tagsStyles"
    :on-link-press="onLinkPress"
  />
</template>

<script>
import Html from 'react-native-render-html'

export default {
  components: {
    Html,
  },
  props: {
    source: { type: String, default: null },
    onPressLink: { type: Function, default: null },
  },
  data () {
    return {
      baseFontStyle: { fontSize: 16, color: '#333' },
      tagsStyles: {
        a: { color: '#ff6600' },
        p: { marginVertical: 8 },
      },
    }
  },
  methods: {
    onLinkPress (event, url) {
      this.onPressLink && this.onPressLink(url)
    },
  },
}
</script>
