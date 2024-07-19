System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, Weapon, _dec, _class, _crd, ccclass, property, RotationAxeChild;

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

      _cclegacy._RF.push({}, "58a81TjAmZEdrocQWXB7M8w", "RotationAxe", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RotationAxeChild", RotationAxeChild = (_dec = ccclass('RotationAxeChild'), _dec(_class = class RotationAxeChild extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this.initEquData();
          this.clearCacheData();
        }

        initEquData() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");
          this._damage = data.lData.baseDamage;
          this._damageTimes = data.lData.damageTimes;
          this._duration = Infinity;
          this._moveSpeed = 100;
          this._backDis = 50;
          this._attackInterval = 2;
          this._canAttackTimes = Infinity;
          this._weaponName = "rotationAxeChild";
          this.initEquDataByExtraProperties(data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28717e6367196927a9ef4c8ff1036f77f59dd174.js.map