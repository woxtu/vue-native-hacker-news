<template>
  <nb-container>
    <app-header title="Hacker News" has-segment />
    <app-segment v-model="feedType" :data="feedTypes" />
    <flat-list :data="feed" :key-extractor="({ id }, index) => `${id}`">
      <item-list-item :item="args.item" render-prop-fn="renderItem" />
    </flat-list>
  </nb-container>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppSegment from '../components/AppSegment.vue'
import ItemListItem from '../components/ItemListItem.vue'

export default {
  components: {
    AppHeader,
    AppSegment,
    ItemListItem,
  },
  props: {
    navigation: { type: Object, default: null },
  },
  data () {
    return {
      feedTypes: ['Top', 'New', 'Show', 'Ask'],
      feedType: 'Top',
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
    }))
  },
}
</script>
