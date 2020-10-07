Page({
  /** 
   * 页面的初始数据 
   */
  data: {
    userinfo:{},
    test:{
      status:0,
      data:[
        {
          Id:0,
          Name:'oenjie',
          Ttitle:'O'
        },
        {
          Id:1,
          Name:'renjie',
          Ttitle:'R'
        },
        {
          Id:2,
          Name:'renjie',
          Ttitle:'R'
        },
        {
          Id:3,
          Name:'renjie',
          Ttitle:'R'
        },
        {
          Id:4,
          Name:'menjie',
          Ttitle:'M'
        },
      ]

    },
    isActive:null,   
    listMain:[],
    listTitles: [],
    fixedTitle:null,    
    toView: 'inToView0',
    oHeight:[],
    scroolHeight:0
  },
  //点击右侧字母导航定位触发
  scrollToViewFn: function (e) {
    var that=this;
    var _id = e.target.dataset.id;
    for (var i = 0; i < that.data.listMain.length; ++i) {
      if (that.data.listMain[i].id === _id) {
        that.setData({
          isActive:_id,
          toView: 'inToView' + _id
        })
        break
      }
    }
  },
  toBottom:function(e){
    console.log(e)
  },
  // 页面滑动时触发
  onPageScroll:function(e){
    this.setData({
      scroolHeight: e.detail.scrollTop
    });
    for (let i in this.data.oHeight){
      if (e.detail.scrollTop < this.data.oHeight[i].height){
        this.setData({
          isActive: this.data.oHeight[i].key,
          fixedTitle:this.data.oHeight[i].name
        });
        return false;
      }
    }
   
  },
  getBrands:function(){
    var that=this;
    var res=that.data.test;
    console.log(res)
    console.log(res.data)
    console.log(res.data.length)
    if(res.status==0){
      var Ttitle = null;
      var someArr=[];
      console.log(res.data.length)
      for(var i=0;i<res.data.length;i++){
        var newBrands = {Id: res.data[i].Id, name: res.data[i].Name };
        console.log(newBrands)
        if (res.data[i].Ttitle != Ttitle){
          Ttitle = res.data[i].Ttitle
          var newObj = {
            id: i,
            region: Ttitle,
            brands: []
          };
          someArr.push(newObj)
        }
        newObj.brands.push(newBrands);
        
      };
      //赋值给列表值
      that.setData({
        listMain:someArr
      });
      //赋值给当前高亮的isActive
      that.setData({
        isActive: that.data.listMain[0].id,
        fixedTitle: that.data.listMain[0].region
      });

      //计算分组高度,wx.createSelectotQuery()获取节点信息
      var number=0;
      for (let i = 0; i < that.data.listMain.length; ++i) {
        wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
          number = rect.height + number;
          var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].region}]
          that.setData({
            oHeight: that.data.oHeight.concat(newArry)
          })

        }).exec();
      };
     
    }
  },
// 处理数据格式，及获取分组高度
  // getBrands:function(){
  //   var that=this;
  //   wx.request({
  //     url: '获取数据地址',
  //     success(res) {
  //       if(res.data.status==0){
  //         var Ttitle = null;
  //         var someArr=[];
  //         for(var i=0;i<res.data.data.length;i++){
  //           var newBrands = {Id: res.data.data[i].Id, name: res.data.data[i].Name };
  //           if (res.data.data[i].Ttitle != Ttitle){
  //             Ttitle = res.data.data[i].Ttitle
  //             var newObj = {
  //               id: i,
  //               region: Ttitle,
  //               brands: []
  //             };
  //             someArr.push(newObj)
  //           }
  //           newObj.brands.push(newBrands);
            
  //         };
  //         //赋值给列表值
  //         that.setData({
  //           listMain:someArr
  //         });
  //         //赋值给当前高亮的isActive
  //         that.setData({
  //           isActive: that.data.listMain[0].id,
  //           fixedTitle: that.data.listMain[0].region
  //         });
 
  //         //计算分组高度,wx.createSelectotQuery()获取节点信息
  //         var number=0;
  //         for (let i = 0; i < that.data.listMain.length; ++i) {
  //           wx.createSelectorQuery().select('#inToView' + that.data.listMain[i].id).boundingClientRect(function (rect) {
  //             number = rect.height + number;
  //             var newArry = [{ 'height': number, 'key': rect.dataset.id, "name": that.data.listMain[i].region}]
  //             that.setData({
  //               oHeight: that.data.oHeight.concat(newArry)
  //             })
 
  //           }).exec();
  //         };
         
  //       }
  //     }
  //   })
  // },
  onLoad: function (options) {
    var that=this;
    that.getBrands();   
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    this.setData({userinfo});     
  },
  login(){
    wx.navigateTo({
      url: '/pages/login/login',
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  }
}) 
//res.status零是正常
//res.data对象数组，其中包括Id，Name，和首字母Ttitle（后续可能加入url进入个人用户空间）