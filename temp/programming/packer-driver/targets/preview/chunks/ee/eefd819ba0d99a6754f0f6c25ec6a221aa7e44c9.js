System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, director, em, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, HeroBaseProperty;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
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
      JsonAsset = _cc.JsonAsset;
      director = _cc.director;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18e13h041hCKrr/q+F1r+Zb", "HeroBaseProperty", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'JsonAsset', 'game', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HeroBaseProperty", HeroBaseProperty = (_dec = ccclass('HeroBaseProperty'), _dec2 = property(JsonAsset), _dec3 = property(JsonAsset), _dec4 = property(JsonAsset), _dec5 = property(JsonAsset), _dec6 = property(JsonAsset), _dec7 = property(JsonAsset), _dec8 = property(JsonAsset), _dec(_class = (_class2 = class HeroBaseProperty extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "heroPropertyDataJson", _descriptor, this);

          _initializerDefineProperty(this, "trainingLvListJson", _descriptor2, this);

          _initializerDefineProperty(this, "skillBookListJson", _descriptor3, this);

          _initializerDefineProperty(this, "bossDataListJson", _descriptor4, this);

          _initializerDefineProperty(this, "equQualityListJson", _descriptor5, this);

          _initializerDefineProperty(this, "equEffectListJson", _descriptor6, this);

          _initializerDefineProperty(this, "equLevelListJsonArr", _descriptor7, this);

          this._heroData = void 0;
          this._trainingLvList = void 0;
          this._skillBookList = {};
          this._bossDataList = {};
          this._equQualityList = {};
          this._equLevelList = {};
          this._equEffectList = {};
          this._percentageBloodLv = void 0;
          this._percentageDamageLv = void 0;
          this._moveSpeedLv = void 0;
          this._percentageMoveSpeedLv = void 0;
          this._criticalHitRateLv = void 0;
          this._bonusBulletTotalLv = void 0;
          this._bonusBulletMoveSpeedLv = void 0;
          this._bonusBulletAttackTimesLv = void 0;
          this._recoveryHealthyLv = void 0;
          this._expAdditionLv = void 0;
          this._divineStoneAdditionLv = void 0;
          //玩家当前装备
          this._heroCurEqu = {
            "法器": "",
            "防具": "",
            "鞋": ""
          };
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingHeroBasePropertyFun");
        }

        onLoad() {
          this._heroData = this.heroPropertyDataJson.json[0];
          this._trainingLvList = this.trainingLvListJson.json;
          this.initSkillBookData();
          this.initBossConfigList();
          this.initEquData();
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingHeroBasePropertyFun", this.usingHeroBasePropertyFun.bind(this));
          director.addPersistRootNode(this.node); //背包物品在各个场景皆可用到 设置为常驻节点
        }

        start() {
          this.initHeroCurEqu(); // this.getBasePropertyValueByEqu();
        } // 初始化功法秘籍数据


        initSkillBookData() {
          var all = this.skillBookListJson.json;
          all.forEach(element => {
            // let id = element.id;
            var name = element.name;
            var name2 = element.name2; // this._skillBookList[id] = element;

            this._skillBookList[name] = element;
            this._skillBookList[name2] = element;
          });
        } // 初始化boss配置列表


        initBossConfigList() {
          var all = this.bossDataListJson.json;
          all.forEach(element => {
            var id = element.id;
            this._bossDataList[id] = element;
          }); // console.log("_bossDataList",this._bossDataList);
        } // 初始化装备数据


        initEquData() {
          var all1 = this.equQualityListJson.json;

          var all2 = (() => {
            var arr = [];
            this.equLevelListJsonArr.forEach(list => {
              arr = arr.concat(list.json);
            });
            return arr;
          })();

          var all3 = this.equEffectListJson.json; // console.log("all1", all1);
          // console.log("all2", all2);
          // console.log("all3", all3);

          all1.forEach(element => {
            //初始化品级
            var name = element.name;
            this._equQualityList[name] = element;
          });
          all2.forEach(element => {
            //初始化等级
            var name = element.name;
            this._equLevelList[name] = element;
          });
          all3.forEach(element => {
            //初始化词条
            var id = element.id;
            this._equEffectList[id] = element;
          });
        } // 初始化英雄当前装备


        initHeroCurEqu() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "curEquData");

          if (data) {
            for (var key in data) {
              if (Object.prototype.hasOwnProperty.call(data, key)) {
                var element = data[key];
                if (this._heroCurEqu.hasOwnProperty(key)) this._heroCurEqu[key] = element;
              }
            }
          }
        }

        onEnable() {
          this.initBasePropertyLv();
        }

        initBasePropertyLv() {
          var config = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "HeroBasePropertyLvList");

          if (null == config) {
            //数据为空时 起用默认值
            config = {
              percentageBloodLv: 1,
              percentageDamageLv: 1,
              percentageMoveSpeedLv: 1,
              moveSpeedLv: 1,
              criticalHitRateLv: 1,
              bonusBulletTotalLv: 1,
              bonusBulletMoveSpeedLv: 1,
              bonusBulletAttackTimesLv: 1,
              recoveryHealthyLv: 1,
              expAdditionLv: 1,
              divineStoneAdditionLv: 10
            };
          }

          this._percentageBloodLv = config.percentageBloodLv;
          this._percentageDamageLv = config.percentageDamageLv;
          this._percentageMoveSpeedLv = config.percentageMoveSpeedLv;
          this._moveSpeedLv = config.moveSpeedLv;
          this._criticalHitRateLv = config.criticalHitRateLv;
          this._bonusBulletTotalLv = config.bonusBulletTotalLv;
          this._bonusBulletMoveSpeedLv = config.bonusBulletMoveSpeedLv;
          this._bonusBulletAttackTimesLv = config.bonusBulletAttackTimesLv;
          this._recoveryHealthyLv = config.recoveryHealthyLv;
          this._expAdditionLv = config.expAdditionLv;
          this._divineStoneAdditionLv = config.divineStoneAdditionLv;
        }

        savingLvData() {
          // 基础属性等级清单
          var list = {
            percentageBloodLv: this._percentageBloodLv,
            percentageDamageLv: this._percentageDamageLv,
            moveSpeedLv: this._moveSpeedLv,
            percentageMoveSpeedLv: this._percentageMoveSpeedLv,
            criticalHitRateLv: this._criticalHitRateLv,
            bonusBulletTotalLv: this._bonusBulletTotalLv,
            bonusBulletMoveSpeedLv: this._bonusBulletMoveSpeedLv,
            bonusBulletAttackTimesLv: this._bonusBulletAttackTimesLv,
            recoveryHealthyLv: this._recoveryHealthyLv,
            expAdditionLv: this._expAdditionLv,
            divineStoneAdditionLv: this._divineStoneAdditionLv
          };
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "HeroBasePropertyLvList", list);
        } // ==============外部调用==============


        usingHeroBasePropertyFun(string) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        } //获取玩家当前某属性的值


        getHeroBaseProperty(property) {
          if (!this._heroData.hasOwnProperty(property)) throw "不存在属性" + property;
          var lv = this["_" + property + "Lv"];
          if (!lv) return this._heroData[property][0];else return this._heroData[property][lv - 1];
        } // 获取玩家某属性值的升级详情


        getHeroBasePropertyLvDetail(property) {
          if (!this._heroData.hasOwnProperty(property)) throw "不存在属性" + property;
          return this._heroData[property];
        } // 获取玩家某属性的当前等级


        getHeroBasePropertyCurLv(property) {
          if (!this._heroData.hasOwnProperty(property)) throw "不存在属性" + property; // console.log("property",property,this["_" + property + "Lv"]);

          return this["_" + property + "Lv"];
        } //升级基础属性值


        upgradeBaseProperty(property) {
          if (!this._heroData.hasOwnProperty(property)) throw "不存在属性" + property;
          this["_" + property + "Lv"]++;
          this.savingLvData(); //
        } //获取修为数据


        getTrainingData(key) {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "training");

          if (null !== data) {
            return this._trainingLvList[data.curLv][key]; // if (data.curLv !== 0) return this._trainingLvList[data.curLv][key];
            // if (data.curLv !== 0) return this._trainingLvList[data.curLv - 1][key];
            // else return 0;
          } else {
            return this._trainingLvList[0][key];
          }
        } //===================功法秘籍相关===================
        // 获取所有和功法秘籍相关的数据


        getAllAboutSkillBook() {
          return this.skillBookListJson.json;
        }

        getSkillBookDataByIdOrName(id_name) {
          if (this._skillBookList.hasOwnProperty(id_name)) return this._skillBookList[id_name];else throw id_name + " of _skillBookList is null";
        } //===================装备相关===================
        // 获取完整的装备信息


        getAllEquData() {
          return this._heroCurEqu;
        } // 获取指定部位装备名称


        getEquNameByType(type) {
          if (!this._heroCurEqu.hasOwnProperty(type)) throw "当前装备类型 " + type + " 不存在";
          return this._heroCurEqu[type];
        } //通过装备名称 获取装备属性


        getEquDataByName(nameString) {
          //获得品级
          var qIndex = nameString.indexOf("（"); // if (qIndex < 0) throw "name string is error,cur name string is " + nameString;

          if (qIndex < 0) return null;
          var qKey = nameString.slice(0, qIndex);
          var lKey = nameString.slice(2);
          var qValue = this._equQualityList[qKey];
          var lValue = this._equLevelList[lKey]; // console.log("qKey",qKey);
          // console.log("lKey",lKey);
          // console.log("qValue",qValue);
          // console.log("lValue",lValue);

          if (!qValue || !lValue) {
            console.log("qKey", qKey);
            console.log("lKey", lKey);
            console.log("qValue", qValue);
            console.log("lValue", lValue);
            throw "q or l value is null";
          }

          return {
            qData: qValue,
            lData: lValue
          };
        } // 切换装备


        switchEqu(type, equString) {
          if (!this._heroCurEqu.hasOwnProperty(type)) throw "当前装备类型 " + type + " 不存在";
          this._heroCurEqu[type] = equString;
          this.savingEquData();
        } // 记录装备数据


        savingEquData() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "curEquData", this._heroCurEqu);
        } // 获取当前玩家的装备 


        getCurHeroEqu(type) {
          if (this._heroCurEqu.hasOwnProperty(type)) return this._heroCurEqu[type];else throw "type is error,cur type is " + type;
        } // 获取玩家当前使用法器数据


        getCurHeroUsingWeaponData() {
          var key = this.getCurHeroEqu("法器");
          return this.getEquDataByName(key);
        } // 获取当前玩家的法器类型


        getCurHeroUsingWeaponType() {
          var nameString = this._heroCurEqu.法器;
          if (!nameString) return "";
          var qIndex = nameString.indexOf("（");
          return nameString.slice(2, qIndex);
        } // 获取装备词条信息


        getEquEffectData(id) {
          if (!this._equEffectList.hasOwnProperty(id)) throw "词条" + id + "不存在";
          return this._equEffectList[id];
        } //获取当前玩家通过装备获取的属性值


        getBasePropertyValueByEqu() {
          var BPV = {
            effectList: [],
            //基础属性值
            baseDamage: 0,
            moveSpeed: 0,
            blood: 0,
            CHR: 0,
            CHD: 0,
            //词条属性
            bonusCHD: 0,
            //额外暴伤
            bonusBulletTotal: 0,
            //额外法宝数量
            bonusBulletAttackTimes: 0,
            //额外穿透
            bonusMoveSpeed: 0,
            bonusBackDis: 0,
            //击退距离
            slowResistance: 0,
            //减速抗性
            damageReduce: 0,
            //减伤效果
            //debuff
            slowPer: 0 //减速百分比

          };
          console.log("this._heroCurEqu", this._heroCurEqu);

          for (var key in this._heroCurEqu) {
            var equName = this._heroCurEqu[key];
            if (!equName) continue;
            var equData = this.getEquDataByName(equName);
            var lData = equData.lData;
            var effects = equData.qData.effect;

            for (var effect of effects) {
              if (BPV.effectList.indexOf(effect) < 0) BPV.effectList.push(effect);
            }

            console.log("equData", equData); //添加基础属性

            for (var key2 in lData) {
              if (BPV.hasOwnProperty(key2)) {
                var value = this.getValidValueByEffects(lData[key2], key2, effects);
                BPV[key2] += value;
              }

              ;
            }

            ; //添加效果属性

            this.addEffectsValue(effects, BPV);
          }

          ;
          console.log("BPV", BPV);
          return BPV;
        }

        addEffectsValue(effects, BPV) {
          for (var id of effects) {
            switch (id) {
              case 5:
                BPV.slowPer += 0.1;
                break;

              case 6:
                BPV.slowPer += 0.2;
                break;

              case 7:
                BPV.slowPer += 0.3;
                break;

              case 8:
                BPV.slowPer += 0.4;
                break;

              case 2001:
                BPV.bonusCHD += 0.1;
                break;

              case 2002:
                BPV.bonusCHD += 0.2;
                break;

              case 2003:
                BPV.bonusCHD += 0.3;
                break;

              case 2004:
                BPV.bonusBulletAttackTimes += 1;
                break;

              case 2005:
                BPV.bonusBulletAttackTimes += 2;
                break;

              case 2006:
                BPV.bonusBulletAttackTimes += 3;
                break;

              case 2007:
                BPV.slowResistance += 0.5;
                break;

              case 2008:
                BPV.slowResistance += 0.75;
                break;

              case 2009:
                BPV.slowResistance += 1;
                break;

              case 2010:
                BPV.damageReduce += 0.1;
                break;

              case 2011:
                BPV.damageReduce += 0.2;
                break;

              case 2012:
                BPV.damageReduce += 0.3;
                break;

              case 2013:
                BPV.bonusCHD += 0.1;
                break;

              case 2014:
                BPV.bonusCHD += 0.2;
                break;

              case 2015:
                BPV.bonusCHD += 0.3;
                break;

              case 2016:
                BPV.bonusMoveSpeed += 10;
                break;

              case 2017:
                BPV.bonusMoveSpeed += 20;
                break;

              case 2018:
                BPV.bonusMoveSpeed += 30;
                break;

              case 2019:
                BPV.bonusMoveSpeed += 40;
                break;

              case 2020:
                BPV.bonusMoveSpeed += 50;
                break;

              case 2021:
                BPV.bonusBackDis += 50;
                break;

              case 2022:
                BPV.bonusBackDis += 100;
                break;

              case 5007:
                BPV.bonusBulletTotal += 1;
                break;

              case 5008:
                BPV.bonusBulletTotal += 2;
                break;

              case 5009:
                BPV.bonusBulletTotal += 3;
                break;

              default:
                break;
            }
          }
        } //通过词条获取有效值


        getValidValueByEffects(value, key, effects) {
          if (effects.indexOf(1) > -1 && key == "baseDamage") return 0; //破烂不堪

          if (effects.indexOf(3) > -1 && key == "baseDamage") return value * 0.8; //力不从心

          if (effects.indexOf(4) > -1) {
            //衣衫褴褛
            if (key == "blood") return value * 0.5;
            if (key == "CHR") return 0;
            if (key == "baseDamage") return 0;
          }

          if (effects.indexOf(1012) > -1) return value * 1.1;
          if (effects.indexOf(1013) > -1) return value * 1.3;
          if (effects.indexOf(1014) > -1) return value * 1.5;
          return value;
        } //===================boss配置相关===============


        getBossDataById(id) {
          if (this._bossDataList.hasOwnProperty(id)) return this._bossDataList[id];else throw id + " of _bossDataList is null";
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "heroPropertyDataJson", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "trainingLvListJson", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skillBookListJson", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bossDataListJson", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "equQualityListJson", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "equEffectListJson", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "equLevelListJsonArr", [_dec8], {
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
//# sourceMappingURL=eefd819ba0d99a6754f0f6c25ec6a221aa7e44c9.js.map