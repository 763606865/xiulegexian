System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Vector2, RVOMath, _crd;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector2", "./Vector2", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Vector2 = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21d6aajhXFBzriKnTNYSwLS", "RVOMath", undefined);

      _export("default", RVOMath = class RVOMath {
        static abs(vector) {
          return this.sqrt(this.absSq(vector));
        }

        static absSq(vector) {
          return (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).multiply(vector, vector);
        }

        static normalize(vector) {
          return (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).division(vector, this.abs(vector));
        }

        static det(vector1, vector2) {
          return vector1.x * vector2.y - vector1.y * vector2.x;
        }

        static distSqPointLineSegment(vector1, vector2, vector3) {
          var r = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).multiply((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(vector3, vector1), (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(vector2, vector1)) / this.absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(vector2, vector1));

          if (r < 0) {
            return this.absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(vector3, vector1));
          }

          if (r > 1) {
            return this.absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(vector3, vector2));
          }

          return this.absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(vector3, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).addition(vector1, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).multiply2(r, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(vector2, vector1)))));
        }

        static fabs(scalar) {
          return Math.abs(scalar);
        }

        static leftOf(a, b, c) {
          return this.det((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(a, c), (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(b, a));
        }

        static sqr(scalar) {
          return scalar * scalar;
        }

        static sqrt(scalar) {
          return Math.sqrt(scalar);
        }
        /**
         * 转换单精度
         * @param value 
         * @returns 
         */


        static transfromFloat(value) {
          return Math.floor(value * 10) / 10;
        }

      });

      /**一个足够小的正数 */
      RVOMath.RVO_EPSILON = 0.00001;

      /**一个表示正无穷的数 */
      RVOMath.RVO_POSITIVEINFINITY = 10000000000000;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=44a742dd73fd8ace3277c7c54c7e4a95afc5b0ec.js.map