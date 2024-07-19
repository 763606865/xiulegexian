System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EnemySkill, _dec, _class, _crd, ccclass, property, GreenThunder;

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
      EnemySkill = _unresolved_2.EnemySkill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fa205J2QNhCM6XEN0hsqKzD", "GreenThunder", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-09 13:24:43
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-09 15:18:16
       * @FilePath: \copy9train\assets\script\enemy\skill\GreenThunder.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GreenThunder", GreenThunder = (_dec = ccclass('GreenThunder'), _dec(_class = class GreenThunder extends (_crd && EnemySkill === void 0 ? (_reportPossibleCrUseOfEnemySkill({
        error: Error()
      }), EnemySkill) : EnemySkill) {
        init(damage) {
          this._skillName = "greenThunder";
          this._damage = damage;
          this.initCollider();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1face069dfb8bfb48bd3a48ff386d8c552b4c199.js.map