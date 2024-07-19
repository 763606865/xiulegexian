System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, groupIndex, tagData, Puppet, _dec, _class, _crd, ccclass, property, MoveLikeShadow;

  function _reportPossibleCrUseOfgroupIndex(extras) {
    _reporterNs.report("groupIndex", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPuppet(extras) {
    _reporterNs.report("Puppet", "../Puppet", _context.meta, extras);
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
      groupIndex = _unresolved_2.groupIndex;
      tagData = _unresolved_2.tagData;
    }, function (_unresolved_3) {
      Puppet = _unresolved_3.Puppet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da741lk0R1H1ok591YrEKqR", "MoveLikeShadow", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-23 10:27:57
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-23 11:15:09
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\MoveLikeShadow.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MoveLikeShadow", MoveLikeShadow = (_dec = ccclass('MoveLikeShadow'), _dec(_class = class MoveLikeShadow extends (_crd && Puppet === void 0 ? (_reportPossibleCrUseOfPuppet({
        error: Error()
      }), Puppet) : Puppet) {
        init(maxBlood) {
          this._maxBlood = maxBlood;
          this._curBlood = maxBlood;
          this.initNodeCallBack();
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).puppet, (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).self);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa387045c05e8190980e86ce3567dac989a7d3fa.js.map