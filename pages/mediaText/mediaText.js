// pages/titleText/titleText.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        obj: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let commonInfo = wx.getStorageSync("commonInfo");
        wx.setNavigationBarTitle({
            title: commonInfo.subTitle,
        })
        let content = commonInfo.file_content
        let listTitle = commonInfo.title
        let newObj = {
            litemId: commonInfo.itemId,
            subTitle: commonInfo.subTitle,
            content: content,
            listTitle:listTitle,
            releaseMedia: commonInfo.release_media,
            time: commonInfo.pubdate
        }
        this.setData({
            obj: newObj
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
    previewImg(e) {
        wx.previewImage({
            current: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg', // 当前显示图片的http链接
            urls: [
                'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'// 需要预览的图片http链接列表
                , 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'
                , 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'
            ]
        })
    }
})