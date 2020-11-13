//index.js
//获取应用实例
const app = getApp()
import $Notify from '../../libs/zWeapp/Notify/notify'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    minHour: 10,
    maxHour: 20,
    maxDate: new Date(2019, 10, 1).getTime(),
    show: false,

    minDate: new Date(new Date().getFullYear() - 30, 0, 1).getTime(),
    currentDate: 1604314625957,
    visible: false,
    time: 5 * 60 * 1000,
    timeData: {}
  },

  showPopup() {
    this.setData({show: true})
  },

  onClose() {
    this.setData({visible: false})
  },
  onInput(event) {
    console.log(event)
    // this.setData({
    //   currentDate: event.detail
    // })
  },
  //事件处理函数
  bindViewTap: function () {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    console.log(wx.canIUse('button.open-type.getUserInfo'), 'index 19')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onClick() {
    console.log('我被点击了')
    this.setData({
      visible: !this.data.visible
    })
    // wx.getLocation({
    //   type: 'wgs84',
    //   success(res) {
    //     console.log(res)
    //   }
    // })
  },
  tapDialogButton(e) {
    console.log(e)
  },
  onChange(e) {
    // console.log(e.detail, '我是倒计时打印的')
    this.setData({
      timeData: e.detail
    })
  },

  finished() {

  },

  start() {
    $Notify({type: 'success', msg: '成功提示', duration: 0})
    /*const countDown = this.selectComponent('.control-count-down');
    countDown.start();*/
  },

  pause() {
    $Notify.clear()

    /* const countDown = this.selectComponent('.control-count-down');
     countDown.pause();*/
  },

  reset() {
    /*const countDown = this.selectComponent('.control-count-down');
    countDown.reset();*/
  }
})
