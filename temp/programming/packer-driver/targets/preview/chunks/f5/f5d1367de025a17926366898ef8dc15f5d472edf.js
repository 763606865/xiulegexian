System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Label, tween, Vec3, Color, NodePool, Prefab, Animation, em, plm, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, ShowLayer;

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
      Label = _cc.Label;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
      NodePool = _cc.NodePool;
      Prefab = _cc.Prefab;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      plm = _unresolved_3.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68818T5aVRELL8hQCf3cMKn", "ShowLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-07-05 13:41:33
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-11-27 16:21:10
       * @FilePath: \to-be-immortal\assets\script\layers\ShowLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'instantiate', 'tween', 'Vec3', 'Color', 'NodePool', 'Prefab', 'color', 'Animation']); // import { tagData2 } from '../global/globalData';


      ({
        ccclass,
        property
      } = _decorator);

      _export("ShowLayer", ShowLayer = (_dec = ccclass('ShowLayer'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class ShowLayer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "damagePrefab", _descriptor, this);

          _initializerDefineProperty(this, "tipsPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "damageTexPar", _descriptor3, this);

          _initializerDefineProperty(this, "tipsTexPar", _descriptor4, this);

          _initializerDefineProperty(this, "tipsAnimLayer", _descriptor5, this);
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("createDamageTex");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("createTipsTex");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("playAnimMassMonsterComing");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("createDamageTex", this.createDamageTex.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("createTipsTex", this.createTipsTex.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("playAnimMassMonsterComing", this.playAnimMassMonsterComing.bind(this));
          var damageTexPool = new NodePool();
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("damageTex", damageTexPool, this.damagePrefab);
          var tipsTexPool = new NodePool();
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("tipsTex", tipsTexPool, this.tipsPrefab);
        } //创建伤害文本


        createDamageTex(node, damageValue, initPos, type) {
          if (initPos === void 0) {
            initPos = {
              x: 0,
              y: 50
            };
          }

          if (type === void 0) {
            type = "normal";
          }

          // console.log("createDamageTex");
          // return;
          // let color = new Color(255, 255, 255, 255); 
          var color = this.getColorConfigByDamage(damageValue);
          var tex = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("damageTex");
          tex.setScale(new Vec3(0, 0, 1));
          damageValue = this.switchDamageTexToLength(damageValue);
          if (type == "criticalHit") tex.getComponent(Label).string = "暴击:  " + damageValue;else tex.getComponent(Label).string = damageValue;
          tex.getComponent(Label).color = color;
          tex.parent = this.damageTexPar;
          var wp = node.getWorldPosition(); // tex.setPosition(initPos.x, initPos.y);

          tex.setWorldPosition(wp.x + initPos.x, wp.y + initPos.y, 0); // this.playEffect1(tex,color);

          this.playEffect2(tex, color);
        } // 转换伤害文本长度


        switchDamageTexToLength(damageValue) {
          if (damageValue <= 9999) return damageValue;
          if (damageValue <= 9999999) return Math.round(damageValue / 1000) + "K";
          if (damageValue <= 9999999999) return Math.round(damageValue / 1000000) + "M";else return Math.round(damageValue / 1000000000) + "B";
        } //文字缩放 渐隐 位移


        playEffect1(tex, color) {
          var a1 = tween().by(0.5, {
            position: new Vec3(0, 100, 0)
          }, {
            onUpdate: (target, ratio) => {
              tex.getComponent(Label).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), ratio);
            }
          });
          var a2 = tween().to(0.3, {
            scale: new Vec3(1.2, 1.2, 1)
          });
          var action = tween(tex).parallel(a1, a2).call(() => {
            tex.setScale(new Vec3(1, 1, 1)); // plm.putToPool("damageTex", tex);

            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("damageTex", tex, true);
          });
          action.start();
        } // 文字缩放 渐隐


        playEffect2(tex, color) {
          tween(tex).to(0.1, {
            scale: new Vec3(1, 1, 1)
          }).delay(0.3).to(0.1, {
            scale: new Vec3(0, 0, 1)
          }).call(() => {
            tex.setScale(new Vec3(1, 1, 1)); // plm.putToPool("damageTex", tex);

            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("damageTex", tex, false);
          }).start();
        }
        /**
        * @description:  通过伤害判定颜色 
        * @param {*} type 伤害类型
        */


        getColorConfigByDamage(value) {
          return new Color(255, 245, 0, 255);
          if (value <= 100) return new Color(140, 255, 95, 255);
          if (value <= 500) return new Color(255, 245, 0, 255);
          if (value <= 1000) return new Color(255, 78, 34, 255);
          if (value <= 5000) return new Color(53, 247, 239, 255);
          if (value <= 10000) return new Color(247, 53, 53, 255);
          if (value <= 50000) return new Color(204, 0, 255, 255);else return new Color(255, 0, 0, 255);
        } //=================创建提示信息===============


        createTipsTex(content, initPos) {
          if (initPos === void 0) {
            initPos = {
              x: 0,
              y: 50
            };
          }

          // return;
          var tex = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("tipsTex");
          tex.getComponent(Label).string = content;
          tex.parent = this.tipsTexPar; // let wp = node.getWorldPosition();

          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          tex.setWorldPosition(wp.x + initPos.x, wp.y + initPos.y, 0);
          this.playTIPSTeXEffect(tex);
          ;
        }

        playTIPSTeXEffect(tex, color) {
          if (color === void 0) {
            color = new Color(255, 255, 255, 255);
          }

          var a1 = tween().by(1, {
            position: new Vec3(0, 200, 0)
          }, {
            onUpdate: (target, ratio) => {
              tex.getComponent(Label).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), ratio);
            }
          });
          var a2 = tween().to(0.5, {
            scale: new Vec3(1.2, 1.2, 1)
          });
          var action = tween(tex).parallel(a1, a2).call(() => {
            tex.setScale(new Vec3(1, 1, 1)); // plm.putToPool("damageTex", tex);

            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("tipsTex", tex, true);
          });
          action.start();
        } //===================播放提示动画================


        playAnimMassMonsterComing() {
          var anim = this.tipsAnimLayer.getChildByName("massMonsterComing").getComponent(Animation);
          anim.node.active = true;
          anim.play();
          this.scheduleOnce(() => {
            anim.node.active = false;
          }, 3);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damagePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tipsPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "damageTexPar", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "tipsTexPar", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tipsAnimLayer", [_dec6], {
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
//# sourceMappingURL=f5d1367de025a17926366898ef8dc15f5d472edf.js.map