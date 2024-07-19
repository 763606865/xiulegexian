System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, tagData, Weapon, _dec, _class, _crd, ccclass, property, HellFire;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

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
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "037bdybLU9JVYPgEIJ1NPSt", "HellFire", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HellFire", HellFire = (_dec = ccclass('HellFire'), _dec(_class = class HellFire extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this.initSkillData();
        }

        initSkillData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "hellFire");
          this._damage = data.baseDamage + ((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "getCurDamage") * data.damageTimes | 0);
          this._moveSpeed = 0;
          this._canAttackTimes = Infinity;
          this._backDis = 0;
          this._attackInterval = 1;
          this._weaponName = data.name2;
          this.clearCacheData();
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b2f1b9f28e16a36caf804020f0f91c1ccd69c044.js.map