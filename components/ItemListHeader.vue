<template>
  <nb-list-item no-indent>
    <nb-body>
      <view class="flex-column">
        <view v-if="item.title" :style="{ marginBottom: 5 }">
          <app-text bold large>{{ item.title }}</app-text>
        </view>
        <view v-if="item.text">
          <app-text>{{ item.text }}</app-text>
        </view>
        <view
          v-if="item.url"
          :style="{ paddingTop: 5, paddingBottom: 9 }"
          class="flex-row"
        >
          <app-text-icon name="ios-link" gray />
          <app-text-link :on-press="onPressLink && onPressLink.bind(this, item.url)"> {{ item.url }}</app-text-link>
        </view>
        <view class="flex-row">
          <app-text small gray>by {{ item.by }}・{{ item.time * 1000 | timeAgo }}・</app-text>
          <view v-if="item.score !== undefined" class="flex-row">
            <app-text-icon
              type="FontAwesome"
              name="thumbs-o-up"
              small
              gray
            />
            <app-text small gray> {{ item.score || 0 }}  </app-text>
          </view>
          <view v-if="item.kids !== undefined" class="flex-row">
            <app-text-icon
              type="FontAwesome"
              name="comment-o"
              small
              gray
            />
            <app-text small gray> {{ item.kids.length || 0 }}</app-text>
          </view>
        </view>
      </view>
    </nb-body>
  </nb-list-item>
</template>

<script>
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'
import AppText from './AppText.vue'
import AppTextIcon from './AppTextIcon.vue'
import AppTextLink from './AppTextLink.vue'

export default {
  components: {
    AppText,
    AppTextIcon,
    AppTextLink,
  },
  filters: {
    timeAgo (time) {
      return distanceInWordsStrict(time, new Date)
    },
  },
  props: {
    item: { type: Object, default: () => ({}) },
    onPressLink: { type: Function, default: null },
  },
  methods: {
    onPress () {
      this.onPressLink && this.onPressLink(this.item.url)
    },
  },
}
</script>

<style scoped>
.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
