System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, Size, Contact2DType, UITransform, CircleCollider2D, Animation, find, em, ggd, groupIndex, tagData, plm, _dec, _class, _crd, ccclass, Weapon;

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

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../../global/PoolManager", _context.meta, extras);
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
      UITransform = _cc.UITransform;
      CircleCollider2D = _cc.CircleCollider2D;
      Animation = _cc.Animation;
      find = _cc.find;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
      groupIndex = _unresolved_3.groupIndex;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cafd4Zb9TdIspSioAwoZg46", "Weapon", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-08-19 11:46:40
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-14 11:41:43
       * @FilePath: \to-be-immortal\assets\script\hero\weapon\Weapon.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'Size', 'Contact2DType', 'Collider2D', 'Color', 'UITransform', 'physics', 'CircleCollider2D', 'PolygonCollider2D', 'game', 'Animation', 'Intersection2D', 'find']);

      ({
        ccclass
      } = _decorator);

      _export("Weapon", Weapon = (_dec = ccclass('Weapon'), _dec(_class = class Weapon extends Component {
        constructor() {
          super(...arguments);
          //待初始化属性
          this._curLevel = void 0;
          this._curData = void 0;
          this._weaponId = void 0;
          this._weaponName = void 0;
          this._damage = void 0;
          this._damageTimes = 0;
          this._duration = void 0;
          this._moveSpeed = void 0;
          // _total: number;
          this._maxLevel = void 0;
          this._canAttackTimes = void 0;
          this._backDis = void 0;
          this._attackInterval = void 0;
          this._flyDir = void 0;
          //自带属性
          this._touchingArr = [];
          //碰撞中的碰撞体
          this._hasAttackedEnemies = [];
        }

        //碰撞过的碰撞体
        // 初始化武器信息
        initWeaponInfo(curLv, weaponData, flyDir) {
          if (flyDir === void 0) {
            flyDir = {
              x: 1,
              y: 1
            };
          }

          // console.log("初始化" + weaponData.name+this.node.uuid);
          this._curLevel = curLv;
          this._curData = weaponData;
          this._weaponId = weaponData.id;
          this._weaponName = weaponData.name;
          this._maxLevel = weaponData.maxLevel;
          this.initCurLvInfo();
          this._flyDir = flyDir;
          this.clearCacheData();
        } // 初始化当前等级信息


        initCurLvInfo() {
          var index = this._curLevel - 1;
          this._damage = this._curData.damage[index];
          this._damageTimes = this._curData.damageTimes.length > 0 ? this._curData.damageTimes[index] : 0;
          this._duration = this._curData.duration.length > 0 ? this._curData.duration[index] : Infinity;
          this._moveSpeed = this._curData.moveSpeed.length > 0 ? this._curData.moveSpeed[index] : 0;
          this._canAttackTimes = this._curData.canAttackTimes.length > 0 ? this._curData.canAttackTimes[index] : Infinity;
          this._backDis = this._curData.backDis.length > 0 ? this._curData.backDis[index] : 0;
          this._attackInterval = this._curData.attackInterval.length > 0 ? this._curData.attackInterval[index] : 0.5; //默认攻击间隔0.5s

          if (this._duration !== 0) {
            var bonusDuration = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletDuration");
            this._duration += bonusDuration;
          }

          if (this._moveSpeed !== 0) {
            var bonusMS = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletMoveSpeed");
            this._moveSpeed += bonusMS;
          }

          if (this._canAttackTimes !== 0) {
            var bonusATs = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroControlProperty", "_bonusBulletAttackTimes");
            this._canAttackTimes += bonusATs;
          }
        } // 清理缓存数据


        clearCacheData() {
          // console.log("清理缓存数据"+this.node.uuid);
          this._touchingArr.length = 0;
          this._hasAttackedEnemies.length = 0;
        }

        onDisable() {
          this.unscheduleAllCallbacks();
        } // 初始化box碰撞器


        initBoxCollider(tag, changeSize) {
          if (changeSize === void 0) {
            changeSize = {
              x: 0,
              y: 0
            };
          }

          if (!tag) throw "tag is" + tag; // let collider = this.node.addComponent(BoxCollider2D);

          var collider = this.node.getComponent(BoxCollider2D);
          if (!collider) collider = this.node.addComponent(BoxCollider2D);
          var UIT = this.node.getComponent(UITransform);
          var weaponSize = new Size(UIT.contentSize.x + changeSize.x, UIT.contentSize.y + changeSize.y);
          collider.tag = tag;
          collider.size = weaponSize;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).heroWeapon; // console.log("collider", collider);

          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        } // 初始化circle碰撞器


        initCircleCollider(tag, changeR) {
          if (changeR === void 0) {
            changeR = 0;
          }

          if (!tag) throw "tag is" + tag;
          var collider = this.node.getComponent(CircleCollider2D);
          if (!collider) collider = this.node.addComponent(CircleCollider2D);
          var UIT = this.node.getComponent(UITransform);
          collider.tag = tag;
          collider.radius = UIT.contentSize.x / 2 + changeR;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).heroWeapon;
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        update(dt) {
          this.weaponMove(dt);
          this.weaponDuration(dt);
        }

        weaponMove(deltaTime) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          if (!this._flyDir) return;
          if (this._moveSpeed == 0 || this._duration == Infinity) return;
          var dis = deltaTime * this._moveSpeed; // let dis = deltaTime*(this._moveSpeed+bonusMS);

          var moveX = this._flyDir.x * dis;
          var moveY = this._flyDir.y * dis;
          this.node.setPosition(this.node.getPosition().x + moveX, this.node.getPosition().y + moveY, 0);
        }

        weaponDuration(deltaTime) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._duration -= deltaTime;
          if (this._duration <= 0) this.recoveryToPool("weaponDuration");
        } // 通过飞行方向修改子弹旋转方向 没有方向的子弹暂不处理


        changeBulletRotationByFlyDir() {
          if (this._flyDir.x == 0 && this._flyDir.y == 0) return; //无方向 暂不处理

          if (this._flyDir.x == 0) {
            //没有x方向
            if (this._flyDir.y > 0) this.node.angle = -90;else this.node.angle = 90;
            return;
          }

          ;

          if (this._flyDir.y == 0) {
            //没有y方向
            if (this._flyDir.x > 0) this.node.angle = 180;else this.node.angle = 0;
            return;
          }

          ;
          var bevelLen = Math.sqrt(this._flyDir.x * this._flyDir.x + this._flyDir.y * this._flyDir.y); // let sin = Math.sin(this._flyDir.x / bevelLen);

          var sin = Math.sin(Math.abs(this._flyDir.y) / bevelLen);
          var asin = Math.asin(sin);
          var angle = asin * 90; // console.log("angle", angle);

          if (this._flyDir.y > 0) {
            //向上飞行
            if (this._flyDir.x > 0) this.node.angle = 180 + angle;else this.node.angle = 360 - angle;
          } else {
            if (this._flyDir.x > 0) this.node.angle = 180 - angle;else this.node.angle = angle;
          }
        }

        changeDirByAimDir(offsetAngle) {
          if (offsetAngle === void 0) {
            offsetAngle = 0;
          }

          var dir = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_curAimDir");
          if (dir.x == 0 && dir.y == 0) return; //无方向 暂不处理

          if (dir.x == 0) {
            //没有x方向
            if (dir.y > 0) this.node.angle = -90 + offsetAngle;else this.node.angle = 90 + offsetAngle;
            return;
          }

          ;

          if (dir.y == 0) {
            //没有y方向
            if (dir.x > 0) this.node.angle = 180 + offsetAngle;else this.node.angle = offsetAngle;
            return;
          }

          ;
          var bevelLen = Math.sqrt(dir.x * dir.x + dir.y * dir.y); // let sin = Math.sin(dir.x / bevelLen);

          var sin = Math.abs(dir.y) / bevelLen;
          var asin = Math.asin(sin);
          var angle = asin / Math.PI * 180;

          if (dir.y > 0) {
            //向上飞行
            if (dir.x > 0) this.node.angle = 180 + angle + offsetAngle;else this.node.angle = 360 - angle + offsetAngle;
          } else {
            if (dir.x > 0) this.node.angle = 180 - angle + offsetAngle;else this.node.angle = angle + offsetAngle;
          }
        }

        changeDirByMoveDir(offsetAngle) {
          if (offsetAngle === void 0) {
            offsetAngle = 0;
          }

          var dir = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_curDirection");
          if (dir.x == 0 && dir.y == 0) return; //无方向 暂不处理

          if (dir.x == 0) {
            //没有x方向
            if (dir.y > 0) this.node.angle = -90 + offsetAngle;else this.node.angle = 90 + offsetAngle;
            return;
          }

          ;

          if (dir.y == 0) {
            //没有y方向
            if (dir.x > 0) this.node.angle = 180 + offsetAngle;else this.node.angle = offsetAngle;
            return;
          }

          ;
          var bevelLen = Math.sqrt(dir.x * dir.x + dir.y * dir.y);
          var sin = Math.abs(dir.y) / bevelLen;
          var asin = Math.asin(sin);
          var angle = asin / Math.PI * 180; // console.log("angle", angle);

          if (dir.y > 0) {
            //向上飞行
            if (dir.x > 0) this.node.angle = 180 + angle + offsetAngle;else this.node.angle = 360 - angle + offsetAngle;
          } else {
            if (dir.x > 0) this.node.angle = 180 - angle + offsetAngle;else this.node.angle = angle + offsetAngle;
          }
        } // ==============================武器碰撞==============================


        onBeginContact(self, other) {
          switch (other.tag) {
            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).wall:
              this.colliderWall(other);
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).monster:
              this._touchingArr.push(other);

              this.colliderMonster(other);
              this.scheduleOnce(() => {
                this.removeFromTouchArr(other);
              }, this._attackInterval);
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).boss:
              this._touchingArr.push(other); // console.log(this.node.uuid+"添加node uuid is " + other.node.uuid);


              this.colliderBoss(other);
              this.scheduleOnce(() => {
                this.removeFromTouchArr(other);
              }, this._attackInterval);
              break;

            default:
              break;
          }
        }

        onEndContact(self, other) {
          switch (other.tag) {
            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).monster:
              this.colliderEnemyEnd(other);
              break;

            case (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
              error: Error()
            }), tagData) : tagData).boss:
              this.colliderEnemyEnd(other);
              break;

            default:
              break;
          }
        } //父类提供接口 子类实现


        colliderWall(other) {
          console.log(this._weaponName + "撞墙");
        }

        colliderMonster(other) {
          if (this.isStopRun(other)) return;
          this.updateMonsterBlood(other); // this._canAttackTimes--;
          // if (this._canAttackTimes <= 0) this.recoveryToPool();

          this.updateCanAttackTimes();
        } //攻击怪物和boss的区别 在于击退 穿透等属性 和一些other的内部回调 暂时没写


        colliderBoss(other) {
          if (this.isStopRun(other)) return;
          this.updateBossBlood(other);
          this.updateCanAttackTimes();
        }

        colliderEnemyEnd(other) {
          this.removeFromTouchArr(other); // let index = this._touchingArr.indexOf(other);
          // if (index > -1) {
          //     this._touchingArr.splice(index, 1)[0];
          //     // console.log(this.node.uuid+"移除node uuid is " + other.node.uuid);
          // } else {
          //     // this._touchingArr.forEach(node => {
          //     //     console.log("node.uuid is "+node.uuid);
          //     // });
          //     // console.warn(this.node.uuid+"移除node uuid is " + other.node.uuid+" error");
          //     // console.log("other.node", other.node);
          // }
        } //从touchArr中移除


        removeFromTouchArr(other) {
          var index = this._touchingArr.indexOf(other);

          if (index > -1) {
            this._touchingArr[index] = this._touchingArr[this._touchingArr.length - 1];
            --this._touchingArr.length;
            if (!other.node || other.node.parent !== find("Canvas/enemyLayer") && other.node.parent !== find("Canvas/bossLayer")) return; //不在enemyLayer  已经放入对象池 不在做判断

            var box = this.getComponent(BoxCollider2D);
            var circle = this.getComponent(CircleCollider2D);
            var self = box ? box : circle;
            var isCollide;
            if (box) isCollide = this.rectIsIntersectsRect(box.worldAABB, other.worldAABB);else isCollide = this.rectIsIntersectsRect(circle.worldAABB, other.worldAABB);

            if (isCollide) {
              this.onBeginContact(self, other);
            }
          }
        } //是否正在碰撞中


        isTouching(other) {
          return this._touchingArr.indexOf(other) > -1;
        } // 是否已经产生过碰撞伤害 通过uuid记录 


        isHasAttacked(uuid) {
          return this._hasAttackedEnemies.indexOf(uuid) > -1;
        }

        updateMonsterBlood(other) {
          var damage = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "getCurDamage") * (1 + this._damageTimes) + this._damage;

          damage = damage | 0; // let damage = em.dispatch("getHeroControlProperty","_damage") + this._damage;

          var isCriticalHit = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "isCriticalHit");

          if (isCriticalHit) {
            damage *= (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "getCurCriticalHitDamage");
            damage = damage | 0;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("createDamageTex", other.node, damage, {
              x: 0,
              y: 20
            }, "criticalHit");
          } else (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createDamageTex", other.node, damage, {
            x: 0,
            y: 20
          });

          var bonusBackDis = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroControlProperty", "_bonusBackDis");
          other.node.getComponent("Monster").updateBlood(-damage, this._backDis + bonusBackDis);
        }

        updateBossBlood(other) {
          //boss节点名 必须和boss 名 相同
          var damage = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "getCurDamage") + this._damage;

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createDamageTex", other.node, damage, {
            x: 0,
            y: 20
          });
          var script = other.node.parent.components[0];

          if (script) {
            script.updateBlood(-damage);
          } else {
            throw "script is not init";
          }
        }

        isStopRun(other) {
          // return ggd.stopAll && !this.isTouching(other);
          return (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll || !this.isTouching(other);
        } // 回收进对象池


        recoveryToPool(type) {
          if (type === void 0) {
            type = "unknown";
          }

          // console.log("回调类型："+type);
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).putToPool(this._weaponName, this.node); // plm.putToPool(this._weaponName, this.node, true);
        } // 刷新穿透次数


        updateCanAttackTimes() {
          this._canAttackTimes--;
          if (this._canAttackTimes <= 0) this.recoveryToPool("updateCanAttackTimes");
        }

        addToAnimManger() {
          var anim = this.node.getComponent(Animation);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameAnimManagerFun", "addAnimToList", anim);
        }

        removeAnimFromList() {
          var anim = this.node.getComponent(Animation);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingGameAnimManagerFun", "removeAnimFromList", anim);
        } //判断矩形是否相交


        rectIsIntersectsRect(rect1, rect2) {
          return rect1.intersects(rect2);
        } // 检查是否超过最远距离


        isExceedMaxDistance(dis, interval) {
          var fun = () => {
            var flag = this.recoveryToPoolWhenWeaponIsDistant(dis);

            if (flag) {
              this.unschedule(fun);
              this.recoveryToPool("isExceedMaxDistance");
            }
          };

          this.schedule(fun, interval);
        }

        recoveryToPoolWhenWeaponIsDistant(dis) {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return false;
          if (this.getDistanceToHero() > dis) return true;
        }

        getDistanceToHero() {
          var targetPos = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTargetWorldPos");
          var curPos = this.node.getWorldPosition();
          return this.getTwoPointDistance(targetPos, curPos);
        } //获取两点的距离


        getTwoPointDistance(pos1, pos2) {
          var x = pos1.x - pos2.x;
          var y = pos1.y - pos2.y;
          return Math.sqrt(x * x + y * y);
        } //=====================法器专用=====================
        //初始化法器碰撞器 区别在于 法器碰撞器大小和偏移预先设置好 无需变化 只需要设置碰撞回调等...


        initEquBoxCollider(tag) {
          var collider = this.node.getComponent(BoxCollider2D);
          if (!collider) throw "未初始化法器碰撞器";
          collider.tag = tag;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).heroWeapon; // console.log("collider", collider);

          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        } //初始化装备额外属性


        initEquDataByExtraProperties(data) {
          if (data.qData.effect.indexOf(1) > -1) this._damage = 0;

          if (data.qData.effect.indexOf(3) > -1) {
            this._damage *= 0.7;
            this._damageTimes *= 0.8;
          }

          if (data.qData.effect.indexOf(1002) > -1) this._damageTimes *= 0.1;
          if (data.qData.effect.indexOf(1003) > -1) this._damageTimes *= 0.3;
          if (data.qData.effect.indexOf(1004) > -1) this._damageTimes *= 0.5;
          if (data.qData.effect.indexOf(1008) > -1) this.node.setScale(1.5, 1.5, 2);
          if (data.qData.effect.indexOf(1009) > -1) this.node.setScale(2, 2, 2);
          if (data.qData.effect.indexOf(1010) > -1) this._canAttackTimes++;
          if (data.qData.effect.indexOf(1005) > -1) this.initEquBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).destroyWeapon);else this.initEquBoxCollider((_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).sword);
          if (data.qData.effect.indexOf(5001) > -1) this._duration *= 2;
          if (data.qData.effect.indexOf(5002) > -1) this._duration = Infinity;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6163656037db35d5c2bc5dc0866bb98d2e45ebe2.js.map