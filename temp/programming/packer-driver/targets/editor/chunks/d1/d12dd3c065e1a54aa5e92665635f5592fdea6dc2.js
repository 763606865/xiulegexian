System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, Boss, _dec, _class, _crd, ccclass, property, Boss36;

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

      _cclegacy._RF.push({}, "bb30fYTzmdBcr0E2KOxuTq5", "Boss36", undefined);
      /*
       * @Author: li_jiang_wei 739671694@qq.com
       * @Date: 2022-12-14 22:24:50
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-12-14 22:40:42
       * @FilePath: \to-be-immortal\assets\script\enemy\boss\Boss36.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei 739671694@qq.com, All Rights Reserved. 
       */

      /*
       * @Author: li_jiang_wei 739671694@qq.com
       * @Date: 2022-12-14 22:24:50
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-12-14 22:38:51
       * @FilePath: \to-be-immortal\assets\script\enemy\boss\Boss36.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss36", Boss36 = (_dec = ccclass('Boss36'), _dec(_class = class Boss36 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        constructor(...args) {
          super(...args);
          this._skillData = {
            "normalParticle": {
              "name": "normalParticle",
              "damage": 7158750,
              "duration": 3,
              "moveSpeed": 590,
              "canAttackTimes": 1
            }
          };
        }

        onLoad() {
          let bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 36);
          bossData.canMove = true;
          this._skillData.normalParticle.damage = bossData.normalDamage;
          this.initBossInfo(bossData);
          this.setBossStrategy();
        }

        setBossStrategy() {
          // this.schedule(() => {
          //     this.usingNormalParticleCircle(20, 100);
          // }, 4);
          this.schedule(() => {
            this.usingNormalParticleOneShot(0.5);
          }, 2);
          this.schedule(() => {
            this.usingNormalParticleOneShot(0.5);
          }, 2);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d12dd3c065e1a54aa5e92665635f5592fdea6dc2.js.map