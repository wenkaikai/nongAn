//app.js
const common = require("./utils/util.js");
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.checkSession({
        success(){
           //session_key 未过期，并且在本生命周期一直有效
          
        },
        fail:res =>{
            // session_key 已经失效，需要重新执行登录流程
            wx.login({
                success:res=>{
                    this.globalData.code=res.code;
                    common.ajax({
                        url:"historyList",
                        loading:true //表示不要loading
                    }).then(res=>{
                        
                    },res=>{
                       
                    })
                }
            }) 
        }
    })
  },
  globalData: {
    baseUrl: "https://www.easy-mock.com/mock/5befb75a00e8be7f5eaf9027/nongAnXing/",

  }
})