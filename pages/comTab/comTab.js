// pages/administrativeSupervision/administrativeSupervision.js
const common = require("../../utils/util.js")

Page({

  /**
   * 页面的初始数据
   */

  data: {
    obj:{
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
      if(subTitle=="双公示"){
        newArray = [
          {
            label: "行政许可",
            num: "98",
            isShow: true,
            content: [
              {
                title: "开业登记",
                releaseUnit: "中共中央办公厅",
                itemId: "8848",
                url: "www.优酷.com",
                licenseFile:"37060040000436"
              }
              , {
                title: "生产产品许可",
                releaseUnit: "中共中央办公厅",
                itemId: "8848",
                url: "www.优酷.com",
                licenseFile: "Qs370623010016"
              }
            ]
          }
          , {
            label: "行政处罚",
            num: "123",
            isShow: false,
            content: [{
              title: "食品监督抽检产品合格信息（第二期）",
              releaseUnit: "中共中央办公厅",
              itemId: "8848",
              url: "www.优酷.com",
              licenseFile: "Qs3706230100189"
            }]
          }
        ]
      }else if(subTitle=="质量检查"){
        newArray = [
          {
            label: "全部",
            num: "98",
            isShow: true,
            content: [
              {
                title: "食品监督抽检产品合格信息（第二期）",
                label:"合格",
                releaseUnit: "中共中央办公厅",
                itemId: "8848",
                url: "www.优酷.com",
                time: "2018-12-15",
              }
              , {
                title: "生产产品许可",
                label: "公示",
                releaseUnit: "中共中央办公厅",
                itemId: "8848",
                url: "www.优酷.com",
                time: "2018-12-15",
              }
            ]
          }
          , {
            label: "合格",
            num: "123",
            isShow: false,
            content: [{
              title: "食品监督抽检产品合格信息（第二期）",
              label:"合格",
              releaseUnit: "中共中央办公厅",
              itemId: "8848",
              url: "www.优酷.com",
              time: "2018-12-15",
            }]
          }
          , {
            label: "公示",
            num: "123",
            isShow: false,
            content: [{
              title: "食品监督抽检产品合格信息（第二期）",
              label: "公示",
              releaseUnit: "中共中央对外联络部",
              itemId: "8848",
              url: "www.优酷.com",
              time: "2018-12-15",
            }]
          }
          , {
            label: "风险",
            num: "1235",
            isShow: false,
            content: []
          }
        ]
      }
      else if (subTitle == "认证信息"){
        newArray = [
          {
            label: "无公害农产品",
            num: "98",
            isShow: true,
            currentPage:1,// 当前是第几页
            content: [
              {
                productName: "刘堂油桃",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum:"WGH-14-08854",
                validityDate:"2018-05-25~2018-09-05",
                isTap:true// 该条信息是否可以点击 true 表示可以点击
              }
              , {
                productName: "新疆哈密瓜",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
            ]
          }
          , {
            label: "绿色产品",
            num: "123",
            isShow: false,
            currentPage: 1,// 当前是第几页
            content: [
              {
                productName: "刘堂油桃",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
              , {
                productName: "新疆哈密瓜",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
            ]
          }
          , {
            label: "地理标志产品",
            num: "123",
            isShow: false,
            currentPage: 1,// 当前是第几页
            content: [
              {
                productName: "刘堂油桃",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: false// 该条信息是否可以点击 true 表示可以点击
              }
              , {
                productName: "新疆哈密瓜",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: false// 该条信息是否可以点击 true 表示可以点击
              }
            ]
          }
          , {
            label: "有机食品",
            num: "1235",
            currentPage: 1,// 当前是第几页
            isShow: false,
            content: []
          }
        ]
      }
      else if (subTitle == "监督检查") {
        newArray = [
          {
            label: "执法日志",
            num: "98",
            isShow: true,
            currentPage: 1,// 当前是第几页
            content: [
              {
                productName: "刘堂油桃",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
              , {
                productName: "新疆哈密瓜",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
            ]
          }
          , {
            label: "巡查日志",
            num: "123",
            isShow: false,
            currentPage: 1,// 当前是第几页
            content: [
              {
                productName: "刘堂油桃",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
              , {
                productName: "新疆哈密瓜",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
            ]
          }
          , {
            label: "案件登记",
            num: "123",
            isShow: false,
            currentPage: 1,// 当前是第几页
            content: [
              {
                productName: "刘堂油桃",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: false// 该条信息是否可以点击 true 表示可以点击
              }
              , {
                productName: "新疆哈密瓜",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                licenseNum: "WGH-14-08854",
                validityDate: "2018-05-25~2018-09-05",
                isTap: false// 该条信息是否可以点击 true 表示可以点击
              }
            ]
          }
         
        ]
      }
      else if (subTitle == "溯源信息") {
        newArray = [
          {
            label: "溯源信息",
            num: "98",
            isShow: true,
            currentPage: 1,// 当前是第几页
            content: [
              {
                productName: "毛芋",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                marketTime: "2018-11-8",
                traceNum: "AB704OSC07BI06",
                viewCount:"560",
                contact:"13673368965",
                printCount:"654",
                printAddressIp:"223.93.207",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
              , {
                productName: "毛芋",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                marketTime: "2018-11-8",
                traceNum: "AB704OSC07BI06",
                viewCount: "560",
                contact: "13673368965",
                printCount: "654",
                printAddressIp: "223.93.207",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
            ]
          }
          , {
            label: "开具合格证",
            num: "123",
            isShow: false,
            currentPage: 1,// 当前是第几页
            content: [
              {
                productName: "毛芋",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                issueTime: "2018-11-8",// 开具时间
                linkMan: "周强",
                specification: "100kg",
                certificateCount: "560",// 合格证的数量
                contact: "13673368965",
                freeFoodCount: "7788",// 无公害
                greenFoodCount: "4455",// 绿色食物
                organicFoodCount:"1122",//有机食物
                label:"自行开具",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              },
              {
                productName: "毛芋头",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                issueTime: "2018-11-8",// 开具时间
                linkMan: "周强",
                certificateCount: "560",// 合格证的数量
                contact: "13673368965",
                specification: "100kg",
                freeFoodCount: "7788",// 无公害
                greenFoodCount: "4455",// 绿色食物
                organicFoodCount: "1122",//有机食物
                label: "自行开具",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              },
              {
                productName: "南瓜饼",
                itemId: "8848",
                url: "www.优酷.com",// 这个是详情页的请求地址
                issueTime: "2018-11-8",// 开具时间
                linkMan: "周强",
                certificateCount: "560",// 合格证的数量
                contact: "13673368965",
                specification:"100kg",
                label: "委托开具",
                isTap: true// 该条信息是否可以点击 true 表示可以点击
              }
            ]
          }
        ]
      }
      else if (subTitle == "红黑榜"){
          newArray = [
              {
                  label: "",
                  num: "98",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          year: "2015年",
                          label:"红榜",
                          isRepeal: "是",// 是否撤销
                          isIntranetShow: "否",// 是否内网显示
                          isOuternetShow: "是",// 是否外网显示
                      }
                      , {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          year: "2015年",
                          label: "黑榜",
                          isRepeal: "是",// 是否撤销
                          isIntranetShow: "否",// 是否内网显示
                          isOuternetShow: "是",// 是否外网显示ue 表示可以点击
                      }
                  ]
              }
          ]
      }
      else if (subTitle == "媒体评价") {
          newArray = [
              {
                  label: "全部",
                  num: "98",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          title: "招远经济技术开发区商会揭牌运行",
                          releaseMedia: "人名日报",
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label:"良好",
                      }
                      ,{
                          title: "招远经济技术开发区商会揭牌运行",
                          releaseMedia: "人名日报",
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "风险"
                      }
                  ]
              },
              {
                  label: "良好",
                  num: "98",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          title: "招远经济技术开发区商会揭牌运行",
                          releaseMedia: "人名日报",
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "良好",
                      }
                      , {
                          title: "招远经济技术开发区商会揭牌运行",
                          releaseMedia: "人名日报",
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "良好"
                      }
                  ]
              },
              {
                  label: "风险",
                  num: "98",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          title: "招远经济技术开发区商会揭牌运行",
                          releaseMedia: "人名日报",
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "风险",
                      }
                      , {
                          title: "招远经济技术开发区商会揭牌运行",
                          releaseMedia: "人名日报",
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "风险"
                      }
                  ]
              }
          ]
      }
      else if (subTitle == "消费者评价") {
          newArray = [
              {
                  label: "全部",
                  num: "98",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          title: "质量不错的哦",// 就是主要内容的缩写
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "裹奖",
                      }
                      , {
                          title: "垃圾产品",// 就是主要内容的缩写
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "投诉",
                      }
                  ]
              },
              {
                  label: "裹奖",
                  num: "98",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          title: "质量不错的哦",// 就是主要内容的缩写
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "裹奖",
                      }
                      , {
                          title: "质量不错的哦",// 就是主要内容的缩写
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "裹奖",
                      }
                  ]
              },
              {
                  label: "中性",
                  num: "98",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          title: "质量不错的哦",// 就是主要内容的缩写
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "中性"
                      }
                      , {
                          title: "质量不错的哦",// 就是主要内容的缩写
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "中性"
                      }
                  ]
              },
              {
                  label: "投诉",
                  num: "98",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          title: "东西不好",// 就是主要内容的缩写
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "投诉"
                      }
                      , {
                          title: "东西不好",// 就是主要内容的缩写
                          itemId: "8848",
                          url: "www.优酷.com",
                          time: "2018-4-29",
                          label: "投诉"
                      }
                  ]
              }
          ]
      }
      else if (subTitle == "专利") {
          newArray = [
              {
                  label: "",
                  num: "98",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          title: "远程遥控点火装置",
                          label: "专利",
                          recordId:"5859555-466-cnnu-89563",
                          time:"2011-18-45"
                      }
                      ,{
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          title: "远程遥控点火装置",
                          label: "专利",
                          recordId: "5859555-466-cnnu-89563",
                          time: "2011-18-45"
                      }
                  ]
              }
          ]
      }
      else if (subTitle == "商标") {
          newArray = [
              {
                  label: "",
                  num: "98",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          title: "远程遥控点火装置",
                          label: "商标",
                          recordId: "5859555-466-cnnu-89563",
                          time: "2011-18-45"
                      }
                      , {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          title: "远程遥控点火装置",
                          label: "商标",
                          recordId: "5859555-466-cnnu-89563",
                          time: "2011-18-45"
                      }
                  ]
              }
          ]
      }
      else if (subTitle == "著作权") {
          newArray = [
              {
                  label: "",
                  num: "98",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          title: "远程遥控点火装置",
                          label: "著作权",
                          recordId: "5859555-466-cnnu-89563",
                          time: "2011-18-45"
                      }
                      , {
                          itemId: "8848",
                          url: "www.优酷.com",// 这个是详情页的请求地址
                          isTap: true,// 该条信息是否可以点击 true 表示可以点击
                          title: "远程遥控点火装置",
                          label: "著作权",
                          recordId: "5859555-466-cnnu-89563",
                          time: "2011-18-45"
                      }
                  ]
              }
          ]
      }
      else if (subTitle == "失信信息" || subTitle == "法院公告") {
          newArray = [
              {
                  label: "",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  num: "98",// 一共多少条
                  content:[
                      {
                        itemId: "8848",
                        url: "www.优酷.com",
                        isTap: true,// 是否
                        listContent: [
                            {
                                title: "",
                                content: "合肥市包河区人民法院",
                                label: ""
                            },
                            {
                                title: "依据文号",
                                content: "（2015）包民一初字第03424号",
                                label: ""
                            },
                            {
                                title: "立案时间",
                                content: "2010-01-01",
                                label: ""
                            }
                        ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "合肥市包河区人民法院",
                                  label: "微信",
                                  className:"danger"
                              },
                              {
                                  title: "依据文号",
                                  content: "（2015）包民一初字第03424号",
                                  label: ""
                              },
                              {
                                  title: "立案时间",
                                  content: "2010-01-01",
                                  label: ""
                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "合肥市包河区人民法院",
                                  label: ""
                              },
                              {
                                  title: "依据文号",
                                  content: "（2015）包民一初字第03424号",
                                  label: ""
                              },
                              {
                                  title: "立案时间",
                                  content: "2010-01-01",
                                  label: ""
                              }
                          ]
                      }
                 ]
              }
          ]
      }
      else if ( subTitle == "被执行人") {
          newArray = [
              {
                  label: "",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  num: "98",// 一共多少条
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "北京同仁堂科技发展股份有限公司制药厂",
                                  label: "",
                                  className:""
                                  
                              },
                              {
                                  title: "执行标准",
                                  content: "100万",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "执行法院",
                                  content: "最高人名检查院",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "立案时间",
                                  content: "2010-10-10",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "北京同仁堂科技发展股份有限公司制药厂",
                                  label: "",
                                  className: ""

                              },
                              {
                                  title: "执行标准",
                                  content: "100万",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "执行法院",
                                  content: "最高人名检查院",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "立案时间",
                                  content: "2010-10-10",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "北京同仁堂科技发展股份有限公司制药厂",
                                  label: "",
                                  className: ""

                              },
                              {
                                  title: "执行标准",
                                  content: "100万",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "执行法院",
                                  content: "最高人名检查院",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "立案时间",
                                  content: "2010-10-10",
                                  label: "",
                                  className: ""
                              }
                          ]
                      }
                  ]
              }
          ]
      }
      else if (subTitle == "法院裁判") {
          newArray = [
              {
                  label: "",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  num: "98",// 一共多少条
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "民事案件",
                                  content: "1",
                                  label: "",
                                  className: ""

                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "行政案件",
                                  content: "1",
                                  label: "",
                                  className: ""

                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "知识产权",
                                  content: "1",
                                  label: "",
                                  className: ""

                              }
                            
                          ]
                      }
                  ]
              }
          ]
      }
      else if (subTitle == "经营异常") {
          newArray = [
              {
                  label: "",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  num: "98",// 一共多少条
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: false,// 是否
                          listContent: [
                              {
                                  title: "列入经营异常名录原因",
                                  content: "未依照《企业信息公示暂行条例》第八条规定的期限公示年度报告的",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "做出决定机关",
                                  content: "北京市朝阳区市场和质量监督管理局",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "时间",
                                  content: "2015-07-09",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "列入经营异常名录原因",
                                  content: "未依照《企业信息公示暂行条例》第八条规定的期限公示年度报告的",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "做出决定机关",
                                  content: "北京市朝阳区市场和质量监督管理局",
                                  label: "",
                                  className: ""
                              },
                              {
                                  title: "时间",
                                  content: "2015-07-09",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                  ]
              }
          ]
      }
      else if (subTitle == "员工评价") {
          newArray = [
              {
                  label: "全部",
                  isShow: true,
                  currentPage: 1,// 当前是第几页
                  num: "98",// 一共多少条
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "工作环境好，社保按时缴纳，工资按时",
                                  label: "裹奖",
                                  className: "danger"
                              },
                              {
                                  title: "时间",
                                  content: "2015-07-09",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "工作环境好",
                                  label: "中性",
                                  className: "warning"
                              },
                              {
                                  title: "时间",
                                  content: "2015-07-09",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                  ]
              },
              {
                  label: "裹奖",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  num: "456",// 一共多少条
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "工作环境好，社保按时缴纳，工资按时",
                                  label: "裹奖",
                                  className: "suceess"
                              },
                              {
                                  title: "时间",
                                  content: "2015-07-09",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "工作环境好",
                                  label: "裹奖",
                                  className: "success"
                              },
                              {
                                  title: "时间",
                                  content: "2015-07-09",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                  ]
              },
              {
                  label: "中性",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  num: "98",// 一共多少条
                  content: [
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "工作环境好，社保按时缴纳，工资按时",
                                  label: "中性",
                                  className: "warning"
                              },
                              {
                                  title: "时间",
                                  content: "2015-07-09",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                      {
                          itemId: "8848",
                          url: "www.优酷.com",
                          isTap: true,// 是否
                          listContent: [
                              {
                                  title: "",
                                  content: "工作环境好",
                                  label: "中性",
                                  className: "warning"
                              },
                              {
                                  title: "时间",
                                  content: "2015-07-09",
                                  label: "",
                                  className: ""
                              }
                          ]
                      },
                  ]
              },
              {
                  label: "中性",
                  isShow: false,
                  currentPage: 1,// 当前是第几页
                  num: "98",// 一共多少条
                  content: [
                     
                  ]
              }
          ]
      }
    this.data.obj.totalNum = newArray[0].num ;
    this.data.obj.objArray = newArray
    this.setData({
     obj:this.data.obj
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
      obj:this.data.obj
    })
  },
  /**
   *  点击跳转页面
   */
  toInfo(e) {
    // 一共要传五个值
    let target = e.currentTarget.dataset;
    let id = common.getPageParam("id");// 公司的id
    let corporation = common.getPageParam("corporation");// 公司名字
    let subTitle = common.getPageParam("subTitle");// 子目录
    let itemId = target.itemId;// 列表的id
    let infoUrl = target.infoUrl;// 详情页的requestUrl;
    /**认证信息的时候的title */
    if(subTitle=="认证信息"|| subTitle=="监督检查" ||subTitle=="溯源信息"){
      // 这个时候是详情页面subTile 显示的是 tab 的内容 所以要找到点击当前的tab 值重新赋值subTitle
      this.data.obj.objArray.forEach(function(i){
        if(i.isShow){
          subTitle = i.label;
          return false;
        }
      })
    }
      let baseUrl = "/pages/titleText/titleText";
      if (subTitle=="媒体评价"){
          baseUrl ="/pages/mediaText/mediaText"
      } else if (subTitle == "专利" || subTitle == "商标" || subTitle == "著作权"){
          baseUrl = "/pages/imageTextInfo/imageTextInfo"
      } else if (subTitle == "法院裁判") {
          baseUrl = "/pages/tapList/tapList"
      }else if(subTitle=="经营异常"){
          return false;
      }
    let url = common.combinateUrl({
      baseUrl: baseUrl,
      id: id.trim(),
      corporation: corporation.trim(),
      itemId: itemId.trim(),
      infoUrl: infoUrl.trim(),
      subTitle: subTitle.trim()
    })
    wx.navigateTo({
      url: url
    })
  }

})