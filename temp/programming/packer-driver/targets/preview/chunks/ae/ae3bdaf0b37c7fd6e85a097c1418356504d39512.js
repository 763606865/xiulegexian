System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, em, ggd, tagData, Weapon, _dec, _class, _crd, ccclass, property, DoomsdayStorm;

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

      _cclegacy._RF.push({}, "e313bmgRphMbYASEhPHN3HH", "DoomsdayStorm", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DoomsdayStorm", DoomsdayStorm = (_dec = ccclass('DoomsdayStorm'), _dec(_class = class DoomsdayStorm extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor() {
          super(...arguments);
          this._moveDistance = void 0;
        }

        init(flyDir) {
          this._moveSpeed = 1000;
          this._moveDistance = 300;
          this.addToAnimManger();
          this._flyDir = {
            x: flyDir[0],
            y: flyDir[1]
          };
          this.initSkillData();
        }

        initSkillData() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "doomsdayStorm");
          this._damage = data.baseDamage;
          this._damageTimes = data.damageTimes;
          this._duration = data.duration;
          this._backDis = 0;
          this._canAttackTimes = Infinity;
          this._attackInterval = 0.3;
          this._weaponName = data.name2; // this.clearCacheData();

          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
        }

        weaponMove(deltaTime) {
          // return;
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._flyDir) return;

          if (this._moveDistance <= 0) {
            // this.playDestroyAnim();
            // 进入停留5s后消失
            return;
          }

          if (this._moveSpeed == 0) return;
          var dis = deltaTime * this._moveSpeed; // let dis = deltaTime*(this._moveSpeed+bonusMS);

          var moveX = this._flyDir.x * dis;
          var moveY = this._flyDir.y * dis;
          this.node.setPosition(this.node.getPosition().x + moveX, this.node.getPosition().y + moveY, 0);
          this._moveDistance -= dis;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae3bdaf0b37c7fd6e85a097c1418356504d39512.js.map