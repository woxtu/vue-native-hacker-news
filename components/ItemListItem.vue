<template>
  <nb-list-item>
    <nb-body>
      <view class="flex-column">
        <view :style="{ marginBottom: 5 }">
          <text class="text">{{ item.title || item.text }}</text>
        </view>
        <view class="flex-row">
          <text class="text small gray">by {{ item.by }}・{{ item.time * 1000 | timeAgo }}・</text>
          <view v-if="item.score !== undefined" class="flex-row">
            <nb-icon
              type="FontAwesome"
              name="thumbs-o-up"
              class="text small gray"
            />
            <text class="text small gray"> {{ item.score }}  </text>
          </view>
          <view v-if="item.kids !== undefined" class="flex-row">
            <nb-icon
              type="FontAwesome"
              name="comment-o"
              class="text small gray"
            />
            <text class="text small gray"> {{ item.kids.length || 0 }}</text>
          </view>
        </view>
      </view>
    </nb-body>
    <nb-right class="right">
      <nb-icon name="arrow-forward" />
    </nb-right>
  </nb-list-item>
</template>

<script>
import distanceInWordsStrict from 'date-fns/distance_in_words_strict'

export default {
  filters: {
    timeAgo (time) {
      return distanceInWordsStrict(time, new Date)
    },
  },
  props: {
    item: { type: Object, default: () => ({}) },
    onPressItem: { type: Function, default: null },
  },
  methods: {
    onPress () {
      this.onPressItem && this.onPressItem(this.item)
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

.text {
  font-size: 15;
  color: #333;
  margin: 0;
  padding: 0;
}

.small {
  font-size: 12;
}

.gray {
  color: #888;
}

.right {
  flex-grow: 0;
  flex-basis: 27;
}
</style>
