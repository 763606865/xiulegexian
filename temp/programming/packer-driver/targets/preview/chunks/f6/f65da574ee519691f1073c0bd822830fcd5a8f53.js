System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ggd, tagData, Weapon, _dec, _class, _crd, ccclass, property, Taijihuan;

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
      ggd = _unresolved_2.ggd;
      tagData = _unresolved_2.tagData;
    }, function (_unresolved_3) {
      Weapon = _unresolved_3.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e171bFydDFLSog0kJi2AKtr", "Taijihuan", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'random']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Taijihuan", Taijihuan = (_dec = ccclass('Taijihuan'), _dec(_class = class Taijihuan extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor() {
          super(...arguments);
          this._fallDuration = void 0;
          this._rawDuration = void 0;
          this._randomDir = void 0;
        }

        init(data, lv, flyDir) {
          this.initWeaponInfo(lv, data, flyDir);

          if (lv >= 5) {
            this.node.setScale(2, 2, 1);
          }

          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword, {
            x: -40,
            y: -40
          }); // if(lv>=5){
          //     this.node.setScale(2,2,1);
          //     this.initBoxCollider(tagData.sword, { x: -80, y: -80 });
          // }else this.initBoxCollider(tagData.sword, { x: -40, y: -40 });

          this._fallDuration = this._duration * 3 / 4;
          this._rawDuration = this._duration;
          if (Math.random() > 0.5) this._randomDir = 1;else this._randomDir = -1;
        }

        colliderMonster(other) {
          if (this.isStopRun(other)) return;
          if (this.isHasAttacked(other.node.uuid)) return; //已经被剑攻击过的对象 忽略后续攻击

          this.updateMonsterBlood(other);

          this._hasAttackedEnemies.push(other.node.uuid);

          this._canAttackTimes--;
          if (this._canAttackTimes <= 0) this.recoveryToPool();
        }

        weaponMove(deltaTime) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._flyDir) return;
          var y = deltaTime * this._moveSpeed;
          var b = 1.2;

          if (this._duration > this._fallDuration) {
            //上升
            var rate = (this._duration - this._fallDuration) / (this._rawDuration - this._fallDuration); // console.log("rate up", rate);

            y = rate * y;
            var x = Math.sqrt(y) * this._randomDir * b;
            this.node.setPosition(this.node.getPosition().x + x, this.node.getPosition().y + y, 0);
          } else {
            var _rate = (this._fallDuration - this._duration) / this._fallDuration;

            if (_rate > 1) _rate = 1; // console.log("rate fall", rate);

            y = _rate * y * 2;

            var _x = Math.sqrt(y) * this._randomDir * b;

            this.node.setPosition(this.node.getPosition().x + _x, this.node.getPosition().y - y, 0);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f65da574ee519691f1073c0bd822830fcd5a8f53.js.map