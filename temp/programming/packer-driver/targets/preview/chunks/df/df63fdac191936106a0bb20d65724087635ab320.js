System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, BoxCollider2D, em, ggd, tagData, Weapon, _dec, _class, _crd, ccclass, property, FlySword;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeapon(extras) {
    _reporterNs.report("Weapon", "./Weapon", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      BoxCollider2D = _cc.BoxCollider2D;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15dc2aBFdJGhJvhZGL29Vj/", "FlySword", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FlySword", FlySword = (_dec = ccclass('FlySword'), _dec(_class = class FlySword extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor() {
          super(...arguments);
          this._curTargetRect = null;
          this._flyState = 0;
        }

        //0：无状态，初始状态。 1：飞向目标点。 2：飞回玩家身边。
        start() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getWeaponDataByIdOrName", "flySword");
          this.init(data, 2);
          this.schedule(() => {
            this.seekNearestEnemy();
          }, 0.5);
        }

        init(data, lv) {
          this.initWeaponInfo(lv, data);
          var weaponName = data.name; // this.initBoxCollider(tagData.sword);

          var changeSize = {
            x: -20,
            y: -20
          };
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword, changeSize);
        }

        seekNearestEnemy() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (this._flyState !== 0) return;
          var tree = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getCurMonsterQuadtree");
          var collider = this.node.getComponent(BoxCollider2D);
          var rect = collider.worldAABB;
          var res = tree.retrieve(rect);

          if (res.length) {
            // this._curTargetRect = res.shift();
            this._curTargetRect = res[Math.random() * res.length | 0]; // this.node.parent = find("Canvas/bulletLayer");

            this._flyState = 1;
          }
        }

        update(dt) {
          if (this._flyState == 0) return;
          if (this._flyState == 1) this.flyToTp(dt);else if (this._flyState == 2) this.flyToHero(dt);
        }

        flyToTp(dt) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return; // let dis = dt*this._moveSpeed;

          var cp = this.node.getWorldPosition(); //四叉树位置锁定修正

          var x = this._curTargetRect.x + this._curTargetRect.width / 2 - cp.x;
          var y = this._curTargetRect.y + this._curTargetRect.height / 2 - cp.y; // let x = this._curTargetRect.x - cp.x;
          // let y = this._curTargetRect.y - cp.y;

          var flyDis = dt * this._moveSpeed; //可以到达目标点

          if (flyDis * flyDis >= x * x + y * y) {
            this.node.setPosition(this.node.getPosition().x + x, this.node.getPosition().y + y, 0);
            this._curTargetRect = null;
            this._flyState = 2;
          } else {
            //未到达目标点
            var rate = flyDis / Math.sqrt(x * x + y * y);
            x *= rate;
            y *= rate;
            this.node.setPosition(this.node.getPosition().x + x, this.node.getPosition().y + y, 0);
          }
        }

        flyToHero(dt) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var cp = this.node.getWorldPosition();
          var hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          var x = hwp.x - cp.x;
          var y = hwp.y - cp.y; // let flyDis = dt * this._moveSpeed;

          var flyDis = dt * this._moveSpeed * 2; //返回速度是正常速度的两倍
          //可以到达目标点

          if (flyDis * flyDis >= x * x + y * y) {
            this.node.setPosition(this.node.getPosition().x + x, this.node.getPosition().y + y, 0);
            this._flyState = 0;
          } else {
            //未到达目标点
            var rate = flyDis / Math.sqrt(x * x + y * y);
            x *= rate;
            y *= rate;
            this.node.setPosition(this.node.getPosition().x + x, this.node.getPosition().y + y, 0);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df63fdac191936106a0bb20d65724087635ab320.js.map