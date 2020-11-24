// pages/guide/deviceControl/index.js
import { getDeviceList ,getDeviceListSub} from '../../../utils/api/device-api'
import { gotoApNetwork, gotoVirtualNetwork } from '../../../utils/api/common-api'
var  online=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    errText: '',
    deviceList: [],
    

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function () {
    const deviceList = await getDeviceList()
    console.log(deviceList);
    
   
    
    if(Array.isArray(deviceList) && deviceList.length !== 0) {
      this.setData({ deviceList })
    } else {
      this.setData({ errText: '当前用户下无设备，请配网后再进行体验' })
    }
  },

  /**
   * 跳转ap配网
   */
  gotoApNetwork: gotoApNetwork,

  /**
   * 跳转扫码配网(虚拟设备)
   */
  gotoVirtualNetwork: gotoVirtualNetwork,

  turnDeviceOn: async function (event) {
    const { currentTarget: { dataset } } = event
    const { devid, name } = dataset
    // console.log(devid);
    // console.log(name);
    console.log(event);
    // console.log(dataset);
   const  { 0:{online}} = await getDeviceListSub(devid) 
  //  console.log(0);
    console.log(online);
    
    
 
    wx.navigateTo({
      url:`/pages/deviceDisplay/${devid}/index?online=${online}&devid=${devid}&name=${name}`
    })
  
}
})