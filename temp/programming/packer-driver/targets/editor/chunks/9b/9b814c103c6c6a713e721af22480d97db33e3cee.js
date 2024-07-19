System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, ggd, glf, Boss, _dec, _class, _crd, ccclass, property, Boss6;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../../global/globalFun", _context.meta, extras);
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
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      glf = _unresolved_4.glf;
    }, function (_unresolved_5) {
      Boss = _unresolved_5.Boss;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cbd17JYL5tLZ7+85xQyo6UB", "Boss6", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-12-14 16:44:35
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-14 19:34:40
       * @FilePath: \to-be-immortal\assets\script\enemy\boss\Boss6.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */

      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-12-14 16:44:35
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-14 17:57:17
       * @FilePath: \to-be-immortal\assets\script\enemy\boss\Boss6.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss6", Boss6 = (_dec = ccclass('Boss6'), _dec(_class = class Boss6 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        constructor(...args) {
          super(...args);
          this._skillData = {
            "normalParticle": {
              "name": "normalParticle",
              "damage": 1000,
              "duration": 3,
              "moveSpeed": 800,
              "canAttackTimes": 1
            },
            "sprint": {
              "speed": 500
            }
          };
        }

        onLoad() {
          this.initSprintData();
          let bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 6);
          bossData.canMove = true;
          this._skillData.normalParticle.damage = bossData.normalDamage;
          this.initBossInfo(bossData);
          this.setBossStrategy();
        }

        setBossStrategy() {
          this.schedule(() => {
            this.usingNormalParticleCircle(20, 100, 0.2);
          }, 8);
          this.schedule(() => {
            this.usingNormalParticleOneShot(0.2);
          }, 1); // this.schedule(()=>{
          //     this.usingNormalParticleOneShot(0.5);
          // },2);

          this.schedule(() => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            let targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            let curPos = this.node.getWorldPosition();
            if (!(_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).towPointDisGreaterThanValue(targetPos, curPos, 300)) return; //不大于200的距离不释放该技能

            this.isToSprintHero(200, null, () => {
              // console.log("向两边发射子弹");
              this.usingNormalParticleWithDoubleDir(this._sprintDir);
            }, 0.5);
          }, 3);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9b814c103c6c6a713e721af22480d97db33e3cee.js.map