System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Vector2, RVOConfig, _crd;

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector2", "../RVO/Vector2", _context.meta, extras);
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

      _cclegacy._RF.push({}, "2159aRLIK9BcaqD6p8Y212E", "RVOConfig", undefined);

      _export("default", RVOConfig = class RVOConfig {});

      /**代理对象之间的距离 */
      RVOConfig.neighborDist = 100;
      //35

      /**代理对象的半径 */
      RVOConfig.radius = 30;

      /**代理对象的最大移动速度 */
      RVOConfig.maxSpeed = 500;

      /**代理对象的初始速度 */
      RVOConfig.velocity = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
        error: Error()
      }), Vector2) : Vector2)(0, 0);

      /**最大邻居数 */
      RVOConfig.maxNeighbors = 10;

      /**安全单位时间，它乘以最大速度就是agent的避让探针，值越大，就会越早做出避让行为 */
      RVOConfig.timeHorizon = 25;

      /**与timeHorizon类似，只针对障碍物 */
      RVOConfig.timeHorizonObst = 5;

      /**步骤帧 */
      RVOConfig.gameTimeStep = 0.25;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=003fae6bb04896ed9b64f69112d402bbe35a9197.js.map