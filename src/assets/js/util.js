 // 手机正则判断
 function isMobileNumber(str){
    const reg = new RegExp("^1[3|4|5|6|7|8]\\d{9}$");
    return reg.test(str);
}
function regpwd(str){
    const reg =new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
    return reg.test(str);
}
export default {
    isMobileNumber:isMobileNumber,
    regpwd:regpwd
}