/**
 * 公共方法集
 */

function isObj(x) {
  let type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

/**
 * 延时器
 */
function nextTick(fn) {
  setTimeout(function () {
    fn()
  }, 1000 / 30)
}

/**
 * 获取系统信息
 */
let systemInfo

function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync()
  }
  return systemInfo
}

/**
 * 请求帧动画
 */
function requestAnimationFrame(cb) {
  let systemInfo = getSystemInfoSync()
  if (systemInfo.platform === 'devtools') {
    return nextTick(cb)
  }
  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(function () {
      cb()
    })
}


function range(num, min, max) {
  return Math.min(Math.max(num, min), max)
}

module.exports = {
  getSystemInfoSync,
  requestAnimationFrame,
  isObj,
  nextTick,
  range
}
