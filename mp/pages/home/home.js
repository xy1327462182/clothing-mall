// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [],
    navList: [],
    goodsList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取数据
    this.setData({
      swiperList: [
        {
          id:0,
          src: '/icons/swiper/aaa2933601273c212661.jpg'
        },
        {
          id:1,
          src: '/icons/swiper/60179482d9010.jpg'
        },
      ],
      navList: [
        {
          id: 0,
          icon: 'https://img10.360buyimg.com/focus/s140x140_jfs/t22150/190/198344927/7990/173c5b68/5b026d07Nd8f0bb6c.jpg',
          title: '婴童棉服'
        },
        {
          id: 1,
          icon: 'https://img10.360buyimg.com/focus/s140x140_jfs/t18013/239/691883750/3768/d79eb4e/5a9f94c7N935c44f5.jpg',
          title: '外套大衣'
        },
        {
          id: 2,
          icon: 'https://img14.360buyimg.com/focus/s140x140_jfs/t18790/111/673564180/2396/3d27d79a/5a9f94c1N5b0c8724.jpg',
          title: '套装'
        },
        {
          id: 3,
          icon: 'https://img13.360buyimg.com/focus/s140x140_jfs/t18874/21/706876422/6636/eee1ac60/5a9f9604Nfe3954b0.jpg',
          title: '连体衣'
        },
      ],
      goodsList: [
        {
          id: 'asa',
          image: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/163646/22/5890/180182/601e6c3fEba37158a/a180bf9cf9028952.jpg!q80.dpg.webp',
          title: '精典泰迪Classic',
          price: '899.00',
          tag: '满199-40',
          sales: 23453
        },
        {
          id: '2345sdfdasr',
          image: 'https://img10.360buyimg.com/n1/jfs/t1/164308/4/4955/155068/6017f068Ea0f5bb6e/ab61f4ddb953f716.jpg',
          title: '心可派儿 童装男春秋装上衣2021款儿童外套秋冬季男孩棉衣中长款风衣 拉条外套-红色 150码建议身高140CM',
          price: '679.00',
          tag: '包邮',
          sales: 1453
        },
        {
          id: '23aa45sdfdasr',
          image: 'https://img13.360buyimg.com/n1/jfs/t1/152194/14/8413/112409/5fc9d8aaE1630c151/949b9754c8849785.jpg',
          title: '好莉娅女童外套2020新款冬装4-12岁儿童加绒加厚两面穿洋气时尚上衣网红中大童秋冬衣服 加棉羊羔毛 粉色 140cm建议身高135左右',
          price: '99.00',
          tag: '满99-10',
          sales: 4958
        },
        {
          id: 'asa65456',
          image: '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/163646/22/5890/180182/601e6c3fEba37158a/a180bf9cf9028952.jpg!q80.dpg.webp',
          title: '精典泰迪Classic',
          price: '899.00',
          tag: '满199-40',
          sales: 23453
        },
        {
          id: '2345sdfdawersr',
          image: 'https://img10.360buyimg.com/n1/jfs/t1/164308/4/4955/155068/6017f068Ea0f5bb6e/ab61f4ddb953f716.jpg',
          title: '心可派儿 童装男春秋装上衣2021款儿童外套秋冬季男孩棉衣中长款风衣 拉条外套-红色 150码建议身高140CM',
          price: '679.00',
          tag: '包邮',
          sales: 1453
        },
        {
          id: 'as23423aa45sdfdasr',
          image: 'https://img13.360buyimg.com/n1/jfs/t1/152194/14/8413/112409/5fc9d8aaE1630c151/949b9754c8849785.jpg',
          title: '好莉娅女童外套2020新款冬装4-12岁儿童加绒加厚两面穿洋气时尚上衣网红中大童秋冬衣服 加棉羊羔毛 粉色 140cm建议身高135左右',
          price: '99.00',
          tag: '满99-10',
          sales: 4958
        }
      ]
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