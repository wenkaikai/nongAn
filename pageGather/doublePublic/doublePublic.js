// pages/administrativeSupervision/administrativeSupervision.js
const common = require("../../utils/util.js")
const app = getApp();
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
        let id = options.id// 企业的id
        let subTitle = options.subTitle;// 点击的是哪一个子目录
        let corporation = options.corporation ? options.corporation : '农安信用';
        wx.setNavigationBarTitle({
            title: subTitle,
        })
        this.data.obj.column = subTitle;
        let newArray = []
        /**独立的个体 */
      if (subTitle == "双公示") {
            common.ajax({
                url: app.globalData.baseUrl1 + "/api/pc/get_double_publicity",
                data: {
                    credit_code: options.id
                }
            }).then((res) => {
                if (res.status == 1 || res.status == 2) {
                    let obj1 = {};//行政许可
                    let obj2 = {};// 行政处罚
                    obj1.label = "行政许可";
                    obj1.isShow = true;
                    obj1.num = 0;
                    obj1.content = [];
                    obj2.label = "行政处罚";
                    obj2.isShow = false;
                    obj2.num = 0;
                    obj2.content = [];
                    res.data.forEach(function (i, j) {
                        if (i.type != 1) {
                            obj1.num++;
                            obj1.content.push({
                                subTitle: options.subTitle,
                                itemId: i.id,//这个id 是返回来的id 不是credit_code
                                isTap: true,
                                licence_content: i.licence_content,// 类容
                                license_number: i.license_number,// 许可文号
                                audit_category: i.audit_category,// 审批类别
                                item_name: i.item_name,// 项目名称
                                decide_date: i.decide_date, // 决定日期
                                limit_date: i.limit_date,// 截止日期
                                license_authority: i.license_authority,// 许可机关
                                listContent: [
                                    {
                                        title: "",
                                        content: i.item_name,
                                        label: "",
                                        className: ""
                                    },
                                    {
                                        title: "发证机关",
                                        content: i.license_authority,
                                        label: "",
                                        className: ""
                                    },
                                    {
                                        title: "许可文号",
                                        content: i.license_number,
                                        label: "",
                                        className: ""
                                    }
                                ]
                            })
                        }
                        else if (i.type == 1) {
                            obj2.num++;
                            obj2.content.push({
                                subTitle: options.subTitle,
                                itemId: i.id,//这个id 是返回来的id 不是credit_code
                                isTap: true,
                                licence_content: i.licence_content,// 类容
                                license_number: i.license_number,// 许可文号
                                audit_category: i.audit_category,// 审批类别
                                item_name: i.item_name,// 项目名称
                                decide_date: i.decide_date, // 决定日期
                                limit_date: i.limit_date,// 截止日期
                                license_authority: i.license_authority,// 许可机关
                                listContent: [
                                    {
                                        title: "",
                                        content: i.item_name,
                                        label: "",
                                        className: ""
                                    },
                                    {
                                        title: "发证机关",
                                        content: i.license_authority,
                                        label: "",
                                        className: ""
                                    },
                                    {
                                        title: "许可文号",
                                        content: i.license_number,
                                        label: "",
                                        className: ""
                                    }
                                ]
                            })
                        }
                       
                    })
                    newArray.push(obj1, obj2);
                    this.data.obj.totalNum = newArray[0].num;
                    this.data.obj.objArray = newArray
                    this.setData({
                        obj: this.data.obj
                    })
                }

            })
        }
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
        let target = e.currentTarget.dataset;
        let baseUrl = "/pages/titleText/titleText";
        target.baseUrl = baseUrl;
        let url = common.combinateUrl(target)
        wx.navigateTo({
            url: url
        })
    }

})