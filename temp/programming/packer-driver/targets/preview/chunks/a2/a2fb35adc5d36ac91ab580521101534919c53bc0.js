System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, Boss, _dec, _class, _crd, ccclass, property, Boss50;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Boss", _context.meta, extras);
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
      Boss = _unresolved_3.Boss;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "796b8tGNr1JPpP2+Ph+rjmr", "Boss50", undefined);
      /*
       * @Author: li_jiang_wei 739671694@qq.com
       * @Date: 2022-12-14 23:42:33
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-12-15 00:02:01
       * @FilePath: \to-be-immortal\assets\script\enemy\boss\Boss50.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss50", Boss50 = (_dec = ccclass('Boss50'), _dec(_class = class Boss50 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        constructor() {
          super(...arguments);
          this._skillData = {
            "normalParticle": {
              "name": "normalParticle",
              "damage": 78800000,
              "duration": 3,
              "moveSpeed": 600,
              "canAttackTimes": 1
            }
          };
        }

        onLoad() {
          var bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 50);
          bossData.canMove = true;
          this._skillData.normalParticle.damage = bossData.normalDamage;
          this.initBossInfo(bossData);
          this.setBossStrategy();
        }

        setBossStrategy() {
          this.schedule(() => {
            this.usingNormalParticleOneShot(0.5);
          }, 1);
          this.schedule(() => {
            this.usingNormalParticleCircle(12, 50, 0.5);
          }, 2);
          this.schedule(() => {
            this.usingNormalParticleTriangle(0.5);
          }, 5); // this.schedule(this.usingNormalParticleTriShot,2);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a2fb35adc5d36ac91ab580521101534919c53bc0.js.map