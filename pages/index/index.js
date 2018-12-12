//index.js
//获取应用实例
const app = getApp()
const common = require("../../utils/util.js")
Page({
    onLoad:function(){
       
    },
    onShow: function () {
       
    },
    onReady:function(){
        // wx.hideShareMenu();
    },
    onShareAppMessage: function () {
       let shareObj={
           title:"都在用的弄产品安全信用平台",
           imageUrl:"https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg",
       }
       return shareObj;
     
    },
    onReachBottom(){
       
    },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
      let session_id = wx.getStorageSync("session_id")
      if (session_id){
          wx.checkSession({
              success: res => {
                  common.ajax({
                      url: app.globalData.baseUrl + "/api/pc/get_credit_policy",
                      data: {
                          page: 1,
                          pagesize: 5,
                          session_id: session_id
                      }
                  }).then((res) => {
                      if (res.status == 1) {
                          res.data.forEach(function (i, j) {
                              i.book_source = i.book_source.split("：")[1].trim();
                              i.tag = i.book_source.charAt(0);
                              i.abstract = i.all_text.substr(0, 120);
                              i.readCount = Math.ceil(Math.random() * 1000)
                          })
                          this.setData({
                              "obj[0]": res.data
                          })
                      }
                  })
              },
              fail: res => {
                  wx.login({
                      success: res => {
                          common.ajax({
                              url: app.globalData.baseUrl + "/api/pc/get_open_id_by_code",
                              data: {
                                  code: res.code
                              }
                          }).then(res => {
                              if (res.status == 1) {
                                  wx.setStorageSync("session_id", res.session_id);
                                  common.ajax({
                                      url: app.globalData.baseUrl + "/api/pc/get_credit_policy",
                                      data: {
                                          page: 1,
                                          pagesize: 5,
                                          session_id: res.session_id
                                      }
                                  }).then((res) => {
                                      if (res.status == 1) {
                                          res.data.forEach(function (i, j) {
                                              i.book_source = i.book_source.split("：")[1].trim();
                                              i.tag = i.book_source.charAt(0);
                                              i.abstract = i.all_text.substr(0, 120);
                                              i.readCount = Math.ceil(Math.random() * 1000)
                                          })
                                          this.setData({
                                              "obj[0]": res.data
                                          })
                                      }
                                  })
                              }
                          }, res => {

                          })
                      }
                  })
              }
          })
      }else{
          wx.login({
              success: res => {
                  common.ajax({
                      url: app.globalData.baseUrl + "/api/pc/get_open_id_by_code",
                      data: {
                          code: res.code
                      }
                  }).then(res => {
                      if (res.status == 1){
                          wx.setStorageSync("session_id", res.session_id);
                          common.ajax({
                              url: app.globalData.baseUrl + "/api/pc/get_credit_policy",
                              data: {
                                  page: 1,
                                  pagesize: 5,
                                  session_id: res.session_id
                              }
                          }).then((res) => {
                              if (res.status == 1) {
                                  res.data.forEach(function (i, j) {
                                      i.book_source = i.book_source.split("：")[1].trim();
                                      i.tag = i.book_source.charAt(0);
                                      i.abstract = i.all_text.substr(0, 120);
                                      i.readCount = Math.ceil(Math.random() * 1000)
                                  })
                                  this.setData({
                                      "obj[0]": res.data
                                  })
                              }
                          })
                      }
                  }, res => {

                  })
              }
          })
      }
      // 加载的时候获取
    common.ajax({
        url: app.globalData.baseUrl +"/api/pc/get_hot_company",
        loading:true// 请求的时候没有加载的动画
    }).then((res)=>{
        if(res.status=="1"){
            wx.setStorage({
                key: 'hotSearch',
                data: res.data
            })
        }else{
            wx.showToast({
                title: '请求失败',
                icon:"none"
            })
        }
       
    })
  },
   toSearch(){
       wx.navigateTo({
           url:"/pages/search/search"
       })
   },
   creditOptimization(){
       wx.navigateTo({
           url: "/pages/creditOptimization/creditOptimization"
       })
   },
    cityRanking(){
        wx.navigateTo({
            url: "/pages/cityRanking/cityRanking"
        }) 
    },
    creditPolicy(){
        wx.navigateTo({
            url: "/pages/creditPolicy/creditPolicy"
        }) 
    },
    nearbyCorporation(){
        wx.navigateTo({
            url: "/pages/nearbyCorporation/nearbyCorporation"
        })  
    },
    toIntelligenceInfo(){
        wx.navigateTo({
            url:"/pages/intelligenceInfo/intelligenceInfo"
        })
    },
    toInfo: function (e) {
        let dataset = e.currentTarget.dataset;
        dataset.baseUrl = '/pages/intelligenceInfo/intelligenceInfo'
        let url = common.combinateUrl(dataset)
        wx.navigateTo({
            url: url,
        })
    },
    zan(e){
        let sessionId = wx.getStorageSync("session_id");
        let itemId = e.currentTarget.dataset.id
        let status = e.currentTarget.dataset.status
        if (status){// 取消点赞
            common.ajax({
                url: app.globalData.baseUrl + "/api/pc/cancel_like",
                data: {
                    session_id: sessionId,
                    zljg_id: itemId
                }
            }).then((res) => {
                if (res.status == 1) {
                    let index = 0;
                    this.data.obj[0].forEach(function (i, j) {
                        if (i.id == itemId) {
                            i.like_status = 0;
                            i.like_count = i.like_count - 1;
                            index = j;
                            return false;
                        }
                    })
                    this.setData({
                        ["obj[0][" + index + "].like_status"]: 0,
                        ["obj[0][" + index + "].like_count"]: this.data.obj[0][index].like_count
                    })
                }
            }) 
        } else {// 点赞
            common.ajax({
                url: app.globalData.baseUrl + "/api/pc/like",
                data: {
                    session_id: sessionId,
                    zljg_id: itemId
                }
            }).then((res) => {
                let index = 0;
                if (res.status == 1) {
                    this.data.obj[0].forEach(function (i, j) {
                        if (i.id == itemId) {
                            i.like_status = 1;
                            i.like_count = i.like_count + 1
                            index = j;
                            return false;
                        }

                    })
                    this.setData({
                        ["obj[0][" + index + "].like_status"]: 1,
                        ["obj[0][" + index + "].like_count"]: this.data.obj[0][index].like_count
                    })
                }
            }) 
        }
        
       
    }
})
