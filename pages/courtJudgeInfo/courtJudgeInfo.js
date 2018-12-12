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
        let count = options.count;//总共多少条
        let caseType = options.desc// 案件描叙
        let caseType_en = options.value// 英文
        let pageIndex = 1;
        this.setData({
            caseType_en,
            pageIndex,
            corporation,
            count
        })
        wx.setNavigationBarTitle({
            title: subTitle,
        })
        this.data.obj.column = subTitle;
        let newArray = []
        /**独立的个体 */
        common.ajax({
            url: app.globalData.baseUrl1 + "/api/pc/get_judgment_list?company_name=" + corporation + "&caseType=" + caseType_en,
            type: "get"
        }).then((res) => {
            if (res.resCode == "0000") {
                let obj1 = {};//全部
                obj1.label = "全部";
                obj1.isShow = true;
                obj1.num = res.data.Result.length;
                obj1.content = [];
                res.data.Result.forEach(function (i, j) {
                    if (i.CaseType == caseType_en){
                        let temp = JSON.parse(i.CaseRole);
                        let label = ""
                        temp.forEach(function(i,j){
                            if (i.P == corporation){
                                label = i.R;
                                return false;
                            }
                           
                        })// 找到公司的案件身份
                        let obj = {
                            subTitle: options.subTitle,
                            itemId: i.id,//这个id 是返回来的id 不是credit_code
                            isTap: false,
                            listContent: [
                                {
                                    title: "",
                                    content: i.CaseName,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "判决文号",
                                    content: i.CaseNo,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "公布日期",
                                    content: i.SubmitDate,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "案件身份",
                                    content:corporation,
                                    label: label,
                                    className: "success"
                                }
                            ]
                        }
                        obj1.content.push(obj)
                    }
                   
                })
                newArray.push(obj1);
                this.data.obj.objArray = newArray;
                this.data.obj.totalNum = newArray[0].num;
                this.setData({
                    obj: this.data.obj
                });
                console.log(this.data.obj)
            } else {
                wx.showToast({
                    icon: "none",
                    title: "请求错误了"
                })
            }

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
        let pageIndex = this.data.pageIndex;
        let corporation = this.data.corporation;
        let caseType_en = this.data.caseType_en;
        let count = this.data.count;
        let array = this.data.obj.objArray[0].content;
        let newArray = [];
        if (count > array.length){
            pageIndex ++;
        }else{
            return false;
        }
        common.ajax({
            url: app.globalData.baseUrl1 + "/api/pc/get_judgment_list?company_name=" + corporation + "&caseType=" + caseType_en+"&pageIndex="+pageIndex,
            type: "get"
        }).then((res) => {
            if (res.resCode == "0000") {
                let obj1 = {};//全部
                obj1.label = "全部";
                obj1.isShow = true;
                obj1.num = res.data.Result.length;
                obj1.content = [];
                res.data.Result.forEach(function (i, j) {
                    if (i.CaseType == caseType_en) {
                        let temp = JSON.parse(i.CaseRole);
                        let label = ""
                        temp.forEach(function (i, j) {
                            if (i.P == corporation) {
                                label = i.R;
                                return false;
                            }

                        })// 找到公司的案件身份
                        let obj = {
                            subTitle: common.getPageParam("subTitle"),
                            itemId: i.id,//这个id 是返回来的id 不是credit_code
                            isTap: false,
                            listContent: [
                                {
                                    title: "",
                                    content: i.CaseName,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "判决文号",
                                    content: i.CaseNo,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "公布日期",
                                    content: i.SubmitDate,
                                    label: "",
                                    className: ""
                                },
                                {
                                    title: "案件身份",
                                    content: corporation,
                                    label: label,
                                    className: "success"
                                }
                            ]
                        }
                        obj1.content.push(obj)
                    }

                })
                this.data.obj.objArray[0].content = this.data.obj.objArray[0].content.concat(obj1.content);
                this.data.obj.totalNum = this.data.obj.objArray[0].num;
                let up = "obj.objArray["+0+"].content";
                this.setData({
                    [up]: this.data.obj.objArray[0].content
                });
                this.setData({
                    pageIndex:pageIndex
                })
            } else {
                wx.showToast({
                    icon: "none",
                    title: "请求错误了"
                })
            }

        })
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    changeTab(e) {
        
    },
    /**
     *  点击跳转页面
     */
    toInfo(e) {
      
    }

})