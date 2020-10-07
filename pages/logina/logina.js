const app = getApp();
Page({
  data: {
    usr:'',
    usr_clear_flag: false,
    email:'',
    email_clear_flag:false,
    pwd:'',
    pwd_clear_flag:false,
    codeBack: null,
    isGettingCodes: false,
    countNum: 60,
    loading: false,
    comeFrom:''
  },
  onLoad: function (option) {
    let _this=this
    if(option.from){
      _this.setData({
        comeFrom: option.from
      })
    }
  },
  onReady() {

  },
  onShow() {
    
  },
  onHide() {

  },
  usrnumInput(event) {
    let _this = this
    let usr = event.detail.value
    let usrLen = event.detail.cursor
    if (usrLen) {
      _this.setData({
        usr_clear_flag: true,
        usr
      })
    } else {
      _this.setData({
        usr_clear_flag: false,
        usr
      })
    }
  },
  emailInput(event) {
    let _this = this
    let email = event.detail.value
    let Len = event.detail.cursor
    if (Len) {
      _this.setData({
        email_clear_flag: true,
        email
      })
    } else {
      _this.setData({
        email_clear_flag: false,
        email
      })
    }
  },
  pwdInput(event) {
    let _this = this
    let pwd = event.detail.value
    let Len = event.detail.cursor
    if (Len) {
      _this.setData({
        pwd_clear_flag: true,
        pwd
      })
    } else {
      _this.setData({
        pwd_clear_flag: false,
        pwd
      })
    }
  },
  usr_numclearInput() {
    let _this = this
    _this.setData({
      usr: '',
      usr_clear_flag: false
    })
  },
  emailClearInput() {
    let _this = this
    _this.setData({
      email: '',
      email_clear_flag: false
    })
  },
  pwdClearInput() {
    let _this = this
    _this.setData({
      pwd: '',
      pwd_clear_flag: false
    })
  },
  test(){
    let _this = this
    if(_this.data.usr.length<4){
      wx.showToast({
        title: '用户名需大于四个字符',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    if(!/^[\w\-]+@[a-zA-Z\d\-]+(\.[a-zA-Z]{2,8}){1,2}$/.test(_this.data.email)){
      wx.showToast({
        title: '请输入正确的邮箱',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/.test(_this.data.pwd)){
      wx.showToast({
        title: '密码为8—20位且必须包括数字和大小写字母',
        icon: 'none',
        duration: 2000
      })
      return false
    }
    return true
  },
  // test() {
  //   let _this = this
  //   if (this.data.isGettingCodes) {
  //     return false
  //   } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.data.phoneNum.trim())) {
  //     _this.showToast('请输入正确的手机号码')
  //     return fals
  Login() {
    let _this = this
    if(!_this.test()){
      return false
    }
    let data={
      user: _this.data.usr,
      email: _this.data.email,
      pwd:_this.data.pwd
    }
    console.log(data)
    // const res=await request({url:"/goods/search",data:this.QueryParams});
    // // 获取 总条数
    // const total=res.total;
    // // 计算总页数
    // this.totalPages=Math.ceil(total/this.QueryParams.pagesize);
    // // console.log(this.totalPages);
    // this.setData({
    //   // 拼接了数组
    //   goodsList:[...this.data.goodsList,...res.goods]
    // })

    // 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭也不会报错  
    wx.stopPullDownRefresh();       
  }
})