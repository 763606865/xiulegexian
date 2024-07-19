System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, instantiate, Label, find, director, JsonAsset, UITransform, Sprite, Material, ScrollView, em, ggd, glf, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, SelectCheckpointLayer;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      find = _cc.find;
      director = _cc.director;
      JsonAsset = _cc.JsonAsset;
      UITransform = _cc.UITransform;
      Sprite = _cc.Sprite;
      Material = _cc.Material;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      glf = _unresolved_4.glf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94db5bEjvBPh5zPA2EHobww", "SelectStageLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-05 11:37:53
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-12-11 21:09:53
       * @FilePath: \to-be-immortal\assets\script\mainMenu\SelectStageLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Label', 'find', 'director', 'input', 'Input', 'JsonAsset', 'UITransform', 'utils', 'UI', 'Sprite', 'Material', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SelectCheckpointLayer", SelectCheckpointLayer = (_dec = ccclass('SelectStageLayer'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(JsonAsset), _dec5 = property(JsonAsset), _dec6 = property(JsonAsset), _dec7 = property(Material), _dec8 = property(Material), _dec9 = property(Node), _dec(_class = (_class2 = class SelectCheckpointLayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "SCPrefab", _descriptor, this);

          _initializerDefineProperty(this, "prefabPar", _descriptor2, this);

          _initializerDefineProperty(this, "stageConfigJson", _descriptor3, this);

          _initializerDefineProperty(this, "stageDesJson", _descriptor4, this);

          _initializerDefineProperty(this, "stageStrongJson", _descriptor5, this);

          _initializerDefineProperty(this, "grayMaterial", _descriptor6, this);

          _initializerDefineProperty(this, "defaultMaterial", _descriptor7, this);

          _initializerDefineProperty(this, "stageDetail", _descriptor8, this);

          this._isLoading = false;
          this._mapName = {
            "1": "青青草原",
            "2": "暗黑大陆",
            "3": "晨星荒漠",
            "4": "绝命谷",
            "5": "寂静岭",
            "6": "灼烧大陆",
            "7": "无声荒漠",
            "8": "虚无之地",
            "9": "极寒之地",
            "10": "魔幻大陆"
          };
          this._prefabArr = [];
          this._initPos = {
            y: -300,
            gap: -400,
            changePos: 1000,
            changeRank: 5
          };
          this._stageTotal = 0;
        }

        onLoad() {
          this._stageTotal = this.getStageTotal();
          this.initPrefabs();
        }

        onEnable() {
          // this.updatePrefabs();
          //刷新材质
          this.scheduleOnce(() => {
            for (const prefab of this._prefabArr) {
              if (prefab.stageNum > (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
                error: Error()
              }), ggd) : ggd).stageProgress) {
                prefab.getComponent(Sprite).material = this.grayMaterial;
              } else {
                prefab.getComponent(Sprite).material = this.defaultMaterial;
              }
            }
          }, 0);
          let percentage = ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stageProgress - 1) / (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).totalStage;
          this.node.getChildByName("bg").getComponent(ScrollView).scrollToPercentVertical(1 - percentage, 0.1);
        } //获取关卡总数


        getStageTotal() {
          let all = this.stageConfigJson.json;
          let len = 0;

          for (const key in all) {
            if (Object.prototype.hasOwnProperty.call(all, key)) {
              len++;
            }
          }

          return len; // return 60;
        }

        initPrefabs() {
          let total = 5;

          for (let i = 0; i < total; i++) {
            let prefab = instantiate(this.SCPrefab);
            prefab.parent = this.prefabPar;
            prefab.setPosition(0, this._initPos.y + i * this._initPos.gap);
            let stageNum = i + 1;
            prefab.stageNum = stageNum;

            if (prefab.stageNum > (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stageProgress) {
              prefab.getChildByName("btnBg").getChildByName("stageLock").active = true;
              prefab.getComponent(Sprite).material = this.grayMaterial;
            } else {
              prefab.getChildByName("btnBg").getChildByName("stageLock").active = false;
              prefab.getComponent(Sprite).material = this.defaultMaterial;
            }

            prefab.getChildByName("Label").getComponent(Label).string = "第" + stageNum + "关";
            let btNode = prefab.getChildByName("btnBg");
            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).createButton(this.node, btNode, "SelectStageLayer", "onBtnEnter");

            this._prefabArr.push(prefab); // this.showStageDetail(stageNum);


            let detail = prefab.getChildByName("detail");
            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).createButton(this.node, detail, "SelectStageLayer", "showStageDetail");
          }

          ;
          let UIT = this.prefabPar.getComponent(UITransform);
          let toBottom = 200;
          UIT.setContentSize(UIT.width, this._stageTotal * Math.abs(this._initPos.gap) + toBottom); // UIT.setContentSize(UIT.width, this._stageTotal * Math.abs(this._initPos.gap));
          // this.prefabPar.height = this._stageTotal * Math.abs(this._initPos.gap);
        }
        /**
         * @description 展示关卡详情
         * @param {Node} prefab 通过prefab.stageNum 属性 获取相应关卡详情
        */


        showStageDetail(e) {
          let prefab = e.target.parent;
          this.stageDetail.active = true;
          let stageNum = prefab.stageNum;
          let des = "";
          if (stageNum > (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stageProgress) des = "尚未可知。";else des = this.getStageDesByStageNum(stageNum);
          find("bg/title", this.stageDetail).getComponent(Label).string = "第" + stageNum + "关";
          find("bg/content", this.stageDetail).getComponent(Label).string = des;
        }

        getStageDesByStageNum(stageNum) {
          let des = "";
          let stageData = this.stageConfigJson.json["stage" + stageNum];
          des = "游戏时长：" + stageData[stageData.length - 1].time / 60 + "分钟";
          des += "\n";
          if (stageNum <= 5) des += "建议等级：炼气期\n通关奖励：一阶物品";else if (stageNum <= 10) des += "建议等级：筑基期\n通关奖励：二阶物品";else if (stageNum <= 20) des += "建议等级：结丹期\n通关奖励：三阶物品";else if (stageNum <= 40) des += "建议等级：元婴期\n通关奖励：四阶物品";else des += "通关奖励：五阶物品\n建议等级：化神期";
          if (this.stageDesJson.json["stage" + stageNum]) des = des + "\n关卡描述：" + this.stageDesJson.json["stage" + stageNum];
          let strongList = this.stageStrongJson.json["stage" + stageNum];

          if (strongList && (strongList.blood || strongList.damage || strongList.moveSpeed)) {
            des = des + "\n怪物属性强化：";
            if (strongList.blood) des = des + "\n血量增加" + strongList.blood * 100 + "%";
            if (strongList.damage) des = des + "\n伤害增加" + strongList.damage * 100 + "%";
            if (strongList.moveSpeed) des = des + "\n移速增加" + strongList.moveSpeed * 100 + "%";
          }

          return des;
        } // getStageDesByStageNum(stageNum) {
        //     let des = "";
        //     let stageData = this.stageConfigJson.json["stage" + stageNum];
        //     des = "游戏时长：" + stageData[stageData.length - 1].time / 60 + "分钟";
        //     des += "\n";
        //     if (stageNum <= 5) des += "通关奖励：一阶物品\n建议等级：炼气期";
        //     else if (stageNum <= 10) des += "通关奖励：二阶物品\n建议等级：筑基期";
        //     else if (stageNum <= 20) des += "通关奖励：三阶物品\n建议等级：结丹期";
        //     else if (stageNum <= 40) des += "通关奖励：四阶物品\n建议等级：元婴期";
        //     else des += "通关奖励：五阶物品\n建议等级：化神期";
        //     des = des + "\n关卡描述：" + this.stageDesJson.json["stage" + stageNum];;
        //     return des;
        // }


        onBtnCloseDetail() {
          this.stageDetail.active = false;
        }

        onBtnCheckpoint(e) {
          let prefab = e.target.parent;
          console.log("onBtnCheckpoint", prefab.stageNum);
          this.onBtnEnter(e);
        } //循环使用预制件


        update(dt) {
          this.updatePrefabs();
        }

        updatePrefabs() {
          let wp = this.prefabPar.parent.getWorldPosition();

          for (let i = 0; i < this._prefabArr.length; i++) {
            let prefab = this._prefabArr[i];
            let pwp = prefab.getWorldPosition();

            if (pwp.y - wp.y > this._initPos.changePos && prefab.stageNum + this._initPos.changeRank <= this._stageTotal) {
              //下移
              let offset = this._initPos.changeRank * this._initPos.gap;
              prefab.setWorldPosition(pwp.x, pwp.y + offset, pwp.z);
              prefab.stageNum += this._initPos.changeRank;
              prefab.getChildByName("Label").getComponent(Label).string = "第" + prefab.stageNum + "关";
            } else if (pwp.y - wp.y < -this._initPos.changePos && prefab.stageNum - this._initPos.changeRank >= 1) {
              //上移
              let offset = this._initPos.changeRank * this._initPos.gap;
              prefab.setWorldPosition(pwp.x, pwp.y - offset, pwp.z);
              prefab.stageNum -= this._initPos.changeRank;
              prefab.getChildByName("Label").getComponent(Label).string = "第" + prefab.stageNum + "关";
            } //刷新材质


            if (prefab.stageNum > (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stageProgress) {
              prefab.getChildByName("btnBg").getChildByName("stageLock").active = true;
              prefab.getComponent(Sprite).material = this.grayMaterial;
            } else {
              prefab.getChildByName("btnBg").getChildByName("stageLock").active = false;
              prefab.getComponent(Sprite).material = this.defaultMaterial;
            }
          }
        } //点击进入关卡


        onBtnEnter(e) {
          let p = e.target.parent.stageNum;
          if (this._isLoading) return;
          this._isLoading = true;
          console.log("进入关卡" + p);

          if (p <= (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).totalStage) {
            this.openLoading();
            (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).curStage = parseInt(p); // director.loadScene("game");

            console.log("切换音效");
            director.loadScene("game", () => {
              // em.dispatch("switchMainBgm","/audio/music/风声");
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("switchMainBgm", "/audio/music/不谓侠");
            });
          } else {
            console.warn("current stage is  undefined");
            this._isLoading = false;
          }
        }

        openLoading() {
          find("Canvas/loading").active = true;
        } // 解锁下一关


        onBtnChangeStage() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stageProgress++;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingGlobalDataToTempData");
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "SCPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "prefabPar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "stageConfigJson", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "stageDesJson", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stageStrongJson", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "grayMaterial", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stageDetail", [_dec9], {
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
//# sourceMappingURL=34f7f5d2a50619b6b1b155aa12cbe4c6ca674173.js.map