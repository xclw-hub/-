// components/context/context.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // tabs:{
    //   pictures:"/pictures/test.jpg",
    //   title:123185,
    //   time:45254,
    //   people:2541,
    //   review_num:254,
    //   zan:4
    // }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // zanchange:function(e){
    //   const zan_flag=!this.data.contextdata.usrdata.zan_me
    //   this.setData({
    //     'contextdata.usrdata.zan_me':zan_flag
    //   });
    // },
    huifureview(e){
      // 1 获取点击的索引
      // console.log(e);
      const {rreviewid}=e.currentTarget.dataset;
      const {rreviewname}=e.currentTarget.dataset;
      this.triggerEvent("huifureview",{rreviewid,rreviewname});
    },
    huifuanswer(e){
      // console.log(e)
      // 1 获取点击的索引
      // const {index}=e.currentTarget.dataset;
      // // 2 触发 父组件中的事件 自定义
      const {rreviewid}=e.currentTarget.dataset;
      const {ranswername}=e.currentTarget.dataset;
      this.triggerEvent("huifuanswer",{rreviewid,ranswername});
    },
    zanchange(e){
      console.log(e)
      // console.log(e)
      // 1 获取点击的索引
      // const {index}=e.currentTarget.dataset;
      // // 2 触发 父组件中的事件 自定义
      const {rreviewid}=e.currentTarget.dataset;
      const {zan}=e.currentTarget.dataset;
      this.triggerEvent("reviewzanchange",{zan,rreviewid});
    },
  }
})
