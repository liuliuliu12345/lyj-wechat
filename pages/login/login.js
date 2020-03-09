Page({
  data: {
    isLogin: '立即注册',
    ForgetPassword: '忘记密码'
  },

  handlerLogin: function () {
    this.setData({
      isLogin: '已有账号'
    })
  }
})