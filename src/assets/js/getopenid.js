localStorage.removeItem("openid")
//只取一个：
function queryString(key){
  return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
}
var openid = localStorage.getItem("openid");
var access_code = queryString('code')
if (openid == null) {
  if (access_code == null)
    {
      var fromurl = location.href
      var appid = "wxc0fc91552316d432"
      var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + encodeURIComponent(fromurl) + '&response_type=code&scope=snsapi_base#wechat_redirect'
      //location.href = url
    }
}
