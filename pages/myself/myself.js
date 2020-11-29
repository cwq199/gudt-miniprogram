// pages/User.js

const app = getApp()
Page({
    /*
      * 页面的初始数据
    */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo: false
  },

   //事件处理函数
   bindViewTap: function() {
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.getUserInfo({
      success: res => {
        console.log(res)    //获取的用户信息还有很多，都在res中，看打印结果
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

  //点击收藏按钮，跳转到收藏页
  toCollect:function(){
    wx.navigateTo({
      url: '/pages/Collect/Collect',
    })

  },
  toMysale:function(){
    wx.navigateTo({
      url: '/pages/sale/sale',
    })

  },
  toMybuy:function(){
    wx.navigateTo({
      url: '/pages/buy/buy',
    })

  },
  toUserdetail:function(){
    wx.navigateTo({
      url: '/pages/user-detail/user-detail',
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