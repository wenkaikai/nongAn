// pages/components/searchResult/searchResult.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      'objList':{
          type:Object
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toInfo(){
      wx.navigateTo({
        url:"/pages/enterprise/enterprise"
      })
    }
  },
  externalClasses: ['showed']
})
