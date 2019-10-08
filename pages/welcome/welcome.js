Page({

  onTapJump:function(event){
    wx.redirectTo({
      url: '../post/post',
      success:function(){
        console.log("jump success")
      },
      fail:function(){
        console.log("jump failed")
      },
      complete:function(){
        console.log("jump complete")
      }
    })
  }

})