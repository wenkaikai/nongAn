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
        if (subTitle == "溯源信息") {
            /**执法日志 巡查日志 */
            wx.showLoading({
                title: '加载中',
            })
            let fn1 = () => {
                return new Promise((resolve) => {
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_traceability_info",
                        data: {
                            credit_code: options.id,
                        },
                         loading: true
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj1 = {};//执法日志
                            newArray = [];
                            obj1.label = "溯源信息";
                            obj1.isShow = true;
                            obj1.num = 0;
                            obj1.content = [];
                            console.log(res)
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: true,
                                    zhuti_name: i.zhuti_name,// 主体名称
                                    zhuti_address: i.zhuti_address,//详细地址
                                    zhuti_tel: i.zhuti_tel,// 手机号
                                    production_scale: i.production_scale,// 生产规模
                                    leading_product: i.leading_product, // 主导产品
                                    postcode: i.postcode,// 邮编
                                    product_name: i.product_name,// 产品名称
                                    product_logo: i.product_logo,//产品logo
                                    market_date: i.market_date,// 上市时间
                                    production_unit: i.production_unit,// 生产单位
                                    production_link: i.production_link, // 生产单位联系方式
                                    production_charge_person: i.production_charge_person,// 生产单位负责人
                                    zhuisu_code: i.zhuisu_code,//追溯码
                                    distribution_unit: i.distribution_unit,// 配送单位
                                    distribution_link: i.distribution_link,// 配送单位联系方式
                                    distribution_charge_person: i.distribution_charge_person, // 配送单位负责人
                                    listContent: [
                                        {
                                            title: "产品名称",
                                            content: i.product_name,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "(上市)时间",
                                            content: i.market_date,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "联系方式",
                                            content: i.zhuti_tel,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "追溯码",
                                            content: i.zhuisu_code,
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
            /**自行开具 */
            let fn2 = () => {
                return new Promise((resolve) => {
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_certificate_qualification_oneself",
                        data: {
                            credit_code: options.id,
                        },
                        loading: true
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj2 = {};//巡查日志
                            newArray = [];
                            obj2.label = "开具合格证";
                            obj2.isShow = false;
                            obj2.num = 0;
                            obj2.content = [];
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: true,
                                    company_name: i.company_name,// 企业名称主体名称
                                    business_license: i.business_license,//营业执照
                                    compartment: i.compartment,// 区划
                                    contant: i.contant,// 联系人
                                    contant_number: i.contant_number, //联系电话
                                    company_address: i.company_address,// 企业详细地址
                                    issue_date: i.issue_date,// 开具时间
                                    certificates_number: i.certificates_number, //合格证张数
                                    certificates_preview: i.certificates_preview,// 合格证预览
                                    product_name: i.product_name, //产品
                                    weight: i.weight,// 重量
                                    wugonghai_num: i.wugonghai_num,//无公害农产品应用量
                                    lvseshipin_num: i.lvseshipin_num,//绿色食品应用量
                                    youjishipin_num: i.youjishipin_num,//有机食品应用量
                                    listContent: [
                                        {
                                            title: "产品名称",
                                            content: i.product_name,
                                            label: "自行开具",
                                            className: "success"
                                        },
                                        {
                                            title: "重量",
                                            content: i.weight,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "联系人",
                                            content: i.contant,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "联系电话",
                                            content: i.contant_number,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "开具日期",
                                            content: i.issue_date,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "合格证张数",
                                            content: i.certificates_number,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "无公害农产品应用量",
                                            content: i.wugonghai_num,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "绿色食品应用量",
                                            content: i.lvseshipin_num,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "有机食品应用量",
                                            content: i.youjishipin_num,
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
            /**委托开具*/
            let fn3 = () => {
                return new Promise((resolve) => {
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_certificate_qualification",
                        data: {
                            credit_code: options.id,
                        },
                        loading: true
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj3 = {};//案件检查
                            obj3.label = "开具合格证";
                            obj3.isShow = false;
                            obj3.num = 0;
                            obj3.content = [];
                            newArray = [];
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: true,
                                    company_name: i.company_name,// 企业名称主体名称
                                    business_license: i.business_license,//营业执照
                                    compartment: i.compartment,// 区划
                                    contant: i.contant,// 联系人
                                    contant_number: i.contant_number, //联系电话
                                    company_address: i.company_address,// 企业详细地址
                                    issue_date: i.issue_date,// 开具时间
                                    certificates_number: i.certificates_number, //合格证张数
                                    certificates_preview: i.certificates_preview,// 合格证预览
                                    product_name: i.product_name, //产品
                                    weight: i.weight,// 重量
                                    listContent: [
                                        {
                                            title: "产品名称",
                                            content: i.product_name,
                                            label: "委托开具",
                                            className: "success"
                                        },
                                        {
                                            title: "重量",
                                            content: i.weight,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "联系人",
                                            content: i.contant,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "联系电话",
                                            content: i.contant_number,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "开具日期",
                                            content: i.issue_date,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "合格证张数",
                                            content: i.certificates_number,
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
            Promise.all([fn1(), fn2(), fn3()]).then(values => {
                wx.hideLoading()
                let temp3 = values.pop();
               let content = values[1].content.concat(temp3.content);
                values[1].content = content;
                values[1].num = values[1].num + temp3.num
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
        let subTitle = "";
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