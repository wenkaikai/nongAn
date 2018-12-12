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
        console.log(options)
        let subTitle = options.subTitle;// 子标题
        let listTitle = options.title ? options.title:"";//如果有listTitle
        wx.setNavigationBarTitle({
            title: subTitle
        })
        let content=[];
        
        if (options.img_url){
            if (options.img_url=="None"){
                options.img_url = "/libs/img/noImg.png"
            }
        }else{
            options.img_url = "/libs/img/noImg.png"
        }
        let imgUrl = {
            url1: options.img_url
        }
        if (subTitle == '专利') {
            content = [
                {
                    title: "档案编号",
                    content: options.file_number
                },
                {
                    title: "档案文号",
                    content: options.file_no
                },
                {
                    title: "专利权人",
                    content: options.patent_holder
                },
                {
                    title: "档案分类",
                    content: options.file_type
                },
                {
                    title: "发布时间",
                    content: options.pubdate
                },
                {
                    title: "档案内容",
                    content: options.file_info 
                }
            ]

        } 
        else if (subTitle == '商标'){
            content = [
                {
                    title: "档案编号",
                    content: options.file_number
                },
                {
                    title: "档案文号",
                    content: options.file_no
                },
                {
                    title: "商标申请人",
                    content: options.mark_applicant
                },
                {
                    title: "档案分类",
                    content: options.file_type
                },
                {
                    title: "发布时间",
                    content: options.pubdate
                },
                {
                    title: "档案内容",
                    content: options.file_info
                }
            ]
        }
        else if (subTitle == '著作权') {
            content = [
                {
                    title: "档案编号",
                    content: options.file_number
                },
                {
                    title: "档案文号",
                    content: options.file_no
                },
                {
                    title: "著作人",
                    content: options.author
                },
                {
                    title: "档案分类",
                    content: options.file_type
                },
                {
                    title: "发布时间",
                    content: options.pubdate
                },
                {
                    title: "档案内容",
                    content: options.file_info
                }
            ]
        }
        else if (subTitle == "协会信息" ) {
            content = [
                {
                    title: "档案编号",
                    content: options.file_number.trim()
                },
                {
                    title: "档案文号",
                    content: options.file_no
                },
                {
                    title: "档案性质",
                    content: options.file_property
                },
                {
                    title: "发布单位",
                    content: options.issuer
                },
                {
                    title: "发布时间",
                    content: options.pubdate
                },
                {
                    title: "档案内容",
                    content: options.file_content
                }
            ]
        }
        else if(subTitle=="资质证明"){
             content = [
                {
                    title: "档案编号",
                    content: options.file_no
                },
                {
                    title: "证照编号",
                    content: options.license_number ? options.license_number : '暂无'
                },
                {
                    title: "档案性质",
                    content: options.file_type
                },
                {
                    title: "发布单位",
                    content: options.issuer
                },
                {
                    title: "发布时间",
                    content: options.pubdate
                },
                {
                    title: "证书内容",
                    content: options.licence_content.trim()
                }
            ]
        } 
        let newObj = {
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

  },
    preview(e){
        if (e.currentTarget.dataset.imgUrl && e.currentTarget.dataset.imgUrl != "/libs/img/noImg.png") {
            wx.previewImage({
                current: e.currentTarget.dataset.imgUrl,// 当前显示图片的http链接
                urls: [e.currentTarget.dataset.imgUrl] // 需要预览的图片http链接列表
            })
        }
    }
})