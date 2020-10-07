import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
// pages/demo04/demo04.js

  data: {
  swiperCurrent: 0,
  imgUrls:[
    "//gw.alicdn.com/imgextra/i1/44/O1CN013zKZP11CCByG5bAeF_!!44-0-lubanu.jpg",
    '//aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
    '//gw.alicdn.com/imgextra/i2/37/O1CN01syHZxs1C8zCFJj97b_!!37-0-lubanu.jpg'
  ],
  links: [//点击图片之后跳转的路径
    '../guide/guide',
    '../my/my',
    '../friends/friends'
  ],
  recommenddata:[
    {
      currentcontextid: '0',
      data:{
        pictures:"/pictures/test.jpg",
        title:123185,
        time:45254,
        people:2541,
        review_num:254,
        zan:4
      },
      contexturl:'../text_detail/text_detail'
    },
    {
      currentcontextid: '1',
      data:{
        pictures:"/pictures/test.jpg",
        title:123185,
        time:45254,
        people:2541,
        review_num:254,
        zan:4
      },
    }
  ],

  tabs: [
    {
      id: 0,
      value: "推荐",
      isActive: true
    },
    {
      id: 1,
      value: "圈子",
      isActive: false
    }
    ,
    {
      id: 2,
      value: "热搜",
      isActive: false
    }
    ,
    {
      id: 3,
      value: "关注",
      isActive: false
    }
  ],
  textList:[]
  },
 //轮播图的切换事件
 swiperChange: function (e) {
  //  console.log(e);
  this.setData({
    swiperCurrent: e.detail.current
  })
},
  todetail:function(e){
    wx.setStorageSync("currentcontextid", this.data.recommenddata[e.currentTarget.dataset['index']].currentcontextid);
    wx.navigateTo({
      url: '../text_detail/text_detail'
    })
  },
  // todetail:function(e){
  //   wx.request({
  //     url: 'http://10.210.24.49:8080/api/user/register', //仅为示例，并非真实的接口地址
  //     data: {
  //       x: 'asdf',
  //       y: 'adsf'
  //     },
  //     method:"POST",
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success (res) {
  //       console.log(res)
  //     }
  //   })
  //   console.log("asdfsd")
  // },
//点击指示点切换事件
// chuangEvent: function (e) {
//   this.setData({
//     swiperCurrent: e.currentTarget.id
//   })
// },

//点击图片触发事件
swipclick: function (e) {
  console.log(this.data.swiperCurrent);
  wx.navigateTo({
    url: this.data.links[this.data.swiperCurrent]
  })
},
handleItemChange(e) {
  // 接收传递过来的参数
  const { index } = e.detail;
  let { tabs } = this.data;
  tabs.forEach((v, i) => i === index ? v.isActive = true : v.isActive = false);
  this.setData({
    tabs
  })
},
  // 获取轮播图数据
  // ga: function (e){
  //   wx.request({
  //     url: '10.210.24.49:8080/api/user/register', //仅为示例，并非真实的接口地址
  //     data: {
  //       x: '',
  //       y: ''
  //     },
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     // method:'POST',
  //     success (res) {
  //       console.log(res.data)
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },


  // 标题点击事件 从子组件传递过来
  handleTabsItemChange(e){
    // 1 获取被点击的标题索引
    const {index}=e.detail;
    // 2 修改源数组
    let {tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    // 3 赋值到data中
    this.setData({
      tabs
    })
  },
})