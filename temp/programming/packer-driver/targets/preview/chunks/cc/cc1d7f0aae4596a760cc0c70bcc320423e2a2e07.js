System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, NodePool, Vec3, JsonAsset, find, BoxCollider2D, Label, Node, plm, em, QuadtreeRect, ggConfig, ggd, Simulator, RVOConfig, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, MonsterManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQuadtreeRect(extras) {
    _reporterNs.report("QuadtreeRect", "../../plugin/Quadtree", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggConfig(extras) {
    _reporterNs.report("ggConfig", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimulator(extras) {
    _reporterNs.report("Simulator", "../../RVO/Simulator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRVOConfig(extras) {
    _reporterNs.report("RVOConfig", "../../RVO/RVOConfig", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      NodePool = _cc.NodePool;
      Vec3 = _cc.Vec3;
      JsonAsset = _cc.JsonAsset;
      find = _cc.find;
      BoxCollider2D = _cc.BoxCollider2D;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      plm = _unresolved_2.plm;
    }, function (_unresolved_3) {
      em = _unresolved_3.em;
    }, function (_unresolved_4) {
      QuadtreeRect = _unresolved_4.default;
    }, function (_unresolved_5) {
      ggConfig = _unresolved_5.ggConfig;
      ggd = _unresolved_5.ggd;
    }, function (_unresolved_6) {
      Simulator = _unresolved_6.default;
    }, function (_unresolved_7) {
      RVOConfig = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "64b4feS1jZCmaEd2+7cjaAo", "MonsterManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Prefab', 'NodePool', 'Vec3', 'JsonAsset', 'SpriteAtlas', 'resources', 'find', 'AnimationClip', 'BoxCollider2D', 'Rect', 'Label', 'input', 'Input', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterManager", MonsterManager = (_dec = ccclass('MonsterManager'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(JsonAsset), _dec5 = property(JsonAsset), _dec6 = property(Label), _dec7 = property(Prefab), _dec(_class = (_class2 = class MonsterManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "monsterChildPrefab", _descriptor, this);

          _initializerDefineProperty(this, "monsterLeaderPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "monsterPropertiesJson", _descriptor3, this);

          _initializerDefineProperty(this, "monsterStrongJson", _descriptor4, this);

          _initializerDefineProperty(this, "monsterTotalLabel", _descriptor5, this);

          _initializerDefineProperty(this, "bullet", _descriptor6, this);

          this._initPosList = null;
          this._monsterProperties = {};
          this._monsterAnimClips = {};
          this._createCount = 0;
          //记录monster 创建数
          this._quadtree = void 0;
          //四叉树
          this._waitCreateQueue = [];
          //等待创建怪物的队列
          this._monsterParList = void 0;
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingMonsterManagerFun");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("createMonsterByOutsideData");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("createMonsterLeader");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getMonsterTotal");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("removeAllMonsters");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getMonsterDataById");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getMonsterAnimByAnimKey");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("createMonsterDamageTex");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getAllMonsterColliders");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getCurMonsterQuadtree");
        }

        onLoad() {
          this.initAnimClips(); //加载所有动画

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingMonsterManagerFun", this.usingMonsterManagerFun.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("createMonsterByOutsideData", this.createMonsterByOutsideData.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("createMonsterLeader", this.createMonsterLeader.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getMonsterTotal", this.getMonsterTotal.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("removeAllMonsters", this.removeAllMonsters.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getMonsterDataById", this.getMonsterDataById.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getMonsterAnimByAnimKey", this.getMonsterAnimByAnimKey.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("createMonsterDamageTex", this.createMonsterDamageTex.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getAllMonsterColliders", this.getAllMonsterColliders.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getCurMonsterQuadtree", this.getCurMonsterQuadtree.bind(this));
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("monsterChild", new NodePool(), this.monsterChildPrefab);
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("monsterLeader", new NodePool(), this.monsterLeaderPrefab);
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("monsterBullet", new NodePool(), this.bullet); // this._initPosList = {
          //     "up": { x: 0, y: 100 },
          //     "down": { x: 0, y: -100 },
          //     "left": { x: -100, y: 0 },
          //     "right": { x: 100, y: 0 }
          // };

          this._initPosList = {
            "up": {
              x: 0,
              y: 300
            },
            "down": {
              x: 0,
              y: -300
            },
            "left": {
              x: -300,
              y: 0
            },
            "right": {
              x: 300,
              y: 0
            }
          };
          this.initMonsterProperties();
          this.settingRVOConfig();
          this.initEnemyPar();
        }

        initEnemyPar() {
          this._monsterParList = {};
          var config = ["normal", "green", "red", "yellow", "others", "white", "frozen", "paralysis", "effect_frozen"];

          for (var name of config) {
            var node = new Node(name);
            node.parent = find("Canvas/enemyLayer");
            this._monsterParList[name] = node;
          }

          ;
          console.log(find("Canvas/puppetLayer"));
        }

        settingRVOConfig() {
          (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.setTimeStep((_crd && RVOConfig === void 0 ? (_reportPossibleCrUseOfRVOConfig({
            error: Error()
          }), RVOConfig) : RVOConfig).gameTimeStep);
          (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.setAgentDefaults((_crd && RVOConfig === void 0 ? (_reportPossibleCrUseOfRVOConfig({
            error: Error()
          }), RVOConfig) : RVOConfig).neighborDist, (_crd && RVOConfig === void 0 ? (_reportPossibleCrUseOfRVOConfig({
            error: Error()
          }), RVOConfig) : RVOConfig).maxNeighbors, (_crd && RVOConfig === void 0 ? (_reportPossibleCrUseOfRVOConfig({
            error: Error()
          }), RVOConfig) : RVOConfig).timeHorizon, (_crd && RVOConfig === void 0 ? (_reportPossibleCrUseOfRVOConfig({
            error: Error()
          }), RVOConfig) : RVOConfig).timeHorizonObst, (_crd && RVOConfig === void 0 ? (_reportPossibleCrUseOfRVOConfig({
            error: Error()
          }), RVOConfig) : RVOConfig).radius, (_crd && RVOConfig === void 0 ? (_reportPossibleCrUseOfRVOConfig({
            error: Error()
          }), RVOConfig) : RVOConfig).maxSpeed, (_crd && RVOConfig === void 0 ? (_reportPossibleCrUseOfRVOConfig({
            error: Error()
          }), RVOConfig) : RVOConfig).velocity);
        } // 刷新四叉树


        updateQuadtree() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          this._quadtree = new (_crd && QuadtreeRect === void 0 ? (_reportPossibleCrUseOfQuadtreeRect({
            error: Error()
          }), QuadtreeRect) : QuadtreeRect)({
            x: wp.x - (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
              error: Error()
            }), ggConfig) : ggConfig).quadTreeRange.w / 2,
            y: wp.y - (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
              error: Error()
            }), ggConfig) : ggConfig).quadTreeRange.h / 2,
            width: (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
              error: Error()
            }), ggConfig) : ggConfig).quadTreeRange.w,
            //750
            height: (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
              error: Error()
            }), ggConfig) : ggConfig).quadTreeRange.h //1334

          });

          for (var i = 0; i < this.node.children.length; i++) {
            var par = this.node.children[i];

            for (var child of par.children) {
              var collider = child.getComponent(BoxCollider2D); // let wp = child.getWorldPosition();

              var rect = collider.worldAABB;
              if (Math.abs(wp.x - rect.x - rect.width / 2) > (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
                error: Error()
              }), ggConfig) : ggConfig).quadTreeRange.w / 2) continue;
              if (Math.abs(wp.y - rect.y - rect.height / 2) > (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
                error: Error()
              }), ggConfig) : ggConfig).quadTreeRange.h / 2) continue;

              this._quadtree.insert(rect);
            }
          }

          ;
          var bossLayer = find("Canvas/bossLayer");

          for (var _i = 0; _i < bossLayer.children.length; _i++) {
            var boss = bossLayer.children[_i];

            var _collider = boss.getChildByName("sprite").getComponent(BoxCollider2D);

            var _rect = _collider.worldAABB;

            this._quadtree.insert(_rect);
          }
        } // 获取当前四叉树


        getCurMonsterQuadtree() {
          return this._quadtree;
        } // 初始化动画剪辑


        initAnimClips() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDir", "/anim/enemy/monster", arr => {
            arr.forEach(clip => {
              this._monsterAnimClips[clip.name] = clip;
            });
          });
        } // 初始化怪物id属性映射表


        initMonsterProperties() {
          var all = this.monsterPropertiesJson.json;
          all.forEach(element => {
            var id = element.id;
            this._monsterProperties[id] = element;
          });
        }

        start() {
          this.initQuadTree();
          this.showMonsterTotal(1); //测试函数
        } // 初始化四叉树


        initQuadTree() {
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          this._quadtree = new (_crd && QuadtreeRect === void 0 ? (_reportPossibleCrUseOfQuadtreeRect({
            error: Error()
          }), QuadtreeRect) : QuadtreeRect)({
            x: wp.x - 300,
            y: wp.y - 300,
            width: 600,
            //750
            height: 1200 //1334

          });
          console.log("this._quadtree", this._quadtree);
        } // 日志输出怪物总数


        showMonsterTotal(interval) {
          this.schedule(() => {
            var monsterTotal = this.getMonsterTotal(); // console.log("monsterTotal", monsterTotal);

            this.monsterTotalLabel.string = "怪物总数：\n" + monsterTotal;
          }, interval);
        } // 创建精英怪


        createMonsterLeader(id, type) {
          // let leader = instantiate(this.monsterLeaderPrefab);
          var leader = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("monsterLeader"); // leader.parent = find("Canvas/enemyLayer");

          leader.parent = find("Canvas/enemyLayer/normal");
          var initOffset = this.getRandomInitPos();
          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          leader.setWorldPosition(initOffset.x + wp.x, initOffset.y + wp.y, 0);
          leader.getComponent("MonsterLeader").createLeader(id, type);
        } //获取玩家附近点


        getAllAroundWpList(wp) {
          var list = {
            up: new Vec3(),
            down: new Vec3(),
            left: new Vec3(),
            right: new Vec3()
          };

          for (var dir in list) {
            var obj = list[dir];
            obj.x = wp.x + this._initPosList[dir].x;
            obj.y = wp.y + this._initPosList[dir].y;
            obj.z = 0;
          }

          ;
          return list;
        } //===============创建各种队形===================

        /**
         * @method createQueueCircle  创建圆形队伍
         * @param r 圆形方程半径
         * @param total 生成的在圆上的点的总数
         */


        createQueueCircle(r, total) {
          if (total % 4 !== 0) throw "生成的在圆上的点的总数错误，不是4的倍数" + total;
          var quarter = total / 4;
          var arr = [];

          for (var i = 1; i < quarter; i++) {
            //第一象限
            var y = r * Math.sin(Math.PI / 180 * i / quarter * 90);
            var x = Math.sqrt(r * r - y * y);
            arr.push([x, y], [x, -y], [-x, y], [-x, -y]);
          }

          ;
          arr.push([0, r], [0, -r], [r, 0], [-r, 0]);
          return arr;
        }
        /**
         * @method createQueueHeart 创建心形队伍 
         * @param r 心形方程 半径
         * @param total 生成的在心形上的点的总数
         * 公式 X=16(sinθ)³  Y=13cosθ-5cos2θ-2cos3θ-cos4θ (0≤θ≤2π)
         */


        createQueueHeart(r, total) {
          if (total < 20) throw "total过小，无法生成心形方程";
          var unit = 2 * Math.PI / total;
          r /= 16; // X=16(sinθ)³ 推断 x 最大为16；所以对y缩放

          var arr = [];

          while (total) {
            var radian = unit * total;
            var x = 16 * Math.sin(radian) ** 3;
            var y = 13 * Math.cos(radian) - 5 * Math.cos(2 * radian) - 2 * Math.cos(3 * radian) - Math.cos(4 * radian);
            x *= r;
            y *= r;
            arr.push([x, y]);
            total--;
          }

          return arr;
        } //==================外部调用=======================

        /**
        * 通过外部数据创建关卡怪物
        * @param {number} id 生成怪物id
        * @param {object} queue 生成怪物队形
        */


        createMonsterByOutsideData(id, queue, initOffset) {
          if (initOffset === void 0) {
            initOffset = null;
          }

          // console.log("参数为",id,queue);
          if (initOffset == null) {
            initOffset = this.getRandomInitPos();
          }

          ;
          this.createMonsterQueue(id, queue, initOffset);
        } // 获取随机上下左右 四个初始化方向


        getRandomInitPos() {
          var coefficient = 2; // let index = Math.random() * 4 | 0;

          this._createCount++;
          var index = this._createCount % 4;

          switch (index) {
            case 0:
              return {
                x: this._initPosList.up.x * coefficient,
                y: this._initPosList.up.y * coefficient
              };

            case 1:
              return {
                x: this._initPosList.down.x * coefficient,
                y: this._initPosList.down.y * coefficient
              };

            case 2:
              return {
                x: this._initPosList.left.x * coefficient,
                y: this._initPosList.left.y * coefficient
              };

            case 3:
              return {
                x: this._initPosList.right.x * coefficient,
                y: this._initPosList.right.y * coefficient
              };

            default:
              throw new Error("getRandomInitPos err");
          }
        } //生成怪物   


        createMonsterQueue(monsterId, queue, initOffset) {
          initOffset = this.addRandomOffset(initOffset); // console.log("initOffset",initOffset);

          queue.forEach(pos => {
            if ((_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
              error: Error()
            }), ggConfig) : ggConfig).framingInitMonster) this._waitCreateQueue.push({
              monsterId,
              pos,
              initOffset
            });else this.createMonster(monsterId, pos, initOffset);
          });
        }

        update() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this.updateQuadtree();
          (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.doStep();
          if (!(_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).framingInitMonster) return;

          if (this._waitCreateQueue.length > 0) {
            // console.log("分帧生成", this._waitCreateQueue);
            var max = 1;
            var count = this._waitCreateQueue.length > max ? max : this._waitCreateQueue.length;

            while (count) {
              var data = this._waitCreateQueue.shift();

              this.createMonster(data.monsterId, data.pos, data.initOffset);
              count--;
            }
          }
        }

        createMonster(id, pos, initOffset) {
          var prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("monsterChild");
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getMonsterDataById", id); // prefab.parent = this.node;

          var wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          prefab.parent = this.getParNodeByKey(data.color);
          prefab.setWorldPosition(initOffset.x + wp.x + pos[0], initOffset.y + wp.y + pos[1], 0);
          prefab.active = true;
          prefab.getComponent("Monster").init(data, id, this.monsterStrongJson.json["stage" + (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curStage]); //初始化碰撞脚本血量
        }
        /**
         * @description: 增加随机偏移量 
         * @param {object} initOffset {x,y} x为x轴上的偏移量 y为y轴上的偏移量
         *  如果x轴或y轴等于0则在该轴上增加0 如果都为0 则不变
         */


        addRandomOffset(initOffset) {
          if (initOffset.x == 0 && initOffset.y != 0) {
            var y = initOffset.y;
            initOffset.x += Math.random() > 0.5 ? 0.5 * y + Math.random() * y * 0.5 | 0 : -(0.5 * y + Math.random() * y * 0.5 | 0);
          } else if (initOffset.x != 0 && initOffset.y == 0) {
            var x = initOffset.x;
            initOffset.y += Math.random() > 0.5 ? 0.5 * x + Math.random() * x * 0.5 | 0 : -(0.5 * x + Math.random() * x * 0.5 | 0);
          } else return initOffset;

          return initOffset;
        } //获取怪物总数  不获取boss 


        getMonsterTotal() {
          var total = 0;
          this.node.children.forEach(par => {
            total += par.children.length;
          }); // let bossLayer = find("Canvas/bossLayer");
          // total += bossLayer.children.length;

          return total;
        } //获取所有怪物 不获取boss 信息


        getAllMonster() {
          var all = [];

          for (var i = 0; i < this.node.children.length; i++) {
            var par = this.node.children[i];

            for (var child of par.children) {
              all.push(child);
            }
          }

          ; // let bossLayer = find("Canvas/bossLayer");
          // for (let i = 0; i < bossLayer.children.length; i++) {
          //     let boss = bossLayer.children[i];
          //     all.push(boss);
          // };

          return all;
        } //移除所有怪物


        removeAllMonsters() {
          var some = 50;

          var fun = () => {
            console.log("分帧移除");
            var mt = this.getMonsterTotal();
            console.log("mt", mt);

            if (mt) {
              if (mt >= some) this.removeSomeMonsters(some);else this.removeSomeMonsters(mt);
            } else {
              this.unschedule(fun);
            }
          };

          this.schedule(fun, 1 / 60);
        }
        /**
         * @description: 移除指定数量monster 
         * @param {*} total 单次移除总数
         * @total 550+： 耗时：18s  some：5
         * @total 550+： 耗时：23s  some：1 
         */


        removeSomeMonsters(total) {
          var all = this.getAllMonster(); // console.log("all",all);

          while (total) {
            var child = all[total - 1];
            child.removeFromParent();
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToJunkyard(child);
            total--;
          }
        } // //移除所有怪物
        // removeAllMonsters() {
        //     while (this.node.children.length) {
        //         let child = this.node.children[0];
        //         child.removeFromParent();
        //         plm.putToJunkyard(child, true);
        //     };
        // }
        //通过id  获取怪物属性


        getMonsterDataById(id) {
          var flag = this._monsterProperties.hasOwnProperty(id); // console.log("this._monsterProperties",this._monsterProperties);


          if (flag) return this._monsterProperties[id];else throw "property " + id + " of _monsterProperties is null";
        } // 通过索引获取怪物图片  


        getMonsterAnimByAnimKey(animKey) {
          return this._monsterAnimClips[animKey];
        } //创建怪物伤害文本


        createMonsterDamageTex(node, damage) {
          //判断英雄 伤害免疫
          if ((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_isDamageImmunity")) return;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "updateBloodProgress", -damage);
        } // //创建怪物伤害文本
        // createMonsterDamageTex(node, damage) {
        //     //判断英雄 伤害免疫
        //     if (em.dispatch("getHeroControlProperty", "_isDamageImmunity")) return;
        //     em.dispatch("createDamageTex", node, damage, { x: 0, y: 50 });
        //     em.dispatch("usingHeroControlFun", "updateBloodProgress", -damage);
        // }
        // 获取敌人节点上所有的碰撞器  精英怪和boss 的未获取


        getAllMonsterColliders() {
          var all = this.getAllMonster();
          var arr = [];
          all.forEach(child => {
            if (child.name == "monsterChild") {
              var collider = child.getComponent(BoxCollider2D);
              arr.push(collider);
            }
          });
          return arr;
        } // 获取所有怪物的脚本


        getAllMonsterScript() {
          var all = this.getAllMonster();
          var arr = [];
          all.forEach(child => {
            if (child.name == "monsterChild") {
              arr.push(child.getComponent("Monster"));
            } else if (child.name == "monsterLeader") {
              arr.push(child.getComponent("MonsterLeader"));
            } else {// arr.push(child);
              // boss暂未处理
            }

            ;
          });
          return arr;
        }

        pauseAllAnim() {
          this.doSameThings("pauseAnim");
        }

        resumeAllAnim() {
          this.doSameThings("resumeAnim");
        } // 怪物层所有节点做一样的事情（调用同一方法）


        doSameThings(funName) {
          var all = this.getAllMonster();
          all.forEach(child => {
            if (child.name == "monsterChild") {
              child.getComponent("Monster")[funName]();
            } else if (child.name == "monsterLeader") {
              child.getComponent("MonsterLeader")[funName]();
            } else {
              //目前为boss
              child.components[0][funName](); // child.components[0].pauseAllAnim();
            }
          });
        } //使用hero control 方法


        usingMonsterManagerFun(string) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        } //根据 key 获取父节点


        getParNodeByKey(key) {
          if (this._monsterParList.hasOwnProperty(key)) return this._monsterParList[key];else throw "getParNodeByKey false";
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "monsterChildPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "monsterLeaderPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "monsterPropertiesJson", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "monsterStrongJson", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "monsterTotalLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec7], {
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
//# sourceMappingURL=cc1d7f0aae4596a760cc0c70bcc320423e2a2e07.js.map