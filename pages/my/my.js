// pages/user/index.js
Page({
  data: {
    userinfo:{},
    collectNums:0
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    this.setData({userinfo});     
  },
  login(){
    wx.navigateTo({
      url: '/pages/logina/logina',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  }
})