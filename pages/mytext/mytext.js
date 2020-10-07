// pages/mytext/mytext.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myconextdata:[
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
  },
  todetail:function(e){
    wx.setStorageSync("currentcontextid", this.data.myconextdata[e.currentTarget.dataset['index']].currentcontextid);
    wx.navigateTo({
      url: '../text_detail/text_detail'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})