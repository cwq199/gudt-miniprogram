// pages/index1/index1.js

Page({
  data: {
   // concernSucceed:true,
   title:[
    {
      user_id:"0",
      likes:"1"
    }
  ],
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
        name:"评论",
        isActive:false
      },
      {
        id:3,
        name:"动态",
        isActive:false
      }
    ]
  },

  chooseConcern:function(){
    let value=this.data.concernSucceed;
    wx.showToast({
      title:'关注成功',
      icon:'success',
      duration:1500
    })
    this.setData({
      concernSucceed:!value
    })
    console.log(value)
  },
  getUserInfo(e){
    let index = e.currentTarget.dataset.index
    let that = this
    let likes = e.currentTarget.dataset.likes
    let titles = this.data.title
    if (likes==1){
      titles[index].likes = '0'
      that.setData({
        title: titles
      })
      console.log(e.currentTarget.dataset.index,"关注了")
    }else{
      titles[index].likes = 1
      that.setData({
        title: titles
      })
      console.log(e.currentTarget.dataset.index, "取关了")
    }
  },

  handleItemChange(e){
    const {index}=e.detail;
     let {tabs}=this.data;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
  })
  }
  })
  