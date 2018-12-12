// pages/enterprise/enterprise.js
const common = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseInfo:{
        creditScore:0,// 信用分值
        corporation: "",// 公司名字
        credit_code: "" ,// 社会统一信用代码
        status: "",//（存续、在业、吊销、注销、迁入、迁出、停业、清算）
        startDate:"",//成立时间
        registCapi:"",//注册资金
        operName:"",// 法人代表
        phoneNumber:"",// 联系电话
        site:'',// 地址
        bankAccount:"",//银行账户 
        openAccount:"",//开户账户
        corporationType:"",//公司类型
    },
    detailInfo:{
        operName: "",// 法人代表
        corporationType: "",// 公司的类型
        productionType:"",//生产的产品类型
        output:"",// 产量
        printer:"",//
        webSite:"",//网址
        site:"",// 地址
        productionDescribe:"",// 产品描叙
        corporationProfile:"",//公司描叙
        isTap:false// 是否可以点击
    },
    businessInfo:{
        baseInfo:{
            num:5,
            status: "",//（存续、在业、吊销、注销、迁入、迁出、停业、清算）
            startDate: "",//成立时间
            registCapi: "",//注册资金
            operName: "",// 法人代表
            corporationType: "",// 公司类型
           
        },
        mutilNumber:{
            creditCode: "",// 统一社会信用代码
            businessNo:"",// 工商注册号
            organizationNo:"",// 组织机构号
            taxNo:"",//纳税人识别号
        },
       

    },
   allObj:{},
   DetailIsShow:false,
   listShow:true,
   iSfetch:false,// 是否请求成功
   isEmpty:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let app = getApp();
      let url = app.globalData.baseUrl + "/api/pc/get_company_detail?company_name=" + options.corporation;
      let tempCredit_code="";
      common.ajax({
          url:url,
          type:"get"
      }).then((res)=>{
          if (res.resCode=="9999"){
              let empty = true;
              this.setData({
                  isEmpty:empty,
                  iSfetch: true
              })
              return false;
          }
          // 第一个请求获取的数量有
          let webCount = res.CountInfo.WebCount?res.CountInfo.WebCount:0// 网站信息
          let judgementCount = res.CountInfo.JudgementCount // 法院裁判
          let changeRecordsCount = res.data.ChangeRecords.length // 历史变更
          /**
           * 工商信息
           * 
           * 基础信息 res.data.OperName 简单的判断有没有法人如果有就说明有基础信息
           * 股东 res.data.Partners
           * 主要成员 res.data.Employees
           * 历史变更 res.data.ChangeRecords
           * 分支结构  res.data.Branches
           */
          let businessInfoCount = (res.data.OperName ? 1 : 0) 
              + (res.data.Partners?res.data.Partners.length>0?1:0:0)
              + (res.data.Employees.length > 0 ? 1 : 0) 
              + (res.data.ChangeRecords.length > 0 ? 1 : 0)
              + (res.data.Branches.length > 0 ? 1 : 0)
          let loactionCount = res.data.Address?1:0;
          let shiXinCount = res.CountInfo.ShiXinCount;// 失信count
          let zhiXingCount = res.CountInfo.ZhiXingCount;// 执行count
          let cTACount = res.CountInfo.CTACount;// 法院公告
          // 8 个
          // 此处要进行第二个请求
          let urlTwo = app.globalData.baseUrl + "/api/pc/get_info_count"
          tempCredit_code = res.data.CreditCode
          //tempCredit_code = ""
          common.ajax({
              url:urlTwo,
              data:{
                  credit_code:res.data.CreditCode,
                //   credit_code: "93441302075118767N"
              }
          }).then((res1)=>{
              if(res1.status!=1){
                  wx.showToast({
                      icon:"none",
                      title:"获取数量失败"
                  })
              }
              /**
               *    第二次记录数量
               */
              let res2 = res1.result[0];
              let qc_count = res2.qc_count ? res2.qc_count:0//资质证照
              let ad_count = res2.ad_count ? res2.ad_count:0//行政监管
              let dp_count = res2.dp_count ? res2.dp_count:0//双公示
              let quality_check_count = res2.quality_check_count ? res2.quality_check_count:0//质量检查
              let authentication_count = res2.authentication_count ? res2.authentication_count:0//认证信息
              let supervise_count = res2.supervise_count ? res2.supervise_count:0//监督检查
              let traceability_info_count = res2.traceability_info_count ? res2.traceability_info_count:0//溯源信息
              let red_black_count = res2.red_black_count ? res2.red_black_count :0//红黑榜
              let association_count = res2.association_count ? res2.association_count:0//协会信息
              let media_evaluation_count = res2.media_evaluation_count ? res2.media_evaluation_count:0// 媒体评价
              let consumer_evaluation_count = res2.consumer_evaluation_count ? res2.consumer_evaluation_count:0// 消费者评价 
              let patent_count = res2.patent_count ? res2.patent_count : 0// 专利信息
              let trademark_count = res2.trademark_count ? res2.trademark_count:0//  商标信息
              let registration_right_count = res2.registration_right_count ? res2.registration_right_count:0//  著作权
              let employee_evaluation_count = res2.employee_evaluation_count ? res2.employee_evaluation_count:0//  员工评价
              let website = ''
              if (res.data.ContactInfo.WebSite && res.data.ContactInfo.WebSite.length > 0) {
                  website += res.data.ContactInfo.WebSite[0].Url
              }
              this.setData({
                  baseInfo: {
                      creditScore: this.data.baseInfo.creditScore,// 信用分数
                      corporation: options.corporation,// 公司名字
                      credit_code: res.data.CreditCode,// 社会统一信用代码
                      startDate: res.data.StartDate,//成立时间
                      registCapi: res.data.RegistCapi,//注册资金
                      operName: res.data.OperName,// 法人代表
                      phoneNumber: res.data.ContactInfo.PhoneNumber,// 联系电话
                      status: res.data.Status,// 企业的营业状态
                      site: res.data.Address,// 地址
                      bankAccount: this.data.baseInfo.bankAccount,//银行账户 
                      openAccount: this.data.baseInfo.openAccount,//开户账户
                      corporationType: res.data.EconKind//公司类型
                  },
                  detailInfo: {
                      operName: res.data.OperName,// 法人代表
                      printer: "",//
                      corporationType: this.data.detailInfo.corporationType,
                      productionType: this.data.detailInfo.productionType,
                      output: this.data.detailInfo.output,
                      webSite: website,//网址
                      site: res.data.Address,// 地址
                      productionDescribe: "",// 产品描叙
                      corporationProfile: res.data.profile.profileDesc.replace(/<[^>]+>/g, ""),//公司描叙
                      isTap: false// 是否可以点击
                  },
                  businessInfo: {
                      baseInfo: {
                          num: 5,
                          status: res.data.Status,//（存续、在业、吊销、注销、迁入、迁出、停业、清算）
                          startDate: res.data.StartDate,//成立时间
                          registCapi: res.data.RegistCapi,//注册资金
                          operName: res.data.OperName,// 法人代表
                          corporationType: res.data.ShortEconKind,// 公司类型
                          englishName: res.data.EnglishName,//英文名字
                          old_name: res.data.old_name,// 曾用名
                          scope: res.data.Scope,//经营范围
                          address: res.data.Address,// 地址
                          termStart: res.data.TermStart,//营业日期
                          updatedDate: res.data.UpdatedDate,//核准日期
                          belongOrg: res.data.BelongOrg//登记机关
                      },
                      mutilNumber: {
                          creditCode: res.data.CreditCode,// 统一社会信用代码
                          businessNo: res.data.No,// 工商注册号
                          organizationNo: res.data.OrgNo,// 组织机构号
                          taxNo: res.data.TaxNo,//纳税人识别号
                      },
                      shareholder: res.data.Partners,
                      employees: res.data.Employees,
                      changeRecords: res.data.ChangeRecords,
                      branches: res.data.Branches
                  },
                  iSfetch: true,
                  allObj: {
                      /** 政府公示模块 */
                      governmentPublicity: {
                          title: "政府公示",
                          list: {
                              list1: [// 每四个一组
                                  {
                                      subTitle: "资质证明",
                                      num: qc_count,
                                      icon: "icon--zhizhimingpian",
                                      path: "/pages/imageTextList/imageTextList",
                                      isTap: qc_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "工商信息",
                                      num: businessInfoCount,
                                      icon: "icon-businessinformation",
                                      path: "/pages/businessInfo/businessInfo",
                                      isTap: businessInfoCount// 是否是能点击的
                                  },
                                  {
                                      subTitle: "行政监管",
                                      num: ad_count,
                                      icon: "icon-wicon-xing-zheng-fu-wu",
                                      path: "/pages/comTab/comTab",
                                      isTap: ad_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "双公示",
                                      num: dp_count,
                                      icon: "icon-shuanggongshi",
                                      path: "/pageGather/doublePublic/doublePublic",
                                      isTap: dp_count// 是否是能点击的
                                  }
                              ],
                              list2: [// 每四个一组
                                  {
                                      subTitle: "历史变更",
                                      num: changeRecordsCount,
                                      icon: "icon-lishibiangengbiao",
                                      path: "/pageGather/historyChange/historyChange",
                                      isTap: changeRecordsCount,// 是否是能点击的
                                  },
                                  {
                                      subTitle: "质量检查",
                                      num: quality_check_count,
                                      icon: "icon-tipiaozhiliangjiancha",
                                      path: "/pageGather/qualityInspection/qualityInspection",
                                      isTap: quality_check_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "网站备案",
                                      num: webCount,
                                      icon: "icon-wangzhanbeianICP",
                                      path: "/pages/onlyShow/onlyShow",
                                      isTap: webCount// 是否是能点击的
                                  },
                                  {
                                      subTitle: "地理位置",
                                      num: loactionCount,
                                      icon: "icon-diliweizhi",
                                      path: "/pages/onlyShow/onlyShow",
                                      isTap: loactionCount// 是否是能点击的
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
                                      num: authentication_count,
                                      icon: "icon-renzheng",
                                      path: "/pageGather/authInfo/authInfo",
                                      isTap: authentication_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "监督检查",
                                      num: supervise_count,
                                      icon: "icon-1349771600375",
                                      path: "/pageGather/supervisionInspection/supervisionInspection",
                                      isTap: supervise_count// 是否是能点击的
                                  }
                              ]
                          }
                      },
                      /**内控信息 */
                      innerControlInfo: {
                          title: "内控信息",
                          corporation: " 杭州新洲生态农业开发有限公司",
                          id: "81192",
                          list: {
                              list1: [// 每四个一组
                                  {
                                      subTitle: "投入品采购",
                                      num: 0,
                                      icon: "icon-huigou009",
                                      path: "/pages/comTab/comTab",
                                      isTap: false// 是否是能点击的
                                  },
                                  {
                                      subTitle: "溯源信息",
                                      num: traceability_info_count,
                                      icon: "icon-suyuanxinxi",
                                      path: "/pageGather/traceInfo/traceInfo",
                                      isTap: traceability_info_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "检测信息",
                                      num: '',
                                      icon: "icon-check_inquiry_2",
                                      path: "/pages/comTab/comTab",
                                      isTap: false// 是否是能点击的
                                  },
                                  {
                                      subTitle: "红黑榜",
                                      num: red_black_count,
                                      icon: "icon-shiliangzhinengduixiang-",
                                      path: "/pageGather/redBlackRank/redBlackRank",
                                      isTap: red_black_count// 是否是能点击的
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
                                      num: association_count,
                                      icon: "icon-xiehuifuwu__jishu",
                                      path: "/pageGather/associationInfo/associationInfo",
                                      isTap: association_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "媒体评价",
                                      num: media_evaluation_count,
                                      icon: "icon--zhizhimingpian",
                                      path: "/pageGather/mediaEvaluation/mediaEvaluation",
                                      isTap: media_evaluation_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "消费者评价",
                                      num: consumer_evaluation_count,
                                      icon: "icon-pingjia1",
                                      path: "/pageGather/customEvaluation/customEvaluation",
                                      isTap: consumer_evaluation_count// 是否是能点击的
                                  }
                              ]
                          }
                      },
                      /**知识产权 */
                      intellectualProperty: {
                          title: "知识产权",
                          corporation: " 杭州新洲生态农业开发有限公司",
                          id: "81192",
                          list: {
                              list1: [
                                  {//协会信息和行政监管的页面是一样的可以拿来主义
                                      subTitle: "专利",
                                      num: patent_count,
                                      icon: "icon-zhuanli",
                                      path: "/pageGather/patent/patent",
                                      isTap: patent_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "商标",
                                      num: trademark_count,
                                      icon: "icon-shangbiao",
                                      path: "/pageGather/brandInfo/brandInfo",
                                      isTap: trademark_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "著作权",
                                      num: registration_right_count,
                                      icon: "icon-zhuzuoquanxinxi",
                                      path: "/pageGather/copyright/copyright",
                                      isTap: registration_right_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "植物新品种",
                                      num: '',
                                      icon: "icon-tubiaozhizuomoban",
                                      path: "/pages/comTab/comTab",
                                      isTap: false// 是否是能点击的
                                  }
                              ]
                          }
                      },
                      /**司法信息 */
                      judiciaryInfo: {
                          title: "司法信息",
                          corporation: " 杭州新洲生态农业开发有限公司",
                          id: "81192",
                          list: {
                              list1: [
                                  {//协会信息和行政监管的页面是一样的可以拿来主义
                                      subTitle: "失信信息",
                                      num: shiXinCount,
                                      icon: "icon-qiyeshixinxinxi",
                                      path: "/pageGather/loseCreditInfo/loseCreditInfo",
                                      isTap: shiXinCount// 是否是能点击的
                                  },
                                  {
                                      subTitle: "被执行人",
                                      num: zhiXingCount,
                                      icon: "icon-beizhixignren",
                                      path: "/pageGather/subjectedExecution/subjectedExecution",
                                      isTap: zhiXingCount// 是否是能点击的
                                  },
                                  {
                                      subTitle: "法院公告",
                                      num: cTACount,
                                      icon: "icon-fayuangonggao",
                                      path: "/pageGather/courtAnnouncement/courtAnnouncement",
                                      isTap: cTACount// 是否是能点击的
                                  },
                                  {
                                      subTitle: "法院裁判",
                                      num: judgementCount,
                                      icon: "icon-caipanguandian",
                                      path: "/pageGather/courtJudge/courtJudge",
                                      isTap: judgementCount// 是否是能点击的
                                  }
                              ]
                          }
                      },
                      /**creditFinancing 金融信贷*/
                      creditFinancing: {
                          title: "金融信贷",
                          corporation: " 杭州新洲生态农业开发有限公司",
                          id: "81192",
                          list: {
                              list1: [
                                  {//协会信息和行政监管的页面是一样的可以拿来主义
                                      subTitle: "商业银行信贷",
                                      num: '',
                                      icon: "icon-xindaiyewu",
                                      path: "",
                                      isTap: true// 是否是能点击的
                                  },
                                  {
                                      subTitle: "民间借贷",
                                      num: '',
                                      icon: "icon-jiekuanlishi",
                                      path: "",
                                      isTap: true,// 是否是能点击的
                                  }
                              ]
                          }
                      },
                      /**企业运营 */
                      enterpriseOperation: {
                          title: "企业运营",
                          corporation: " 杭州新洲生态农业开发有限公司",
                          id: "81192",
                          list: {
                              list1: [
                                  {//协会信息和行政监管的页面是一样的可以拿来主义
                                      subTitle: "企业财务",
                                      num: '',
                                      icon: "icon-qiye-caiwuxinxi",
                                      path: "",
                                      isTap: true// 是否是能点击的
                                  },
                                  {
                                      subTitle: "纳税信息",
                                      num: '',
                                      icon: "icon-nashuishenbao",
                                      path: "",
                                      isTap: true,// 是否是能点击的
                                  },
                                  {
                                      subTitle: "社保信息",
                                      num: '',
                                      icon: "icon-shebao",
                                      path: "",
                                      isTap: true,// 是否是能点击的
                                  },
                                  {
                                      subTitle: "水费",
                                      num: '',
                                      icon: "icon-shuifei",
                                      path: "",
                                      isTap: true,// 是否是能点击的
                                  }

                              ],
                              list2: [
                                  {
                                      subTitle: "电费",
                                      num: '',
                                      icon: "icon-dianfeiqingsuan",
                                      path: "",
                                      isTap: true,// 是否是能点击的
                                  },
                                  {
                                      subTitle: "招聘信息",
                                      num: '',
                                      icon: "icon-zhaopinxinxi",
                                      path: "",
                                      isTap: false,// 是否是能点击的
                                  },
                                  {
                                      subTitle: "招投标",
                                      num: '',
                                      icon: "icon-zhaotoubiaoxinxi",
                                      path: "",
                                      isTap: false,// 是否是能点击的
                                  },
                                  {
                                      subTitle: "经营异常",
                                      num: '',
                                      icon: "icon-jingyingyichang",
                                      path: "/pages/comTab/comTab",
                                      isTap: false,// 是否是能点击的
                                  }
                              ],
                              list3: [
                                  {//协会信息和行政监管的页面是一样的可以拿来主义
                                      subTitle: "员工评价",
                                      num: employee_evaluation_count,
                                      icon: "icon-pingjia",
                                      path: "/pageGather/staffEvalation/staffEvalation",
                                      isTap: employee_evaluation_count// 是否是能点击的
                                  },
                                  {
                                      subTitle: "企业履约",
                                      num: '',
                                      icon: "icon-lvyueyanshouhetong",
                                      path: "",
                                      isTap: false,// 是否是能点击的
                                  }
                              ]
                          }
                      }
                  },
                  corporationInfo: {
                      corporation: options.corporation,
                      credit_code: tempCredit_code
                  }
              })
              wx.setStorageSync('address', res.data.Address)
          })
      })
      /**这个请求是补充的四条数据 */
      common.ajax({
          url: app.globalData.baseUrl +"/api/pc/get_base_info",
          data:{
              company_name: options.corporation
          },
          loading:true
      }).then(res=>{
          /**corporationType  主体类别
                productionType 主要产品
                output   总体规模  */
                if(res.status!=2){
                    this.setData({
                        "detailInfo.corporationType": res.total_scale_unit,
                        "detailInfo.productionType": res.product,
                        "detailInfo.output": res.total_scale,
                        "baseInfo.creditScore": res.score // 信用分值
                    })
                }
      })
    /**开户银行 */
      common.ajax({
          url: app.globalData.baseUrl + "/api/pc/get_pc_base_info",
          data: {
              pc_name: options.corporation
          },
          loading: true
      }).then(res => {
          if (res.status != 2) {
              this.setData({
                  "baseInfo.bankAccount": res.bank_account, // 银行账户
                  "baseInfo.openAccount": res.open_bank // 开户银行
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  isShow(){
      this.setData({
          DetailIsShow: !this.data.DetailIsShow,
          listShow: !this.data.listShow
      })
  }
})