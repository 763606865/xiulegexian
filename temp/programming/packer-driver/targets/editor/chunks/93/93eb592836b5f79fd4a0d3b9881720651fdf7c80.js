System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, plm, _dec, _class, _crd, ccclass, property, CommonCallback;

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
    }, function (_unresolved_2) {
      plm = _unresolved_2.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3b59fGhdkFB26GOmbz41Qg5", "CommonCallback", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CommonCallback", CommonCallback = (_dec = ccclass('CommonCallback'), _dec(_class = class CommonCallback extends Component {
        destroyAnim() {
          this.node.destroy();
          console.log("销毁节点");
        } //将动画回收到对象池


        recoveryAnim(p1) {
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).putToPool(p1, this.node, true);
        } //


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93eb592836b5f79fd4a0d3b9881720651fdf7c80.js.map