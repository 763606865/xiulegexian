System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, find, _decorator, em, tagData, plm, Weapon, _dec, _class, _crd, ccclass, Darts;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
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
      find = _cc.find;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }, function (_unresolved_5) {
      Weapon = _unresolved_5.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4b92Q5gQxCeLttrvjhA8P8", "Darts", undefined);
      /*
       * @Author: li_jiang_wei 739671694@qq.com
       * @Date: 2022-08-22 22:03:51
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-11-27 16:28:21
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\Darts.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['Color', 'find', 'Vec2', '_decorator']);

      ({
        ccclass
      } = _decorator);

      _export("Darts", Darts = (_dec = ccclass('Darts'), _dec(_class = class Darts extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor(...args) {
          super(...args);
          this._isCanSplit = false;
          //是否可分裂
          this._isCanSplitTimes = 0;
        }

        //可分裂次数
        init(data, lv, flyDir, isCanSplit = false) {
          this.initWeaponInfo(lv, data, flyDir);
          let weaponName = data.name;
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData)[weaponName]);
          this._isCanSplit = isCanSplit; //em.dispatch("playOneShot","battle/bullet");
        }

        colliderMonster(other) {
          if (this.isStopRun(other)) return;
          this.updateMonsterBlood(other);
          this._canAttackTimes--;
          if (this._canAttackTimes <= 0) this.recoveryToPool();else this.changeFlyDir();
        }

        colliderBoss(other) {
          if (this.isStopRun(other)) return;
          this.updateBossBlood(other);
          if (this._canAttackTimes <= 0) this.recoveryToPool();else this.changeFlyDir();
        }

        changeFlyDir() {
          let radian = Math.sin(Math.random() * 30); //反向向量

          this._flyDir.x = -this._flyDir.x;
          this._flyDir.y = -this._flyDir.y;
          let dir1 = this.getRotationDir(this._flyDir, radian);
          let dir2 = this.getRotationDir(this._flyDir, -radian);
          this._flyDir = dir1;

          if (this._isCanSplit) {
            this.createSplitDarts(dir2);
            this._isCanSplit = false; //只可分裂一次
          }

          ;
        } // 获取旋转后的方向


        getRotationDir(dir, radian) {
          //向量旋转指定弧度的角度
          let x = dir.x;
          let y = dir.y;
          let x2 = x * Math.cos(radian) - y * Math.sin(radian);
          let y2 = x * Math.sin(radian) + y * Math.cos(radian);
          return {
            x: x2,
            y: y2
          };
        } // 创建分裂飞镖


        createSplitDarts(dir) {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getWeaponDataByIdOrName", "darts");
          let darts = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("darts");
          let layer = find("Canvas/bulletLayer");
          darts.parent = layer;
          let wp = this.node.getWorldPosition();
          darts.setWorldPosition(wp);
          darts.getComponent("Darts").init(data, data.maxLevel, dir);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf9ffc8b0619fe41c4df5dc3ea7ba0743c33c454.js.map