System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, ggd, HttpRequest, _crd, hr;

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "./globalData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      ggd = _unresolved_2.ggd;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "feea6/nvANI9aAqPuZStDYe", "HttpRequest", undefined);

      __checkObsolete__(['sys']);

      HttpRequest = class HttpRequest {
        constructor() {// console.log("创建http请求");
        }

        get(url, params, cb, eb, tb) {
          if (eb === void 0) {
            eb = null;
          }

          if (tb === void 0) {
            tb = null;
          }

          var xhr = new XMLHttpRequest();
          var data = params;
          var param = '?';

          for (var key in data) {
            var paramStr = key + "=" + data[key]; // if (param == "") param += paramStr;

            if (param == "?") param += paramStr;else param += "&" + paramStr;
          }

          ;
          console.log("get:请求路径", url + param);
          xhr.open("GET", url + param);
          xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"); // xhr.setRequestHeader("Authorization", "Bearer "+token);

          this.xhrBindCallback(xhr, cb, eb, tb);
          xhr.send();
        }

        post(url, params, cb, eb, tb) {
          if (eb === void 0) {
            eb = null;
          }

          if (tb === void 0) {
            tb = null;
          }

          if (typeof params !== "object") {
            return console.log("参数不是对象 传输错误");
          }

          ;
          var xhr = new XMLHttpRequest(); // console.log("post:请求路径", url);

          xhr.open("POST", url); // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");

          this.setRequestHeader(xhr);
          this.xhrBindCallback(xhr, cb, eb, tb); // console.log(params);

          xhr.send(JSON.stringify(params));
        }

        setRequestHeader(xhr) {
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.setRequestHeader("version", 101);
          xhr.setRequestHeader("nonce", Date.now());
          var imei = (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).phoneInfo.imei;
          if (imei) xhr.setRequestHeader("imei", imei);else {
            var _imei = sys.localStorage.getItem("imei");

            if (_imei) xhr.setRequestHeader("imei", _imei);else {
              _imei = this.randomCreateImei();
              sys.localStorage.setItem("imei", _imei);
              xhr.setRequestHeader("imei", _imei);
            }
          }
          if (sys.os == "Android") xhr.setRequestHeader("os", "ANDROID");else if (sys.os == "iOS") xhr.setRequestHeader("os", "IOS");else xhr.setRequestHeader("os", "PC");
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).userInfo.token) xhr.setRequestHeader("Authorization", "Bearer " + (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).userInfo.token);
        } //获取随机imei


        randomCreateImei() {
          var s = [];
          var randomImei;
          var hexDigits = "0123456789abcdef";

          for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
          }

          s[14] = "4";
          s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);
          s[8] = s[13] = s[18] = s[23] = "-";
          randomImei = s.join("");
          return randomImei;
        } //xhr绑定回掉函数 


        xhrBindCallback(xhr, cpCb, errCb, toCb) {
          xhr.onreadystatechange = () => {
            if (xhr.readyState != 4) return;

            if (xhr.status >= 200 && xhr.status <= 207) {
              // console.log("xhr.responseText",xhr.responseText);
              var response = JSON.parse(xhr.responseText);
              if (cpCb) cpCb(response);else this.runDefaultCompleteCallback(response);
            } else {
              console.log("xhr.status", xhr.status);
            }

            ;
          };

          xhr.onerror = () => {
            if (xhr.readyState == 1 && xhr.status == 0) {
              if (errCb) errCb("断网");else this.runDefaultErrorCallback("断网"); // 断网
            } else {
              if (errCb) errCb("未知错误");else this.runDefaultErrorCallback("未知错误"); // 断网
            }
          };

          xhr.timeout = 60000;

          xhr.ontimeout = e => {
            if (toCb) toCb(e);else this.runDefaultTimeoutCallback(e);
          };
        }

        //运行默认 completeCallback
        runDefaultCompleteCallback(response) {
          console.log("run Default Complete Callback");
          console.log("response", response);
        }

        //运行默认 errorCallback
        runDefaultErrorCallback(string) {
          console.log("run Default Error Callback");
          console.log("string", string);
        }

        //运行默认 ontimeoutCallback
        runDefaultTimeoutCallback(e) {
          console.log("run default timeout callback");
          console.log("e", e);
        }

      };
      ;

      _export("hr", hr = new HttpRequest());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e2c735c025b080235f845d69ca4608935f8d5c1.js.map