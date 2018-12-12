// pages/components/searchBar/searchBar.js
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
    value:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //当改变的时候请求查询接口并把值传个父组件
    change(e){
        if (this.data.value !== e.detail.value){
            this.setData({
                value: e.detail.value
            })
            this.triggerEvent("change", { param: e.detail.value })
        }
    },
    cancel(){
        wx.navigateBack({
            delta: 2
        })
      this.setData({
        value:""
      })
      this.triggerEvent("cancel")// 触发父组件的取消让历史记录显示出来
    },
    delete(){
        this.setData({
            value: ""
        })
    }
  }
})
