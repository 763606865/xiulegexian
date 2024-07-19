System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, em, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameSettings;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8b950jW4AZPXobu7MumYqkU", "GameSettings", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-10-09 14:24:37
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-29 11:00:37
       * @FilePath: \to-be-immortal\assets\script\hero\gameUI\GameSettings.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'instantiate', 'Prefab', 'Sprite', 'Label', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameSettings", GameSettings = (_dec = ccclass('GameSettings'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = class GameSettings extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "contentLabel", _descriptor, this);

          _initializerDefineProperty(this, "lvLabel", _descriptor2, this);
        }

        onEnable() {
          this.updateHeroPropertiesView();
        }

        updateHeroPropertiesView() {
          // let string: string = "反馈邮箱：739671694@qq.com"+"\n";
          let string = ""; // let string: string = "";

          let lv = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getTrainingData", "name");
          let weaponDes = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "getWeaponDes");
          let heroPropertiesDes = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "getHeroPropertiesDes");
          let SSDes = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingSkillManagerFun", "getSSDes");
          string = string + weaponDes + heroPropertiesDes + SSDes;
          this.contentLabel.string = string;
          this.lvLabel.string = lv;
        } //点击设置  打开设置界面


        onBtnSettings() {
          this.node.active = true;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "pauseGame");
        }

        closeSetting() {
          this.node.active = false;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "resumeGame");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lvLabel", [_dec3], {
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
//# sourceMappingURL=e43c9ad097c595a2ef09b0d3af71ccf7b8ed34c0.js.map