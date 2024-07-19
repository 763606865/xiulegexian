System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, find, instantiate, Label, director, em, ggd, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, PassRewardLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../../script/global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../../script/global/globalData", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      director = _cc.director;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3915avsEoJBXokQnV1iJKrp", "PassRewardLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-08-26 15:22:55
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-28 13:17:50
       * @FilePath: \to-be-immortal\assets\prefab\import\rewardLayer\PassRewardLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'find', 'SpriteFrame', 'instantiate', 'Label', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PassRewardLayer", PassRewardLayer = (_dec = ccclass('PassRewardLayer'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec(_class = (_class2 = class PassRewardLayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "descriptionLabel", _descriptor, this);

          _initializerDefineProperty(this, "killCountLabel", _descriptor2, this);

          _initializerDefineProperty(this, "curStageLabel", _descriptor3, this);

          _initializerDefineProperty(this, "doubleTips", _descriptor4, this);

          this._prefab = null;
          this._rContent = null;
          this._killLeaderRewardConfig = void 0;
          this._isPass = false;
          this._notNoticeKillReward = false;
        }

        //不在提示击杀击杀精英怪奖励
        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("openRewardLayer", this.openLayer.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("showKillLeaderReward", this.showKillLeaderReward.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("showPassReward", this.showPassReward.bind(this));
          this.initNode();
          this.initLeaderRewardConfig();
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("openRewardLayer");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("showKillLeaderReward");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("showPassReward");
        }

        initNode() {
          this._prefab = find("prefab", this.node);
          this._rContent = find("bg/ScrollView/view/content", this.node);
        }

        initLeaderRewardConfig() {
          this._killLeaderRewardConfig = {
            0: "strengthBlood1",
            1: "strengthBlood2",
            2: "strengthBlood3",
            3: "strengthBlood4",
            4: "strengthBlood5",
            5: "strengthDamage1",
            6: "strengthDamage2",
            7: "strengthDamage3",
            8: "strengthDamage4",
            9: "strengthDamage5",
            10: "strengthMoveSpeed1",
            11: "strengthMoveSpeed2",
            12: "strengthMoveSpeed3",
            13: "strengthMoveSpeed4",
            14: "strengthMoveSpeed5"
          };
        }

        onDisable() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll = find("passRewardLayer", this.node.parent).active; // ggd.stopAll = false;
        }

        showKillLeaderReward(strengthType) {
          let index = Math.random() * 5 | 0;
          let result = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateBonusValue", strengthType, index + 1);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createTipsTex", result);
        }

        showPassReward(all, string, isDouble = false) {
          // console.log("showPassReward",all);
          all.forEach(data => {
            console.log(data);

            if (data.total > 0) {
              let prefab = instantiate(this._prefab);
              let itemData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getItemDataByIdOrName", data.id);
              prefab.parent = this._rContent;
              prefab.getChildByName("name").getComponent(Label).string = itemData.name + "x" + data.total;
              let sprite = prefab.getChildByName("sprite").getComponent(Sprite);
              let loadUrl = "images/items/" + itemData.loadUrl + "/spriteFrame";
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);
              prefab.active = true;
            }
          });
          this.descriptionLabel.string = string;
          this.killCountLabel.string = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("geCurStageKillInfo");
          this.curStageLabel.string = "第" + (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curStage + "关";
          if (isDouble) this.doubleTips.active = true;else this.doubleTips.active = false;
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll = true;
          this.node.active = true;
          this._isPass = true;
        }

        closeLayer() {
          if (this._isPass) {
            // 跳出加载
            this.node.getChildByName("loading").active = true;
            this.enterMainMenu();
          } else {
            this.node.active = false;
            find("Toggle", this.node).active = false;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingMonsterManagerFun", "resumeAllAnim");
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "resumeGame");
          }
        }

        enterMainMenu() {
          let total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getMonsterTotal");

          if (total <= 0) {
            console.log("跳转到菜单界面");
            director.loadScene("mainMenu", () => {
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("switchMainBgm", "/audio/music/刀剑如梦");
            });
          } else this.scheduleOnce(() => {
            this.enterMainMenu();
          }, 0.1);
        }

        openLayer() {
          this.node.active = true;
        } //不在提示


        onBtnNotNotice() {
          this._notNoticeKillReward = !this._notNoticeKillReward;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "descriptionLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "killCountLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "curStageLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "doubleTips", [_dec5], {
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
//# sourceMappingURL=bcdc73fa8dc02a396797b3664020f427cd81bd8a.js.map