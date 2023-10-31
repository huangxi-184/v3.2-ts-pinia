<template>
  <div class="top">
    <div class="left">
      <span class="lbtn">首页</span>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <span class="rbtn">统计报告</span>
      <span class="time">当前时间: {{ currentTime }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, Ref, onUnmounted } from 'vue'
import dayjs from 'dayjs'

const currentTime = ref('')
const timer: Ref<number> = ref()

onMounted(() => {
  formatTime()
  updateTime()
})

function formatTime() {
  currentTime.value = dayjs().format('YYYY年MM月DD日 HH:mm:ss')
}

function updateTime() {
  timer.value = setInterval(() => {
    formatTime()
  })
}

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 40px;
  display: flex;

  .left {
    flex: 1;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;

    .lbtn {
      width: 100px;
      height: 40px;
      float: right;
      background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
      font-size: 18px;
      cursor: pointer;
    }
  }
  .center {
    flex: 2;

    .title {
      width: 100%;
      height: 74px;
      background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 74px;
      color: #29fcff;
      font-size: 30px;
    }
  }
  .right {
    flex: 1;
    background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rbtn {
      width: 100px;
      height: 40px;
      background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
      font-size: 18px;
      cursor: pointer;
    }

    .time {
      color: #29fcff;
      font-size: 18px;
    }
  }
}
</style>
