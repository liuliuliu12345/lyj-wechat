// pages/register/register.js
import { validatorNumber } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
    phoneCheckCode: '',
    messagePhone: '',
    messageCode: '',
    messageLogin: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

    /**
   * 注册
   */
  handlerRegister: function () {
    if (!this.data.messagePhone && !this.data.messageCode) {
      if (this.data.phone && this.data.password && this.data.phoneCheckCode) {
        console.log('开始注册');
        this.setData({
          messageLogin: ''
        })

      } else {
        this.setData({
          messageLogin: '请输入完整的注册信息'
        })
  
      }
    }
  },

  /**
   * 获取手机验证码
   */
  getPhoneCode: function () {
    console.log('获取手机验证码');
    
  },

  onblurPhone:function (e) {
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
  },

  /**
   * 
   * @param {} e
   * @description 验证码 
   */
  onblurPhoneCode:function(e) {
    let data = validatorNumber(e.detail.value)
    if (data.status !== 200) {
      this.setData({
        messageCode: data.msgName
      })
    } else {
      this.setData({
        messageCode: '',
        phoneCheckCode: e.detail.value ? e.detail.value : ''
      })
    }
  },

  onblurPassword:function(e) {
    this.setData({
      password: e.detail.value ? e.detail.value : ''
    })
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