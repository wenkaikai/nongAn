// pages/imageTextInfo/imageTextInfo.js
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
        let corporationId = options.id;// 公司的id
        let litemId = options.itemId; // 是哪一条的id
        let subTitle = options.subTitle;// 子标题
        let corporation = options.corporation;// 公司的名字
        let infoUrl = options.infoUrl;// 如果需要请求就要请求地址
        let listTitle = options.listTitle?options.listTitle:"";//如果有listTitle
        wx.setNavigationBarTitle({
            title: subTitle
        })
        let content = [
            {
                title: "档案编号",
                content: "ZZ-748-5059-8342"
            },
            {
                title: "档案文号",
                content: "ZZ-748-5059-8342"
            },
            {
                title: "档案性质",
                content: "良好"
            },
            {
                title: "发布单位",
                content: "内蒙古n农牧业产业化龙头企业协会"
            },
            {
                title: "发布时间",
                content: "2012-12-45"
            },
            {
                title: "证书内容",
                content: "经过审核，该单位符合开户条件，准予开立基本存款账户"
            }
        ]
        let imgUrl = {
            url1:"http://docs.ebdoor.com/Image/CompanyCertificate/22/226523.jpg"
        }
        if (subTitle == '协会信息') {
            
        } else if (subTitle == "专利" || subTitle == "商标" || subTitle == "著作权"){
            content = [
                {
                    title: "档案编号",
                    content: "ZZ-748-5059-8342"
                },
                {
                    title: "档案文号",
                    content: "ZZ-748-5059-8342"
                },
                {
                    title: "档案性质",
                    content: "良好"
                },
                {
                    title: "发布单位",
                    content: "内蒙古n农牧业产业化龙头企业协会"
                },
                {
                    title: "发布时间",
                    content: "2012-12-45"
                },
                {
                    title: "档案内容",
                    content: "专利商标著作权经过审核，该单位符合开户条件，准予开立基本存款账户"
                }
            ]
        }
        let newObj = {
            corporationId: corporationId,
            litemId: litemId,
            subTitle: subTitle,
            corporation: corporation,
            infoUrl: infoUrl,
            content: content,
            imgUrl:imgUrl,
            listTitle:listTitle
        }
        this.setData({
            obj: newObj
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