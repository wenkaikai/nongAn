// pages/administrativeSupervision/administrativeSupervision.js
const common = require("../../utils/util.js")
Page({

    /**
     * 页面的初始数据
     */

    data: {
        obj: {
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
        console.log(options)
        let id = options.id// 企业的id
        let subTitle = options.subTitle;// 点击的是哪一个子目录
        let corporation = options.corporation ? options.corporation : '农安信用';
        wx.setNavigationBarTitle({
            title: subTitle,
        })
        this.data.obj.column = subTitle;
        let newArray = []
        /**独立的个体 */
        if (1) {
            newArray = [
                {
                    label: "",
                    isShow: true,
                    currentPage: 1,// 当前是第几页
                    num: "98",// 一共多少条
                    content: [
                        {
                            itemId: "8848",
                            url: "www.优酷.com",
                            isTap: true,// 是否
                            listContent: [
                                {
                                    title: "",
                                    content: "裁判名称裁判名称裁判名称裁判名称裁判名称裁判名称",
                                    label: "",
                                    className: ""

                                },
                                {
                                    title: "判决案号",
                                    content: "78opidnnynl",
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "发布日期",
                                    content: "2017-03-24",
                                    label: "",
                                    className: ""
                                }
                            ]
                        },
                        {
                            itemId: "8848",
                            url: "www.优酷.com",
                            isTap: true,// 是否
                            listContent: [
                                {
                                    title: "",
                                    content: "裁判名称裁判名称裁判名称裁判名称裁判名称裁判名称",
                                    label: "",
                                    className: ""

                                },
                                {
                                    title: "判决案号",
                                    content: "78opidnnynl",
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "发布日期",
                                    content: "2017-03-24",
                                    label: "",
                                    className: ""
                                }
                            ]
                        },
                        {
                            itemId: "8848",
                            url: "www.优酷.com",
                            isTap: true,// 是否
                            listContent: [
                                {
                                    title: "",
                                    content: "裁判名称裁判名称裁判名称裁判名称裁判名称裁判名称",
                                    label: "",
                                    className: ""

                                },
                                {
                                    title: "判决案号",
                                    content: "78opidnnynl",
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "发布日期",
                                    content: "2017-03-24",
                                    label: "",
                                    className: ""
                                }
                            ]
                        }
                    ]
                }
            ]
        }
        this.data.obj.totalNum = newArray[0].num;
        this.data.obj.objArray = newArray
        this.setData({
            obj: this.data.obj
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
            obj: this.data.obj
        })
    },
    /**
     *  点击跳转页面
     */
    toInfo(e) {
        // 一共要传五个值
        let target = e.currentTarget.dataset;
        let id = common.getPageParam("id");// 公司的id
        let corporation = common.getPageParam("corporation");// 公司名字
        let subTitle = common.getPageParam("subTitle");// 子目录
        let itemId = target.itemId;// 列表的id
        let infoUrl = target.infoUrl;// 详情页的requestUrl;
        /**认证信息的时候的title */
        if (subTitle == "认证信息" || subTitle == "监督检查" || subTitle == "溯源信息") {
            // 这个时候是详情页面subTile 显示的是 tab 的内容 所以要找到点击当前的tab 值重新赋值subTitle
            this.data.obj.objArray.forEach(function (i) {
                if (i.isShow) {
                    subTitle = i.label;
                    return false;
                }
            })
        }
        let baseUrl = "/pages/titleText/titleText";
        let url = common.combinateUrl({
            baseUrl: baseUrl,
            id: id.trim(),
            corporation: corporation.trim(),
            itemId: itemId.trim(),
            infoUrl: infoUrl.trim(),
            subTitle: subTitle.trim()
        })
        wx.navigateTo({
            url: url
        })
    }

})