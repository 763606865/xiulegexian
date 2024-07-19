System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec2, math, tween, Vec3, Sprite, Color, UITransform, BoxCollider2D, Contact2DType, em, ggd, groupIndex, tagData, Weapon, _dec, _class, _crd, ccclass, property, ThousandsSwordToTomb;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgroupIndex(extras) {
    _reporterNs.report("groupIndex", "../../global/globalData", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      math = _cc.math;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      UITransform = _cc.UITransform;
      BoxCollider2D = _cc.BoxCollider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
      groupIndex = _unresolved_3.groupIndex;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      Weapon = _unresolved_4.Weapon;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25249OVHDpCfIXwpquDtNdf", "ThousandsSwordToTomb", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-20 11:45:37
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-10-26 16:14:14
       * @FilePath: \copy9train\assets\script\hero\weapon\ThousandsSwordToTomb.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec2', 'math', 'tween', 'Vec3', 'Sprite', 'Color', 'color', 'UITransform', 'BoxCollider2D', 'Contact2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ThousandsSwordToTomb", ThousandsSwordToTomb = (_dec = ccclass('ThousandsSwordToTomb'), _dec(_class = class ThousandsSwordToTomb extends (_crd && Weapon === void 0 ? (_reportPossibleCrUseOfWeapon({
        error: Error()
      }), Weapon) : Weapon) {
        constructor(...args) {
          super(...args);
          this._moveDistance = void 0;
          this._isPlayAnim = void 0;
        }

        init(skillData) {
          this.initSkillData(skillData);
        }

        initSkillData(data) {
          this._isPlayAnim = false;
          this._damage = data.damage; // this._moveDistance = data.moveDistance;

          this._moveDistance = data.moveDistance - this.node.getComponent(UITransform).contentSize.x / 4;
          console.log("data.moveDistance", data.moveDistance);
          console.log("this._moveDistance", this._moveDistance);
          this._moveSpeed = 2000;
          this._canAttackTimes = Infinity;
          this._backDis = 0;
          this._attackInterval = 0.5;
          this._weaponName = data.name;
          this.node.getComponent(Sprite).color = new Color(255, 204, 0, 255); //恢复原来的颜色

          let wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          let xDir = math.random() > .5 ? Math.random() : -math.random();
          xDir *= .7; // xDir+=(xDir/Math.abs(xDir)*0.3);

          let h = data.moveDistance;
          this.node.setWorldPosition(wp.x - h * xDir, wp.y + h, wp.z);
          this._flyDir = new Vec2(xDir, -1);
          console.log("this._flyDir", this._flyDir);
          this.clearCacheData();
          this.initBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
          this.changeBulletRotationByFlyDir();
        }

        initBoxCollider(tag, changeSize = {
          x: 0,
          y: 0
        }) {
          if (!tag) throw "tag is" + tag; // let collider = this.node.addComponent(BoxCollider2D);

          let collider = this.node.getComponent(BoxCollider2D);
          if (!collider) collider = this.node.addComponent(BoxCollider2D);
          collider.tag = tag;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).heroWeapon; // console.log("collider", collider);

          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        weaponMove(deltaTime) {
          // return;
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._flyDir) return;

          if (this._moveDistance <= 0) {
            this.playDestroyAnim();
            return;
          }

          if (this._moveSpeed == 0) return;
          let dis = deltaTime * this._moveSpeed; // let dis = deltaTime*(this._moveSpeed+bonusMS);

          let moveX = this._flyDir.x * dis;
          let moveY = this._flyDir.y * dis;
          this.node.setPosition(this.node.getPosition().x + moveX, this.node.getPosition().y + moveY, 0);
          this._moveDistance += moveY;
        }

        playDestroyAnim() {
          if (this._isPlayAnim) return;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("playOneShot", "battle/砸地");
          this._isPlayAnim = true;
          let color = new Color(255, 255, 255, 255);
          tween(this.node).by(.5, {
            position: new Vec3(0, 0, 0)
          }, {
            onUpdate: (target, ratio) => {
              this.node.getComponent(Sprite).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), ratio);
            }
          }).call(() => {
            this.recoveryToPool();
          }).start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1eda6e45053f489709220b0b97fff6192a0e5482.js.map