System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, SpriteFrame, instantiate, Sprite, Label, find, Color, tween, Vec3, NodePool, ProgressBar, Slider, Tween, Animation, RichText, em, ggd, glf, plm, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, HeroInfoLayer;

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

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../global/PoolManager", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      find = _cc.find;
      Color = _cc.Color;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      NodePool = _cc.NodePool;
      ProgressBar = _cc.ProgressBar;
      Slider = _cc.Slider;
      Tween = _cc.Tween;
      Animation = _cc.Animation;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      glf = _unresolved_4.glf;
    }, function (_unresolved_5) {
      plm = _unresolved_5.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "506f9zuJdRKlbDiCkIyUYSC", "HeroInfoLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-05 15:09:09
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-12-10 21:10:26
       * @FilePath: \to-be-immortal\assets\script\mainMenu\HeroInfoLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'SpriteFrame', 'instantiate', 'Sprite', 'Label', 'find', 'Color', 'tween', 'Vec3', 'NodePool', 'ProgressBar', 'Slider', 'Tween', 'Animation', 'RichText', 'color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroInfoLayer", HeroInfoLayer = (_dec = ccclass('HeroInfoLayer'), _dec2 = property([SpriteFrame]), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property([SpriteFrame]), _dec(_class = (_class2 = class HeroInfoLayer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "selectBtnSF", _descriptor, this);

          _initializerDefineProperty(this, "HPPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "HPPrefabPar", _descriptor4, this);

          _initializerDefineProperty(this, "itemPrefabPar", _descriptor5, this);

          _initializerDefineProperty(this, "maskPar", _descriptor6, this);

          _initializerDefineProperty(this, "guideFinger", _descriptor7, this);

          _initializerDefineProperty(this, "adGetBox", _descriptor8, this);

          _initializerDefineProperty(this, "adGetEqu", _descriptor9, this);

          _initializerDefineProperty(this, "itemQBg", _descriptor10, this);

          this._curSelectItemData = void 0;
          this._tipsViewNode = void 0;
          this._itemPrefabArr = [];
          this._propertyPrefabArr = [];
          this._btnArr = [];
          this._HPNode = void 0;
          //英雄属性
          this._SSNode = void 0;
          //仓库
          this._eqBtnList = {};
          //装备按钮清单
          this._equPrefab = void 0;
          this._layerNode = [];
          this._config = ["percentageBlood", "percentageDamage", "moveSpeed", "criticalHitRate", "bonusBulletMoveSpeed", "bonusBulletAttackTimes", "recoveryHealthy", "expAddition", "divineStoneAddition"];
          // _config = ["percentageBlood", "percentageDamage", "percentageMoveSpeed", "moveSpeed",
          //     "criticalHitRate", "bonusBulletTotal", "bonusBulletMoveSpeed", "bonusBulletAttackTimes",
          //     "recoveryHealthy", "expAddition", "divineStoneAddition"
          // ];
          this._nameConfig = {
            percentageBlood: "血量百分比加成",
            percentageDamage: "伤害百分比加成",
            percentageMoveSpeed: "移速百分比加成",
            moveSpeed: "基础移速",
            criticalHitRate: "暴击率",
            bonusBulletTotal: "法宝额外数量",
            bonusBulletMoveSpeed: "法宝额外飞行速度",
            bonusBulletAttackTimes: "法宝穿透次数",
            recoveryHealthy: "基础生命恢复",
            expAddition: "游戏内经验加成",
            divineStoneAddition: "灵石加成"
          };
          this._equProbabilityList = {
            1: [0.9, 0.99, 1],
            2: [0.4, 0.95, 0.99, 1],
            3: [0, 0.5, 0.95, 0.99, 1],
            4: [0, 0.2, 0.6, 0.95, 1],
            5: [0, 0, 0.2, 0.9, 1]
          };
          // _equList = ["巨剑", "长剑", "巨弩", "连弩", "巨斧", "旋转斧"];
          this._equList = ["巨剑", "长剑", "巨弩", "连弩", "巨斧", "旋转斧", "风火轮", "筋斗云", "重甲", "法袍"];
          //Ratio数组均小于1的 默认只获得一个物品
          this._rewardConfig = void 0;
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingHeroInfoLayerFun");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingHeroInfoLayerFun", this.usingHeroInfoLayerFun.bind(this));

          this._btnArr.push(find("selectBtnPar/btn1", this.node));

          this._btnArr.push(find("selectBtnPar/btn2", this.node));

          this._HPNode = find("/heroProperty", this.node);
          this._SSNode = find("/storageSpace", this.node);

          this._layerNode.push(this._HPNode, this._SSNode);

          this._tipsViewNode = find("/heroProperty/tipsViewShow", this.node);
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("SSLItemPrefab", new NodePool(), this.itemPrefab);
          this.initRewardConfig(); // this.initEquipment();
        } //初始化宝箱 和 功法卷奖励


        initRewardConfig() {
          //初始化宝箱
          this._rewardConfig = {
            "一阶宝箱": ["一阶妖丹", "一阶道法果", "一阶功法残卷", "灵石", "炼气丹", "一阶功法整卷"],
            "一阶宝箱Ratio": [30, 5, 5, 500, 5, 0.5],
            "二阶宝箱": ["二阶妖丹", "二阶道法果", "二阶功法残卷", "灵石", "筑基丹", "二阶功法整卷"],
            "二阶宝箱Ratio": [30, 5, 4, 5000, 5, 0.3],
            "三阶宝箱": ["三阶妖丹", "三阶道法果", "三阶功法残卷", "灵石", "金元丹", "三阶功法整卷"],
            "三阶宝箱Ratio": [30, 5, 3, 50000, 5, 0.1],
            "四阶宝箱": ["四阶妖丹", "四阶道法果", "四阶功法残卷", "灵石", "元婴丹", "四阶功法整卷"],
            "四阶宝箱Ratio": [30, 5, 1, 500000, 5, 0.1],
            "五阶宝箱": ["五阶妖丹", "五阶道法果", "五阶功法残卷", "灵石", "化神丹", "五阶功法整卷"],
            "五阶宝箱Ratio": [30, 5, 1, 5000000, 5, 0.1],
            "一阶功法整卷": [],
            "一阶功法整卷Ratio": [],
            "二阶功法整卷": [],
            "二阶功法整卷Ratio": [],
            "三阶功法整卷": [],
            "三阶功法整卷Ratio": [],
            "四阶功法整卷": [],
            "四阶功法整卷Ratio": [],
            "五阶功法整卷": [],
            "五阶功法整卷Ratio": []
          }; // 初始化功法卷奖励 

          var allSD = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getAllAboutSkillBook");

          for (var key in allSD) {
            if (Object.prototype.hasOwnProperty.call(allSD, key)) {
              var data = allSD[key];

              switch (data.lv) {
                case 1:
                  this._rewardConfig.一阶功法整卷.push(data.name);

                  this._rewardConfig.一阶功法整卷Ratio.push(data.rareRatio);

                  break;

                case 2:
                  this._rewardConfig.二阶功法整卷.push(data.name);

                  this._rewardConfig.二阶功法整卷Ratio.push(data.rareRatio);

                  break;

                case 3:
                  this._rewardConfig.三阶功法整卷.push(data.name);

                  this._rewardConfig.三阶功法整卷Ratio.push(data.rareRatio);

                  break;

                case 4:
                  this._rewardConfig.四阶功法整卷.push(data.name);

                  this._rewardConfig.四阶功法整卷Ratio.push(data.rareRatio);

                  break;

                case 5:
                  this._rewardConfig.五阶功法整卷.push(data.name);

                  this._rewardConfig.五阶功法整卷Ratio.push(data.rareRatio);

                  break;

                default:
                  throw "暂未处理：" + data.lv + "阶功法。";
              }
            }
          }

          console.log("_rewardConfig", this._rewardConfig);
        }

        onEnable() {
          var guideData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData");

          if (!guideData.HeroInfoLayer) {
            this.startHeroInfoLayerGuide();
          }

          this.onSelectBtn(null, "2"); // this.onSelectBtn(null, "1");

          find("/itemDetail/ProgressBar", this.node).active = false;
          find("/itemDetail", this.node).active = false;
          this.initHeroCurEqu();
        }

        start() {
          this.isShowAdBtn();
          this.initHeroProperty();
        } //HeroInfoLayer 方法


        usingHeroInfoLayerFun(string) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        } //是否展示广告按钮


        isShowAdBtn() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).isOpenAd) {
            this.adGetBox.active = true;
          } else this.adGetBox.active = false;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).isOpenAd && !(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameRewardFun", "todayEquVideoIsCanShow")) this.adGetEqu.active = true;else this.adGetEqu.active = false;
        } // 初始化属性


        initHeroProperty() {
          var _this = this;

          var _loop = function _loop() {
            var str = _this._config[i];
            var curLv = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBasePropertyCurLv", str);
            var prefab = instantiate(_this.HPPrefab);
            prefab.parent = _this.HPPrefabPar;
            var sprite = prefab.getChildByName("icon").getComponent(Sprite); // let loadUrl = "images/icons/icon_" + str + "/spriteFrame";

            var loadUrl = "images/icons/baseProperty/icon_" + str + "/spriteFrame";
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets); // prefab.getChildByName("description").getComponent(Label).string = this._nameConfig[str] + ":" + curLv;

            prefab.getChildByName("description").getComponent(Label).string = "Lv:" + curLv + "\n" + _this._nameConfig[str];
            prefab.getChildByName("value").getComponent(Label).string = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", str);
            var upgrade = prefab.getChildByName("upgrade");
            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).createButton(_this.node, prefab.getChildByName("icon"), "HeroInfoLayer", "onBtnBaseProperty", str);
            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).createButton(_this.node, upgrade, "HeroInfoLayer", "onBtnUpgrade", str);

            _this._propertyPrefabArr.push(prefab);
          };

          for (var i = 0; i < this._config.length; i++) {
            _loop();
          }
        }

        onSelectBtn(e, p) {
          if (e !== null) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("playOneShot", "common/通用按键");
          this.updateBtnSF(parseInt(p) - 1);

          switch (p) {
            case "1":
              this.onBtn1();
              break;

            case "2":
              this.onBtn2();
              break;

            default:
              throw "p is err,current p is " + p;
          }
        }

        updateBtnSF(index) {
          this._btnArr.forEach((btn, i) => {
            if (i == index) {
              btn.getComponent(Sprite).spriteFrame = this.selectBtnSF[2 * i + 1];
            } else {
              btn.getComponent(Sprite).spriteFrame = this.selectBtnSF[2 * i];
            }
          });
        }

        onBtn1() {
          this.openLayer(this._HPNode);
          var guideData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData");
          if (!guideData.HeroInfoLayerProperty) this.startPropertyGuide();
        }

        onBtn2() {
          this.updateStorageSpace();
          this.openLayer(this._SSNode);
          var guideData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData");
          if (!guideData.HeroInfoLayerSpace) this.startSpaceGuide();
        }

        openLayer(node) {
          this._layerNode.forEach(layer => {
            if (node == layer) layer.active = true;else layer.active = false;
          });
        } //动态创建的按钮事件 


        onBtnBaseProperty(e, p) {
          console.log("p", p);
          var description = this.getUpgradeDescription(p);
          this.tipsViewShow(description, 3);
        } // 升级基础属性


        onBtnUpgrade(e, p) {
          this.guideFinger.active = false;

          if (!(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData").TrainingLayer) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("initMainMenuByGuideData"); //当前引导完毕且修炼未引导
          } //判断道法果是否足够升级


          var itemName = this.isCanUpgrade(p);

          if (itemName) {
            // console.log("可以升级");
            //更新等级 刷新显示
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("reduceItemFromSS", itemName, 1);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "upgradeBaseProperty", p);
            var pLv = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBasePropertyCurLv", p);
            var pValue = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", p);
            var par = e.target.parent;
            par.getChildByName("description").getComponent(Label).string = "Lv:" + pLv + "\n" + this._nameConfig[p];
            var value = par.getChildByName("value");
            value.getComponent(Label).string = pValue;
            value.getComponent(Animation).play();
          } // let par = e.target

        } // 判断是否能够升级


        isCanUpgrade(pName) {
          var lv = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBasePropertyCurLv", pName);

          if (lv >= 50) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "已到达最大等级 无法升级");
            return false;
          }

          ;
          var itemName = "";
          var itemLv = Math.ceil(lv / 10);

          switch (itemLv) {
            case 1:
              itemName = "一阶道法果";
              break;

            case 2:
              itemName = "二阶道法果";
              break;

            case 3:
              itemName = "三阶道法果";
              break;

            case 4:
              itemName = "四阶道法果";
              break;

            case 5:
              itemName = "五阶道法果";
              break;

            default:
              console.warn("itemLv is " + itemLv);
              break;
          }

          var itemTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", itemName);

          if (itemTotal > 0) {
            return itemName;
          } else {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", itemName + "不足,无法升级");
            return false;
          }
        } // 获取升级详细信息


        getUpgradeDescription(pName) {
          var lv = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBasePropertyCurLv", pName);
          var lvDetail = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBasePropertyLvDetail", pName);
          console.log("lv", lv);
          console.log("lvDetail", lvDetail);
          var description = "";
          lvDetail.forEach((v, i) => {
            var str = i + 1 + ":" + v + ", ";
            description += str;
          });
          return description;
        } //显示信息


        tipsViewShow(string, time) {
          if (string === void 0) {
            string = "请传参";
          }

          if (time === void 0) {
            time = 1;
          }

          this._tipsViewNode.children[0].getComponent(Label).string = string;
          var animT = .5;
          var t1 = tween().to(animT, {
            scale: new Vec3(1, 1, 1)
          }, {
            onUpdate: (target, ratio) => {
              var color = target.getComponent(Sprite).color;
              target.getComponent(Sprite).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 255), ratio);
            }
          });
          var t2 = tween().to(animT, {
            scale: new Vec3(1, 1, 1)
          }, {
            onUpdate: (target, ratio) => {
              var color = target.getComponent(Sprite).color;
              target.getComponent(Sprite).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), ratio);
            }
          });
          var wait = tween().delay(time);
          var t = tween(this._tipsViewNode).sequence(t1, wait, t2);
          t.start();
        } // 刷新仓库


        updateStorageSpace() {
          var _this2 = this;

          while (this._itemPrefabArr.length > 0) {
            var prefab = this._itemPrefabArr.shift();

            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("SSLItemPrefab", prefab);
          }

          var list = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemList");

          var _loop2 = function _loop2() {
            var total = list[key];
            if (key == "灵石" || key == "3") return 1; // continue
            //不显示灵石

            var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemDataByIdOrName", key);
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("SSLItemPrefab");
            prefab.parent = _this2.itemPrefabPar;
            prefab.getChildByName("itemBg").getComponent(Sprite).spriteFrame = _this2.itemQBg[data.quality - 1];

            _this2.initPrefabLv(prefab, data);

            var sprite = prefab.getChildByName("sprite").getComponent(Sprite);
            var loadUrl = data.loadUrl;
            if (!data.loadUrl) loadUrl = "item_default";
            loadUrl = "images/items/" + loadUrl + "/spriteFrame";
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets, () => {
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("loadTheDirResources", "images/items/item_default/spriteFrame", assets => sprite.spriteFrame = assets);
            }); // prefab.getChildByName("total").getComponent(Label).string = "X" + total;

            prefab.getChildByName("total").getComponent(Label).string = total; // prefab.getChildByName("name").getComponent(Label).string = data.name;

            prefab.itemName = data.name; //用于索引

            _this2._itemPrefabArr.push(prefab); //创建按钮事件


            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).createButton(_this2.node, prefab.getChildByName("itemBg"), "HeroInfoLayer", "onBtnItem", key);
          };

          for (var key in list) {
            if (_loop2()) continue;
          }
        } // 初始化物品等级


        initPrefabLv(prefab, data) {
          var label = prefab.getChildByName("lv").getComponent(Label);

          if (data.type == "装备" && data.lv) {
            console.log("初始化阶");
            var list = {
              1: "一阶",
              2: "二阶",
              3: "三阶",
              4: "四阶",
              5: "五阶",
              6: "六阶",
              7: "七阶",
              8: "八阶",
              9: "九阶"
            };
            label.string = list[data.lv];
          } else label.string = "";
        } //点击按钮 

        /**
         * @description:通过物品类型 判断按钮回调
         *              材料 卖出 获取
         *              功法 跳转 功法界面
         *              丹药 跳转 修行界面
         *              道法果 属性学习界面 
         *              消耗品 仓库界面直接使用 
         *              others 只显示描述         
         * @param {*} e
         * @param {*} p
         */


        onBtnItem(e, p) {
          console.log("onBtnItem", p);
          this.guideFinger.active = false;
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemDataByIdOrName", p);
          this._curSelectItemData = data;

          switch (data.type) {
            case "材料":
              this.showItemDetail([0]);
              break;

            case "消耗品":
              //新手引导，未引导时只出现使用
              if (data.type2 == "道法果" && (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getGuideData").HeroInfoLayerProperty) this.showItemDetail([0, 1]);else this.showItemDetail([0, 1]);
              break;

            case "others":
              console.log("others 还没写");
              break;

            case "可合成材料":
              this.showItemDetail([0, 2]);
              break;

            case "装备":
              this.showItemDetail([0, 1]);
              break;

            default:
              console.warn("未处理的类型：" + data.type);
              break;
          }
        } // 查看装备信息


        viewEquDetail(e) {
          var node = e.target;
          this._curSelectItemData = node.data;
          this.showItemDetail();
        }
        /**
         * @description: 展示物品细节
         * @param {number} showBtnArr 需要显示的按钮的索引  0:卖出；1:使用 2:合成 
         */


        showItemDetail(showBtnArr) {
          if (showBtnArr === void 0) {
            showBtnArr = [];
          }

          console.log("showItemDetail", this._curSelectItemData);
          var colorStr = this.getColorStrByQuality(this._curSelectItemData.quality - 1);
          this.maskPar.getChildByName("name").getComponent(RichText).string = colorStr + this._curSelectItemData.name + "</color>";
          this.maskPar.getChildByName("description").getComponent(RichText).string = this._curSelectItemData.description;
          if (this._curSelectItemData.type == "装备") this.showEquDetail();
          var btnPar = this.maskPar.getChildByName("btnPar");
          btnPar.children.forEach((child, index) => {
            if (showBtnArr.indexOf(index) > -1) child.active = true;else child.active = false;
          });
          this.maskPar.active = true;
        }

        showEquDetail() {
          console.log("展示装备详情");
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getEquDataByName", this._curSelectItemData.name);
          var effects = data.qData.effect; //根据quality 设置颜色 还没写

          var string = "";

          for (var id of effects) {
            var effect = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "getEquEffectData", id);
            console.log("effect", effect); // let colorStr = this.getColorStrByQuality(effect.quality - 1);

            var colorStr = this.getColorStrByType(effect.type - 1);
            string = string + colorStr + effect.name + ":" + effect.description + "</color>\n";
          }

          if (data.lData.baseDamage) string = string + "基础伤害:+" + data.lData.baseDamage + "\n";
          if (data.lData.damageTimes) string = string + "伤害加成倍数:+" + data.lData.damageTimes + "\n";
          if (data.lData.attackInterval) string = string + "攻击间隔:" + data.lData.attackInterval + "\n";
          if (data.lData.blood) string = string + "血量:+" + data.lData.blood + "\n";
          if (data.lData.CHR) string = string + "暴击率:+" + data.lData.CHR + "\n";
          if (data.lData.moveSpeed) string = string + "移动速度:+" + data.lData.moveSpeed + "\n";
          console.log("showEquDetail", string);
          this.maskPar.getChildByName("description").getComponent(RichText).string = string; // console.log("showEquDetail",string);
        } // 通过物品品质 获得 物品颜色值


        getColorStrByType(index) {
          index > 2 ? 2 : index;
          return ["<color=#757575>", "<color=#A474CF>", "<color=#DDA75A>"][index];
        }

        getColorStrByQuality(index) {
          index > 4 ? 4 : index;
          return ["<color=#599A65>", "<color=#728CC7>", "<color=#A474CF>", "<color=#C65C37>", "<color=#DDA75A>"][index]; // return ["<color=#7EFFA7>","<color=#7EEAFF>","<color=#837EFF>","<color=#FFB77E>","<color=#FFE000>"][index];
        }

        onBtnSell() {
          this.showProgressBar();
          this.showItemDetail([3, 4]);
        } // 确定卖出


        onBtnConfirmSell() {
          console.log("确定卖出");
          var progress = find("/itemDetail/ProgressBar", this.node).getComponent(ProgressBar).progress;
          var data = this._curSelectItemData;
          var total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", data.name);
          total = Math.floor(total * progress);
          var totalPrice = data.price * total; // console.log("卖出物品总数：" + total);
          // console.log("卖出物品总价格：" + totalPrice);

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("reduceItemFromSS", data.name, total); //卖出物品

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", "灵石", totalPrice); //获得灵石

          this.updateStorageSpace();
          this.maskPar.active = false;
          find("Canvas/menuLayer/title/lingshiTotalBg/total").getComponent(Label).string = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", "灵石");
          this.closeProgressBar();
        } // 取消卖出


        onBtnCancelSell() {
          // this.closeProgressBar();
          this.closeItemDetail();
        } //展示进度条


        showProgressBar() {
          var pb = find("/itemDetail/ProgressBar", this.node);
          pb.getComponent(ProgressBar).progress = 0;
          pb.getComponent(Slider).progress = 0;
          var total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", this._curSelectItemData.name);
          pb.getChildByName("Label").getComponent(Label).string = "数量：" + 0 + "/" + total + "\n" + "价格：0";
          pb.active = true;
        } //关闭进度条


        closeProgressBar() {
          find("/itemDetail/ProgressBar", this.node).active = false;
        } // 滑动滑动器  进图条跟随滑动器刷新


        slideProgressBar(slider) {
          var pb = find("/itemDetail/ProgressBar", this.node);
          var progress = slider.progress;
          pb.getComponent(ProgressBar).progress = progress;
          var total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", this._curSelectItemData.name);
          var sellTotal = Math.floor(total * progress);
          var totalPrice = sellTotal * this._curSelectItemData.price;
          pb.getChildByName("Label").getComponent(Label).string = "数量：" + sellTotal + "/" + total + "\n" + "价格：" + totalPrice;
        } //使用物品


        onBtnUsing() {
          if (this._curSelectItemData.type == "装备") {
            this.closeItemDetail();
            this.switchEqu();
            return;
          }

          switch (this._curSelectItemData.type2) {
            case "道法果":
              this.closeItemDetail();
              this.onSelectBtn(null, "1");
              break;
              ;

            case "丹药":
              this.closeItemDetail();
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("switchMainMenuLayer", null, "3");
              break;
              ;

            case "功法":
              this.closeItemDetail();
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("switchMainMenuLayer", null, "5");
              break;

            case "宝箱":
              this.openTreasureChest();
              break;

            case "装备箱":
              this.openEquBox();
              break;

            default:
              console.warn("未处理的类型" + this._curSelectItemData.type2);
              break;
          }
        } // 打开装备箱


        openEquBox() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("reduceItemFromSS", this._curSelectItemData.name, 1);
          this.maskPar.active = false;
          var gets = this.getEquByBoxType();
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("showGets", gets);

          for (var key in gets) {
            if (Object.prototype.hasOwnProperty.call(gets, key)) {
              // console.log("key", key);
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("addItemToSS", key, gets[key]);
            }
          }

          ;
          this.updateStorageSpace();
        } // 通过装备箱类型 获得装备


        getEquByBoxType() {
          var gets = {};
          var probabilityArray = this._equProbabilityList[this._curSelectItemData.quality];
          if (!probabilityArray) throw "probabilityArray is error";
          var qList = ["破旧", "实用", "稀有", "传说", "史诗"];
          var random = Math.random();
          var quality;

          for (var i = 0; i < probabilityArray.length; i++) {
            var probability = probabilityArray[i];

            if (probability > random) {
              quality = qList[i];
              break;
            }
          }

          ;
          if (!quality) throw "quality is error.";

          var weaponName = this._equList[Math.random() * this._equList.length | 0];

          var equ = quality + weaponName + "（一阶）";
          gets[equ] = 1;
          console.log("equ", equ);
          return gets;
        } // 打开宝箱


        openTreasureChest() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("reduceItemFromSS", this._curSelectItemData.name, 1);
          this.maskPar.active = false;
          var itemName = this._curSelectItemData.name;
          var rewardArr = this._rewardConfig[itemName];
          var ratioArr = this._rewardConfig[itemName + "Ratio"]; // console.log("rewardArr", rewardArr);
          // console.log("ratioArr", ratioArr);

          var isSingle = ratioArr.every(ratio => {
            return ratio <= 1;
          });
          var gets = {};

          if (isSingle) {
            var random = Math.random();
            var index;

            for (var i = 0; i < ratioArr.length; i++) {
              var ratio = ratioArr[i];

              if (ratio >= random) {
                index = i;
                break;
              }

              ;
            }

            gets[rewardArr[index]] = 1;
          } else {
            for (var _i = 0; _i < rewardArr.length; _i++) {
              var reward = rewardArr[_i];
              var _ratio = ratioArr[_i];

              if (_ratio > 1) {
                //概率大于1  说明可能不止一个物品
                var _total = Math.random() * _ratio | 0;

                if (_total > 0) gets[reward] = _total;
              } else {
                //概率小于1 只有这个物品 且不一定获得
                if (Math.random() < _ratio) gets[reward] = 1;
              }

              ;
            }

            ;
          }

          console.log("gets", gets);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("showGets", gets); //将获得的物品gets 添加到仓库

          for (var key in gets) {
            if (Object.prototype.hasOwnProperty.call(gets, key)) {
              console.log("key", key);
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("addItemToSS", key, gets[key]);
            }
          }

          this.updateStorageSpace();
          var total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", "灵石");
          find("Canvas/menuLayer/title/lingshiTotalBg/total").getComponent(Label).string = total;
        } //合成


        onBtnMerge() {
          this.maskPar.active = false;
          var data = this._curSelectItemData;
          var curTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", data.name);

          if (curTotal < data.mergeDemandTotal) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", data.name + "数量不足，无法合成");
          } else {
            var getTotal = Math.floor(curTotal / data.mergeDemandTotal);
            var consumeTotal = getTotal * data.mergeDemandTotal;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("reduceItemFromSS", data.name, consumeTotal);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", data.mergeTarget, getTotal);
            var gets = {};
            gets[data.mergeTarget] = getTotal;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("showGets", gets);
            this.updateStorageSpace();
          }
        } //关闭物品详情


        closeItemDetail() {
          this.closeProgressBar();
          this.maskPar.active = false;
        } //=====================装备栏=======================


        initHeroCurEqu() {
          var list = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getAllEquData"); // console.log("list", list);

          for (var key in list) {
            var equName = list[key];

            if (equName) {
              var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getItemDataByIdOrName", equName); // console.log("key", key);
              // console.log("data", data);

              this.takeEqu(key, data);
            }
          }
        } // 切换装备


        switchEqu() {
          var data = this._curSelectItemData;
          var type = data.type2; // 卸下装备

          var curEquName = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getEquNameByType", type);
          if (curEquName) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", curEquName, 1); //装备存在 则卸下装备
          // 穿上装备

          this.takeEqu(type, data);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "switchEqu", type, data.name);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("reduceItemFromSS", data.name, 1); //装备新装备 从仓库删除物品

          this.updateStorageSpace(); // 刷新仓库
        } // 穿上装备


        takeEqu(type, data) {
          var loadUrl = data.loadUrl;
          if (!loadUrl) loadUrl = "item_default";
          loadUrl = "images/items/" + loadUrl + "/spriteFrame";
          find("heroInfoBg/" + type, this.node).getComponent(Sprite).spriteFrame = this.itemQBg[data.quality - 1];
          var sprite = find("heroInfoBg/" + type + "/sprite", this.node).getComponent(Sprite);
          sprite.node.data = data;
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).createButton(this.node, sprite.node, "HeroInfoLayer", "viewEquDetail");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);
          var label = find("heroInfoBg/" + type + "/label", this.node).getComponent(Label);
          console.log("data.lv", data.lv);

          if (data.lv) {
            var list = {
              1: "一阶",
              2: "二阶",
              3: "三阶",
              4: "四阶",
              5: "五阶",
              6: "六阶",
              7: "七阶",
              8: "八阶",
              9: "九阶"
            };
            label.string = list[data.lv];
          } else label.string = "";
        } // 开始新手引导 设置角色引导完成


        startHeroInfoLayerGuide() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("setGuideData", "HeroInfoLayer", true);
          find("Canvas/menuLayer/guideFinger").active = false;
        } //开始仓库新手引导


        startSpaceGuide() {
          // 赠送物品道法果
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", "一阶道法果", 1);
          var tips = "获得物品一阶道法果x1";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", tips);
          this.updateStorageSpace();
          var item = null;
          console.log("this._itemPrefabArr", this._itemPrefabArr);

          for (var prefab of this._itemPrefabArr) {
            if (prefab.itemName == "一阶道法果") {
              item = prefab;
              break;
            }
          }

          if (item) {
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
            action.tag(2);
            action.start();
          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("setGuideData", "HeroInfoLayerSpace", true); // em.dispatch("initMainMenuByGuideData");
        } //开始属性引导


        startPropertyGuide() {
          Tween.stopAllByTag(2);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("openGuideTips", "点击属性末端的按钮+，可以提升相应的属性。一阶道法果可以提升1到10级的基础属性。当等级到达一定程度后必须使用更高阶的道法果提升属性。");
          var firstProperty = this._propertyPrefabArr[1];
          var guide = this.guideFinger;
          guide.active = true;
          guide.parent = firstProperty.getChildByName("upgrade");
          guide.setPosition(0, 200, 0);
          var a1 = tween().by(0.5, {
            position: new Vec3(0, -100, 0)
          });
          var a2 = tween().by(0.5, {
            position: new Vec3(0, 100, 0)
          });
          var action = tween(guide).sequence(a1, a2);
          action = tween(guide).repeatForever(action);
          action.tag(2);
          action.start();
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("setGuideData", "HeroInfoLayerProperty", true);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "selectBtnSF", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "HPPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "HPPrefabPar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefabPar", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maskPar", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "guideFinger", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "adGetBox", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "adGetEqu", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "itemQBg", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a1155790e31bcce35321467ae94da1be0ef6f9d.js.map