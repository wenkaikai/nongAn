// pages/enterprise/enterprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allObj:{
      /** 政府公示模块 */
      governmentPublicity:{
        title:"政府公示",
        corporation:"杭州新洲生态农业开发有限公司",
        id:"81192",
        list:{
          list1: [// 每四个一组
            {
              subTitle:"资质证明",
              num:59,
              icon:"icon--zhizhimingpian",
              path:"/pages/imageTextList/imageTextList",
              isTap:true// 是否是能点击的
            },
            {
              subTitle: "工商信息",
              num: 51,
              icon: "icon-businessinformation",
              path: "/pages/businessInfo/businessInfo",
              isTap: "true"// 是否是能点击的
            },
            {
              subTitle: "行政监管",
              num: 100,
              icon: "icon-wicon-xing-zheng-fu-wu",
              path: "/pages/administrativeSupervision/administrativeSupervision",
              isTap: "true"// 是否是能点击的
            },
            {
              subTitle: "双公示",
              num: 120,
              icon: "icon-shuanggongshi",
              path: "/pages/comTab/comTab",
              isTap: "true"// 是否是能点击的
            }
          ],
          list2: [// 每四个一组
            {
              subTitle: "历史变更",
              num: 59,
              icon: "icon-lishibiangengbiao",
              path: "/pages/onlyShow/onlyShow",
              isTap: true,// 是否是能点击的
            },
            {
              subTitle: "质量检查",
              num: 15,
              icon: "icon-tipiaozhiliangjiancha",
              path: "/pages/comTab/comTab",
              isTap: "true"// 是否是能点击的
            },
            {
              subTitle: "网站备案",
              num: 100,
              icon: "icon-wangzhanbeianICP",
              path: "/pages/onlyShow/onlyShow",
              isTap: "true"// 是否是能点击的
            },
            {
              subTitle: "地理位置",
              num: 120,
              icon: "icon-diliweizhi",
              path: "/pages/onlyShow/onlyShow",
              isTap: "true"// 是否是能点击的
            }
          ]
        }
      },
       /** 监督检查 大类*/
      governmentSupervice: {
        title: "政府监管",
        corporation: " 杭州新洲生态农业开发有限公司",
        id: "81192",
        list: {
          list1: [// 每四个一组
            {
              subTitle: "认证信息",
              num: 51,
              icon: "icon-renzheng",
              path: "/pages/comTab/comTab",
              isTap: true// 是否是能点击的
            },
            {
              subTitle: "监督检查",
              num: 56,
              icon: "icon-1349771600375",
              path: "/pages/comTab/comTab",
              isTap: true// 是否是能点击的
            }
          ]
        }
      },
      /**内控信息 */
      innerControlInfo:{
        title: "内控信息",
        corporation: " 杭州新洲生态农业开发有限公司",
        id: "81192",
        list: {
          list1: [// 每四个一组
            {
              subTitle: "投入品采购",
              num: 51,
              icon: "icon-huigou009",
              path: "/pages/comTab/comTab",
              isTap: false// 是否是能点击的
            },
            {
              subTitle: "溯源信息",
              num: 56,
              icon: "icon-suyuanxinxi",
              path: "/pages/comTab/comTab",
              isTap: true// 是否是能点击的
            },
             {
              subTitle: "检测信息",
              num: 56,
              icon: "icon-check_inquiry_2",
              path: "/pages/comTab/comTab",
              isTap: false// 是否是能点击的
            },
            {
              subTitle: "红黑榜",
              num: 56,
              icon: "icon-shiliangzhinengduixiang-",
              path: "/pages/comTab/comTab",
              isTap: true// 是否是能点击的
            }
          ]
        }
      },
        /**评价信息 */
      commonInfo: {
        title: "评价信息",
        corporation: " 杭州新洲生态农业开发有限公司",
        id: "81192",
        list: {
            list1: [// 每四个一组 
                {//协会信息和行政监管的页面是一样的可以拿来主义
                    subTitle: "协会信息",
                    num: 51,
                    icon: "icon-xiehuifuwu__jishu",
                    path: "/pages/administrativeSupervision/administrativeSupervision",
                    isTap: true// 是否是能点击的
                },
                {
                    subTitle: "媒体评价",
                    num: 56,
                    icon: "icon--zhizhimingpian",
                    path: "/pages/comTab/comTab",
                    isTap: true// 是否是能点击的
                },
                {
                    subTitle: "消费者评价",
                    num: 56,
                    icon: "icon-pingjia1",
                    path: "/pages/comTab/comTab",
                    isTap: true// 是否是能点击的
                }
            ]
        }
      },
        /**知识产权 */
      intellectualProperty:{
          title: "知识产权",
          corporation: " 杭州新洲生态农业开发有限公司",
          id: "81192",
          list:{
              list1:[
                  {//协会信息和行政监管的页面是一样的可以拿来主义
                      subTitle: "专利",
                      num: 51,
                      icon: "icon-zhuanli",
                      path: "/pages/comTab/comTab",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "商标",
                      num: 51,
                      icon: "icon-shangbiao",
                      path: "/pages/comTab/comTab",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "著作权",
                      num: 51,
                      icon: "icon-zhuzuoquanxinxi",
                      path: "/pages/comTab/comTab",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "植物新品种",
                      num: 51,
                      icon: "icon-tubiaozhizuomoban",
                      path: "/pages/comTab/comTab",
                      isTap: false// 是否是能点击的
                  }
              ]
          }
      },
      /**司法信息 */
      judiciaryInfo:{
          title: "司法信息",
          corporation: " 杭州新洲生态农业开发有限公司",
          id: "81192",
          list: {
              list1: [
                  {//协会信息和行政监管的页面是一样的可以拿来主义
                      subTitle: "失信信息",
                      num: 51,
                      icon: "icon-qiyeshixinxinxi",
                      path: "/pages/comTab/comTab",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "被执行人",
                      num: 51,
                      icon: "icon-beizhixignren",
                      path: "/pages/comTab/comTab",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "法院公告",
                      num: 51,
                      icon: "icon-fayuangonggao",
                      path: "/pages/comTab/comTab",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "法院裁判",
                      num: 51,
                      icon: "icon-caipanguandian",
                      path: "/pages/comTab/comTab",
                      isTap: true// 是否是能点击的
                  }
              ]
          }
      },
      /**creditFinancing 金融信贷*/
      creditFinancing:{
          title: "金融信贷",
          corporation: " 杭州新洲生态农业开发有限公司",
          id: "81192",
          list: {
              list1: [
                  {//协会信息和行政监管的页面是一样的可以拿来主义
                      subTitle: "商业银行信贷",
                      num: 51,
                      icon: "icon-xindaiyewu",
                      path: "",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "民间借贷",
                      num: 51,
                      icon: "icon-jiekuanlishi",
                      path: "",
                      isTap: true,// 是否是能点击的
                  }
              ]
          }
      },
      /**企业运营 */
      enterpriseOperation:{
          title: "企业运营",
          corporation: " 杭州新洲生态农业开发有限公司",
          id: "81192",
          list: {
              list1: [
                  {//协会信息和行政监管的页面是一样的可以拿来主义
                      subTitle: "企业财务",
                      num: 51,
                      icon: "icon-qiye-caiwuxinxi",
                      path: "",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "纳税信息",
                      num: 51,
                      icon: "icon-nashuishenbao",
                      path: "",
                      isTap: true,// 是否是能点击的
                  },
                  {
                      subTitle: "社保信息",
                      num: 51,
                      icon: "icon-shebao",
                      path: "",
                      isTap: true,// 是否是能点击的
                  },
                  {
                      subTitle: "水费",
                      num: 51,
                      icon: "icon-shuifei",
                      path: "",
                      isTap: true,// 是否是能点击的
                  }
                 
              ],
              list2: [
                  {
                      subTitle: "电费",
                      num: 51,
                      icon: "icon-dianfeiqingsuan",
                      path: "",
                      isTap: true,// 是否是能点击的
                  },
                  {
                      subTitle: "招聘信息",
                      num: 51,
                      icon: "icon-zhaopinxinxi",
                      path: "",
                      isTap: false,// 是否是能点击的
                  },
                  {
                      subTitle: "招投标",
                      num: 51,
                      icon: "icon-zhaotoubiaoxinxi",
                      path: "",
                      isTap: false,// 是否是能点击的
                  },
                  {
                      subTitle: "经营异常",
                      num: 51,
                      icon: "icon-jingyingyichang",
                      path: "/pages/comTab/comTab",
                      isTap: true,// 是否是能点击的
                  }
              ],
              list3: [
                  {//协会信息和行政监管的页面是一样的可以拿来主义
                      subTitle: "员工评价",
                      num: 51,
                      icon: "icon-pingjia",
                      path: "/pages/comTab/comTab",
                      isTap: true// 是否是能点击的
                  },
                  {
                      subTitle: "企业履约",
                      num: 51,
                      icon: "icon-lvyueyanshouhetong",
                      path: "",
                      isTap: false,// 是否是能点击的
                  }
              ]
          }
      }
    },
   DetailIsShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  isShow(){
      this.setData({
          DetailIsShow: !this.data.DetailIsShow
      })
  }
})