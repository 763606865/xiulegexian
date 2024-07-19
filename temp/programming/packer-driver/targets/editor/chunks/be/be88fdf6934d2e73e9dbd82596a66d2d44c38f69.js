System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, ggd, tagData, plm, Weapon, _dec, _class, _crd, ccclass, property, DangerWindToNear;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
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
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }, function (_unresolved_5) {
      Weapon = _unresolved_5.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0edc4ajlY9IAobRGH2giiyP", "DangerWindToNear", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-25 10:52:48
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-25 13:31:57
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\DangerWindToNear.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DangerWindToNear", DangerWindToNear = (_dec = ccclass('DangerWindToNear'), _dec(_class = class DangerWindToNear extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor(...args) {
          super(...args);
          this._moveDistance = void 0;
        }

        init(flyDir) {
          this._moveSpeed = 200;
          this._moveDistance = 300;
          this.addToAnimManger();
          this._flyDir = {
            x: flyDir[0],
            y: flyDir[1]
          };
          this.initSkillData();
        }

        initSkillData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "八面危风");
          this._damage = data.baseDamage;
          this._damageTimes = data.damageTimes;
          this._duration = data.duration;
          this._backDis = 0;
          this._canAttackTimes = Infinity;
          this._attackInterval = 1;
          this._weaponName = data.name2; // this.clearCacheData();

          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
        }

        weaponMove(deltaTime) {
          // return;
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._flyDir) return;

          if (this._moveDistance <= 0) {
            // this.playDestroyAnim();
            // 进入停留5s后消失
            return;
          }

          if (this._moveSpeed == 0) return;
          let dis = deltaTime * this._moveSpeed; // let dis = deltaTime*(this._moveSpeed+bonusMS);

          let moveX = this._flyDir.x * dis;
          let moveY = this._flyDir.y * dis;
          this.node.setPosition(this.node.getPosition().x + moveX, this.node.getPosition().y + moveY, 0);
          this._moveDistance -= dis;
        } //自我销毁


        recoveryToPool() {
          this.removeAnimFromList();
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).putToPool(this._weaponName, this.node); // this.node.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be88fdf6934d2e73e9dbd82596a66d2d44c38f69.js.map