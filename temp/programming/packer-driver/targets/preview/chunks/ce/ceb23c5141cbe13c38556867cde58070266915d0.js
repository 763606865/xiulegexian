System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, Sprite, Label, NodePool, em, gUrl, hr, plm, _dec, _class, _crd, ccclass, property, PrizeHallLayer;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgUrl(extras) {
    _reporterNs.report("gUrl", "../global/GameUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhr(extras) {
    _reporterNs.report("hr", "../global/HttpRequest", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      NodePool = _cc.NodePool;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      gUrl = _unresolved_3.gUrl;
    }, function (_unresolved_4) {
      hr = _unresolved_4.hr;
    }, function (_unresolved_5) {
      plm = _unresolved_5.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30ff6dHnqlOSpEBe/yd75rI", "PrizeHallLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-10-27 14:48:15
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-23 16:37:04
       * @FilePath: \to-be-immortal\assets\script\mainMenu\PrizeHallLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'instantiate', 'Sprite', 'Label', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrizeHallLayer", PrizeHallLayer = (_dec = ccclass('PrizeHallLayer'), _dec(_class = class PrizeHallLayer extends Component {
        constructor() {
          super(...arguments);
          this._curCdkeySting = void 0;
          this._itemPrefab = void 0;
          this._itemContent = void 0;
        }

        onLoad() {
          this._itemPrefab = find("item", this.node);
          this._itemContent = find("ScrollView/view/content", this.node);
          var pool = new NodePool();
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("PrizeHallItem", pool, this._itemPrefab);
        }

        onDisable() {
          this.clearContent();
        }

        inputCdkey(box) {
          this._curCdkeySting = box.string; // console.log("this._curCdkeySting", this._curCdkeySting);
        } //发送奖励请求


        sendPrizeRequest() {
          var url = (_crd && gUrl === void 0 ? (_reportPossibleCrUseOfgUrl({
            error: Error()
          }), gUrl) : gUrl).list.getPrize;
          (_crd && hr === void 0 ? (_reportPossibleCrUseOfhr({
            error: Error()
          }), hr) : hr).get(url, {
            cdk: this._curCdkeySting
          }, response => {
            console.log("response", response);

            if (response.successful) {
              console.log("添加领取奖励效果 还没写");
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("tipsViewShow", "领取奖励成功");
              this.distributePrizes(response.data);
            } else {
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("tipsViewShow", "cdk错误或已失效，领取失败。");
            }
          });
        } //分发奖励


        distributePrizes(data) {
          var _this = this;

          this.clearContent();
          console.log("get prizes", data);

          var _loop = function _loop() {
            var prize = data.prize[i];
            var total = data.total[i];
            var prizeData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getItemDataByIdOrName", prize);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", prize, total);
            var item = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("PrizeHallItem");
            item.parent = _this._itemContent;
            var sprite = item.getChildByName("Sprite").getComponent(Sprite);
            var loadUrl = "images/items/" + prizeData.loadUrl + "/spriteFrame";
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);
            item.getChildByName("Label").getComponent(Label).string = prizeData.name + "\n" + "X" + total;
            item.active = true;
            item.parent = _this._itemContent;
          };

          for (var i = 0; i < data.prize.length; i++) {
            _loop();
          }
        } // 清除content


        clearContent() {
          console.log("清除content");
          var content = find("ScrollView/view/content", this.node);

          while (content.children.length) {
            var child = this._itemContent.children[0];
            child.removeFromParent();
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("PrizeHallItem", child);
          }

          ;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ceb23c5141cbe13c38556867cde58070266915d0.js.map