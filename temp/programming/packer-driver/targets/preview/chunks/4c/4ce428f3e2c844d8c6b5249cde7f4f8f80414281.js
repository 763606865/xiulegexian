System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Obstacle, _crd;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector2", "./Vector2", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fddf3VbR/9AO4M89gunET3O", "Obstacle", undefined);

      _export("default", Obstacle = class Obstacle {
        constructor() {
          this.next_ = void 0;
          this.previous_ = void 0;
          this.direction_ = void 0;
          this.point_ = void 0;
          this.id_ = void 0;
          this.convex_ = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4ce428f3e2c844d8c6b5249cde7f4f8f80414281.js.map