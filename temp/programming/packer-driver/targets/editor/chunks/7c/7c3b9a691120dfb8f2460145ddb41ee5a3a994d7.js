System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, em, tagData, Weapon, _dec, _class, _crd, ccclass, property, FingerLikeWind;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
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
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9e90vRgkhOw65sE4SlWHaZ", "FingerLikeWind", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-23 22:06:51
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-24 11:08:25
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\FingerLikeWind.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FingerLikeWind", FingerLikeWind = (_dec = ccclass('FingerLikeWind'), _dec(_class = class FingerLikeWind extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this.addToAnimManger();
          this.initSkillData();
        }

        initSkillData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "fingerLikeWind");
          this._damage = data.baseDamage;
          this._damageTimes = data.damageTimes;
          this._duration = data.duration;
          this._backDis = 0;
          this._canAttackTimes = Infinity;
          this._attackInterval = 0.5;
          this._weaponName = data.name;
          this.node.parent = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "node").getChildByName("skillParent");
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
        }

        update(deltaTime) {
          this.weaponMove(deltaTime);
          this.weaponDuration(deltaTime); // this.changeDirByAimDir(90);

          this.changeDirByMoveDir(90);
        } //自我销毁


        recoveryToPool() {
          this.removeAnimFromList();
          this.node.destroy();
        }

        addToAnimManger() {
          let anim = this.node.getComponent(Animation);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameAnimManagerFun", "addAnimToList", anim);
        }

        removeAnimFromList() {
          let anim = this.node.getComponent(Animation);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameAnimManagerFun", "removeAnimFromList", anim);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c3b9a691120dfb8f2460145ddb41ee5a3a994d7.js.map