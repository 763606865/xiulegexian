System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, Vec3, tween, Label, Tween, em, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, MainMenuGuide;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
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
      find = _cc.find;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Label = _cc.Label;
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "920c8P13D9PMoxejKCPOzEK", "MainMenuGuide", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'Vec3', 'tween', 'Label', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator); // 主菜单新手引导

      _export("MainMenuGuide", MainMenuGuide = (_dec = ccclass('MainMenuGuide'), _dec2 = property(Node), _dec3 = property([Node]), _dec4 = property(Node), _dec5 = property(Label), _dec(_class = (_class2 = class MainMenuGuide extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "guideFinger", _descriptor, this);

          _initializerDefineProperty(this, "btnArr", _descriptor2, this);

          _initializerDefineProperty(this, "guideTipsBg", _descriptor3, this);

          _initializerDefineProperty(this, "guideTipsLabel", _descriptor4, this);

          this._guideData = {
            "SelectStageLayer": false,
            "HeroInfoLayer": false,
            //角色界面总引导
            "HeroInfoLayerSpace": false,
            //仓库引导
            "HeroInfoLayerProperty": false,
            //属性引导
            "TrainingLayer": false,
            "MakePillsLayer": false,
            "SkillBookLayer": false
          };
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getGuideData");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("setGuideData");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("initMainMenuByGuideData");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("openGuideTips");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getGuideData", this.getGuideData.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("setGuideData", this.setGuideData.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("initMainMenuByGuideData", this.initMainMenuByGuideData.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("openGuideTips", this.openGuideTips.bind(this));
        }

        start() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "guideData");

          if (data) {
            for (var key in data) {
              //通过赋值的方式存取，可以在添加新属性时解决冲突问题
              if (Object.prototype.hasOwnProperty.call(data, key) && this._guideData.hasOwnProperty(key)) {
                this._guideData[key] = data[key];
              }
            }
          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "guideData", this._guideData);
          this.initMainMenuByGuideData();
        } // 通过新手引导数据初始化主菜单


        initMainMenuByGuideData() {
          console.log("通过新手引导数据初始化主菜单");
          console.log("guide data", this._guideData);

          if (!this._guideData.SelectStageLayer) {
            this.hideBtnsFromIndexStart(1);
            find("Canvas/menuLayer/SelectStageLayer/guideSelectStage").active = true;
            this.guideTipsLabel.string = "点击关卡,开始游戏。\n海量怪兽等你挑战！";
            this.guideTipsBg.active = true;
            this._guideData.SelectStageLayer = true;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("savingToTempData", "guideData", this._guideData);
          } else if (!this._guideData.HeroInfoLayer) {
            this.hideBtnsFromIndexStart(2);
            Tween.stopAllByTag(1);
            this.guideTipsLabel.string = "主角菜单包括仓库和属性。在仓库界面可以查看、使用、出售你的物品。在属性界面可以通过道法果提升自己的基础面板属性。";
            this.guideTipsBg.active = true;
            var node = find("Canvas/menuLayer/selectBtnPar/btn2");
            var wp = node.getWorldPosition();
            this.guideFinger.active = true;
            this.guideFinger.setWorldPosition(wp.x, wp.y + 150, wp.z);
            this.playGuideAnim1();
          } else if (!this._guideData.TrainingLayer) {
            this.hideBtnsFromIndexStart(3);
            Tween.stopAllByTag(1);

            var _node = find("Canvas/menuLayer/selectBtnPar/btn3");

            var _wp = _node.getWorldPosition();

            this.guideFinger.active = true;
            this.guideFinger.setWorldPosition(_wp.x, _wp.y + 150, _wp.z);
            this.playGuideAnim1();
          } else if (!this._guideData.MakePillsLayer) {
            this.hideBtnsFromIndexStart(4);
            Tween.stopAllByTag(1);

            var _node2 = find("Canvas/menuLayer/selectBtnPar/btn4");

            var _wp2 = _node2.getWorldPosition();

            this.guideFinger.active = true;
            this.guideFinger.setWorldPosition(_wp2.x, _wp2.y + 150, _wp2.z);
            this.playGuideAnim1();
          } else if (!this._guideData.SkillBookLayer) {
            this.hideBtnsFromIndexStart(5);
            Tween.stopAllByTag(1);

            var _node3 = find("Canvas/menuLayer/selectBtnPar/btn5");

            var _wp3 = _node3.getWorldPosition();

            this.guideFinger.active = true;
            this.guideFinger.setWorldPosition(_wp3.x, _wp3.y + 150, _wp3.z);
            this.playGuideAnim1();
          }
        }

        setGuideData(key, value) {
          if (value === void 0) {
            value = true;
          }

          if (this._guideData.hasOwnProperty(key)) {
            this._guideData[key] = value;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("savingToTempData", "guideData", this._guideData);
          } else {
            throw "set guide data error." + key + " is invalid";
          }
        } //播放引导动画1


        playGuideAnim1() {
          var a1 = tween().by(0.5, {
            position: new Vec3(0, -100, 0)
          });
          var a2 = tween().by(0.5, {
            position: new Vec3(0, 100, 0)
          });
          var action = tween(this.guideFinger).sequence(a1, a2);
          action = tween(this.guideFinger).repeatForever(action);
          action.tag(1);
          action.start();
        } // 隐藏所有菜单按钮


        hideBtnsFromIndexStart(index) {
          for (var i = 0; i < this.btnArr.length; i++) {
            if (i >= index) this.btnArr[i].active = false;else this.btnArr[i].active = true;
          }
        }

        closeGuideTips() {
          this.guideTipsLabel.string = "";
          this.guideTipsBg.active = false;
        } //===========外部调用===========
        // 获取新手引导数据


        getGuideData() {
          return this._guideData;
        } //开启引导提示


        openGuideTips(content) {
          this.guideTipsLabel.string = content;
          this.guideTipsBg.active = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "guideFinger", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnArr", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "guideTipsBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "guideTipsLabel", [_dec5], {
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
//# sourceMappingURL=9b516a3e474a5bab5dc3fd03cc1cceb7977a1fb4.js.map