System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Vector2, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5d20bWA8NKFogKWl02ME6t", "Vector2", undefined);

      _export("default", Vector2 = class Vector2 {
        constructor(x, y) {
          this.x = void 0;
          this.y = void 0;
          if (x != undefined) this.x = x;
          if (y != undefined) this.y = y;
        }
        /**
         * 乘法
         * @param vector1 
         * @param vector2 
         * @returns 
         */


        static multiply(vector1, vector2) {
          return vector1.x * vector2.x + vector1.y * vector2.y;
        }
        /**
         * 乘法
         * @param scalar 
         * @param vector 
         * @returns 
         */


        static multiply2(scalar, vector) {
          return new Vector2(vector.x * scalar, vector.y * scalar);
        }
        /**
         * 除法
         * @param vector 
         * @param scalar 
         * @returns 
         */


        static division(vector, scalar) {
          return new Vector2(vector.x / scalar, vector.y / scalar);
        }
        /**
         * 减法
         * @param vector1 
         * @param vector2 
         */


        static subtract(vector1, vector2) {
          return new Vector2(vector1.x - vector2.x, vector1.y - vector2.y);
        }
        /**
         * 加法
         * @param vector1 
         * @param vector2 
         */


        static addition(vector1, vector2) {
          return new Vector2(vector1.x + vector2.x, vector1.y + vector2.y);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1192393ce82f883fbc7538f2b30905ea36a049c8.js.map