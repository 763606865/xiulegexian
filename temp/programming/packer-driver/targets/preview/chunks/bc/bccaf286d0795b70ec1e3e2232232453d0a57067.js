System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, em, ggd, _dec, _class, _crd, ccclass, property, GameAnimManager;

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

      _cclegacy._RF.push({}, "1d4f9s3vJFHb4UKLxz8L+zJ", "GameAnimManager", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-02 11:40:55
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-11-30 22:22:44
       * @FilePath: \to-be-immortal\assets\script\game\GameAnimManager.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameAnimManager", GameAnimManager = (_dec = ccclass('GameAnimManager'), _dec(_class = class GameAnimManager extends Component {
        constructor() {
          super(...arguments);
          this._animList = [];
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingGameAnimManagerFun");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingGameAnimManagerFun", this.usingGameAnimManagerFun.bind(this));
        }

        usingGameAnimManagerFun(string) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        } //添加动画组件到list


        addAnimToList(anim) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) anim.pause();

          this._animList.push(anim);
        } // 从list 移除anim


        removeAnimFromList(anim) {
          // console.log("移除anim：",anim.node.uuid);
          var index = this._animList.indexOf(anim);

          if (index > -1) this._animList.splice(index, 1);else throw "anim is not in list.";
        } //暂停list中所有的动画


        pauseAllAnim() {
          // console.log("暂停list中所有的动画");
          this._animList.forEach(anim => {
            anim.pause();
          });
        } //恢复所有list中的动画


        resumeAllAnim() {
          console.log("恢复所有list中的动画");

          this._animList.forEach(anim => {
            anim.resume();
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bccaf286d0795b70ec1e3e2232232453d0a57067.js.map