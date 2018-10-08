<template>
  <nb-container>
    <status-bar :network-activity-indicator-visible="isLoading" />
    <app-header title="Hacker News" has-segment />
    <app-segment v-model="feedType" :data="feedTypes" />
    <flat-list
      :data="items"
      :key-extractor="({ id }, index) => `${id}`"
      :on-end-reached="fetchFeedItems"
      :on-end-reached-threshold="0.1"
    >
      <item-list-item
        :item="args.item"
        :on-press-item="openItem"
        render-prop-fn="renderItem"
      />
    </flat-list>
  </nb-container>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import AppHeader from '../components/AppHeader.vue'
import AppSegment from '../components/AppSegment.vue'
import ItemListItem from '../components/ItemListItem.vue'
import store from '../store'

export default {
  components: {
    AppHeader,
    AppSegment,
    ItemListItem,
  },
  props: {
    navigation: { type: Object, default: null },
  },
  store,
  computed: {
    ...mapState(['isLoading']),
    ...mapState('feed', ['feedTypes', 'items']),
    feedType: {
      get () {
        return this.$store.state.feed.feedType
      },
      set (value) {
        this.changeType({ type: value })
        this.fetchFeedItems()
      },
    },
  },
  watch: {
    '$store.state.error' (value) {
      alert(value)
    },
  },
  created () {
    this.fetchFeedItems()
  },
  methods: {
    ...mapMutations('feed', ['changeType']),
    ...mapActions('feed', ['fetchFeedItems']),
    openItem ({ id }) {
      this.navigation.navigate('Item', {
        id,
      })
    },
  },
}
</script>
