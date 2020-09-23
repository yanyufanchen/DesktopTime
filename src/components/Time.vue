<template>
  <div class="box">
    <div class="timetop">{{timeObj.M}}月{{timeObj.D}}日</div>
    <div class="timeBottom">{{timeObj.h}}:{{timeObj.m}}</div>
  </div>

</template>

<script>
import { ref, reactive } from 'vue'
import usertime from '../Api/usertime.js'
export default {
  name: 'Time',
  setup () {
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

    setInterval(() => {
      const { now } = usertime()
      timeObj.M = now.M
      timeObj.D = now.D
      timeObj.h = now.h
      timeObj.m = now.m
      timeObj.s = now.s
      // console.log(timeObj)
    }, 1000)


    return { timeObj }
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
  width: 100%;
  height: 100vh;
  background-color: #1f2c56;
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

