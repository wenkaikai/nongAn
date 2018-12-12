// pages/creditOptimization/creditOptimization.js
const common = require("../../utils/util.js");
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        obj:[
           
        ],
        pagesize:20,
        page:1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: "信用优选"
        })
        common.ajax({
            url: app.globalData.baseUrl +"/api/pc/get_credit_optimization",
            data:{
               pagesize:this.data.pagesize,
               page:this.data.page
            }
        }).then(res=>{
            if (res.status==2){
                return false;
            }
            this.setData({
                "obj[0]":res.data,
            });
            console.log(this.data.obj)
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
        let page = this.data.page;
        page++;
        common.ajax({
            url: app.globalData.baseUrl + "/api/pc/get_credit_optimization",
            data: {
                pagesize: this.data.pagesize,
                page: this.data.page
            }
        }).then(res => {
            if (res.status == 2) {
             
                wx.showToast({
                    icon:"none",
                    title:"没有更多了"
                })
                return false;
            }
            this.setData({
                ["obj["+ this.data.page + "]"]: res.data,
                page:page
            });
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    toInfo(e){
        console.log(e)
        wx.navigateTo({
            url:"/pages/enterprise/enterprise?corporation="+e.currentTarget.dataset.name
        })
    }
})