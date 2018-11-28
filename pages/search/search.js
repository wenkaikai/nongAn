const common = require("../../utils/util.js")
Page({
  data:{
    history:true,
  },
   change(e){
   console.log()
    common.setHitory(e.detail.param)
     common.ajax({
       url: "historyList",
       loading: true,
       data:{request:e.detail.param}
     }).then((res) => {
        //  this.setData({
        //      history: true
        //  })
     },()=>{
        //   this.setData({
        //      history: true
        //  })
     }
     )
     // 调用子组件的方法获取记录值
     this.selectComponent("#history").getRecords()
     this.setData({
       history:false
     })
    },
  cancel(){
      this.setData({
        history:true
      })
  }
})