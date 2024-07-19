System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, JsonAsset, Label, find, Prefab, instantiate, monsterData, em, ggd, glf, Queue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, StageManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmonsterData(extras) {
    _reporterNs.report("monsterData", "../enemy/monster/MonsterData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../global/globalFun", _context.meta, extras);
  }

  function _reportPossibleCrUseOfQueue(extras) {
    _reporterNs.report("Queue", "../global/Queue", _context.meta, extras);
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
      Label = _cc.Label;
      find = _cc.find;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      monsterData = _unresolved_2.monsterData;
    }, function (_unresolved_3) {
      em = _unresolved_3.em;
    }, function (_unresolved_4) {
      ggd = _unresolved_4.ggd;
    }, function (_unresolved_5) {
      glf = _unresolved_5.glf;
    }, function (_unresolved_6) {
      Queue = _unresolved_6.Queue;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e520BxXQJPQrigNDESbUJs", "StageManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'JsonAsset', 'random', 'Label', 'find', 'director', 'Prefab', 'instantiate', 'native']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StageManager", StageManager = (_dec = ccclass('StageManager'), _dec2 = property(JsonAsset), _dec3 = property(JsonAsset), _dec4 = property(JsonAsset), _dec5 = property(JsonAsset), _dec6 = property([Prefab]), _dec(_class = (_class2 = class StageManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "stageConfigJson", _descriptor, this);

          _initializerDefineProperty(this, "leaderAndBossConfigJson", _descriptor2, this);

          _initializerDefineProperty(this, "rewardConfigJson", _descriptor3, this);

          _initializerDefineProperty(this, "monsterArmyConfigJson", _descriptor4, this);

          _initializerDefineProperty(this, "bossPrefabs", _descriptor5, this);

          this._curStageName = void 0;
          this._curStageTime = 0;
          //用于记录stage时长
          this._curStageMaxTime = void 0;
          //当前关卡最大时长
          this._killCount = 0;
          //用于记录当前关卡击杀
          this._createCount = 0;
          //创建总数 以创建队列数计数
          this._curData = void 0;
          this._stageConfig = void 0;
          this._bossConfig = void 0;
          this._rewardConfig = void 0;
          this._stageQueue = void 0;
          this._curLeaderTotal = 0;
          //当前精英怪总数
          this._killLeaderTotal = 0;
          //击杀精英怪总数
          this._timeLabel = void 0;
          //关卡计时
          this._killCountLabel = void 0;
          //击杀计数
          //怪物潮配置
          this._monsterArmyConfig = null;
          this._rewardData = {
            string: "击杀奖励",
            isPass: false,
            isDouble: false
          };
          this._hasShowAds = false;
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("endStage");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("passStage");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("updateKillCountLabel");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("updateLeaderCurTotal");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getCurStageTime");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getDoubleReward");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("closeGetDoubleRewardAd");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("geCurStageKillInfo");
          this.unscheduleAllCallbacks();
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("endStage", this.endStage.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("passStage", this.passStage.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("updateKillCountLabel", this.updateKillCountLabel.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("updateLeaderCurTotal", this.updateLeaderCurTotal.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getCurStageTime", this.getCurStageTime.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getDoubleReward", this.getDoubleReward.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("closeGetDoubleRewardAd", this.closeGetDoubleRewardAd.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("geCurStageKillInfo", this.geCurStageKillInfo.bind(this)); // this._curStageName = "stage" + 1;

          this._curStageName = "stage" + (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curStage;
          this._stageConfig = this.stageConfigJson.json;
          this._bossConfig = this.leaderAndBossConfigJson.json[(_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curStage - 1];
          this._monsterArmyConfig = this.monsterArmyConfigJson.json[this._curStageName];
          console.log("this._monsterArmyConfig", this._monsterArmyConfig);
          console.log("_bossConfig", this._bossConfig);
          this._rewardConfig = this.rewardConfigJson.json;
          this._stageQueue = new (_crd && Queue === void 0 ? (_reportPossibleCrUseOfQueue({
            error: Error()
          }), Queue) : Queue)();
          this.initStage(this._stageConfig[this._curStageName]);
          console.log(this._curStageName + ":", this._stageConfig[this._curStageName]);
          this._timeLabel = find("Canvas/heroLayer/GameUILayer/expPar/curTime").getComponent(Label);
          this._killCountLabel = find("Canvas/heroLayer/GameUILayer/expPar/curKillCount").getComponent(Label);
        }

        start() {
          this.startStage(); //开始关卡
          // this.justCreateBoss();//boss模式 用于
        }

        justCreateBoss() {
          this.createBoss();
        } //初始化关卡 


        initStage(stage) {
          this._curStageMaxTime = stage[stage.length - 1].time;

          for (let i = 0; i < stage.length; i++) {
            let data = stage[i];

            this._stageQueue.enqueue(data);
          }

          ;
          this._curData = this._stageQueue.dequeue();
        } // 开始关卡


        startStage() {
          if (this._curData == null) throw new Error("_curData is null");
          console.log("data", this._curData);
          this._killCount = 0;
          this.updateKillCountLabel(0);
          this.updateTimeLabel();
          this.startStageTimer();
          this.schedule(this.stageQueueTaskCallBack, this._curData.timeGap); //手动配置的敌群

          if (this._monsterArmyConfig) this.schedule(this.startManyMonsterTimer, 1);
        } //开启关卡计时器


        startStageTimer() {
          this.unschedule(this.stageTimerCallback); // this._curStageTime = 235;

          this._curStageTime = 0;
          this.schedule(this.stageTimerCallback, 1);
        } // 开启敌群计时器


        startManyMonsterTimer() {
          let max = this._curData.max > (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
            error: Error()
          }), monsterData) : monsterData).monsterMaxTotal ? (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
            error: Error()
          }), monsterData) : monsterData).monsterMaxTotal : this._curData.max;
          let curTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getMonsterTotal");
          if (curTotal >= max) return;

          if (this._monsterArmyConfig) {
            let index = this._monsterArmyConfig.time.indexOf(this._curStageTime);

            if (index > -1) {
              // if (config.queue[index] >= 11001) em.dispatch("playAnimMassMonsterComing");
              let key = (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
                error: Error()
              }), monsterData) : monsterData).queueMappingList[this._monsterArmyConfig.queue[index]];
              let queue = (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
                error: Error()
              }), monsterData) : monsterData).queue[key]; // console.log("key",key);
              // console.log("queue",queue);

              if (!queue) throw "queue is error";

              let monsterID = this._curData.id[Math.random() * this._curData.id.length | 0];

              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("createMonsterByOutsideData", monsterID, queue, {
                x: 0,
                y: 0
              });
            }
          }
        } //关卡计时器回调


        stageTimerCallback() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;
          this._curStageTime++;
          this.updateTimeLabel();
        } // 关卡队列任务回调


        stageQueueTaskCallBack() {
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stopAll) return;

          if (this._curStageTime > this._curData.time) {
            console.log("进入下一个阶段");
            this._curData = this._stageQueue.dequeue();
            this.unschedule(this.stageQueueTaskCallBack);
            if (this._curData) this.schedule(this.stageQueueTaskCallBack, this._curData.timeGap);else {
              if (this._bossConfig.bossId < 0) this.passStage();else {
                console.log("停止创建小怪 开始创建boss");
                this.stopCreateMonster();
                this.createBoss();
              }
            }
          } else {
            // console.log("运行当前环境");
            let max = this._curData.max > (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
              error: Error()
            }), monsterData) : monsterData).monsterMaxTotal ? (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
              error: Error()
            }), monsterData) : monsterData).monsterMaxTotal : this._curData.max; // let max = this._curData.max > 300 ? 300 : this._curData.max;

            let curTotal = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getMonsterTotal"); // let max = this._curData.max;

            if (curTotal < max) {
              //小于当前最大数生成
              // if (curTotal < 500) {//小于当前最大数生成
              // if (curTotal < 800) {//小于当前最大数生成
              this._createCount++;

              if (this._createCount > this._bossConfig.startCount && this._createCount % this._bossConfig.mod == 0 && this._curLeaderTotal < this._bossConfig.maxTotal) {
                let monsterID = this._curData.id[Math.random() * this._curData.id.length | 0];

                let type = this._bossConfig.type[Math.random() * this._bossConfig.type.length | 0];

                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("createMonsterLeader", monsterID, type);
                this._curLeaderTotal++;
              } else {
                this.createMonsterByCurData(); // this.createFast();
                // this.createFast();
                // this.createFast();
                // this.createFast();
                // this.createFast();
                // this.createFast();
                // // 创建精英怪
                // let monsterID = this._curData.id[Math.random() * this._curData.id.length | 0];
                // let type = this._bossConfig.type[Math.random() * this._bossConfig.type.length | 0];
                // em.dispatch("createMonsterLeader", monsterID, type);
                //如果当前怪物总数小于最大值创建数数的1/3 则继续创建
                // curTotal = em.dispatch("getMonsterTotal");
                // if (curTotal < max / 3) this.createFast();
              }
            }
          }
        } // 快速创建


        createFast() {
          this.createMonsterByCurData();
          this.createMonsterByCurData();
          this.createMonsterByCurData();
          this.createMonsterByCurData();
          this.createMonsterByCurData();
        }

        distributeReward(string, isPass = false) {
          // console.log("击杀怪物总数", this._killCount);
          // console.log("击杀精英怪总数", this._killLeaderTotal);
          // console.log("根据击杀 发放奖励");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "pauseGame");
          this._rewardData = {
            string: string,
            isPass: isPass,
            isDouble: false
          };
          this.startDistributeReward();
        } // distributeReward(string: string, isPass: boolean = false) {
        //     // console.log("击杀怪物总数", this._killCount);
        //     // console.log("击杀精英怪总数", this._killLeaderTotal);
        //     // console.log("根据击杀 发放奖励");
        //     em.dispatch("usingHeroControlFun", "pauseGame");
        //     this._rewardData = {
        //         string: string,
        //         isPass: isPass,
        //         isDouble: false,
        //     };
        //     if (ggd.isOpenAd && !this._hasShowAds) {
        //         this.showDoubleRewardAd();
        //         this._hasShowAds = true;
        //     } else this.startDistributeReward();
        // }


        showDoubleRewardAd() {
          console.log("展示双倍奖励广告界面");
          find("Canvas/heroLayer/GameUILayer/doubleRewardAd").active = true;
        }

        onBtnPlayAds() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curAdRewardType = "getDoubleReward";
          (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).playAd();
          find("Canvas/heroLayer/GameUILayer/doubleRewardAd").active = false; // console.log("播放广告");
          // this.scheduleOnce(()=>{
          //     this.getDoubleReward();
          // },3);
        }

        getDoubleReward() {
          this._rewardData.isDouble = true;
          this.startDistributeReward();
        }

        closeGetDoubleRewardAd() {
          find("Canvas/heroLayer/GameUILayer/doubleRewardAd").active = false;
          this.startDistributeReward();
        }

        startDistributeReward() {
          let string = this._rewardData.string;
          let isPass = this._rewardData.isPass;
          let isDouble = this._rewardData.isDouble;
          let passReward = this.getPassRewardContent(isPass);

          if (isDouble) {
            for (const reward of passReward) {
              reward.total *= 2;
            }

            console.log("双倍奖励");
          } else {
            console.log("单倍奖励");
          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("showPassReward", passReward, string, this._rewardData.isDouble); // 添加奖励到背包

          passReward.forEach(data => {
            if (data.total > 0) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", data.id, data.total);
          }); //更新关卡进度

          if (isPass && (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curStage + 1 > (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).stageProgress) {
            (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stageProgress = (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).curStage + 1;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("savingGlobalDataToTempData");
          }
        } //通过当前数据创建怪物


        createMonsterByCurData() {
          let index = this.getIndexByRatio(this._curData.ratio);
          let key = (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
            error: Error()
          }), monsterData) : monsterData).queueMappingList[this._curData.queue[index]];
          if (key == "circleR1000T20") return;
          if (key == "heartR500T40") return;
          let queue = (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
            error: Error()
          }), monsterData) : monsterData).queue[key];
          let dir = (_crd && monsterData === void 0 ? (_reportPossibleCrUseOfmonsterData({
            error: Error()
          }), monsterData) : monsterData).queueDir[key];
          if (!queue) throw new Error("找不到映射队列:" + key);
          if (!dir && dir !== null) throw new Error("找不到映射方向:" + key); //可以改成 指定方向 后期调整

          let monsterID = this._curData.id[Math.random() * this._curData.id.length | 0];

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("createMonsterByOutsideData", monsterID, queue, dir);
        } //通过比率获取下标


        getIndexByRatio(ratioArr) {
          let ratio = Math.random();

          for (let i = 0; i < ratioArr.length; i++) {
            let value = ratioArr[i];
            if (value >= ratio) return i;else continue;
          }

          ;
          throw new Error("value均小于1，ratioArr 配置错误");
        } //通关


        passStage() {
          this.stopCreateMonster();
          this.distributeReward("通 关 奖 励", true);
        } //关闭关卡 游戏中途失败


        endStage() {
          console.log("关闭关卡");
          this.stopCreateMonster();
          this.removeBoss();
          this.distributeReward("击 杀 奖 励");
        } // 停止小怪生成


        stopCreateMonster() {
          this.unschedule(this.stageQueueTaskCallBack);
          this.unschedule(this.stageTimerCallback);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("removeAllMonsters");
        } // 创建boss


        createBoss() {
          let prefab = this.bossPrefabs[this._bossConfig.bossId - 1];

          if (prefab) {
            let boss = instantiate(prefab); // boss.parent = find("Canvas/enemyLayer");

            boss.parent = find("Canvas/bossLayer");
            let wp = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getHeroWorldPos");
            boss.setWorldPosition(wp.x, wp.y + 1000, wp.z);
          } else throw "prefab is undefined";
        }

        removeBoss() {
          let boss = find("Canvas/bossLayer").children[0];

          if (boss) {
            boss.removeFromParent();
            boss.destroy();
          }

          ;
        } //刷新计时信息


        updateTimeLabel() {
          // console.log("this._curStageTime", this._curStageTime);
          let time = " 时 间 ： " + this._curStageTime + " ";
          let progress = "（进度" + Math.floor(this.getCurStageProgress() * 100) + "%）";
          this._timeLabel.string = time + progress;
        } //刷新击杀信息


        updateKillCountLabel(num) {
          this._killCount += num;
          this._killCountLabel.string = " 击 杀 ： " + this._killCount + " ";
        } //刷新精英怪当前总数 如果 num为负数 说明精英怪被击杀 根据精英怪被击杀数量 刷新精英怪出现的最大数量


        updateLeaderCurTotal(num) {
          this._curLeaderTotal += num;

          if (num < 0) {
            this._killLeaderTotal += Math.abs(num);
          }
        }
        /**
         * @description: 获取通关奖励
         * @param {*} isPass 是否通关 未通关只能获取击杀奖励
         */


        getPassRewardContent(isPass) {
          let config = this._rewardConfig[this._curStageName];
          let rewardArr = []; //击杀奖励

          config.monsterReward.forEach((id, index) => {
            let ratio = config.monsterRewardRatio[index];
            let total = 0;

            for (let i = 0; i < this._killCount; i++) {
              let random = Math.random();
              if (random <= ratio) total++;
            }

            ;

            if (total > 0) {
              let reward = {
                id: id,
                total: total
              };
              rewardArr.push(reward);
            }
          });
          let lingshi = {
            id: 3,
            total: Math.ceil(this._killCount * (config.lingshi.min + Math.random() * (config.lingshi.max - config.lingshi.min)))
          };
          rewardArr.push(lingshi);
          config.leaderReward.forEach((id, index) => {
            let ratio = config.leaderRewardRatio[index];
            let total = 0;

            for (let i = 0; i < this._killLeaderTotal; i++) {
              let random = Math.random();
              if (random <= ratio) total++;
            }

            ;

            if (total > 0) {
              let reward = {
                id: id,
                total: total
              };
              rewardArr.push(reward);
            }
          });

          if (isPass) {
            config.passReward.forEach((id, index) => {
              let ratio = config.passRewardRatio[index];
              if (Math.random() < ratio) rewardArr.push({
                id: id,
                total: 1
              });
            });
          }

          console.log("rewardArr", rewardArr);
          return rewardArr;
        } //过去当前关卡时间 


        getCurStageTime() {
          return this._curStageTime;
        } //获取当前游戏进度


        getCurStageProgress() {
          let progress = this._curStageTime / this._curStageMaxTime;
          if (progress > 1) progress = 1;
          return progress;
        } // 获取击杀信息描述


        geCurStageKillInfo() {
          let string;
          if (this._rewardData.isPass) string = "boss击杀：1\n";else string = "boss击杀：0\n";
          string += "击杀精英怪总数：" + this._killLeaderTotal + "\n";
          string += "击杀怪物总数：" + this._killCount + "\n";
          return string;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "stageConfigJson", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leaderAndBossConfigJson", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rewardConfigJson", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "monsterArmyConfigJson", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bossPrefabs", [_dec6], {
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
//# sourceMappingURL=d3c861eb08a3f4afd8659f4e234423ea9ff3f41e.js.map