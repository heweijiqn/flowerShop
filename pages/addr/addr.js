// pages/addressList/addressList.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
       addressList:[],
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function () {
       let addressList=wx.getStorageSync('address')||[];
       if(addressList.length!=0){
           addressList[0].state=true;
       }
       this.setData({
           addressList:addressList
       })
   },
   /**默认地址被修改 */
   radioChange(e){
       let addr=this.data.addressList;
       for(let i=0;i<this.data.addressList.length;i++){
           addr[i].statu=false;
       }
       addr[e.detail.value].statu=true;
       wx.setStorageSync('address', addr)
   },
   delAddress: function (e) {
    this.data.addressList.splice(e.target.id.substring(3), 1);
    if (this.data.addressList.length > 0) {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', this.data.addressList);
    } else {
      this.setData({
        addressList: this.data.addressList
      })
      wx.setStorageSync('addressList', []);
    }

  }

})
