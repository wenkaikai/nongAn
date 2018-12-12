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
    console.log(options)
    let litemId = options.itemId; // 是哪一条的id
    let subTitle = options.subTitle;// 子标题
    let listTitle = options.title;// item 的标题
    wx.setNavigationBarTitle({
        title: subTitle,
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
                        content: options.product_name,
                        type:"text"
                    },
                     {
                        title: "产品logo",
                        content: options.product_logo == "null" ? "暂无" : options.product_logo,
                         type: options.product_logo=="null"?"text":"picture"
                    },
                    {
                        title: "上市时间",
                        content: options.market_date,
                        type: "text"
                    },
                    {
                        title: "生产单位",
                        content: options.production_unit,
                        type: "text"
                    },
                    {
                        title: "联系方式",
                        content: options.production_link,
                        type: "text"
                    },
                    {
                        title: "责任人",
                        content: options.production_charge_person == "null" ? "暂无" : options.production_charge_person,
                        type: "text"
                    }, 
                    {
                        title: "追溯码",
                        content: options.zhuisu_code,
                        type: "text"
                    }
                ]
            },
            {
                title: "主体信息",
                listContent: [
                    {
                        title: "主体名称",
                        content: options.zhuti_name,
                        type: "text"
                    },
                    {
                        title: "联系电话",
                        content: options.zhuti_tel,
                        type: "text"
                    },
                    {
                        title: "详细地址",
                        content: options.zhuti_address,
                        type: "text"
                    },
                    {
                        title: "生产规模",
                        content: options.production_scale,
                        type: "text"
                    },
                    {
                        title: "主导产品",
                        content: options.leading_product,
                        type: "text"
                    },
                ]
            }
        ] 
    } 
    else if (subTitle == '开具合格证'){
        content = [
            {
                title: "",
                listContent: [
                    {
                        title: "企业名称",
                        content: options.company_name,
                        type: "text"
                    },
                    {
                        title: "营业执照号",
                        content: options.business_license,
                        type: "text"
                    },
                    {
                        title: "区划",
                        content: options.compartment,
                        type: "text"
                    },
                    {
                        title: "联系人",
                        content: options.contant,
                        type: "text"
                    },
                    {
                        title: "联系电话",
                        content: options.contant_number,
                        type: "text"
                    },
                    {
                        title: "企业详细地址",
                        content: options.company_address,
                        type: "text"
                    },
                    {
                        title: "产品名称",
                        content: options.product_name,
                        type: "text"
                    },
                    {
                        title: "重（数）量",
                        content: options.weight,
                        type: "text"
                    },
                    {
                        title: "开具日期",
                        content: options.issue_date,
                        type: "text"
                    },
                    {
                        title: "合格证张数",
                        content: options.certificates_number,
                        type: "text"
                    },
                    {
                        title: "合格证开具样式预览",
                        content: options.certificates_preview == "null" ? "暂无" : options.certificates_preview,
                        type: options.certificates_preview=="null"?"text":"picture"
                    },
                ]
            }
        ]
    }
    else if (subTitle == '红黑榜') {
        content = [{
            tilte:"",
            listContent: [
                {
                    title: "主体名称",
                    content: options.rank_list,
                    type: "text"
                },
                {
                    title: "联系人",
                    content: options.contact,
                    type: "text"
                },
                {
                    title: "联系电话",
                    content: options.contact_number,
                    type: "text"
                },
                {
                    title: "年度",
                    content: options.year,
                    type: "text"
                },
                {
                    title: "上榜时间",
                    content: options.rank_time,
                    type: "text"
                },
                {
                    title: "是否撤销",
                    content: options.is_repeal,
                    type: "text"
                },
                {
                    title: "是否内网公示",
                    content: options.is_intranet,
                    type: "text"
                },
                {
                    title: "是否外网公示",
                    content: options.is_outer_net,
                    type: "text"
                },
                {
                    title: "上榜理由",
                    content: options.rank_reason,
                    type: "text"
                },
                {
                    title: "备注",
                    content: options.remark,
                    type: "text"
                }
            ]
        }]
    }
    else if (subTitle == '消费者评价') {
        content = [
                    {
                        title: "评论性质",
                        content: options.file_property,
                        type: "text"
                    },
                    {
                        title: "发表时间",
                        content: options.pubdate,
                        type: "text"
                    },
                    {
                        title: "总体评价",
                        content: options.general_evaluation,
                        type: "text"
                    },
                    {
                        title: "具体内容",
                        content: options.content,
                        type: "text"
                    }
        ]
    }
    else if (subTitle == '员工评价') {
        content = [
            {
                title: "评论性质",
                content: options.file_property,
                type: "text"
            },
            {
                title: "发表时间",
                content: options.pubdate,
                type: "text"
            },
            {
                title: "总体评价",
                content: options.general_evaluation,
                type: "text"
            },
            {
                title: "具体内容",
                content: options.content,
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
    else if (subTitle == '行政监管') {
        content = [
            {
                title: "档案编号",
                content: options.file_no,
                type: "text"
            },
            {
                title: "档案文号",
                content: options.file_number.trim(),
                type: "text"
            },
            {
                title: "档案性质",
                content: options.file_property,
                type: "text"
            },
            {
                title: "发布单位",
                content: options.issuer,
                type: "text"
            },
            {
                title: "发布时间",
                content: options.pubdate,
                type: "text"
            },
            {
                title: "档案类容",
                content: options.file_content,
                type: "text"
            }
        ]
    }
    else if (subTitle == '双公示') {
        listTitle = options.item_name;// item 的标题
        content = [
            {
                title: "许可文号",
                content: options.license_number,
                type: "text"
            },
            {
                title: "审批类别",
                content: options.audit_category,
                type: "text"
            },
            {
                title: "项目名称",
                content: options.item_name,
                type: "text"
            },
            {
                title: "法人名称",
                content: "暂无",
                type: "text"
            },
            {
                title: "决定日期",
                content: options.decide_date,
                type: "text"
            },
            {
                title: "截止日期",
                content: options.limit_date,
                type: "text"
            },
            {
                title: "许可类容",
                content: options.licence_content,
                type: "text"
            },
            {
                title: "许可机关",
                content: options.license_authority,
                type: "text"
            }
        ]
    }
    else if (subTitle == '质量检查') {
        content = [
            {
                title: "档案标号",
                content: options.file_no,
                type: "text"
            },
            {
                title: "档案性质",
                content: options.file_property,
                type: "text"
            },
            {
                title: "档案文号",
                content: options.file_number.trim() ? options.file_number:'暂无',
                type: "text"
            },
            {
                title: "发布单位",
                content: options.issuer,
                type: "text"
            },
            {
                title: "发布时间",
                content: options.pubdate,
                type: "text"
            },
            {
                title: "档案内容",
                content: options.file_content,
                type: "text"
            }
        ]
    }
    else if (subTitle == '法院公告') {
        content = [
            {
                title: "当事人",
                content: options.party,
                type: "text"
            },
            {
                title: "公告类型",
                content: options.catetory,
                type: "text"
            },
            {
                title: "刊登时间",
                content: options.publishDate,
                type: "text"
            },
            {
                title: "刊登版面",
                content: options.publishPage,
                type: "text"
            },
            {
                title: "长传日期",
                content: options.submitDate,
                type: "text"
            },
            {
                title: "内容",
                content: options.content,
                type: "text"
            },
            {
                title: "公告人",
                content: options.court,
                type: "text"
            }
        ]
    }
    else if (subTitle == '执法日志') {
        content = [
            {
                title: "执法时间",
                content: options.law_time,
                type: "text"
            },
            {
                title: "执法单位",
                content: options.enforcement,
                type: "text"
            },
            {
                title: "执法人",
                content: options.law_enforcement_person,
                type: "text"
            },
            {
                title: "检查情况与处理意见",
                content: options.check_situation,
                type: "text"
            }
        ]
    }
    else if (subTitle == '巡查日志') {
        content = [
            {
                title: "巡查时间",
                content: options.patrol_time,
                type: "text"
            },
            {
                title: "巡查单位",
                content: options.patrol_enforcement,
                type: "text"
            },
            {
                title: "巡查人",
                content: options.patrol_enforcement_person,
                type: "text"
            },
            {
                title: "检查情况与处理意见",
                content: options.check_situation,
                type: "text"
            }
        ]
    }
    else if (subTitle == '案件登记') {
        content = [
            {
                title: "案件编号",
                content: options.case_number,
                type: "text"
            },
            {
                title: "案件名称",
                content: options.case_name,
                type: "text"
            },
            {
                title: "涉案金额",
                content: options.case_money,
                type: "text"
            },
            {
                title: "立案时间",
                content: options.start_case_time,
                type: "text"
            },
            {
                title: "结案时间",
                content: options.end_case_time,
                type: "text"
            },
            {
                title: "罚没金额",
                content: options.penalty,
                type: "text"
            },
            {
                title: "违法事实",
                content: options.illegal_fact,
                type: "text"
            },
            {
                title: "判定依据",
                content: options.judgment_basis,
                type: "text"
            },
            {
                title: "执法单位",
                content: options.law_enforcement,
                type: "text"
            },
            {
                title: "执法人员",
                content: options.law_enforcement_person,
                type: "text"
            },

        ]
    }
    else if (subTitle == '无公害产品') {
        content = [
            {
                title:"",
                listContent: [
                    {
                        title: "申请人全称",
                        content: options.proposer,
                        type: "text"
                    },
                    {
                        title: "证书编号",
                        content: options.license_number,
                        type: "text"
                    },
                    {
                        title: "证书有效期",
                        content: options.license_time,
                        type: "text"
                    },
                    {
                        title: "行业名称",
                        content: options.firm_name,
                        type: "text"
                    },

                    {
                        title: "产品类别名称",
                        content: options.product_type,
                        type: "text"
                    },
                    {
                        title: "产品名称",
                        content: options.product_name,
                        type: "text"
                    },
                    {
                        title: "区划",
                        content: options.compartment,
                        type: "text"
                    },
                    {
                        title: "生产规模",
                        content: options.process_scale,
                        type: "text"
                    },

                    {
                        title: "年产量（吨）",
                        content: options.annual_output,
                        type: "text"
                    },
                    {
                        title: "年销售额（万元）",
                        content: options.annual_turnover,
                        type: "text"
                    },
                    {
                        title: "认定产地证书编号",
                        content: options.origin_number,
                        type: "text"
                    },
                    {
                        title: "认定产地地址",
                        content: options.origin_address,
                        type: "text"
                    },
                    {
                        title: "单位性质",
                        content: options.company_type,
                        type: "text"
                    }
                ]
            }
        ]
    }
    else if (subTitle == '绿色食品') {
        content = [
            {
                title: "",
                listContent: [
                    {
                        title: "企业名称",
                        content: options.company_name,
                        type: "text"
                    },
                    {
                        title: "产品名称",
                        content: options.product_name,
                        type: "text"
                    },
                    {
                        title: "商标名称",
                        content: options.brand_name,
                        type: "text"
                    },
                    {
                        title: "证书编号",
                        content: options.license_number,
                        type: "text"
                    },

                    {
                        title: "证书有效期",
                        content: options.license_time,
                        type: "text"
                    },
                    {
                        title: "业务类型",
                        content: options.business_type,
                        type: "text"
                    },
                    {
                        title: "企业信息码",
                        content: options.enterprise_code,
                        type: "text"
                    },
                    {
                        title: "区划",
                        content: options.compartment,
                        type: "text"
                    },

                    {
                        title: "农业合作社",
                        content: options.agricultural_cooperative,
                        type: "text"
                    },
                    {
                        title: "军队",
                        content: options.army,
                        type: "text"
                    },
                    {
                        title: "龙头企业标识",
                        content: options.bibcock_logo,
                        type: "text"
                    }
                ]
            }
        ]
    }
      let urls=[
        //   'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'// 需要预览的图片http链接列表
        //   , 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'
        //   , 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg'
      ] 
    let newObj = {
      litemId: litemId,
      subTitle: subTitle,
      content:content,
      listTitle:listTitle,
      imgArray: options.scene_photo == "null" ? urls : options.scene_photo
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
    let target = e.currentTarget.dataset;
    wx.previewImage({
        current: target.img, // 当前显示图片的http链接
        urls: target.imgs
    })
  }
})