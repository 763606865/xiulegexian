System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, em, plm, Weapon, _dec, _class, _crd, ccclass, property, GiantAxe;

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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      plm = _unresolved_3.plm;
    }, function (_unresolved_4) {
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6da2cXsSVNKY6q8qfR7UnJT", "GiantAxe", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GiantAxe", GiantAxe = (_dec = ccclass('GiantAxe'), _dec(_class = class GiantAxe extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this.initEquData();
          this.clearCacheData();
          this.addToAnimManger();
          let heroDir = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_curDirection");
          console.log("heroDir", heroDir);
          let dir = {
            x: heroDir.x,
            y: heroDir.y
          };
          this._flyDir = dir; // this._flyDir.x = dir.x;
          // this._flyDir.y = dir.y;

          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");

          if (this._flyDir.x > 0) {
            if (data.qData.effect.indexOf(5005) > -1) this.node.getComponent(Animation).play("giantAxeR2");else this.node.getComponent(Animation).play("giantAxeR");
          } else {
            if (data.qData.effect.indexOf(5005) > -1) this.node.getComponent(Animation).play("giantAxeL2");else this.node.getComponent(Animation).play("giantAxeL");
          }
        }

        initEquData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");
          this._damage = data.lData.baseDamage;
          this._damageTimes = data.lData.damageTimes;
          this._duration = Infinity;
          this._moveSpeed = 0;
          this._backDis = 150;
          this._attackInterval = 2;
          this._canAttackTimes = Infinity;
          this._weaponName = "rotationAxe";
          this.initEquDataByExtraProperties(data);
        }

        recoveryToPool() {
          this.removeAnimFromList();
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).putToPool(this._weaponName, this.node);
        } // 创建冲击波 通过1006和1007词条


        createShockWaveBy1006or1007() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");

          if (data.qData.effect.indexOf(1006) > -1 || data.qData.effect.indexOf(1007) > -1) {
            let wp = this.node.getWorldPosition();
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingWeaponManagerFun", "createShockWave", wp, this._flyDir);
          }
        } //创建冲击波


        createShockWaveBy5005(type) {
          let wp = this.node.getWorldPosition();

          if (type == 1) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingWeaponManagerFun", "createShockWave", wp, this._flyDir);
          } else {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingWeaponManagerFun", "createShockWave", wp, {
              x: -this._flyDir.x,
              y: this._flyDir.y
            });
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2eb96da8d4a2b98b82b527671418b9e930ddf775.js.map