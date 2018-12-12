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
        if (subTitle == "监督检查") {
            /**执法日志 巡查日志 */
            wx.showLoading({
                title: '加载中',
            })
            let fn1 = ()=>{
               return new Promise((resolve)=>{
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_supervise_examine_log",
                        data: {
                            credit_code: options.id,
                            loading:true
                        }
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj1 = {};//执法日志
                            newArray = [];
                            obj1.label = "执法日志";
                            obj1.isShow = true;
                            obj1.num = 0;
                            obj1.content = [];
                            console.log(res)
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: true,
                                    scene_photo: i.scene_photo,// 照片
                                    law_enforcement_person: i.law_enforcement_person,//执法人
                                    law_time: i.law_time,// 执法时间
                                    check_situation: i.check_situation ? i.check_situation:'暂无',// 检查情况与处理意见
                                    law_enforcement: i.law_enforcement, // 执法单位
                                    is_scan: i.is_scan ? i.is_scan:'否',// 是否扫描录入
                                    listContent: [
                                        {
                                            title: "执法时间",
                                            content: i.law_time,
                                            label: "",
                                            className: ""
                                        }, 
                                        {
                                            title: "执法单位",
                                            content: i.law_enforcement,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "执法人",
                                            content: i.law_enforcement_person,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "是否扫描录入",
                                            content: i.is_scan,
                                            label: "",
                                            className: ""
                                        }
                                    ]
                                }
                                obj1.num++;
                                obj1.content.push(obj)
                            })
                            resolve(obj1)
                        }

                    })
                })
            }
            /**巡查日志 */
            let fn2 = ()=>{
                return new Promise((resolve)=>{
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_supervise_patrol_log",
                        data: {
                            credit_code: options.id,
                            loading: true
                        }
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj2 = {};//巡查日志
                            newArray = [];
                            obj2.label = "巡查日志";
                            obj2.isShow = false;
                            obj2.num = 0;
                            obj2.content = [];
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: true,
                                    patrol_time: i.patrol_time,// 巡查时间
                                    patrol_enforcement_person: i.patrol_enforcement_person,// 执法人
                                    check_situation: i.check_situation,// 检查情况与处理意见
                                    scene_photo: i.scene_photo, //照片
                                    patrol_enforcement: i.patrol_enforcement, // 执法单位
                                    log_type: i.log_type, // log_type 监督检查日志类型：执法日志，巡查日志
                                    is_scan: i.is_scan ? i.is_scan : '否',// 是否扫描录入
                                    listContent: [
                                        {
                                            title: "巡查时间",
                                            content: i.patrol_time,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "巡查单位",
                                            content: i.patrol_enforcement,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "巡查人",
                                            content: i.patrol_enforcement_person,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "是否扫描录入",
                                            content: i.is_scan,
                                            label: "",
                                            className: ""
                                        }
                                    ]
                                }
                                obj2.num++;
                                obj2.content.push(obj)
                            })
                            resolve(obj2)
                        }

                    })
                })
            }
            /**监督检查 */
            let fn3 = () => {
                return new Promise((resolve) => {
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_supervise_examine_case_register",
                        data: {
                            credit_code: options.id,
                            loading:true
                        }
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj3 = {};//案件登记
                            obj3.label = "案件登记";
                            obj3.isShow = false;
                            obj3.num = 0;
                            obj3.content = [];
                            newArray = [];
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: true,
                                    law_enforcement_person: i.law_enforcement_person,// 执法人
                                    law_enforcement: i.law_enforcement,// 执法单位
                                    start_case_time: i.start_case_time,// 立案时间
                                    judgment_basis: i.judgment_basis, // 判定依据
                                    end_case_time: i.end_case_time,// 结束时间
                                    penalty: i.penalty,// 罚款金额
                                    case_number: i.case_number,// 案件编号
                                    case_name: i.case_name,// 案件名称
                                    illegal_fact: i.illegal_fact,// 违法事实
                                    case_money: i.case_money,// 涉案金额
                                    is_scan: i.is_scan,//是否录入
                                    listContent: [
                                        {
                                            title: "案件编号",
                                            content: i.case_number,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "立案时间",
                                            content: i.start_case_time,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "结案时间",
                                            content: i.end_case_time,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "是否扫描录入",
                                            content: i.is_scan,
                                            label: "",
                                            className: ""
                                        }
                                    ]
                                }
                                obj3.num++;
                                obj3.content.push(obj)
                            })
                            resolve(obj3)
                        }

                    })
                })
            }
            Promise.all([fn1(), fn2(),fn3()]).then(values=>{
                wx.hideLoading()
                this.setData({
                    obj: {
                        column: this.data.obj.column,// 标题；
                        objArray: values,
                        totalNum: values[0].num
                    }
                })
                console.log(this.data.obj)
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
        let subTitle="";
        target.baseUrl = baseUrl;
        this.data.obj.objArray.forEach(function (i) {
            if (i.isShow) {
                subTitle = i.label;
                return false;
            }
        })
        target.subTitle = subTitle
        let url = common.combinateUrl(target);
        wx.navigateTo({
            url: url
        })
    }

})