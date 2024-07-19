System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, NodePool, find, em, ggd, plm, Queue, Boss5, _dec, _class, _crd, ccclass, property, Boss10;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "../../global/Queue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss5", "./Boss5", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      NodePool = _cc.NodePool;
      find = _cc.find;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }, function (_unresolved_5) {
      Queue = _unresolved_5.Queue;
    }, function (_unresolved_6) {
      Boss5 = _unresolved_6.Boss5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38559Ai7QdNXJgmM17rYiRi", "Boss10", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-08 10:32:30
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-10 11:51:29
       * @FilePath: \copy9train\assets\script\enemy\boss\Boss2.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'NodePool', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss10", Boss10 = (_dec = ccclass('Boss10'), _dec(_class = class Boss10 extends (_crd && Boss5 === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss5) : Boss5) {
        constructor() {
          super(...arguments);
          this._skillData = {
            "1": 299,
            //绿色闪电
            "2": 600,
            //加速
            "3": 1500,
            //回血量
            "4": 5000 //普通攻击

          };
        }

        onLoad() {
          var bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 10);
          bossData.canMove = true;
          this._skillData[4] = bossData.normalDamage;
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("greenThunder", new NodePool(), this.skillPrefab);
          this.initBossInfo(bossData);
          this.setBossStrategy();
        }
        /**
        * @description:设置boss 攻击策略
        * @Strategy1 每隔5s释放一次闪电
        * @Strategy2 血量低于1/3 时 释放一次 cd30s 持续回血15s 每秒恢复skillData[3]
        * @Strategy3 距离超过2000px 自动使用
        * @Strategy4 @function usingSkillCollectionGT 每过10s  释放一次聚集的GT
        */


        setBossStrategy() {
          this.usingSkillGreenThunderAllTheTime(2);
          this.schedule(this.isUsingSkillPhotosynthesis, 1);
          this.schedule(this.isAccelerateToHero, 1);
          this.schedule(this.usingSkillCollectionGT, 10);
        } //每过10s  释放一次聚集的GT


        usingSkillCollectionGT() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var total = 20;
          if (total <= 0) throw new Error("error");
          var queue = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          while (total > 0) {
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("greenThunder");
            queue.enqueue(prefab);
            total--;
          }

          var createFun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            var gt = queue.dequeue();

            if (gt) {
              gt.getComponent("EnemySkill").init(this._skillData[1]);
              var hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getHeroWorldPos");
              gt.parent = find("Canvas/bulletLayer");
              gt.setWorldPosition(hwp.x, hwp.y + 100, hwp.y);
            } else this.unschedule(createFun);
          };

          this.schedule(createFun, 0.3);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2408138d13c6086c42517a43110500d5a0a616a2.js.map