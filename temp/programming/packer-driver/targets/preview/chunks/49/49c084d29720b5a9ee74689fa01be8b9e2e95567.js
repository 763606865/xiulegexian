System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, Weapon, _dec, _class, _crd, ccclass, property, GiantArrow;

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

      _cclegacy._RF.push({}, "ec3d6gpGP9LZY2dZNWvptHq", "GiantArrow", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GiantArrow", GiantArrow = (_dec = ccclass('GiantArrow'), _dec(_class = class GiantArrow extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this.initEquData();
          this.clearCacheData();
          this.changeBulletRotationByFlyDir();
        }

        initEquData() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");
          var heroDir = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_curDirection");
          var dir = {
            x: heroDir.x,
            y: heroDir.y
          };
          if (dir.x == 0 && dir.y == 0) dir.x = -1;
          this._damage = data.lData.baseDamage;
          this._damageTimes = data.lData.damageTimes;
          this._duration = 3;
          this._moveSpeed = 700;
          this._backDis = 500;
          this._attackInterval = 1;
          this._canAttackTimes = Infinity;
          this._weaponName = "giantArrow";
          this._flyDir = dir;
          this.initEquDataByExtraProperties(data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49c084d29720b5a9ee74689fa01be8b9e2e95567.js.map