System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, NodePool, find, instantiate, Sprite, Material, JsonAsset, Vec2, Label, Animation, em, ggd, glf, plm, Queue, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, weaponManager;

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

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "../../global/Queue", _context.meta, extras);
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
      NodePool = _cc.NodePool;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      Material = _cc.Material;
      JsonAsset = _cc.JsonAsset;
      Vec2 = _cc.Vec2;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      glf = _unresolved_4.glf;
    }, function (_unresolved_5) {
      plm = _unresolved_5.plm;
    }, function (_unresolved_6) {
      Queue = _unresolved_6.Queue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a567cNLrvhBJYPPuiBF6V0Q", "weaponManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'NodePool', 'find', 'CircleCollider2D', 'instantiate', 'tween', 'BoxCollider2D', 'SpriteFrame', 'Sprite', 'Button', 'Material', 'JsonAsset', 'resources', 'Asset', 'Vec2', 'Label', 'math', 'ColorKey', 'Color', 'Vec3', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("weaponManager", weaponManager = (_dec = ccclass('WeaponManager'), _dec2 = property(Sprite), _dec3 = property(JsonAsset), _dec4 = property(Node), _dec5 = property(Material), _dec(_class = (_class2 = class weaponManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "equWeaponCDProgress", _descriptor, this);

          _initializerDefineProperty(this, "weaponDataJson", _descriptor2, this);

          _initializerDefineProperty(this, "btnNodes", _descriptor3, this);

          _initializerDefineProperty(this, "defaultMaterial", _descriptor4, this);

          this._thousandsSwordToTombQueue = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();
          this._fireBloomQueue = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();
          this._hellFireQueue = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          /**
           * @description:私有属性命名规范 所有等级 命名为 "_" + weaponName +"Lv" 
           */
          this._swordLv = 0;
          this._guardLv = 0;
          this._spellLv = 0;
          this._dartsLv = 0;
          this._spiritBulletLv = 0;
          this._flySwordLv = 0;
          this._skyThunderLv = 0;
          this._iceSpiritNeedleLv = 0;
          this._taijihuanLv = 0;
          this._landFireLv = 0;
          this._rewardConfig = null;
          this._curAllURList = [];
          //动态加载
          this._weaponData = {};
          //装备cd 
          this._equWeaTotalCD = void 0;
          this._equWeaCurTime = void 0;
          //rogue技能cd
          this._rogueSkillCDList = {
            "spiritBullet": 1.8,
            //手里剑
            "sword": 1.2,
            //剑
            "darts": 3.1,
            //飞镖
            "iceSpiritNeedle": 3.5,
            //冰魄神针
            "skyThunder": 4.7,
            //天雷
            "landFire": 14.3,
            //地火
            "taijihuan": 2.6 //太极环

          };
          // rogue大招CD
          this._rogueUltimateSkillCDList = {
            "spell": 15,
            "guard": 8,
            "sword": 8.3
          };
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("updateSelectWeapon");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getWeaponDataByIdOrName");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingWeaponManagerFun");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getWeaponManagerProperty");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("updateSelectWeapon", this.updateSelectWeapon.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getWeaponDataByIdOrName", this.getWeaponDataByIdOrName.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingWeaponManagerFun", this.usingWeaponManagerFun.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getWeaponManagerProperty", this.getWeaponManagerProperty.bind(this));
          this.initWeaponData();
          this.initWeaponConfig();
          this.dynamicLoadPrefabs();
          this.startUsingWeapon();
          this.usingEqu();
          this.initSelectWeaponAd();
        }

        startUsingWeapon() {
          this._spiritBulletLv = 1;
          this.isUsingSpiritBullet(true); // this._landFireLv=1;
          // this.isUsingLandFire(true);
          // this._taijihuanLv = 4;
          // this.isUsingTaijihuan(true);
          // this._iceSpiritNeedleLv = 3;
          // this.isUsingIceSpiritNeedle(true);
          // this._skyThunderLv = 3;
          // this.isUsingSkyThunder(true);
          // this._swordLv = 1;
          // this.isUsingSword(true);
          // this._guardLv = 4;
          // this.isUsingGuard(true);
          // this._dartsLv = 1;
          // this.isUsingDarts(true);
          // this._spellLv = 1;
          // this.isUsingSpell(true);
          // this.usingMaxLvWeapon();
        }

        usingMaxLvWeapon() {
          this._swordLv = 4;
          this._guardLv = 4;
          this._spellLv = 4;
          this._dartsLv = 4;
          this._spiritBulletLv = 4;
          this.isUsingSword(true);
          this.isUsingDarts(true);
          this.isUsingGuard(true);
          this.isUsingSpell(true);
          this.isUsingSpiritBullet(true);
          this._iceSpiritNeedleLv = 4;
          this.isUsingIceSpiritNeedle(true);
        }

        initWeaponData() {
          var all = this.weaponDataJson.json;
          all.forEach(element => {
            var id = element.id;
            var name = element.name;
            this._weaponData[id] = element;
            this._weaponData[name] = element;
          }); // console.log(this.weaponDataJson);
          // console.log(this._weaponData);
        }
        /**
         * @description: 初始化升级奖励配置
         * "daofaguo", "treasureChest", "partSkillBook", 物品奖励配置 后期添加
         * 无等级上限的配置："restoreHP"：回血。"addMoveSpeed"：加速。"addCriticalHitRate"：加暴击。  
         */


        initWeaponConfig() {
          this._rewardConfig = ["restoreHP", "addMoveSpeed", "addCriticalHitRate", "sword", "guard", "spell", "darts", "spiritBullet", "flySword", "skyThunder", "iceSpiritNeedle", "taijihuan", "landFire"]; // this._rewardConfig = [
          //     "restoreHP", "addMoveSpeed", "addCriticalHitRate",
          //     "sword", "guard", "spell", "darts", "spiritBullet",
          //     "flySword", "skyThunder", "iceSpiritNeedle", "taijihuan"
          // ]
        } // 动态加载预制件


        dynamicLoadPrefabs() {
          this.loadPrefab("sword");
          this.loadPrefab("darts");
          this.loadPrefab("spell");
          this.loadPrefab("spiritBullet");
          this.loadPrefab("flySword");
          this.loadPrefab("thousandsSwordToTomb");
          this.loadPrefab("justOneSwordDivideWorld");
          this.loadPrefab("swordRain");
          this.loadPrefab("iceCone");
          this.loadPrefab("fireBloom");
          this.loadPrefab("hellFire");
          this.loadPrefab("moveLikeFire");
          this.loadPrefab("dangerWindToNear");
          this.loadPrefab("doomsdayStorm");
          this.loadPrefab("thunderRunning");
          this.loadPrefab("thunderFissionBead");
          this.loadPrefab("skyThunder");
          this.loadPrefab("iceSpiritNeedle");
          this.loadPrefab("taijihuan"); // this.scheduleOnce(() => {
          //     console.log("plm", plm);
          // }, 5);
        } //加载预制件


        loadPrefab(fileName, callback) {
          if (callback === void 0) {
            callback = null;
          }

          var defaultUrl = "/prefabs/hero/weapon/"; // let prefabString = "_" + fileName + "Prefab";

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", defaultUrl + fileName, assets => {
            if (callback) callback(assets);else {
              // this[prefabString] = assets;
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools(fileName, new NodePool(), assets);
            }
          });
        } // 初始化选择武器界面的广告


        initSelectWeaponAd() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).isOpenAd) {
            find("Canvas/heroLayer/GameUILayer/selectWeapon/getAll").active = true;
            find("Canvas/heroLayer/GameUILayer/selectWeapon/updateAll").active = true;
          } else {
            find("Canvas/heroLayer/GameUILayer/selectWeapon/getAll").active = false;
            find("Canvas/heroLayer/GameUILayer/selectWeapon/updateAll").active = false;
          }
        }

        getAllUpgradeReward() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curAdRewardType = "getAllUpgradeReward";
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).playAd();
        }

        updateUpgradeReward() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curAdRewardType = "updateUpgradeReward";
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).playAd();
        } //======================护符相关=======================
        // 是否开启护符


        isUsingSpell(bool) {
          console.log("初始化护符");
          var spellPar = find("spellPar", this.node);
          spellPar.active = bool;
          if (!bool) return; // let total = weaponData.spell.lv[this._spellLv - 1];

          var data = this.getWeaponDataByIdOrName("spell");
          var total = data.total[this._spellLv - 1];
          var bonusTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletTotal");
          total += bonusTotal;
          this.openSpell(total);
        } //开启护符


        openSpell(total, radius) {
          var _this = this;

          if (radius === void 0) {
            radius = 180;
          }

          if (radius <= 10) return console.log("半径过小");
          var par = find("spellPar", this.node);

          for (var i = 0; i < par.children.length; i++) {
            var child = par.children[i];
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("spell", child);
            i--;
          }

          ;
          var unitR = Math.PI * 2 / total; //单位弧度

          var unitA = 360 / total; //单位角度

          var arr = [];

          for (var _i = 0; _i < total; _i++) {
            var radian = _i * unitR;
            var x = Math.cos(radian) * radius;
            var y = Math.sin(radian) * radius;
            arr.push([x, y]);
          }

          ; // console.log(arr);

          var _loop = function _loop(_i2) {
            var pos = arr[_i2];
            var spell = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("spell");

            if (spell) {
              _this.initSpell(spell, pos, _i2 * unitA);
            } else {
              _this.loadPrefab("spell", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("spell", new NodePool(), assets);
                spell = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("spell");

                _this.initSpell(spell, pos, _i2 * unitA);
              });
            }
          };

          for (var _i2 = 0; _i2 < arr.length; _i2++) {
            _loop(_i2);
          }

          ;
          var interval = 1 / 60;
          this.unschedule(this.spellParRotate);
          this.schedule(this.spellParRotate, interval);
        }

        initSpell(spell, pos, angle) {
          var data = this.getWeaponDataByIdOrName("spell");
          spell.parent = find("spellPar", this.node);
          spell.setPosition(pos[0], pos[1], 0);
          spell.angle = angle;
          spell.getComponent("Spell").init(data, this._spellLv);
        } // 护符旋转


        spellParRotate() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var par = find("spellPar", this.node);
          var interval = 1 / 60;
          var rotationSpeed = 180 * interval;
          par.angle += rotationSpeed;
        } //是否开启 护符 大招


        isOpenSpellUltimateSkill(bool) {
          if (bool) {
            this.usingSpellUltimateSkill(); //立即释放一次

            var t = this._rogueUltimateSkillCDList.spell;
            this.schedule(this.usingSpellUltimateSkill, t);
          } else {
            this.unschedule(this.usingSpellUltimateSkill);
          }
        } //护符 大招


        usingSpellUltimateSkill() {
          var _this2 = this;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          console.log("释放护符大招");
          var total = 12;
          var radius = 150;
          var par = find("spellPar", this.node);
          var data = this.getWeaponDataByIdOrName("spell"); // let par = find("Canvas/bulletLayer");

          var interval = 1 / 60; //旋转间隔 

          var speed = 3; //离开原点的速度

          var unitR = Math.PI * 2 / total; //单位弧度

          var unitA = 360 / total; //单位角度

          var arr = [];

          for (var i = 0; i < total; i++) {
            var radian = i * unitR;
            var x = Math.cos(radian) * radius;
            var y = Math.sin(radian) * radius;
            arr.push([x, y]);
          }

          ;

          var _loop2 = function _loop2() {
            var pos = arr[_i3];
            var spell = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("spell"); //能释放大招 spell 一定加载完毕 无需防护动态加载

            spell.getComponent("Spell").init(data, _this2._spellLv);
            spell.parent = par;
            spell.setPosition(pos[0], pos[1], 0);
            var angle = _i3 * unitA;
            spell.angle = angle;
            var times = 60; //旋转消失次数

            var callback = () => {
              if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
                error: Error()
              }), ggd) : ggd).stopAll) return;
              times--;
              var curPos = spell.getPosition();
              var x = pos[0] / radius * speed;
              var y = pos[1] / radius * speed;
              x *= 2;
              y *= 2;
              spell.setPosition(curPos.x + x, curPos.y + y, 0);
            };

            _this2.schedule(callback, interval);
          };

          for (var _i3 = 0; _i3 < arr.length; _i3++) {
            _loop2();
          }

          ;
          this.unschedule(this.spellParRotate);
          this.schedule(this.spellParRotate, interval);
        } // =================波动阵====================
        //开启波动阵


        isUsingGuard(bool) {
          var guard = find("guard", this.node);
          guard.active = bool;
          if (!bool) return;
          var data = this.getWeaponDataByIdOrName("guard");
          var scale = data.total[this._guardLv - 1];
          guard.setScale(scale, scale);
          var script = guard.getComponent("Guard");
          script.init(data, this._guardLv);
          guard.active = true;
        } //是否开启波动阵大招


        isOpenGuardUltimateSkill(bool) {
          this.schedule(() => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            this.usingGuardUltimateSkill();
          }, this._rogueUltimateSkillCDList.guard); // this.usingGuardUltimateSkill();
          // em.dispatch("usingHeroControlFun", "updatePercentageBloodProgress", 0.02);//每秒恢复2%最大生命值
        } // 使用波动阵大招 全屏扩张一次  未开发完，暂不开启


        usingGuardUltimateSkill() {
          console.log("开启波动阵大招");
          var guard = find("guard", this.node);
          var data = this.getWeaponDataByIdOrName("guard");
          var rawScale = data.total[this._guardLv - 1];
          var times = 6;
          var t = 0.1;

          var fun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            var scale = guard.getScale();
            times -= t * 2;

            if (times > 0) {
              guard.setScale(scale.x + t * 2, scale.y + t * 2, scale.z);
            } else {
              guard.setScale(rawScale, rawScale, 1);
              this.unschedule(fun);
            }
          };

          this.schedule(fun, t);
        } //================手里剑相关=====================
        // 是否使用手里剑


        isUsingSpiritBullet(bool) {
          if (bool) {
            var interval = this._rogueSkillCDList.spiritBullet;
            this.schedule(this.createSpiritBullet, interval);
          } else {
            this.unschedule(this.createSpiritBullet);
          }
        } //创建手里剑


        createSpiritBullet() {
          var _this3 = this;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var flyDir = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "seekTreeFirstEnemyDir");
          if (!flyDir) return;
          var data = this.getWeaponDataByIdOrName("spiritBullet");
          var total = data.total[this._spiritBulletLv - 1]; // console.log("flyDir",flyDir);

          var bonusTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletTotal");
          total += bonusTotal;
          if (!total) throw "total err,total is " + total;
          var initPosArr = this.getFlySwordInitPos(total);

          var _loop3 = function _loop3(i) {
            var spiritBullet = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("spiritBullet");
            var t = 1 / 10 * i;

            if (spiritBullet) {
              _this3.scheduleOnce(() => {
                _this3.initSpiritBullet(spiritBullet, initPosArr[i], flyDir);
              }, t);
            } else {
              _this3.loadPrefab("spiritBullet", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("spiritBullet", new NodePool(), assets);
                spiritBullet = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("spiritBullet");

                _this3.scheduleOnce(() => {
                  _this3.initSpiritBullet(spiritBullet, initPosArr[i], flyDir);
                }, t);
              });
            }
          };

          for (var i = 0; i < total; i++) {
            _loop3(i);
          }
        }

        initSpiritBullet(spiritBullet, initPos, flyDir) {
          var data = this.getWeaponDataByIdOrName("spiritBullet");
          spiritBullet.setPosition(0, 0, 0);
          var layer = find("Canvas/bulletLayer");
          spiritBullet.parent = layer; // let flyDir = this.getFlyDir(em.dispatch("getHeroControlProperty", "_curAimDir"));

          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          wp.x += initPos.x;
          wp.y += initPos.y;
          spiritBullet.setWorldPosition(wp);
          spiritBullet.getComponent("SpiritBullet").init(data, this._spiritBulletLv, flyDir);
        }

        getFlyDirByCurPos(target) {
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos"); // return glf.getTwoPointFlyDir(wp,target);

          return (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).getTwoPointFlyDir(target, wp);
        }

        isOpenSpiritBulletUltimateSkill(bool) {
          return;
          if (bool) this.usingSpellUltimateSkill();
        }

        usingSpiritBulletUltimateSkill() {
          console.log("usingSpiritBulletUltimateSkill 还没写");
        } //=================剑相关===================
        //是否 使用 剑


        isUsingSword(bool) {
          if (bool) {
            var interval = this._rogueSkillCDList.sword;
            this.schedule(this.createSword, interval);
          } else {
            this.unschedule(this.createSword);
          }
        } // 创建剑


        createSword() {
          var _this4 = this;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var data = this.getWeaponDataByIdOrName("sword");
          var total = data.total[this._swordLv - 1];
          var bonusTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletTotal");
          total += bonusTotal;
          if (!total) throw "total err,total is " + total;
          var curDirection = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_curDirection");
          if (curDirection.x == 0 && curDirection.y == 0) return; //人物未移动时  不创建子弹

          var initPosArr = this.getFlySwordInitPos(total);

          var _loop4 = function _loop4(i) {
            var sword = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("sword");
            if (sword) _this4.initSword(sword, initPosArr[i]);else {
              _this4.loadPrefab("sword", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("sword", new NodePool(), assets);
                sword = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("sword");

                _this4.initSword(sword, initPosArr[i]);
              });
            }
          };

          for (var i = 0; i < total; i++) {
            _loop4(i);
          }
        }

        initSword(sword, initPos) {
          var data = this.getWeaponDataByIdOrName("sword");
          sword.setPosition(0, 0, 0);
          var layer = find("Canvas/bulletLayer");
          sword.parent = layer;
          var flyDir = this.getFlyDir((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_curDirection"));
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos"); // console.log("initPos", initPos);

          wp.x += initPos.x;
          wp.y += initPos.y;
          sword.setWorldPosition(wp);
          sword.getComponent("Sword").init(data, this._swordLv, flyDir);
        } // 随机获取 剑 初始化位置


        getFlySwordInitPos(total) {
          var unit = 30;
          var arr = [];

          for (var i = 0; i < total; i++) {
            var m = i / 3 | 0;
            var n = i % 3;
            var dir = {
              x: n == 0 ? 0 : n == 1 ? unit : -unit,
              y: m * unit
            };
            arr.push(dir);
          } // console.log("arr",arr);


          return arr; // return [{ x: 0, y: 0 }, { x: unit, y: 0 }, { x: -unit, y: 0 }, { x: 0, y: unit }, { x: unit, y: unit }, { x: -unit, y: unit }].slice(0, total);
        } //剑 大招


        usingSwordUltimateSkill() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var total = 16;
          var r = 50; // let initPosArr = this.getCirclePos(r, total);

          var initPosArr = (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).getCirclePos(r, total);
          var data = this.getWeaponDataByIdOrName("sword");

          for (var i = 0; i < total; i++) {
            var sword = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("sword");
            sword.setPosition(0, 0, 0);
            var layer = find("Canvas/bulletLayer");
            sword.parent = layer;
            var initPos = initPosArr[i];
            var dir = {
              x: initPos[0] / r,
              y: initPos[1] / r
            }; // 转换成可使用的方向

            var flyDir = this.getFlyDir(dir);
            var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            wp.x += initPos[0];
            wp.y += initPos[1];
            sword.setWorldPosition(wp);
            sword.getComponent("Sword").init(data, this._swordLv, flyDir);
          } // console.log("释放简答");

        } //是否开启 剑 大招


        isOpenSwordUltimateSkill(bool) {
          if (bool) {
            var t = this._rogueUltimateSkillCDList.sword;
            this.schedule(this.usingSwordUltimateSkill, t);
          } else {
            this.unschedule(this.usingSwordUltimateSkill);
          }
        } //=================飞剑相关====================


        isUsingFlySword(bool) {
          var data = this.getWeaponDataByIdOrName("flySword");
          var total = data.total[this._flySwordLv - 1]; // let bonusTotal = em.dispatch("getHeroControlProperty", "_bonusBulletTotal");
          // total += bonusTotal;

          this.openFlySword(total);
        } // 开启飞剑


        openFlySword(total) {
          var par = find("Canvas/heroLayer/flySwordPar");

          for (var i = 0; i < total; i++) {
            par.children[i].active = true;
          }
        }

        usingFlySwordUltimateSkill() {}

        isOpenFlySwordUltimateSkill(bool) {} //=================飞镖相关===================


        isUsingDarts(bool) {
          if (bool) {
            var interval = this._rogueSkillCDList.darts;
            this.schedule(this.createDarts, interval);
          } else {
            this.unschedule(this.createDarts);
          }
        }

        createDarts() {
          var _this5 = this;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var data = this.getWeaponDataByIdOrName("darts");
          var total = data.total[this._dartsLv - 1];
          var bonusTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletTotal");
          total += bonusTotal;
          if (!total) throw "total err,total is " + total; // let curAimDir = this.getFlyDir(em.dispatch("getHeroControlProperty", "_curAimDir"));

          var curAimDir = this.getFlyDir((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_curDirection"));
          var flyDirArr = this.getFlyDirArr(curAimDir, total);

          var _loop5 = function _loop5(i) {
            var darts = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("darts");
            if (darts) _this5.initDarts(darts, flyDirArr[i], i);else {
              _this5.loadPrefab("darts", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("darts", new NodePool(), assets);
                darts = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("darts");
                darts = instantiate(assets);

                _this5.initDarts(darts, flyDirArr[i], i);
              });
            }
          };

          for (var i = 0; i < total; i++) {
            _loop5(i);
          }
        }

        initDarts(darts, flyDir, i) {
          var data = this.getWeaponDataByIdOrName("darts");
          var unit = 50;
          darts.setPosition(0, 0, 0);
          var layer = find("Canvas/bulletLayer");
          darts.parent = layer;
          var initPos = new Vec2(flyDir.x * unit * (Math.floor(i / 4) + 1), flyDir.y * unit * (Math.floor(i / 4) + 1));
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          wp.x += initPos.x;
          wp.y += initPos.y;
          darts.setWorldPosition(wp);
          if (this._dartsLv == data.maxLevel) darts.getComponent("Darts").init(data, this._dartsLv, flyDir, true);else darts.getComponent("Darts").init(data, this._dartsLv, flyDir);
        }

        isOpenDartsUltimateSkill(bool) {
          console.log("飞镖可分裂");
        } // =================冰魄神针=======================
        //是否 使用 冰魄神针


        isUsingIceSpiritNeedle(bool) {
          if (bool) {
            var interval = this._rogueSkillCDList.iceSpiritNeedle;
            this.schedule(this.createIceSpiritNeedle, interval);
          } else {
            this.unschedule(this.createIceSpiritNeedle);
          }
        } // 创建 冰魄神针


        createIceSpiritNeedle() {
          var _this6 = this;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var data = this.getWeaponDataByIdOrName("iceSpiritNeedle");
          var total = data.total[this._iceSpiritNeedleLv - 1];
          var bonusTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletTotal");
          total += bonusTotal;
          if (!total) throw "total err,total is " + total;
          var flyDirs = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "seekTreeRandomNEnemyDir", total);
          if (!flyDirs) return;

          var _loop6 = function _loop6() {
            var iceSpiritNeedle = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("iceSpiritNeedle");
            var flyDir = flyDirs[i];
            var t = 0.2 * i;

            if (iceSpiritNeedle) {
              _this6.scheduleOnce(() => {
                _this6.initIceSpiritNeedle(iceSpiritNeedle, flyDir);
              }, t);
            } else {
              _this6.loadPrefab("iceSpiritNeedle", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("iceSpiritNeedle", new NodePool(), assets);
                iceSpiritNeedle = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("iceSpiritNeedle", true);

                _this6.scheduleOnce(() => {
                  _this6.initIceSpiritNeedle(iceSpiritNeedle, flyDir);
                }, t);
              });
            }
          };

          for (var i = 0; i < total; i++) {
            _loop6();
          }
        }

        initIceSpiritNeedle(iceSpiritNeedle, flyDir) {
          var data = this.getWeaponDataByIdOrName("iceSpiritNeedle");
          iceSpiritNeedle.setPosition(0, 0, 0);
          var layer = find("Canvas/bulletLayer");
          iceSpiritNeedle.parent = layer; // let wp = em.dispatch("usingHeroControlFun", "getRandomPosNearbyHero", 150, 200);

          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          iceSpiritNeedle.setWorldPosition(wp); // let flyDir =em.dispatch("usingHeroControlFun", "seekTreeFirstEnemyDir");
          // iceSpiritNeedle.getComponent("IceSpiritNeedle").init(data, this._iceSpiritNeedleLv,this.getRandomFlyDir());

          iceSpiritNeedle.getComponent("IceSpiritNeedle").init(data, this._iceSpiritNeedleLv, flyDir);
        } // 获取随机飞行方向


        getRandomFlyDir() {
          var x = Math.random();
          var y = Math.random(); // 方向归一

          if (x > y) {
            y = x / y;
            x = 1;
          } else {
            x = y / x;
            y = 1;
          } //随机正负


          x = Math.random() > 0.5 ? x : -x;
          y = Math.random() > 0.5 ? y : -y;
          return {
            x: x,
            y: y
          };
        }

        isOpenIceSpiritNeedleUltimateSkill(bool) {
          console.log("冰魄神针大招 还没写");
        } // =================天雷=======================
        //是否 使用 天雷


        isUsingSkyThunder(bool) {
          if (bool) {
            var interval = this._rogueSkillCDList.skyThunder;
            this.schedule(this.createSkyThunder, interval);
          } else {
            this.unschedule(this.createSkyThunder);
          }
        } // 创建 天雷


        createSkyThunder() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var data = this.getWeaponDataByIdOrName("skyThunder");
          var total = data.total[this._skyThunderLv - 1];
          var bonusTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletTotal");
          total += bonusTotal;
          if (!total) throw "total err,total is " + total;

          for (var i = 0; i < total; i++) {
            var t = 0.2 * i;
            this.scheduleOnce(() => {
              if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
                error: Error()
              }), ggd) : ggd).stopAll) return;
              var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "seekTreeRandomOneEnemyPos");
              if (!wp) return;
              var skyThunder = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("skyThunder");

              if (skyThunder) {
                this.initSkyThunder(skyThunder, wp);
              } else {
                this.loadPrefab("skyThunder", assets => {
                  (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                    error: Error()
                  }), plm) : plm).addPoolToPools("skyThunder", new NodePool(), assets); // skyThunder = plm.getFromPool("skyThunder");

                  skyThunder = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                    error: Error()
                  }), plm) : plm).getFromPool("skyThunder");
                  this.initSkyThunder(skyThunder, wp);
                });
              }
            }, t);
          }
        }

        initSkyThunder(skyThunder, wp) {
          var data = this.getWeaponDataByIdOrName("skyThunder"); // skyThunder.setPosition(0, 0, 0);

          skyThunder.parent = find("Canvas/bulletLayer");
          skyThunder.setWorldPosition(wp.x, wp.y, 0);
          skyThunder.getComponent("SkyThunder").init(data, this._skyThunderLv);
        }

        isOpenSkyThunderUltimateSkill(bool) {
          console.log("天雷大招 还没写");
        } //=================地火相关===================
        //是否 使用 地火


        isUsingLandFire(bool) {
          if (bool) {
            var interval = this._rogueSkillCDList.landFire;
            this.schedule(this.createLandFire, interval);
          } else {
            this.unschedule(this.createLandFire);
          }
        } // 创建 地火


        createLandFire() {
          var _this7 = this;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var data = this.getWeaponDataByIdOrName("landFire");
          var total = data.total[this._landFireLv - 1];
          var bonusTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletTotal");
          total += bonusTotal;
          if (!total) throw "total err,total is " + total;
          var dirs = [{
            x: -1,
            y: 0
          }, {
            x: 1,
            y: 0
          }, {
            x: 0,
            y: 1
          }, {
            x: 0,
            y: -1
          }, {
            x: -1,
            y: 1
          }, {
            x: 1,
            y: -1
          }, {
            x: 1,
            y: 1
          }, {
            x: -1,
            y: -1
          }];

          var _loop7 = function _loop7(i) {
            _this7.scheduleOnce(() => {
              if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
                error: Error()
              }), ggd) : ggd).stopAll) return;
              var landFire = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("landFire");
              if (landFire) _this7.initLandFire(landFire, dirs[i % dirs.length]);else {
                _this7.loadPrefab("landFire", assets => {
                  (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                    error: Error()
                  }), plm) : plm).addPoolToPools("landFire", new NodePool(), assets);
                  landFire = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                    error: Error()
                  }), plm) : plm).getFromPool("landFire");

                  _this7.initLandFire(landFire, dirs[i % 4]);
                });
              }
              ;
            }, i * 0.2);
          };

          for (var i = 0; i < total; i++) {
            _loop7(i);
          }

          ;
        }

        initLandFire(landFire, dir) {
          var data = this.getWeaponDataByIdOrName("landFire");
          landFire.setPosition(0, 0, 0);
          var layer = find("Canvas/bulletLayer");
          landFire.parent = layer;
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          landFire.setWorldPosition(wp);
          landFire.getComponent("LandFire").init(data, this._landFireLv, dir);
        }

        isOpenLandFireUltimateSkill(bool) {
          console.log("地火大招 还没写");
        } //=================太极环相关===================
        //是否 使用 太极环


        isUsingTaijihuan(bool) {
          if (bool) {
            var interval = this._rogueSkillCDList.taijihuan;
            this.schedule(this.createTaijihuan, interval);
          } else {
            this.unschedule(this.createTaijihuan);
          }
        } // 创建 太极环


        createTaijihuan() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var data = this.getWeaponDataByIdOrName("taijihuan");
          var total = data.total[this._taijihuanLv - 1];
          var bonusTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletTotal");
          total += bonusTotal;
          if (!total) throw "total err,total is " + total;

          for (var i = 0; i < total; i++) {
            this.scheduleOnce(() => {
              if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
                error: Error()
              }), ggd) : ggd).stopAll) return;
              var taijihuan = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("taijihuan");
              if (taijihuan) this.initTaijihuan(taijihuan);else {
                this.loadPrefab("taijihuan", assets => {
                  (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                    error: Error()
                  }), plm) : plm).addPoolToPools("taijihuan", new NodePool(), assets);
                  taijihuan = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                    error: Error()
                  }), plm) : plm).getFromPool("taijihuan");
                  this.initTaijihuan(taijihuan);
                });
              }
            }, i * 0.2);
          }
        }

        initTaijihuan(taijihuan) {
          var data = this.getWeaponDataByIdOrName("taijihuan");
          taijihuan.setPosition(0, 0, 0);
          var layer = find("Canvas/bulletLayer");
          taijihuan.parent = layer;
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          taijihuan.setWorldPosition(wp);
          taijihuan.getComponent("Taijihuan").init(data, this._taijihuanLv);
        }

        isOpenTaijihuanUltimateSkill(bool) {
          console.log("太极环大招 还没写");
        } // ======================通用======================
        //深拷贝一个飞行方向


        getFlyDir(dir) {
          return new Vec2(dir.x, dir.y);
        }

        getFlyDirArr(dir, total) {
          var arr = [];

          for (var i = 0; i < total; i++) {
            arr.push(this.getRotationDir(dir, 90 * i));
          }

          return arr;
        } // 获取旋转后的方向


        getRotationDir(dir, angle) {
          //角度转弧度
          var radian = angle * Math.PI / 180; //向量旋转指定弧度的角度

          var x = dir.x;
          var y = dir.y;
          var x2 = x * Math.cos(radian) - y * Math.sin(radian);
          var y2 = x * Math.sin(radian) + y * Math.cos(radian);
          return new Vec2(x2, y2); // return { x: x2, y: y2 };
        } //===================外部调用===================

        /**
         * @description: 获得升级奖励
         * @param {*} e
         * @param {string} type 奖励类型
         * 奖励分为多种，武器类奖励满级后 从奖励选项中删除
         */


        getUpgradeReward(e, type) {
          find("GameUILayer/selectWeapon", this.node.parent).active = false;

          for (var node of this.btnNodes) {
            node.getChildByName("mask").getChildByName("icon").getComponent(Sprite).spriteFrame = null; // node.getComponent(Sprite).spriteFrame = null;
          }

          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll = find("GameUILayer/passRewardLayer", this.node.parent).active;

          switch (type) {
            case "restoreHP":
              this.restoreHP();
              break;

            case "addMoveSpeed":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "updateBonusMoveSpeed", 20);
              break;

            case "addCriticalHitRate":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroControlFun", "updateBonusCriticalHitRate", 5);
              break;

            default:
              if (this.isHasWeaponByName(type)) {
                this.upgradeWeaponByWeaponName(type);
                break;
              } else throw "type error,type is " + type;

          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "resumeGame");

          for (var _node of this.btnNodes) {
            _node.getComponent(Animation).stop();

            _node.setScale(0, 0, 1);
          }
        }

        getAllUpgradeRewardComplete() {
          find("GameUILayer/selectWeapon", this.node.parent).active = false;

          for (var node of this.btnNodes) {
            node.getChildByName("mask").getChildByName("icon").getComponent(Sprite).spriteFrame = null; // node.getComponent(Sprite).spriteFrame = null;
          }

          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll = find("GameUILayer/passRewardLayer", this.node.parent).active;

          for (var type of this._curAllURList) {
            switch (type) {
              case "restoreHP":
                this.restoreHP();
                break;

              case "addMoveSpeed":
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("usingHeroControlFun", "updateBonusMoveSpeed", 30);
                break;

              case "addCriticalHitRate":
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("usingHeroControlFun", "updateBonusCriticalHitRate", 5);
                break;

              default:
                if (this.isHasWeaponByName(type)) {
                  this.upgradeWeaponByWeaponName(type);
                  break;
                } else throw "type error,type is " + type;

            }
          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "resumeGame");

          for (var _node2 of this.btnNodes) {
            _node2.getComponent(Animation).stop();

            _node2.setScale(0, 0, 1);
          }
        } // 刷新升级奖励


        updateUpgradeRewardComplete() {
          for (var node of this.btnNodes) {
            node.getComponent(Animation).stop();
            node.setScale(0, 0, 1);
          }

          ;
          this.updateSelectWeapon();
        } //播放选择武器 进场动画


        playBtnNodeAnim() {
          var interval = 0.4;
          this.btnNodes.forEach((node, index) => {
            this.scheduleOnce(() => {
              node.getComponent(Animation).play();
            }, interval * index);
          });
        } //打开并刷新选择武器界面


        updateSelectWeapon() {
          var _this8 = this;

          this.playBtnNodeAnim();
          var total = this.btnNodes.length;
          var count = 0;
          var randomArr = [];
          if (this._rewardConfig.length < total) throw "this._rewardConfig.length is err,this._rewardConfig is " + this._rewardConfig;

          while (total != count) {
            var name = this._rewardConfig[Math.random() * this._rewardConfig.length | 0];

            if (randomArr.indexOf(name) < 0) {
              // console.log(" //添加等级判断 越级则不添加 目前 还没写 后期添加");
              randomArr.push(name);
              count++;
            }
          }

          this._curAllURList = randomArr;
          var noStarArr = ["restoreHP", "addMoveSpeed", "addCriticalHitRate"]; // console.log("randomArr", randomArr);

          var _loop8 = function _loop8() {
            var node = _this8.btnNodes[i];
            var name = randomArr[i];
            var sprite = node.getChildByName("mask").getChildByName("icon").getComponent(Sprite); // em.dispatch("loadTheDirResources", "images/weapons/" + name + "/spriteFrame", (assets) => sprite.spriteFrame = assets);

            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("loadTheDirResources", "images/weapons/icon_" + name + "/spriteFrame", assets => sprite.spriteFrame = assets); //添加回调函数寻址方式

            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).createButton(_this8.node, node, "WeaponManager", "getUpgradeReward", name); // 初始化描述

            var mainNode = node;
            var label = mainNode.getChildByName("label").getComponent(Label);
            var label2 = mainNode.getChildByName("name").getComponent(Label);

            _this8.updateUpgradeWeaponDescription(label, label2, name); // 处理星星


            var starPar = mainNode.getChildByName("starPar");

            if (noStarArr.indexOf(name) > -1) {
              //隐藏星星
              starPar.active = false;
            } else {
              starPar.active = true;

              var data = _this8.getWeaponDataByIdOrName(name);

              var lv = _this8["_" + data.name + "Lv"] + 1;

              for (var _i4 = 1; _i4 < 6; _i4++) {
                var starPurple = starPar.getChildByName("star" + _i4).getChildByName("starPurple");
                if (_i4 <= lv) starPurple.active = true;else starPurple.active = false;
              } // console.log("name", name);
              // console.log("lv", lv);
              // let playStar = starPar.getChildByName("star" + (lv + 1)).getChildByName("starPurple");


              var playStar = starPar.getChildByName("star" + lv).getChildByName("starPurple");

              _this8.playStarWink(playStar, mainNode.parent);
            }
          };

          for (var i = 0; i < this.btnNodes.length; i++) {
            _loop8();
          } //开启自动化脚本后自动选择
          // console.log("open auto script", em.dispatch("getHeroControlProperty", "_openAutoScript"));


          if ((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_openAutoScript")) {
            var _name = randomArr[Math.random() * randomArr.length | 0];
            console.log("getUpgradeReward name", _name);
            this.getUpgradeReward(null, _name);
          }
        } // 播放星星闪烁动画


        playStarWink(node, mainNode) {
          node.active = true;

          var fun = () => {
            node.active = !node.active;

            if (mainNode.active == false) {
              this.unschedule(fun);
            }
          };

          this.schedule(fun, 0.3);
        }
        /**
         * @description: 刷新升级武器描述
         * @param {Label} label 需要刷新的label组件 
         * @param {string} wName 武器名称
         */


        updateUpgradeWeaponDescription(label, label2, wName) {
          switch (wName) {
            case "restoreHP":
              label.string = "血量拉满";
              label2.string = "血量拉满";
              break;

            case "addMoveSpeed":
              label.string = "增加20移速";
              label2.string = "移速⬆";
              break;

            case "addCriticalHitRate":
              label.string = "增加5%暴击率";
              label2.string = "暴击率⬆";
              break;

            default:
              if (this.isHasWeaponByName(wName)) {
                var data = this.getWeaponDataByIdOrName(wName);
                var lv = this["_" + data.name + "Lv"] + 1; //此时lv还没有++；

                label.string = data["lv" + lv];
                label2.string = data.name2;
                break;
              } else throw "type error,type is " + wName;

          }
        }

        upgradeWeaponByWeaponName(wn) {
          var data = this.getWeaponDataByIdOrName(wn);
          if (!data) throw "data is error,current data is " + data;
          if (this["_" + wn + "Lv"] == data.maxLevel) return;
          this["_" + wn + "Lv"]++;
          var wn2 = this.getNewStringFirstLetterToUpperCase(wn);
          this["isUsing" + wn2](true);

          if (this["_" + wn + "Lv"] == data.maxLevel) {
            this.deleteFillLevelWeaponFromRewardConfig(wn); //删除满级技能

            var string = "isOpen" + wn2 + "UltimateSkill";
            console.log("string", string);
            this[string](true);
          } // console.log("wn",wn);
          // console.log("wn2",wn2);

        } // 首字母大写


        getNewStringFirstLetterToUpperCase(str) {
          return str[0].toUpperCase() + str.substring(1);
        } // 将满级武器从奖励配置中删除


        deleteFillLevelWeaponFromRewardConfig(wn) {
          var index = this._rewardConfig.indexOf(wn);

          if (index > -1) this._rewardConfig.splice(index, 1);else throw "weapon name is error,wn is " + wn;
        } //回血


        restoreHP() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateBloodProgress", 999999);
        } //获取武器信息描述


        getWeaponDes() {
          // let string = "===========武器等级===========\n";
          var string = "武器等级：\n";
          var swordLv = this._swordLv > 0 ? "飞剑术等级：" + this._swordLv + "\n" : "";
          var guardLv = this._guardLv > 0 ? "波动阵等级：" + this._guardLv + "\n" : "";
          var spellLv = this._spellLv > 0 ? "旋转护符等级：" + this._spellLv + "\n" : "";
          var dartsLv = this._dartsLv > 0 ? "六角镖等级：" + this._dartsLv + "\n" : "";
          var spiritBulletLv = this._spiritBulletLv > 0 ? "手里剑等级：" + this._spiritBulletLv + "\n" : "";
          var skyThunderLv = this._skyThunderLv > 0 ? "天雷等级：" + this._skyThunderLv + "\n" : "";
          var flySwordLv = this._flySwordLv > 0 ? "五行珠等级：" + this._flySwordLv + "\n" : "";
          return string + swordLv + guardLv + spellLv + dartsLv + spiritBulletLv + flySwordLv + skyThunderLv;
        }
        /**
         * @description: 通过id 或 name 获取武器属性
         * @param {*} id_name 武器 id 或 name
         */


        getWeaponDataByIdOrName(id_name) {
          if (this._weaponData.hasOwnProperty(id_name)) return this._weaponData[id_name];else throw id_name + " of _weaponData is null";
        } //通过名称判断是否拥有武器


        isHasWeaponByName(name) {
          return this._weaponData.hasOwnProperty(name);
        } // 外部调用WeaponManager通用方法


        usingWeaponManagerFun(string) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        } //获取hero control 属性


        getWeaponManagerProperty(string) {
          if (this.hasOwnProperty(string)) return this[string];else throw "hero control 中不存在属性：" + string;
        } //=================技能==========================
        // =============一阶功法==================

        /**
         * @description: 剑雨术
         * 生成一阵持续5s的剑雨，对敌人产生多段伤害，每段伤害基础伤害为22。
         */


        usingSkillSwordRain() {
          var _this9 = this;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var total = 5;
          var spx = -160;
          var unitX = 80;
          var times = 5;
          var interval = 0.2;
          this.schedule(() => {
            var _loop9 = function _loop9(i) {
              var swordRain = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("swordRain");

              if (swordRain) {
                _this9.initSwordRain(swordRain, spx + i * unitX);
              } else {
                _this9.loadPrefab("swordRain", assets => {
                  (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                    error: Error()
                  }), plm) : plm).addPoolToPools("swordRain", new NodePool(), assets);
                  swordRain = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                    error: Error()
                  }), plm) : plm).getFromPool("swordRain");

                  _this9.initSwordRain(swordRain, spx + i * unitX);
                });
              }
            };

            for (var i = 0; i < total; i++) {
              _loop9(i);
            }
          }, interval, times, 0);
        }

        initSwordRain(swordRain, xOffset) {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "剑雨术");
          var data = {
            name: skillData.name2,
            duration: skillData.duration,
            damage: skillData.baseDamage
          };
          swordRain.setPosition(0, 0, 0);
          var layer = find("Canvas/bulletLayer");
          swordRain.parent = layer;
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          wp.x += xOffset;
          wp.y += 500;
          swordRain.setWorldPosition(wp);
          swordRain.getComponent("SwordRain").init(data);
        } // 

        /**
         * @description: 一剑隔世
         * 在一段时间聚气后对周边单位产生999的基础伤害，附加1.2倍的伤害加成。
         */


        usingSkillJustOneSwordDivideWorld() {
          var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("justOneSwordDivideWorld");
          if (prefab) this.initJustOneSwordDivideWorld(prefab);else {
            this.loadPrefab("justOneSwordDivideWorld", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("justOneSwordDivideWorld", new NodePool(), assets);
              var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("justOneSwordDivideWorld");
              this.initJustOneSwordDivideWorld(prefab);
            });
          }
        }

        initJustOneSwordDivideWorld(prefab) {
          // let layer = find("Canvas/bulletLayer");
          var layer = find("Canvas/heroLayer/skillParent");
          prefab.parent = layer;
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          prefab.setWorldPosition(wp);
          prefab.getComponent("JustOneSwordDivideWorld").init();
          var changeAngle = 0;
          var unitChange = 20;

          var callback = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            prefab.angle += unitChange;
            changeAngle += unitChange;

            if (changeAngle >= 1080) {
              this.unschedule(callback);
              prefab.getComponent("JustOneSwordDivideWorld").recoveryToPool();
            }
          };

          this.scheduleOnce(() => {
            prefab.getChildByName("collectPower").active = false;
            ;
            this.schedule(callback, 1 / 60);
          }, 1.5);
        }
        /**
         * @description: 万剑归冢
         * 15s内从远方唤来30把巨剑，每把可造成666的基础伤害，附加2倍伤害加成
         */


        usingSkillThousandsSwordToTomb() {
          var total = 30;

          for (var i = 0; i < total; i++) {
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("thousandsSwordToTomb");

            if (prefab) {
              this._thousandsSwordToTombQueue.enqueue(prefab);

              if (i === 0) this.schedule(this.createThousandsSwordToTomb, 0.3); //第一次有prefab 说明 已经预加载成功 直接调用即可。
            } else {
              this.loadPrefab("thousandsSwordToTomb", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("thousandsSwordToTomb", new NodePool(), assets);
                var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("thousandsSwordToTomb");

                this._thousandsSwordToTombQueue.enqueue(prefab); //第一次没有prefab 则回调成功后在调用

              });
            }
          }
        } //创建万剑


        createThousandsSwordToTomb() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return; // console.log("创建万剑");

          var prefab = this._thousandsSwordToTombQueue.dequeue();

          if (prefab) this.initThousandsSwordToTomb(prefab);else this.unschedule(this.createThousandsSwordToTomb);
        }

        initThousandsSwordToTomb(prefab) {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "万剑归冢");
          var data = {
            damage: skillData.baseDamage,
            duration: skillData.duration,
            moveDistance: 1000,
            name: skillData.name2
          };
          var layer = find("Canvas/bulletLayer");
          prefab.parent = layer;
          prefab.getComponent("ThousandsSwordToTomb").init(data);
        }
        /**
         * @description: 冰锥术
         * 向周围发射冰锥，每个冰锥造成500伤害，附加1.5伤害加成，并冻结对方。
         */


        usingSkillIceCone() {
          var _this10 = this;

          var total = 20;
          var r = 20;
          var initPosArr = (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).getCirclePos(r, total);

          var _loop10 = function _loop10() {
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("iceCone");
            var initPos = initPosArr[i];
            var dir = {
              x: initPos[0] / r,
              y: initPos[1] / r
            };

            if (prefab) {
              _this10.initIceCone(prefab, dir, initPos);
            } else {
              _this10.loadPrefab("iceCone", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("iceCone", new NodePool(), assets);
                var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("iceCone");

                _this10.initIceCone(prefab, dir, initPos);
              });
            }
          };

          for (var i = 0; i < total; i++) {
            _loop10();
          }
        }

        initIceCone(prefab, dir, pos) {
          var skillData = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "冰锥术");
          var data = {
            "damage": skillData.baseDamage,
            "duration": skillData.duration,
            "moveSpeed": 600,
            "canAttackTimes": 1,
            "name": skillData.name2
          };
          var layer = find("Canvas/bulletLayer");
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          prefab.parent = layer;
          prefab.setWorldPosition(wp.x + pos[0], wp.y + pos[1], wp.z);
          prefab.getComponent("IceCone").init(data, dir);
        } //使用炎爆术


        usingSkillFireBloom() {
          var total = 60;

          for (var i = 0; i < total; i++) {
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("fireBloom");

            if (prefab) {
              this._fireBloomQueue.enqueue(prefab);

              if (i === 0) this.schedule(this.createFireBloom, 0.2); //第一次有prefab 说明 已经预加载成功 直接调用即可。
            } else {
              this.loadPrefab("fireBloom", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("fireBloom", new NodePool(), assets);
                var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("fireBloom");

                this._fireBloomQueue.enqueue(prefab); //第一次没有prefab 则回调成功后在调用

              });
            }
          }
        } // 创建炎爆


        createFireBloom() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return; // console.log("创建炎爆");

          var prefab = this._fireBloomQueue.dequeue();

          if (prefab) {
            var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "getRandomPosNearHero");
            var layer = find("Canvas/bulletLayer");
            prefab.parent = layer;
            prefab.setWorldPosition(wp.x, wp.y, 0);
            prefab.getComponent("FireBloom").init();
          } else this.unschedule(this.createFireBloom);
        } // 使用地狱火


        usingSkillHellFire() {
          var total = 20;

          for (var i = 0; i < total; i++) {
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("hellFire");

            if (prefab) {
              this._hellFireQueue.enqueue(prefab);

              if (i === 0) this.schedule(this.createHellFire, 1); //第一次有prefab 说明 已经预加载成功 直接调用即可。
            } else {
              this.loadPrefab("hellFire", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("hellFire", new NodePool(), assets);
                var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("hellFire");

                this._hellFireQueue.enqueue(prefab); //第一次没有prefab 则回调成功后在调用

              });
            }
          }
        }

        createHellFire() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return; // console.log("创建炎爆");

          var prefab = this._hellFireQueue.dequeue();

          if (prefab) {
            // let wp = em.dispatch("usingHeroControlFun","getRandomPosNearHero");
            var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            var layer = find("Canvas/bulletLayer");
            prefab.parent = layer;
            prefab.setWorldPosition(wp.x, wp.y + 50, 0);
            prefab.getComponent("HellFire").init();
          } else this.unschedule(this.createHellFire);
        } //使用火行步


        usingSkillMoveLikeFire() {
          this.schedule(this.createMoveLikeFire, 0.2); // this.schedule(this.createMoveLikeFire, 0.5);
        }

        createMoveLikeFire() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("moveLikeFire");

          if (prefab) {
            var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            var layer = find("Canvas/bulletLayer");
            prefab.parent = layer;
            prefab.setWorldPosition(wp.x, wp.y, 0);
            prefab.getComponent("MoveLikeFire").init();
          } else {
            this.loadPrefab("moveLikeFire", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("moveLikeFire", new NodePool(), assets);
              var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("moveLikeFire");
              var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getHeroWorldPos");
              var layer = find("Canvas/bulletLayer");
              prefab.parent = layer;
              prefab.setWorldPosition(wp.x, wp.y, 0);
              prefab.getComponent("MoveLikeFire").init();
            });
          }
        } // 使用八面危风


        usingSkillDangerWindToNear() {
          var _this11 = this;

          var dirArr = [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]];
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");

          var _loop11 = function _loop11(dir) {
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("dangerWindToNear");

            if (prefab) {
              prefab.parent = find("Canvas/bulletLayer");
              prefab.setWorldPosition(wp.x, wp.y, 0);
              prefab.getComponent("DangerWindToNear").init(dir);
            } else {
              _this11.loadPrefab("dangerWindToNear", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("dangerWindToNear", new NodePool(), assets);
                var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("dangerWindToNear");
                prefab.parent = find("Canvas/bulletLayer");
                prefab.setWorldPosition(wp.x, wp.y, 0);
                prefab.getComponent("DangerWindToNear").init(dir);
              });
            }
          };

          for (var dir of dirArr) {
            _loop11(dir);
          }
        } // 使用末日风暴


        usingSkillDoomsdayStorm() {
          var dirArr = [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]];
          var total = 50;
          var queue = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          while (total) {
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("doomsdayStorm");
            if (prefab) queue.enqueue(prefab);else {
              this.loadPrefab("doomsdayStorm", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("doomsdayStorm", new NodePool(), assets);
                var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("doomsdayStorm");
                queue.enqueue(prefab);
              });
            }
            total--;
          }

          var count = 0;

          var fun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            var prefab = queue.dequeue();

            if (prefab) {
              var dir = dirArr[count % dirArr.length];
              var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getHeroWorldPos");
              prefab.parent = find("Canvas/bulletLayer");
              prefab.setWorldPosition(wp.x, wp.y, 0);
              prefab.getComponent("DoomsdayStorm").init(dir);
              count++;
            } else {
              this.unschedule(fun);
            }
          };

          this.schedule(fun, 1);
        } // 使用技能奔雷术


        usingSkillThunderRunning() {
          var dirArr = [[0, 1], [0, -1], [1, 0], [-1, 0]];
          var total = 20;
          var unit = 100;
          var queue = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          for (var i = 0; i < total; i++) {
            // let dir = dirArr[i % dirArr.length];
            var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("thunderRunning");

            if (prefab) {
              queue.enqueue(prefab);
              ;
            } else {
              this.loadPrefab("thunderRunning", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("thunderRunning", new NodePool(), assets);
                var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("thunderRunning");
                queue.enqueue(prefab);
              });
            }
          }

          var count = 0;

          var fun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            var prefab = queue.dequeue();

            if (prefab) {
              var dir = dirArr[count % dirArr.length];
              prefab.parent = find("Canvas/bulletLayer");
              var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getHeroWorldPos"); // prefab.setWorldPosition(wp.x + dir[0] * unit, wp.y + dir[1] * unit, wp.z);

              prefab.setWorldPosition(wp);
              prefab.getComponent("ThunderRunning").init({
                x: dir[0],
                y: dir[1]
              });
              count++;
            } else {
              this.unschedule(fun);
            }
          };

          this.schedule(fun, 1);
        } // 使用技能雷裂珠


        usingSkillThunderFissionBead() {
          var flyDir = this.getFlyDir((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_curAimDir"));
          var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("thunderFissionBead"); // let skillData = em.dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", "thunderFissionBead");

          if (prefab) {
            prefab.parent = find("Canvas/bulletLayer");
            var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            prefab.setWorldPosition(wp);
            prefab.getComponent("ThunderFissionBead").init(5, flyDir);
          } else {
            this.loadPrefab("thunderFissionBead", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("thunderFissionBead", new NodePool(), assets);
              var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("thunderFissionBead");
              prefab.parent = find("Canvas/bulletLayer");
              var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getHeroWorldPos");
              prefab.setWorldPosition(wp); // prefab.getComponent("ThunderFissionBead").init(8,flyDir);

              prefab.getComponent("ThunderFissionBead").init(5, flyDir);
            });
          }
        }
        /**
         * @description 使用装备 目前只有法器
         * 判断是否有装备， 没装备 关闭武器进度条 否则打开，开始计时
        */


        usingEqu() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");
          console.log("usingEqu", data);

          if (!data) {
            //没装备法器
            this.equWeaponCDProgress.node.parent.active = false;
            return;
          }

          this.usingEquWeapon();
          this.equWeaponCDProgress.node.parent.active = true;
          var interval = this.getCurUsingWeaponAttackInterval();
          this._equWeaTotalCD = interval;
          this._equWeaCurTime = 0; //无cd流  5002巨剑无cd流

          if (data.qData.effect.indexOf(5002) > -1) {
            this._equWeaCurTime = this._equWeaTotalCD;
            this.updateEquWeaProgress();
            return;
          }

          var t = 0.025;
          this.schedule(() => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            this._equWeaCurTime += t;
            this.updateEquWeaProgress();

            if (this._equWeaCurTime >= this._equWeaTotalCD) {
              this._equWeaCurTime = 0;
              this.usingEquWeapon();
            }

            ;
          }, t);
        } // 刷新装备 武器 进度条


        updateEquWeaProgress() {
          this.equWeaponCDProgress.fillRange = this._equWeaCurTime / this._equWeaTotalCD;
        } // 使用当前装备


        usingEquWeapon() {
          var weapon = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponType");

          switch (weapon) {
            case "长剑":
              this.createLongSword();
              break;

            case "巨剑":
              this.createGiantSword();
              break;

            case "巨斧":
              this.createGiantAxe();
              break;

            case "旋转斧":
              this.createRotationAxe();
              break;

            case "巨弩":
              this.createGiantArrow();
              break;

            case "连弩":
              this.createContinueArrow();
              break;

            default:
              break;
          }
        } // ====================法器类=========================
        // ===================长剑======================
        // 创建 长剑暂时使用的剑的数据 待修改


        usingLongSword() {
          var interval = this.getCurUsingWeaponAttackInterval();
          this.schedule(() => {
            this.createLongSword();
          }, interval);
        }

        createLongSword() {
          var _this12 = this;

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var total = 2;
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");
          console.log("createLongSword", data);
          if (data.qData.effect.indexOf(5003) > -1) total = 4; //横少千军

          if (data.qData.effect.indexOf(5004) > -1) total = 8; //上古剑气

          var flyDirs = [{
            x: -1,
            y: 0
          }, {
            x: 1,
            y: 0
          }, {
            x: 0,
            y: 1
          }, {
            x: 0,
            y: -1
          }, {
            x: -1,
            y: -1
          }, {
            x: 1,
            y: 1
          }, {
            x: -1,
            y: 1
          }, {
            x: 1,
            y: -1
          }];

          var _loop12 = function _loop12(i) {
            var sword = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("longSword");
            if (sword) _this12.initLongSword(sword, flyDirs[i]);else {
              _this12.loadPrefab("longSword", assets => {
                (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).addPoolToPools("longSword", new NodePool(), assets);
                sword = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                  error: Error()
                }), plm) : plm).getFromPool("longSword");

                _this12.initLongSword(sword, flyDirs[i]);
              });
            }
          };

          for (var i = 0; i < total; i++) {
            _loop12(i);
          }
        }

        initLongSword(sword, flyDir) {
          sword.setPosition(0, 0, 0);
          var layer = find("Canvas/bulletLayer");
          sword.parent = layer;
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos"); // wp.x += (flyDir.x * 10);
          // wp.y += (flyDir.y * 10);

          console.log("initLongSword", wp);
          sword.setWorldPosition(wp.x, wp.y, wp.z);
          sword.getComponent("LongSword").init(flyDir);
          console.log("long sword", sword);
        } // ===================巨剑======================


        usingGiantSword() {
          //拥有诸神之力 仅创建一次
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");

          if (data.qData.effect.indexOf(5002) > -1) {
            this.createGiantSword();
            return;
          }

          var interval = this.getCurUsingWeaponAttackInterval();
          this.schedule(() => {
            this.createGiantSword();
          }, interval);
        }

        createGiantSword() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var giantSword = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("giantSword");
          if (giantSword) this.initGiantSword(giantSword);else {
            this.loadPrefab("giantSword", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("giantSword", new NodePool(), assets);
              giantSword = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("giantSword");
              this.initGiantSword(giantSword);
            });
          }
          ;
        }

        initGiantSword(giantSword) {
          giantSword.setPosition(0, 0, 0);
          giantSword.parent = find("Canvas/heroLayer/skillParent");
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          giantSword.setWorldPosition(wp.x, wp.y, wp.z);
          giantSword.getComponent("GiantSword").init();
          console.log("initGiantSword", giantSword);
        } //===================巨斧=====================


        usingGiantAxe() {
          var interval = this.getCurUsingWeaponAttackInterval();
          this.schedule(() => {
            this.createGiantAxe();
          }, interval);
        }

        createGiantAxe() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var giantAxe = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("giantAxe");
          if (giantAxe) this.initGiantAxe(giantAxe);else {
            this.loadPrefab("giantAxe", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("giantAxe", new NodePool(), assets);
              giantAxe = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("giantAxe");
              this.initGiantAxe(giantAxe);
            });
          }
        }

        initGiantAxe(giantAxe) {
          giantAxe.setPosition(0, 0, 0); // let layer = find("Canvas/bulletLayer");

          var layer = find("Canvas/heroLayer/skillParent");
          giantAxe.parent = layer;
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          giantAxe.setWorldPosition(wp.x, wp.y, wp.z);
          giantAxe.getComponent("GiantAxe").init();
          console.log("initGiantAxe", giantAxe);
        } //===================旋转斧=====================


        usingRotationAxe() {
          var interval = this.getCurUsingWeaponAttackInterval();
          this.schedule(() => {
            this.createRotationAxe();
          }, interval);
        } // 创建旋转斧


        createRotationAxe() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var rotationAxe = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("rotationAxe");
          if (rotationAxe) this.initRotationAxe(rotationAxe);else {
            this.loadPrefab("rotationAxe", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("rotationAxe", new NodePool(), assets);
              rotationAxe = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("rotationAxe");
              this.initRotationAxe(rotationAxe);
            });
          }
        }

        initRotationAxe(rotationAxe) {
          rotationAxe.setPosition(0, 0, 0); // let layer = find("Canvas/bulletLayer");

          rotationAxe.parent = find("Canvas/heroLayer/skillParent");
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          rotationAxe.setWorldPosition(wp.x, wp.y, wp.z);
          rotationAxe.getComponent("RotationAxe").init();
        } // =================巨弩==================


        usingGiantArrow() {
          var interval = this.getCurUsingWeaponAttackInterval();
          this.createGiantArrow();
          this.schedule(() => {
            this.createGiantArrow();
          }, interval);
        }

        createGiantArrow() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var giantArrow = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("giantArrow");
          if (giantArrow) this.initGiantArrow(giantArrow);else {
            this.loadPrefab("giantArrow", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("giantArrow", new NodePool(), assets);
              giantArrow = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("giantArrow");
              this.initGiantArrow(giantArrow);
            });
          }
        }

        initGiantArrow(giantArrow) {
          giantArrow.setPosition(0, 0, 0);
          giantArrow.parent = find("Canvas/bulletLayer");
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          giantArrow.setWorldPosition(wp.x, wp.y, wp.z);
          giantArrow.getComponent("GiantArrow").init(); // console.log("initGiantArrow", giantArrow);
        } // =================连弩==================


        usingContinueArrow() {
          var interval = this.getCurUsingWeaponAttackInterval();
          this.schedule(() => {
            this.createContinueArrow();
          }, interval);
        }

        createContinueArrow() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var continueArrow = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("continueArrow");
          if (continueArrow) this.initContinueArrow(continueArrow);else {
            this.loadPrefab("continueArrow", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("continueArrow", new NodePool(), assets);
              continueArrow = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("continueArrow");
              this.initContinueArrow(continueArrow);
            });
          }
        }

        initContinueArrow(continueArrow) {
          continueArrow.setPosition(0, 0, 0);
          continueArrow.parent = find("Canvas/bulletLayer");
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          var pos = {
            x: Math.random() * 30,
            y: Math.random() * 30
          };
          continueArrow.setWorldPosition(wp.x + pos.x, wp.y + pos.y, wp.z);
          continueArrow.getComponent("ContinueArrow").init();
        } //======================法器公用方法===================


        getCurUsingWeaponAttackInterval() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getCurHeroUsingWeaponData");
          var interval = data.lData.attackInterval;
          if (data.qData.effect.indexOf(2) > -1) interval *= 2;
          if (data.qData.effect.indexOf(1001) > -1) interval *= 0.5;
          console.log("getCurUsingWeaponAttackInterval", interval);
          return interval;
        } // 产生冲击波


        createShockWave(wp, flyDir) {
          var shockWave = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("shockWave");
          if (shockWave) this.initShockWave(shockWave, wp, flyDir);else {
            this.loadPrefab("shockWave", assets => {
              (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).addPoolToPools("shockWave", new NodePool(), assets);
              shockWave = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("shockWave");
              this.initShockWave(shockWave, wp, flyDir);
            });
          }
        } // 初始化冲击波


        initShockWave(shockWave, wp, flyDir) {
          shockWave.setPosition(0, 0, 0);
          shockWave.parent = find("Canvas/bulletLayer");
          shockWave.setWorldPosition(wp);
          shockWave.getComponent("ShockWave").init(flyDir);
        } // //通用按钮入口 用于解决因脚本函数过多找不到具体方法
        // commonBtnEnter(e,p){
        //     if(this.hasOwnProperty(p)) this[p]();
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "equWeaponCDProgress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "weaponDataJson", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnNodes", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "defaultMaterial", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aafb36046037a11e6933a01177eca3e6e9072bd6.js.map