//index.js
//获取应用实例
const app = getApp()

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
        console.log("chudile")
    },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
    
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
    }
})
