System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CircleCollider2D, Contact2DType, em, tagData, EnemySkill, _dec, _class, _crd, ccclass, property, BlackHole;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemySkill(extras) {
    _reporterNs.report("EnemySkill", "./EnemySkill", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CircleCollider2D = _cc.CircleCollider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      EnemySkill = _unresolved_4.EnemySkill;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "983ef2TfytMIbhvzd5+h4RV", "BlackHole", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'CircleCollider2D', 'Contact2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlackHole", BlackHole = (_dec = ccclass('BlackHole'), _dec(_class = class BlackHole extends (_crd && EnemySkill === void 0 ? (_reportPossibleCrUseOfEnemySkill({
        error: Error()
      }), EnemySkill) : EnemySkill) {
        constructor() {
          super(...arguments);
          this._touchHero = false;
          this._attackInterval = 0.05;
          this._gravitationSpeed = 100;
        }

        init() {
          this._damage = 1;
          this._skillName = "blackHole";
          this._duration = 15;
          this.initCircleCollider();
          var collider = this.node.getComponent(CircleCollider2D);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        onBeginContact(self, other) {
          console.log("onBeginContact black hole");
          if (other.tag !== (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).hero) return;
          this._touchHero = true;
          this.scheduleOnce(() => {
            this.heroInBlackHole(other);
          }, this._attackInterval);
          console.log("进入黑洞");
        }

        onEndContact(self, other) {
          console.log("离开黑洞");
          this._touchHero = false;
        }

        heroInBlackHole(other) {
          console.log("heroInBlackHole");

          if (this._touchHero) {
            var nwp = this.node.getWorldPosition();
            var hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            var x = nwp.x - hwp.x;
            var y = nwp.y - hwp.y;
            var dis = Math.sqrt(x * x + y * y);
            var moveDisX = x == 0 ? 0 : this._attackInterval / (dis / this._gravitationSpeed) * x;
            var moveDisY = y == 0 ? 0 : this._attackInterval / (dis / this._gravitationSpeed) * y;
            other.node.parent.setWorldPosition(hwp.x + moveDisX, hwp.y + moveDisY, hwp.z);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "updateBloodProgress", -this._damage);
            this.scheduleOnce(() => {
              this.heroInBlackHole(other);
            }, this._attackInterval);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=833ba813c033252f67054886720940647aeb4e73.js.map