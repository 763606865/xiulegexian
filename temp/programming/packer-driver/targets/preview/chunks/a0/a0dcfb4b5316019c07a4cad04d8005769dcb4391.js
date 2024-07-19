System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, UITransform, ggConfig, _dec, _class, _crd, ccclass, property, DynamicSupFrame;

  function _reportPossibleCrUseOfggConfig(extras) {
    _reporterNs.report("ggConfig", "../global/globalData", _context.meta, extras);
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
      find = _cc.find;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ggConfig = _unresolved_2.ggConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de945MOvbVNvopn+Rjsgvu4", "DynamicSupFrame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DynamicSupFrame", DynamicSupFrame = (_dec = ccclass('DynamicSupFrame'), _dec(_class = class DynamicSupFrame extends Component {
        constructor() {
          super(...arguments);
          this._L = null;
          this._R = null;
          this._U = null;
          this._D = null;
        }

        onLoad() {
          this._L = find("L", this.node);
          this._R = find("R", this.node);
          this._U = find("U", this.node);
          this._D = find("D", this.node);

          if (!(_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).dynamicSupFrame) {
            this._L.active = false;
            this._R.active = false;
            this._U.active = false;
            this._D.active = false;
            return;
          }

          console.log("动态初始化 四叉树范围框");

          this._L.getComponent(UITransform).setContentSize(2, (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).quadTreeRange.h);

          this._R.getComponent(UITransform).setContentSize(2, (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).quadTreeRange.h);

          this._U.getComponent(UITransform).setContentSize((_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).quadTreeRange.w, 2);

          this._D.getComponent(UITransform).setContentSize((_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).quadTreeRange.w, 2);

          this._L.setPosition(-(_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).quadTreeRange.w / 2, 0);

          this._R.setPosition((_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).quadTreeRange.w / 2, 0);

          this._U.setPosition(0, (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).quadTreeRange.h / 2);

          this._D.setPosition(0, -(_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).quadTreeRange.h / 2);

          this._L.active = true;
          this._R.active = true;
          this._U.active = true;
          this._D.active = true;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0dcfb4b5316019c07a4cad04d8005769dcb4391.js.map