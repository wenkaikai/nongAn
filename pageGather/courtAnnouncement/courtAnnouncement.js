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
        console.log(options)
        wx.setNavigationBarTitle({
            title: subTitle,
        })
        this.data.obj.column = subTitle;
        let newArray = []
        /**独立的个体 */
        if (subTitle == "法院公告") {
            common.ajax({
                url: app.globalData.baseUrl1 + "/api/pc/get_announcement_list?company_name=" + corporation,
                type:"get"
            }).then((res) => {
                if (res.resCode == "0000") {
                   
                    let obj1 = {};//全部
                    obj1.label = "全部";
                    obj1.isShow = true;
                    obj1.num = res.data.Result.length;
                    obj1.content = [];
                    res.data.Result.forEach(function (i, j) {
                        let obj = {
                            subTitle: options.subTitle,
                            itemId: i.id,//这个id 是返回来的id 不是credit_code
                            isTap: true,
                            party: i.Party,
                            catetory:i.Category,
                            publishDate: i.PublishDate,
                            publishPage: i.PublishPage,
                            submitDate: i.SubmitDate,
                            content: i.Content,
                            court: i.Court,
                            listContent: [
                                {
                                    title: "",
                                    content: i.Party,//当事人
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "公告类型",
                                    content: i.Category,// 公告类型
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "公告人",
                                    content: i.Court,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "刊登时间",
                                    content: i.PublishDate,
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
                }else{
                    wx.showToast({
                        icon: "none",
                        title: "请求错误了"
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