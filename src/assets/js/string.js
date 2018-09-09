
// 是否是纯数字
function isPureNumber(str) {
  const reg = new RegExp("^[0-9]*$");
  return reg.test(str);
}

// 是否是纯字母
function isPureLetter(str) {
  const reg = new RegExp("^[A-Za-z]+$");
  return reg.test(str);
}

// 是否是6-20位字母和数字组合
function isNumberAndLetter(str) {
  const reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
  return reg.test(str);
}

// 是否是手机号
function isMobileNumber(str) {
  const reg = new RegExp("^1[3|4|5|7|8]\\d{9}$");
  return reg.test(str);
}

//是否为邮箱
function isEmail(str) {
  const reg = new RegExp("[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
  return reg.test(str);
}
//是否为身份证
function isIdentity(str){
  const reg = new RegExp("^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$");
  return reg.test(str);
}

module.exports = {
  isPureNumber: isPureNumber,
  isPureLetter: isPureLetter,
  isNumberAndLetter: isNumberAndLetter,
  isMobileNumber: isMobileNumber,
  isEmail: isEmail,
  isIdentity: isIdentity
}