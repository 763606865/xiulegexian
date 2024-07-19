System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, ggd, tagData, Weapon, _dec, _class, _crd, ccclass, property, ThunderRunning;

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

      _cclegacy._RF.push({}, "4681bIHGv9KSJV+M+D5hNoD", "ThunderRunning", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-30 14:45:03
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-01 15:53:43
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\ThunderRunning.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThunderRunning", ThunderRunning = (_dec = ccclass('ThunderRunning'), _dec(_class = class ThunderRunning extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor(...args) {
          super(...args);
          this._startP = null;
          this._maxMoveDistance = 0;
          this._curMoveDistance = 0;
        }

        init(flyDir) {
          this._flyDir = flyDir;
          this._moveSpeed = 100;
          this._maxMoveDistance = 2000;
          this._curMoveDistance = 0;
          this.addToAnimManger();
          this.initSkillData();
          let p = this.node.getWorldPosition(); // let dir = em.dispatch("getHeroControlProperty", "_curAimDir");

          this._startP = {
            x: p.x,
            y: p.y
          };
        }

        initSkillData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "thunderRunning");
          this._damage = data.baseDamage;
          this._damageTimes = data.damageTimes;
          this._duration = data.duration;
          this._backDis = 0;
          this._canAttackTimes = Infinity;
          this._attackInterval = 0.5;
          this._weaponName = data.name2;
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
        }

        weaponMove(deltaTime) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll || !this._startP) return;
          let wp = this.node.getWorldPosition();

          if (this._flyDir.y == 0) {
            let x = deltaTime * this._moveSpeed;
            let y = this.getPathLikeSin(wp.x + x - this._startP.x);
            this._curMoveDistance += x;
            this.node.setWorldPosition(wp.x + x * this._flyDir.x, this._startP.y + y, 0);
          } else {
            let y = deltaTime * this._moveSpeed;
            let x = this.getPathLikeSin(wp.y + y - this._startP.y);
            this._curMoveDistance += y;
            this.node.setWorldPosition(this._startP.x + x, wp.y + y * this._flyDir.y, 0);
          }
        }

        getPathLikeSin(x) {
          x = x * Math.PI / 100; //每50个单位 转为π

          return 100 * Math.sin(x);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc682608dd1a276150e094b7b831f51d4564c01c.js.map