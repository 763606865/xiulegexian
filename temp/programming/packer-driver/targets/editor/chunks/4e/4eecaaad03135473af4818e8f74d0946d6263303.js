System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, instantiate, Label, ScrollView, em, _dec, _class, _crd, ccclass, property, CurrentRoundMessage;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
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
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a7ee8nKmNDa4S5L9g+V0KD", "CurrentRoundMessage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'instantiate', 'Label', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CurrentRoundMessage", CurrentRoundMessage = (_dec = ccclass('CurrentRoundMessage'), _dec(_class = class CurrentRoundMessage extends Component {
        constructor(...args) {
          super(...args);
          this._messagePrefab = void 0;
          this._messagePar = void 0;
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("sendRoundMessage");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("sendRoundMessage", this.sendRoundMessage.bind(this));
          this._messagePrefab = find("Label", this.node);
          this._messagePar = find("ScrollView/view/content", this.node);
        } // 发送回合信息


        sendRoundMessage(string) {
          // console.log("sendRoundMessage",string);
          let message = instantiate(this._messagePrefab);
          message.parent = this._messagePar;
          message.getComponent(Label).string = string;

          this._messagePar.parent.parent.getComponent(ScrollView).scrollToBottom(1);

          message.active = true;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4eecaaad03135473af4818e8f74d0946d6263303.js.map