const reg = /^[0-9]+$/;

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 
 * @param {*} data 
 * @description 校验数字 
 */
const validatorNumber = (data) => {
  let msgObj = {
    status: 200
  }
  if (!reg.test(data)) {
    msgObj.status = 300
    msgObj.msgName = '请输入数字'
    return msgObj
  }
  return msgObj
}
/**
 * @param {targetStr} String字符
 * @description 去全部空格
 */
const Trim = targetStr => {
  return targetStr.replace(/\s*/g, '')
}

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

module.exports = {
  Trim: Trim,
  formatTime: formatTime,
  validatorNumber: validatorNumber
}
