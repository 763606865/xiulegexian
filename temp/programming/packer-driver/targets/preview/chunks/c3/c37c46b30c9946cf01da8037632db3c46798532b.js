System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, em, tagData, Weapon, _dec, _class, _crd, ccclass, property, SamadhiTrueFire;

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

      _cclegacy._RF.push({}, "fa9e36GRPBDFq3fyBBV3pXc", "SamadhiTrueFire", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-11 17:57:36
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-30 17:44:37
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\SamadhiTrueFire.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */

      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-02 11:35:35
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-25 10:58:36
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\SamadhiTrueFire.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SamadhiTrueFire", SamadhiTrueFire = (_dec = ccclass('SamadhiTrueFire'), _dec(_class = class SamadhiTrueFire extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        onDestroy() {}

        init() {
          this.addToAnimManger();
          this.initSkillData();
        }

        initSkillData() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "samadhiTrueFire");
          this._damage = data.baseDamage;
          this._duration = data.duration;
          this._backDis = 0;
          this._canAttackTimes = Infinity;
          this._attackInterval = 0.5;
          this._weaponName = data.name2;
          this.node.parent = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "node").getChildByName("sprite"); // this.clearCacheData();

          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
        } //自我销毁


        recoveryToPool() {
          this.removeAnimFromList();
          this.node.destroy();
        }

        addToAnimManger() {
          var anim = this.node.getComponent(Animation);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameAnimManagerFun", "addAnimToList", anim);
        }

        removeAnimFromList() {
          var anim = this.node.getComponent(Animation);
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
//# sourceMappingURL=c37c46b30c9946cf01da8037632db3c46798532b.js.map