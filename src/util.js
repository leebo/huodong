module.exports = {
  getQuery: function(key){
    return (document.location.search.match(new RegExp("(?:^\\?|&)"+key+"=(.*?)(?=&|$)"))||['',null])[1];
  },
  getOpenid: function() {
    var openid = localStorage.getItem("openid");
    var access_code = this.getQuery('code')
    if (openid == null) {
      if (access_code)
      {
        $.showPreloader()
        $.getJSON('http://mmsahci7g6.proxy.qqbrowser.cc/api/v1/openid?code=' + access_code, function(data) {
          localStorage.setItem("openid", data.openid)
          $.hidePreloader()
        })
      }
    }
  },
  setWxConfig: function(){
    $.getJSON('http://mmsahci7g6.proxy.qqbrowser.cc/api/v1/jssdk?url=' + encodeURIComponent(location.href.split('#')[0]), function(data) {
      wx.config({
          debug: true,
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'hideMenuItems',
            'showMenuItems',
            'hideAllNonBaseMenuItem',
            'showAllNonBaseMenuItem',
            'translateVoice',
            'startRecord',
            'stopRecord',
            'onRecordEnd',
            'playVoice',
            'pauseVoice',
            'stopVoice',
            'uploadVoice',
            'downloadVoice',
            'chooseImage',
            'previewImage',
            'uploadImage',
            'downloadImage',
            'getNetworkType',
            'openLocation',
            'getLocation',
            'hideOptionMenu',
            'showOptionMenu',
            'closeWindow',
            'scanQRCode',
            'chooseWXPay',
            'openProductSpecificView',
            'addCard',
            'chooseCard',
            'openCard'
          ]
        })
    })
  }
}
