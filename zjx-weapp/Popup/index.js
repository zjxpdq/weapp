let basic = require('../Mixins/basic')
let transition_1 = require('../Mixins/transition')

Component({
  externalClasses: [],
  behaviors: [basic, transition_1.transition(false)],
  properties: {
    overlay: {
      type: Boolean,
      value: true
    },
    round: {
      type: Boolean,
      value: true
    },
    zIndex: {
      type: Number,
      value: 100
    },
    classes: String,
    customStyle: String,
    overlayStyle: String,
    // 点击遮罩层关闭弹窗
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center',
      observer: 'observeClass'
    },
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    },
    safeAreaInsetTop: {
      type: Boolean,
      value: false
    }
  },
  data: {},
  created() {
    this.observeClass()
  },
  methods: {
    onClickCloseIcon: function () {
      this.$emit('close')
    },
    onClickOverlay: function () {
      this.$emit('click-overlay')
      if (this.data.closeOnClickOverlay) {
        this.$emit('close')
      }
    },
    observeClass: function () {
      let _a = this.data,
        transition = _a.transition,
        position = _a.position,
        duration = _a.duration
      let updateData = {
        name: transition || position
      }
      if (transition === 'none') {
        updateData.duration = 0
        this.originDuration = duration
      } else if (this.originDuration != null) {
        updateData.duration = this.originDuration
      }
      this.setData(updateData)
    }
  }
})
