System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, em, _dec, _class, _crd, ccclass, property, AddItemsLayer;

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
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3113X6rZpF2JCxWHJ/YmQZ", "AddItemsLayer", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AddItemsLayer", AddItemsLayer = (_dec = ccclass('AddItemsLayer'), _dec(_class = class AddItemsLayer extends Component {
        constructor(...args) {
          super(...args);
          this._curItemIdString = void 0;
          this._curSelectTotal = void 0;
        }

        inputItemNameString(box) {
          this._curItemIdString = box.string;
          console.log("inputItemNameString", box.string);
        }

        inputItemTotalString(box) {
          this._curSelectTotal = box.string;
          console.log("inputItemTotalString", box.string);
        }

        onBtnConfirm() {
          let num = parseInt(this._curSelectTotal);

          if (isNaN(num)) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "数量输入错误，请重新输入");
            return;
          }

          ;
          let isValid = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("itemIsValid", this._curItemIdString);

          if (!isValid) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "物品名称输入错误，请重新输入");
            return;
          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", this._curItemIdString, num);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", "获得物品：" + this._curItemIdString + "x" + num);
        }

        onBtnOpenAddItemLayer() {
          this.node.active = true;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15003dedcead0e0a815260df7d8bede25260c258.js.map