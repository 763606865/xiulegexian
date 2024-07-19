System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, em, tagData, Weapon, _dec, _class, _crd, ccclass, property, MoveLikeFire;

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

      _cclegacy._RF.push({}, "a82d3h5129GNKZOCSjN7cNi", "MoveLikeFire", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-02 18:09:21
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-04 14:30:14
       * @FilePath: \copy9train\assets\script\hero\weapon\MoveLikeFire.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MoveLikeFire", MoveLikeFire = (_dec = ccclass('MoveLikeFire'), _dec(_class = class MoveLikeFire extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        init() {
          this.initSkillData();
        }

        initSkillData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "moveLikeFire");
          this._damage = data.baseDamage; // this._duration = data.duration;

          this._moveSpeed = 0;
          this._canAttackTimes = Infinity;
          this._backDis = 10;
          this._attackInterval = 0.3; //

          this._weaponName = data.name2;
          this.clearCacheData();
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
          let anim = this.node.getComponent(Animation);
          anim.play();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cfb2f788e2d257f6a799e3f275ad579105e06fef.js.map