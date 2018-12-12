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
        if (subTitle == "认证信息") {
            /**无公害产品 */
            wx.showLoading({
                title: '加载中',
            })
            let fn1 = () => {
                return new Promise((resolve) => {
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_nuisanceless_product",
                        data: {
                            credit_code: options.id,
                            loading: true
                        }
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj1 = {};//执法日志
                            newArray = [];
                            obj1.label = "无公害产品";
                            obj1.isShow = true;
                            obj1.num = 0;
                            obj1.content = [];
                            console.log(res)
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: true,
                                    annual_turnover: i.annual_turnover,// 年销售额（万元）
                                    process_scale: i.process_scale,//生产规模
                                    product_type: i.product_type,// 产品类别名称
                                    add_date: i.add_date,// 添加时间
                                    license_number: i.license_number, //证书编号
                                    annual_output: i.annual_output,// 年产量（吨）
                                    license_time: i.license_time,// 证书有效期
                                    company_type: i.company_type,//单位性质
                                    firm_name: i.firm_name,// 行业名称
                                    proposer: i.proposer,// 申请人全称
                                    origin_address: i.origin_address, //认定产地地址
                                    compartment: i.compartment,// 区划
                                    origin_number: i.origin_number,//认定产地证书编号
                                    product_name: i.product_name,// 产品名字
                                    listContent: [
                                        {
                                            title: "产品名称",
                                            content: i.product_name,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "证书编号",
                                            content: i.license_number,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "有效期",
                                            content: i.license_time,
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
            /**绿色食品 */
            let fn2 = () => {
                return new Promise((resolve) => {
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_green_food",
                        data: {
                            credit_code: options.id,
                            loading: true
                        }
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj2 = {};//巡查日志
                            newArray = [];
                            obj2.label = "绿色食品";
                            obj2.isShow = false;
                            obj2.num = 0;
                            obj2.content = [];
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: true,
                                    company_name: i.company_name,// 企业名称
                                    product_name: i.product_name,//产品名称
                                    brand_name: i.brand_name,// 商标名称
                                    license_number: i.license_number,// 证书编号
                                    license_time: i.license_time, // 证书有效期
                                    business_type: i.business_type,// 业务类型
                                    enterprise_code: i.enterprise_code,//企业信息码
                                    compartment: i.compartment,// 区划
                                    agricultural_cooperative: i.agricultural_cooperative,// 农业合作社
                                    army: i.army, // 军队
                                    bibcock_logo: i.bibcock_logo,// 龙头企业标识
                                    listContent: [
                                        {
                                            title: "产品名称",
                                            content: i.product_name,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "证书编号",
                                            content: i.license_number,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "有效期",
                                            content: i.license_time,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "业务类型",
                                            content: i.business_type,
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
            /**地理标志产品 */
            let fn3 = () => {
                return new Promise((resolve) => {
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_geography_product",
                        data: {
                            credit_code: options.id,
                            loading: true
                        }
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj3 = {};//案件检查
                            obj3.label = "地理标志产品";
                            obj3.isShow = false;
                            obj3.num = 0;
                            obj3.content = [];
                            newArray = [];
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: false,
                                    product_name: i.product_name,// 产品名称
                                    register_time: i.register_time,// 登记时间
                                    register_number: i.register_number,// 登记证号
                                    company_name: i.company_name, // 企业名称
                                    listContent: [
                                        {
                                            title: "产品名称",
                                            content: i.product_name,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "登记时间（年）",
                                            content: i.register_time,
                                            label: "",
                                            className: ""
                                        },
                                        {
                                            title: "登记证号",
                                            content: i.register_number,
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
            /**有机食品 */
            let fn4 = () => {
                return new Promise((resolve) => {
                    common.ajax({
                        url: app.globalData.baseUrl + "/api/pc/get_organic_products",
                        data: {
                            credit_code: options.id,
                            loading: true
                        }
                    }).then((res) => {
                        if (res.status == 1 || res.status == 2) {
                            let obj4 = {};//案件检查
                            obj4.label = "有机产品";
                            obj4.isShow = false;
                            obj4.num = 0;
                            obj4.content = [];
                            newArray = [];
                            res.data.forEach(function (i, j) {
                                let obj = {
                                    subTitle: options.subTitle,
                                    itemId: i.id,//这个id 是返回来的id 不是credit_code
                                    isTap: false,
                                    product_name: i.product_name,// 产品名称
                                    company_name: i.company_name, // 企业名称
                                    listContent: [
                                        {
                                            title: "产品名称",
                                            content: i.product_name,
                                            label: "",
                                            className: ""
                                        }
                                    ]
                                }
                                obj4.num++;
                                obj4.content.push(obj)
                            })
                            resolve(obj4)
                        }

                    })
                })
            }
            Promise.all([fn1(), fn2(), fn3(), fn4()]).then(values => {
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
        if (subTitle == "地理标志产品" || subTitle == "有机产品"){
            return false;
        }
        wx.navigateTo({
            url: url
        })
    }

})