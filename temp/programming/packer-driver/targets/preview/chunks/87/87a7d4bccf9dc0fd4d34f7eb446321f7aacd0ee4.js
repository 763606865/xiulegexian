System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, Weapon, _dec, _class, _crd, ccclass, property, ShockWave;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeapon(extras) {
    _reporterNs.report("Weapon", "../weapon/Weapon", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      Weapon = _unresolved_3.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "266e0zh3tNCB5xsvAOly+Uv", "ShockWave", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShockWave", ShockWave = (_dec = ccclass('ShockWave'), _dec(_class = class ShockWave extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init(dir) {
          this.initEquData(dir);
          this.clearCacheData();
          this.changeBulletRotationByFlyDir();
        }

        initEquData(dir) {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");
          this._damage = data.lData.baseDamage;
          this._damageTimes = 0;
          this._duration = 2;
          this._moveSpeed = 700;
          this._backDis = 50;
          this._attackInterval = 2;
          this._canAttackTimes = Infinity;
          this._weaponName = "shockWave"; // this._flyDir.x = dir.x;
          // this._flyDir.y = 0;

          this._flyDir = {
            x: dir.x / Math.abs(dir.x),
            y: 0
          };
          if (data.qData.effect.indexOf(1006) > -1) this._damage *= 0.5;
          this.initEquDataByExtraProperties(data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87a7d4bccf9dc0fd4d34f7eb446321f7aacd0ee4.js.map