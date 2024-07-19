System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, Size, Contact2DType, Sprite, Animation, UITransform, Vec2, find, NodePool, instantiate, em, attackInterval, ggd, groupIndex, tagData, glf, plm, Queue, monsterData, _dec, _class, _crd, ccclass, property, Boss;

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

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../../global/globalFun", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "../../global/Queue", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmonsterData(extras) {
    _reporterNs.report("monsterData", "../monster/MonsterData", _context.meta, extras);
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
      BoxCollider2D = _cc.BoxCollider2D;
      Size = _cc.Size;
      Contact2DType = _cc.Contact2DType;
      Sprite = _cc.Sprite;
      Animation = _cc.Animation;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      find = _cc.find;
      NodePool = _cc.NodePool;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      attackInterval = _unresolved_3.attackInterval;
      ggd = _unresolved_3.ggd;
      groupIndex = _unresolved_3.groupIndex;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      glf = _unresolved_4.glf;
    }, function (_unresolved_5) {
      plm = _unresolved_5.plm;
    }, function (_unresolved_6) {
      Queue = _unresolved_6.Queue;
    }, function (_unresolved_7) {
      monsterData = _unresolved_7.monsterData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ef2f9haQTxL5Jy9QffrqzGj", "Boss", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider2D', 'BoxCollider2D', 'Button', 'Size', 'Contact2DType', 'Color', 'Sprite', 'Animation', 'UITransform', 'Vec2', 'find', 'NodePool', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Boss", Boss = (_dec = ccclass('Boss'), _dec(_class = class Boss extends Component {
        constructor() {
          super(...arguments);
          // 默认属性
          this._isTouchHero = false;
          this._isTouchFriend1Skill1 = false;
          this._isTouchSpell = false;
          this._normalDamage = 99;
          //待初始化属性
          this._sprite = void 0;
          this._bloodSprite = void 0;
          this._bossId = void 0;
          this._rawSpeed = void 0;
          this._curSpeed = void 0;
          this._canMove = true;
          this._isInitData = false;
          this._maxBlood = 0;
          this._curBlood = 0;
          //技能相关
          this._skillData = void 0;
          this._normalParticlePrefab = void 0;
          //冲刺碰撞技能
          this._sprintTipsPrefab = null;
          //boss 冲刺预警预制件
          this._sprintDir = null;
          //boss 冲刺方向
          this._sprintDis = void 0;
          //boss 冲刺距离
          this._sprintSpeed = void 0;
        }

        //boss 冲刺速度
        // =====================初始化阶段=====================
        initBossInfo(bd) {
          this._normalParticlePrefab = find("/atom", this.node);
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("normalParticle", new NodePool(), this._normalParticlePrefab);
          this._sprite = this.node.getChildByName("sprite");
          this._bloodSprite = this.node.getChildByName("bloodProgressBg").getChildByName("bloodProgress").getComponent(Sprite);
          this._bossId = bd.id;
          this._rawSpeed = bd.moveSpeed;
          this._curSpeed = bd.moveSpeed;
          this._canMove = bd.canMove;
          this._maxBlood = bd.maxBlood;
          this._curBlood = bd.maxBlood;
          this._normalDamage = bd.normalDamage;
          this.initBossMoveAnim(bd.animKey);
          this.updateBlood(0);
          this.initCollider();
          this._isInitData = true;
        } // 初始化boss移动动画


        initBossMoveAnim(animKey) {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", "/anim/enemy/monster/" + animKey, assets => {
            this._sprite.getComponent(Animation).defaultClip = assets;

            this._sprite.getComponent(Animation).play();
          });
        } // 初始化碰撞器
        // initCollider(data: { size: Size, tag: number }) {


        initCollider() {
          var collider = this._sprite.addComponent(BoxCollider2D);

          var UIT = this._sprite.getComponent(UITransform);

          var bossSize = new Size(UIT.contentSize.x, UIT.contentSize.y);
          collider.tag = (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).boss;
          collider.size = bossSize;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).enemy;
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        onDestroy() {
          console.log("关闭所有回调");
          this.unscheduleAllCallbacks();
        }

        start() {
          this.checkupIsInitData();
        } //检查是否初始化成功


        checkupIsInitData() {
          if (this._isInitData) {
            console.log("初始化boss信息");
          } else throw "未初始化boss信息";
        }

        update(deltaTime) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this.updateSpriteDirection();
          this.moveToHero(deltaTime);
        } //向玩家移动


        moveToHero(dt) {
          if (!this._canMove) return;
          var targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          var curPos = this.node.getWorldPosition();
          var x = targetPos.x - curPos.x;
          var y = targetPos.y - curPos.y;
          var dis = Math.sqrt(x * x + y * y);

          if (dis >= (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
            error: Error()
          }), monsterData) : monsterData).minGapWithHero2) {
            //离得较近时 无需移动
            var time = dis / this._curSpeed;
            var moveDisX = dt / time * x;
            var moveDisY = dt / time * y;
            this.node.setWorldPosition(curPos.x + moveDisX, curPos.y + moveDisY, 0);
          }
        } // // 刷新面朝方向


        updateSpriteDirection() {
          var x = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos").x - this.node.getChildByName("sprite").getWorldPosition().x;
          var scale = this.node.getChildByName("sprite").getScale();
          if (x > 0) this.node.getChildByName("sprite").setScale(-Math.abs(scale.x), scale.y, scale.z);else if (x < 0) this.node.getChildByName("sprite").setScale(Math.abs(scale.x), scale.y, scale.z);
        } // 加速冲刺


        accelerateToHero(t) {
          this.scheduleOnce(() => {
            this._curSpeed = this._rawSpeed;
          }, t);
        } //根据方向改变矩形的旋转


        changeRotationByDir(node, dir) {
          if (dir.x == 0 && dir.y == 0) return; //无方向 暂不处理

          if (dir.x == 0) {
            //没有x方向
            if (dir.y > 0) node.angle = -90;else node.angle = 90;
            return;
          }

          ;

          if (dir.y == 0) {
            //没有y方向
            if (dir.x > 0) node.angle = 180;else node.angle = 0;
            return;
          }

          ;
          var bevelLen = Math.sqrt(dir.x * dir.x + dir.y * dir.y);
          var sin = Math.abs(dir.y) / bevelLen;
          var asin = Math.asin(sin);
          var angle = asin / Math.PI * 180;

          if (dir.y > 0) {
            //向上飞行
            if (dir.x > 0) node.angle = 180 + angle;else node.angle = 360 - angle;
          } else {
            if (dir.x > 0) node.angle = 180 - angle;else node.angle = angle;
          }
        } // 动态加载预制件


        loadPrefab(fileName, callback) {
          if (callback === void 0) {
            callback = null;
          }

          var defaultUrl = "/prefabs/enemy/";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", defaultUrl + fileName, assets => {
            if (callback) callback(assets);
          });
        } // ==========================boss冲刺攻击==========================
        //初始化冲刺数据


        initSprintData() {
          this.loadPrefab("sprintTips", assets => {
            this._sprintTipsPrefab = assets;
          });
          this._sprintSpeed = this._skillData.sprint.speed;
        }
        /**
         * @description 是否冲向玩家
         * @param {number} offsetDis 冲刺后距离目标的距离 修正距离
         * @param {Function} cb 冲刺结束的回调，默认为空
         * @param {Function} ingCb 冲刺过程中的回调，默认为空
         * @param {number} ingGap ingCb的释放间隔
        */


        isToSprintHero(offsetDis, endCb, ingCb, ingGap) {
          if (offsetDis === void 0) {
            offsetDis = 0;
          }

          if (endCb === void 0) {
            endCb = null;
          }

          if (ingCb === void 0) {
            ingCb = null;
          }

          if (ingGap === void 0) {
            ingGap = 1;
          }

          if (!this._canMove) return;
          var targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          var curPos = this.node.getWorldPosition();
          var x = targetPos.x - curPos.x;
          var y = targetPos.y - curPos.y;
          var dis = Math.sqrt(x * x + y * y) + offsetDis;
          this._canMove = false;
          this._sprintDir = (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).getTwoPointFlyDir(targetPos, curPos);
          this._sprintDis = dis; //创建提示预制件

          var prefab = instantiate(this._sprintTipsPrefab);
          var anim = prefab.getComponent(Animation);
          anim.on("finished", () => {
            if (this.node) this.startSprint(prefab, endCb, ingCb, ingGap);
          });
          prefab.getComponent(UITransform).setContentSize(dis, this.node.getChildByName("sprite").getComponent(UITransform).width - 20);
          this.changeRotationByDir(prefab, this._sprintDir); // prefab.parent = this.node;
          // prefab.setPosition(0, 0, 0);

          prefab.parent = find("Canvas/bulletLayer");
          var wp = this.node.getWorldPosition();
          prefab.setWorldPosition(wp);
        }
        /**
         * @description 开始冲刺 
         * @param {Node} prefab 提示预制件 播放完毕销毁 
         * @param {Function} endCb 冲刺结束的回调，默认为空 
        */


        startSprint(prefab, endCb, ingCb, ingGap) {
          if (endCb === void 0) {
            endCb = null;
          }

          if (ingCb === void 0) {
            ingCb = null;
          }

          var interval = 1 / 60;
          var speed = this._sprintSpeed * interval;

          var callback = () => {
            var curPos = this.node.getWorldPosition();
            this.node.setWorldPosition(curPos.x + speed * this._sprintDir.x, curPos.y + speed * this._sprintDir.y, 0);
            this._sprintDis -= speed;

            if (this._sprintDis <= 0) {
              this._sprintDis = 0;
              this.unschedule(callback);
              if (ingCb) this.unschedule(ingCb);
              this._canMove = true;
              prefab.destroy();
              if (endCb) endCb();
            }
          };

          if (ingCb) {
            ingCb(); //先执行一遍

            this.schedule(ingCb, ingGap);
          }

          this.schedule(callback, interval);
        } //====================boss碰撞逻辑==========================


        onBeginContact(selfCollider, otherCollider) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return; // console.log(otherCollider);

          switch (otherCollider.tag) {
            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).hero:
              this._isTouchHero = true;
              this.bossAttackHeroByCollider(selfCollider, otherCollider);
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).friend1Skill1:
              this._isTouchFriend1Skill1 = true;
              this.friendAttackBossByFriend1Skill1(selfCollider, otherCollider);
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).darts:
              this.heroAttackBossByDarts();
              break;

            default:
              break;
          }
        }

        onEndContact(selfCollider, otherCollider) {
          switch (otherCollider.tag) {
            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).hero:
              this._isTouchHero = false;
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).spell:
              this._isTouchSpell = false;
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).friend1Skill1:
              this._isTouchFriend1Skill1 = false;
              break;

            default:
              break;
          }
        } // boss攻击玩家


        bossAttackHeroByCollider(self, other) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._isTouchHero) return;
          var damage = this._normalDamage;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "createBossDamageTex", -damage);
          var t = 1;
          this.scheduleOnce(() => {
            this.bossAttackHeroByCollider(self, other);
          }, t);
        } //被宝宝技能击中


        friendAttackBossByFriend1Skill1(self, other) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._isTouchFriend1Skill1) return;
          var damage = 5;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createDamageTex", self.node, damage, {
            x: 0,
            y: 20
          });
          this.updateBlood(-damage, false);
          this.collectToTarget(self, other);
          this.scheduleOnce(() => {
            this.friendAttackBossByFriend1Skill1(self, other);
          }, (_crd && attackInterval === void 0 ? (_reportPossibleCrUseOfattackInterval({
            error: Error()
          }), attackInterval) : attackInterval).f1s1);
        }
        /**
         * @description: boss被飞镖攻击
         */


        heroAttackBossByDarts() {
          console.log("boss被飞镖攻击 还没写"); //
        } //更新血量


        updateBlood(changeValue, isRepelled) {
          if (isRepelled === void 0) {
            isRepelled = false;
          }

          this._curBlood += changeValue;

          if (this._curBlood <= 0) {
            this.unscheduleAllCallbacks();
            this.node.destroy();
            (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll = true;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("passStage");
          } else {
            if (isRepelled) this.bossIsRepelled(); // this.bossIsRepelled();
          }

          if (this._curBlood > this._maxBlood) this._curBlood = this._maxBlood;
          this._bloodSprite.fillRange = this._curBlood / this._maxBlood;
        } // 获取当前血量百分比


        getBloodPercentage() {
          return this._curBlood / this._maxBlood;
        } //boss被击退


        bossIsRepelled() {
          // this.flashWhite();//闪白  被击退的特效
          var hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          var mwp = this.node.getWorldPosition();
          mwp.subtract3f(hwp.x, hwp.y, hwp.z).normalize();
          var backDis = 20;
          var pos = this.node.getPosition();
          this.node.setPosition(pos.x + backDis * mwp.x, pos.y + backDis * mwp.y, 0);
        } //向目标聚合


        collectToTarget(self, target) {
          if (!target) return; //target被销毁等

          var twp = target.node.getWorldPosition();
          var mwp = self.node.getWorldPosition();
          twp.subtract3f(mwp.x, mwp.y, mwp.z).normalize();
          var collectDis = 20;
          var pos = this.node.getPosition();
          this.node.setPosition(pos.x + collectDis * twp.x, pos.y + collectDis * twp.y, 0);
        } // 获取距离玩家的距离


        getDistanceToHero() {
          var targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          var curPos = this.node.getWorldPosition();
          var x = targetPos.x - curPos.x;
          var y = targetPos.y - curPos.y;
          return Math.sqrt(x * x + y * y);
        }

        pauseAnim() {
          // this.node.getChildByName("sprite").getComponent(Animation).pause();
          this._sprite.getComponent(Animation).pause();
        }

        resumeAnim() {
          // this.node.getChildByName("sprite").getComponent(Animation).resume();
          this._sprite.getComponent(Animation).resume();
        } // 获取朝向hero的方向


        getDirToHero() {
          var nwp = this.node.getWorldPosition();
          var hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          var x = hwp.x - nwp.x;
          var y = hwp.y - nwp.y;
          var dir = {
            x: 0,
            y: 0
          };
          var offset = {
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
            var rate = Math.abs(offset.x / offset.y);

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
        } //父类提供的子弹 --->atom 
        //发射1发子弹 scale 为子弹碰撞体缩放


        usingNormalParticleOneShot(scale) {
          if (scale === void 0) {
            scale = 1;
          }

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var np = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).getFromPool("normalParticle");
          var flyDir = this.getDirToHero();
          np.parent = find("Canvas/bulletLayer");
          var wp = this.node.getWorldPosition();
          np.active = true;
          np.setWorldPosition(wp);
          np.getComponent("EnemySkill").init(this._skillData.normalParticle, flyDir, scale);
        } // 发射三发子弹


        usingNormalParticleTriShot(posArr, scale) {
          if (scale === void 0) {
            scale = 1;
          }

          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;

          for (var pos of posArr) {
            var np = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("normalParticle");
            var flyDir = this.getDirToHero();
            np.parent = find("Canvas/bulletLayer");
            var wp = this.node.getWorldPosition();
            np.active = true;
            np.setWorldPosition(wp.x + pos[0], wp.y + pos[1], wp.z);
            np.getComponent("EnemySkill").init(this._skillData.normalParticle, flyDir, scale);
          }
        } //粒子三角 向hero方向释放三角形粒子集


        usingNormalParticleTriangle(scale) {
          if (scale === void 0) {
            scale = 1;
          }

          var row = 5;
          var triPosArr = (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).getTriangleRow(row);
          var queue = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();

          for (var i = triPosArr.length - 1; i >= 0; i--) {
            var initPosArr = triPosArr[i];
            var arr = [];

            for (var j = 0; j < initPosArr.length; j++) {
              var initPos = initPosArr[j];
              var dp = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("normalParticle");
              dp.active = true;
              dp.setPosition(0, 0, 0);
              dp.initPos = initPos;
              arr.push(dp);
            }

            queue.enqueue(arr);
          }

          var fun = () => {
            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stopAll) return;
            var arr = queue.dequeue();

            if (arr) {
              var layer = find("Canvas/bulletLayer");

              for (var _dp of arr) {
                _dp.parent = layer; // 转换成可使用的方向

                var flyDir = this.getDirToHero();
                var wp = this.node.getWorldPosition();
                wp.x += _dp.initPos[0];
                wp.y += _dp.initPos[1];

                _dp.setWorldPosition(wp);

                _dp.getComponent("EnemySkill").init(this._skillData.normalParticle, flyDir, scale);
              }
            } else this.unschedule(fun);
          };

          this.schedule(fun, 0.2);
        } //粒子圈 向周边发射一圈粒子 向周边飞行


        usingNormalParticleCircle(total, r, scale) {
          if (scale === void 0) {
            scale = 1;
          }

          var initPosArr = (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).getCirclePos(r, total);

          for (var i = 0; i < total; i++) {
            var dp = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("normalParticle");
            dp.active = true;
            dp.setPosition(0, 0, 0);
            var layer = find("Canvas/bulletLayer");
            dp.parent = layer;
            var initPos = initPosArr[i];
            var dir = {
              x: initPos[0] / r,
              y: initPos[1] / r
            }; // 转换成可使用的方向

            var flyDir = new Vec2(dir.x, dir.y);
            var wp = this.node.getWorldPosition();
            wp.x += initPos[0];
            wp.y += initPos[1];
            dp.setWorldPosition(wp);
            dp.getComponent("EnemySkill").init(this._skillData.normalParticle, flyDir, scale);
          }
        } //向指定方向两端发射子弹 


        usingNormalParticleWithDoubleDir(curDir) {
          console.log("向指定方向两端发射子弹");
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          var dirs = this.getVerticalDirToCurDir(curDir);

          for (var dir of dirs) {
            var np = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).getFromPool("normalParticle");
            np.parent = find("Canvas/bulletLayer");
            var wp = this.node.getWorldPosition();
            np.active = true;
            np.setWorldPosition(wp);
            np.getComponent("EnemySkill").init(this._skillData.normalParticle, dir, 0.2);
          }
        } // 获取当前方向上的垂直方向


        getVerticalDirToCurDir(curDir) {
          var a = Math.abs(curDir.x / curDir.y);

          if (a > 1) {
            return [{
              x: curDir.y / curDir.x,
              y: -1
            }, {
              x: -curDir.y / curDir.x,
              y: 1
            }];
          } else {
            return [{
              x: 1,
              y: -curDir.x / curDir.y
            }, {
              x: -1,
              y: curDir.x / curDir.y
            }];
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ff55239abd9e40b8f88e10b36cabe2c036232076.js.map