System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, UITransform, Size, Contact2DType, CircleCollider2D, em, ggd, groupIndex, tagData, plm, _dec, _class, _crd, ccclass, property, EnemySkill;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgroupIndex(extras) {
    _reporterNs.report("groupIndex", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
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
      BoxCollider2D = _cc.BoxCollider2D;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Contact2DType = _cc.Contact2DType;
      CircleCollider2D = _cc.CircleCollider2D;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
      groupIndex = _unresolved_3.groupIndex;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ad080WTW8JAq6c5uR79Xh4x", "EnemySkill", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-26 16:21:41
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-14 14:32:01
       * @FilePath: \to-be-immortal\assets\script\enemy\skill\EnemySkill.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'UITransform', 'Size', 'Contact2DType', 'Collider2D', 'Animation', 'CircleCollider2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemySkill", EnemySkill = (_dec = ccclass('EnemySkill'), _dec(_class = class EnemySkill extends Component {
        constructor(...args) {
          super(...args);
          this._skillName = void 0;
          this._damage = void 0;
          this._flyDir = void 0;
          this._moveSpeed = void 0;
          this._duration = Infinity;
          this._canAttackTimes = void 0;
          this._curData = null;
        }

        init(data, flyDir = null, scale = 1) {
          this._curData = data;
          this._skillName = data.name;
          this._damage = data.damage;
          this._duration = data.duration;
          this._moveSpeed = data.moveSpeed;
          if (data.canAttackTimes) this._canAttackTimes = data.canAttackTimes;else this._canAttackTimes = Infinity;
          this._flyDir = flyDir;
          this.initCollider(scale);
        }

        initCollider(scale = 1) {
          let collider = this.node.getComponent(BoxCollider2D);
          if (!collider) collider = this.node.addComponent(BoxCollider2D);
          let UIT = this.node.getComponent(UITransform);
          let skillSize = new Size(UIT.contentSize.x * scale, UIT.contentSize.y * scale);
          collider.tag = (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).enemySkill;
          collider.size = skillSize;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).enemySkill;
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // console.log("EnemySkill collider",collider);
        }

        initCircleCollider(scale = 1) {
          let collider = this.node.getComponent(CircleCollider2D);
          if (!collider) collider = this.node.addComponent(CircleCollider2D);
          let UIT = this.node.getComponent(UITransform);
          let skillSize = new Size(UIT.contentSize.x * scale, UIT.contentSize.y * scale);
          collider.tag = (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).enemySkill;
          collider.radius = skillSize.x / 2;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).enemySkill;
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        onBeginContact(self, other) {
          // 攻击玩家
          if (other.tag == (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).hero) {
            this.colliderHero();
          } //碰撞销毁


          if (other.tag == (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).destroyWeapon) {
            this.recoveryPrefab();
          }
        }

        colliderHero() {
          if (this._curData.hasOwnProperty("effects") && this._curData.effects.indexOf("slow") > -1) {
            //减速
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "addDebuffSlow", 5, 20); //降低20点移速 持续3s
          }

          if (this._damage) {
            //技能存在伤害
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "createBossDamageTex", -this._damage);
          }

          this._canAttackTimes--;
          if (this._canAttackTimes <= 0) this.recoveryPrefab();
        }

        recoveryPrefab() {
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).putToPool(this._skillName, this.node); // plm.putToPool(this._skillName,this.node,true);
        }

        destroyPrefab() {
          this.node.destroy();
        }

        update(deltaTime) {
          this.weaponMove(deltaTime);
          this.weaponDuration(deltaTime);
        }

        weaponMove(deltaTime) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._flyDir) return;
          if (this._moveSpeed == 0 || this._duration == Infinity) return;
          let dis = deltaTime * this._moveSpeed; // let dis = deltaTime*(this._moveSpeed+bonusMS);

          let moveX = this._flyDir.x * dis;
          let moveY = this._flyDir.y * dis;
          this.node.setPosition(this.node.getPosition().x + moveX, this.node.getPosition().y + moveY, 0);
        }

        weaponDuration(deltaTime) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._duration -= deltaTime;
          if (this._duration <= 0) this.recoveryPrefab();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=462d8fc8fcf05d6d3b7e609e2c02892da2727dbd.js.map