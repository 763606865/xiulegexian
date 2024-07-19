System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, FanPrefab;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0b852hnStMuL8DCjNUMpIA", "FanPrefab", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FanPrefab", FanPrefab = (_dec = ccclass('FanPrefab'), _dec(_class = class FanPrefab extends Component {
        start() {
          this.moveLikeParabola();
        } // 像抛物线一样运动


        moveLikeParabola() {
          return console.log("还没写");
          tween(this.node).by(1, {
            position: new Vec3(-50, 100, 0)
          }, {
            easing: "sineOut"
          }).by(1, {
            position: new Vec3(-50, -100, 0)
          }).by(1, {
            position: new Vec3(-50, -300, 0)
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7a12b2297f7be61a142fbd38330739a8a8a2541a.js.map