System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ObserverObj, KeyValuePair, _crd;

  _export({
    ObserverObj: void 0,
    KeyValuePair: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e16c3I9G7NEdbIYnRaP3KWx", "commonDefine", undefined);

      _export("ObserverObj", ObserverObj = class ObserverObj {
        constructor(val) {
          this.value = void 0;
          if (val) this.value = val;
        }

      });

      _export("KeyValuePair", KeyValuePair = class KeyValuePair {
        constructor(key, value) {
          this.Key = void 0;
          this.Value = void 0;
          this.Key = key;
          this.Value = value;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fe266f61360b3e16ca21a3e1dc90b88f2ee63291.js.map