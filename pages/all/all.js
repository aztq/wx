//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    content: [
      { kind: '阿克苏', price: '￥5/斤', type: '新疆', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565580743259&di=5d9fada60103d112dc3feb76f4f82eef&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140103%2F328512-14010322134434.jpg',desc:"很好吃" },
      { kind: '22', price: '￥10/斤', type: '新疆', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603070201,3244561524&fm=26&gp=0.jpg', desc: "很好吃" },
      { kind: '33', price: '￥15/斤', type: '新疆', src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2387435112,3290405922&fm=26&gp=0.jpg', desc: "很好吃" },
      { kind: '4', price: '￥15/斤', type: '新疆', src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3370843526,3816176115&fm=26&gp=0.jpg' },
      { kind: '5', price: '￥15/斤', type: '新疆', src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566798592043&di=8efe9b8bc7a59533e8ffb59413158acb&imgtype=0&src=http%3A%2F%2Fs11.sinaimg.cn%2Fmw690%2F001NJdrfgy6M5d1q7Dc7a%26690', desc: "很好吃" }
    ],
    array: ['苹果', '梨', '西瓜', '桃子'],
    index:0
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})
