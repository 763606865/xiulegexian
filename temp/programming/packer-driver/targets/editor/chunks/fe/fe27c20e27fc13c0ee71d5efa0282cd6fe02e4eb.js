System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec2, em, tagData, Weapon, _dec, _class, _crd, ccclass, property, JustOneSwordDivideWorld;

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
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e483mBHcFKd7tMJmx5es+4", "JustOneSwordDivideWorld", undefined);
      /*
       * @Author: li_jiang_wei 739671694@qq.com
       * @Date: 2022-09-20 01:51:52
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-30 11:18:08
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\JustOneSwordDivideWorld.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("JustOneSwordDivideWorld", JustOneSwordDivideWorld = (_dec = ccclass('JustOneSwordDivideWorld'), _dec(_class = class JustOneSwordDivideWorld extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this.initSkillData();
          this.playThisWeaponAudio(3);
        }

        playThisWeaponAudio(total) {
          for (let i = 0; i < total; i++) {
            this.scheduleOnce(() => {
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("playOneShot", "battle/spell");
            }, i);
          }
        }

        initSkillData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "一剑隔世");
          this._damage = data.baseDamage;
          this._damageTimes = data.damageTimes;
          this._duration = Infinity;
          this._moveSpeed = 0;
          this._canAttackTimes = Infinity;
          this._backDis = 0;
          this._attackInterval = 0.5;
          this._weaponName = data.name2;
          this._flyDir = new Vec2(-.25, -1);
          this.clearCacheData();
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
          if (this._canAttackTimes <= 0) this.recoveryToPool();
        } // 通过飞行方向修改子弹旋转方向 没有方向的子弹暂不处理


        changeBulletRotationByFlyDir() {
          if (this._flyDir.x == 0 && this._flyDir.y == 0) return; //无方向 暂不处理

          if (this._flyDir.x == 0) {
            //没有x方向
            if (this._flyDir.y > 0) this.node.angle = -90;else this.node.angle = 90;
            return;
          }

          ;

          if (this._flyDir.y == 0) {
            //没有y方向
            if (this._flyDir.x > 0) this.node.angle = 180;else this.node.angle = 0;
            return;
          }

          ;
          let bevelLen = Math.sqrt(this._flyDir.x * this._flyDir.x + this._flyDir.y * this._flyDir.y); // let sin = Math.sin(this._flyDir.x / bevelLen);

          let sin = Math.sin(Math.abs(this._flyDir.y) / bevelLen);
          let asin = Math.asin(sin);
          let angle = asin * 90; // console.log("angle", angle);

          if (this._flyDir.y > 0) {
            //向上飞行
            if (this._flyDir.x > 0) this.node.angle = 180 + angle;else this.node.angle = 360 - angle;
          } else {
            if (this._flyDir.x > 0) this.node.angle = 180 - angle;else this.node.angle = angle;
          } // this.node.angle = 70;

        } // 回收进对象池


        recoveryToPool() {
          this.node.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe27c20e27fc13c0ee71d5efa0282cd6fe02e4eb.js.map