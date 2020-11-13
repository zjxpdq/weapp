Component({
  externalClasses: ['z-class'],
  properties: {
    background: {type: String, value: '#fff'},
    color: {type: String, value: '#2E3534'},
    duration: {
      type: Number,
      value: 3000
    },
    zIndex: {
      type: Number,
      value: 110
    },
    type: {
      type: String,
      value: ''
    },
    top: {
      type: String,
      value: '30rpx'
    },
    width: {
      type: String,
      value: 'auto'
    },
    msg: String
  },
  created() {
    const {statusBarHeight} = wx.getSystemInfoSync()
    this.setData({statusBarHeight})

  },
  data: {
    visible: false
  },
  methods: {
    show() {
      const {duration, onOpened} = this.data
      clearTimeout(this.timer)
      this.setData({visible: true})
      wx.nextTick(onOpened)
      if (duration > 0 && duration !== Infinity) {
        this.timer = setTimeout(() => {
          this.hide()
        }, duration)
      }
    },
    hide() {
      const {onClose} = this.data
      clearTimeout(this.timer)
      this.setData({visible: false})
      wx.nextTick(onClose)
    },
    onTap(event) {
      const {onClick} = this.data
      if (onClick) {
        onClick(event.detail)
      }
    }
  }
})
