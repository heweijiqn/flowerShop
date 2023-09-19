// pages/mine/mine.js
// pages/mine/mine.js
var app = getApp()
Page({
  data: {
    userInfo: {
      avatarUrl:'../../assets/icons/1.jpg',
      nickName:'hwj'
    },

    // orderItems
    orderItems: [
      {
        typeId: 0,
        name: '待付款',
        url: 'bill',
        imageurl: '../../assets/nav_img/待付款.png',
      },
      {
        typeId: 1,
        name: '待发货',
        url: 'bill',
        imageurl: '../../assets/nav_img/待发货.png',
      },
      {
        typeId: 2,
        name: '待收货',
        imageurl: '../../assets/nav_img/待收货.png'
      },
      {
        typeId: 3,
        name: '待评价',
        url: '',
        imageurl: '../../assets/nav_img/待评价.png'
      }
    ],
  },
  goCart() {
   wx.switchTab({
     url: "../cart/cart"
   })
 },
  toAddr(e){
   this.setData({
     isTap:true
   });
   wx.navigateTo({
     url: "../addr/addr"
   })
 },
 handleShare(){
   wx.showActionSheet({
     itemList: ['分享到朋友圈', '分享到qq空间', '分享到微信好友'],
     itemColor: '#666'
   })
 },

undlm(){
  wx.showActionSheet({
    itemList: ['未开发'],
    itemColor:'#666'
  })
},

})
