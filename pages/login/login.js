//获取应用实例,小程序入口的方法
const app = getApp()
var DataRequest = require('../../requestFile/requestFile.js');

import { validatorNumber } from '../../utils/util'
Page({
  data: {
    phone: '',
    password: '',
    isLogin: '立即注册',
    ForgetPassword: '忘记密码',
    messagePhone: '',
    messagePwd: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
  },

  onblurUserPhone: function(e) {
    if (e.detail.value) {
      let data = validatorNumber(e.detail.value)
      if (data.status !== 200) {
        this.setData({
          messagePhone: data.msgName
        })
  
      } else {
        this.setData({
          messagePhone: '',
          phone: e.detail.value ? e.detail.value : ''
        })
      }
    }
  },

  onblurUserPwd: function(e) {
    if (this.data.phone && !e.detail.value) {
      this.setData({
        messagePwd: '请输入密码'
      })
    } else {
      this.setData({
        messagePwd: '',
        password: e.detail.value ? e.detail.value : ''
      })
    }
  },

    // 点击获取头像引导
    getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },

  // 登录
  handlerLogin: function () {
    if (!this.data.phone && !this.data.password) {
      this.setData({
        messagePwd: '请输入密码',
        messagePhone: '请输入手机号'
      })
    } else if (!this.data.phone) {
      this.setData({
        messagePhone: '请输入手机号'
      })

    } else if (!this.data.password) {
      this.setData({
        messagePwd: '请输入密码'
      })
    } else {
      this.setData({
        messagePwd: '',
        messagePhone: ''
      })
      this.startLogin()
    }
  },

  /**
   * 登录
   */
  startLogin: function() {
    var params = {
      'a': 1
    }
    // var data = DataRequest('/yichangdriver/common/userLogin', params, 'GET', (res) => {
    //   console.log(res)
    // }, null, null)
    var data = DataRequest('/yichangdriver/common/userLogin', params, 'GET')
    console.log(data)
    if (data.status === 200) {
      wx.reLaunch({
        url: '../index/index'
      })
    }
  },

  // 注册
  handlerRegister: function () {
    wx.navigateTo({
      url: '../register/register'
    })
  }
}) 