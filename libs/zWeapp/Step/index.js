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
    },
    icon: {
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
    direction: 'horizontal'
  },
  methods: {
    updateDataChange(options) {
      this.setData({
        len: options.len,
        index: options.index,
        active: options.active,
        direction: options.direction
      })
    }
  }
});
