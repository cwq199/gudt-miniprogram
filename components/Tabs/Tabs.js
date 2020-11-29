// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  tabs:{
    type:Array,
    value:[]
  }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 
   */
  methods: {
    hanldeItemTap(e){
      /*获取索引*/
      const {index}=e.currentTarget.dataset;
      //触发父组件中的自定义事件，同时传递数据
      this.triggerEvent("itemChange",{index});
      
     
    }
  }
})
