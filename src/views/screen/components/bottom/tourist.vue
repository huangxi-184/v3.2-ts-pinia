<template>
  <div class="tourist">
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">
        可预约总量
        <span>9999</span>
        人
      </p>
    </div>
    <div class="number">
      <span v-for="item in people" :key="item">{{ item }}</span>
    </div>
    <div class="echart" ref="chartsRef"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'
const people = ref('216908人')

const chartsRef = ref()

onMounted(() => {
  let myChart = echarts.init(chartsRef.value)

  myChart.setOption({
    //x|y轴组件
    xAxis: {},
    yAxis: {},
    //系列:决定你展示什么样的图形图标
    series: {
      type: 'liquidFill', //系列
      data: [0.6, 0.4, 0.2], //展示的数据
      waveAnimation: true, //动画
      animationDuration: 3,
      animationDurationUpdate: 0,
      radius: '90%', //半径
      outline: {
        //外层边框颜色设置
        show: true,
        borderDistance: 8,
        itemStyle: {
          color: 'skyblue',
          borderColor: '#294D99',
          borderWidth: 8,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.25)',
        },
      },
    },
    //布局组件
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  })
})
</script>

<style lang="scss" scoped>
.tourist {
  background: url(../../images/dataScreen-main-lb.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;

  .top {
    margin-left: 20px;
    .title {
      color: white;
      font-size: 20px;
      font-weight: bold;
    }

    .bg {
      background: url(../../images/dataScreen-title.png) no-repeat;
      background-size: 100% 100%;
      width: 68px;
      height: 7px;
      margin-top: 15px;
    }

    .right {
      float: right;
      color: white;
      font-size: 20px;
      margin-right: 20px;
      span {
        color: orange;
      }
    }
  }

  .number {
    margin-top: 40px;
    display: flex;
    padding: 15px;
    justify-content: space-evenly;

    span {
      height: 60px;
      width: 60px;
      background: url(../../images/total.png);
      background-size: 100% 100%;
      color: #29fcff;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
  }

  .echart {
    width: 100%;
    height: 260px;
  }
}
</style>
