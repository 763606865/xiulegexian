System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Game, game, em, plm, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Canvas;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

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
      Node = _cc.Node;
      Game = _cc.Game;
      game = _cc.game;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      plm = _unresolved_3.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b39cal86yhCGYNmdUqX6+Oi", "Canvas", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'tween', 'Vec3', 'Color', 'NodePool', 'Prefab', 'Game', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Canvas", Canvas = (_dec = ccclass('Canvas'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class Canvas extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "childNode", _descriptor, this);

          _initializerDefineProperty(this, "needActiveNode", _descriptor2, this);
        }

        onLoad() {
          this.activeChildNodeFirst();
          this.activeScriptByActiveNode();
          game.on(Game.EVENT_SHOW, this.gameShow, this);
          game.on(Game.EVENT_HIDE, this.gameHide, this);
        }

        gameShow() {
          console.log("game show");
        }

        gameHide() {
          console.log("game hide");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "recoveryTouchRawState");
        }

        onDestroy() {
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).clearAllNodePool();
        }

        start() {} //激活需要依赖父节点的子节点


        activeChildNodeFirst() {
          let arr = this.childNode;

          for (let i = 0; i < arr.length; i++) {
            let node = arr[i];

            if (node) {
              node.active = true;
            }

            ;
          }

          ;
        } //通过激活节点激活脚本


        activeScriptByActiveNode() {
          let arr = this.needActiveNode;

          for (let i = 0; i < arr.length; i++) {
            // for (let i = 0; i < arr.length; i++) {
            let node = arr[i];

            if (node) {
              node.active = true;
              node.active = false;
            }

            ;
          }

          ;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "childNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "needActiveNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aeb01ae91f58fcff4bd3b41faa54dda4c438ab11.js.map