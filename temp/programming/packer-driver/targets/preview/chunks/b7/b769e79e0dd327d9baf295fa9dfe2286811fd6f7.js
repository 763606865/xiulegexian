System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, em, glf, _dec, _class, _crd, ccclass, property, AD_SDK;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../global/globalFun", _context.meta, extras);
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
      glf = _unresolved_3.glf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b3a5gFIv9F5YMt4WSduB3t", "AD_SDK", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AD_SDK", AD_SDK = (_dec = ccclass('AD_SDK'), _dec(_class = class AD_SDK extends Component {
        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("createPlayADEvent");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("directPlayAD");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("createPlayADEvent", this.createPlayADEvent.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("directPlayAD", this.directPlayAD.bind(this));
        } //创建播放广告事件


        createPlayADEvent(btnNode, string) {
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).createButton(this.node, btnNode, "AD_SDK", "onBtnShowADs" + string);
        }

        onBtnShowADsGameMonetize() {
          if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
            sdk.showBanner();
          }
        } //直接播放广告


        directPlayAD(string) {
          this["onBtnShowADs" + string]();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b769e79e0dd327d9baf295fa9dfe2286811fd6f7.js.map