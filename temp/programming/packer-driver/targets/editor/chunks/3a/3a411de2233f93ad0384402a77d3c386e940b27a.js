System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, Animation, em, tagData, plm, Weapon, _dec, _class, _crd, ccclass, property, ThunderFissionBead;

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
      _decorator = _cc._decorator;
      find = _cc.find;
      Animation = _cc.Animation;
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

      _cclegacy._RF.push({}, "f42a5DOIRpHwJ9jbNnCmEZY", "ThunderFissionBead", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThunderFissionBead", ThunderFissionBead = (_dec = ccclass('ThunderFissionBead'), _dec(_class = class ThunderFissionBead extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor(...args) {
          super(...args);
          this._canSplitTimes = 0;
        }

        init(splitTimes, dir) {
          this._canSplitTimes = splitTimes;
          this._flyDir = dir;
          this.initSkillData(); //em.dispatch("playOneShot","battle/bullet");
          //每秒检测一次是否超过距离

          this.isExceedMaxDistance(500, 1);
          this.node.getComponent(Animation).play();
          this.addToAnimManger();
        } // 初始化武器信息


        initSkillData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "thunderFissionBead");
          this._curData = data;
          this._weaponId = data.id;
          this._weaponName = data.name2;
          this._maxLevel = data.maxLevel; // this._duration = data.duration;

          this._duration = 10;
          this._damage = data.baseDamage;
          this._damageTimes = data.damageTimes; // this._moveSpeed = 600;

          this._moveSpeed = 60;
          this._attackInterval = 0.5;
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
          this.clearCacheData();
        }

        update(deltaTime) {
          this.weaponMove(deltaTime);
          this.weaponDuration(deltaTime);
        }

        colliderMonster(other) {
          if (this.isStopRun(other)) return;
          this.updateMonsterBlood(other);
          this.changeFlyDir();
        }

        colliderBoss(other) {
          if (this.isStopRun(other)) return;
          this.updateBossBlood(other);
          this.changeFlyDir();
        }

        changeFlyDir() {
          --this._canSplitTimes; // let radian = Math.sin(Math.random() * 30);

          let radian = Math.sin(30 + Math.random() * 30); //反向向量

          this._flyDir.x = -this._flyDir.x;
          this._flyDir.y = -this._flyDir.y;
          let dir1 = this.getRotationDir(this._flyDir, radian);
          this._flyDir = dir1;

          if (this._canSplitTimes > 0) {
            let dir2 = this.getRotationDir(this._flyDir, -radian);
            this.createSplitTFB(dir2);
          }
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
        } // 创建分裂珠子


        createSplitTFB(dir) {
          let TFB = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("thunderFissionBead");
          let layer = find("Canvas/bulletLayer");
          TFB.parent = layer;
          let wp = this.node.getWorldPosition();
          let unit = 50;
          TFB.setWorldPosition(wp.x + dir.x * unit, wp.y + dir.y * unit, wp.z); // TFB.setWorldPosition(wp);

          TFB.getComponent("ThunderFissionBead").init(this._canSplitTimes, dir);
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
//# sourceMappingURL=3a411de2233f93ad0384402a77d3c386e940b27a.js.map