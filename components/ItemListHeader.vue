<template>
  <nb-list-item v-if="item.id" no-indent>
    <nb-body>
      <view class="flex-column">
        <app-text
          v-if="item.title"
          :style="{ marginBottom: 5 }"
          bold
          large
        >
          {{ item.title }}
        </app-text>
        <view v-if="item.text" :style="{ marginBottom: 5 }">
          <app-html :source="item.text" :on-press-link="onPressLink" />
        </view>
        <app-text-link
          v-if="item.url"
          :on-press="onPressLink && onPressLink.bind(this, item.url)"
          :style="{ marginBottom: 5 }"
        >
          {{ item.url }}
        </app-text-link>
        <view class="flex-row">
          <app-text small gray>by {{ item.by }}・{{ item.time * 1000 | timeAgo }}・</app-text>
          <app-text-icon
            type="FontAwesome"
            name="thumbs-o-up"
            small
            gray
          />
          <app-text small gray> {{ item.score || 0 }}  </app-text>
          <view v-if="item.kids && 0 < item.kids.length" class="flex-row">
            <app-text-icon
              type="FontAwesome"
              name="comment-o"
              small
              gray
            />
            <app-text small gray> {{ item.kids.length }}</app-text>
          </view>
        </view>
      </view>
    </nb-body>
  </nb-list-item>
</template>

<script>
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'
import AppHtml from './AppHtml.vue'
import AppText from './AppText.vue'
import AppTextIcon from './AppTextIcon.vue'
import AppTextLink from './AppTextLink.vue'

export default {
  components: {
    AppHtml,
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
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
