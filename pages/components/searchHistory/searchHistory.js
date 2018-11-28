// pages/conponents/searchHistory/searchHistory.js
// const common = require("../../../utils/util.js")
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
    historyData:["历史记录一","历史记录二","历史记录三"]
  },
  attached(){
     this.getRecords();
 },

  /**
   * 组件的方法列表
   */
  methods: {
      getRecords(){
          let searchRecord = wx.getStorageSync('searchRecord') || [];
          this.setData({
              historyData: searchRecord
          })
      },
      clearAll(){
          wx.removeStorageSync("searchRecord");
          this.setData({
              historyData: []
          })
      },
      deleteSingle(e){
          let searchRecord = wx.getStorageSync("searchRecord");
          searchRecord.splice(e.target.dataset.index,1);
          this.setData({ historyData: searchRecord})
          wx.setStorageSync("searchRecord",searchRecord);
      },
      toSearchList(e){
          this.triggerEvent("change", { param: e.target.dataset.content })
      }
  },
  externalClasses: ['showed']
})
