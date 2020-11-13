Component({
  externalClasses: ['z-class'],
  properties: {
    active: {
      type: Number,
      value: -1,
      observer: '_updateDataChange'
    },
    direction: {
      type: String,
      //value has horizontal or vertical
      value: 'horizontal'
    },
    background: {
      type: String,
      value: 'rgba(199, 230, 226, 0.15)'
    }
  },
  relations: {
    '../Step/index': {
      type: 'child',
      linked() {
        this._updateDataChange();
      },
      linkChanged() {
        this._updateDataChange();
      },
      unlinked() {
        this._updateDataChange();
      }
    }
  },
  methods: {
    _updateDataChange() {
      let steps = this.getRelationNodes('../Step/index');
      const len = steps.length;
      if (len > 0) {
        steps.forEach((step, index) => {
          step.updateDataChange({
            len,
            index,
            active: this.data.active,
            direction: this.data.direction
          })
        })
      }
    }
  }
});
