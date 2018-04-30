// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navbar:['护彩','彩妆','香水','个人护理'],
      imgUrls: [
        'http://mz.djmall.xmisp.cn\/files\/banner\/20161219\/148211980641.png',
        'http://mz.djmall.xmisp.cn\/files\/banner\/20161222\/148238831285.png',
        'http://mz.djmall.xmisp.cn\/files\/banner\/20161222\/14823895573.png'
      ],
      currentTab:0,
      indicatorDots:true,
      autoplay:true,
      interval: 3000,
      duration:1000,
      navItems:[
        {
          typeId: 0,
          name: '品牌馆',
          url: 'bill',
          imageurl: '../../images/navItems/home_icon_brand.png',
        },
        {
          typeId: 1,
          name: '类目',
          url: 'bill',
          imageurl: '../../images/navItems/home_icon_sort.png',
        },
        {
          typeId: 2,
          name: '特惠专场',
          url: 'bill',
          imageurl: '../../images/navItems/home_icon_gift.png'
        },
        {
          typeId: 3,
          name: '推荐好友',
          url: 'bill',
          imageurl: '../../images/navItems/home_icon_frends.png'
        }
      ],
  },
  navsbarTap:function(e){
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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