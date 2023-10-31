<template>
  <div class="container">
    <div class="screen" ref="screenRef">
      <div class="top">
        <Top />
      </div>
      <div class="bottom">
        <div class="left">
          <Tourist class="tourist"></Tourist>
          <Sex class="sex"></Sex>
          <Age class="age"></Age>
        </div>
        <div class="center"></div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import Top from './components/top/index.vue'
import Age from './components/bottom/age.vue'
import Sex from './components/bottom/sex.vue'
import Tourist from './components/bottom/tourist.vue'

const screenRef = ref()

onMounted(() => {
  nextTick(() => {
    screenRef.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  })
})

function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const hh = window.innerHeight / h
  return Math.min(ww, hh)
}

window.onresize = () => {
  screenRef.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

    .top {
      width: 100%;
      height: 40px;
    }

    .bottom {
      display: flex;

      .left {
        flex: 1;
        height: 1040px;
        display: flex;
        flex-direction: column;
        .tourist {
          flex: 3;
        }
        .sex {
          flex: 2;
        }
        .age {
          flex: 2;
        }
      }
      .right {
        flex: 1;
      }
      .center {
        flex: 2;
      }
    }
  }
}
</style>
