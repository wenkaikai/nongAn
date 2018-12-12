// pages/businessInfo/businessInfo.js
const common = require("../../utils/util.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.id// 企业的id
        let app = getApp();
        let url = app.globalData.baseUrl + "/api/pc/get_company_detail?company_name=" + options.corporation;
        common.ajax({
            url: url,
            type: "get"
        }).then((res) => {
            res.data.ChangeRecords.forEach(function(i,j){
                if (i.ChangeDate.indexOf("T")>=0){
                    i.ChangeDate = i.ChangeDate.split("T")[0]
                }
            })
            this.setData({
                changeRecords: res.data.ChangeRecords
            });
        })
        let subTitle = options.subTitle ? options.subTitle : '农安信用';
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

    }
})