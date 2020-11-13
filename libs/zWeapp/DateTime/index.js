const defaultFormatter = function (_, value) {
  switch (_) {
    case 'year':
      return `${value}年`
    case 'month':
      return `${value}月`
    case 'day':
      return `${value}日`
    case 'hour':
      return `${value}时`
    case 'minute':
      return `${value}分`
    default:
      return value
  }
}

const currentYear = new Date().getFullYear()

Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    closeable: {
      type: Boolean,
      value: true
    },
    radiusSize: {
      type: Number,
      value: 20
    },
    maxDate: {
      type: Number,
      value: new Date(currentYear + 10, 11, 31).getTime()
    },
    minDate: {
      type: Number,
      value: new Date(currentYear - 10, 0, 1).getTime()
    },
    minHour: {
      type: Number,
      value: 0
    },
    maxHour: {
      type: Number,
      value: 23
    },
    minMinute: {
      type: Number,
      value: 0
    },
    maxMinute: {
      type: Number,
      value: 59
    },
    filter: null,
    type: {
      type: String,
      value: 'date'
    },
    itemHeight: {
      type: Number,
      value: 48
    },
    visibleItemCount: {
      type: Number,
      value: 5
    },
    formatter: {
      type: null,
      value: defaultFormatter
    },
    value: {
      type: Number,
      value: null,
      observer(value) {
        this.setData({
          currentDate: value
        })
      }
    }
  },
  data: {
    currentDate: 0
  },
  options: {
    multipleSlots: true,
    addGlobalClass: true
  },
  methods: {
    $emit() {
      let args = []
      for (let i = 0; i < arguments.length; i++) {
        args[i] = arguments[i]
      }
      this.triggerEvent.apply(this, args)
    },
    onClose() {
      this.$emit('close')
    },
    onInput(e) {
      this.$emit('input', e.detail)
    }
  }
})
