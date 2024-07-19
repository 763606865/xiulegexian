System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, SpriteFrame, Label, Material, RichText, em, glf, plm, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, UpgradeEquLvLayer;

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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Label = _cc.Label;
      Material = _cc.Material;
      RichText = _cc.RichText;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      glf = _unresolved_3.glf;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9eccbI35tOeYxKuki3kLFS", "UpgradeEquLvLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'Label', 'Material', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpgradeEquLvLayer", UpgradeEquLvLayer = (_dec = ccclass('UpgradeEquLvLayer'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Material), _dec7 = property(Material), _dec8 = property([SpriteFrame]), _dec9 = property([Node]), _dec(_class = (_class2 = class UpgradeEquLvLayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemContent", _descriptor, this);

          _initializerDefineProperty(this, "curSelect", _descriptor2, this);

          _initializerDefineProperty(this, "target", _descriptor3, this);

          _initializerDefineProperty(this, "maskPar", _descriptor4, this);

          _initializerDefineProperty(this, "grayMaterial", _descriptor5, this);

          _initializerDefineProperty(this, "defaultMaterial", _descriptor6, this);

          _initializerDefineProperty(this, "itemQBg", _descriptor7, this);

          _initializerDefineProperty(this, "materialNode", _descriptor8, this);

          this._itemPrefabArr = [];
          this._curSelectItemData = void 0;
          this._canUpgrade = false;
          this._materialList = {
            2: {
              "灵石": 1000,
              "炼气丹": 20
            },
            3: {
              "灵石": 10000,
              "筑基丹": 40
            },
            4: {
              "灵石": 100000,
              "金元丹": 100
            },
            5: {
              "灵石": 100000,
              "元婴丹": 200
            }
          };
        }

        onLoad() {
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).createButton(this.node, this.curSelect, "UpgradeEquLvLayer", "onBtnEqu");
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).createButton(this.node, this.target, "UpgradeEquLvLayer", "onBtnEqu");
        }

        onEnable() {
          this.updateEquList();
        }

        onDisable() {
          this.recoveryDefault();
        } // 恢复默认状态


        recoveryDefault() {
          for (const node of this.materialNode) {
            node.getComponent(Sprite).spriteFrame = null;
            node.getChildByName("Label").getComponent(Label).string = "";
          }

          ;
          this.curSelect.getChildByName("Sprite").getComponent(Sprite).spriteFrame = null;
          this.target.getChildByName("Sprite").getComponent(Sprite).spriteFrame = null;
          this.curSelect.getComponent(Sprite).spriteFrame = this.itemQBg[0];
          this.target.getComponent(Sprite).spriteFrame = this.itemQBg[0];
          this.curSelect.getChildByName("Label").getComponent(Label).string = "";
          this.target.getChildByName("Label").getComponent(Label).string = "";
          this.curSelect.data = null;
          this.target.data = null;
          this._canUpgrade = false;
          this._curSelectItemData = null;
        } // 刷新装备列表


        updateEquList() {
          while (this._itemPrefabArr.length > 0) {
            let prefab = this._itemPrefabArr.shift();

            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("SSLItemPrefab", prefab);
          }

          let list = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemList");

          for (const key in list) {
            let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemDataByIdOrName", key);

            if (data.type == "装备") {
              let total = list[key];
              let prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("SSLItemPrefab");
              prefab.parent = this.itemContent;
              prefab.getChildByName("itemBg").getComponent(Sprite).spriteFrame = this.itemQBg[data.quality - 1];
              this.initPrefabLv(prefab, data);
              let sprite = prefab.getChildByName("sprite").getComponent(Sprite);
              let loadUrl = data.loadUrl;
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

              this._itemPrefabArr.push(prefab);

              (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).createButton(this.node, prefab.getChildByName("itemBg"), "UpgradeEquLvLayer", "onBtnItemInUpgradeEquLvLayer", key);
            }
          }
        } // 初始化物品等级


        initPrefabLv(prefab, data) {
          let label = prefab.getChildByName("lv").getComponent(Label);

          if (data.type == "装备" && data.lv) {
            console.log("初始化阶");
            let list = {
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
        } // 在升阶界面 点击item


        onBtnItemInUpgradeEquLvLayer(e, p) {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemDataByIdOrName", p);
          console.log("onBtnItemInUpgradeEquLvLayer", data);

          if (data.lv >= 5) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "已达到最大等级，无法升级。");
            return;
          }

          ;
          let data2 = this.getEquNextLvData(data.name, data.lv);
          console.log("data2", data2);
          this._curSelectItemData = data; //初始化背景

          this.curSelect.getComponent(Sprite).spriteFrame = this.itemQBg[data.quality - 1];
          this.target.getComponent(Sprite).spriteFrame = this.itemQBg[data.quality - 1];
          this.curSelect.data = data;
          this.target.data = data2; // 初始化物品图片

          let loadUrl = data.loadUrl;
          if (!data.loadUrl) loadUrl = "item_default";
          loadUrl = "images/items/" + loadUrl + "/spriteFrame";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => {
            this.curSelect.getChildByName("Sprite").getComponent(Sprite).spriteFrame = assets;
            this.target.getChildByName("Sprite").getComponent(Sprite).spriteFrame = assets;
          }, () => {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("loadTheDirResources", "images/items/item_default/spriteFrame", assets => {
              this.curSelect.getChildByName("Sprite").getComponent(Sprite).spriteFrame = assets;
              this.target.getChildByName("Sprite").getComponent(Sprite).spriteFrame = assets;
            });
          }); //初始化阶

          let list = {
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
          this.curSelect.getChildByName("Label").getComponent(Label).string = list[data.lv];
          this.target.getChildByName("Label").getComponent(Label).string = list[data.lv + 1]; //升阶材料

          let materials = this._materialList[data.lv + 1];
          let count = 0;
          this._canUpgrade = true;

          for (const key in materials) {
            if (Object.prototype.hasOwnProperty.call(materials, key)) {
              const total = materials[key];
              let mData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getItemDataByIdOrName", key);
              console.log("需要" + key + "x" + total);
              let node = this.materialNode[count];
              let isEnough = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("itemIsEnough", key, total);
              if (isEnough) node.getComponent(Sprite).material = this.defaultMaterial;else {
                node.getComponent(Sprite).material = this.grayMaterial;
                this._canUpgrade = false;
              }
              node.getChildByName("Label").getComponent(Label).string = "x" + total;
              let loadUrl = "images/items/" + mData.loadUrl + "/spriteFrame";
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => {
                node.getComponent(Sprite).spriteFrame = assets;
              }, () => {
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("loadTheDirResources", "images/items/item_default/spriteFrame", assets => {
                  node.getComponent(Sprite).spriteFrame = assets;
                });
              });
              count++;
            }

            ;
          }

          ;
        } //升阶


        onBtnUpgradeLv() {
          if (!this._curSelectItemData) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "请先选择装备，再点击升阶！");
            return;
          }

          if (!this._canUpgrade) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "材料不足，无法升阶。");
            return;
          } //消耗合成材料


          let materials = this._materialList[this._curSelectItemData.lv + 1];

          for (const key in materials) {
            if (Object.prototype.hasOwnProperty.call(materials, key)) {
              const total = materials[key];
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("reduceItemFromSS", key, total);
            }
          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("reduceItemFromSS", this._curSelectItemData.name, 1);
          let list = {
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
          let targetLv = list[this._curSelectItemData.lv + 1];

          let index = this._curSelectItemData.name.indexOf("（");

          let targetName = this._curSelectItemData.name.slice(0, index + 1) + targetLv + "）";
          console.log("targetName", targetName);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", targetName, 1);
          let gets = {};
          gets[targetName] = 1;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("showGets", gets);
          this.recoveryDefault(); //刷新物品

          this.updateEquList();
        }

        onBtnEqu(e) {
          let data = e.target.data;
          if (!data) return;
          let colorStr = this.getColorStrByQuality(data.quality - 1);
          this.maskPar.getChildByName("name").getComponent(RichText).string = colorStr + data.name + "</color>";
          this.maskPar.getChildByName("description").getComponent(RichText).string = data.description;
          console.log("onBtnEqu", data);
          this.showEquDetail(data.name);
          this.maskPar.active = true;
        }

        showEquDetail(equName) {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getEquDataByName", equName);
          let effects = data.qData.effect; //根据quality 设置颜色 还没写

          let string = "";

          for (const id of effects) {
            let effect = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "getEquEffectData", id);
            console.log("effect", effect); // let colorStr = this.getColorStrByQuality(effect.quality - 1);

            let colorStr = this.getColorStrByType(effect.type - 1);
            string = string + colorStr + effect.name + ":" + effect.description + "</color>\n";
          }

          if (data.lData.baseDamage) string = string + "基础伤害:+" + data.lData.baseDamage + "\n";
          if (data.lData.damageTimes) string = string + "伤害加成倍数:+" + data.lData.damageTimes + "\n";
          if (data.lData.attackInterval) string = string + "攻击间隔:" + data.lData.attackInterval + "\n";
          if (data.lData.blood) string = string + "血量:+" + data.lData.blood + "\n";
          if (data.lData.CHR) string = string + "暴击率:+" + data.lData.CHR + "\n";
          if (data.lData.moveSpeed) string = string + "移动速度:+" + data.lData.moveSpeed + "\n";
          this.maskPar.getChildByName("description").getComponent(RichText).string = string;
        } // 通过物品品质 获得 物品颜色值


        getColorStrByType(index) {
          index > 2 ? 2 : index;
          return ["<color=#757575>", "<color=#A474CF>", "<color=#DDA75A>"][index];
        }

        getColorStrByQuality(index) {
          index > 4 ? 4 : index;
          return ["<color=#599A65>", "<color=#728CC7>", "<color=#A474CF>", "<color=#C65C37>", "<color=#DDA75A>"][index]; // return ["<color=#7EFFA7>","<color=#7EEAFF>","<color=#837EFF>","<color=#FFB77E>","<color=#FFE000>"][index];
        }

        onBtnClose() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroInfoLayerFun", "updateStorageSpace");
          this.node.active = false;
        }

        onBtnCloseEquDetail() {
          this.maskPar.active = false;
        } // 获取下一阶物品物品数据


        getEquNextLvData(curName, curLv) {
          let index = curName.indexOf("（");
          let name = curName.slice(0, index);
          let list = {
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
          let lvStr = list[curLv + 1];
          if (!lvStr) throw "lvStr is error";
          let nextName = name + "（" + lvStr + "）";
          return (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemDataByIdOrName", nextName);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "curSelect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "maskPar", [_dec5], {
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
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "itemQBg", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "materialNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f41f221a24d5bfd351f676005df36f555fd91c70.js.map