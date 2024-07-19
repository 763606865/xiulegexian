System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tagData, Weapon, _dec, _class, _crd, ccclass, property, Sword;

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

      _cclegacy._RF.push({}, "129e2bHdPtBCbnuzFFQDPpA", "Sword", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-11 17:57:36
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-28 10:01:59
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\Sword.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Sword", Sword = (_dec = ccclass('Sword'), _dec(_class = class Sword extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init(data, lv, flyDir) {
          this.initWeaponInfo(lv, data, flyDir);
          let weaponName = data.name; // this.initBoxCollider(tagData[weaponName]);

          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData)[weaponName], {
            x: -7,
            y: -8
          });
          this.changeBulletRotationByFlyDir(); //em.dispatch("playOneShot","battle/bullet");
        }

        colliderMonster(other) {
          if (this.isStopRun(other)) return;
          if (this.isHasAttacked(other.node.uuid)) return; //已经被剑攻击过的对象 忽略后续攻击

          this.updateMonsterBlood(other);

          this._hasAttackedEnemies.push(other.node.uuid);

          this._canAttackTimes--;
          if (this._canAttackTimes <= 0) this.recoveryToPool();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ad3a8d1248547d1f4015b209e73b567ecb0764b.js.map