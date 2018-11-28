// pages/administrativeSupervision/administrativeSupervision.js
const common = require("../../utils/util.js")
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
    let id = options.id// 企业的id
    let subTitle = options.subTitle;// 点击的是哪一个子目录
    let corporation = options.corporation ? options.corporation : '农安信用';
    wx.setNavigationBarTitle({
      title: corporation,
    })
    this.data.obj.column = subTitle;
    let newArray = []
    /**独立的个体 */
    if (subTitle == "历史变更") {
      newArray = [
        {
          label: "期限变更",
          after:"问责不能泛化、滥用。问责是各级党组织的职责所在，一事当前，该不该问责、谁该被问责、怎样问责、问责到何种程度，关乎问责的作用和实际效果，关乎党组织的公信力。当前，个别地方、部门存在着执纪问责简单化现象，“一有错就问责，一问责就动纪”。如果问责简单粗暴，欠缺精准，甚至乱问责、错问责、问错责，就会削弱问责的严肃性和权威性，打击干部担当干事的积极性。问责是个精细活，“精准”是关键。能不能精准发现问题、精准识别问题、精准作出处置，关键在于各级党组织真正担负起主体责任，找准责任主体、把准问责重点，这样才能让党员干部知道自己身上的担子有多重，知道如何更好地约束管理自己，从而取得良好的政治效果、纪法效果、社会效果。",
          before:"变化前问责不能泛化、滥用。问责是各级党组织的职责所在，一事当前，该不该问责、谁该被问责、怎样问责、问责到何种程度，关乎问责的作用和实际效果，关乎党组织的公信力。当前，个别地方、部门存在着执纪问责简单化现象，“一有错就问责，一问责就动纪”。如果问责简单粗暴，欠缺精准，甚至乱问责、错问责、问错责，就会削弱问责的严肃性和权威性，打击干部担当干事的积极性。问责是个精细活，“精准”是关键。能不能精准发现问题、精准识别问题、精准作出处置，关键在于各级党组织真正担负起主体责任，找准责任主体、把准问责重点，这样才能让党员干部知道自己身上的担子有多重，知道如何更好地约束管理自己，从而取得良好的政治效果、纪法效果、社会效果",
          time:"2018-07-23"
        },
        {
          label: "期限变更",
          after: "问责不能泛化、滥用。问责是各级党组织的职责所在，一事当前，该不该问责、谁该被问责、怎样问责、问责到何种程度，关乎问责的作用和实际效果，关乎党组织的公信力。当前，个别地方、部门存在着执纪问责简单化现象，“一有错就问责，一问责就动纪”。如果问责简单粗暴，欠缺精准，甚至乱问责、错问责、问错责，就会削弱问责的严肃性和权威性，打击干部担当干事的积极性。问责是个精细活，“精准”是关键。能不能精准发现问题、精准识别问题、精准作出处置，关键在于各级党组织真正担负起主体责任，找准责任主体、把准问责重点，这样才能让党员干部知道自己身上的担子有多重，知道如何更好地约束管理自己，从而取得良好的政治效果、纪法效果、社会效果。",
          before: "变化前问责不能泛化、滥用。问责是各级党组织的职责所在，一事当前，该不该问责、谁该被问责、怎样问责、问责到何种程度，关乎问责的作用和实际效果，关乎党组织的公信力。当前，个别地方、部门存在着执纪问责简单化现象，“一有错就问责，一问责就动纪”。如果问责简单粗暴，欠缺精准，甚至乱问责、错问责、问错责，就会削弱问责的严肃性和权威性，打击干部担当干事的积极性。问责是个精细活，“精准”是关键。能不能精准发现问题、精准识别问题、精准作出处置，关键在于各级党组织真正担负起主体责任，找准责任主体、把准问责重点，这样才能让党员干部知道自己身上的担子有多重，知道如何更好地约束管理自己，从而取得良好的政治效果、纪法效果、社会效果",
          time: "2018-07-23"
        }
      ]
    } 
    else if (subTitle == "网站备案"){
      newArray = [
        {
         title:"www.baidu.com",
         websiteName:"北京同仁堂股份有限公司",
         domain:"http://www.yuzhou.com",
          time: "2018-07-23",
          licence:"京ICP备15000393号-1"
        },
        {
          title: "www.baidu.com",
          websiteName: "北京同仁堂股份有限公司",
          domain: "http://www.yuzhou.com",
          time: "2018-07-23",
          licence: "京ICP备15000393号-1"
        }
      ]
    }
    else if (subTitle == "地理位置") {
      newArray = [
        {
          longitude: 116.549736,
          latitude: 40.087849,
          area:"北京市顺义区",
          detailAddresss:"北京市顺义区安泰大街空港融慧园6号楼五层空港融慧园6号楼五层",
          markers: [{
            id: 1,
            latitude: 40.087849,
            longitude: 116.549736,
            name: '空港融汇园'
          }]
        }
      ]
    }
    this.data.obj.objArray = newArray
    this.setData({
      obj: this.data.obj
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