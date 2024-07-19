System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Sprite, Material, BoxCollider2D, UITransform, Size, Contact2DType, em, groupIndex, tagData, plm, Simulator, Monster, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, MonsterLeader;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../../global/EventManager", _context.meta, extras);
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

  function _reportPossibleCrUseOfSimulator(extras) {
    _reporterNs.report("Simulator", "../../RVO/Simulator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "./Monster", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Sprite = _cc.Sprite;
      Material = _cc.Material;
      BoxCollider2D = _cc.BoxCollider2D;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      groupIndex = _unresolved_3.groupIndex;
      tagData = _unresolved_3.tagData;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }, function (_unresolved_5) {
      Simulator = _unresolved_5.default;
    }, function (_unresolved_6) {
      Monster = _unresolved_6.Monster;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f31darYW99DxIBZWKvRFDZr", "MonsterLeader", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation', 'Sprite', 'Material', 'instantiate', 'find', 'Vec3', 'tween', 'BoxCollider2D', 'Prefab', 'UITransform', 'Size', 'Contact2DType']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonsterLeader", MonsterLeader = (_dec = ccclass('MonsterLeader'), _dec2 = property(Material), _dec3 = property(Material), _dec4 = property(Material), _dec5 = property(Material), _dec6 = property([Material]), _dec(_class = (_class2 = class MonsterLeader extends (_crd && Monster === void 0 ? (_reportPossibleCrUseOfMonster({
        error: Error()
      }), Monster) : Monster) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "leaderMaterial0", _descriptor, this);

          _initializerDefineProperty(this, "leaderMaterial1", _descriptor2, this);

          _initializerDefineProperty(this, "leaderMaterial2", _descriptor3, this);

          _initializerDefineProperty(this, "leaderMaterial3", _descriptor4, this);

          _initializerDefineProperty(this, "leaderMaterial", _descriptor5, this);

          this._strengthType = void 0;
        }

        //强化类型

        /**
         * @description:创建精英怪 0为强化血量 1为强化速度型 2为强化伤害 3 为霸体 
         * @param {*} id
         */
        createLeader(id, type) {
          this._type = "leader"; //需要对数据进行修改 进行深拷贝

          var data = JSON.parse(JSON.stringify((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getMonsterDataById", id)));
          this.setDefaultMaterialByType(type);

          switch (type) {
            case 0:
              this.createLeaderStrengthBlood(data);
              break;

            case 1:
              this.createLeaderStrengthMoveSpeed(data);
              break;

            case 2:
              this.createLeaderStrengthDamage(data);
              break;

            case 3:
              this.createLeaderSuperArmor(data);
              break;

            default:
              throw "未知的类型：" + type;
          }
        }
        /**
         * @description: 通过精英怪类型设置默认材质 用于区分不同的精英怪
         * @param {number} type 
         * @type {0} 红色描边 血量增加 
         * @type {1} 浅蓝色填充 移速增加 
         * @type {2} 填充 伤害增加 
         * @type {3} 黄色填充 霸体 
         */


        setDefaultMaterialByType(type) {
          var material = this.leaderMaterial[type]; // let material = this["leaderMaterial"+type];

          if (!material) throw "type is " + type + " material is error";
          this._defaultMaterial = material;
          var spriteComp = this.node.getComponent(Sprite);
          spriteComp.material = this._defaultMaterial;
          console.log("setDefaultMaterialByType", this.node);
        } //创建强化血量的精英怪


        createLeaderStrengthBlood(data) {
          this._strengthType = "blood";
          console.log("创建强化血量精英怪");
          data.maxBlood *= 20;
          data.damage *= 3;
          data.moveSpeed *= 1.5;
          this.node.setScale(2, 2); // console.log("createLeaderStrengthBlood",data);

          this.init(data);
        } //创建强化移速精英怪


        createLeaderStrengthMoveSpeed(data) {
          this._strengthType = "moveSpeed";
          console.log("创建强化移速精英怪");
          data.maxBlood *= 5;
          data.damage *= 2;
          data.moveSpeed *= 3;
          this.node.setScale(1.2, 1.2); // console.log("createLeaderStrengthBlood",data);

          this.init(data);
        } // 创建强化伤害精英怪


        createLeaderStrengthDamage(data) {
          this._strengthType = "damage";
          console.log("创建强化伤害精英怪");
          data.maxBlood *= 10;
          data.damage *= 5;
          data.moveSpeed *= 1.5;
          this.node.setScale(1.5, 1.5); // console.log("createLeaderStrengthBlood",data);

          this.init(data);
        } // 创建霸体精英怪


        createLeaderSuperArmor(data) {
          this._strengthType = "superArmor";
          console.log("创建霸体精英怪");
          this._isSuperArmor = true;
          data.maxBlood *= 10;
          data.damage *= 2;
          data.moveSpeed *= 2;
          this.node.setScale(1.5, 1.5); // console.log("createLeaderStrengthBlood",data);

          this.init(data);
        }

        init(data) {
          this._curMonsterData = data;
          this.initMonsterMoveAnim(data); // this._maxBlood = data.maxBlood;

          this._maxBlood = data.maxBlood * 2;
          this._curBlood = data.maxBlood; //所有的精英怪 攻击间隔 减半。 如果每种精英怪的需求不一样  则需要在init之前的 创建数据阶段改变内容

          this._attackInterval *= 0.5;
          this.initCollider(); //添加代理

          this._sid = (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.addAgent(this.node.getWorldPosition());
        }

        initCollider() {
          var collider = this.getComponent(BoxCollider2D);
          if (!collider) collider = this.node.addComponent(BoxCollider2D);
          var UIT = this.node.getComponent(UITransform); // let monsterSize = new Size(UIT.contentSize.x, UIT.contentSize.y);
          //碰撞体积缩小到1/4
          // let monsterSize = new Size(UIT.contentSize.x, UIT.contentSize.y);

          var monsterSize = new Size(UIT.contentSize.x / 2, UIT.contentSize.y / 2); // let monsterSize = new Size(UIT.contentSize.x*2/3, UIT.contentSize.y*2/3);

          collider.tag = (_crd && tagData === void 0 ? (_reportPossibleCrUseOftagData({
            error: Error()
          }), tagData) : tagData).monster;
          collider.size = monsterSize;
          collider.group = (_crd && groupIndex === void 0 ? (_reportPossibleCrUseOfgroupIndex({
            error: Error()
          }), groupIndex) : groupIndex).enemy;
          collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        update(deltaTime) {
          this.move();
          this.updateSpriteDirection();
        } //精英怪 无视碰撞


        dynamicAvoidCollider() {
          return null;
        } //=======================重新方法=======================


        monsterDied() {
          //节点已经被清除 无法找到父节点 血条更新处理
          if (this.node.parent) {
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("monsterLeader", this.node);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("updateLeaderCurTotal", -1);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("showKillLeaderReward", this._strengthType); // 加经验

            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroControlFun", "updateExpProgress", 100); // em.dispatch("usingHeroControlFun", "updateExpProgress", 200);

            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("updateKillCountLabel", 1);
          }

          ;
          this.afterMonsterDied();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leaderMaterial0", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leaderMaterial1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "leaderMaterial2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "leaderMaterial3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "leaderMaterial", [_dec6], {
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
//# sourceMappingURL=f9fcd67eb5c65da57cb9c355edf2cb437d318729.js.map