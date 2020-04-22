Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:[]
  },
  content: [
    { kind: '苹果', price: '￥5/斤', type: '新疆', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565580743259&di=5d9fada60103d112dc3feb76f4f82eef&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140103%2F328512-14010322134434.jpg' },
    { kind: '西瓜', price: '￥10/斤', type: '新疆', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603070201,3244561524&fm=26&gp=0.jpg' },
    { kind: '油桃', price: '￥15/斤', type: '新疆', src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2387435112,3290405922&fm=26&gp=0.jpg' },
    { kind: '火龙果', price: '￥15/斤', type: '新疆', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3370843526,3816176115&fm=26&gp=0.jpg' },
    { kind: '梨', price: '￥15/斤', type: '新疆', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566798592043&di=8efe9b8bc7a59533e8ffb59413158acb&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F001NJdrfgy6M5d1q7Dc7a%26690' }
  ],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    this.content.map(con =>{
      con.kind === options.kind ? this.setData({item:con}):false
      
    })
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
    
  }
})