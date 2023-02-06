//const crypto = require('crypto');  //导入模块

var domain = window.location.host;  //域名
//console.log(domain);

var timestamp = new Date().getTime();  //时间戳，精确到毫秒
//console.log(timestamp);

//console.log(navigator.userAgent)  //userAgent信息

//var userDIY = 'I am your father!'  //用户自定义的字段
var userDIY = prompt('Please enter your custom info: ', 'I am your father!');

const text = domain + timestamp + userDIY + navigator.userAgent;
console.log(text)

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // 编码为（utf-8）Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // 计算消息的哈希值
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // 将缓冲区转换为字节数组
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // 将字节数组转换为十六进制字符串
  return hashHex;
}

digestMessage(text)
  .then((digestHex) => alert('Your password is:\n' + digestHex));

  