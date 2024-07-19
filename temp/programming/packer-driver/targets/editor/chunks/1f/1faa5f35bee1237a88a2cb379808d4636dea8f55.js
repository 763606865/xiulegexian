System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, find, SpriteFrame, instantiate, Sprite, Label, Color, NodePool, Material, tween, Vec3, em, glf, plm, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, MakePillsLayer;

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
      find = _cc.find;
      SpriteFrame = _cc.SpriteFrame;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      Color = _cc.Color;
      NodePool = _cc.NodePool;
      Material = _cc.Material;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      glf = _unresolved_3.glf;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55a8d2wX7hDXZkw04oDRSeH", "MakePillsLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-08 17:30:34
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-12 21:27:02
       * @FilePath: \to-be-immortal\assets\script\mainMenu\MakePillsLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'find', 'SpriteFrame', 'instantiate', 'Sprite', 'Label', 'Color', 'NodePool', 'Material', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MakePillsLayer", MakePillsLayer = (_dec = ccclass('MakePillsLayer'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property([SpriteFrame]), _dec5 = property(Node), _dec6 = property(Material), _dec7 = property(Material), _dec8 = property(Node), _dec9 = property(Prefab), _dec(_class = (_class2 = class MakePillsLayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pillPrefab", _descriptor, this);

          _initializerDefineProperty(this, "itemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "pillSF", _descriptor3, this);

          _initializerDefineProperty(this, "itemPar", _descriptor4, this);

          _initializerDefineProperty(this, "grayMaterial", _descriptor5, this);

          _initializerDefineProperty(this, "defaultMaterial", _descriptor6, this);

          _initializerDefineProperty(this, "guideFinger", _descriptor7, this);

          _initializerDefineProperty(this, "tipsPrefab", _descriptor8, this);

          this._curPillData = void 0;
          this._pillPar = void 0;
          this._pillPrefabArr = [];
          this._itemPrefabArr = [];
          //下方丹药数量显示
          this._pillListConfig = [{
            "id": 4,
            "name": "炼气丹",
            "imageIndex": 0,
            "description": "提升修为，通过妖丹炼制",
            "consumeTotal": 10,
            "consumeItemName": "一阶妖丹",
            "consumeLingshi": 50
          }, {
            "id": 5,
            "name": "筑基丹",
            "imageIndex": 1,
            "description": "提升修为，通过妖丹炼制",
            "consumeTotal": 10,
            "consumeItemName": "二阶妖丹",
            "consumeLingshi": 500
          }, {
            "id": 6,
            "name": "金元丹",
            "imageIndex": 2,
            "description": "提升修为，通过妖丹炼制",
            "consumeTotal": 10,
            "consumeItemName": "三阶妖丹",
            "consumeLingshi": 5000
          }, {
            "id": 7,
            "name": "元婴丹",
            "imageIndex": 3,
            "description": "提升修为，通过妖丹炼制",
            "consumeTotal": 10,
            "consumeItemName": "四阶妖丹",
            "consumeLingshi": 50000
          }, {
            "id": 8,
            "name": "化神丹",
            "imageIndex": 4,
            "description": "提升修为，通过妖丹炼制",
            "consumeTotal": 10,
            "consumeItemName": "五阶妖丹",
            "consumeLingshi": 500000
          }];
        }

        onLoad() {
          this._pillPar = find("/selectPill/sliding/content", this.node); // plm.addPoolToPools("MPLPillPrefab",new NodePool(),this.pillPrefab);//不需要回收 无需生成对象池

          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("MPLItemPrefab", new NodePool(), this.itemPrefab);
          this.initPillList();
          this._curPillData = this._pillListConfig[0];
          this.updatePillState(this._pillPrefabArr[0]); // this.updateMaterialDemand();

          let tipsTexPool = new NodePool();
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("tipsTex", tipsTexPool, this.tipsPrefab);
          this.initStoveBtn();
        } // 初始化炼丹列表


        initPillList() {
          this._pillListConfig.forEach((data, index) => {
            let pill = instantiate(this.pillPrefab); // let pill = plm.getFromPool("MPLPillPrefab");

            pill.parent = this._pillPar;
            pill.getChildByName("sprite").getComponent(Sprite).spriteFrame = this.pillSF[data.imageIndex];
            pill.getChildByName("name").getComponent(Label).string = data.name;
            let total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemTotalByIdOrName", data.name);
            pill.getChildByName("total").getComponent(Label).string = total;
            pill.data = data; //可以直接通过节点获取

            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).createButton(this.node, pill, "MakePillsLayer", "onBtnPill");

            this._pillPrefabArr.push(pill);
          });
        } // 刷新炼丹列表丹药数量


        updatePillList() {
          for (const pill of this._pillPrefabArr) {
            let data = pill.data;
            let total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemTotalByIdOrName", data.name);
            pill.getChildByName("total").getComponent(Label).string = total;
          }
        } // 初始化丹炉按钮


        initStoveBtn() {
          let btn = find("/stove", this.node); // btn.on("touchstart",this.onBtnMakePill,this);

          let callback = () => {
            this.onBtnMakePill();
          };

          btn.on(Node.EventType.TOUCH_START, () => {
            this.onBtnMakePill();
            this.schedule(callback, 0.1);
          }, this);
          btn.on(Node.EventType.TOUCH_END, () => {
            this.unschedule(callback);
          }, this);
        }

        onEnable() {
          // this.updatePillsContent();
          this.updateMaterialDemand();
          let guideData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData");

          if (!guideData.MakePillsLayer) {
            this.startMakePillsLayerGuide();
          }
        }

        onBtnPill(e) {
          let node = e.target;
          this._curPillData = node.data;
          console.log("_curPillData", this._curPillData);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("playOneShot", "common/通用按键");
          this.updatePillState(node);
          this.updateMaterialDemand();
        } //刷新丹药选择状态


        updatePillState(node) {
          this._pillPrefabArr.forEach(pill => {
            if (pill === node) {
              pill.getChildByName("name").getComponent(Label).color = new Color(255, 204, 0, 255);
            } else {
              // pill.getChildByName("name").getComponent(Label).color = new Color(0, 0, 0, 255);
              pill.getChildByName("name").getComponent(Label).color = new Color(255, 255, 255, 255);
            }
          });
        } // 刷新需要材料显示 妖丹和灵石


        updateMaterialDemand() {
          console.log("this._curPillData ", this._curPillData);
          let m1 = find("/stove/m1", this.node);
          let m2 = find("/stove/m2", this.node);
          let data1 = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemDataByIdOrName", this._curPillData.consumeItemName);
          let data2 = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemDataByIdOrName", "灵石");
          let t1 = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", this._curPillData.consumeItemName);
          let t2 = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemTotalByIdOrName", "灵石");
          let s1 = m1.getChildByName("sprite").getComponent(Sprite);
          let s2 = m2.getChildByName("sprite").getComponent(Sprite);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", "images/items/" + data1.loadUrl + "/spriteFrame", assets => s1.spriteFrame = assets);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", "images/items/" + data2.loadUrl + "/spriteFrame", assets => s2.spriteFrame = assets);
          let l1 = m1.getChildByName("Label").getComponent(Label);
          let l2 = m2.getChildByName("Label").getComponent(Label);
          let l12 = m1.getChildByName("Label2").getComponent(Label);
          let l22 = m2.getChildByName("Label2").getComponent(Label);
          m1.getChildByName("nameBg").getChildByName("Label").getComponent(Label).string = data1.name;
          m2.getChildByName("nameBg").getChildByName("Label").getComponent(Label).string = data2.name;
          l1.string = "x" + this._curPillData.consumeTotal;
          l2.string = "x" + this._curPillData.consumeLingshi;
          l12.string = t1;
          l22.string = t2;
          this.scheduleOnce(() => {
            if (t1 >= this._curPillData.consumeTotal) {
              s1.material = this.defaultMaterial;
            } else {
              s1.material = this.grayMaterial;
            }

            if (t2 >= this._curPillData.consumeLingshi) {
              s2.material = this.defaultMaterial;
            } else {
              s2.material = this.grayMaterial;
            }
          }, 0); // l1.string = data1.name + "\n需要：" + this._curPillData.consumeTotal + "\n拥有：" + t1;
          // l2.string = data2.name + "\n需要：" + this._curPillData.consumeLingshi + "\n拥有：" + t2;
        }

        onBtnMakePill() {
          this.guideFinger.active = false;

          if (!(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData").MakePillsLayer) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("setGuideData", "MakePillsLayer", true);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("initMainMenuByGuideData");
          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("playOneShot", "common/炼制丹药");
          let itemIsEnough = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("itemIsEnough", this._curPillData.consumeItemName, this._curPillData.consumeTotal);
          let lingshiIsEnough = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("itemIsEnough", "灵石", this._curPillData.consumeLingshi);

          if (itemIsEnough && lingshiIsEnough) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("reduceItemFromSS", this._curPillData.consumeItemName, this._curPillData.consumeTotal);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("reduceItemFromSS", "灵石", this._curPillData.consumeLingshi);
            console.log(this._curPillData.name + "+1");
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", this._curPillData.id, 1);
            this.updatePillList();
            this.updateMaterialDemand();
            this.createTipsTex(this._curPillData.name + "+1");
            let total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemTotalByIdOrName", "灵石");
            find("Canvas/menuLayer/title/lingshiTotalBg/total").getComponent(Label).string = total;
          } else {
            let tips = "";
            if (!itemIsEnough && !lingshiIsEnough) tips = "妖丹和灵石不足，无法炼制。";else if (!itemIsEnough) tips = "妖丹不足，无法炼制。";else tips = "灵石不足，无法炼制。";
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", tips);
          }
        } //=================创建提示信息===============


        createTipsTex(content, initPos = {
          x: 0,
          y: 100
        }) {
          let tex = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("tipsTex");
          tex.getComponent(Label).string = content;
          tex.parent = find("Canvas/menuLayer/MakePillsLayer/tipsPar");
          tex.setPosition(initPos.x, initPos.y, 0);
          this.playTIPSTeXEffect(tex);
        }

        playTIPSTeXEffect(tex, color = new Color(255, 255, 255, 255)) {
          let a1 = tween().by(1, {
            position: new Vec3(0, 200, 0)
          }, {
            onUpdate: (target, ratio) => {
              // if(ratio>0.5) tex.getComponent(Label).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), (ratio -0.5)*2);
              tex.getComponent(Label).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), ratio);
            }
          });
          let a2 = tween().to(0.5, {
            scale: new Vec3(1.2, 1.2, 1)
          });
          let action = tween(tex).parallel(a1, a2).call(() => {
            tex.setScale(new Vec3(1, 1, 1));
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("tipsTex", tex, true);
          });
          action.start();
        }

        startMakePillsLayerGuide() {
          this.guideFinger.active = true;
          find("Canvas/menuLayer/guideFinger").active = false;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", "一阶妖丹", 10);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", "灵石", 50);
          let tips = "获得物品一阶妖丹x10、灵石x50";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", tips);
          this.updateMaterialDemand();
          let guideTips = "点击丹炉，炼制丹药，提升修为。当材料不足时，材料图片会置灰。可以通过修炼场获取材料。";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("openGuideTips", guideTips);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pillPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pillSF", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "itemPar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "grayMaterial", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "guideFinger", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "tipsPrefab", [_dec9], {
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
//# sourceMappingURL=1faa5f35bee1237a88a2cb379808d4636dea8f55.js.map