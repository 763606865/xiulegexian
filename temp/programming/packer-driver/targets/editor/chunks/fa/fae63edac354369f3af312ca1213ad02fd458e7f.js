System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ItemManger, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c3eaMSS1FJZpq6wdRN9a3f", "ItemManager", undefined);

      //物品管理系统 
      _export("ItemManger", ItemManger = class ItemManger {
        constructor() {
          this._itemList = {};
        } // 添加物品


        addItem(id, total) {
          if (this._itemList.hasOwnProperty(id)) {
            this._itemList[id] += total;
          } else {
            this.addNewItemToList(id, total);
          }
        } // 添加新物品


        addNewItemToList(id, total) {
          this._itemList[id] = total;
        }
        /**
         * @description: 减少指定id物品的数量
         * @param {number} id 需要减少的物品id
         * @param {number} total 需要减少的物品数量
         * @returns {boolean} 减少物品是否成功 如果数量不够 或 物品不存在则失败
         */


        reduceItem(id, total) {
          if (this._itemList.hasOwnProperty(id)) {
            //判断是否够删除
            if (!this.itemIsEnough(id, total)) return false;
            this._itemList[id] -= total;
            if (this._itemList[id] === 0) this.clearItemFromList(id);
          } else {
            return false;
          }

          return true;
        } //判断物品数量是否足够


        itemIsEnough(id, total) {
          return this._itemList.hasOwnProperty(id) && this._itemList[id] >= total;
        } // 清空物品


        clearItemFromList(id) {
          delete this._itemList[id];
        } //获取物品数量


        getItemTotal(id) {
          if (this._itemList.hasOwnProperty(id)) return this._itemList[id];else return 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fae63edac354369f3af312ca1213ad02fd458e7f.js.map