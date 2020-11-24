import { gotoApNetwork, gotoVirtualNetwork } from '../../../utils/api/common-api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
     devid:''
  },

  gotoVirtualNetwork: gotoVirtualNetwork,
  connectNetwork:function(e){
    // const devd = e.currentTarget.dataset.devid
    // console.log(devd);
    
    wx.navigateTo({
      url: `./deviceConnect/index?devid=${this.data.devid}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     const {devid} = options
     this.setData({
        devid:devid
     })
// console.log(devid);

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