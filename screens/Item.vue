<template>
  <nb-container>
    <status-bar :network-activity-indicator-visible="isLoading" />
    <app-header
      :on-press-left="goBack"
      title="Hacker News"
      left-icon="arrow-back"
    />
    <flat-list
      :data="subitemsById(id)"
      :key-extractor="({ id }, index) => `${id}`"
      :on-end-reached="fetchSubitems.bind(this, { id })"
      :on-end-reached-threshold="0.1"
    >
      <item-list-header
        :item="itemById(id)"
        :on-press-link="openLink"
        render-prop="ListHeaderComponent"
      />
      <item-list-item
        :item="args.item"
        :on-press-item="openItem"
        :on-press-link="openLink"
        render-prop-fn="renderItem"
      />
    </flat-list>
  </nb-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import AppHeader from '../components/AppHeader.vue'
import ItemListHeader from '../components/ItemListHeader.vue'
import ItemListItem from '../components/ItemListItem.vue'
import store from '../store'

export default {
  components: {
    AppHeader,
    ItemListHeader,
    ItemListItem,
  },
  props: {
    navigation: { type: Object, default: null },
  },
  store,
  data () {
    return {
      id: this.navigation.getParam('id'),
    }
  },
  computed: {
    ...mapState(['isLoading']),
    ...mapGetters('item', ['itemById', 'subitemsById']),
  },
  watch: {
    '$store.state.error' (value) {
      alert(value)
    },
  },
  created () {
    this.fetchItem({ id: this.id })
  },
  methods: {
    ...mapActions('item', ['fetchItem', 'fetchSubitems']),
    goBack () {
      this.navigation.goBack()
    },
    openLink (uri) {
      this.navigation.navigate('WebView', {
        source: { uri },
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
