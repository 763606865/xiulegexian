System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, ggd, tagData, Weapon, _dec, _class, _crd, ccclass, Guard;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../../global/globalData", _context.meta, extras);
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
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f0a2dmCnJBInb6cEYwE9QoG", "Guard", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-08-22 16:29:49
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-04 10:03:45
       * @FilePath: \copy9train\assets\script\hero\weapon\Guard.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Color']);

      ({
        ccclass
      } = _decorator);

      _export("Guard", Guard = (_dec = ccclass('Guard'), _dec(_class = class Guard extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        // _touchGuard:boolean = false;
        init(data, lv) {
          this.initWeaponInfo(lv, data);
          var weaponName = data.name;
          this.initCircleCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData)[weaponName], -10);
        } //guard 存在多段伤害 需要攻击间隔加入判定


        colliderMonster(other) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) {
            this.scheduleOnce(() => {
              this.colliderMonster(other);
            }, this._attackInterval);
            return;
          }

          if (!this.isTouching(other)) return; // let damage = em.dispatch("getHeroControlProperty","_damage") + this._damage;

          var damage = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "getCurDamage") + this._damage;

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createDamageTex", other.node, damage, {
            x: 0,
            y: 20
          });
          other.node.getComponent("Monster").updateBlood(-damage);
          this.scheduleOnce(() => {
            this.colliderMonster(other);
          }, this._attackInterval);
        } //攻击怪物和boss的区别 在于击退 穿透等属性 和一些other的内部回调 暂时没写


        colliderBoss(other) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) {
            this.scheduleOnce(() => {
              this.colliderBoss(other);
            }, this._attackInterval);
            return;
          }

          if (!this.isTouching(other)) return; //boss节点名 必须和boss 名 相同

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createDamageTex", other.node, this._damage, {
            x: 0,
            y: 20
          }); // let script = other.node.getComponent(other.node._name);

          var script = other.node.parent.components[0];

          if (script) {
            // let damage = em.dispatch("getHeroControlProperty","_damage") + this._damage;
            var damage = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "getCurDamage") + this._damage;

            script.updateBlood(-damage);
            this.scheduleOnce(() => {
              this.colliderBoss(other);
            }, this._attackInterval);
          } else throw "script name is different form node name.";
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3bd12cd0ddc322a8708baa08f41773661f452305.js.map