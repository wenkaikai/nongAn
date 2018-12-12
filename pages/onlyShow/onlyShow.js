// pages/administrativeSupervision/administrativeSupervision.js
const common = require("../../utils/util.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {
    obj: {
     
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
    let id = options.id// 企业的id
    let subTitle = options.subTitle;// 点击的是哪一个子目录
    let corporation = options.corporation ? options.corporation : '农安信用';
    wx.setNavigationBarTitle({
      title: corporation,
    })
    this.data.obj.column = subTitle;
    let newArray = []
    /**独立的个体 */
   if (subTitle == "网站备案"){
      newArray = []
      common.ajax({
          url: app.globalData.baseUrl +"/api/pc/get_website_list?company_name="+options.corporation,
          type:"get"
      }).then((res)=>{
          if (res.resCode=="0000"){
              newArray = res.data.Result;
              this.data.obj.objArray = newArray;
              this.setData({
                  obj: this.data.obj
              });
          }else{
              wx.showToast({
                  icon:"none",
                  text:"请求失败了"
              })
          }
          
      })
    }
    else if (subTitle == "地理位置") {
       let address = wx.getStorageSync("address")
           // 引入SDK核心类
           var QQMapWX = require('../../libs/qqmap-wx-jssdk.min.js');
           // 实例化API核心类
           var demo = new QQMapWX({
               key: '46GBZ-MRG3F-R2ZJ4-NLPMD-EUWUZ-TFFVU' // 必填
           });

           // 调用接口
           let site = {};
           let that = this;
           demo.geocoder({
               address: address,
               success: function (res) {
                   site = res.result.location;
                   newArray = [{
                       detailAddresss: address,
                       latitude: site.lat,
                       longitude: site.lng,
                       markers:[{
                           latitude: site.lat,
                           longitude: site.lng, 
                       }]
                   }]
                   that.data.obj.objArray = newArray;
                   that.setData({
                       obj: that.data.obj
                   });
               }
           });
    }
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
  changeTab(e) {
    // 点击的时候要做三件事情 一改变颜色 二 总数值的改变 三切换类容
    let id = e.currentTarget.dataset.id// 表示的点击的是第几个
    this.data.obj.objArray.forEach(function (i, j) {
      if (j != id) {
        i.isShow = false;
      } else {
        i.isShow = true;
      }
    })
    this.data.obj.totalNum = this.data.obj.objArray[id].num
    this.setData({
      obj: this.data.obj
    })
  },
  /**
   *  点击跳转页面
   */
  toInfo(e) {
    // 一共要传五个值
    let target = e.currentTarget.dataset;
    let id = common.getPageParam("id");// 公司的id
    let corporation = common.getPageParam("corporation");// 公司名字
    let subTitle = common.getPageParam("subTitle");// 子目录
    let itemId = target.itemId;// 列表的id
    let infoUrl = target.infoUrl;// 详情页的url;
    let url = common.combinateUrl({
      baseUrl: "/pages/titleText/titleText",
      id: id.trim(),
      corporation: corporation.trim(),
      itemId: itemId.trim(),
      infoUrl: infoUrl.trim(),
      subTitle: subTitle.trim()
    })
    wx.navigateTo({
      url: url
    })
  }

})