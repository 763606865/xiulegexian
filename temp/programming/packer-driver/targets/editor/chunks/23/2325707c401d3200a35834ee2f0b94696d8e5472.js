System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, Sprite, SpriteFrame, RichText, em, glf, plm, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, MergeEquLayer;

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
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
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

      _cclegacy._RF.push({}, "00e1fdsVNBJg51QHbvbscUO", "MergeEquLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Sprite', 'SpriteFrame', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MergeEquLayer", MergeEquLayer = (_dec = ccclass('MergeEquLayer'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property([SpriteFrame]), _dec(_class = (_class2 = class MergeEquLayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemContent", _descriptor, this);

          _initializerDefineProperty(this, "curSelect", _descriptor2, this);

          _initializerDefineProperty(this, "target", _descriptor3, this);

          _initializerDefineProperty(this, "totalLabel", _descriptor4, this);

          _initializerDefineProperty(this, "mergeDetailLabel", _descriptor5, this);

          _initializerDefineProperty(this, "maskPar", _descriptor6, this);

          _initializerDefineProperty(this, "itemQBg", _descriptor7, this);

          this._itemPrefabArr = [];
          this._mergeList = {
            "1": 5,
            "2": 10,
            "3": 10,
            "4": 5,
            "5": 0
          };
        }

        onLoad() {
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).createButton(this.node, this.curSelect, "MergeEquLayer", "onBtnEqu");
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).createButton(this.node, this.target, "MergeEquLayer", "onBtnEqu");
        }

        onEnable() {
          this.updateEquList();
        }

        onDisable() {
          this.curSelect.data = null;
          this.target.data = null;
          this.mergeDetailLabel.string = "";
          this.totalLabel.string = "";
        }

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
              }), glf) : glf).createButton(this.node, prefab.getChildByName("itemBg"), "MergeEquLayer", "onBtnItemInMergeLayer", key);
            }
          }
        } // 合成


        onBtnItemInMergeLayer(e, p) {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemDataByIdOrName", p);

          if (data.quality >= 5) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "当前品质为最高品质，不可提升");
            return;
          }

          let data2 = this.getMergeTargetData(data.name);
          console.log("merge1", data);
          console.log("merge2", data2);
          this.curSelect.getComponent(Sprite).spriteFrame = this.itemQBg[data.quality - 1];
          this.target.getComponent(Sprite).spriteFrame = this.itemQBg[data2.quality - 1];
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
          }; // this.curSelect.getChildByName("Label").getComponent(Label).string = list[data.lv];

          this.curSelect.getChildByName("Label").getComponent(Label).string = "";
          this.target.getChildByName("Label").getComponent(Label).string = list[data.lv];
          this.totalLabel.string = "x" + this._mergeList[data.quality];
          this.showMergeDetail(data.name);
        } // 合成装备


        onBtnMerge() {
          //判断材料是否足够
          let curTotal = this.getCurEquTotal(this.curSelect.data.name);
          let needTotal = this._mergeList[this.curSelect.data.lv];

          if (curTotal >= needTotal) {
            console.log("合成");
            this.consumeEqu(this.curSelect.data.name, needTotal);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", this.target.data.name, 1);
            let gets = {};
            gets[this.target.data.name] = 1;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("showGets", gets);
            this.updateEquList();
            this.showMergeDetail(this.curSelect.data.name);
          } else {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "升品失败，材料数量不足");
          }
        }

        consumeEqu(curName, needTotal) {
          let index = curName.indexOf("（");
          let lvArr = ["（一阶）", "（二阶）", "（三阶）", "（四阶）", "（五阶）", "（六阶）", "（七阶）", "（八阶）", "（九阶）"];

          for (const lv of lvArr) {
            let name = curName.slice(0, index) + lv;
            let total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemTotalByIdOrName", name);

            if (total > 0) {
              if (needTotal <= total) {
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("reduceItemFromSS", name, needTotal);
                break;
              } else {
                needTotal -= total;
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("reduceItemFromSS", name, total);
              }
            }
          }

          console.log("消耗完成");
        } // 展示合成详情


        showMergeDetail(curName) {
          let index = curName.indexOf("（");
          let lvArr = ["（一阶）", "（二阶）", "（三阶）", "（四阶）", "（五阶）", "（六阶）", "（七阶）", "（八阶）", "（九阶）"];
          let string = "";

          for (const lv of lvArr) {
            let name = curName.slice(0, index) + lv;
            let total = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemTotalByIdOrName", name);
            if (total > 0) string = string + name + "x" + total + "\n";
          }

          this.mergeDetailLabel.string = string;
        } //获取某装备总数


        getCurEquTotal(curName) {
          let index = curName.indexOf("（");
          let lvArr = ["（一阶）", "（二阶）", "（三阶）", "（四阶）", "（五阶）", "（六阶）", "（七阶）", "（八阶）", "（九阶）"];
          let total = 0;

          for (const lv of lvArr) {
            let name = curName.slice(0, index) + lv;
            total += (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemTotalByIdOrName", name);
          }

          return total;
        } // 获得合成目标数据


        getMergeTargetData(curName) {
          let list = {
            "破旧": "实用",
            "实用": "稀有",
            "稀有": "传说",
            "传说": "史诗"
          };
          console.log("curName", curName);
          console.log("curName.slice(0,2)", curName.slice(0, 2));
          console.log("list[curName.slice(0,2)]", list[curName.slice(0, 2)]);
          let pre = list[curName.slice(0, 2)];
          if (!pre) throw "target is no existent";
          let targetName = pre + curName.slice(2);
          return (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getItemDataByIdOrName", targetName);
        } // 初始化物品等级


        initPrefabLv(prefab, data) {
          let label = prefab.getChildByName("lv").getComponent(Label);

          if (data.type == "装备" && data.lv) {
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
        } // 通过物品品质 获得 物品颜色值


        getColorStrByType(index) {
          index > 2 ? 2 : index;
          return ["<color=#757575>", "<color=#A474CF>", "<color=#DDA75A>"][index];
        }

        getColorStrByQuality(index) {
          index > 4 ? 4 : index;
          return ["<color=#599A65>", "<color=#728CC7>", "<color=#A474CF>", "<color=#C65C37>", "<color=#DDA75A>"][index]; // return ["<color=#7EFFA7>","<color=#7EEAFF>","<color=#837EFF>","<color=#FFB77E>","<color=#FFE000>"][index];
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
        }

        onBtnOpen() {
          this.node.active = true;
        }

        onBtnClose() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroInfoLayerFun", "updateStorageSpace");
          this.node.active = false;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "totalLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mergeDetailLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "maskPar", [_dec7], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2325707c401d3200a35834ee2f0b94696d8e5472.js.map