System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, tagData, Weapon, _dec, _class, _crd, ccclass, property, SkyThunder;

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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      tagData = _unresolved_2.tagData;
    }, function (_unresolved_3) {
      Weapon = _unresolved_3.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14177e4qjlORrGl4t4Ki/bR", "SkyThunder", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'Animation', 'UITransform', 'Size', 'Contact2DType', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkyThunder", SkyThunder = (_dec = ccclass('SkyThunder'), _dec(_class = class SkyThunder extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        // _recoveryCount: number = 0;
        init(data, lv) {
          this.initWeaponInfo(lv, data);
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword, {
            x: -50,
            y: -30
          });
          this.node.getComponent(Animation).play();
        }

        update(dt) {
          this.weaponDuration(dt);
        }

        colliderMonster(other) {
          if (this.isStopRun(other)) return;
          if (this.isHasAttacked(other.node.uuid)) return; //已经被雷攻击过的对象 忽略后续攻击

          this.updateMonsterBlood(other);

          this._hasAttackedEnemies.push(other.node.uuid);

          this._canAttackTimes--;
          if (this._canAttackTimes <= 0) this.recoveryToPool("this._canAttackTimes <= 0");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=760c5a3d17005b32d1106573e06ceefb32ba56f7.js.map