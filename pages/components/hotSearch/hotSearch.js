// pages/components/hotSearch/hotSearch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    hotData: ["不限", "农夫山泉", "书架", "不限", "农夫山泉", "书架", "不限", "农夫山泉", "书架", "不限", "农夫山泉", "书架"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
      toSearchList(e) {
          this.triggerEvent("change", { param: e.target.dataset.content })
      }
  },
  externalClasses: ['showed']
})
