var app = getApp()

const db = wx.cloud.database()

Page({
  data: {
    telValue:'',
    historyContent:[],
    userName:'',
    imageUrl:''
  },
  getInput: function (e) {
    this.setData({
      telValue: e.detail.value
    })
  },
  submit(){
    const that = this
    //console.log(app.globalData.nickname)

    wx.getUserInfo({
      success: function (res) {
        this.globalData.nickname = res.userInfo.nickname
        console.log(this.globalData.nickname)
      }
    })




    
    const db = wx.cloud.database()
    db.collection('suggestion').add({
      data: {
        //name: this.data.userName,
        content: this.data.telValue
      },
      success: function (res) {
        //console.log(res)
      },
      fail:err => console.log(err)
    })
  },
  /**
   * 监听页面加载
   */
  onLoad: function (options) {
    

    const that = this
    
    db.collection('suggestion').get({
      success: function (res) {
        that.setData({
          historyContent: res.data
        })
        //console.log(that.data.historyContent)
      }
    })

    
  },

  /**
   * 监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 监听页面显示
   */
  onShow: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})