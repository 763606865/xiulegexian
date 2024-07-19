System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Material, Sprite, BoxCollider2D, UITransform, Size, Contact2DType, Animation, AnimationClip, find, Vec2, Color, em, attackInterval, ggd, groupIndex, tagData, plm, RVOMath, Simulator, Vector2, monsterData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, Monster;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfattackInterval(extras) {
    _reporterNs.report("attackInterval", "../../global/globalData", _context.meta, extras);
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

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRVOMath(extras) {
    _reporterNs.report("RVOMath", "../../RVO/RVOMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimulator(extras) {
    _reporterNs.report("Simulator", "../../RVO/Simulator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector2", "../../RVO/Vector2", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmonsterData(extras) {
    _reporterNs.report("monsterData", "./MonsterData", _context.meta, extras);
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
      Material = _cc.Material;
      Sprite = _cc.Sprite;
      BoxCollider2D = _cc.BoxCollider2D;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Contact2DType = _cc.Contact2DType;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      find = _cc.find;
      Vec2 = _cc.Vec2;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      attackInterval = _unresolved_3.attackInterval;
      ggd = _unresolved_3.ggd;
      groupIndex = _unresolved_3.groupIndex;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }, function (_unresolved_5) {
      RVOMath = _unresolved_5.default;
    }, function (_unresolved_6) {
      Simulator = _unresolved_6.default;
    }, function (_unresolved_7) {
      Vector2 = _unresolved_7.default;
    }, function (_unresolved_8) {
      monsterData = _unresolved_8.monsterData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "668ee8+QZZCoZGzSXap1See", "Monster", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Material', 'Sprite', 'BoxCollider2D', 'UITransform', 'Size', 'Contact2DType', 'Collider2D', 'Rect', 'Animation', 'warn', 'AnimationClip', 'find', 'Vec2', 'Color']);

      ({
        ccclass,
        property
      } = _decorator); //

      _export("Monster", Monster = (_dec = ccclass('Monster'), _dec2 = property(Material), _dec3 = property(Material), _dec4 = property(Material), _dec5 = property(Material), _dec6 = property(Material), _dec7 = property(Material), _dec8 = property(Material), _dec9 = property(Material), _dec10 = property(AnimationClip), _dec(_class = (_class2 = class Monster extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "flashWhiteMaterial", _descriptor, this);

          _initializerDefineProperty(this, "defaultMaterial_normal", _descriptor2, this);

          _initializerDefineProperty(this, "defaultMaterial_green", _descriptor3, this);

          _initializerDefineProperty(this, "defaultMaterial_red", _descriptor4, this);

          _initializerDefineProperty(this, "defaultMaterial_yellow", _descriptor5, this);

          _initializerDefineProperty(this, "debuff_frozen", _descriptor6, this);

          _initializerDefineProperty(this, "debuff_paralysis", _descriptor7, this);

          _initializerDefineProperty(this, "effect_frozen", _descriptor8, this);

          _initializerDefineProperty(this, "beAttackedAnim", _descriptor9, this);

          this._defaultMaterial = void 0;
          //默认材质
          this._canAttack = true;
          this._monsterId = void 0;
          this._banTouch = false;
          //闪白 怪物无敌
          this._curMonsterData = null;
          this._maxBlood = 1;
          //最大血量
          this._curBlood = 1;
          //当前血量
          this._attackInterval = 1;
          this._isSuperArmor = false;
          //是否是霸体状态
          this._type = "normal";
          this._curMoveSpeedTimes = 1;
          this._speedMonsterSpeedTimes = 1;
          //速度怪的移速倍率，正常为1
          this._monsterSize = void 0;
          this._frontCount = 0;
          this._behindCount = 0;
          this._remainingDuration = 0;
          this._waitRepel = false;
          this._backDis = void 0;
          this._diedAnimProgress = 0;
          //死亡动画进度
          this._sid = -1;
          this._parKey = "normal";
          //父节点 key
          this._debuffList = {
            "timid": {
              "state": false,
              "duration": 0,
              "damage": 0.5,
              "moveSpeed": 0.5
            },
            "frozen": {
              "state": false,
              "duration": 0
            },
            "paralysis": {
              "state": false,
              "duration": 0
            }
          };
          this._bulletData = {
            "name": "monsterBullet",
            "damage": 1,
            "duration": 3,
            "moveSpeed": 300,
            "canAttackTimes": 1
          };
          this._moveAnimClip = void 0;
          // 怪物技能效果列表
          this._effectList = {
            "fast": false,
            //加速
            "frozen": false //冻结

          };
        }

        onDestroy() {
          this.initDefaultData();
        }

        init(data, id, strongList) {
          this.initDefaultData();
          this._curMonsterData = JSON.parse(JSON.stringify(data));

          if (strongList) {
            this._curMonsterData.damage = this._curMonsterData.damage * (1 + strongList.damage) | 0;
            this._curMonsterData.maxBlood = this._curMonsterData.maxBlood * (1 + strongList.blood) | 0;
            this._curMonsterData.moveSpeed = this._curMonsterData.moveSpeed * (1 + strongList.moveSpeed) | 0;
          }

          this._monsterId = id;

          switch (this._curMonsterData.color) {
            case "normal":
              this._defaultMaterial = this.defaultMaterial_normal;
              break;

            case "green":
              this._defaultMaterial = this.defaultMaterial_green;
              break;

            case "red":
              this._defaultMaterial = this.defaultMaterial_red;
              break;

            case "yellow":
              this._defaultMaterial = this.defaultMaterial_yellow;
              break;

            default:
              throw "color " + this._curMonsterData.color + " is undefined.";
              break;
          }

          this._parKey = this._curMonsterData.color;
          this.switchParByType(this._parKey);
          this.recoveryDefaultMaterial(); // this._curMonsterData = data;

          this.initMonsterMoveAnim(this._curMonsterData);
          this._maxBlood = this._curMonsterData.maxBlood;
          this._curBlood = this._curMonsterData.maxBlood;
          this.initCollider();
          this.startCountdown(120);
          this.setMonsterStrategyByIdOnTheBegging(); //添加代理

          this._sid = (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.addAgent(this.node.getWorldPosition());
        }

        switchParByType(type) {
          // console.log("switchParByType", type);
          this.node.parent = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingMonsterManagerFun", "getParNodeByKey", type);
        } // 倒计时 时间一到 怪物消失


        startCountdown(countdown) {
          this._remainingDuration = countdown;
          this.unschedule(this.durationCountdown);
          this.schedule(this.durationCountdown, 10);
        } //怪物存在倒计时 当时间小于等于0时，怪物消失


        durationCountdown() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._remainingDuration -= 10;
          this.runOthers();

          if (this._remainingDuration <= 0) {
            // plm.putToPool("monster", this.node);
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("monsterChild", this.node);
            this.removeAgent();
            this.unschedule(this.durationCountdown);
          }
        }

        removeAgent() {
          // console.log("移除代理");
          (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.delAgentBySid(this._sid);
        }
        /**
         * @description: 运行各种状态对怪物的影响
         * @damage  damage = 5%最大生命值 + 5%heroDamage;
         */


        runOthers() {
          // 地形天气原因 冰地形 冰河世纪
          if ((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getMapLayerProperty", "_frozenCountdown") > 0) {
            //地形减速
            let baseDamage = this._maxBlood * 0.05 | 0;
            let damage = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "getCurDamage");
            damage = Math.floor(damage * 0.05) + baseDamage;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("createDamageTex", this.node, damage, {
              x: 0,
              y: 20
            });
            this.updateBlood(damage);
          }
        }

        initMonsterMoveAnim(data) {
          let animKey = "monster" + data.animKey;
          let clip = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getMonsterAnimByAnimKey", animKey);

          if (clip) {
            this._moveAnimClip = clip;
            this.node.getComponent(Animation).defaultClip = clip;
            this.node.getComponent(Animation).play();
          } else {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("loadTheDirResources", "/anim/enemy/monster/" + animKey, assets => {
              this._moveAnimClip = assets;
              this.node.getComponent(Animation).defaultClip = assets;
              this.node.getComponent(Animation).play();
            });
          }
        }

        initCollider() {
          let collider = this.getComponent(BoxCollider2D);
          if (!collider) collider = this.node.addComponent(BoxCollider2D);
          let UIT = this.node.getComponent(UITransform); // let monsterSize = new Size(UIT.contentSize.x, UIT.contentSize.y);
          // let monsterSize = new Size(UIT.contentSize.x / 2, UIT.contentSize.y / 2);
          // let monsterSize = new Size(UIT.contentSize.x *3/ 4, UIT.contentSize.y *3/ 4);

          this._monsterSize = new Size(UIT.contentSize.x / 2, UIT.contentSize.y / 2); // this._monsterSize = new Size(UIT.contentSize.width/ 2, UIT.contentSize.height / 2);

          collider.tag = (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).monster;
          collider.size = this._monsterSize;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).enemy;
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        } //更新血量


        updateBlood(changeValue, backDis = 0) {
          // console.log("monster更新血量");
          // em.dispatch("playOneShot", "battle/怪物受击");
          this._curBlood += changeValue;

          if (this._curBlood <= 0) {
            // // 死亡材质效果,留给boss 使用
            // let spriteComp = this.node.getComponent(Sprite);
            // this._diedAnimProgress = 0;
            // spriteComp.material = this.diedMaterial;
            // this.schedule(this.playDiedEffect, 1 / 60);
            this.monsterDied();
          } else {
            this.monsterIsRepelled(backDis); // 判断是否被控制

            let debuffList = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingSkillManagerFun", "getSkillDebuffEffectList"); // console.log("debuffList",debuffList);

            if (debuffList.length > 0) {
              //目前只表现一种情况 第一种
              console.log("debuffList", debuffList[0]);
              this.updateDebuffStateByHeroSkill(debuffList[0]);
            }
          }
        } //根据英雄技能刷新怪物 debuff 状态


        updateDebuffStateByHeroSkill(debuff) {
          switch (debuff.type) {
            case "paralysis":
              this.addDebuffParalysis(debuff.duration);
              break;

            default:
              console.warn("未处理的debuff：" + debuff.type);
              break;
          }
        } // // 播放死亡特效
        // playDiedEffect() {
        //     this._diedAnimProgress += 1 / 60;
        //     this.diedMaterial.setProperty("diedProgress", this._diedAnimProgress);
        //     if (this._diedAnimProgress >= 1) {
        //         this.unschedule(this.playDiedEffect);
        //         this.monsterDied();
        //     };
        // }
        //怪物死亡


        monsterDied() {
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).putToPool("monsterChild", this.node);
          this.removeAgent(); // 加经验

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateExpProgress", 100); // em.dispatch("usingHeroControlFun", "updateExpProgress", 200);

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("updateKillCountLabel", 1);
          this.afterMonsterDied();
        }
        /**
         * @description: 当怪物死亡后触发的事件
         * 是否触发 血煞功（bloodMakeMeStrong） 和 嗜血术（drinkBlood）
         */


        afterMonsterDied() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingSkillManagerFun", "add_bloodMakeMeStrongTimes");
          let value = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingSkillManagerFun", "getRecoveryBloodFromSecretSkill");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateBloodProgress", value); // this.setMonsterStrategyByIdOnTheBeggingAfterDied();//暂时没用
        } //怪物被击退


        monsterIsRepelled(backDis) {
          this.flashWhite(); //闪白  被击退的特效

          if (!this._isSuperArmor) {
            //非霸体会被击退
            this._backDis = backDis;
            this._waitRepel = true;
          }
        }

        getDistanceToHero() {
          // let targetPos = em.dispatch("getHeroWorldPos");
          let targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTargetWorldPos");
          let curPos = this.node.getWorldPosition();
          return this.getTwoPointDistance(targetPos, curPos);
        } //闪白


        flashWhite() {
          if (this.isStrongControlled()) return; //被强控时 不替换材质

          this.unschedule(this.recoveryNormalState);
          this.switchParByType("white");
          let spriteComp = this.node.getComponent(Sprite);
          spriteComp.material = this.flashWhiteMaterial;
          let interval = 0.1;
          this._banTouch = true;
          this.scheduleOnce(this.recoveryNormalState, interval);
        } // //闪白
        // flashWhite() {
        //     if (this.isStrongControlled()) return;//被强控时 不替换材质
        //     // this.node.getComponent(Animation).play(this.beAttackedAnim.name);
        //     this.unschedule(this.recoveryNormalState);
        //     let spriteComp = this.node.getComponent(Sprite);
        //     spriteComp.material = this.flashWhiteMaterial;
        //     let interval = 0.1;
        //     this._banTouch = true;
        //     this.scheduleOnce(this.recoveryNormalState, interval);
        // }


        playMoveAnim() {
          this.node.getComponent(Animation).play();
        }

        frozenEffect() {
          let spriteComp = this.node.getComponent(Sprite);
          spriteComp.material = this.debuff_frozen;
          this.switchParByType("frozen");
          this.pauseAnim();
        }

        paralysisEffect() {
          let spriteComp = this.node.getComponent(Sprite);
          spriteComp.material = this.debuff_paralysis;
          this.switchParByType("paralysis");
          this.pauseAnim();
        } // 恢复到正常状态


        recoveryNormalState() {
          this._banTouch = false;
          if (this.isStrongControlled()) return; //冻结状态 不恢复到正常

          this.switchParByType(this._parKey);
          this.recoveryDefaultMaterial();
          this.resumeAnim();
        } // // 恢复到正常状态
        // recoveryNormalState() {
        //     this._banTouch = false;
        //     if (this.isStrongControlled()) return;//冻结状态 不恢复到正常
        //     this.recoveryDefaultMaterial();
        //     this.resumeAnim();
        // }


        recoveryDefaultMaterial() {
          let spriteComp = this.node.getComponent(Sprite);
          spriteComp.material = this._defaultMaterial;
        } //向目标聚合


        collectToTarget(self, target) {
          if (!target) return; //target被销毁等

          let twp = target.node.getWorldPosition();
          let mwp = self.node.getWorldPosition();
          twp.subtract3f(mwp.x, mwp.y, mwp.z).normalize();
          let collectDis = 20;
          let pos = this.node.getPosition();
          this.node.setPosition(pos.x + collectDis * twp.x, pos.y + collectDis * twp.y, 0);
        } //获取两点的距离


        getTwoPointDistance(pos1, pos2) {
          let x = pos1.x - pos2.x;
          let y = pos1.y - pos2.y;
          return Math.sqrt(x * x + y * y);
        } //获取两点的距离的平方


        getTwoPointDistance2(pos1, pos2) {
          let x = pos1.x - pos2.x;
          let y = pos1.y - pos2.y;
          return x * x + y * y;
        }

        onBeginContact(self, other) {
          // console.log("onBeginContact");
          // return;
          // if(em.dispatch("getMonsterMovingState")) return;
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (this._banTouch) return; // 只在两个碰撞体开始接触时被调用一次

          if (self.tag == other.tag) return; //同类型碰撞 忽略

          switch (other.tag) {
            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).hero:
              this.monsterAttackByCollide(self, other);
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).puppet:
              this.monsterAttackByCollide(self, other, "puppet");
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).friend1Skill1:
              this.friendAttackMonsterByFriend1Skill1(self, other);
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).obstacle:
              // this.ejectMonsterInObstacle(self.worldAABB, other.worldAABB);
              break;

            default:
              //怪物与武器的碰撞在weapon类中处理，这里只处理monster与其他类型的碰撞，如hero、friendSkill
              break;
          }
        } //判断矩形是否相交


        rectIsIntersectsRect(rect1, rect2) {
          // console.log("rect1 is intersects rect2", rect1.intersects(rect2));
          // console.log("rect1 is containsRect  ide rect2", rect1.containsRect(rect2));
          return rect1.intersects(rect2);
        }
        /**
         * @description: 通过碰撞体的矩阵是否相交 判断两个物体是否相交
         */


        isTouchingHero() {
          let collider1 = this.getComponent(BoxCollider2D);
          let collider2 = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "node").getChildByName("sprite").getComponent(BoxCollider2D);
          return this.rectIsIntersectsRect(collider1.worldAABB, collider2.worldAABB);
        } // 怪物通过碰撞攻击英雄


        monsterAttackByCollide(self, other, type = "hero") {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) {
            this.scheduleOnce(() => {
              this._canAttack = true;
              this.monsterAttackByCollide(self, other, type);
            }, this._attackInterval);
            return;
          }

          if (!this.rectIsIntersectsRect(self.worldAABB, other.worldAABB)) return;
          if (!this._canAttack) return;
          this._canAttack = false; //含有冻结 碰撞后自身消失

          if (this._effectList.frozen && type == "hero") {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "addDebuffSlow", 5, 10); //降低10点移速 持续5s
          }

          if (type == "hero") {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("createMonsterDamageTex", other.node, this.getMonsterCurDamage());
          } else if (type == "puppet") {
            other.node.updateBloodProgress(-this.getMonsterCurDamage());
          } else throw "type is " + type; // let attackInterval = 1;//攻击间隔
          //不同怪物攻击间隔可能不同 后期修改


          this.scheduleOnce(() => {
            this._canAttack = true;
            this.monsterAttackByCollide(self, other, type);
          }, this._attackInterval);
        } //被宝宝技能击中


        friendAttackMonsterByFriend1Skill1(self, other) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this.rectIsIntersectsRect(self.worldAABB, other.worldAABB)) return;
          let damage = 5;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createDamageTex", self.node, damage, {
            x: 0,
            y: 20
          });
          this.updateBlood(-damage, 0);
          this.collectToTarget(self, other);
          this.scheduleOnce(() => {
            this.friendAttackMonsterByFriend1Skill1(self, other);
          }, (_crd && attackInterval === void 0 ? (_reportPossibleCrUseOfattackInterval({
            error: Error()
          }), attackInterval) : attackInterval).f1s1);
        }

        update(dt) {
          //effect4  加速冲向某个方向
          if (this._curMonsterData.effects.indexOf(4) > -1) return;
          this.move();
          this.updateSpriteDirection();
        }

        move() {
          if (this._sid > -1) {
            let pos = (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
              error: Error()
            }), Simulator) : Simulator).Instance.getAgentPosition(this._sid); // let vel: Vector2 = Simulator.Instance.getAgentPrefVelocity(this._sid);

            if (!Number.isNaN(pos.x) && !Number.isNaN(pos.y)) {
              this.node.setWorldPosition(pos.x, pos.y, 0);
            } else {
              console.log(`sid=${this._sid}的对象PosX=${pos.x},PosY=${pos.y}`);
            }
          }

          this.updatePrefVelocity();
        }

        updatePrefVelocity() {
          let targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTargetWorldPos");

          if (targetPos != null) {
            let curPos = (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
              error: Error()
            }), Simulator) : Simulator).Instance.getAgentPosition(this._sid);
            let goalVector = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(targetPos, curPos);

            if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq(goalVector) > 1) {
              // goalVector = RVOMath.normalize(goalVector);
              let tempV2 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).normalize(goalVector); // goalVector = Vector2.multiply2(10,tempV2);

              let times = this.getMonsterCurMoveSpeed() / 100;
              goalVector = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(10 * times, tempV2);

              if (this._waitRepel) {
                times = this._backDis / 100 * 10;
                goalVector = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).multiply2(10 * times, tempV2);
                goalVector.x *= -1;
                goalVector.y *= -1;
                this._waitRepel = false;
              }
            }

            (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
              error: Error()
            }), Simulator) : Simulator).Instance.setAgentPrefVelocity(this._sid, goalVector); //由于完美对称，稍微扰动一下以避免死锁,但是不注释坐标始终会有变化
            // let angle = Math.random() * 2.0 * Math.PI;
            // let dist = Math.random() * 0.1;
            // Simulator.Instance.setAgentPrefVelocity(this._sid, Vector2.addition(Simulator.Instance.getAgentPrefVelocity(this._sid),
            //     Vector2.multiply2(dist, new Vector2(Math.cos(angle), Math.sin(angle)))));
          }
        }

        updateSpriteDirection() {
          if (this.isStrongControlled()) return; // let x = em.dispatch("getHeroWorldPos").x - this.node.getWorldPosition().x;

          let x = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTargetWorldPos").x - this.node.getWorldPosition().x;
          let scale = this.node.getScale();
          if (x > 0) this.node.setScale(-Math.abs(scale.x), scale.y, scale.z);else if (x < 0) this.node.setScale(Math.abs(scale.x), scale.y, scale.z);
        }

        pauseAnim() {
          this.node.getComponent(Animation).pause();
        }

        resumeAnim() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return; //防止暂停后被击中 调用恢复函数 。恢复了 动画状态

          if (this.isStrongControlled()) return;
          this.node.getComponent(Animation).resume();
        } //=================获取怪物当前信息======================
        // 获取怪物当前伤害


        getMonsterCurDamage() {
          // if (this._debuffList.frozen.state) return this._debuffList.frozen.damage;//冻结
          if (this.isStrongControlled()) return 0;
          let damage = this._curMonsterData.damage; //胆怯

          if (this._debuffList.timid.state) damage *= this._debuffList.timid.damage;
          return damage;
        } //获取怪物当前移速


        getMonsterCurMoveSpeed() {
          // if (this._debuffList.frozen.state) return this._debuffList.frozen.moveSpeed;//冻结
          if (this.isStrongControlled()) return 0;
          let moveSpeed = this._curMonsterData.moveSpeed * (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
            error: Error()
          }), monsterData) : monsterData).MSCoefficient * this._curMoveSpeedTimes * this._speedMonsterSpeedTimes;
          if (this._debuffList.timid.state) moveSpeed *= this._debuffList.timid.moveSpeed; //胆怯

          if ((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getMapLayerProperty", "_frozenCountdown") > 0) {
            //地形减速
            let slowTimes = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getMapLayerProperty", "_frozenSlowTimes");
            moveSpeed *= 1 - slowTimes;
          } // return moveSpeed*0.1;


          return moveSpeed;
        }
        /**
         * @description: 是否是强控状态 强控包括：麻痹、冻结 
         * 强控状态 无法移动 无法造成伤害
         */


        isStrongControlled() {
          return this._debuffList.frozen.state || this._debuffList.paralysis.state;
        } // 添加 debuff timid


        addDebuffTimid(t) {
          this._debuffList.timid.state = true;
          this._debuffList.timid.duration = t;
          this.unschedule(this.reduceDebuffTimid);
          this.scheduleOnce(this.reduceDebuffTimid, 1);
        } // 减去 debuff timid


        reduceDebuffTimid() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._debuffList.timid.duration--;

          if (this._debuffList.timid.duration <= 0) {
            this._debuffList.timid.state = false;
            this.unschedule(this.reduceDebuffTimid);
          }
        } // 添加debuff paralysis


        addDebuffParalysis(t) {
          this._debuffList.paralysis.state = true;
          this._debuffList.paralysis.duration = t;
          this.paralysisEffect();
          this.unschedule(this.reduceDebuffParalysis);
          this.schedule(this.reduceDebuffParalysis, 1);
        } // 减去 debuff paralysis


        reduceDebuffParalysis() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._debuffList.paralysis.duration--;

          if (this._debuffList.paralysis.duration <= 0) {
            this._debuffList.paralysis.state = false;
            this.recoveryNormalState();
            this.unschedule(this.reduceDebuffParalysis);
          }
        } // 添加 debuff frozen


        addDebuffFrozen(t) {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("playOneShot", "battle/frozen");
          this._debuffList.frozen.state = true;
          this._debuffList.frozen.duration = t;
          this.frozenEffect();
          this.unschedule(this.reduceDebuffFrozen);
          this.schedule(this.reduceDebuffFrozen, 1);
        }

        reduceDebuffFrozen() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._debuffList.frozen.duration--;

          if (this._debuffList.frozen.duration <= 0) {
            this._debuffList.frozen.state = false;
            this.recoveryNormalState();
            this.unschedule(this.reduceDebuffFrozen);
          }
        } //弹出卡在墙里的怪物 


        ejectMonsterInObstacle(rect1, rect2) {
          return; // console.log("碰到墙体，弹出墙体。根据距离，判断弹出距离，还没写。");

          let backDis = 500;
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          let mwp = this.node.getWorldPosition();
          mwp.subtract3f(hwp.x, hwp.y, hwp.z).normalize();
          let pos = this.node.getPosition();
          console.log("backDis * mwp.x,", backDis * mwp.x);
          this.node.setPosition(pos.x + backDis * mwp.x, pos.y + backDis * mwp.y, 0);
        } //======================设置怪物攻击策略=================

        /**
         * @description setMonsterStrategyByIdOnTheBegging boss开始时策略
         * @effect1_5 1：子弹 2：急冻（减速）怪 3：移速++  4:朝向目标方向快速冲刺，10s后消失
         * @effect
         * */


        setMonsterStrategyByIdOnTheBegging() {
          for (const id of this._curMonsterData.effects) {
            switch (id) {
              case 1:
                this.setBulletMonsterStrategy(); //怪 释放子弹

                break;

              case 2:
                this.setFrozenStrategy(); //怪 急冻（减速玩家）

                break;

              case 3:
                this.setSpeedMonsterStrategy(); //怪 移速提升

                break;

              case 4:
                this.fastMoveToHeroCurPos(); //怪 移速提升

                break;

              default:
                break;
            }
          }
        } //设置子弹怪的策略 


        setBulletMonsterStrategy() {
          let probability = Math.ceil(this._monsterId / 6);

          if (Math.random() < probability * 0.2) {
            let color = new Color(255, 0, 0, 255);
            this.shotOnce(color);
          }
        }

        setFrozenStrategy() {
          this._effectList.frozen = true;
          this._defaultMaterial = this.effect_frozen;
          this._parKey = "effect_frozen";
          this.switchParByType(this._parKey);
          this.recoveryDefaultMaterial();
        } // 设置移速怪策略


        setSpeedMonsterStrategy() {
          // 设置移速怪
          let times = Math.ceil(this._monsterId / 6) * 0.5 + 1.5;
          this._speedMonsterSpeedTimes = times;
        }
        /**
         * @description 快速冲向玩家当前位置 存活时间为15s 短时间内 冲向一个方向 关闭sid
         * */


        fastMoveToHeroCurPos() {
          console.log("快速冲向玩家");
        } //boss死亡后的策略


        setMonsterStrategyByIdOnTheBeggingAfterDied() {} // 攻击 仅攻击一次


        shotOnce(color) {
          let bullet = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("monsterBullet");
          bullet.getComponent(Sprite).color = color;
          let flyDir = this.getDirToHero();
          bullet.parent = find("Canvas/bulletLayer");
          let wp = this.node.getWorldPosition();
          bullet.active = true;
          bullet.setWorldPosition(wp);
          this._bulletData.damage = this._curMonsterData.damage;
          bullet.getComponent("EnemySkill").init(this._bulletData, flyDir, 0.5);
        } // 获取朝向hero的方向


        getDirToHero() {
          let nwp = this.node.getWorldPosition();
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          let x = hwp.x - nwp.x;
          let y = hwp.y - nwp.y;
          let dir = {
            x: 0,
            y: 0
          };
          let offset = {
            x: x,
            y: y
          };

          if (offset.x == 0) {
            dir.x = 0;
            dir.y = Math.abs(offset.y) / offset.y;
          } else if (offset.y == 0) {
            dir.x = Math.abs(offset.x) / offset.x;
            dir.y = 0;
          } else {
            let rate = Math.abs(offset.x / offset.y);

            if (rate >= 1) {
              dir.x = Math.abs(offset.x) / offset.x;
              dir.y = 1 / rate * Math.abs(offset.y) / offset.y;
            } else {
              dir.x = rate * Math.abs(offset.x) / offset.x;
              dir.y = Math.abs(offset.y) / offset.y;
            }

            ;
          }

          ;
          return new Vec2(dir.x, dir.y);
        } // 恢复函数


        initDefaultData() {
          // console.log("initDefaultData");
          this._effectList = {
            "fast": false,
            //加速
            "frozen": false //冻结

          };
          this._debuffList = {
            "timid": {
              "state": false,
              "duration": 0,
              "damage": 0.5,
              "moveSpeed": 0.5
            },
            "frozen": {
              "state": false,
              "duration": 0
            },
            "paralysis": {
              "state": false,
              "duration": 0
            }
          };
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "flashWhiteMaterial", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial_normal", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial_green", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial_red", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial_yellow", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "debuff_frozen", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "debuff_paralysis", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "effect_frozen", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "beAttackedAnim", [_dec10], {
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
//# sourceMappingURL=78847f103c7d887acaa6ce578e2732417ca91324.js.map