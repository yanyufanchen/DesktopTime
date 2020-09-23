import { reactive, } from 'vue'
function usertime () {
  let now = reactive({
    M: '',
    D: '',
    h: '',
    m: '',
    s: ''
  })
  let time = new Date()
  let M = time.getMonth() + 1
  now.M = setForMat(M)
  let D = time.getDate()
  now.D = setForMat(D)
  let h = time.getHours()
  now.h = setForMat(h)
  let m = time.getMinutes()
  now.m = setForMat(m)
  let s = time.getSeconds()
  now.s = setForMat(s)
  return { now }
}
function setForMat (m) {
  let time = m
  if (typeof (time) == 'number') {
    time = String(time)
  }
  time = time.length == 2 ? '' + time : '0' + time
  return time
}
export default usertime
