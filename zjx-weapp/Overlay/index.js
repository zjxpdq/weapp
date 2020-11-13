let basic_1 = require('../Mixins/basic')

Component({
  behaviors: [basic_1],
  properties: {
    visible: Boolean,
    customStyle: String,
    duration: {
      type: Number,
      value: 300
    },
    zIndex: {
      type: Number,
      value: 1
    },
    classes: String
  },
  methods: {
    onClick: function () {
      this.$emit('click')
    },
    // for prevent touchmove
    noop: function () {
    }
  }
})
