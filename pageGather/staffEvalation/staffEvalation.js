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
        if (subTitle == "员工评价") {
            common.ajax({
                url: app.globalData.baseUrl1 + "/api/pc/get_employee_evaluation",
                data: {
                    credit_code: options.id
                }
            }).then((res) => {
                if (res.status == 1 || res.status == 2) {
                    let obj1 = {};//全部
                    let obj2 = {};// 合格
                    let obj3 = {};//公示
                    let obj4 = {};// 风险
                    obj1.label = "全部";
                    obj1.isShow = true;
                    obj1.num = res.data.length;
                    obj1.content = [];
                    obj2.label = "裹奖";
                    obj2.isShow = false;
                    obj2.num = 0;
                    obj2.content = [];
                    obj3.label = "中性";
                    obj3.isShow = false;
                    obj3.num = 0;
                    obj3.content = [];
                    obj4.label = "投诉";
                    obj4.isShow = false;
                    obj4.num = 0;
                    obj4.content = [];
                    res.data.forEach(function (i, j) {
                        let obj = {
                            subTitle: options.subTitle,
                            itemId: i.id,//这个id 是返回来的id 不是credit_code
                            isTap: true,
                            pubdate: i.pubdate,// 发表时间
                            title: i.title,//标题
                            content: i.content,// 具体内容
                            general_evaluation: i.general_evaluation,// 总体评价
                            employee: i.employee, // 员工身份信息
                            file_property: i.file_property,// 档案性质
                            listContent: [
                                {
                                    title: "",
                                    content: i.general_evaluation,
                                    label: i.file_property.substr(0, 2),
                                    className: i.file_property == "裹奖" ? 'success' : i.file_property == "中性" ? "warning" : "danger"
                                },
                                {
                                    title: "发表时间",
                                    content: i.pubdate,
                                    label: "",
                                    className: ""
                                }
                            ]
                        }
                        if (i.file_property == "裹奖") {
                            obj2.num++;
                            obj.listContent[0].className = "success"
                            obj2.content.push(obj)
                        } else if (i.file_property == "中性") {
                            obj3.num++;
                            obj.listContent[0].className = "warning"
                            obj3.content.push(obj)
                        } else if (i.file_property == "投诉") {
                            obj4.num++;
                            obj.listContent[0].className = "danger"
                            obj4.content.push(obj)
                        }
                    })
                    obj1.content = obj2.content.concat(obj3.content, obj4.content);
                    newArray.push(obj1, obj2, obj3, obj4);
                    this.data.obj.objArray = newArray;
                    this.data.obj.totalNum = newArray[0].num;
                    this.setData({
                        obj: this.data.obj
                    });
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