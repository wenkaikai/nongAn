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
        let corporationId = options.id;// 公司的id
        let litemId = options.itemId; // 是哪一条的id
        let subTitle = options.subTitle;// 子标题
        let corporation = options.corporation;// 公司的名字
        let infoUrl = options.infoUrl;// 如果需要请求就要请求地址
        wx.setNavigationBarTitle({
            title: corporation,
        })
        let content = [
            "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg"
            ,"https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg"
            , "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg"
            , "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg"
            , "https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg"
        ]
        let listTitle="招远技术开发区商会j揭牌运行"
        let newObj = {
            corporationId: corporationId,
            litemId: litemId,
            subTitle: subTitle,
            corporation: corporation,
            content: content,
            listTitle:listTitle,
            releaseMedia:"水母网",
            time:"2016-09-30"
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