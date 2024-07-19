System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Contact2DType, BoxCollider2D, UITransform, Size, em, ggd, groupIndex, tagData, _dec, _class, _crd, ccclass, property, HeroCollider;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgroupIndex(extras) {
    _reporterNs.report("groupIndex", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../global/globalData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      BoxCollider2D = _cc.BoxCollider2D;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
      groupIndex = _unresolved_3.groupIndex;
      tagData = _unresolved_3.tagData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5519573lqJDRowrqZ0eN66i", "HeroCollider", undefined);
      /*
       * @Author: li_jiang_wei 739671694@qq.com
       * @Date: 2022-08-13 11:48:15
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-28 13:49:58
       * @FilePath: \to-be-immortal\assets\script\hero\HeroCollider.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Contact2DType', 'Collider2D', 'BoxCollider2D', 'UITransform', 'Size', 'Sprite', 'UI']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroCollider", HeroCollider = (_dec = ccclass('HeroCollider'), _dec(_class = class HeroCollider extends Component {
        constructor(...args) {
          super(...args);
          this._touchFireBallFire = false;
          this._isInsideObs = false;
        }

        start() {
          this.openCollider();
        }

        openCollider() {
          let collider = this.getComponent(BoxCollider2D);
          if (!collider) collider = this.node.addComponent(BoxCollider2D);
          let UIT = this.node.getComponent(UITransform);
          let monsterSize = new Size(UIT.contentSize.x / 2, UIT.contentSize.y);
          collider.tag = (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).hero;
          collider.size = monsterSize;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).self;
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        onBeginContact(self, other) {
          switch (other.tag) {
            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).fireBall:
              this.fireBallAttackHero();
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).fireBallFire:
              this._touchFireBallFire = true;
              this.fireBallFireAttackHero();
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).obstacle:
              this._isInsideObs = true;
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "changeMoveState", false);

              let fun = () => {
                if (this._isInsideObs) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("usingHeroControlFun", "ejectFormObs");else this.unschedule(fun);
              };

              this.schedule(fun, 0.01);
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).randomSkillReward:
              other.node.destroy();
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "selectUpgradeReward");
              break;

            default:
              let ignore = [(_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
                error: Error()
              }), tagData) : tagData).boss, (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
                error: Error()
              }), tagData) : tagData).monster, (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
                error: Error()
              }), tagData) : tagData).enemySkill]; //在其他碰撞脚本中已经做过处理 再此忽略

              if (ignore.indexOf(other.tag) > -1) break;
              throw new Error("未处理的碰撞开始：" + self.tag + "与" + other.tag + "发生碰撞");
          }
        }

        onEndContact(self, other) {
          switch (other.tag) {
            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).fireBallFire:
              this._touchFireBallFire = false;
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).obstacle:
              console.log("碰撞障碍物 未处理");
              this._isInsideObs = false;
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "changeMoveState", true);
              break;

            default:
              break;
          }
        } // 火球攻击玩家


        fireBallAttackHero() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          let damage = 10;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "createBossDamageTex", -damage);
        } //火球爆炸后的火攻击玩家


        fireBallFireAttackHero() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._touchFireBallFire) return;
          let damage = 8;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "createBossDamageTex", -damage);
          let attackInterval = 0.5;
          this.scheduleOnce(() => {
            this.fireBallFireAttackHero();
          }, attackInterval);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1fc2eb9f914aa28a860cfb1f0097fad0c9057e54.js.map