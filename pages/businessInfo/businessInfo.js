// pages/businessInfo/businessInfo.js
const common = require("../../utils/util.js")
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
    console.log(options)
    let id = options.id// 企业的id
      let app = getApp();
      let url = app.globalData.baseUrl + "/api/pc/get_company_detail?company_name=" + options.corporation;
      common.ajax({
          url: url,
          type: "get"
      }).then((res) => {
          res.data.ChangeRecords.forEach(function (i, j) {
              if (i.ChangeDate.indexOf("T") >= 0) {
                  i.ChangeDate = i.ChangeDate.split("T")[0]
              }
          })
          this.setData({
              businessInfo: {
                  baseInfo: {
                      num: 5,
                      status: res.data.Status,//（存续、在业、吊销、注销、迁入、迁出、停业、清算）
                      startDate: res.data.StartDate ? res.data.StartDate.split("T")[0] : res.data.StartDate,//成立时间
                      registCapi: res.data.RegistCapi,//注册资金
                      operName: res.data.OperName,// 法人代表
                      corporationType: res.data.ShortEconKind,// 公司类型
                      englishName: res.data.EnglishName,//英文名字
                      old_name: res.data.old_name,// 曾用名
                      scope: res.data.Scope,//经营范围
                      address: res.data.Address,// 地址
                      termStart: res.data.TermStart ? res.data.TermStart.split("T")[0] : res.data.TermStart,//营业日期
                      updatedDate: res.data.UpdatedDate,//核准日期
                      belongOrg: res.data.BelongOrg//登记机关
                  },
                  mutilNumber: {
                      creditCode: res.data.CreditCode,// 统一社会信用代码
                      businessNo: res.data.No,// 工商注册号
                      organizationNo: res.data.OrgNo,// 组织机构号
                      taxNo: res.data.TaxNo,//纳税人识别号
                  },
                  shareholder: res.data.Partners,
                  employees: res.data.Employees,
                  changeRecords: res.data.ChangeRecords,
                  branches: res.data.Branches
              },
              isFetch:true
          });
          console.log(this.data.businessInfo)
      })
    let subTitle = options.subTitle ? options.subTitle:'农安信用';
    wx.setNavigationBarTitle({
        title: subTitle,
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
    this.setData({
      listShow: this.data.listShow
    })
  }
})