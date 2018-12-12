// pages/imageTextList/imageTextList.js
const common = require("../../utils/util.js")
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      listArray:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
    wx.setNavigationBarTitle({
      title: options.subTitle
    })
    common.ajax({
        url: app.globalData.baseUrl1 +"/api/pc/get_qualification_certificate",
        data:{
            credit_code:options.id
        }
    }).then((res)=>{
        if (res.status == 1 || res.status == 2){
            this.setData({
                listArray:res.data
            })
        }else{
            wx.showToast({
                title: '请求失败了',
                icon: "none",
                duration: 2000
            })
        }
    },()=>{})
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
  toInfo(e){
    let toData = e.currentTarget.dataset;
      toData.baseUrl = "/pages/imageTextInfo/imageTextInfo"
      toData.subTitle = common.getPageParam("subTitle")
      let url = common.combinateUrl(toData);
    wx.navigateTo({
      url:url
    })
  }
})