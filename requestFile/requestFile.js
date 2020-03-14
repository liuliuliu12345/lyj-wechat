const url = 'http://www.baidu.com';

function requestServe(requrl, params, method) {
  console.log(requrl, params, method);
  
  
  const timeout = 60000;
  var header = {
    'content-type': 'application/json'
  }
  wx.request({
    url: url,
    data: params,
    header: header,
    timeout: timeout,
    method: method,
    success: res => {
      console.log(res);
    },
    fail: err => {
      console.log(err);
    }
  })
}

module.exports = requestServe