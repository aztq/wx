Page({
  data: {
    imgUrls: [
      '../../../resources/png/strawberry.jpg',
      '../../../resources/png/lemon.jpg',
      '../../../resources/png/milk.jpg',
      '../../../resources/png/deskgame.jpg',
    ],
    indicatorDots: true,
    autoplay: true
  },
  showLocation() {
    wx.navigateTo({
      url: './location/location',
    })
  },
  TofruitList(){
    wx.navigateTo({
      url: '../fruitList/fruitList',
    })
  },
  TocookieList() {
    wx.navigateTo({
      url: '../cookieList/cookieList',
    })
  },
  TowaterList() {
    wx.navigateTo({
      url: '../waterList/waterList',
    })
  },
  test(){
    wx.showToast({
      title: '该功能尚未开放',
      duration: 1000,
      image:'../../../resources/png/false-white.png',
      mask:true
    })
  }
})
