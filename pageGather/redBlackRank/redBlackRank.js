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
        if (subTitle == "红黑榜") {
            common.ajax({
                url: app.globalData.baseUrl + "/api/pc/get_red_black_list",
                data: {
                    credit_code: options.id
                }
            }).then((res) => {
                if (res.status == 1 || res.status == 2) {
                    let obj1 = {};//全部
                    obj1.label = "全部";
                    obj1.isShow = true;
                    obj1.num = res.data.length;
                    obj1.content = [];
                    res.data.forEach(function (i, j) {
                        let obj = {
                            subTitle: options.subTitle,
                            itemId: i.id,//这个id 是返回来的id 不是credit_code
                            isTap: true,
                            contact: i.contant,// 联系人
                            contact_number: i.contant_number,//联系电话
                            is_intranet: i.is_intranet,// 是否内网公示
                            is_outer_net: i.is_outer_net,// 是否外网公示
                            is_red_black: i.is_red_black, // 红榜或者黑榜
                            rank_list: i.rank_list,// 上榜主体
                            rank_reason: i.rank_reason ? i.rank_reason:'暂无',// 上榜原因
                            rank_time: i.rank_time,// 上榜时间
                            remark: i.remark ? remark:'暂无',// 备注
                            year: i.year,// 年度
                            is_repeal: i.is_repeal,// 是否撤销
                            listContent: [
                                {
                                    title: "年度",
                                    content: i.year,
                                    label: i.is_red_black=="red"?"红榜":'黑榜',
                                    className: i.is_red_black=="red"?'red':'black'
                                },
                                {
                                    title: "上榜时间",
                                    content: i.rank_time,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "是否撤销",
                                    content: i.is_repeal,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "是否内网公示",
                                    content: i.is_intranet,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "是否外网公示",
                                    content: i.is_outer_net,
                                    label: "",
                                    className: ""
                                }
                            ]
                        }
                        obj1.content.push(obj)
                    })
                    newArray.push(obj1);
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