let basic = require('../Mixins/basic')

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}


Component({
  /**
   * 外部类名
   */
  externalClasses: ['z-class-mask', 'z-class', 'z-class-header'],
  /**
   * 混入外部方法
   */
  behaviors: [basic],
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    years,
    year: date.getFullYear(),
    months,
    month: 2,
    days,
    day: 2,
    value: [9999, 1, 1],
    isDaytime: true,
    date: '2016-09-01',
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose() {
      this.$emit('close')
    },
    onConfirm() {
      this.$emit('confirm')
    },
    onShareAppMessage() {
      return {
        title: 'picker-view',
        path: 'page/component/pages/picker-view/picker-view'
      }
    },
    bindChange(e) {
      const val = e.detail.value
      this.setData({
        year: this.data.years[val[0]],
        month: this.data.months[val[1]],
        day: this.data.days[val[2]],
        isDaytime: !val[3]
      })
    },
    bindDateChange(e) {
      this.setData({
        date: e.detail.value
      })
    },
    onChange(event) {
      const {picker, value, index} = event.detail
      console.log(`当前值：${value}, 当前索引：${index}`)
    }
  }
})
