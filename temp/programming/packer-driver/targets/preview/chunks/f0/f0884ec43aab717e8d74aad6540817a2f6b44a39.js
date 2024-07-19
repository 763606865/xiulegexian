System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, input, Input, Node, find, JsonAsset, Label, Animation, game, Color, PhysicsSystem2D, EPhysics2DDrawFlags, BoxCollider2D, Rect, Collider2D, view, instantiate, Prefab, Material, em, ggd, tagData, LevelManager, glf, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, HeroControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelManager(extras) {
    _reporterNs.report("LevelManager", "../system/LevelManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../global/globalFun", _context.meta, extras);
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
      input = _cc.input;
      Input = _cc.Input;
      Node = _cc.Node;
      find = _cc.find;
      JsonAsset = _cc.JsonAsset;
      Label = _cc.Label;
      Animation = _cc.Animation;
      game = _cc.game;
      Color = _cc.Color;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      BoxCollider2D = _cc.BoxCollider2D;
      Rect = _cc.Rect;
      Collider2D = _cc.Collider2D;
      view = _cc.view;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Material = _cc.Material;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      LevelManager = _unresolved_4.LevelManager;
    }, function (_unresolved_5) {
      glf = _unresolved_5.glf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4ed82YzdmNLu7le/hYjoBZp", "HeroControl", undefined); // 英雄死亡


      __checkObsolete__(['_decorator', 'Component', 'Sprite', 'input', 'Input', 'Node', 'find', 'js', 'JsonAsset', 'Label', 'Animation', 'game', 'Game', 'Color', 'PhysicsSystem2D', 'EPhysics2DDrawFlags', 'BoxCollider2D', 'ParticleSystem', 'ParticleSystem2D', 'Rect', 'Collider2D', 'Touch', 'math', 'view', 'instantiate', 'Prefab', 'macro', 'native', 'JavaScript', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroControl", HeroControl = (_dec = ccclass('HeroControl'), _dec2 = property(Sprite), _dec3 = property(Sprite), _dec4 = property(Node), _dec5 = property(Sprite), _dec6 = property(JsonAsset), _dec7 = property(JsonAsset), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Prefab), _dec11 = property(Node), _dec12 = property(Prefab), _dec13 = property([Material]), _dec(_class = (_class2 = class HeroControl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bloodSprite", _descriptor, this);

          _initializerDefineProperty(this, "shieldSprite", _descriptor2, this);

          _initializerDefineProperty(this, "heroSprite", _descriptor3, this);

          _initializerDefineProperty(this, "expProgress", _descriptor4, this);

          _initializerDefineProperty(this, "expDataJson", _descriptor5, this);

          _initializerDefineProperty(this, "heroPropertyDataJson", _descriptor6, this);

          _initializerDefineProperty(this, "lvDescription", _descriptor7, this);

          _initializerDefineProperty(this, "GameUILayer", _descriptor8, this);

          _initializerDefineProperty(this, "itemInPlaying", _descriptor9, this);

          _initializerDefineProperty(this, "curDirPar", _descriptor10, this);

          _initializerDefineProperty(this, "flyingThunderGodPrefab", _descriptor11, this);

          _initializerDefineProperty(this, "heroMaterial", _descriptor12, this);

          this._flyingThunderGodCount = 0;
          //飞雷神计数
          this._flyingThunderGodMark = void 0;
          //分类神标记
          this._spriteAnim = void 0;
          this._heroData = void 0;
          this._expData = void 0;
          this._curDirection = {
            x: 1,
            y: 0
          };
          this._curAimDir = {
            x: 1,
            y: 0
          };
          this._canMove = false;
          this._LM = void 0;
          //外部脚本
          this._WM = void 0;
          this._baseBlood = void 0;
          this._bonusBlood = void 0;
          this._curBlood = void 0;
          this._baseMoveSpeed = void 0;
          this._bonusMoveSpeed = void 0;
          this._baseDamage = void 0;
          this._bonusDamage = void 0;
          this._criticalHitRate = void 0;
          //暴击率
          this._bonusCriticalHitRate = void 0;
          this._bonusCriticalHitDamage = void 0;
          //额外爆伤（除自身暴击伤害外的额外暴击伤害）  暴击伤害 =  1+爆伤
          this._bonusBulletTotal = 0;
          this._bonusBulletMoveSpeed = 0;
          this._bonusBulletDuration = 0;
          this._bonusBulletAttackTimes = 0;
          this._bonusBackDis = 0;
          //额外击退距离
          this._recoveryHealthy = 0;
          this._expAddition = 0;
          this._divineStoneAddition = 0;
          //词条提供
          this._damageReduce = 0;
          //减伤
          this._slowResistance = 0;
          //减速抗性
          this._continueSlowPer = 0;
          //持续减速效果 不受时间影响
          this._moveSpeedTimes = 1;
          this._changeHeroMoveSpeedCountdown = 0;
          this._tempCriticalHitRate = 0;
          //临时暴击率 通过技能 药物 等提升 
          this._tempPercentageDamage = 0;
          //临时百分比伤害 通过技能或药物等提升 
          this._isDamageImmunity = false;
          //伤害免疫
          //百分比属性
          this._percentageDamage = void 0;
          this._percentageBlood = void 0;
          this._percentageMoveSpeed = void 0;
          // 额外百分比属性
          this._bonusPercentageDamage = void 0;
          this._bonusPercentageBlood = void 0;
          this._bonusPercentageMoveSpeed = void 0;
          this._effectList = void 0;
          //技能词条列表
          //技能相关
          this._trackDisappearCountdown = 0;
          //迷踪步倒计时
          //护盾相关
          this._shieldList = {
            "iceShield": false,
            //冰盾术
            "effect5006": false //重甲之魂

          };
          this._maxShield = 0;
          this._curShield = 0;
          //自动化脚本
          this._openAutoScript = false;
          //debuff清单
          this._deBuffList = {
            "banMove": false,
            "slow": {
              //减速比率 减速数值 减速时间
              "percent": 0,
              "value": 0,
              "time": 0
            }
          };
          //双触
          this._touchMoveId = void 0;
          this._touchShotId = void 0;
          //傀儡
          this._heroPuppet = null;
          this._canRebirthByAdTimes = 1;
          this._gameRunTimer = 0;
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getHeroWorldPos");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getTargetWorldPos");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingHeroControlFun");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getHeroControlProperty");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("rebirthHero");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("closeRebirthAd");
          input.off(Input.EventType.TOUCH_START, this.touchStart, this);
          input.off(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          input.off(Input.EventType.TOUCH_END, this.touchEnd, this);
        }

        onLoad() {
          // this.openPhysicalDraw();
          // this.showViewInfo();
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getHeroWorldPos", this.getHeroWorldPos.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getTargetWorldPos", this.getTargetWorldPos.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingHeroControlFun", this.usingHeroControlFun.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getHeroControlProperty", this.getHeroControlProperty.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("rebirthHero", this.rebirthHero.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("closeRebirthAd", this.closeRebirthAd.bind(this));
          input.on(Input.EventType.TOUCH_START, this.touchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.touchMove, this);
          input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
          this.initHeroData();
          this.initComponents();
          this.initOutScripts();
          this._curDirection = {
            x: 0,
            y: 0
          };
          this.schedule(this.continueRecoveryHealthy, 1);
          this.createRandomSkill(); //游戏运行计时器开始计时

          this.schedule(() => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            this._gameRunTimer++;
            this.activeEffects();
          }, 1);
        }

        createRandomSkill() {
          var _this = this;

          var total = 1 + Math.random() * 5 | 0;
          var loadUrl = "images/items/skillBook/spriteFrame";
          var posArr = [{
            x: -500,
            y: 0
          }, {
            x: 500,
            y: 0
          }, {
            x: 0,
            y: 500
          }, {
            x: 0,
            y: 500
          }, {
            x: -500,
            y: 500
          }, {
            x: 500,
            y: 500
          }, {
            x: -500,
            y: -500
          }, {
            x: 500,
            y: -500
          }];

          var _loop = function _loop() {
            var pos = posArr[i];
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => {
              var prefab = instantiate(_this.itemInPlaying);
              prefab.parent = find("Canvas/bulletLayer");
              prefab.setPosition(pos.x, pos.y, 0);
              prefab.getComponent(Sprite).spriteFrame = assets;
              prefab.getComponent("ItemInPlaying").init((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
                error: Error()
              }), tagData) : tagData).randomSkillReward);
            });
          };

          for (var i = 0; i < total; i++) {
            _loop();
          }
        }

        start() {//    this.schedule(()=>{
          //      // 找到距离自己最近的单位
          //      let tree = em.dispatch("getCurMonsterQuadtree");
          //      let collider = this.node.getChildByName("sprite").getComponent(BoxCollider2D);
          //      let rect = collider.worldAABB;
          //      let res = tree.retrieve(rect);
          //      console.log("查询结果",res);
          //    },1);
        }

        showViewInfo() {
          console.log("view", view);
          console.log("getVisibleSize", view.getVisibleSize());
        }

        openPhysicalDraw() {
          PhysicsSystem2D.instance.enable = true;
          PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb | EPhysics2DDrawFlags.Pair | EPhysics2DDrawFlags.CenterOfMass | EPhysics2DDrawFlags.Joint | EPhysics2DDrawFlags.Shape;
        } // 初始化玩家数据


        initHeroData() {
          this._heroData = this.heroPropertyDataJson.json[0]; //0 为当前的 后期配置hero data list  通过id 索引 获取配置

          this.initExpData();
          this.initHeroDataByLv();
          this.updateBloodProgress(0); //用于初次刷新血条
        } // 初始化经验数据 和 等级


        initExpData() {
          this._expData = this.expDataJson.json;
          var obj = {
            "level": 1,
            "maxLevel": this._expData.length,
            "curExp": 0,
            "levelMappingExpList": this._expData
          };
          this._LM = new (_crd && LevelManager === void 0 ? (_reportPossibleCrUseOfLevelManager({
            error: Error()
          }), LevelManager) : LevelManager)(obj);
          this.lvDescription.string = "LV:" + this._LM.level;
        }
        /**
         * @description: 属性包括基础属性和额外属性 
         */


        initHeroDataByLv() {
          var a = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getBasePropertyValueByEqu");
          this._effectList = a.effectList;
          console.log("hero data", this._heroData);
          this._slowResistance = a.slowResistance;
          this._slowResistance > 1 ? 1 : this._slowResistance;
          this._damageReduce = a.damageReduce;
          this._continueSlowPer = a.slowPer;
          this._baseBlood = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getTrainingData", "blood") + a.blood;
          this._baseMoveSpeed = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getTrainingData", "moveSpeed") + a.moveSpeed;
          ; // this._baseMoveSpeed += 500;

          this._baseMoveSpeed += (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "moveSpeed"); // this._isDamageImmunity = true;

          this._baseDamage = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getTrainingData", "damage") + a.baseDamage;
          this._percentageBlood = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "percentageBlood");
          this._percentageDamage = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "percentageDamage");
          this._percentageMoveSpeed = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "percentageMoveSpeed");
          this._percentageMoveSpeed = 0; //暂时移除百分比移速加成

          this._criticalHitRate = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "criticalHitRate") + a.CHR;
          this._bonusCriticalHitDamage = a.CHD + a.bonusCHD; //爆伤

          this._bonusBulletTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "bonusBulletTotal");
          this._bonusBulletTotal = a.bonusBulletTotal; //额外法宝数量

          this._bonusBulletMoveSpeed = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "bonusBulletMoveSpeed") + a.bonusMoveSpeed;
          this._bonusBulletDuration = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "bonusBulletDuration");
          this._bonusBulletAttackTimes = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "bonusBulletAttackTimes") + a.bonusBulletAttackTimes;
          this._bonusBackDis = a.bonusBackDis;
          this._recoveryHealthy = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "recoveryHealthy");
          this._expAddition = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "expAddition") / 100;
          this._divineStoneAddition = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getHeroBaseProperty", "divineStoneAddition") / 100; //灵石加成 暂未开发

          this._bonusBlood = 0;
          this._bonusMoveSpeed = 0;
          this._bonusDamage = 0;
          this._bonusCriticalHitRate = 0; // this._bonusCriticalHitRate = 100;

          this._bonusPercentageBlood = 0;
          this._bonusPercentageMoveSpeed = 0;
          this._bonusPercentageDamage = 0;
          this._curBlood = this.getMaxBlood();
          this.updateBloodProgress(0);
        } //获取角色属性描述


        getHeroPropertiesDes() {
          // let string = "==============英雄属性==============\n";
          var string = "英雄属性:\n";
          var bB = "基础血量：" + this._baseBlood + "\n";
          var bMS = "基础移速：" + this._baseMoveSpeed + "\n";
          var bD = "基础伤害：" + this._baseDamage + "\n";
          var bCHR = "基础暴击率：" + this._criticalHitRate + "\n";
          var pB = "血量百分比加成：" + this._percentageBlood + "\n";
          var pD = "伤害百分比加成：" + this._percentageDamage + "\n";
          var pMS = "移速百分比加成：" + this._percentageMoveSpeed + "\n";
          var boB = "额外血量：" + this._bonusBlood + "\n";
          var boMS = "额外移速：" + this._bonusMoveSpeed + "\n";
          var boD = "额外伤害：" + this._bonusDamage + "\n";
          var boCHR = "额外暴击率：" + this._bonusCriticalHitRate + "\n";
          var bPB = "额外血量百分比加成：" + this._bonusPercentageBlood + "\n";
          var bPMS = "额外移速百分比加成：" + this._bonusPercentageMoveSpeed + "\n";
          var bPD = "额外伤害百分比加成：" + this._bonusPercentageDamage + "\n";
          var tCHR = "临时暴击率：" + this._tempCriticalHitRate + "\n";
          var tPD = "临时百分比加成：" + this._tempPercentageDamage + "\n";
          var cB = "当前血量：" + this._curBlood + "/" + this.getMaxBlood() + "\n";
          var cS = "当前护盾：" + this._curShield + "\n";
          var cD = "当前伤害：" + this.getCurDamage() + "\n";
          var cMS = "当前移速：" + this.getCurMoveSpeed() + "\n";
          var cCHR = "当前暴击率：" + this.getCurCHR() + "\n"; // string += bB + bMS + bD + bCHR + pB + pD + pMS + boB + boMS + boD + boCHR + bPB + bPMS + bPD+tCHR;

          string += cB + cS + cD + cMS + cCHR + bB + bMS + bD + bCHR + tPD + pB + pD + pMS + boB + boMS + boD + boCHR + bPB + bPMS + bPD + tCHR;
          return string;
        } //初始化组件


        initComponents() {
          this._spriteAnim = find("sprite", this.node).getComponent(Animation);
        } // 初始化外部脚本


        initOutScripts() {
          this._WM = find("weapon", this.node).getComponent("WeaponManager");
        }

        update(deltaTime) {
          this.heroMoveControl(deltaTime);
          var x1 = -1;
          var y1 = 0;
          var x2 = this._curDirection.x;
          var y2 = this._curDirection.y;
          var cos = (x1 * x2 + y1 * y2) / (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2));
          var angle = Math.acos(cos) / Math.PI * 180;
          if (this._curDirection.y > 0) angle = 360 - angle;
          this.curDirPar.angle = angle; // console.log("hero world Pos",this.heroSprite.getWorldPosition());
        } //角色移动


        heroMoveControl(t) {
          if (!this._canMove) return;
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var dir = this._curDirection;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingMapLayerFun", "updateMap", dir); //刷新地图

          var speed = this.getCurMoveSpeed();
          var result = this.isCollideObs(dir.x * t * speed, dir.y * t * speed);

          if (result) {
            this.node.setPosition(this.node.position.x + result.x, this.node.position.y + result.y);
            return;
          }

          this.node.setPosition(this.node.position.x + dir.x * t * speed, this.node.position.y + dir.y * t * speed);
        }

        isCollideObs(x, y) {
          var obsArr = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingMapLayerFun", "getAllObs");
          var curPos = this.heroSprite.getWorldPosition();
          var collider = this.heroSprite.getComponent(Collider2D); // return false;

          var rect = new Rect(collider.worldAABB.x + x, collider.worldAABB.y + y, collider.worldAABB.width, collider.worldAABB.height);

          for (var obs of obsArr) {
            var obsPos = obs.node.getWorldPosition();
            if (this.getTwoPointDistance(curPos, obsPos > 300)) continue; //距离超过300的障碍物直接忽略  多此一举？
            else {
              if (this.rectIsIntersectsRect(rect, obs.worldAABB)) {
                if (x !== 0 && y !== 0) {
                  rect = new Rect(collider.worldAABB.x + x, collider.worldAABB.y, collider.worldAABB.width, collider.worldAABB.height);
                  if (!this.rectIsIntersectsRect(rect, obs.worldAABB)) return {
                    x: x,
                    y: 0
                  };
                  rect = new Rect(collider.worldAABB.x, collider.worldAABB.y + y, collider.worldAABB.width, collider.worldAABB.height);
                  if (!this.rectIsIntersectsRect(rect, obs.worldAABB)) return {
                    x: 0,
                    y: y
                  };else return false; //卡在两个墙挂角方向
                } else if (x === 0 && y !== 0) {
                  rect = new Rect(collider.worldAABB.x, collider.worldAABB.y + y, collider.worldAABB.width, collider.worldAABB.height);
                  if (!this.rectIsIntersectsRect(rect, obs.worldAABB)) return {
                    x: 0,
                    y: y
                  };
                } else if (x !== 0 && y === 0) {
                  rect = new Rect(collider.worldAABB.x + x, collider.worldAABB.y, collider.worldAABB.width, collider.worldAABB.height);
                  if (!this.rectIsIntersectsRect(rect, obs.worldAABB)) return {
                    x: x,
                    y: 0
                  };
                } else {
                  return false;
                }
              }
            }
          }

          return false;
        } //获取两点的距离


        getTwoPointDistance(pos1, pos2) {
          var x = pos1.x - pos2.x;
          var y = pos1.y - pos2.y;
          return Math.sqrt(x * x + y * y);
        } //判断矩形是否相交


        rectIsIntersectsRect(rect1, rect2) {
          return rect1.intersects(rect2);
        } //改变changeMove状态 外部调用


        changeMoveState(bool) {
          this._canMove = bool;
        }
        /**
         * @description: 优先给移动id 和 射击id 分配值
         * 如果都有值，在根据值判断是移动 还是 射击
         * @param {Touch} e
         */


        touchStart(e) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var id = e.getID();

          if (this._touchMoveId === undefined) {
            this._touchMoveId = id;
            this.heroMoveByTouchStart();
          } else if (this._touchShotId == undefined) {
            this._touchShotId = id;
            this.heroShotByTouchStart(e);
          } else if (this._touchMoveId === id) this.heroMoveByTouchStart();else if (this._touchShotId === id) this.heroShotByTouchStart(e);else {
            console.log("暂未处理的第三次触摸 start");
          }
        }

        touchMove(e) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var id = e.getID();
          if (id === this._touchMoveId) this.heroMoveByTouchMove(e);else if (id === this._touchShotId) this.heroShotByTouchMove(e);else {
            console.log("暂未处理的第三次触摸 move");
          }
        }

        touchEnd(e) {
          var id = e.getID();
          if (id === this._touchMoveId) this.heroMoveByTouchEnd();else if (id === this._touchShotId) this.heroShotByTouchEnd();else {
            console.log("暂未处理的第三次触摸 end");
          }
        } //恢复到点击原始状态


        recoveryTouchRawState() {
          this._touchMoveId = undefined;
          this._touchShotId = undefined;
          this._canMove = false;
        } //通过偏移设置方向


        setDirByTouchOffset(offset) {
          if (offset.x == 0) {
            this._curDirection.x = 0;
            this._curDirection.y = Math.abs(offset.y) / offset.y;
          } else if (offset.y == 0) {
            this._curDirection.x = Math.abs(offset.x) / offset.x;
            this._curDirection.y = 0;
          } else {
            var rate = Math.abs(offset.x / offset.y);

            if (rate >= 1) {
              this._curDirection.x = Math.abs(offset.x) / offset.x;
              this._curDirection.y = 1 / rate * Math.abs(offset.y) / offset.y;
            } else {
              this._curDirection.x = rate * Math.abs(offset.x) / offset.x;
              this._curDirection.y = Math.abs(offset.y) / offset.y;
            }

            ; // console.log("1/rate",1/rate);
          }

          ; // console.log("curDirection",this._curDirection);

          if (this._curDirection.x <= 0) this.heroSprite.setScale(1, 1, 1);else this.heroSprite.setScale(-1, 1, 1);
        } //生命恢复函数


        continueRecoveryHealthy() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return; // console.log("current blood",this._curBlood);

          var value = Math.ceil(this.getMaxBlood() * this._recoveryHealthy);
          this.updateBloodProgress(value); // console.log("回血+"+value);
        } //开始移动


        heroMoveByTouchStart() {
          this._canMove = true;
        } //保持移动


        heroMoveByTouchMove(e) {
          var sp = e.touch.getStartLocation();
          var cp = e.touch.getLocation();
          var offset = {};
          offset.x = cp.x - sp.x;
          offset.y = cp.y - sp.y;
          if (0 == offset.x && 0 == offset.y) return; //点击未发生偏移 不需要处理

          this.setDirByTouchOffset(offset);
        } //结束移动


        heroMoveByTouchEnd() {
          this._canMove = false;
          this._touchMoveId = undefined;
        } // 开始射击


        heroShotByTouchStart(e) {
          console.log("射击开始");
          this.updateShotDirByTouch(e); // this._curAimDir = twp.
          // em.dispatch("createTipsTex","射击开始");
        } // 保持射击


        heroShotByTouchMove(e) {
          console.log("保持射击");
          this.updateShotDirByTouch(e); // em.dispatch("createTipsTex","保持射击");
        } // 结束射击


        heroShotByTouchEnd() {
          console.log("射击结束"); // em.dispatch("createTipsTex","射击结束");

          this._touchShotId = undefined;
        }

        updateShotDirByTouch(e) {
          // Touch
          // let twp = e.getLocation();
          // let hwp = this.getHeroWorldPos();
          // let x = twp.x - hwp.x;
          // let y = twp.y - hwp.y;
          var rect = view.getVisibleSize();
          var x = e.getLocationX() - rect.width / 2;
          var y = e.getLocationY() - rect.height / 2;

          if (x === 0 && y === 0) {
            this._curAimDir.x = 1;
            this._curAimDir.y = 0;
          } else if (x === 0) {
            this._curAimDir.x = 0;
            this._curAimDir.y = Math.abs(y) / y;
          } else if (y === 0) {
            this._curAimDir.x = Math.abs(x) / x;
            this._curAimDir.y = 0;
          } else if (Math.abs(x) >= Math.abs(y)) {
            this._curAimDir.x = Math.abs(x) / x;
            this._curAimDir.y = y / Math.abs(x);
          } else {
            this._curAimDir.x = x / Math.abs(y);
            this._curAimDir.y = Math.abs(y) / y;
          }

          console.log("shotDir", this._curAimDir);
          console.log("x", x);
          console.log("y", y);
        } //==================================外部调用======================================================
        //使用hero control 方法


        usingHeroControlFun(string) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        } //获取hero control 属性


        getHeroControlProperty(string) {
          if (this.hasOwnProperty(string)) return this[string];else throw "hero control 中不存在属性：" + string;
        } // 暂停游戏


        pauseGame() {
          this._spriteAnim.pause();

          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll = true;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingMonsterManagerFun", "pauseAllAnim");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameAnimManagerFun", "pauseAllAnim");
        } //恢复游戏


        resumeGame() {
          var passA = find("Canvas/heroLayer/GameUILayer/passRewardLayer").active;

          if (passA) {
            return;
          }

          this._spriteAnim.resume();

          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll = false;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingMonsterManagerFun", "resumeAllAnim");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameAnimManagerFun", "resumeAllAnim");
        } //获取hero的世界坐标  


        getHeroWorldPos() {
          return this.heroSprite.getWorldPosition();
        }
        /**
         * @description 获取英雄附近一定范围内的随机坐标
         * @param {number} dis 起始距离
         * @param {number} offset 距离偏移量
         * */


        getRandomPosNearbyHero(dis, offset) {
          var wp = this.heroSprite.getWorldPosition();
          wp.x += (dis + Math.random() * offset | 0) * (Math.random() > 0.5 ? 1 : -1);
          wp.y += dis + Math.random() * offset | 0 * (Math.random() > 0.5 ? 1 : -1);
          return wp;
        } //获取target的世界坐标  优先返回傀儡位置信息 无傀儡在返回hero位置


        getTargetWorldPos() {
          if (this._heroPuppet) return this._heroPuppet.getWorldPosition();
          return this.heroSprite.getWorldPosition();
        } //获取一个在hero附近的位置


        getRandomPosNearHero(dis) {
          if (dis === void 0) {
            dis = 200;
          }

          var wp = this.heroSprite.getWorldPosition();
          var x = Math.random() * dis | 0;
          var y = Math.random() * dis | 0;
          x = Math.random() > 0.5 ? x : -x;
          y = Math.random() > 0.5 ? y : -y;
          return {
            x: wp.x + x,
            y: wp.y + y
          };
        } //百分比刷新血量


        updatePercentageBloodProgress(percentage) {
          var changeValue = this.getMaxBlood() * percentage;
          this.updateBloodProgress(changeValue);
        } //刷新血条


        updateBloodProgress(changeValue) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;

          if (changeValue < 0) {
            //受到伤害
            var damageReduce = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingSkillManagerFun", "getPercentageReduceDamageFromSecretSkill") + this._damageReduce;

            damageReduce > 1 ? 1 : damageReduce;
            changeValue = changeValue * (1 - damageReduce) | 0;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("createDamageTex", this.heroSprite, changeValue, {
              x: 0,
              y: 50
            });
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingSkillManagerFun", "updateSecretSkillTimesAfterAttacked"); //刷新被击中触发的技能层数
          }

          if (changeValue < 0 && this._curShield > 0) {
            this.updateShieldProgress(changeValue);
            return;
          } // console.log("刷新血条，changeValue", changeValue);


          this._curBlood += changeValue;

          if (this._curBlood < 0) {
            this._curBlood = 0;
            this.pauseGame();

            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).isOpenAd && this._canRebirthByAdTimes > 0) {
              this._canRebirthByAdTimes--;
              this.showRebirthAd();
            } else this.showGameOver();
          }

          ;
          if (this._curBlood > this.getMaxBlood()) this._curBlood = this.getMaxBlood();
          this.bloodSprite.fillRange = this._curBlood / this.getMaxBlood();
        } // 血量拉满


        makeBloodFull() {
          this._curBlood = this.getMaxBlood();
          this.bloodSprite.fillRange = this._curBlood / this.getMaxBlood();
        }

        showRebirthAd() {
          find("Canvas/heroLayer/GameUILayer/rebirthAd").active = true;
        }

        onBtnPlayAds() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curAdRewardType = "rebirthHero";
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).playAd(); // native.reflection.callStaticMethod("com/cocos/game/AppActivity", "createAds", "()V");

          find("Canvas/heroLayer/GameUILayer/rebirthAd").active = false; // console.log("播放广告");
          // this.scheduleOnce(()=>{
          //     this.rebirthHero();
          // },3);
        }

        rebirthHero() {
          console.log("复活玩家");
          this._isDamageImmunity = true;
          this.scheduleOnce(() => {
            this._isDamageImmunity = false;
          }, 5);
          this.makeBloodFull();
          this.resumeGame();
        }

        closeRebirthAd() {
          find("Canvas/heroLayer/GameUILayer/rebirthAd").active = false;
          this.showGameOver();
        } //刷新护盾


        updateShieldProgress(changeValue) {
          this._curShield += changeValue;
          this._curShield = this._curShield > this._maxShield ? this._maxShield : this._curShield;

          if (this._curShield > 0) {
            this.shieldSprite.fillRange = this._curShield / this._maxShield;
          } else {
            this._curShield = 0;
            this.shieldSprite.node.parent.active = false;
            changeValue -= this._curShield;
            this.updateBloodProgress(changeValue);
          }
        } // 开启护盾


        openShield(value, type) {
          if (this._shieldList[type] === false) {
            this._shieldList[type] = true;
            this._maxShield += value;
          }

          this._curShield += value;
          this._curShield = this._curShield > this._maxShield ? this._maxShield : this._curShield;
          this.shieldSprite.fillRange = this._curShield / this._maxShield;
          this.shieldSprite.node.parent.active = true;
        } //展示游戏结束


        showGameOver() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll = true; //停止一切行为

          this._WM.isUsingSword(false); // 停止攻击


          this._spriteAnim.stop(); // 停止移动
          //所有怪物放入对象池 移除之前 先停止生成


          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("endStage");
        } //刷新经验/100条


        updateExpProgress(exp) {
          exp *= 1 + this._expAddition; // exp *= (3 + this._expAddition);

          var res = this._LM.addExp(exp);

          if (res) {
            this.lvDescription.string = "LV:" + this._LM.level;
            this.selectUpgradeReward(); //升级后刷新最大血量 并且血量拉满

            this.updateBloodProgress(0); //用于初次刷新血条
          }

          var fillRange = this._LM.getExpProgress();

          fillRange = fillRange == undefined ? 0 : fillRange;
          this.expProgress.fillRange = fillRange;
        } //选择奖励技能


        selectUpgradeReward() {
          this.pauseGame();
          find("selectWeapon", this.GameUILayer).active = true;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("updateSelectWeapon");
        } //是否播放hero动画


        isPlayHeroAnim(bool) {
          if (bool) {
            this._spriteAnim.resume();

            console.log("继续播放");
          } else {
            this._spriteAnim.pause();

            console.log("停止播放"); //
          }
        } //创建玩家被攻击的伤害文本


        createBossDamageTex(damage) {
          // if(em.dispatch("getHeroControlProperty","_isDamageImmunity")) return;
          if (this._isDamageImmunity) return;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createDamageTex", this.node, damage, {
            x: 0,
            y: 50
          }); //伤害低于30不显示伤害文本

          this.updateBloodProgress(damage);
        } //重新开始


        restartGame() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll = false;
          game.restart();
        } // 刷新额外属性（百分比提升）   注：更新血量时 需要刷新 


        updateBonusValue(type, lv) {
          console.log("刷新额外属性 ,还没写");
          var bonusContent = "";
          var config = {
            "1": 0.01,
            "2": 0.02,
            "3": 0.03,
            "4": 0.04,
            "5": 0.05
          };

          switch (type) {
            case "blood":
              // this._bonusBlood+=config[lv];
              this._bonusPercentageBlood += config[lv];
              this._bonusPercentageBlood = (this._bonusPercentageBlood * 100 | 0) / 100;
              var value = (this._baseBlood + this._bonusBlood) * config[lv] | 0;
              this.updateBloodProgress(value);
              bonusContent = "血量+" + config[lv] * 100 + "%";
              break;

            case "damage":
              this._bonusPercentageDamage += config[lv];
              this._bonusPercentageDamage = (this._bonusPercentageDamage * 100 | 0) / 100;
              bonusContent = "伤害+" + config[lv] * 100 + "%";
              break;

            case "moveSpeed":
              this._bonusPercentageMoveSpeed += config[lv];
              this._bonusPercentageMoveSpeed = (this._bonusPercentageMoveSpeed * 100 | 0) / 100;
              bonusContent = "移速+" + config[lv] * 100 + "%";
              break;

            case "superArmor":
              //增加血量和伤害
              this._bonusPercentageBlood += config[lv];
              this._bonusPercentageBlood = (this._bonusPercentageBlood * 100 | 0) / 100;
              var value2 = (this._baseBlood + this._bonusBlood) * config[lv] | 0;
              this.updateBloodProgress(value2);
              bonusContent += "血量+" + config[lv] * 100 + "%";
              this._bonusPercentageDamage += config[lv];
              this._bonusPercentageDamage = (this._bonusPercentageDamage * 100 | 0) / 100;
              bonusContent += "伤害+" + config[lv] * 100 + "%";
              break;

            default:
              throw "strength type is error";
          }

          return bonusContent;
        } // 开启免伤


        openDamageImmunity() {
          this._isDamageImmunity = true;
        } // 从障碍物中弹出


        ejectFormObs() {
          var ejectDis = 5;
          this.node.setPosition(this.node.position.x - this._curDirection.x * ejectDis, this.node.position.y - this._curDirection.y * ejectDis); // let script:any = find("sprite",this.node).getComponent("HeroCollider");
          // let isInside:any = script._isInsideObs;
          // if(isInside) this.ejectFormObs();
        }
        /**
         * @description 寻找玩家附近四叉树的第一个目标 
         * @returns {{x,y}|null} 返回dir;
        */


        seekTreeFirstEnemyDir() {
          var tree = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getCurMonsterQuadtree");
          var rect = this.heroSprite.getComponent(BoxCollider2D).worldAABB;
          var res = tree.retrieve(rect); // console.log("seekTreeFirstEnemyDir",res);
          //随机返回一个附近位置

          if (res.length) {
            var _rect = res[0]; //四叉树位置锁定修正

            var targetPos = {
              x: _rect.x + _rect.width / 2,
              y: _rect.y + _rect.height / 2
            };
            var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            return (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).getTwoPointFlyDir(targetPos, wp);
          } else {
            return null;
          }
        }
        /**
         * @description 随机寻找附近的n个目标 随机一个rect 依次向后
         * @param {number} n 获取的总数量
         * @returns {Array|null} 返回dirs;
        */


        seekTreeRandomNEnemyDir(n) {
          var tree = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getCurMonsterQuadtree");
          var rect = this.heroSprite.getComponent(BoxCollider2D).worldAABB;
          var res = tree.retrieve(rect); // console.log("seekTreeRandomNEnemyDir",res);

          if (res.length) {
            var arr = [];

            for (var i = 0; i < n; i++) {
              var index = Math.random() * res.length | 0;
              var _rect2 = res[index];
              var targetPos = {
                x: _rect2.x + _rect2.width / 2,
                y: _rect2.y + _rect2.height / 2
              };
              var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getHeroWorldPos");
              var dir = (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).getTwoPointFlyDir(targetPos, wp);
              arr.push(dir);
            }

            return arr;
          } else return null;
        } // seekTreeRandomNEnemyDir(n) {
        //     let tree = em.dispatch("getCurMonsterQuadtree");
        //     let rect = this.heroSprite.getComponent(BoxCollider2D).worldAABB;
        //     let res = tree.retrieve(rect);
        //     // console.log("seekTreeRandomNEnemyDir",res);
        //     if (res.length) {
        //         let arr = [];
        //         let index = Math.random() * res.length | 0;
        //         for (let i = 0; i < n; i++) {
        //             index = index >= res.length ? 0 : index;
        //             let rect = res[index];
        //             let targetPos = {
        //                 x: rect.x + rect.width / 2,
        //                 y: rect.y + rect.height / 2
        //             };
        //             let wp = em.dispatch("getHeroWorldPos");
        //             let dir = glf.getTwoPointFlyDir(targetPos, wp);
        //             arr.push(dir);
        //             index++;
        //         }
        //         return arr;
        //     } else return null;
        // }

        /**
         * @description 获取四叉树附近的目标位置
         * @param {number} n 获取目标的总数量
         * @returns {Array|null} 返回n个位置 或 null
        */


        seekTreeNEnemyPos(n) {
          var tree = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getCurMonsterQuadtree");
          var rect = this.heroSprite.getComponent(BoxCollider2D).worldAABB;
          var res = tree.retrieve(rect);

          if (res.length) {
            var arr = [];
            var index = Math.random() * res.length | 0;

            for (var i = 0; i < n; i++) {
              index = index >= res.length ? 0 : index;
              var _rect3 = res[index];
              var targetPos = {
                x: _rect3.x + _rect3.width / 2,
                y: _rect3.y + _rect3.height / 2
              };
              arr.push(targetPos);
              index++;
            }

            return arr;
          } else return null;
        }
        /**
         * @description 随机获取四叉树中的一个目标位置
         * @returns {{x,y}}|null} 返回1个位置 或 null
        */


        seekTreeRandomOneEnemyPos() {
          var tree = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getCurMonsterQuadtree");
          var rect = this.heroSprite.getComponent(BoxCollider2D).worldAABB;
          var res = tree.retrieve(rect); //随机返回一个附近位置

          if (res.length) {
            var _rect4 = res[Math.random() * res.length | 0]; //四叉树位置锁定修正

            var targetPos = {
              x: _rect4.x + _rect4.width / 2,
              y: _rect4.y + _rect4.height / 2
            };
            return targetPos;
          } else {
            return null;
          }
        } // =====================获取当前信息===================
        // 获取最大血量（满血）


        getMaxBlood() {
          return (this._baseBlood + this._bonusBlood) * (1 + this._bonusPercentageBlood + this._percentageBlood) | 0;
        }
        /**
         * @description 获取当前移速
         * @variation  msV 移速值
         * @variation  msP 移速百分比
         * @variation  msSV 秘法移速值
        */


        getCurMoveSpeed() {
          if (this._deBuffList.banMove) return 0;
          var msV = this._baseMoveSpeed + this._bonusMoveSpeed - this._deBuffList.slow.value * (1 - this._slowResistance);
          if (msV < 0) msV = 0;
          var slowPer = (this._deBuffList.slow.percent + this._continueSlowPer) * (1 - this._slowResistance);
          slowPer >= 1 ? 1 : slowPer;
          var msP = (this._moveSpeedTimes + this._bonusPercentageMoveSpeed + this._percentageMoveSpeed) * (1 - slowPer);
          var msSV = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingSkillManagerFun", "getMoveSpeedFromSecretSkill"); // console.log("msV", msV);
          // console.log("msP", msP);
          // console.log("msSV", msSV);

          return msV * msP + msSV | 0;
        } //获取当前伤害


        getCurDamage() {
          var d1 = this._baseDamage + this._bonusDamage;
          var d2 = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingSkillManagerFun", "getDamageValueFromSecretSkill");
          var dp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingSkillManagerFun", "getPercentageDamageFromSecretSkill"); //秘法提供的加成

          var dTotal = (d1 + d2) * (1 + this._bonusPercentageDamage + this._percentageDamage + dp + this._tempPercentageDamage); // console.log("d1", d1);
          // console.log("d2", d2);
          // console.log("dp", dp);
          // console.log("percentageD", 1 + this._bonusPercentageDamage + this._percentageDamage + dp);=
          // console.log("dTotal", dTotal);

          return parseInt(dTotal.toFixed());
        } // 获取当前暴击率


        getCurCHR() {
          var total = this._criticalHitRate + this._tempCriticalHitRate + this._bonusCriticalHitRate;
          total += (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingSkillManagerFun", "getCHRFromSecretSkill");
          return total;
        } //攻击是否暴击


        isCriticalHit() {
          return Math.random() * 100 < this.getCurCHR();
        }
        /**
         * @description 获取当前暴击伤害  CRD_T = 1 + 1 + CRD  
         * CRD_T 总暴击伤害 = 基础伤害 + 基础暴击伤害 + 爆伤伤害
        */


        getCurCriticalHitDamage() {
          return 2 + this._bonusCriticalHitDamage;
        } //==================施加debuff=========================

        /**
         * @description: 施加debuff 禁步
         */


        addDebuffBanMove(t) {
          console.log("addDebuffBanMove");
          this._deBuffList.banMove = true;

          var fun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            t--;

            if (t <= 0) {
              this.unschedule(fun);
              this._deBuffList.banMove = false;
            }
          };

          this.schedule(fun, 1);
        }
        /**
         * @description: 施加debuff 减速   减速规则：时间无限叠加。数值无限叠加 ,比例无限叠加（极限为1）；
         * @param {number} t  减速时长
         * @param {number} v  减速数值
         * @param {number} p  减速百分比
         */


        addDebuffSlow(t, v, p) {
          if (p === void 0) {
            p = 0;
          }

          console.log("addDebuffSlow");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createTipsTex", "减速");
          this._deBuffList.slow.time = t;
          this._deBuffList.slow.value += v;
          this._deBuffList.slow.percent += 0;
          if (this._deBuffList.slow.percent > 1) this._deBuffList.slow.percent = 1;
          this.unschedule(this.addDebuffSlowCallFun);
          this.schedule(this.addDebuffSlowCallFun, 1);
        } // 减速回调 新的减速会重置回调


        addDebuffSlowCallFun() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._deBuffList.slow.time--;

          if (this._deBuffList.slow.time <= 0) {
            this.unschedule(this.addDebuffSlowCallFun);
            this._deBuffList.slow.time = 0;
            this._deBuffList.slow.percent = 0;
            this._deBuffList.slow.value = 0;
          }
        } // =====================技能相关===================

        /**
         * @description: 改变移速 加速或减速
         * @param {*} times 速度倍率
         * @param {*} t 变化时长
         */


        changeHeroMoveSpeed(times, t) {
          this._moveSpeedTimes = times;
          this._changeHeroMoveSpeedCountdown = t;
          this.schedule(this.changeHeroMoveSpeedCountdownRun, 1);
        } // 改变移速倒计时


        changeHeroMoveSpeedCountdownRun() {
          this._changeHeroMoveSpeedCountdown--;

          if (this._changeHeroMoveSpeedCountdown <= 0) {
            this._moveSpeedTimes = 1;
            this._changeHeroMoveSpeedCountdown = 0;
          }
        }

        updateTempCriticalHitRate(changeValue) {
          this._tempCriticalHitRate += changeValue;
        } //更新奖励暴击率


        updateBonusCriticalHitRate(changeValue) {
          this._bonusCriticalHitRate += changeValue;
        } // 更新临时百分比伤害


        updateTempPercentageDamage(changeValue) {
          this._tempPercentageDamage += changeValue;
        } //更新奖励移速


        updateBonusMoveSpeed(changeValue) {
          this._bonusMoveSpeed += changeValue;
        } // 凝气术 聚气


        isOpenCollectGas(bool) {
          find("effect/collectGasEffect", this.node).active = bool;
        } // 如沐春风 聚气


        isOpenLikeSpringBreeze(bool) {
          find("effect/likeSpringBreeze", this.node).active = bool;
        } // 雷神之力


        isOpenThunderGodPower(bool) {
          find("effect/thunderGodPower", this.node).active = bool;
        } // 下雪


        isOpenSnowEffect(bool) {
          find("effect/snowEffect", this.node).active = bool;
        } // 使用迷踪步


        usingSkillTrackDisappear(t) {
          console.log("usingSkillTrackDisappear", t);
          this._trackDisappearCountdown = t;
          this._isDamageImmunity = true;

          this._spriteAnim.play("trackDisappear");

          this.unschedule(this.trackDisappearSchedule);
          this.schedule(this.trackDisappearSchedule, 1); // this.scheduleOnce(() => {
          //     this._isDamageImmunity = false;
          //     this._spriteAnim.play("heroMove1");
          //     this.node.getChildByName("sprite").getComponent(Sprite).color = new Color(255, 255, 255, 255);
          // }, t);
        }

        trackDisappearSchedule() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._trackDisappearCountdown--;

          if (this._trackDisappearCountdown <= 0) {
            this._isDamageImmunity = false;

            this._spriteAnim.play("heroRun");

            this.node.getChildByName("sprite").getComponent(Sprite).color = new Color(255, 255, 255, 255);
            this.unschedule(this.trackDisappearSchedule);
          }
        } // 使用 怒狮狂吼


        usingSkillLionRoar() {
          var all = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingMonsterManagerFun", "getAllMonsterScript");
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "怒狮狂吼");
          all.forEach(script => {
            if (script.getDistanceToHero() < 300) {
              script.monsterIsRepelled(150); //击退150码

              script.addDebuffTimid(skillData.duration); //施加5s胆怯
            }
          });
        } //使用冰盾术


        usingSkillIceShield() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "iceShield");
          var value = this.getMaxBlood() * skillData.damageTimes;
          this.openShield(value, "iceShield");
        } // 使用移形换影


        usingSkillMoveLikeShadow() {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "moveLikeShadow");
          var value = this.getMaxBlood() * skillData.damageTimes;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", "/prefabs/hero/weapon/moveLikeShadow", assets => {
            var prefab = instantiate(assets);
            var wp = this.getHeroWorldPos();
            prefab.parent = find("Canvas/puppetLayer");
            prefab.setWorldPosition(wp);
            prefab.getComponent("MoveLikeShadow").init(value);
            this._heroPuppet = prefab;
          });
        } //置空移形换影


        resetHeroPuppet() {
          this._heroPuppet = null;
        } // 飞雷神 


        usingSkillFlyingThunderGod() {
          if (this._flyingThunderGodCount % 2 == 0) {
            console.log("留下标记");
            var prefab = instantiate(this.flyingThunderGodPrefab);
            prefab.parent = find("Canvas/bulletLayer");
            var wp = this.getHeroWorldPos(); // prefab.setWorldPosition(wp.x,wp.y,wp.z);

            prefab.setWorldPosition(wp);
            this._flyingThunderGodMark = prefab;
            this._flyingThunderGodCount++;
          } else {
            console.log("回到标记");

            var _wp = this._flyingThunderGodMark.getWorldPosition();

            this.resetFlyingThunderGodCount();
            this.node.setWorldPosition(_wp);
          }
        } //销毁飞雷神标记


        resetFlyingThunderGodCount() {
          this._flyingThunderGodCount = 0;
          if (!this._flyingThunderGodMark) return;
          var prefab = this._flyingThunderGodMark;
          this._flyingThunderGodMark = null;
          prefab.destroy();
        } //=============词条相关================
        // 激活词条


        activeEffects() {
          // if(this._effectList.indexOf(5010)>-1&&this._gameRunTimer%50 == 0) this.activeEffect5010();
          if (this._effectList.indexOf(5010) > -1 && this._gameRunTimer % 50 == 0) this.activeEffect5010();
          if (this._effectList.indexOf(5006) > -1 && this._gameRunTimer % 30 == 0) this.activeEffect5006();
        } //重甲之魂


        activeEffect5006() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createTipsTex", "重甲之魂");
          var blood = this.getMaxBlood() * 0.2 | 0;
          this.openShield(blood, "effect5006");
        } // 无敌风火轮


        activeEffect5010() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createTipsTex", "无敌风火轮");
          this._isDamageImmunity = true;
          this.switchMaterial(1);
          var count = 10;

          var fun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            count--;

            if (count <= 0) {
              this.unschedule(fun);
              this._isDamageImmunity = false;
              this.switchMaterial();
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("createTipsTex", "无敌风火轮结束");
            }
          };

          this.schedule(fun, 1);
        }

        switchMaterial(index) {
          if (index === void 0) {
            index = 0;
          }

          switch (index) {
            case 0:
              //默认材质
              this.heroSprite.getComponent(Sprite).material = this.heroMaterial[0];
              break;

            case 1:
              //无敌风火轮
              this.heroSprite.getComponent(Sprite).material = this.heroMaterial[1];
              break;

            default:
              console.warn("不存在材质index=" + index);
              break;
          }
        } //=============辅助功能================
        // 挂机测试


        openHangupTest() {
          this._openAutoScript = true;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingWeaponManagerFun", "usingMaxLvWeapon"); //开启武器高等级
          // this._isDamageImmunity = true;//开启无敌
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bloodSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shieldSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "heroSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "expProgress", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "expDataJson", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "heroPropertyDataJson", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lvDescription", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "GameUILayer", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "itemInPlaying", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "curDirPar", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "flyingThunderGodPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "heroMaterial", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0884ec43aab717e8d74aad6540817a2f6b44a39.js.map