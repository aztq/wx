Page({
  /**
   * 页面的初始数据
   */
  data: {
    content:[
      { kind: '苹果', price: '￥5/斤', type: '新疆', src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565580743259&di=5d9fada60103d112dc3feb76f4f82eef&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140103%2F328512-14010322134434.jpg'},
      { kind: '西瓜', price: '￥10/斤', type: '新疆', src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603070201,3244561524&fm=26&gp=0.jpg'},
      { kind: '油桃', price: '￥15/斤', type: '新疆', src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2387435112,3290405922&fm=26&gp=0.jpg'},
      { kind: '火龙果', price: '￥15/斤', type: '新疆', src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3370843526,3816176115&fm=26&gp=0.jpg'},
      { kind: '梨', price: '￥15/斤', type: '新疆', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566798592043&di=8efe9b8bc7a59533e8ffb59413158acb&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F001NJdrfgy6M5d1q7Dc7a%26690' }
    ]
  },
  //弹窗
  showDetail(event){
    /*
    显示弹窗
    wx.showToast({
      "title":"omg"
    })
    */
    wx.request({
      url: 'http://localhost:3000/aaa', 
      
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      method: 'POST',
      data:[1,2],
      success(res) {
        console.log(res.data)
      },
      fail(err) {
        console.log(err)
      }
    })
    var kind = event.currentTarget.dataset.kind;
    //导航，跳转
    wx.navigateTo({
      url: '../fruit-detail/detail?kind='+kind,
      success: function (res) {
      }
    })
  },
  //地图选择API
  what(){
    wx.chooseLocation({
      success: function(res) {console.log(res)},
    })
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
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
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
      //if (res.from === 'button') {
      //  // 来自页面内转发按钮
      //  console.log(res.target)
      //}
      return {
        title: '水果小店',
        path: '/pages/index/index',
        imageUrl: '/resources/star.png'
      }
  }
})