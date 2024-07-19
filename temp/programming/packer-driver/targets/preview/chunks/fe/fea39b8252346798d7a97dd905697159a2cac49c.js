System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, NodePool, em, plm, Boss15, _dec, _class, _crd, ccclass, property, Boss20;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss15", "./Boss15", _context.meta, extras);
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
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      plm = _unresolved_3.plm;
    }, function (_unresolved_4) {
      Boss15 = _unresolved_4.Boss15;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4f9cQ1j5tAZrp9+Xp6yWpD", "Boss20", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-11 17:57:36
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-14 11:17:33
       * @FilePath: \to-be-immortal\assets\script\enemy\boss\Boss4.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss20", Boss20 = (_dec = ccclass('Boss20'), _dec(_class = class Boss20 extends (_crd && Boss15 === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss15) : Boss15) {
        constructor() {
          super(...arguments);
          this._skillData = {
            "normalParticle": {
              "name": "normalParticle",
              "damage": 22222,
              "duration": 4,
              "moveSpeed": 600,
              "canAttackTimes": 1
            },
            "maxMS": 1000
          };
        }

        onLoad() {
          var bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 20);
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fea39b8252346798d7a97dd905697159a2cac49c.js.map