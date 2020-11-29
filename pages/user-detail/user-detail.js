// pages/user/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"宝贝",
        isActive:true
      },
      {
        id:1,
        name:"帖子",
        isActive:false
      },
      {
        id:2,
        name:"评价",
        isActive:false
      },
      {
        id:3,
        name:"动态",
        isActive:false
      }
    ]

    
  },
  to_edit:function(){
    wx.navigateTo({
      url: '/pages/edit/edit',
    })
  },
  //自定义时间 用来接收子组件传递的数据
  handleItemChange(e){
    const {index} =e.detail;
    //获取data中的数组
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  }
})