System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, em, _dec, _class, _crd, ccclass, property, FlyingThunderGod;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd06bRw0gNOErD1VOHYGH9p", "FlyingThunderGod", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FlyingThunderGod", FlyingThunderGod = (_dec = ccclass('FlyingThunderGod'), _dec(_class = class FlyingThunderGod extends Component {
        constructor() {
          super(...arguments);
          this._isRun = false;
        }

        update(deltaTime) {
          var hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          var cwp = this.node.getWorldPosition();
          var x = hwp.x - cwp.x;
          var y = hwp.y - cwp.y;
          var dis = Math.sqrt(x * x + y * y);

          if (!this._isRun && dis > 800) {
            console.log("超过800码，飞雷神标记消失");
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("createTipsTex", "超过2000码，飞雷神标记消失");
            this._isRun = true;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "resetFlyingThunderGodCount");
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e4575009980f10e372e2e96d77410792d2937d17.js.map