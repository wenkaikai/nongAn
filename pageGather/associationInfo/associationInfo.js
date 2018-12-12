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
        if (subTitle == "协会信息") {
            common.ajax({
                url: app.globalData.baseUrl1 + "/api/pc/get_association_info",
                data: {
                    credit_code: options.id
                }
            }).then((res) => {
                /**良好信息,中性信息,风险信息 */
                // console.log(res);
                // return false;
                if (res.status == 1 || res.status == 2) {
                    let obj1 = {};//全部
                    let obj2 = {};// 良好
                    let obj3 = {};//中性
                    let obj4 = {};// 风险
                    obj1.label = "全部";
                    obj1.isShow = true;
                    obj1.num = res.data.length;
                    obj1.content = [];
                    obj2.label = "良好";
                    obj2.isShow = false;
                    obj2.num = 0;
                    obj2.content = [];
                    obj3.label = "中性";
                    obj3.isShow = false;
                    obj3.num = 0;
                    obj3.content = [];
                    obj4.label = "风险";
                    obj4.isShow = false;
                    obj4.num = 0;
                    obj4.content = [];
                    res.data.forEach(function (i, j) {
                        let tempObj = {
                            subTitle: options.subTitle,
                            itemId: i.id,//这个id 是返回来的id 不是credit_code
                            isTap: true,
                            file_content: i.file_content,// 档案类容
                            file_number: i.file_number,// 档案编号
                            pubdate: i.pubdate,// 发布时间
                            title: i.title,// 标题
                            file_property: i.file_property, // 档案性质
                            add_date: i.add_date,// 添加时间
                            file_no: i.file_no,// 档案编号
                            img_url: i.img_url,// 图片路径
                            issuer: i.issuer,// 发布机构
                            listContent: [
                                {
                                    title: "",
                                    content: i.title,
                                    label: i.file_property.substr(0,2),
                                    className: i.file_property == "良好信息" ? 'success' : i.file_property == "中性信息"?"warning":"danger"
                                },
                                {
                                    title: "发布单位",
                                    content: i.issuer,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "发布时间",
                                    content: i.pubdate,
                                    label: "",
                                    className: ""
                                }
                            ]
                        }
                        if (i.file_property == "良好信息") {
                            obj2.num++;
                            obj2.content.push(tempObj)
                        }
                        else if (i.file_property == "中性信息"){
                            obj3.num++;
                            obj3.content.push(tempObj)
                        }
                        else if (i.file_property == "风险信息"){
                            obj4.num++;
                            obj4.content.push(tempObj)
                        }
                        
                    })
                    obj1.content = obj2.content.concat(obj3.content, obj4.content);
                    newArray.push(obj1, obj2, obj3, obj4);
                    this.data.obj.objArray = newArray;
                    this.data.obj.totalNum = newArray[0].num;
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
        let baseUrl = "/pages/imageTextInfo/imageTextInfo";
        target.baseUrl = baseUrl;
        target.subTitle = target.subTitle
        let url = common.combinateUrl(target)
        wx.navigateTo({
            url: url
        })
    }

})