//index.js
//获取应用实例
import {
  reqTicket,
  getDeviceList,
  getDetails
} from '../../utils/api/device-api';
import { connect } from '../../libs/wechat-weapp-redux.min';

const pageConfig = {
  data: {
    deviceList: [],
    device_id:''
  },
  //事件处理函数
  onLoad: function () {  

  },
  onShow: async function () {
    const deviceList = await getDeviceList()
    console.log(deviceList);
    this.setData({ deviceList })
    // console.log(device_id);
  },
  GotoAddDevice: async function () {
    const { ticket } = await reqTicket();
    /*
     *  clientId 用户在涂鸦工作台获取的clientId
     *  ticket  接口获取的票据
     *  wifiName 支持自定义配网热点名称
     *  textArray 支持用户自定义配网流程提示
     */

    wx.navigateTo({
      url: `plugin://tuya-ap-plugin/step1?clientId=em4dua4n7ke7hghqsd3f&ticket=${ticket}`
    });
  },
  turnDeviceOn:async function (event) {
    const { currentTarget: { dataset } } = event
    const { devid, name } = dataset
      // console.log(event);
      // console.log(devid);
      
      
     const gDetails = await getDetails(devid) 
     const {online} = gDetails
    //  console.log(online);
     

    wx.navigateTo({
      url:`/pages/deviceDisplay/${devid}/index?online=${online}&devid=${devid}&name=${name}`,
    })
  },

  goToGuidePage: function () {
    wx.reLaunch({
      url: '/pages/guide/index',
    })
  }
};

const mapStateToPage = (state) => ({
});

const mapDispatch = (dispatch) => ({
});

const nextConfig = connect(mapStateToPage, mapDispatch)(pageConfig);

Page(nextConfig);
