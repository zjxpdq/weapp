Component({
  externalClasses: ['z-class'],
  options: {
    multipleSlots: true
  },
  relations: {
    '../Steps/index': {
      type: 'parent'
    }
  },
  properties: {
    status: {
      type: String,
      //wait、process、finish、error
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    content: {
      type: String,
      value: ''
    }
  },
  data: {
    // step length
    len: 1,
    // current in step index
    index: 0,
    // parent component select current index
    active: 0,
    // css direction
    direction: 'horizontal',
    showNumber: false,
    activeTextColor: '#51AFA3',
    inactiveTextColor: '#A2AAB7'
  },
  methods: {
    updateDataChange(options) {
      this.setData({
        len: options.len,
        index: options.index,
        active: options.active,
        direction: options.direction,
        showNumber: options.showNumber,
        activeTextColor: options.activeTextColor,
        inactiveTextColor: options.inactiveTextColor
      })
    }
  }
});
