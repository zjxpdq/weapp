'use strict'
// Object.defineProperty(exports, '__esModule', {value: true})
module.exports = void 0
module.exports = Behavior({
  methods: {
    $emit() {
      let args = []
      for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i]
      }
      this.triggerEvent.apply(this, args)
    },
    set(data, callback) {
      this.setData(data, callback)
      return new Promise(function (resolve) {
        return wx.nextTick(resolve)
      })
    }
  }
})
