// pages/components/hotSearch/hotSearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      hotData: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
      toSearchList(e) {
          this.triggerEvent("change", { param: e.target.dataset.content })
      }
  },
  attached(){
      wx.getStorage({
          key: 'hotSearch',
          success: (res)=> {
              console.log(res)
              this.setData({
                  hotData:res.data 
              })
          },
      })
  },
  externalClasses: ['showed']
})
