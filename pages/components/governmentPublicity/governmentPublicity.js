import Toast from '../../../dist/toast/toast';// toast
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subObj:{
      type:Object
    },
    creditCode:{
        type:String
    },
    corporation:{
        type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toInfo(e){
      let target = e.currentTarget.dataset;
      let id = target.id;// 企业的id
      let corporation = target.corporation;// 企业的名字
      let isTap = target.isTap;// 是否可以点击
      let path = target.path;// 路径
      let subTitle = target.subTitle;// 点击的是哪一个
      if(isTap){
          if(!path){
              Toast("该信息为非公开项,暂时无法查看,敬请谅解！")
              return false;
          }

        
        wx.navigateTo({
          url: `${path}?id=${id}&corporation=${corporation}&subTitle=${subTitle}`
        })
      }
    }
  }
})
