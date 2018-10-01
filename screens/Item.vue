<template>
  <nb-container>
    <app-header
      :on-press-left="goBack"
      title="Hacker News"
      left-icon="arrow-back"
    />
    <flat-list :data="feed" :key-extractor="({ id }, index) => `${id}`">
      <item-list-header
        :item="feed[0]"
        :on-press-link="openLink"
        render-prop="ListHeaderComponent"
      />
      <item-list-item
        :item="args.item"
        :on-press-item="openItem"
        render-prop-fn="renderItem"
      />
    </flat-list>
  </nb-container>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import ItemListHeader from '../components/ItemListHeader.vue'
import ItemListItem from '../components/ItemListItem.vue'

export default {
  components: {
    AppHeader,
    ItemListHeader,
    ItemListItem,
  },
  props: {
    navigation: { type: Object, default: null },
  },
  data () {
    return {
      id: this.navigation.getParam('id'),
      feed: [],
    }
  },
  created () {
    // FIXME: for now
    this.feed = new Array(30).fill().map((_, i) => ({
      id: i,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      score: Math.floor(Math.random() * 1000),
      by: 'John Doe',
      time: 1314211127,
      kids: new Array(i).fill(),
      url: 'https://google.com',
    }))
  },
  methods: {
    goBack () {
      this.navigation.goBack()
    },
    openLink (url) {
      this.navigation.navigate('WebView', {
        source: { url },
      })
    },
    openItem ({ id }) {
      this.navigation.navigate('Item', {
        id,
      })
    },
  },
}
</script>
