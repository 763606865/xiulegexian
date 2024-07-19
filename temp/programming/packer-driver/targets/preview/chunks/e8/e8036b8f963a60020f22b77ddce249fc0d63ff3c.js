System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, tagData, EnemySkill, _dec, _class, _crd, ccclass, property, DarkMask;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySkill(extras) {
    _reporterNs.report("EnemySkill", "./EnemySkill", _context.meta, extras);
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
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      EnemySkill = _unresolved_4.EnemySkill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5651evCO91NHb+szJiF4jVe", "DarkMask", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-09 14:11:31
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-09 14:46:04
       * @FilePath: \copy9train\assets\script\enemy\skill\DarkMask.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DarkMask", DarkMask = (_dec = ccclass('DarkMask'), _dec(_class = class DarkMask extends (_crd && EnemySkill === void 0 ? (_reportPossibleCrUseOfEnemySkill({
        error: Error()
      }), EnemySkill) : EnemySkill) {
        init() {
          this.initCollider();
        }

        onBeginContact(self, other) {
          if (other.tag !== (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).hero) return;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "addDebuffBanMove", 2);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e8036b8f963a60020f22b77ddce249fc0d63ff3c.js.map