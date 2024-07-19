System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, ggd, tagData, Weapon, _dec, _class, _crd, ccclass, property, Thundercloud;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
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
      ggd = _unresolved_3.ggd;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e74729+9alFaZPYG0fVEuap", "Thundercloud", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Thundercloud", Thundercloud = (_dec = ccclass('Thundercloud'), _dec(_class = class Thundercloud extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this._moveSpeed = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "getCurMoveSpeed") * 0.9;
          this.addToAnimManger();
          this.initSkillData();
        }

        initSkillData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "thundercloud");
          this._damage = data.baseDamage;
          this._damageTimes = data.damageTimes;
          this._duration = data.duration;
          this._backDis = 0;
          this._canAttackTimes = Infinity;
          this._attackInterval = 0.3;
          this._weaponName = data.name2; // this.clearCacheData();

          let changeSize = {
            x: -30,
            y: -50
          };
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword, changeSize);
        }

        recoveryToPool() {
          this.removeAnimFromList();
          this.node.destroy();
        }

        weaponMove(dt) {
          // return
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          let targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTargetWorldPos");
          let curPos = this.node.getWorldPosition();
          let x = targetPos.x - curPos.x;
          let y = targetPos.y - curPos.y;
          let dis = Math.sqrt(x * x + y * y);
          let time = this._moveSpeed == 0 ? 0 : dis / this._moveSpeed;
          let moveDisX = time == 0 ? 0 : dt / time * x;
          let moveDisY = time == 0 ? 0 : dt / time * y;
          this.node.setWorldPosition(curPos.x + moveDisX, curPos.y + moveDisY, 0);
        }

        colliderMonster(other) {
          if (this.isStopRun(other)) return;
          this.updateMonsterBlood(other);

          if (Math.random() < 0.2) {
            let script = other.node.getComponent("Monster");
            if (script) script.addDebuffParalysis(5);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5813b0f5624b8f9089024c99c33e632e04cb63d.js.map