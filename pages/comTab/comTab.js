// pages/administrativeSupervision/administrativeSupervision.js
const common = require("../../utils/util.js")
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {
    obj:{
      column: "",// 标题；
      objArray: [
      ],
      totalNum: ""
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
        title: subTitle,
    })
    this.data.obj.column = subTitle;
    let newArray = []
    /**独立的个体 */
      if (subTitle == "行政监管") {
          common.ajax({
              url: app.globalData.baseUrl1 +"/api/pc/get_administrative_supervision",
              data:{
                  credit_code:options.id
              }
          }).then((res)=>{
              if(res.status==1){
                  let obj1 = {};//全部信息
                  let obj2 = {};// 良好信息
                  let obj3 = {};// 中性信息
                  let obj4 = {};// 风险信息
                  obj1.label="全部";
                  obj1.isShow = true;
                  obj1.num = res.data.length;
                  obj1.content=[];
                  obj2.label="良好";
                  obj2.isShow = false;
                  obj2.num = 0;
                  obj2.content = [];
                  obj3.label = "中性";
                  obj3.isShow = false;
                  obj3.num = 0;
                  obj3.content = [];
                  obj4.label = "风险";
                  obj4.isShow = false;
                  obj4.num = 0;
                  obj4.content = [];
                  res.data.forEach(function(i,j){
                      if (i.file_property=="良好信息"){
                          obj2.num++;
                          obj2.content.push({
                              subTitle: options.subTitle,
                              itemId: i.id,//这个id 是返回来的id 不是credit_code
                              isTap:true,
                              file_content:i.file_content,// 档案类容
                              file_no: i.file_no,// 档案编号
                              file_number: i.file_number,// 档案编号
                              file_property: i.file_property,// 档案性质
                              issuer: i.issuer,
                              pubdate:i.pubdate,
                              title:i.title,
                              listContent:[
                                  {
                                    title: "",
                                    content: i.title,
                                    label: "良好",
                                   className: "success"
                                  },
                                  {
                                      title: "发布单位",
                                      content: i.issuer,
                                      label: "",
                                      className: ""
                                  },
                                  {
                                      title: "时间",
                                      content: i.pubdate,
                                      label: "",
                                      className: ""
                                  }
                              ]
                          })
                      } 
                      else if (i.file_property == "中性信息"){
                          obj3.num++;
                          obj3.content.push({
                              subTitle: options.subTitle,
                              itemId: i.id,
                              isTap: true,
                              file_content: i.file_content,// 档案类容
                              file_no: i.file_no,// 档案编号
                              file_number: i.file_number,// 档案编号
                              file_property: i.file_property,// 档案性质
                              issuer: i.issuer,
                              pubdate: i.pubdate,
                              title: i.title,
                              listContent: [
                                  {
                                      title: "",
                                      content: i.title,
                                      label: "中性",
                                      className: "warning"
                                  },
                                  {
                                      title: "发布单位",
                                      content: i.issuer,
                                      label: "",
                                      className: ""
                                  },
                                  {
                                      title: "时间",
                                      content: i.pubdate,
                                      label: "",
                                      className: ""
                                  }
                              ]
                          })
                      }
                      else if (i.file_property == "风险信息") {
                          obj4.num++;
                          obj4.content.push({
                              subTitle: options.subTitle,
                              itemId: i.id,
                              isTap: true,
                              file_content: i.file_content,// 档案类容
                              file_no: i.file_no,// 档案编号
                              file_number: i.file_number,// 档案编号
                              file_property: i.file_property,// 档案性质
                              issuer: i.issuer,
                              pubdate: i.pubdate,
                              title: i.title,
                              listContent: [
                                  {
                                      title: "",
                                      content: i.title,
                                      label: "风险",
                                      className: "danger"
                                  },
                                  {
                                      title: "发布单位",
                                      content: i.issuer,
                                      label: "",
                                      className: ""
                                  },
                                  {
                                      title: "时间",
                                      content: i.pubdate,
                                      label: "",
                                      className: ""
                                  }
                              ]
                          })
                      }
                  })
                  obj1.content = obj2.content.concat(obj3.content, obj4.content) ;
                  newArray.push(obj1,obj2,obj3,obj4);
                  this.data.obj.totalNum = newArray[0].num;
                  this.data.obj.objArray = newArray
                  this.setData({
                      obj: this.data.obj
                  })
              }
             
          })
      } else if (subTitle == "双公示"){
          common.ajax({
              url: app.globalData.baseUrl1 + "/api/pc/get_double_publicity",
              data: {
                  credit_code: options.id
              }
          }).then((res) => {
              console.log(res);
              return false;
              if (res.status == 1) {
                  let obj1 = {};//全部
                  let obj2 = {};// 良好
                  let obj3 = {};// 中性
                  let obj4 = {};// 风险
                  obj1.label = "全部";
                  obj1.isShow = true;
                  obj1.num = res.data.length;
                  obj1.content = [];
                  obj2.label = "良好";
                  obj2.isShow = false;
                  obj2.num = 0;
                  obj2.content = [];
                  obj3.label = "中性";
                  obj3.isShow = false;
                  obj3.num = 0;
                  obj3.content = [];
                  obj4.label = "风险";
                  obj4.isShow = false;
                  obj4.num = 0;
                  obj4.content = [];
                  res.data.forEach(function (i, j) {
                      if (i.file_property == "良好") {
                          obj2.num++;
                          obj2.content.push({
                              subTitle: options.subTitle,
                              itemId: i.id,//这个id 是返回来的id 不是credit_code
                              isTap: true,
                              file_content: i.file_content,// 档案类容
                              file_no: i.file_no,// 档案编号
                              file_number: i.file_number,// 档案编号
                              file_property: i.file_property,// 档案性质
                              issuer: i.issuer,
                              pubdate: i.pubdate,
                              title: i.title,
                              listContent: [
                                  {
                                      title: "",
                                      content: i.title,
                                      label: "良好",
                                      className: "success"
                                  },
                                  {
                                      title: "发布单位",
                                      content: i.issuer,
                                      label: "",
                                      className: ""
                                  },
                                  {
                                      title: "时间",
                                      content: i.pubdate,
                                      label: "",
                                      className: ""
                                  }
                              ]
                          })
                      }
                      else if (i.file_property == "中性") {
                          obj3.num++;
                          obj3.content.push({
                              subTitle: options.subTitle,
                              itemId: i.id,
                              isTap: true,
                              file_content: i.file_content,// 档案类容
                              file_no: i.file_no,// 档案编号
                              file_number: i.file_number,// 档案编号
                              file_property: i.file_property,// 档案性质
                              issuer: i.issuer,
                              pubdate: i.pubdate,
                              title: i.title,
                              listContent: [
                                  {
                                      title: "",
                                      content: i.title,
                                      label: "中性",
                                      className: "warning"
                                  },
                                  {
                                      title: "发布单位",
                                      content: i.issuer,
                                      label: "",
                                      className: ""
                                  },
                                  {
                                      title: "时间",
                                      content: i.pubdate,
                                      label: "",
                                      className: ""
                                  }
                              ]
                          })
                      }
                      else if (i.file_property == "风险") {
                          obj4.num++;
                          obj4.content.push({
                              subTitle: options.subTitle,
                              itemId: i.id,
                              isTap: true,
                              file_content: i.file_content,// 档案类容
                              file_no: i.file_no,// 档案编号
                              file_number: i.file_number,// 档案编号
                              file_property: i.file_property,// 档案性质
                              issuer: i.issuer,
                              pubdate: i.pubdate,
                              title: i.title,
                              listContent: [
                                  {
                                      title: "",
                                      content: i.title,
                                      label: "风险",
                                      className: "danger"
                                  },
                                  {
                                      title: "发布单位",
                                      content: i.issuer,
                                      label: "",
                                      className: ""
                                  },
                                  {
                                      title: "时间",
                                      content: i.pubdate,
                                      label: "",
                                      className: ""
                                  }
                              ]
                          })
                      }
                  })
                  obj1.content = obj2.content.concat(obj3.content, obj4.content);
                  newArray.push(obj1, obj2, obj3, obj4);
                  this.data.obj.totalNum = newArray[0].num;
                  this.data.obj.objArray = newArray
                  this.setData({
                      obj: this.data.obj
                  })
              }

          })
      } else if (subTitle == "溯源信息") {
          newArray = [
              {
                  label: "溯源信息",
                  num: "98",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          productName: "毛芋",
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          marketTime: "2018-11-8",
                          traceNum: "AB704OSC07BI06",
                          viewCount: "560",
                          contact: "13673368965",
                          printCount: "654",
                          printAddressIp: "223.93.207",
                          isTap: true// 该条信息是否可以点击 true 表示可以点击
                      }
                      , {
                          productName: "毛芋",
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          marketTime: "2018-11-8",
                          traceNum: "AB704OSC07BI06",
                          viewCount: "560",
                          contact: "13673368965",
                          printCount: "654",
                          printAddressIp: "223.93.207",
                          isTap: true// 该条信息是否可以点击 true 表示可以点击
                      }
                  ]
              }
              , {
                  label: "开具合格证",
                  num: "123",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          productName: "毛芋",
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          issueTime: "2018-11-8",// 开具时间
                          linkMan: "周强",
                          specification: "100kg",
                          certificateCount: "560",// 合格证的数量
                          contact: "13673368965",
                          freeFoodCount: "7788",// 无公害
                          greenFoodCount: "4455",// 绿色食物
                          organicFoodCount: "1122",//有机食物
                          label: "自行开具",
                          isTap: true// 该条信息是否可以点击 true 表示可以点击
                      },
                      {
                          productName: "毛芋头",
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          issueTime: "2018-11-8",// 开具时间
                          linkMan: "周强",
                          certificateCount: "560",// 合格证的数量
                          contact: "13673368965",
                          specification: "100kg",
                          freeFoodCount: "7788",// 无公害
                          greenFoodCount: "4455",// 绿色食物
                          organicFoodCount: "1122",//有机食物
                          label: "自行开具",
                          isTap: true// 该条信息是否可以点击 true 表示可以点击
                      },
                      {
                          productName: "南瓜饼",
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          issueTime: "2018-11-8",// 开具时间
                          linkMan: "周强",
                          certificateCount: "560",// 合格证的数量
                          contact: "13673368965",
                          specification: "100kg",
                          label: "委托开具",
                          isTap: true// 该条信息是否可以点击 true 表示可以点击
                      }
                  ]
              }
          ]
          this.data.obj.totalNum = newArray[0].num;
          this.data.obj.objArray = newArray
          this.setData({
              obj: this.data.obj
          })
      }
      else if (subTitle == "红黑榜") {
          newArray = [
              {
                  label: "",
                  num: "98",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          year: "2015年",
                          label: "红榜",
                          isRepeal: "是",// 是否撤销
                          isIntranetShow: "否",// 是否内网显示
                          isOuternetShow: "是",// 是否外网显示
                      }
                      , {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          year: "2015年",
                          label: "黑榜",
                          isRepeal: "是",// 是否撤销
                          isIntranetShow: "否",// 是否内网显示
                          isOuternetShow: "是",// 是否外网显示ue 表示可以点击
                      }
                  ]
              }
          ]
          this.data.obj.totalNum = newArray[0].num;
          this.data.obj.objArray = newArray
          this.setData({
              obj: this.data.obj
          })
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
      obj:this.data.obj
    })
  },
  /**
   *  点击跳转页面
   */
  toInfo(e) {
    let target = e.currentTarget.dataset;
    let subTitle = common.getPageParam("subTitle");// 子目录
    /**认证信息的时候的title */
    if(subTitle=="认证信息"|| subTitle=="监督检查" ||subTitle=="溯源信息"){
      // 这个时候是详情页面subTile 显示的是 tab 的内容 所以要找到点击当前的tab 值重新赋值subTitle
      this.data.obj.objArray.forEach(function(i){
        if(i.isShow){
          subTitle = i.label;
          return false;
        }
      })
    }
      let baseUrl = "/pages/titleText/titleText";
      if (subTitle=="媒体评价"){
          baseUrl ="/pages/mediaText/mediaText"
      } else if (subTitle == "专利" || subTitle == "商标" || subTitle == "著作权"){
          baseUrl = "/pages/imageTextInfo/imageTextInfo"
      } else if (subTitle == "法院裁判") {
          baseUrl = "/pages/tapList/tapList"
      }else if(subTitle=="经营异常"){
          return false;
      }
      target.baseUrl = baseUrl;
      target.subTitle = subTitle
    let url = common.combinateUrl(target)
      console.log(url)
    wx.navigateTo({
      url: url
    })
  }

})