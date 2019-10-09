import { DBPost } from '../../../db/DBPost.js';
var app = getApp();
console.log(app)

Page({
  data: {},
  onLoad: function (options) {
    var postId = options.id; 
    this.dbPost = new DBPost(postId);
    this.postData = this.dbPost.getPostItemById().data;
    this.setData({
      post: this.postData
    })
  },

  onReady: function () {
    // 设置“导航栏标题”
    wx.setNavigationBarTitle({
      title: this.postData.title
    })
  },
  
})