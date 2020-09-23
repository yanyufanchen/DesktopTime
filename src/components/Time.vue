<template>
  <div class="box">
    <div v-if="!openScreenFlag"
         @click="openAllScreen"
         class="btn">全屏</div>
    <div v-else
         @click="closeAllScreen"
         class="btn">取消全屏</div>
    <div class="time">
      <div class="timetop">{{timeObj.M}}月{{timeObj.D}}日</div>
      <div class="timeBottom">{{timeObj.h}}:{{timeObj.m}}</div>
    </div>
  </div>

</template>

<script>
import { ref, reactive } from 'vue'
import usertime from '../Api/usertime.js'
import { launchFullScreen, cancelFullscreen } from '../Api/screenApi.js'
export default {
  name: 'Time',
  setup () {
    let openScreenFlag = ref(false)
    let timeObj = reactive({
      M: '',
      D: '',
      h: '',
      m: '',
      s: ''
    })

    const { now } = usertime()
    timeObj.M = now.M
    timeObj.D = now.D
    timeObj.h = now.h
    timeObj.m = now.m
    timeObj.s = now.s
    // 定时更新
    setInterval(() => {
      const { now } = usertime()
      timeObj.M = now.M
      timeObj.D = now.D
      timeObj.h = now.h
      timeObj.m = now.m
      timeObj.s = now.s
    }, 1000)
    // 全屏
    function openAllScreen () {
      launchFullScreen(document.documentElement); // 整个页面 
      openScreenFlag.value = true
    }
    function closeAllScreen () {
      // 取消全屏  
      cancelFullscreen();
      openScreenFlag.value = false
    }
    return { timeObj, closeAllScreen, openAllScreen, openScreenFlag }
  },

  data () {
    return {
    }
  }
}
</script>
<style lang="css" >
body,
html {
  padding: 0;
  margin: 0;
}
.box {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: #1f2c56;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 200px;
  margin-top: 5px;
  background-color: #262c39;
  height: 50px;
  font-size: 20px;
  color: #fff;
  border-radius: 5px;
  line-height: 50px;
  cursor: pointer;
}
.time {
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.timetop {
  font-size: 180px;
  font-weight: 541;
  color: #fff;
}
.timeBottom {
  font-size: 330px;
  font-weight: 550;
  color: #fff;
}
</style>

