System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, instantiate, NodePool, em, plm, Boss, _dec, _class, _crd, ccclass, property, Boss15;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
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
      find = _cc.find;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      plm = _unresolved_3.plm;
    }, function (_unresolved_4) {
      Boss = _unresolved_4.Boss;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b6663v4MkRCBoa0Uv+wET6C", "Boss15", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-08 18:06:01
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-14 17:53:51
       * @FilePath: \to-be-immortal\assets\script\enemy\boss\Boss15.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'find', 'instantiate', 'approx', 'Vec2', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss15", Boss15 = (_dec = ccclass('Boss15'), _dec(_class = class Boss15 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        constructor() {
          super(...arguments);
          this._skillData = {
            "normalParticle": {
              "name": "normalParticle",
              "damage": 9999,
              "duration": 3,
              "moveSpeed": 500,
              "canAttackTimes": 1
            },
            "maxMS": 800
          };
          this._darkMaskPrefab = void 0;
          this._blackHolePrefab = void 0;
        }

        onLoad() {
          var bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 15);
          bossData.canMove = true;
          this._skillData.normalParticle.damage = bossData.normalDamage;
          this.initBossInfo(bossData);
          this._darkMaskPrefab = find("/darkMask", this.node);
          this._blackHolePrefab = find("/blackHole", this.node);
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("blackHole", new NodePool(), this._blackHolePrefab);
          this.setBossStrategy();
        }
        /**
         * @description: boss3 行动策略
         * @strategy1 每4s 释放一次黑暗粒子圈
         * @strategy2 每5s 释放一次黑暗笼罩 
         * @strategy3 每5s 释放一次黑洞
         */


        setBossStrategy() {
          this.schedule(() => {
            this.usingNormalParticleCircle(20, 100, 0.5);
          }, 4); // this.schedule(this.usingDarkMask, 5);
          // this.schedule(this.usingBlackHole, 10);

          this.schedule(() => {
            this.usingNormalParticleTriangle(0.5);
          }, 3);
        } //黑暗笼罩 将玩家困在黑暗笼罩中 无法动弹


        usingDarkMask() {
          var dm = instantiate(this._darkMaskPrefab);
          var hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          dm.parent = find("Canvas/bulletLayer");
          dm.setWorldPosition(hwp.x, hwp.y, hwp.y);
          dm.getComponent("DarkMask").init();
          dm.active = true;
        } // 黑洞


        usingBlackHole() {
          var bh = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("blackHole");
          var hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          bh.parent = find("Canvas/bulletLayer");
          bh.setWorldPosition(hwp.x, hwp.y, hwp.y);
          bh.getComponent("BlackHole").init();
          bh.active = true;
        } //是否加速冲向玩家


        isAccelerateToHero() {
          var dis = this.getDistanceToHero();

          if (dis > 2000) {
            this._curSpeed = this._skillData.maxMS;
            var t = dis / this._curSpeed;
            this.accelerateToHero(t);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=437836a6fb43db9b9bf2c064332cbc98182c1910.js.map