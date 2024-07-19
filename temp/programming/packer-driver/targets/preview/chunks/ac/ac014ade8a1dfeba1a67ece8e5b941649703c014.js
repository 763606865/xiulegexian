System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ggd, plm, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, RotationAxe;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
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
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ggd = _unresolved_2.ggd;
    }, function (_unresolved_3) {
      plm = _unresolved_3.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1897dQZbX1Ds624YUbEEt0v", "RotationAxePar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'Contact2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RotationAxe", RotationAxe = (_dec = ccclass('RotationAxe'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class RotationAxe extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "axe1", _descriptor, this);

          _initializerDefineProperty(this, "axe2", _descriptor2, this);

          this._moveSpeed = void 0;
          this._duration = void 0;
          this._weaponName = void 0;
        }

        init() {
          this.axe1.setPosition(-100, 0, 0);
          this.axe2.setPosition(100, 0, 0);
          this.axe1.setRotationFromEuler(0, 0, 0);
          this.axe2.setRotationFromEuler(0, 0, 0);
          this._moveSpeed = 120;
          this._duration = 3.5;
          this._weaponName = "rotationAxe";
          this.axe1.getComponent("RotationAxeChild").init();
          this.axe2.getComponent("RotationAxeChild").init();
        }

        update(dt) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var pos1 = this.axe1.getPosition();
          var pos2 = this.axe2.getPosition();
          this.axe1.setPosition(pos1.x - dt * this._moveSpeed, pos1.y, pos1.z);
          this.axe2.setPosition(pos2.x + dt * this._moveSpeed, pos2.y, pos2.z);
          this._duration -= dt;

          if (this._duration <= 0) {
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool(this._weaponName, this.node, true);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "axe1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "axe2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac014ade8a1dfeba1a67ece8e5b941649703c014.js.map