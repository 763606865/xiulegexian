System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, SpriteFrame, find, Sprite, Label, director, sys, JsonAsset, em, ggd, glf, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, MainMenu;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../global/globalFun", _context.meta, extras);
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
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      find = _cc.find;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      director = _cc.director;
      sys = _cc.sys;
      JsonAsset = _cc.JsonAsset;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      glf = _unresolved_4.glf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e87avhPWxNFp2OmdXxirn8", "MainMenu", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-05 10:16:04
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-12-10 20:49:10
       * @FilePath: \to-be-immortal\assets\script\mainMenu\MainMenu.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'find', 'Sprite', 'Label', 'Color', 'Layers', 'director', 'sys', 'JsonAsset', 'native']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MainMenu", MainMenu = (_dec = ccclass('MainMenu'), _dec2 = property([SpriteFrame]), _dec3 = property([Node]), _dec4 = property([SpriteFrame]), _dec5 = property(JsonAsset), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = class MainMenu extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "selectBtnSF", _descriptor, this);

          _initializerDefineProperty(this, "btnArr", _descriptor2, this);

          _initializerDefineProperty(this, "menuBtnSF", _descriptor3, this);

          _initializerDefineProperty(this, "trainingLvListJson", _descriptor4, this);

          _initializerDefineProperty(this, "versionNotice", _descriptor5, this);

          _initializerDefineProperty(this, "gets", _descriptor6, this);

          _initializerDefineProperty(this, "upgradeEquLvLayer", _descriptor7, this);

          this._layerNode = [];
          this._SSLNode = void 0;
          this._HILNode = void 0;
          this._TLNode = void 0;
          this._MPNode = void 0;
          this._SBNode = void 0;
          this._PHNode = void 0;
          this._AINode = void 0;
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("switchMainMenuLayer");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("switchMainMenuLayer", this.onSelectBtn.bind(this));
          this._SSLNode = find("Canvas/menuLayer/SelectStageLayer");
          this._HILNode = find("Canvas/menuLayer/HeroInfoLayer");
          this._TLNode = find("Canvas/menuLayer/TrainingLayer");
          this._MPNode = find("Canvas/menuLayer/MakePillsLayer");
          this._SBNode = find("Canvas/menuLayer/SkillBookLayer");
          this._PHNode = find("Canvas/menuLayer/PrizeHallLayer");
          this._AINode = find("Canvas/menuLayer/AddItemsLayer");

          this._layerNode.push(this._SSLNode, this._HILNode, this._TLNode, this._MPNode, this._SBNode, this._PHNode, this._AINode);

          this.onSelectBtn(null, "1");
          director.preloadScene("game"); // 激活节点 注册事件

          this.versionNotice.active = true;
          this.versionNotice.active = false;
          this.gets.active = true;
          this.gets.active = false; // em.dispatch("directPlayAD","GameMonetize");
        }

        start() {
          this.initAccountInfo();
          this.initLvInfo();
          this.initLingshiTotal(); // let lvData = this.trainingLvListJson.json;
        }

        initAccountInfo() {
          let accountData = sys.localStorage.getItem("loginInfo");

          if (accountData) {
            accountData = JSON.parse(accountData);
            find("Canvas/menuLayer/title/heroBaseInfoBg/nickname").getComponent(Label).string = accountData.account;
          } else {
            find("Canvas/menuLayer/title/heroBaseInfoBg/nickname").getComponent(Label).string = "游客";
          }
        }

        initLvInfo() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "training"); //读取缓存

          if (null === data) {
            find("Canvas/menuLayer/title/heroBaseInfoBg/curLv").getComponent(Label).string = "江湖好手";
          } else {
            let des = this.trainingLvListJson.json[data.curLv].name;
            find("Canvas/menuLayer/title/heroBaseInfoBg/curLv").getComponent(Label).string = des;
          }
        }

        initLingshiTotal() {
          let total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", "灵石");
          find("Canvas/menuLayer/title/lingshiTotalBg/total").getComponent(Label).string = total;
        }

        onSelectBtn(e, p) {
          this.updateBtnSF(parseInt(p) - 1);

          switch (p) {
            case "1":
              if (e !== null) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("playOneShot", "common/进入试炼场");
              this.openLayer(this._SSLNode);
              break;

            case "2":
              if (e !== null) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("playOneShot", "common/点击人物界面");
              this.openLayer(this._HILNode);
              break;

            case "3":
              if (e !== null) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("playOneShot", "common/点击修行界面");
              this.openLayer(this._TLNode);
              break;

            case "4":
              if (e !== null) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("playOneShot", "common/点击炼丹界面");
              this.openLayer(this._MPNode);
              break;

            case "5":
              if (e !== null) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("playOneShot", "common/点击秘籍界面");
              this.openLayer(this._SBNode);
              break;

            case "6":
              // if (e !== null) em.dispatch("playOneShot", "common/点击秘籍界面");
              this.openLayer(this._PHNode);
              break;

            case "7":
              // if (e !== null) em.dispatch("playOneShot", "common/点击秘籍界面");
              this.openLayer(this._AINode);
              break;

            default:
              throw "p is err,current p is " + p;
          }
        }

        updateBtnSF(index) {
          this.btnArr.forEach((btn, i) => {
            if (i == index) {
              btn.getComponent(Sprite).spriteFrame = this.menuBtnSF[i * 2 + 1];
            } else {
              btn.getComponent(Sprite).spriteFrame = this.menuBtnSF[i * 2];
            }
          });
        }

        openLayer(node) {
          this._layerNode.forEach(layer => {
            if (node == layer) layer.active = true;else layer.active = false;
          });
        }

        onBtnAds(e, p) {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curAdRewardType = p;
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).playAd(); // native.reflection.callStaticMethod("com/cocos/game/AppActivity", "createAds", "()V");
          // em.dispatch("getItemsRewardByAds");
        } // 打开装备升阶界面


        onBtnOpenUpgradeEquLvLayer() {
          this.upgradeEquLvLayer.active = true;
        } // 今日签到


        onBtnSignInToday() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameRewardFun", "signInToday");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectBtnSF", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnArr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "menuBtnSF", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "trainingLvListJson", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "versionNotice", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "gets", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "upgradeEquLvLayer", [_dec8], {
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
//# sourceMappingURL=b78e9790be757165f327d463569bfb6512f6646a.js.map