// pages/administrativeSupervision/administrativeSupervision.js
const common = require("../../utils/util.js")
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    column:"",// 标题；
    objArray: [],
    totalNum:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
    let id = options.id// 企业的id
    let corporation = options.corporation ? options.corporation : '农安信用';
    wx.setNavigationBarTitle({
      title: corporation,
    })
    let objArray=[];

      if (options.subTitle=='行政监管'){
          objArray=[
              {
                  label: "全部",
                  num: "123",
                  isShow: true,
                  content: [
                      {
                          time: "2018-12-15",
                          title: "食品监督抽检产品合格信息（第二期）",
                          releaseUnit: "中共中央办公厅",
                          label: "良好",
                          itemId: "8848",
                          url: "www.baidu.com"
                      }
                      , {
                          time: "2018-12-15",
                          title: "食品监督抽检产品合格信息（第三期）",
                          releaseUnit: "中共中央办公厅",
                          label: "中性",
                          itemId: "8848",
                          url: "www.baidu.com"
                      }
                  ]
              }
              , {
                  label: "全部",
                  num: "123",
                  isShow: false,
                  content: [{
                      time: "2018-12-15",
                      title: "食品监督抽检产品合格信息（第二期）",
                      releaseUnit: "中共中央办公厅",
                      label: "中性",
                      itemId: "8848",
                      url: "www.baidu.com"
                  }]
              }
              , {
                  label: "全部",
                  num: "123",
                  isShow: false,
                  content: [{
                      time: "2018-12-15",
                      title: "食品监督抽检产品合格信息（第二期）",
                      releaseUnit: "中共中央办公厅",
                      label: "风险",
                      itemId: "8848",
                      url: "www.baidu.com"
                  }]
              }
              , {
                  label: "全部",
                  num: "123",
                  isShow: false,
                  content: [{
                      time: "2018-12-15",
                      title: "食品监督抽检产品合格信息（第二期）",
                      releaseUnit: "中共中央办公厅",
                      label: "良好",
                      itemId: "8848",
                      url: "www.baidu.com"
                  }]
              }
          ]
      } else if (options.subTitle == '协会信息'){
          objArray=[
              {
                  label: "全部",
                  num: "123",
                  isShow: true,
                  content: [
                      {
                          time: "2018-12-15",
                          title: "2015年内蒙古自治区农牧业产业化重点龙头企业公告",
                          releaseUnit: "中共中央办公厅",
                          label: "良好",
                          itemId: "8848",
                          url: "www.baidu.com"
                      }
                      , {
                          time: "2018-12-15",
                          title: "2015年内蒙古自治区农牧业产业化重点龙头企业公告",
                          releaseUnit: "中共中央办公厅",
                          label: "中性",
                          itemId: "8848",
                          url: "www.baidu.com"
                      }
                  ]
              }
              , {
                  label: "中性",
                  num: "123",
                  isShow: false,
                  content: [{
                      time: "2018-12-15",
                      title: "2015年内蒙古自治区农牧业产业化重点龙头企业公告",
                      releaseUnit: "中共中央办公厅",
                      label: "中性",
                      itemId: "8848",
                      url: "www.baidu.com"
                  }]
              }
              , {
                  label: "良好",
                  num: "123",
                  isShow: false,
                  content: [{
                      time: "2018-12-15",
                      title: "2015年内蒙古自治区农牧业产业化重点龙头企业公告",
                      releaseUnit: "中共中央办公厅",
                      label: "风险",
                      itemId: "8848",
                      url: "www.baidu.com"
                  }]
              }
              , {
                  label: "风险",
                  num: "123",
                  isShow: false,
                  content: [{
                      time: "2018-12-15",
                      title: "2015年内蒙古自治区农牧业产业化重点龙头企业公告",
                      releaseUnit: "中共中央办公厅",
                      label: "良好",
                      itemId: "8848",
                      url: "www.baidu.com"
                  }]
              }
          ]
      }
      this.setData({
          column: options.subTitle ? options.subTitle : "农安信用",
          totalNum: objArray[0].num,// 初始化的的总数目
          objArray:objArray
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
  changeTab(e){
    // 点击的时候要做三件事情 一改变颜色 二 总数值的改变 三切换类容
    let id = e.currentTarget.dataset.id// 表示的点击的是第几个
    this.data.objArray.forEach(function(i,j){
      if(j!=id){
        i.isShow=false;
      }else{
        i.isShow = true;
      }
    })
    this.setData({
      totalNum: this.data.objArray[id].num, // 点击的是第几个总数
      objArray:this.data.objArray
    })
  },
  /**
   *  点击跳转页面
   */
  toInfo(e){
    // 一共要传五个值
    let target = e.currentTarget.dataset;
    let id = common.getPageParam("id");// 公司的id
    let corporation = common.getPageParam("corporation");// 公司名字
    let subTitle = common.getPageParam("subTitle");// 子目录
    let itemId = target.itemId;// 列表的id
    let infoUrl = target.infoUrl;// 详情页的url;
    let listTitle = target.listTitle;// 列表的标题 这个和subTitle 是不一样的
    let baseUrl ;
    if(subTitle=="协会信息"){
        baseUrl = "/pages/imageTextInfo/imageTextInfo"  
    } else{
        baseUrl = "/pages/titleText/titleText"
    }
    let url = common.combinateUrl({
      baseUrl: baseUrl,
      id:id.trim(),
      corporation: corporation.trim(),
      itemId: itemId.trim(),
      infoUrl: infoUrl.trim(),
      subTitle: subTitle.trim(),
      listTitle: listTitle.trim()
    })
    wx.navigateTo({
      url: url
    })
  }
  
})