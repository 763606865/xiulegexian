System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, plm, Weapon, _dec, _class, _crd, ccclass, property, GiantSword;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
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
      plm = _unresolved_3.plm;
    }, function (_unresolved_4) {
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "69924h81zxEnaSchCasauee", "GiantSword", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GiantSword", GiantSword = (_dec = ccclass('GiantSword'), _dec(_class = class GiantSword extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this.initEquData();
          this.clearCacheData();
          this.addToAnimManger();
        }

        initEquData() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");
          this._damage = data.lData.baseDamage;
          this._damageTimes = data.lData.damageTimes;
          this._duration = 2;
          this._moveSpeed = 700;
          this._backDis = 50;
          this._attackInterval = 2;
          this._canAttackTimes = Infinity;
          this._weaponName = "giantSword";
          this.initEquDataByExtraProperties(data);
        } //自我销毁


        recoveryToPool() {
          this.removeAnimFromList();
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).putToPool(this._weaponName, this.node);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=56aaa5201f197af7274432fd7954f3744262b388.js.map