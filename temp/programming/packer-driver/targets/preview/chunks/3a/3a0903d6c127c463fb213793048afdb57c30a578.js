System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tagData, Weapon, _dec, _class, _crd, ccclass, property, IceSpiritNeedle;

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
      tagData = _unresolved_2.tagData;
    }, function (_unresolved_3) {
      Weapon = _unresolved_3.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "abb99lVTjpIqZrYUR8CaJ9y", "IceSpiritNeedle", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("IceSpiritNeedle", IceSpiritNeedle = (_dec = ccclass('IceSpiritNeedle'), _dec(_class = class IceSpiritNeedle extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init(data, lv, flyDir) {
          this.initWeaponInfo(lv, data, flyDir);
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
          this.changeBulletRotationByFlyDir();
        }

        colliderMonster(other) {
          if (this.isStopRun(other)) return;
          if (this.isHasAttacked(other.node.uuid)) return; //已经被剑攻击过的对象 忽略后续攻击

          this.updateMonsterBlood(other);

          this._hasAttackedEnemies.push(other.node.uuid);

          this._canAttackTimes--;
          var script = other.node.getComponent("Monster");
          if (script) script.addDebuffFrozen(5);
          if (this._canAttackTimes <= 0) this.recoveryToPool();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3a0903d6c127c463fb213793048afdb57c30a578.js.map