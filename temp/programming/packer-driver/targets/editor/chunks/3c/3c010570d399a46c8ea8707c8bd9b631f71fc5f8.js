System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, find, director, em, ItemManger, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, StorageSpace;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemManger(extras) {
    _reporterNs.report("ItemManger", "./ItemManager", _context.meta, extras);
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
      JsonAsset = _cc.JsonAsset;
      find = _cc.find;
      director = _cc.director;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ItemManger = _unresolved_3.ItemManger;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3799jrBkdOuIf8jGPcYoQz", "StorageSpace", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-06 17:34:04
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-12-14 23:54:12
       * @FilePath: \to-be-immortal\assets\script\system\StorageSpace.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'JsonAsset', 'game', 'find', 'Label', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StorageSpace", StorageSpace = (_dec = ccclass('StorageSpace'), _dec2 = property(JsonAsset), _dec(_class = (_class2 = class StorageSpace extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemDataJson", _descriptor, this);

          this._itemData = {};
          this._IM = void 0;
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("addItemToSS");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("reduceItemFromSS");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("itemIsEnough");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("itemIsValid");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getItemList");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getItemDataByIdOrName");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getItemTotalByIdOrName");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getAllPills");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getItemsRewardByAds");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("addItemToSS", this.addItemToSS.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("reduceItemFromSS", this.reduceItemFromSS.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("itemIsEnough", this.itemIsEnough.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("itemIsValid", this.itemIsValid.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getItemList", this.getItemList.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getItemDataByIdOrName", this.getItemDataByIdOrName.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getItemTotalByIdOrName", this.getItemTotalByIdOrName.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getAllPills", this.getAllPills.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getItemsRewardByAds", this.getItemsRewardByAds.bind(this));
          this.initItemData();
          this._IM = new (_crd && ItemManger === void 0 ? (_reportPossibleCrUseOfItemManger({
            error: Error()
          }), ItemManger) : ItemManger)(); // this.schedule(this.showAll,1);

          director.addPersistRootNode(this.node); //背包物品在各个场景皆可用到 设置为常驻节点
        }

        initItemData() {
          let all = this.itemDataJson.json;
          all.forEach(element => {
            let id = element.id;
            let name = element.name;
            this._itemData[id] = element;
            this._itemData[name] = element;
          }); // console.log("_itemData",this._itemData);
        }

        showAll() {
          console.log("_IM", this._IM);
        } //初始化仓库数据


        initSSData() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "storageSpace"); //读取缓存

          if (null !== data) {
            for (const key in data) {
              if (Object.prototype.hasOwnProperty.call(data, key)) {
                const element = data[key]; // this.addItemToSS(key, element, false);

                this._IM.addItem(parseInt(key), element);
              }
            }
          }
        }

        start() {
          this.initSSData();
          this.addSomeItems(); // this.helpAddItems();
          // this.helpAddItems2();
        } // 添加某些物品


        addSomeItems() {// this.addItemToSS("灵石", 10);
          // this.addItemToSS( "迷踪步",2);
          // this.addItemToSS( "万剑归冢",2);
          // this.addItemToSS( "一阶宝箱",999);
          // this.addItemToSS( "二阶宝箱",999);
          // this.addItemToSS( "三阶宝箱",999);
          // this.addItemToSS( "四阶宝箱",999);
          // this.addItemToSS("凝气术", 2);
          // this.addItemToSS("怒狮狂吼", 2);
          // this.addItemToSS("冰锥术", 2);
          // this.addItemToSS("剑雨术", 2);
          // this.addItemToSS("冰河世纪", 2);
          // this.addItemToSS("一剑隔世", 2);
          // this.addItemToSS("万剑归冢", 2);
          // this.addItemToSS("炼气丹", 5000);
          // this.addItemToSS("移形换影", 1);
          // this.addItemToSS("火行步", 1);
          // this.addItemToSS("飞雷神", 1);
          // this.addItemToSS("末日风暴", 1);
          // this.addItemToSS("八面危风", 1);
          // this.addItemToSS("如沐春风", 1);
          // this.addItemToSS("如沐春风", 1);
          // this.addItemToSS("灵风指", 1);
          // this.addItemToSS("御风术", 1);
          // this.addItemToSS("仙风云体", 1);
          // this.addItemToSS("化神丹", 99);
        } //辅助函数 用户测试添加物品


        helpAddItems() {
          this.addItemToSS("一阶宝箱", 99);
          this.addItemToSS("二阶宝箱", 99);
          this.addItemToSS("三阶宝箱", 99);
          this.addItemToSS("四阶宝箱", 99);
          this.addItemToSS("五阶宝箱", 99);
          this.addItemToSS("一阶功法残卷", 99);
          this.addItemToSS("一阶功法整卷", 99);
        } // 为n种物品添加m个


        helpAddItems2() {
          for (let i = 1; i < 75; i++) {
            // this.addItemToSS(i,1000);
            this.addItemToSS(i, 100);
          }

          ;
        }
        /**
         * @description: 通过id 或 name 获取物品属性 
         * @param {*} id_name 物品 id 或 name
         */


        getItemDataByIdOrName(id_name) {
          if (this._itemData.hasOwnProperty(id_name)) return this._itemData[id_name];else throw id_name + " of _itemData is null";
        } //判断物品id或名称是否有效


        itemIsValid(id_name) {
          return this._itemData.hasOwnProperty(id_name);
        } //默认记录 添加的物品 isSaving = true；当初始化添加物品时


        addItemToSS(id_name, total) {
          if (!this._itemData.hasOwnProperty(id_name)) throw "id_name err,id is " + id_name + " item is err";
          let id = this._itemData[id_name].id;

          this._IM.addItem(id, total);

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "storageSpace", this.getItemList());
        }

        reduceItemFromSS(id_name, total) {
          if (!this._itemData.hasOwnProperty(id_name)) throw "id_name err,id_name is " + id_name + " item is err";
          let id = this._itemData[id_name].id;

          let result = this._IM.reduceItem(id, total);

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "storageSpace", this.getItemList());
          return result;
        }

        itemIsEnough(id_name, total) {
          if (!this._itemData.hasOwnProperty(id_name)) throw "id_name err,id_name is " + id_name + " item is err";
          let id = this._itemData[id_name].id;
          return this._IM.itemIsEnough(id, total);
        }

        getItemList() {
          return this._IM._itemList;
        } //获取指定id 或 名称的物品 的数量


        getItemTotalByIdOrName(id_name) {
          // console.log("getItemTotalByIdOrName",id_name);
          // console.log("this._itemData",this._itemData);
          if (!this._itemData.hasOwnProperty(id_name)) throw id_name + " of _itemData is null";
          let id = this._itemData[id_name].id;
          return this._IM.getItemTotal(id);
        } //获取已拥有的 所有丹药


        getAllPills() {
          let list = {};

          for (const id in this._IM._itemList) {
            if (Object.prototype.hasOwnProperty.call(this._IM._itemList, id)) {
              if (this._itemData[id].type2 == "丹药") {
                list[id] = this._IM._itemList[id];
              }

              ;
            }
          }

          return list;
        } //通过广告获取物品奖励


        getItemsRewardByAds() {
          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "training"); //读取缓存

          let t1 = 1;
          let t2 = 5 + Math.random() * 5 | 0; //最少5个 最多10个妖丹

          if (!data || data.curLv < 5) {
            this.addItemToSS("一阶宝箱", t1);
            this.addItemToSS("炼气丹", t2);
            let tips = "获得物品：一阶宝箱x" + t1 + "、炼气丹x" + t2;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", tips);
          } else if (data.curLv < 15) {
            this.addItemToSS("二阶宝箱", t1);
            this.addItemToSS("筑基丹", t2);
            let tips = "获得物品：二阶宝箱x" + t1 + "筑基丹x" + t2;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", tips);
          } else if (data.curLv < 31) {
            this.addItemToSS("三阶宝箱", t1);
            this.addItemToSS("金元丹", t2);
            let tips = "获得物品：三阶宝箱x" + t1 + "金元丹x" + t2;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", tips);
          } else if (data.curLv < 47) {
            this.addItemToSS("四阶宝箱", t1);
            this.addItemToSS("元婴丹", t2);
            let tips = "获得物品：四阶宝箱x" + t1 + "元婴丹x" + t2;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", tips);
          } else {
            this.addItemToSS("五阶宝箱", t1);
            this.addItemToSS("化神丹", t2);
            let tips = "获得物品：五阶宝箱x" + t1 + "化神丹x" + t2;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", tips);
          }

          ;
          let ssNode = find("Canvas/menuLayer/HeroInfoLayer/storageSpace");

          if (ssNode.active) {
            let script = find("Canvas/menuLayer/HeroInfoLayer").getComponent("HeroInfoLayer");
            script.updateStorageSpace();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemDataJson", [_dec2], {
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
//# sourceMappingURL=3c010570d399a46c8ea8707c8bd9b631f71fc5f8.js.map