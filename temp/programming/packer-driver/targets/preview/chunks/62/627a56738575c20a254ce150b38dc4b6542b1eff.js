System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, find, _dec, _class, _crd, ccclass, property, AnimCommonFun;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f7d6To5UtJmYQ+Wef5MWbK", "AnimCommonFun", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AnimCommonFun", AnimCommonFun = (_dec = ccclass('AnimCommonFun'), _dec(_class = class AnimCommonFun extends Component {
        afterPlayUpgradeAnim() {
          var script = find("Canvas/menuLayer/TrainingLayer").getComponent("TrainingLayer");
          script.afterPlayUpgradeAnim();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=627a56738575c20a254ce150b38dc4b6542b1eff.js.map