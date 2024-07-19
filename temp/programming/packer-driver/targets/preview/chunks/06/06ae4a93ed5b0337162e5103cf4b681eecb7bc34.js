System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Prefab, instantiate, Label, find, em, ggd, glf, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, SkillManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../../global/globalFun", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      find = _cc.find;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      glf = _unresolved_4.glf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "147015qvZlGX40D++2yinmG", "SkillManager", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-19 10:05:41
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\SkillManager.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Prefab', 'instantiate', 'Label', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillManager", SkillManager = (_dec = ccclass('SkillManager'), _dec2 = property(Prefab), _dec(_class = (_class2 = class SkillManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "skillPrefab", _descriptor, this);

          this._openSecretList = [];
          //存储激活的秘法
          this._bloodMakeMeStrongTimes = 0;
          //血煞功叠加层数
          this._drinkBloodValue = 0;
          //嗜血诀回血量
          this._godWindCloudBodyTimes = 0;
          //仙风云体叠加层数
          this._thunderGodAngryTimes = 0;
          //雷神之怒叠加层数
          this._thunderGodDignifiedTimes = 0;
          //雷神之威叠加层数
          this._percentageDamage = 0;
          //百分比伤害提升 叠加所有静态秘法
          this._avoidAttackingTotalTime = 0;
          //避开攻击总时长（未必攻击的时长）
          this._beAttackedSSTimesList = {};
          //存储被击中触发的秘法
          this._countdownList = {
            "sunHeart": 0
          };
          //技能控制效果
          this._skillDebuffEffect = {
            "paralysis": {
              "probability": 0,
              "duration": 0
            }
          };
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingSkillManagerFun");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getSkillManagerProperty");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingSkillManagerFun", this.usingSkillManagerFun.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getSkillManagerProperty", this.getSkillManagerProperty.bind(this));
          this.initSkill();
        }

        start() {
          this.openAllSecretSkill();
          this.startRecodeAvoidTime(); //记录未被击中时长
        } //开始记录未被击中的时长


        startRecodeAvoidTime() {
          this.schedule(() => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            this._avoidAttackingTotalTime++;
            this.updateBeAttackedListCountdown();
          }, 1);
        } //刷新被攻列表的倒计时


        updateBeAttackedListCountdown() {
          for (var key in this._beAttackedSSTimesList) {
            if (Object.prototype.hasOwnProperty.call(this._beAttackedSSTimesList, key)) {
              var element = this._beAttackedSSTimesList[key];

              if (element.countdown > 0) {
                element.countdown--;
                if (element.countdown <= 0) element.times = 0;
              }
            }
          }
        }

        initSkill() {
          var _this = this;

          var list = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "SkillBookLayer") && (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "SkillBookLayer").usingBookList;
          if (!list) return;

          var _loop = function _loop() {
            if (Object.prototype.hasOwnProperty.call(list, type)) {
              var skillName = list[type];

              if (skillName) {
                var skill = instantiate(_this.skillPrefab);
                skill.parent = _this.node;
                var sprite = skill.getComponent(Sprite);
                var loadUrl = "images/icons/icon_" + skillName + "/spriteFrame";
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);
                (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                  error: Error()
                }), glf) : glf).createButton(_this.node, skill, "SkillManager", "onBtnSkill", skillName);
              }
            }
          };

          for (var type in list) {
            _loop();
          }
        } // 通用方法


        onBtnSkill(e, p) {
          var sprite = e.target.getChildByName("mask").getComponent(Sprite);
          if (sprite.fillRange > 0) return; // this.changeMoveSpeed();

          this[p]();
          sprite.fillRange = 1;
          var totalTime = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", p).cd;
          var label = e.target.getChildByName("remainingTime").getComponent(Label);
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", p);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createTipsTex", skillData.name);
          this.startCoolDowntime(sprite, label, totalTime);
        } // 开始冷却


        startCoolDowntime(sprite, label, totalTime) {
          var interval = 1 / 60; // let interval = 1;

          var curTime = 0;
          label.string = totalTime;
          var cd = setInterval(() => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            curTime += interval;
            sprite.fillRange = 1 - curTime / totalTime;
            label.string = (totalTime - curTime).toFixed(2); // label.string = Math.floor(totalTime - curTime);

            if (curTime >= totalTime) {
              clearInterval(cd);
              sprite.fillRange = 0;
              label.string = "";
            }

            ;
          }, interval * 1000);
        }

        usingSkillManagerFun(string) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        } //获取hero control 属性


        getSkillManagerProperty(string) {
          if (this.hasOwnProperty(string)) return this[string];else throw "skill manager 中不存在属性：" + string;
        } // ===========================具体实现===========================

        /**
         * @description: 一阶功法
         */
        //凌波微步 --->身法


        changeMoveSpeed() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "changeMoveSpeed"); // em.dispatch("usingHeroControlFun", "changeHeroMoveSpeed", 2, 10);//两倍移速 10s

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "changeHeroMoveSpeed", skillData.moveSpeedTimes, skillData.duration); //两倍移速 10s
        } //剑雨术 --->武技


        swordRain() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillSwordRain");
        } // 一剑隔世 --->绝技


        justOneSwordDivideWorld() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillJustOneSwordDivideWorld");
        } // 凝气术 --->心法


        collectGas() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "凝气术");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateTempCriticalHitRate", skillData.criticalHitRate);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "isOpenCollectGas", true);
          var t = skillData.duration;

          var fun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            t--;

            if (t <= 0) {
              this.unschedule(fun);
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "updateTempCriticalHitRate", -skillData.criticalHitRate);
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "isOpenCollectGas", false);
            }
          };

          this.schedule(fun, 1);
        } //万剑归冢 --->神通


        thousandsSwordToTomb() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillThousandsSwordToTomb");
        }
        /**
         * @description: 二阶功法
         */
        // 迷踪步 --->身法


        trackDisappear() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "trackDisappear");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "usingSkillTrackDisappear", skillData.duration);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "changeHeroMoveSpeed", skillData.moveSpeedTimes, skillData.duration); //两倍移速 10s
        } // 怒狮狂吼 --->武技


        lionRoar() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "usingSkillLionRoar");
        } // 冰锥术 --->绝技 向周围发射冰锥，每个冰锥造成500伤害，附加1.5伤害加成，并冻结对方


        iceCone() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillIceCone");
        } // 冰盾术 ---> 心法


        iceShield() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "usingSkillIceShield");
        } // 冰河世纪 --->神通


        iceAge() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "iceAge");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingMapLayerFun", "frozenMap", skillData.duration, 0.2);
        }
        /**
         * @description: 三阶功法
         */
        //大步流星 --> 身法


        moveLikeMeteor() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "moveLikeMeteor");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "changeHeroMoveSpeed", skillData.moveSpeedTimes, skillData.duration); //两倍移速 10s
        } // 三昧真火 --> 武技


        samadhiTrueFire() {
          var url = "/prefabs/hero/weapon/samadhiTrueFire";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", url, assets => {
            var prefab = instantiate(assets);
            prefab.getComponent("SamadhiTrueFire").init();
          });
        } // 烈日心决 ---> 心法


        sunHeart() {
          var url = "/prefabs/hero/weapon/sunHeart";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", url, assets => {
            var prefab = instantiate(assets);
            prefab.parent = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroControlProperty", "node").getChildByName("effect");
          });
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "sunHeart");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateTempCriticalHitRate", skillData.criticalHitRate);
          this._countdownList.sunHeart = skillData.duration;
          this.unschedule(this.sunHeartCountdownRun);
          this.schedule(() => {
            this.sunHeartCountdownRun();
          }, 1);
        } // 烈日心决倒计时运行


        sunHeartCountdownRun() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._countdownList.sunHeart--;
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "sunHeart");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updatePercentageBloodProgress", -skillData.damageTimes);

          if (this._countdownList.sunHeart <= 0) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "updateTempCriticalHitRate", -skillData.criticalHitRate);
            this.unschedule(this.sunHeartCountdownRun);
          }
        } // 炎爆术 ---> 绝技


        fireBloom() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillFireBloom");
        } // 地狱火


        hellFire() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillHellFire");
        } // ==================四阶功法===================

        /**
         * @description: 身法 移形换影  留下残影，吸引火力
         */


        moveLikeShadow() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "usingSkillMoveLikeShadow");
        }
        /**
         * @description: 武技 灵风指 持续变化的技能，跟随瞄准方向。持续伤害
         */


        fingerLikeWind() {
          console.log("使用灵风指");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", "/prefabs/hero/weapon/fingerLikeWind", assets => {
            var prefab = instantiate(assets);
            prefab.getComponent("FingerLikeWind").init();
          });
        }
        /**
         * @description: 心法 如沐春风 持续回血，提升百分比伤害，提升暴击率
         */


        likeSpringBreeze() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "likeSpringBreeze");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateTempCriticalHitRate", skillData.criticalHitRate);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateTempPercentageDamage", skillData.damageTimes);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "isOpenLikeSpringBreeze", true);
          var t = skillData.duration;

          var fun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "updatePercentageBloodProgress", skillData.baseDamage);
            t--;

            if (t <= 0) {
              this.unschedule(fun);
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "updateTempCriticalHitRate", -skillData.criticalHitRate);
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "updateTempPercentageDamage", -skillData.damageTimes);
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "isOpenLikeSpringBreeze", false);
            }
          };

          this.schedule(fun, 1);
        }
        /**
         * @description: 绝技  八面危风   向周边发射持续的八道龙卷风 
         */


        dangerWindToNear() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillDangerWindToNear");
        }
        /**
         * @description: 末日风暴 不断向周边发射大风暴，范围广。伤害高,攻击间隔短
         */


        doomsdayStorm() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillDoomsdayStorm");
        } // ==================五阶功法===================
        // 飞雷神


        flyingThunderGod() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "usingSkillFlyingThunderGod");
        } // 雷神之力


        thunderGodPower() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "thunderGodPower");
          this._skillDebuffEffect.paralysis.duration = skillData.baseDamage;
          this._skillDebuffEffect.paralysis.probability = skillData.damageTimes;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "isOpenThunderGodPower");
        } //雷云术


        thundercloud() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", "/prefabs/hero/weapon/thundercloud", assets => {
            var prefab = instantiate(assets);
            var layer = find("Canvas/bulletLayer");
            prefab.parent = layer;
            var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            prefab.setWorldPosition(wp);
            prefab.getComponent("Thundercloud").init();
          });
        } // 奔雷术


        thunderRunning() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillThunderRunning");
        }
        /**
         * @description: 雷裂珠  向移动方向发射一枚雷裂珠，雷裂珠在造成和高额伤害的同时并不会消失，而是分裂为两颗新珠子。可持续分裂5次。
         */


        thunderFissionBead() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillThunderFissionBead");
        } //==================秘法======================
        // 开启所有被动秘法


        openAllSecretSkill() {
          var list = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "SkillBookLayer") && (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "SkillBookLayer").finishBookList;
          console.log("openAllSecretSkill", list);

          if (list) {
            list.forEach(skillName => {
              var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", skillName);

              if (skillData.type == "秘法") {
                this[skillData.name2]();
              }
            });
          }
        } //风行诀


        likeWindMove() {
          this._openSecretList.push("likeWindMove");
        } // 血煞功


        bloodMakeMeStrong() {
          this._openSecretList.push("bloodMakeMeStrong");
        } //叠加血煞功层数


        add_bloodMakeMeStrongTimes() {
          if (this._openSecretList.indexOf("bloodMakeMeStrong") < 0) return;
          this._bloodMakeMeStrongTimes++;
        } // 嗜血诀


        drinkBlood() {
          this._openSecretList.push("drinkBlood");

          this._drinkBloodValue = 20;
        } //冰心诀


        iceHeart() {
          this._openSecretList.push("iceHeart");

          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "iceHeart");
          this._percentageDamage += skillData.damageTimes;
        } //火行步


        moveLikeFire() {
          this._openSecretList.push("moveLikeFire");

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingSkillMoveLikeFire");
        } //流火诀


        flowFire() {
          this._openSecretList.push("flowFire");

          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "flowFire");
          this._percentageDamage += skillData.damageTimes;
        } //仙风云体


        godWindCloudBody() {
          this._openSecretList.push("godWindCloudBody");

          this.schedule(() => {
            var times = Math.ceil((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getCurStageTime") / 60);
            this._godWindCloudBodyTimes = times;
          }, 1);
        } // 御风术 打开即用，外部获取


        driveWind() {
          this._openSecretList.push("driveWind");
        }

        thunderGodAngry() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "thunderGodAngry");

          this._openSecretList.push("thunderGodAngry");

          this._beAttackedSSTimesList["thunderGodAngry"] = {
            duration: skillData.duration,
            countdown: 0,
            maxTimes: skillData.damageTimes,
            times: 0,
            value: skillData.baseDamage
          };
        }

        thunderGodDignified() {
          this._openSecretList.push("thunderGodDignified");

          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "thunderGodDignified");

          this._openSecretList.push("thunderGodDignified");

          this._beAttackedSSTimesList["thunderGodDignified"] = {
            duration: skillData.duration,
            countdown: 0,
            maxTimes: skillData.damageTimes,
            times: 0,
            value: skillData.baseDamage
          };
        } //============外部调用==============
        // 获取秘法提供的移速加成


        getMoveSpeedFromSecretSkill() {
          var d1 = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "仙风云体");
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "likeWindMove");
          var likeWindMoveTimes = this._avoidAttackingTotalTime > skillData.damageTimes ? skillData.damageTimes : this._avoidAttackingTotalTime;
          if (this._openSecretList.indexOf("likeWindMove") < 0) likeWindMoveTimes = 0;
          if (this._openSecretList.indexOf("godWindCloudBody") < 0) d1.moveSpeedTimes = 0;
          return likeWindMoveTimes + this._godWindCloudBodyTimes * d1.moveSpeedTimes;
        } // 获取秘法提供的数值加成（伤害）  


        getDamageValueFromSecretSkill() {
          var damage = this._bloodMakeMeStrongTimes;
          if (this._openSecretList.indexOf("iceHeart") > -1) damage += (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "iceHeart").baseDamage;
          return damage;
        } // 获取秘法提供的百分比加成（伤害）  


        getPercentageDamageFromSecretSkill() {
          var total = this._percentageDamage;

          if (this._beAttackedSSTimesList.hasOwnProperty("thunderGodAngry")) {
            var value = this._beAttackedSSTimesList["thunderGodAngry"].times * this._beAttackedSSTimesList["thunderGodAngry"].value;
            total += value;
          }

          return total;
        } //获取秘法提供的血量恢复


        getRecoveryBloodFromSecretSkill() {
          return this._drinkBloodValue;
        } //获取秘法提供的百分比减伤效果


        getPercentageReduceDamageFromSecretSkill() {
          var d1 = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "仙风云体");
          var total = this._godWindCloudBodyTimes * d1.damageTimes;
          if (total > 0.5) console.warn("免伤达到50%以上");
          return total;
        } // 获取秘法提供的击退效果


        getBackDisFromSecretSkill() {
          var backDis = 0;

          if (this._openSecretList.indexOf("driveWind") > -1) {
            var dwd = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "御风术");
            backDis += dwd.baseDamage;
          }

          ;
          return backDis;
        } //获取秘法提供的暴击率


        getCHRFromSecretSkill() {
          var total = 0;

          if (this._beAttackedSSTimesList.hasOwnProperty("thunderGodDignified")) {
            var value = this._beAttackedSSTimesList["thunderGodDignified"].times * this._beAttackedSSTimesList["thunderGodDignified"].value;
            total += value;
          }

          return total;
        } //刷新被击中后触发的秘法的层数


        updateSecretSkillTimesAfterAttacked() {
          this._avoidAttackingTotalTime = 0;

          for (var key in this._beAttackedSSTimesList) {
            if (Object.prototype.hasOwnProperty.call(this._beAttackedSSTimesList, key)) {
              var element = this._beAttackedSSTimesList[key];
              element.countdown = element.duration;
              if (element.times < element.maxTimes) element.times++;
            }
          }
        }
        /**
         * @description: 获取秘法描述
         */


        getSSDes() {
          // let string = "================秘法================\n";
          var string = "秘法：\n";

          if (this._openSecretList.indexOf("likeWindMove") > -1) {
            string += "风行诀层数:" + this._avoidAttackingTotalTime + "\n";
          }

          ;

          if (this._openSecretList.indexOf("bloodMakeMeStrong") > -1) {
            string += "血煞功层数:" + this._bloodMakeMeStrongTimes + "\n";
          }

          ;

          if (this._openSecretList.indexOf("godWindCloudBody") > -1) {
            string += "仙风云体层数:" + this._godWindCloudBodyTimes + "\n";
          }

          ;

          if (this._openSecretList.indexOf("thunderGodAngry") > -1) {
            string += "雷神之怒层数:" + this._beAttackedSSTimesList["thunderGodAngry"].times + "\n";
          }

          ;

          if (this._openSecretList.indexOf("thunderGodDignified") > -1) {
            string += "雷神之威层数:" + this._beAttackedSSTimesList["thunderGodDignified"].times + "\n";
          }

          ;
          return string;
        } // 判断是否被控制


        getSkillDebuffEffectList() {
          var list = [];

          for (var key in this._skillDebuffEffect) {
            if (Object.prototype.hasOwnProperty.call(this._skillDebuffEffect, key)) {
              var element = this._skillDebuffEffect[key];

              if (element.probability > Math.random()) {
                list.push({
                  type: key,
                  duration: element.duration
                });
              }

              ;
            }
          }

          return list;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skillPrefab", [_dec2], {
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
//# sourceMappingURL=06ae4a93ed5b0337162e5103cf4b681eecb7bc34.js.map