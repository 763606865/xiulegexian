System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, tween, Vec3, JsonAsset, Prefab, Label, Sprite, NodePool, Animation, Color, Tween, em, glf, plm, LevelManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, TrainingLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../global/globalFun", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../global/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelManager(extras) {
    _reporterNs.report("LevelManager", "../system/LevelManager", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      NodePool = _cc.NodePool;
      Animation = _cc.Animation;
      Color = _cc.Color;
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      glf = _unresolved_3.glf;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }, function (_unresolved_5) {
      LevelManager = _unresolved_5.LevelManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9d7ecxRXdtAUbVGlUY0HvPs", "TrainingLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'tween', 'Vec3', 'JsonAsset', 'Prefab', 'instantiate', 'Label', 'Sprite', 'NodePool', 'Animation', 'Color', 'Tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TrainingLayer", TrainingLayer = (_dec = ccclass('TrainingLayer'), _dec2 = property(JsonAsset), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Prefab), _dec10 = property(Node), _dec11 = property(Node), _dec(_class = (_class2 = class TrainingLayer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "trainingLvListJson", _descriptor, this);

          _initializerDefineProperty(this, "pillPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "pillPar", _descriptor3, this);

          _initializerDefineProperty(this, "expProgress", _descriptor4, this);

          _initializerDefineProperty(this, "expProgressDescription", _descriptor5, this);

          _initializerDefineProperty(this, "trainingLv", _descriptor6, this);

          _initializerDefineProperty(this, "trainingBonusLabelPar", _descriptor7, this);

          _initializerDefineProperty(this, "tipsPrefab", _descriptor8, this);

          _initializerDefineProperty(this, "nothingLabel", _descriptor9, this);

          _initializerDefineProperty(this, "guideFinger", _descriptor10, this);

          this._itemPrefabArr = [];
          this._trainingLvList = void 0;
          this._rotationSpeed = 100;
          this._pillList = void 0;
          this._isUpgrading = false;
          this._curTrainingExp = void 0;
          this._curTrainingLv = void 0;
          this._TIM = void 0;
        }

        onLoad() {
          this._pillList = find("pillList", this.node);
          this._trainingLvList = this.trainingLvListJson.json; // console.log("list", this._trainingLvList);

          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("TLPillPrefab", new NodePool(), this.pillPrefab);
          var tipsTexPool = new NodePool();
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("tipsTex", tipsTexPool, this.tipsPrefab);
        }

        onEnable() {
          var guideData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData");

          if (!guideData.TrainingLayer) {
            this.startTrainingLayerGuide();
          }

          this.updatePillsContent();
        } // 刷新药物列表


        updatePillsContent() {
          var _this = this;

          console.log("updatePillsContent");

          while (this._itemPrefabArr.length > 0) {
            var prefab = this._itemPrefabArr.shift();

            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("TLPillPrefab", prefab);
          }

          var pillList = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getAllPills");
          var count = 0;

          var _loop = function _loop() {
            if (Object.prototype.hasOwnProperty.call(pillList, id)) {
              var total = pillList[id]; // let pill = instantiate(this.pillPrefab);

              var pill = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("TLPillPrefab");
              pill.parent = _this.pillPar;
              var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getItemDataByIdOrName", id);
              pill.getChildByName("name").getComponent(Label).string = data.name;
              pill.getChildByName("total").getComponent(Label).string = total;
              var sprite = pill.getChildByName("sprite").getComponent(Sprite);
              var loadUrl = "images/items/" + data.loadUrl + "/spriteFrame";
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);
              (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).createButton(_this.node, pill, "TrainingLayer", "onBtnUsingPill", data.name);

              _this._itemPrefabArr.push(pill);

              count++;
            }
          };

          for (var id in pillList) {
            _loop();
          }

          if (count == 0) {
            this.nothingLabel.active = true;
          } else {
            this.nothingLabel.active = false;
          }
        }

        start() {
          this.initTrainingLv();
        } // 初始化修行等级


        initTrainingLv() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "training"); //读取缓存

          if (null === data) {
            this._curTrainingExp = 0;
            this._curTrainingLv = 0;
          } else {
            this._curTrainingLv = data.curLv;
            var exp = this._curTrainingLv > 0 ? this._trainingLvList[this._curTrainingLv - 1].exp : 0;
            this._curTrainingExp = data.curExp >= exp ? data.curExp : exp;
            console.log("读取列表 配置修为 还没写");
          }

          var obj = {
            "level": 0,
            "maxLevel": this._trainingLvList.length - 1,
            "curExp": 0,
            "levelMappingExpList": this._trainingLvList
          };
          this._TIM = new (_crd && LevelManager === void 0 ? (_reportPossibleCrUseOfLevelManager({
            error: Error()
          }), LevelManager) : LevelManager)(obj);

          this._TIM.addExp(this._curTrainingExp); // console.log("_TIM",this._TIM);


          this.updateProgressView();
          this.savingTrainingData();
        } // 记录修行数据


        savingTrainingData() {
          var data = {
            "curExp": this._curTrainingExp,
            "curLv": this._curTrainingLv
          };
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "training", data);
        } //使用丹药


        onBtnUsingPill(e, p) {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("playOneShot", "common/吃药");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("reduceItemFromSS", p, 1); //使用丹药

          this.updatePillsContent();
          var exp;

          switch (p) {
            case "炼气丹":
              exp = 1;
              break;

            case "筑基丹":
              exp = 10;
              break;

            case "金元丹":
              exp = 200;
              break;

            case "元婴丹":
              exp = 4000;
              break;

            case "化神丹":
              exp = 80000;
              break;

            default:
              exp = 0;
              console.warn("尚未添加丹药" + p + "的经验值");
              break;
          }

          this._TIM.addExp(exp);

          this._curTrainingExp = this._TIM.curExp; // em.dispatch("tipsViewShow", "修为+" + exp);

          this.createTipsTex("修为+" + exp);
          this.updateProgressView();
          this.savingTrainingData();
          this.guideFinger.active = false;

          if (!(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData").TrainingLayer) {
            this.startGuideUpgrade();
          }
        }

        updateProgressView() {
          // 获取到下一级的经验
          // let nextLvExp = this._trainingLvList[this._curTrainingLv+1].exp;
          var nextLvExp = this._trainingLvList[this._curTrainingLv].exp;
          var curLvExp = this._curTrainingLv > 0 ? this._trainingLvList[this._curTrainingLv - 1].exp : 0;
          console.log("nextLvExp", nextLvExp);
          console.log("curLvExp", curLvExp);
          console.log("this._curTrainingExp", this._curTrainingExp);
          console.log("this._curTrainingExp - curLvExp", this._curTrainingExp - curLvExp);
          var string = this._curTrainingExp - curLvExp + "/" + (nextLvExp - curLvExp);
          var data = this._trainingLvList[this._curTrainingLv];
          var par = this.trainingBonusLabelPar;
          this.expProgressDescription.string = string;
          this.expProgress.fillRange = (this._curTrainingExp - curLvExp) / (nextLvExp - curLvExp);
          this.trainingLv.string = data.name;
          find("Canvas/menuLayer/title/heroBaseInfoBg/curLv").getComponent(Label).string = data.name;
          par.getChildByName("l1").getComponent(Label).string = "血量加成：" + data.blood;
          par.getChildByName("l2").getComponent(Label).string = "伤害加成：" + data.damage;
          par.getChildByName("l3").getComponent(Label).string = "移速加成：" + data.moveSpeed;
        }

        onBtnUpgrade() {
          if (this._isUpgrading) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "突破中...");
            return;
          }

          if (!this.isCanUpgrade()) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "当前状态无法突破。");
            return;
          }

          this.guideFinger.active = false;
          this._isUpgrading = true;
          this._curTrainingLv++;
          this.playUpgradeAnim();
          this.savingTrainingData();
        } // 是否能够升级


        isCanUpgrade() {
          return this._TIM.level > this._curTrainingLv;
        }

        playUpgradeAnim() {
          console.log("播放突破动画");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("playOneShot", "common/突破");
          var anim = find("training/animPar", this.node).getComponent(Animation);
          anim.play();
        } //播放完突破动画 恢复可突破状态


        afterPlayUpgradeAnim() {
          this._isUpgrading = false;
          this.updateProgressView();
          console.log("TrainingLayer", (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData", "TrainingLayer"));

          if (!(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData").TrainingLayer) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("setGuideData", "TrainingLayer", true);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("initMainMenuByGuideData");
          }
        } //=================创建提示信息===============


        createTipsTex(content, initPos) {
          if (initPos === void 0) {
            initPos = {
              x: 0,
              y: 100
            };
          }

          var tex = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("tipsTex");
          tex.getComponent(Label).string = content;
          tex.parent = find("Canvas/menuLayer/TrainingLayer/tipsPar");
          tex.setPosition(initPos.x, initPos.y, 0);
          this.playTIPSTeXEffect(tex);
        }

        playTIPSTeXEffect(tex, color) {
          if (color === void 0) {
            color = new Color(255, 255, 255, 255);
          }

          var a1 = tween().by(1, {
            position: new Vec3(0, 200, 0)
          }, {
            onUpdate: (target, ratio) => {
              // if(ratio>0.5) tex.getComponent(Label).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), (ratio -0.5)*2);
              tex.getComponent(Label).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), ratio);
            }
          });
          var a2 = tween().to(0.5, {
            scale: new Vec3(1.2, 1.2, 1)
          });
          var action = tween(tex).parallel(a1, a2).call(() => {
            tex.setScale(new Vec3(1, 1, 1));
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("tipsTex", tex, true);
          });
          action.start();
        }

        startTrainingLayerGuide() {
          var guideTips = "点击使用丹药，提升修为。当人物全身金黄时，说明修为已满，可以通过突破提升境界。越高阶的丹药提升的修为越高。丹药可以通过炼制丹药获取。";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("openGuideTips", guideTips);
          find("Canvas/menuLayer/guideFinger").active = false;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", "炼气丹", 1);
          var tips = "获得物品炼气丹x1";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", tips);
          this.updatePillsContent();
          var item = this._itemPrefabArr.length > 0 ? this._itemPrefabArr[0] : null;

          if (item) {
            Tween.stopAllByTag(3);
            var guide = this.guideFinger;
            guide.active = true;
            guide.parent = item;
            guide.setPosition(0, 150, 0);
            var a1 = tween().by(0.5, {
              position: new Vec3(0, -100, 0)
            });
            var a2 = tween().by(0.5, {
              position: new Vec3(0, 100, 0)
            });
            var action = tween(guide).sequence(a1, a2);
            action = tween(guide).repeatForever(action);
            action.tag(3);
            action.start();
          }

          ;
        }

        startGuideUpgrade() {
          var btn = find("Canvas/menuLayer/TrainingLayer/training/upgrade");

          if (btn) {
            Tween.stopAllByTag(3);
            var guide = this.guideFinger;
            guide.active = true;
            guide.parent = btn;
            guide.setPosition(0, 150, 0);
            var a1 = tween().by(0.5, {
              position: new Vec3(0, -100, 0)
            });
            var a2 = tween().by(0.5, {
              position: new Vec3(0, 100, 0)
            });
            var action = tween(guide).sequence(a1, a2);
            action = tween(guide).repeatForever(action);
            action.tag(3);
            action.start();
          }

          ;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "trainingLvListJson", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pillPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pillPar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "expProgress", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "expProgressDescription", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "trainingLv", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "trainingBonusLabelPar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tipsPrefab", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "nothingLabel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "guideFinger", [_dec11], {
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
//# sourceMappingURL=309ae80b47ba67afc62dd9a10ecf0fa43d824fe5.js.map