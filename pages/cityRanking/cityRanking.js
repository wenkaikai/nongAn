// pages/cityRanking/cityRanking.js
const common = require("../../utils/util.js");
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: "城市排行"
        })
        common.ajax({
            url: app.globalData.baseUrl + "/api/pc/get_city_rank",
        }).then(res => {
            let obj = res.data[0]// 是一对象;
            let totalCount=0;
            let array=[];
            let max = 0;
            for(let prop in obj){
                if(obj[prop]>=max){
                    max=obj[prop]
                }
                totalCount = totalCount + obj[prop];
                let tempObj={
                    province: prop,
                    count: obj[prop],
                }
                array.push(tempObj);
            }
            // 排序
            let len = array.length;
                for (var i = 0; i < len; i++) {
                    for (var j = 0; j < len - 1 - i; j++) {
                        if (array[j].count < array[j + 1].count) {        //相邻元素两两对比
                            var temp = array[j + 1];        //元素交换
                            array[j + 1] = array[j];
                            array[j] = temp;
                        }
                    }
                }
            
        //加字段算比列,加逗号
                var result = [], counter = 0;
                totalCount = (totalCount || 0).toString().split('');
                for (var i = totalCount.length - 1; i >= 0; i--) {
                    counter++;
                    result.unshift(totalCount[i]);
                    if (!(counter % 3) && i != 0) { result.unshift(','); }
                }
            totalCount =  result.join('');
            array.forEach(function(i,j){
                i.scale = i.count/max;
                if(j<3){
                    let first = "一";
                    if(j==0){
                        first ="一"
                    } else if (j == 1){
                        first = "二"
                    }
                    else if (j == 2) {
                        first = "三"
                    }
                    i.tag=`第${first}名`
                }else{
                    i.tag=j+1; 
                    i.tag = i.tag.toString()
                }
            })
            this.setData({
                obj: array,
                totalCount: totalCount
            });
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

    }
})