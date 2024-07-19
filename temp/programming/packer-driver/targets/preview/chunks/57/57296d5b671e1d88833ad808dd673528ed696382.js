System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, UITransform, Size, groupIndex, _dec, _class, _crd, ccclass, property, ItemInPlaying;

  function _reportPossibleCrUseOfgroupIndex(extras) {
    _reporterNs.report("groupIndex", "../global/globalData", _context.meta, extras);
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
      BoxCollider2D = _cc.BoxCollider2D;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
    }, function (_unresolved_2) {
      groupIndex = _unresolved_2.groupIndex;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "307a1uXdiNOzpvFIWfS7b4k", "ItemInPlaying", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'UITransform', 'Size']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemInPlaying", ItemInPlaying = (_dec = ccclass('ItemInPlaying'), _dec(_class = class ItemInPlaying extends Component {
        init(tag) {
          var collider = this.node.getComponent(BoxCollider2D);
          if (!collider) collider = this.node.addComponent(BoxCollider2D);
          var UIT = this.node.getComponent(UITransform);
          var itemSize = new Size(UIT.contentSize.x, UIT.contentSize.y);
          collider.size = itemSize;
          collider.tag = tag;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).itemInPlaying;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=57296d5b671e1d88833ad808dd673528ed696382.js.map