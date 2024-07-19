System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, NodePool, Label, Sprite, Color, em, plm, _dec, _class, _crd, ccclass, property, GetsControl;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
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
      find = _cc.find;
      NodePool = _cc.NodePool;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      plm = _unresolved_3.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b473lAki9LRptNA7qJChsV", "GetsControl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'NodePool', 'Label', 'Sprite', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GetsControl", GetsControl = (_dec = ccclass('GetsControl'), _dec(_class = class GetsControl extends Component {
        constructor() {
          super(...arguments);
          this._showList = {
            1: [[0, 0]],
            2: [[-70, 0], [70, 0]],
            3: [[-170, 0], [0, 0], [170, 0]],
            4: [[-210, 0], [-70, 0], [70, 0], [210, 0]],
            5: [[-210, 90], [-70, 90], [70, 90], [210, 90], [-210, -65]],
            6: [[-210, 90], [-70, 90], [70, 90], [210, 90], [-210, -65], [-70, -65]],
            7: [[-210, 90], [-70, 90], [70, 90], [210, 90], [-210, -65], [-70, -65], [70, -65]],
            8: [[-210, 90], [-70, 90], [70, 90], [210, 90], [-210, -65], [-70, -65], [70, -65], [210, -65]]
          };
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("showGets");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("closeGets");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("showGets", this.showGets.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("closeGets", this.closeGets.bind(this));
          var getsItemPrefab = find("/itemPrefab", this.node);
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("SSLGetsItemPrefab", new NodePool(), getsItemPrefab);
        } // 展示获得物品


        showGets(items) {
          var _this = this;

          this.node.active = true;
          var content = find("bg/ScrollView/view/content", this.node);

          var len = (() => {
            var len = 0;

            for (var key in items) {
              len++;
            }

            return len;
          })();

          var showPosList = this._showList[len];
          var count = 0;

          var _loop = function _loop() {
            if (Object.prototype.hasOwnProperty.call(items, key)) {
              var total = items[key];
              var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getItemDataByIdOrName", key); // let prefab = instantiate(itemPrefab);

              var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("SSLGetsItemPrefab");
              prefab.active = true;
              prefab.parent = content;
              var sprite = prefab.getComponent(Sprite);
              var loadUrl = data.loadUrl;
              if (!data.loadUrl) loadUrl = "item_default";
              loadUrl = "images/items/" + loadUrl + "/spriteFrame";
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);

              var color = _this.getColorStrByQuality(data.quality);

              var label = prefab.getChildByName("name").getComponent(Label);
              label.color = color;
              if (total > 1) label.string = data.name + "x" + total;else label.string = data.name;
              var pos = showPosList[count];
              prefab.setPosition(pos[0], pos[1]);
              count++;
            }
          };

          for (var key in items) {
            _loop();
          }
        } // 关闭展示获得物品界面


        closeGets() {
          this.node.active = false;
          var content = find("bg/ScrollView/view/content", this.node); // 清空物品

          while (content.children.length) {
            var child = content.children[0];
            child.getComponent(Sprite).spriteFrame = null;
            child.removeFromParent();
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("SSLGetsItemPrefab", child);
          }

          ;
        }

        getColorStrByQuality(quality) {
          switch (quality) {
            case 1:
              return new Color(89, 154, 101);

            case 2:
              return new Color(114, 140, 199);

            case 3:
              return new Color(164, 116, 207);

            case 4:
              return new Color(198, 92, 55);

            case 5:
              return new Color(227, 161, 90);

            default:
              return new Color(255, 255, 255);
          }
        } // getColorStrByQuality(index) {
        //     index > 4 ? 4 : index;
        //     return ["<color=#599A65>", "<color=#728CC7>", "<color=#A474CF>", "<color=#C65C37>", "<color=#DDA75A>"][index];
        //     // return ["<color=#7EFFA7>","<color=#7EEAFF>","<color=#837EFF>","<color=#FFB77E>","<color=#FFE000>"][index];
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=36c719c9946adeada73b294e8d424d69f66b7306.js.map