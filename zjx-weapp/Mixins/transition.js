let util = require('../Utils/index')
let basic_1 = require('../Mixins/basic')

let getClassNames = function (name) {
  return {
    enter:
      'z-' +
      name +
      '-enter z-' +
      name +
      '-enter-active enter-class enter-active-class',
    'enter-to':
      'z-' +
      name +
      '-enter-to z-' +
      name +
      '-enter-active enter-to-class enter-active-class',
    leave:
      'z-' +
      name +
      '-leave z-' +
      name +
      '-leave-active leave-class leave-active-class',
    'leave-to':
      'z-' +
      name +
      '-leave-to z-' +
      name +
      '-leave-active leave-to-class leave-active-class'
  }
}

module.exports.transition = function (showDefaultValue) {
  return Behavior({
    properties: {
      customStyle: String,
      duration: {
        type: null,
        value: 300,
        observer: 'observeDuration'
      },
      name: {
        type: String,
        value: 'fade'
      },
      visible: {
        type: Boolean,
        value: showDefaultValue,
        observer: 'observeShow'
      }
    },
    data: {
      type: '',
      initEd: false,
      display: false
    },
    behaviors: [basic_1],
    methods: {
      observeShow: function (value, old) {
        if (value === old) {
          return
        }
        value ? this.enter() : this.leave()
      },
      enter: function () {
        let _this = this
        let _a = this.data,
          duration = _a.duration,
          name = _a.name
        let classNames = getClassNames(name)
        let currentDuration = util.isObj(duration)
          ? duration.enter
          : duration
        this.status = 'enter'
        this.$emit('before-enter')
        util.requestAnimationFrame(function () {
          _this.checkStatus('enter')
          _this.$emit('enter')
          _this.setData({
            initEd: true,
            display: true,
            classes: classNames.enter,
            currentDuration: currentDuration
          })
          util.requestAnimationFrame(function () {
            _this.checkStatus('enter')
            _this.transitionEnded = false
            _this.setData({classes: classNames['enter-to']})
          })
        })
      },
      leave: function () {
        let _this = this
        if (!this.data.display) {
          return
        }
        let _a = this.data,
          duration = _a.duration,
          name = _a.name
        let classNames = getClassNames(name)
        let currentDuration = util.isObj(duration)
          ? duration.leave
          : duration
        this.status = 'leave'
        this.$emit('before-leave')
        util.requestAnimationFrame(function () {
          _this.checkStatus('leave')
          _this.$emit('leave')
          _this.setData({
            classes: classNames.leave,
            currentDuration: currentDuration
          })
          util.requestAnimationFrame(function () {
            _this.checkStatus('leave')
            _this.transitionEnded = false
            setTimeout(function () {
              return _this.onTransitionEnd()
            }, currentDuration)
            _this.setData({classes: classNames['leave-to']})
          })
        })
      },
      checkStatus: function (status) {
        if (status !== this.status) {
          throw new Error('incongruent status: ' + status)
        }
      },
      onTransitionEnd: function () {
        if (this.transitionEnded) {
          return
        }
        this.transitionEnded = true
        this.$emit('after-' + this.status)
        let _a = this.data,
          visible = _a.visible,
          display = _a.display
        if (!visible && display) {
          this.setData({display: false})
        }
      }
    }
  })
}
