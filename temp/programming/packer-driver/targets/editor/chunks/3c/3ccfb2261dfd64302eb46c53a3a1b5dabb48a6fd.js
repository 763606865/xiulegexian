System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, gUrl, ggd, hr, glf, _crd;

  function _reportPossibleCrUseOfgUrl(extras) {
    _reporterNs.report("gUrl", "./GameUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "./globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhr(extras) {
    _reporterNs.report("hr", "./HttpRequest", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "./globalFun", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      gUrl = _unresolved_2.gUrl;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      hr = _unresolved_4.hr;
    }, function (_unresolved_5) {
      glf = _unresolved_5.glf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6afb3R+E1RDQZa7ECl6M7ZS", "JavaToJs", undefined);

      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-12-06 19:33:02
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-06 19:36:31
       * @FilePath: \to-be-immortal\assets\script\global\JavaToJs.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */
      window.javaToJs = {
        //安卓通过桥调用js 方法
        javaUsingJsFunByBridge() {
          // switch (ggd.curAdRewardType) {
          //     case "getItems":
          //         em.dispatch("getItemsRewardByAds");
          //         break;
          //     case "rebirthHero":
          //         em.dispatch("rebirthHero");
          //         break;
          //     case "getDoubleReward":
          //         em.dispatch("getDoubleReward");
          //         break;
          //     default:
          //         em.dispatch("tipsViewShow", "参数类型错误："+ggd.curAdRewardType);
          //         break;
          // }
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).afterPlayAdComplete(); // //记录观看广告次数

          let url = (_crd && gUrl === void 0 ? (_reportPossibleCrUseOfgUrl({
            error: Error()
          }), gUrl) : gUrl).list.adClickCount;
          let data = null;
          (_crd && hr === void 0 ? (_reportPossibleCrUseOfhr({
            error: Error()
          }), hr) : hr).post(url, data, () => {});
        },

        initPhoneImei(imei) {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).phoneInfo.imei = imei;
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ccfb2261dfd64302eb46c53a3a1b5dabb48a6fd.js.map