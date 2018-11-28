// pages/components/enterpriseBaseInfo/enterpriseBaseInfo.js
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
      slidDown:false// 初始化的时候是false 就是隐藏的
  },

  /**
   * 组件的方法列表
   */
  methods: {
      toggleBaseInfo(){
          this.setData({
              slidDown:!this.data.slidDown
          })
          this.triggerEvent("toggleBaseInfo")
      },
      callPhone(e){
          wx.makePhoneCall({
              phoneNumber: e.currentTarget.dataset.phoneNumber 
          })
         
      }
  }
})
