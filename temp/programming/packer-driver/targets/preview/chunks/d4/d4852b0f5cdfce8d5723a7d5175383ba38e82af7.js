System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, em, _dec, _class, _crd, ccclass, property, GameReward;

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
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da9fbvdxjZG9pV0eUIh8xTd", "GameReward", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator); // 各种奖励的处理逻辑 每日签到 七日签到 每日视频

      _export("GameReward", GameReward = (_dec = ccclass('GameReward'), _dec(_class = class GameReward extends Component {
        constructor() {
          super(...arguments);
          this._rewardList = {
            today: 99,
            lastTodaySignIn: 999,
            sevenDaySignIn: {
              lastSignIn: 99,
              continueDays: 0
            },
            todayEquVideoShowTimes: 0,
            versionReward1_0_3_2: false
          };
          this._maxTodayEquVideoShowTimes = 2;
        }

        //每日最大播放次数
        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("usingGameRewardFun", this.usingGameRewardFun.bind(this));
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("usingGameRewardFun");
        }

        start() {
          this.initRewardList();
        } // 初始化 游戏奖励列表 读取记录列表，并用最新的列表去覆盖。


        initRewardList() {
          var data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "gameRewardList");

          if (data) {
            for (var key in data) {
              if (Object.prototype.hasOwnProperty.call(data, key) && this._rewardList.hasOwnProperty(key)) {
                this._rewardList[key] = data[key];
              }
            }
          } //判定是否要重置今日日期 重置后可再次签到


          var today = new Date().getDay();

          if (this._rewardList.today !== today || this._rewardList.today == 99) {
            this._rewardList.today = today;
            this._rewardList.todayEquVideoShowTimes = 0;
          }

          this.versionUpdateReward();
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "gameRewardList", this._rewardList);
        } // 版本更新补偿奖励发放


        versionUpdateReward() {
          // return;
          //版本1.0.3.2的更新补偿奖励
          if (!this._rewardList.versionReward1_0_3_2) {
            this._rewardList.versionReward1_0_3_2 = true;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", "破旧装备箱", 5);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("showGets", {
              "破旧装备箱": 5
            });
          }
        } //使用GameReward 方法


        usingGameRewardFun(string) {
          for (var _len = arguments.length, param = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            param[_key - 1] = arguments[_key];
          }

          if (this[string] && typeof this[string] == "function") return this[string](...param);else throw string + " is not fun or undefined";
        } // 今日签到


        signInToday() {
          if (this._rewardList.today == this._rewardList.lastTodaySignIn) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "今日已签到");
            this._rewardList.lastTodaySignIn = this._rewardList.today;
            return;
          }

          this._rewardList.lastTodaySignIn = this._rewardList.today;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", "破旧装备箱", 1);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("addItemToSS", "神秘钥匙", 1);
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("showGets", {
            "破旧装备箱": 1,
            "神秘钥匙": 1
          });
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "gameRewardList", this._rewardList);
        }
        /**
         * @description 获取连续签到天数
         * @returns {number} 连续签到天数
        */


        getContinueDays() {
          var today = new Date().getDay();
          var gap = today - this._rewardList.sevenDaySignIn.lastSignIn; //中间只差一天 或者是当天

          if (gap == 1 || gap == -6 || gap == 0) return this._rewardList.sevenDaySignIn.continueDays;else return 0;
        }
        /**
         * @description 七日签到
         * @returns {boolean} 签到是否成功
         * */


        signInSevenDay() {
          var today = new Date().getDay();
          if (this._rewardList.sevenDaySignIn.lastSignIn == today) return false;
          var gap = today - this._rewardList.sevenDaySignIn.lastSignIn;

          if (gap == 1 || gap == -6) {
            this._rewardList.sevenDaySignIn.lastSignIn = today;
            this._rewardList.sevenDaySignIn.continueDays++;
            if (this._rewardList.sevenDaySignIn.continueDays > 7) this._rewardList.sevenDaySignIn.continueDays = 1;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("savingToTempData", "gameRewardList", this._rewardList);
            return true;
          } else {
            this._rewardList.sevenDaySignIn.continueDays = 1;
            this._rewardList.sevenDaySignIn.lastSignIn = today;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("savingToTempData", "gameRewardList", this._rewardList);
            return true;
          }
        } //今日装备奖励视频是否可以展示


        todayEquVideoIsCanShow() {
          return this._rewardList.todayEquVideoShowTimes >= this._maxTodayEquVideoShowTimes;
        } // 播放装备奖励视频


        afterPlayEquVideo() {
          this._rewardList.todayEquVideoShowTimes++;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "gameRewardList", this._rewardList);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d4852b0f5cdfce8d5723a7d5175383ba38e82af7.js.map