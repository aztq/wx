App({
  globalData:{
    nickname:'zsq'
  },
  onLaunch() {
    //云数据库初始化
    wx.cloud.init({
      env: 'shoptest-wqsuj',
      traceUser: true
    });

    try {
      const res = wx.getSystemInfoSync()
      this.globalData.windowHeight = res.windowHeight,
      this.globalData.windowWidth = res.windowWidth
        //console.log(this.globalData)
    } catch (e) {
    }
  },
  onLoad(){
    
  }
})