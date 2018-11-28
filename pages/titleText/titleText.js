// pages/titleText/titleText.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{}
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
    wx.setNavigationBarTitle({
      title: corporation,
    })
    let content = [
        {
            title: "档案编号",
            content: "ZZ-748-5059-8342"
        },
        {
            title: "证件类型",
            content: "开户许可证"
        },
        {
            title: "证书编号",
            content: "4510-02019263"
        },
        {
            title: "证书机关",
            content: "中国人名银行招远市支行"
        },
        {
            title: "证书内容",
            content: "经过审核，该单位符合开户条件，准予开立基本存款账户"
        },
    ]
    if (subTitle == '溯源信息'){
        content = [
            {
                title: "产品信息",
                listContent:[
                    {
                        title:"产品名称",
                        content:"毛芋",
                        type:"text"
                    },
                     {
                        title: "产品logo",
                         content: "http://img3.imgtn.bdimg.com/it/u=1872937468,2538067947&fm=26&gp=0.jpg",
                        type: "picture"
                    },
                    {
                        title: "time",
                        content: "2018-11-18",
                        type: "text"
                    },
                    {
                        title: "生产单位生产单位生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    }, 
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    }
                ]
            },
            {
                title: "主体信息",
                listContent: [
                    {
                        title: "产品名称",
                        content: "毛芋",
                        type: "text"
                    },
                    {
                        title: "产品logo",
                        content: "http://img3.imgtn.bdimg.com/it/u=1872937468,2538067947&fm=26&gp=0.jpg",
                        type: "picture"
                    },
                    {
                        title: "time",
                        content: "2018-11-18",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    }
                ]
            },
            {
                title: "主体简介",
                listContent: [
                    {
                        title: "产品名称",
                        content: "毛芋",
                        type: "text"
                    },
                    {
                        title: "产品logo",
                        content: "http://img3.imgtn.bdimg.com/it/u=1872937468,2538067947&fm=26&gp=0.jpg",
                        type: "picture"
                    },
                    {
                        title: "time",
                        content: "2018-11-18",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    }
                ]
            }
           
        ] 
    } else if (subTitle == '开具合格证'){
        content = [
            {
                title: "",
                listContent: [
                    {
                        title: "产品名称",
                        content: "毛芋",
                        type: "text"
                    },
                    {
                        title: "合格证书",
                        content: "http://img1.imgtn.bdimg.com/it/u=3311584837,4130882212&fm=11&gp=0.jpg",
                        type: "picture"
                    },
                    {
                        title: "time",
                        content: "2018-11-18",
                        type: "text"
                    },
                    {
                        title: "生产单位生产单位生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    }
                ]
            }
        ]
    }
    else if (subTitle == '红黑榜') {
        content = [
            {
                title: "",
                listContent: [
                    {
                        title: "产品名称",
                        content: "毛芋",
                        type: "text"
                    },
                    {
                        title: "合格证书",
                        content: "http://img1.imgtn.bdimg.com/it/u=3311584837,4130882212&fm=11&gp=0.jpg",
                        type: "picture"
                    },
                    {
                        title: "time",
                        content: "2018-11-18",
                        type: "text"
                    },
                    {
                        title: "生产单位生产单位生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: "缙云县松明家庭农场",
                        type: "text"
                    }
                ]
            }
        ]
    }
    else if (subTitle == '消费者评价') {
        content = [
                    {
                        title: "评论性质",
                        content: "裹奖",
                        type: "text"
                    },
                    {
                        title: "发表时间",
                        content: "2018-03-06",
                        type: "text"
                    },
                    {
                        title: "总体评价",
                        content: "我们都有一个家",
                        type: "text"
                    },
                    {
                        title: "具体内容",
                        content: "评价内容内容评价内容内容评价内容内容评价内容内容评价内容内容评价内容内容评价内容内容评价内容内容评价内容内容评价内容内容",
                        type: "text"
                    }
        ]
    }
    else if (subTitle == '失信信息') {
        content = [
            {
                title: "失信被执行人",
                content: "北京同仁堂科技发展股份有限公司制药厂",
                type: "text"
            },
            {
                title: "组织机构代码",
                content: "25548o9jds5ps5",
                type: "text"
            },
            {
                title: "生效法律文书确定的义务",
                content: "我是字我是字我是字我是字我是字我是字我是字我我是字上我是字我是字我是字我是字我是字我是字我字",
                type: "text"
            },
            {
                title: "被执行的履行情况",
                content: "全部未履行",
                type: "text"
            },
            {
                title: "失信被执行人行为具体情形",
                content: "伪造证据、抗拒执行",
                type: "text"
            },
            {
                title: "执行法院",
                content: "安徽省合肥市包河间人民法院",
                type: "text"
            },
            {
                title: "省份",
                content: "安徽",
                type: "text"
            },
            {
                title: "执行依据文号",
                content: "（2015）包民一初字第03424号",
                type: "text"
            },
            {
                title: "案号",
                content: "（2015）包民一初字第03424号",
                type: "text"
            },
            {
                title: "做出执行依据单位",
                content: "长沙市天心区人民法院",
                type: "text"
            },
            {
                title: "立案时间",
                content: "2016-01-01",
                type: "text"
            },
            {
                title: "发布时间",
                content: "2016-01-01",
                type: "text"
            }
        ]
    }
    let newObj = {
      corporationId: corporationId,
      litemId: litemId,
      subTitle: subTitle,
      corporation: corporation,
      infoUrl: infoUrl,
      content:content
    }
    this.setData({
      obj:newObj
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

  },
  previewImg(e){
    wx.previewImage({
      current: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg', // 当前显示图片的http链接
      urls: [
        'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'// 需要预览的图片http链接列表
        ,'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'
        , 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'
      ] 
    })
  }
})