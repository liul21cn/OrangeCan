// pages/post/post.js
// var dataObj = require("../../data/data.js");
// var DBPost = require("../../db/DBPost.js").DBPost;

// ES6版本的DBPost
import { DBPost } from "../../db/DBPost.js";  

Page({

  /**
   * 页面的初始数据
   */
  data:{
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var dbPost = new DBPost();
    this.setData({
      postList: dbPost.getAllPostData()
    });    
  },

  // 图像加载
  imageLoad: function () {
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度
      })
  },

  // 文章详细页
  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },
})