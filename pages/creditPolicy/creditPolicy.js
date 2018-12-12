// pages/creditPolicy/creditPolicy.js
const common = require("../../utils/util.js")
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        obj:[],// 是一个二维数组
        page:1,// 当前页面
        totalPage:1,// 总共的页面
        pageSize:5,// 每页的条数,
        session_id:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: "信用政策"
        })
        common.ajax({
            url: app.globalData.baseUrl + "/api/pc/get_credit_policy",
            data:{
                page:1,
                pagesize:5,
                session_id: wx.getStorageSync("session_id")
            }
        }).then((res) => {
            if (res.status==1){
                res.data.forEach(function(i,j){
                    i.book_source = i.book_source.split("：")[1].trim();
                    i.tag = i.book_source.charAt(0);
                    i.abstract = i.all_text.substr(0, 120);
                    i.readCount = Math.ceil(Math.random() * 1000)
                })
                this.setData({
                    "obj[0]":res.data
                })
            }
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
            url: app.globalData.baseUrl + "/api/pc/get_credit_policy",
            data: {
                page: page,
                pagesize: this.data.pageSize,
                session_id: wx.getStorageSync("session_id")
            }
        }).then((res) => {
            if (res.status == 1) {
                if(res.data.length==0){
                    wx.showToast({
                        icon:"none",
                        title:"没有更多了"
                    })
                    return false;
                }
                res.data.forEach(function (i, j) {
                    i.book_source = i.book_source ? i.book_source.split("：")[1].trim() : i.book_source;
                    i.tag = i.book_source.charAt(0);
                    i.abstract = i.all_text.substr(0, 120);
                    i.readCount = Math.ceil(Math.random() * 1000)
                })
                this.setData({
                    ["obj["+this.data.page+"]"]: res.data,
                    page:page
                })
            }
        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    toInfo:function(e){
        let dataset = e.currentTarget.dataset;
        dataset.baseUrl = '/pages/intelligenceInfo/intelligenceInfo'
        let url = common.combinateUrl(dataset)
        wx.navigateTo({
            url: url,
        })
    },
    zan(e) {
        let sessionId = wx.getStorageSync("session_id");
        let itemId = e.currentTarget.dataset.id
        let status = e.currentTarget.dataset.status
        if (status) {// 取消点赞
            common.ajax({
                url: app.globalData.baseUrl + "/api/pc/cancel_like",
                data: {
                    session_id: sessionId,
                    zljg_id: itemId
                }
            }).then((res) => {
                if (res.status == 1) {
                    let index = 0;
                    let indexWrap = 0;
                    this.data.obj.forEach(function (x,y) {
                        x.forEach(function(i,j){
                            if (i.id == itemId) {
                                i.like_status = 0;
                                i.like_count = i.like_count - 1;
                                index = j;
                                indexWrap = y;
                                return false;
                            }
                        })
                    })
                    this.setData({
                        ["obj[" + indexWrap+ "][" + index + "].like_status"]: 0,
                        ["obj[" + indexWrap + "][" + index + "].like_count"]: this.data.obj[indexWrap][index].like_count
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
                if (res.status == 1) {
                    let index = 0;
                    let indexWrap = 0;
                    this.data.obj.forEach(function (x, y) {
                        x.forEach(function (i, j) {
                            if (i.id == itemId) {
                                i.like_status = 1;
                                i.like_count = i.like_count + 1;
                                index = j;
                                indexWrap = y;
                                return false;
                            }
                        })
                    })
                    this.setData({
                        ["obj[" + indexWrap + "][" + index + "].like_status"]: 1,
                        ["obj[" + indexWrap + "][" + index + "].like_count"]: this.data.obj[indexWrap][index].like_count
                    })
                }
            })
        }

    }
})