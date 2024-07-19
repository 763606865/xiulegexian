System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Prefab, Animation, find, NodePool, em, ggd, plm, Boss, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Boss5;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Animation = _cc.Animation;
      find = _cc.find;
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }, function (_unresolved_5) {
      Boss = _unresolved_5.Boss;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "128f5xC/PJCIZMOXP3duFW3", "Boss5", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-08-11 09:52:21
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-14 11:48:24
       * @FilePath: \to-be-immortal\assets\script\enemy\boss\Boss1.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */
      //需要添加两个最终技能 1 藤蔓（控制） 2 高伤害技能


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Size', 'UITransform', 'Prefab', 'instantiate', 'Vec2', 'tween', 'Vec3', 'Material', 'Animation', 'Sprite', 'find', 'BoxCollider2D', 'math', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss5", Boss5 = (_dec = ccclass('Boss5'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Boss5 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "skillPrefab", _descriptor, this);

          this._skillData = {
            "1": 15,
            //绿色闪电
            "2": 300,
            //加速
            "3": 500,
            //回血量
            "4": 50,
            //普通攻击
            "normalParticle": {
              "name": "normalParticle",
              "damage": 200,
              "duration": 3,
              "moveSpeed": 300,
              "canAttackTimes": 1
            }
          };
          this._photosynthesisTimes = 2;
        }

        //光合作用可使用次数
        onLoad() {
          let bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 5);
          bossData.canMove = true;
          this._skillData[4] = bossData.normalDamage;
          this._skillData.normalParticle.damage = bossData.normalDamage;
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("greenThunder", new NodePool(), this.skillPrefab);
          this.initBossInfo(bossData); // 连续多道闪电
          // this.usingSkillGreenThunderAllTheTime(3);
          // this.scheduleOnce(this.usingSkillPhotosynthesis, 5);

          this.setBossStrategy();
        } //==============boss技能当前=====================
        // 绿色闪电


        usingSkillGreenThunder() {
          let gt = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("greenThunder");
          gt.getComponent("GreenThunder").init(this._skillData[1]);
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          gt.parent = find("Canvas/bulletLayer");
          gt.setWorldPosition(hwp.x, hwp.y + 100, hwp.y);
        } // 光合作用


        usingSkillPhotosynthesis(t) {
          console.log("开启光合作用");
          this._photosynthesisTimes--;
          if (this._photosynthesisTimes < 0) return;
          this.node.getChildByName("photosynthesis").active = true;
          this.unschedule(this.recoveryHealthy);
          this.schedule(this.recoveryHealthy, 1, t);
          this.scheduleOnce(() => {
            this.node.getChildByName("photosynthesis").active = false;
          }, t);
        }

        recoveryHealthy() {
          this.updateBlood(this._skillData[3]);
        } //重写


        bossAttackHeroByCollider(self, other) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._isTouchHero) return;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "createBossDamageTex", -this._skillData[4]);
          this.usingNormalAttack();
          let t = 2;
          this.scheduleOnce(() => {
            this.bossAttackHeroByCollider(self, other);
          }, t);
        } // 普通攻击


        usingNormalAttack() {
          this._curSpeed = this._rawSpeed;
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          let bwp = this.node.getWorldPosition();
          let x = hwp.x - bwp.x;
          let y = hwp.y - bwp.y;
          let unitDis = 50;
          let angle = 0;
          let offset = {
            x: unitDis,
            y: 0
          };
          let xScale = 1;

          if (Math.abs(x) > Math.abs(y)) {
            if (x < 0) {
              angle = 180;
              offset.x = -unitDis;
              xScale = -1;
            }
          } else {
            if (y > 0) {
              angle = 90;
              offset.x = 0;
              offset.y = unitDis;
            } else {
              angle = 270;
              offset.x = 0;
              offset.y = -unitDis;
            }
          }

          let attack = this.node.getChildByName("attack");
          attack.angle = angle;
          attack.setPosition(offset.x, offset.y);
          attack.setScale(1, xScale);
          let anim = attack.getComponent(Animation);
          anim.play();
        } //一直释放闪电


        usingSkillGreenThunderAllTheTime(t) {
          this.schedule(() => {
            this.usingSkillGreenThunder();
          }, t);
        }
        /**
         * @description:设置boss 攻击策略
         * @Strategy1 每隔5s释放一次闪电
         * @Strategy2 血量低于1/3 时 释放一次 cd30s 持续回血15s 每秒恢复200
         * @Strategy3 距离超过2000px 自动使用
         */


        setBossStrategy() {
          this.schedule(() => {
            this.usingNormalParticleOneShot(0.4);
          }, 1);
          this.usingSkillGreenThunderAllTheTime(5);
          this.schedule(this.isUsingSkillPhotosynthesis, 1);
          this.schedule(this.isAccelerateToHero, 1);
        } //是否开启光合作用


        isUsingSkillPhotosynthesis() {
          let percentage = this.getBloodPercentage();

          if (percentage < 0.33) {
            this.usingSkillPhotosynthesis(15);
            this.unschedule(this.isUsingSkillPhotosynthesis);
            this.scheduleOnce(() => {
              this.schedule(this.isUsingSkillPhotosynthesis, 1);
            }, 30);
          }
        } //是否加速冲向玩家


        isAccelerateToHero() {
          let dis = this.getDistanceToHero();

          if (dis > 2000) {
            this._curSpeed = this._skillData[2];
            let t = dis / this._curSpeed;
            this.accelerateToHero(t);
          }
        } // pauseAnim(){
        //     this.node.getChildByName("sprite").getComponent(Animation).stop();
        // }
        // resumeAnim() {
        //     this.node.getChildByName("sprite").getComponent(Animation).resume();
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8d02fba8572712c21f5299339d198f872b5c836c.js.map