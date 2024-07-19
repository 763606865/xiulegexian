System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tween, Vec3, Sprite, Color, tagData, Weapon, _dec, _class, _crd, ccclass, property, LandFire;

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeapon(extras) {
    _reporterNs.report("Weapon", "./Weapon", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      tagData = _unresolved_2.tagData;
    }, function (_unresolved_3) {
      Weapon = _unresolved_3.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d10f9QDfTpDZ6uVQLtL8rGF", "LandFire", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3', 'Sprite', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LandFire", LandFire = (_dec = ccclass('LandFire'), _dec(_class = class LandFire extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor() {
          super(...arguments);
          this._canMove = false;
        }

        init(data, lv, flyDir) {
          this.initWeaponInfo(lv, data, flyDir);
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword, {
            x: -20,
            y: -20
          });
          this.playShotAnim();
        }

        onDisable() {
          this.node.setScale(new Vec3(1, 1, 1)); // this.node.getComponent(Sprite).color = new Color(255,255,255,0);
        }

        update(dt) {
          this.weaponDuration(dt);
        }

        playShotAnim() {
          var animT = 0.5;
          var dis = 280;
          var scale = 1.5;
          var t1 = tween(this.node).by(animT, {
            scale: new Vec3(scale, scale, 1),
            eulerAngles: new Vec3(0, 0, 360),
            position: new Vec3(this._flyDir.x * dis, this._flyDir.y * dis, 0)
          }, {
            onUpdate: (target, ratio) => {
              var color = target.getComponent(Sprite).color;
              target.getComponent(Sprite).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 255), ratio);
            }
          });
          t1.start(); // let t2 = tween().to(animT,{rotation:new Vec3(0,0,360)});
          // let t = tween(this.node).parallel(t1,t2);
          // t.start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=126b1fe498e88083ec630969007d11362112a515.js.map