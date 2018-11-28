// pages/businessInfo/businessInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listShow: [true, true, true, true, true]// 默认都是显示的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id// 企业的id
    let corporation = options.corporation ? options.corporation:'农安信用';
    wx.setNavigationBarTitle({
      title: corporation,
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

  },
  toggleShow(e){
    let id = parseInt(e.currentTarget.dataset.id)
    this.data.listShow[id] = !this.data.listShow[id];
    console.log(this.data.listShow)
    this.setData({
      listShow: this.data.listShow
    })
  }
})