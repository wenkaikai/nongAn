//app.js
const common = require("./utils/util.js");
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    // 登录
    //   wx.login({
    //       success: res => {
    //           // this.globalData.code=res.code;
    //         //   console.log(res)

    //         //   return false;
    //           common.ajax({
    //               url: this.globalData.baseUrl + "/api/pc/get_open_id_by_code",
    //               loading: true, //表示不要loading
    //               data: {
    //                   code: res.code
    //               }
    //           }).then(res => {
    //               wx.setStorageSync("session_id", res.session_id)
    //               common.ajax({
    //                   url: this.globalData.baseUrl + "/api/pc/save_user_info",
    //                   loading: true, //表示不要loading
    //                   data: {
    //                       session_id: res.session_id
    //                   }
    //               }).then(res1 => {
    //                   if (res1.status !="1") {
    //                       wx.showToast({
    //                           title: "保存信息失败",
    //                           icon: "none"
    //                       })
    //                   }
    //                   console.log(res1)
    //               })
    //           }, res => {

    //           })
    //       }
    //   }) 

    // wx.checkSession({
    //     success(){
    //        //session_key 未过期，并且在本生命周期一直有效
          
    //     },
    //     fail:res =>{
    //         // session_key 已经失效，需要重新执行登录流程
    //         wx.login({
    //             success:res=>{
    //                 // this.globalData.code=res.code;
    //                 common.ajax({
    //                     url: this.globalData.baseUrl+"/api/pc/get_open_id_by_code",
    //                     loading:true, //表示不要loading
    //                     data:{
    //                         code: res.code
    //                     }
    //                 }).then(res=>{
    //                     wx.setStorageSync("session_id", res.session_id)
    //                     common.ajax({
    //                         url: this.globalData.baseUrl + "/api/pc/save_user_info",
    //                         loading: true, //表示不要loading
    //                         data: {
    //                             session_id: res.session_id
    //                         }
    //                     }).then(res1=>{
    //                         if(res1.status!==1){
    //                             wx.showToast({
    //                                 title:"保存信息失败",
    //                                 icon:"none"
    //                             })
    //                         }
    //                         console.log(res1)
    //                     })
    //                 },res=>{
                       
    //                 })
    //             }
    //         }) 
    //     }
    // })
  },
  globalData: {
    // baseUrl:"https://www.chachabeidiao.com",
    //baseUrl: "http://172.16.103.23:80",
   // baseUrl: "https://secure.moacredit.com",
    //baseUrl1: "https://secure.moacredit.com",
     baseUrl:"https://wenwen.imdo.co",
    baseUrl1: "https://wenwen.imdo.co"
  }
})