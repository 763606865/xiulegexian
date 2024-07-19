System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, em, ggd, _dec, _class, _crd, ccclass, property, helpLayer;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1aea51RUbNFdL7S/YxOX6C2", "helpLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-11 17:57:36
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-22 14:47:29
       * @FilePath: \to-be-immortal\assets\script\test\helpLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("helpLayer", helpLayer = (_dec = ccclass('helpLayer'), _dec(_class = class helpLayer extends Component {
        onBtnUnlockAllStages() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stageProgress = 80;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingGlobalDataToTempData");
        } // 解锁下一关


        onBtnUnlockNextStages() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stageProgress >= 80) return;
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stageProgress++;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingGlobalDataToTempData");
        }

        onBtnOpenHelpLayer() {
          this.node.active = true;
        }

        onBtnCloseHelpLayer() {
          this.node.active = false;
        }

        onBtnOpenDamageImmunity() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "openDamageImmunity");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55288b993fa0f124adf2b0d3338fcf7648dd24dc.js.map