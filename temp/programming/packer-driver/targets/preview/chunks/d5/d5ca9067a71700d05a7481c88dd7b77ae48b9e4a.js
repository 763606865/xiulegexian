System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, find, instantiate, Animation, em, Boss, _dec, _class, _crd, ccclass, property, Boss9;

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
      find = _cc.find;
      instantiate = _cc.instantiate;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      Boss = _unresolved_3.Boss;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39b3bc1ckdF0KJK9yQwQ59E", "Boss9", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'find', 'instantiate', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss9", Boss9 = (_dec = ccclass('Boss9'), _dec(_class = class Boss9 extends (_crd && Boss === void 0 ? (_reportPossibleCrUseOfBoss({
        error: Error()
      }), Boss) : Boss) {
        constructor() {
          super(...arguments);
          this._skillData = {
            "normalParticle": {
              "name": "normalParticle",
              "damage": 2500,
              "duration": 3,
              "moveSpeed": 500,
              "canAttackTimes": 1
            },
            "ice": {
              "name": "ice",
              "damage": 10,
              "duration": 5,
              "moveSpeed": 0,
              "canAttackTimes": Infinity,
              "attackInterval": 1,
              "effects": ["slow"]
            }
          };
        }

        onLoad() {
          var bossData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBossDataById", 9);
          bossData.canMove = true;
          this._skillData.normalParticle.damage = bossData.normalDamage;
          this.initBossInfo(bossData);
          this.setBossStrategy();
        }

        setBossStrategy() {
          this.schedule(() => {
            this.usingNormalParticleOneShot(0.5);
          }, 1); // this.schedule(() => {
          //     this.usingNormalParticleCircle(12, 50, 0.5);
          // }, 2);

          this.schedule(() => {
            this.usingNormalParticleTriangle(0.5);
          }, 5);
          this.schedule(() => {
            this.createTipsPrefab();
          }, 6);
        }

        createTipsPrefab() {
          var _this = this;

          var prefab = find("tips", this.node);
          var targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos"); // let posArr = [[-200, 0], [200, 0], [0, -200], [0, 200]];

          var posArr = [[-200, 0], [200, 0], [0, -200], [0, 200], [-200, -200], [200, -200], [-200, 200], [200, 200]];

          var _loop = function _loop(pos) {
            var tips = instantiate(prefab);
            tips.parent = find("Canvas/bulletLayer");
            tips.setWorldPosition(targetPos.x + pos[0], targetPos.y + pos[1], targetPos.z);
            tips.active = true;
            var anim = tips.getComponent(Animation);
            anim.on("finished", () => {
              if (!anim) return;
              tips.destroy();

              _this.createIce([targetPos.x + pos[0], targetPos.y + pos[1]]);
            });
          };

          for (var pos of posArr) {
            _loop(pos);
          }
        } // 创建冰块


        createIce(pos) {
          var prefab = find("icePrefab", this.node);
          var ice = instantiate(prefab);
          ice.parent = find("Canvas/bulletLayer");
          ice.setWorldPosition(pos[0], pos[1], 0);
          ice.active = true;
          ice.getComponent("EnemySkill").init(this._skillData.ice);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d5ca9067a71700d05a7481c88dd7b77ae48b9e4a.js.map