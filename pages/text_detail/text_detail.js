// pages/text_detail/text_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentname:"",
    currentid:0,
    flag:0,
    contextdata:{
        usrdata:{
          usrpictures:"/icons/friends.jpg",
          usrname:"jack",
          time:"10:12:00",
          title:"title",
          content:"dasfasdfasdfasfdsadfsa\nasdfdsafsafdasfdsafd\n",
          zan_num:"1000",
          zan_me:false,
          shoucang_me:true,
          pictures:[
            "../../pictures/test.jpg",
            "../../pictures/test.jpg"
          ]
        },
        reviewdata:[
            {
              reviewid:"0",
              name:"tom",
              sendtime:"10:12:00",
              usrpictures:"/icons/friends.jpg",
              zan:15,
              zan_me:false,
              content:"dasfasdfasdfasfdsadfsa\nasdfdsafsafdasfdsafd\n",
              answer:[
                {
                  name:"renjie",
                  to :"tom",
                  nameurl:"",
                  content:"????",
                  zan:14,
                  time:"10:12:00",
                  answerid:"0"
                },
                {
                  name:"marongkun",
                  to :"renjie",
                  nameurl:"",
                  content:"????",
                  zan:10,
                  time:"10:12:00",
                  answerid:"1"
                }
              ]
              },
            {
              reviewid:"1",
              name:"tom",
              sendtime:"10:12:00",
              usrpictures:"/icons/friends.jpg",
              zan:15,
              zan_me:false,
              content:"dasfasdfasdfasfdsadfsa\nasdfdsafsafdasfdsafd\n",
              answer:[
                {
                  name:"renjie",
                  to :"tom",
                  nameurl:"",
                  content:"????",
                  time:"10:12:00",
                  answerid:"0"
                },
                {
                  name:"marongkun",
                  to :"renjie",
                  nameurl:"",
                  content:"????",
                  time:"10:12:00",
                  answerid:"1"
                }
              ]
              },
              {
                reviewid:"2",
                name:"tom",
                sendtime:"10:12:00",
                usrpictures:"/icons/friends.jpg",
                zan:15,
                zan_me:false,
                content:"dasfasdfasdfasfdsadfsa\nasdfdsafsafdasfdsafd\n",
                answer:[
                  {
                    name:"renjie",
                    to :"tom",
                    nameurl:"",
                    content:"????",
                    time:"10:12:00",
                    answerid:"0"
                  },
                  {
                    name:"marongkun",
                    to :"renjie",
                    nameurl:"",
                    content:"????",
                    time:"10:12:00",
                    answerid:"1"
                  }
                ]
                }
        ]
    }

    
  },
  zanchange:function(e){
    const zan_flag=!this.data.contextdata.usrdata.zan_me
    this.setData({
      'contextdata.usrdata.zan_me':zan_flag
    });
  },
  shoucangchange:function(e){
    const shoucang_flag=!this.data.contextdata.usrdata.shoucang_me
    this.setData({
      'contextdata.usrdata.shoucang_me':shoucang_flag
    });
  },
  reviewzanchange:function(e){
    let index=parseInt(e.detail.rreviewid)

    console.log(e.detail)
    this.setData({
      ['contextdata.reviewdata[' + index + '].zan_me']:parseInt(e.detail.zan),
    });
  },
  flagchange:function(e){
    this.setData({
      flag:0
    });
  },
  // flagchange2:function(e){
  //   this.setData({
  //     flag:1
  //   });
  // },
  hpl:function(e){
    // console.log(e)
  },
  hlz:function(e){
    // console.log(e)
  },
  huifureview:function(e){
    console.log(e.detail)
    this.setData({
      flag:1,
      currentid:e.detail.rreviewid,
      currentname:e.detail.rreviewname
    });
  },
  huifuanswer:function(e){
    console.log(e.detail)
    this.setData({
      flag:1,
      currentid:e.detail.rreviewid,
      currentname:e.detail.ranswername
    });
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