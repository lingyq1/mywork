// miniprogram/pages/deviceDisplay/index1/index1.1/index1.1.js

import {
  getDeviceListSub 
} from '../../../utils/api/device-api';

var mtabW;

Page({

  /**
   * 页面的初始数据
   */

  data: {
    tabs:["子设备","报警记录"],
    activeIndex:0,
    slideOffset:0,
    tabW:0,
    devid:'',
    devicelistsub:[],
      name:'',
      suboption:'',
    deid:''
    },
   

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // console.log(options)
    const {devid} =options;
       this.setData({
        devid:devid
    })
     //或者这样定义
    // const online = options.online
 
    

     const devicelistsub =await getDeviceListSub(devid);
     //现在打印出来的是promise对象，不可以直接用，要赋值给同名的空数组，才可以直接调用，如下
    //  console.log(devicelistsub);
     const {id,name } = devicelistsub;
     this.setData({
       //看这里，赋值后，才可以真正传值
      devicelistsub:devicelistsub,
     })
  
    var that = this;
  wx.getSystemInfo({
   success: function (res) {
    mtabW = res.windowWidth / 4; //设置tab的宽度
    that.setData({
      tabW:mtabW,
    })
    // console.log(mtabW);
  
   }
  });

  },
  addDevice:function(e){
    // const deid = e.currentTarget.dataset.devid
    // console.log(deid);
    wx.navigateTo({
      url: `/pages/deviceDisplay/deviceList/index?devid=${this.data.devid}`,
    })
  },
  turnDeviceOn:function(event){
    const { currentTarget: { dataset } } = event
    const { devid, name } = dataset
      // console.log(devid);
    // console.log(event);
    
    wx.navigateTo({
      url: `/pages/deviceDisplay/${devid}/index`,
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
    url: '../logs/logs'
    })
    },
    tabClick:function(e){
    var that = this;
    var idIndex = e.currentTarget.id;
    
    var offsetW = e.currentTarget.offsetLeft; 
    // console.log(offsetW);
    
    //2种方法获取距离文档左边有多少距离
    this.setData({
    activeIndex:idIndex,
    slideOffset:offsetW
    });
    },
    bindChange:function(e){
    var current = e.detail.current;
    // console.log(e);
    
    var offsetW = current * mtabW; //2种方法获取距离文档左边有多少距离
    this.setData({
     activeIndex:current,
     slideOffset:offsetW
    });
    
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