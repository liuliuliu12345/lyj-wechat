let Server = "http://cardlan.xicp.net:2997";//天荣外网
// let Server = "https://ycsj.cardlan.com"; //线上

function requestServe(
  url,
  params,
  method,
  success,
  fail,
  complete,
  isShowLoading = true
) {
  if (isShowLoading) {
    wx.showLoading();
  }

  let header = {
    "content-type":
      "text/plain;application/json;application/x-www-form-urlencoded;charset=UTF-8"
  };

  url = Server + url;
  console.log("req url:" + url);
  console.log("params:" + JSON.stringify(params));

var params = {
  status: 200,
  msg: '请求成功',
  dada: []
}
  wx.hideLoading();
  return params
  // wx.request({
  //   url: url,
  //   method: method,
  //   data: params,
  //   header: header,
  //   success: res => {
  //     console.log(res);
  //     wx.hideLoading();
  //     //请求是否成功
  //     var statusCode = parseInt(res.statusCode);
  //     if (statusCode === 200) {
        
  //     } else {
  //       typeof fail === "function" && fail(res);
  //     }
  //   },
  //   fail: err => {
  //     wx.hideLoading();

  //     typeof fail === "function" && fail(err);
  //   },
  //   complete: res => {
  //     typeof complete === "function" && complete(res.data);
  //   }
  // });
}
module.exports = requestServe;
