// pages/components/baseInfoDetails/baseInfoDetails.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {
        'obj': {
            type: Object
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
      toCorporation(){
          wx.navigateTo({
              url:"/pages/corporationInfo/corporationInfo"
          })
      }
  },
  externalClasses:['showed']
})
