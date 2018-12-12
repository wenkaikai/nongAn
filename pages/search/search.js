const common = require("../../utils/util.js");
const app = getApp();
Page({
  data:{
    history:true,
    isFirst:true,// 表示是不是第一次查询
    objList:{
        total:1,
        currentPage:1,
        pageSize:1,
        list:[
          
        ]
    }
  },
  onReachBottom(){
      if (this.data.history){
          return false;
      }
      let currentPage = this.data.objList.currentPage;
      let pageSize = this.data.objList.pageSize;
      currentPage++; 
      console.log(currentPage)
      if(currentPage<=pageSize){
          let url = app.globalData.baseUrl + "/api/pc/company_advancedsearch?searchKey=" + this.key +"&pageIndex="+currentPage
          common.ajax({
              url: url,
              type: "get"
          }).then((res) => {
              if (res.resCode == "0000") {//如果值是0000
                      this.data.objList.total = res.Paging.TotalRecords;
                      this.data.objList.pageSize = res.Paging.PageSize;
                      this.data.objList.currentPage = res.Paging.PageIndex;
                      this.data.objList.list = this.data.objList.list.concat(res.data);
                      this.setData({
                          objList: this.data.objList
                      });
              } else {
                  wx.showToast({
                      title: '请求失败了',
                      icon: "none",
                      duration: 2000
                  })
              }
            
          }, () => {
              
          }
          )
      }
  },
   change(e){
    this.key = e.detail.param;
       if (e.detail.param.length<2){
           return false;
       }
    let url = app.globalData.baseUrl + "/api/pc/company_advancedsearch?searchKey=" + e.detail.param
     common.ajax({
       url: url,
       type:"get"
     }).then((res) => {
            if(res.resCode=="0000"){//如果值是0000
                this.data.objList.total = res.Paging.TotalRecords;
                this.data.objList.pageSize = res.Paging.PageSize;
                this.data.objList.currentPage = res.Paging.PageIndex;
                this.data.objList.list = res.data;
                this.setData({
                    objList:this.data.objList,
                });
             common.setHitory(e.detail.param);
            }else{
                wx.showToast({
                    title: '请求失败了',
                    icon: "none",
                    duration: 2000
                })
            }
            this.setData({
                history: false
            })
        },()=>{
            this.setData({
                history: false
            })
        }
     )
      this.selectComponent("#history").getRecords()// 调用子组件的方法获取记录值
    },
  cancel(){
      this.setData({
        history:true
      })
      this.selectComponent("#history").getRecords()
  },
})
key:""