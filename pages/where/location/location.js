var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    longitude: "",
    latitude: "",
    polyline: [{
      points: [{
        longitude: " 35.11325 ",
        latitude: " 122.38206 "
      }, {
        longitude: " 31.1132 ",
        latitude: " 121.382 "
      }],
      color: '#FF0000DD',
      width: 5,
      dottedLine: true
    }],
    controls: [
      {
        iconPath: '/resources/my-site.png',
        position: {
          left: (app.globalData.windowWidth - 30) / 2,
          top: (app.globalData.windowHeight - 50) / 2,
          width: 30,
          height: 30
        }
      },
      {
        id: '1',
        iconPath: '/resources/reset.png',
        position: {
          left: 20,
          top: app.globalData.windowHeight - 50,
          width: 30,
          height: 30
        },
        clickable: true
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext("map")
  },
  reset(e) {
    console.log(e)
    this.mapCtx.moveToLocation()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var instead = this
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        console.log(res)
        instead.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})