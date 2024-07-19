System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, Size, find, Sprite, UITransform, Vec3, Rect, Vec2, Prefab, instantiate, BoxCollider2D, Material, em, ggd, groupIndex, tagData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, MapLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgroupIndex(extras) {
    _reporterNs.report("groupIndex", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftagData(extras) {
    _reporterNs.report("tagData", "../global/globalData", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      Size = _cc.Size;
      find = _cc.find;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      Rect = _cc.Rect;
      Vec2 = _cc.Vec2;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      BoxCollider2D = _cc.BoxCollider2D;
      Material = _cc.Material;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
      groupIndex = _unresolved_3.groupIndex;
      tagData = _unresolved_3.tagData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "809f5M75tREzYR8m406FnB9", "MapLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-08-25 14:17:48
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-24 15:19:15
       * @FilePath: \to-be-immortal\assets\script\layers\MapLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'Size', 'find', 'Sprite', 'UITransform', 'Vec3', 'Rect', 'Vec2', 'math', 'CacheMode', 'Prefab', 'instantiate', 'BoxCollider2D', 'Collider2D', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MapLayer", MapLayer = (_dec = ccclass('MapLayer'), _dec2 = property(SpriteFrame), _dec3 = property(Prefab), _dec4 = property([SpriteFrame]), _dec5 = property([SpriteFrame]), _dec6 = property(Material), _dec7 = property(Material), _dec(_class = (_class2 = class MapLayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "defaultBgSF", _descriptor, this);

          _initializerDefineProperty(this, "obstaclePrefab", _descriptor2, this);

          _initializerDefineProperty(this, "bgSFs", _descriptor3, this);

          _initializerDefineProperty(this, "obsSFs", _descriptor4, this);

          _initializerDefineProperty(this, "frozenMaterial", _descriptor5, this);

          _initializerDefineProperty(this, "normalMaterial", _descriptor6, this);

          this.mapList = [];
          this._mapSize = void 0;
          // _changeOffset = 700;//手机高度的一半
          this._changeOffset = 1000;
          //手机高度的一半
          this._obsColliderArr = [];
          //存放障碍物
          this._frozenCountdown = 0;
          //冻结倒计时
          this._frozenTotalTime = 0;
          //冻结总时长
          this._frozenSlowTimes = 0;
        }

        //冰冻减速效果
        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingMapLayerFun");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getMapLayerProperty");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingMapLayerFun", this.usingMapLayerFun.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getMapLayerProperty", this.getMapLayerProperty.bind(this));
          this.mapList.push(find("bg1", this.node));
          this.mapList.push(find("bg2", this.node));
          this.mapList.push(find("bg3", this.node));
          this.mapList.push(find("bg4", this.node));
        }

        start() {
          this.initBg(); // this.initObstacles();
        }

        initBg() {
          if (!this.defaultBgSF) throw "default bg is null";
          let scale = 5; //3

          this._mapSize = new Size(this.defaultBgSF.originalSize.x * scale, this.defaultBgSF.originalSize.y * scale); // console.log("this._mapSize", this._mapSize);

          this.switchMapBg();
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          this.mapList[0].setWorldPosition(hwp);
          this.mapList[1].setWorldPosition(hwp.x + this._mapSize.x, hwp.y, hwp.z);
          this.mapList[2].setWorldPosition(hwp.x, hwp.y + this._mapSize.y, hwp.z);
          this.mapList[3].setWorldPosition(hwp.x + this._mapSize.x, hwp.y + this._mapSize.y, hwp.z);
        }

        switchMapBg() {
          let index = Math.ceil((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curStage / 10) - 1;

          for (let i = 0; i < this.mapList.length; i++) {
            let node = this.mapList[i];
            node.getComponent(UITransform).setContentSize(this._mapSize); // node.getComponent(Sprite).spriteFrame = this.defaultBgSF;

            node.getComponent(Sprite).spriteFrame = this.bgSFs[index];
          }
        } // 初始化障碍物


        initObstacles() {
          let total = 10;
          this.mapList.forEach(map => {
            let list = [[2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [4, 2], [4, 3], [4, 6], [4, 7], [5, 2], [5, 3], [5, 6], [5, 7], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7]]; // let list = [
            //     [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7],
            //     [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7],
            //     [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7],
            //     [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7],
            //     [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7],
            //     [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7]
            // ];

            for (let i = 0; i < total; i++) {
              let pos = list.splice(Math.random() * list.length | 0, 1)[0];
              this.addObstacle(map, pos);
            }

            ;
          });
        }

        addObstacle(map, pos) {
          let obs = instantiate(this.obstaclePrefab);
          let offset = new Size(-this._mapSize.width / 2, -this._mapSize.height / 2);
          obs.parent = map;
          obs.setPosition(pos[0] * 200 + offset.width, pos[1] * 200 + offset.height);
          let index = Math.ceil((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curStage / 10) - 1;
          obs.getComponent(Sprite).spriteFrame = this.obsSFs[index];
          let collider = obs.addComponent(BoxCollider2D);
          let UIT = obs.getComponent(UITransform); // let obsSize = new Size(UIT.contentSize.x, UIT.contentSize.y);
          // let obsSize = new Size(UIT.contentSize.x*3/4, UIT.contentSize.y*3/4);

          let obsSize = new Size(UIT.contentSize.x * 1 / 2, UIT.contentSize.y * 1 / 2);
          collider.tag = (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).obstacle;
          collider.size = obsSize;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).obstacle;

          this._obsColliderArr.push(collider);
        } // =================外部调用=================


        usingMapLayerFun(string, ...param) {
          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        }

        getMapLayerProperty(string) {
          if (this.hasOwnProperty(string)) return this[string];else throw "hero control 中不存在属性：" + string;
        } // 获取所有障碍物


        getAllObs() {
          return this._obsColliderArr;
        } //冻结地图


        frozenMap(t, slowTimes) {
          console.log("frozenMap");
          this._frozenCountdown = t;
          this._frozenTotalTime = t;
          this._frozenSlowTimes = slowTimes;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "isOpenSnowEffect", true);
          this.unschedule(this.frozenCountdownRun);
          this.frozenMaterial.setProperty("frozenProgress", 0); //还原材质颜色

          this.schedule(this.frozenCountdownRun, 1);

          for (const map of this.mapList) {
            map.getComponent(Sprite).material = this.frozenMaterial;
          }
        } // 冻结倒计时运行


        frozenCountdownRun() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._frozenCountdown--;
          let progress = 1 - this._frozenCountdown / this._frozenTotalTime;
          this.frozenMaterial.setProperty("frozenProgress", progress);
          console.log("this._frozenCountdown", this._frozenCountdown);

          if (this._frozenCountdown <= 0) {
            console.log("冻结结束");
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "isOpenSnowEffect", false);
            this._frozenCountdown = 0;
            this.unschedule(this.frozenCountdownRun);
            this.recoveryMapNormalState();
          }
        } //恢复普通状态


        recoveryMapNormalState() {
          for (const map of this.mapList) {
            map.getComponent(Sprite).material = this.normalMaterial;
          }

          ;
        }

        updateMap(dir) {
          //获取当前所在地图
          let curInSideMap = this.getCurPosMap();
          let isInside = this.heroIsNearbyMapEdge(); // if (isInside) console.log("hero is inside rect ");

          if (isInside) return;else {
            // console.log("hero is outside rect ");
            // 找到距离目前位置最远的切图
            let farthestMap = this.getFarthestMap(); //判断最远地图需要初始化的位置

            let mapInitDir = this.getFarthestMapInitPos(); //初始化最远地图地图最新位置

            let curMwp = curInSideMap.getWorldPosition();
            let initPos = new Vec3(curMwp.x + this._mapSize.x * mapInitDir.x, curMwp.y + this._mapSize.y * mapInitDir.y, curMwp.z);
            farthestMap.setWorldPosition(initPos); // console.log("=====================================");
          }
        } // 获取当前所在地图 


        getCurPosMap() {
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");

          for (let i = 0; i < this.mapList.length; i++) {
            let map = this.mapList[i];
            if (this.thePointIsInsideMap(map, hwp)) return map;else continue;
          }

          ;
          throw "hero is outside map.";
        } //判断点是否在小地图中 指定地图


        thePointIsInsideMap(map, p) {
          let wp = map.getWorldPosition();
          let rect = new Rect(wp.x - this._mapSize.x / 2, wp.y - this._mapSize.y / 2, this._mapSize.x, this._mapSize.y);
          return rect.contains(p);
        } // 判断点是否在任何一个小地图中


        thePointIsInsideAnyMap(p) {
          return this.mapList.some(map => {
            return this.thePointIsInsideMap(map, p);
          });
        }
        /**
         * @description: 判断玩家是否在地图边缘 上下左右及其斜角8个方向有一个不在地图中 则处于地图边缘
         */


        heroIsNearbyMapEdge() {
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          let pArr = this.getThePointNearbyPoint(hwp);
          return !pArr.some(p => {
            return !this.mapList.some(map => {
              return this.thePointIsInsideMap(map, p);
            });
          });
        }
        /**
         * @description: 获取距离玩家当前位置距离最远的地图
         * @return {Node} 
         */


        getFarthestMap() {
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          let farthestMap = this.mapList[0];
          let m1wp = this.mapList[0].getWorldPosition();
          let maxDis = (m1wp.x - hwp.x) * (m1wp.x - hwp.x) + (m1wp.y - hwp.y) * (m1wp.y - hwp.y);

          for (let i = 1; i < this.mapList.length; i++) {
            let map = this.mapList[i];
            let mwp = map.getWorldPosition();
            let dis = (mwp.x - hwp.x) * (mwp.x - hwp.x) + (mwp.y - hwp.y) * (mwp.y - hwp.y);

            if (dis > maxDis) {
              maxDis = dis;
              farthestMap = map;
            }

            ;
          }

          ;
          return farthestMap;
        }

        getFarthestMapInitPos() {
          let hwp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getHeroWorldPos");
          let pArr = this.getThePointNearbyPoint(hwp);
          let outPoint;

          for (let i = 0; i < pArr.length; i++) {
            let p = pArr[i];

            if (!this.thePointIsInsideAnyMap(p)) {
              outPoint = p; // console.log(i);

              break;
            }
          }

          ;
          let dir = outPoint.subtract(hwp); // console.log("getFarthestMapInitPos", dir);

          return new Vec2(dir.x / Math.abs(dir.x), dir.y / Math.abs(dir.y));
        } // 获取某点附近的点（8个）


        getThePointNearbyPoint(p) {
          return [new Vec2(p.x + this._changeOffset, p.y), //R -->0
          new Vec2(p.x, p.y + this._changeOffset), //U  -->1
          new Vec2(p.x - this._changeOffset, p.y), //L -->2
          new Vec2(p.x, p.y - this._changeOffset), //D -->3
          new Vec2(p.x + this._changeOffset, p.y + this._changeOffset), //UR -->4
          new Vec2(p.x - this._changeOffset, p.y + this._changeOffset), //UL -->5
          new Vec2(p.x - this._changeOffset, p.y - this._changeOffset), //DL -->6
          new Vec2(p.x + this._changeOffset, p.y - this._changeOffset) //DR -->7
          ];
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "defaultBgSF", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "obstaclePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bgSFs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "obsSFs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "frozenMaterial", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "normalMaterial", [_dec7], {
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
//# sourceMappingURL=00b3d93422224ddedb71e1a0ed6aea6990eeaed8.js.map