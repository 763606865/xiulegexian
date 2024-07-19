System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, Boss, _dec, _class, _crd, ccclass, property, Boss4;

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

      _cclegacy._RF.push({}, "e8fabmGkGRPNJ7BL7zkvOWx", "Boss4", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss4", Boss4 = (_dec = ccclass('Boss4'), _dec(_class = class Boss4 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        constructor(...args) {
          super(...args);
          this._skillData = {
            "normalParticle": {
              "name": "normalParticle",
              "damage": 600,
              "duration": 3,
              "moveSpeed": 400,
              "canAttackTimes": 1
            },
            "sprint": {
              "speed": 500
            }
          };
        }

        onLoad() {
          this.initSprintData();
          let bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 4);
          bossData.canMove = true;
          this._skillData.normalParticle.damage = bossData.normalDamage;
          this.initBossInfo(bossData);
          this.setBossStrategy();
        }

        setBossStrategy() {
          this.schedule(() => {
            this.usingNormalParticleCircle(20, 100, 0.5);
          }, 10);
          this.schedule(() => {
            this.usingNormalParticleOneShot(0.5);
          }, 1);
          this.schedule(() => {
            this.isToSprintHero(0, () => {
              // this.usingNormalParticleTriShot([[0, 0], [-160, 0], [160, 0]],0.4);
              this.usingNormalParticleCircle(20, 100, 0.5);
            });
          }, 7);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=67831f9b4021a8eb2df2446304a44fb6e5606384.js.map