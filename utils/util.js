import Toast from '../dist/toast/toast';// toast
import Notify from '../dist/notify/notify';// 从上面提示
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const ajax = (obj)=>{
  let app = getApp()
  return new Promise(function(resolve,reject){
    if(!obj.loading){// loading 表示的是要不要加载的提示 默认的都要
      Toast.loading({
        mask: obj.mask ? obj.mask : false,// 表示要不要遮罩层默认的不要
        message: '加载中...',
        loadingType: 'spinner',
        duration: 0
      });
    }
    wx.request({
      url: app.globalData.baseUrl+obj.url, 
      data: obj.data ? obj.data : "",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 会将数据转换成 query 
      },
      method:obj.type?obj.type:'POST',
      success(res) {
        if (res.statusCode == "404"){
          Notify({
            text: '请求地址错误',
            duration: 1000,
            backgroundColor: '#1989fa'
          });
        }else if(res.statusCode =="200"){
          resolve(res.data);
        }else{
          Notify({
            text: '请求失败了',
            duration: 1000,
            backgroundColor: '#1989fa'
          });
        }
      },
      fail(res){
        Notify({
          text: '网络错误',
          duration: 1000,
          backgroundColor: '#1989fa'
        });
      },
      complete(){
        if(!obj.loading){
          Toast.clear()
        }
      }
    })
  })
}
/**
 * 根据给定的参数获取当前页面的对象的参数
 */
const getPageParam = param =>{
  let pages = getCurrentPages();// 获取所有的页面
  let currentPage = pages[pages.length - 1]//获取当前的页面
  let options = currentPage.options;// 获取页面的参数对象
  let getParam = options[param];// 获取参数
  if (getParam){
    return getParam
  }else{
    throw new Error("没找到你获取的值")
  }
}
/**
 * 拼接get 方式的参数
 * 注意第一个参数必须要是url 地址
 * 
 */
const combinateUrl =  (...array)=>{
  let obj = array[0];
  let baseUrl = obj.baseUrl+"?";
  let str = ""
  for(let prop in obj){
    if(prop!="baseUrl"){
      if (str) {
        str += "&" + `${prop}=${obj[prop]}`
      }else{
        str=`${prop}=${obj[prop]}`
      }
    }
  }
  return baseUrl+str
}
/**
 * 设置历史记录
 * 
 */
const setHitory = (item)=>{
    if(item){
        let searchRecord = wx.getStorageSync('searchRecord') || [];
        searchRecord.push(item);
        wx.setStorageSync("searchRecord", searchRecord)
    }
}
module.exports = {
  formatTime: formatTime,
  ajax:ajax,
  getPageParam: getPageParam,
  combinateUrl:combinateUrl,
  setHitory:setHitory
}
