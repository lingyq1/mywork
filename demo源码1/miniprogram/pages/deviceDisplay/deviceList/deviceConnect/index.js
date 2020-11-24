// miniprogram/pages/deviceDisplay/deviceList/deviceConnect/index.js
import {getEnabledSubDiscovery,getDeviceListSub} from '../../../../utils/api/device-api'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    status:false,
    backgroundcolor:'lightgrey',
    color:'grey',
    devid:''
  },
  select:function(){
    this.setData({
      backgroundcolor:'#1f7cef',
      color:'white',
      status:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    const {devid} = e;
    this.setData({
      devid:devid
    })
  },
  startToNetwork: async function(e){
    // const devid = e.currentTarget.dataset.devid   
    const  EnabledSubDiscovery = await getEnabledSubDiscovery(this.data.devid)
    const DeviceListSub= await getDeviceListSub(this.data.devid)
    console.log(EnabledSubDiscovery);
    console.log(DeviceListSub);
    
    
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