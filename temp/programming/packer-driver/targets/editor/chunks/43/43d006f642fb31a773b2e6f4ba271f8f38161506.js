System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, Boss, _dec, _class, _crd, ccclass, property, Boss59;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBoss(extras) {
    _reporterNs.report("Boss", "./Boss", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      Boss = _unresolved_3.Boss;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4a34bh4XTtJl6dYGc/ssPjd", "Boss59", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss59", Boss59 = (_dec = ccclass('Boss59'), _dec(_class = class Boss59 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        constructor(...args) {
          super(...args);
          this._skillData = {
            "normalParticle": {
              "name": "normalParticle",
              "damage": 143600000,
              "duration": 3,
              "moveSpeed": 600,
              "canAttackTimes": 1
            }
          };
        }

        onLoad() {
          let bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 59);
          bossData.canMove = true;
          this._skillData.normalParticle.damage = bossData.normalDamage;
          this.initBossInfo(bossData);
          this.setBossStrategy();
        }

        setBossStrategy() {
          this.schedule(() => {
            this.usingNormalParticleOneShot(0.5);
          }, 1);
          this.schedule(() => {
            this.usingNormalParticleCircle(12, 50, 0.5);
          }, 2);
          this.schedule(() => {
            this.usingNormalParticleTriangle(0.5);
          }, 5); // this.schedule(this.usingNormalParticleTriShot,2);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=43d006f642fb31a773b2e6f4ba271f8f38161506.js.map