System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Line, _crd;

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

      _cclegacy._RF.push({}, "16d4fsGg3tB07jSF7VMrygh", "Line", undefined);

      _export("default", Line = class Line {
        constructor() {
          this.direction = void 0;
          this.point = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=99f8c2242414cc58fc8ed114398bce47e0198e84.js.map