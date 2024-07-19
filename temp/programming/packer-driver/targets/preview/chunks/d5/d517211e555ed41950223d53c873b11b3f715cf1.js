System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, director, em, gUrl, ggd, glf, hr, _dec, _class, _crd, ccclass, property, SavingManager;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgUrl(extras) {
    _reporterNs.report("gUrl", "../global/GameUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../global/globalFun", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhr(extras) {
    _reporterNs.report("hr", "../global/HttpRequest", _context.meta, extras);
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
      sys = _cc.sys;
      director = _cc.director;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      gUrl = _unresolved_3.gUrl;
    }, function (_unresolved_4) {
      ggd = _unresolved_4.ggd;
    }, function (_unresolved_5) {
      glf = _unresolved_5.glf;
    }, function (_unresolved_6) {
      hr = _unresolved_6.hr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57546QrwlBC8YczrgjQR8PN", "SavingManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys', 'game', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SavingManager", SavingManager = (_dec = ccclass('SavingManager'), _dec(_class = class SavingManager extends Component {
        constructor() {
          super(...arguments);
          this._tempData = null;
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("savingToTempData", this.savingToTempData.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("getTempData", this.getTempData.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("savingGlobalDataToTempData", this.savingGlobalDataToTempData.bind(this));
          this.initTempData();
          director.addPersistRootNode(this.node); //背包物品在各个场景皆可用到 设置为常驻节点

          console.log("========================INIT SavingManager===================");
          this.initGlobalData();
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("savingToTempData");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("getTempData");
        }

        savingToTempData(key, data) {
          //对传入数据进行深拷贝 防止数据污染
          if (this._tempData.hasOwnProperty(key)) this._tempData[key] = JSON.parse(JSON.stringify(data));else {
            console.warn("添加新属性" + key);
            console.log(data);
            this._tempData[key] = JSON.parse(JSON.stringify(data));
          }
          console.log("temp data，saving key is " + key, this._tempData);
          this.savingTime();
          if (!(_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).userInfo.isVisitor) this.savingToServer();else sys.localStorage.setItem("saving", JSON.stringify(this._tempData));
        }

        savingToServer() {
          var url = (_crd && gUrl === void 0 ? (_reportPossibleCrUseOfgUrl({
            error: Error()
          }), gUrl) : gUrl).list.savingData;
          var data = {
            "configValue": JSON.stringify(this._tempData)
          };
          var cb = this.savingToServerComplete.bind(this);
          var eb = this.savingToServerError.bind(this);
          (_crd && hr === void 0 ? (_reportPossibleCrUseOfhr({
            error: Error()
          }), hr) : hr).post(url, data, cb, eb);
        }

        savingToServerComplete(res) {// console.log("savingToServerComplete",res);
        }

        savingToServerError() {} //记录时间


        savingTime() {
          var string = (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
            error: Error()
          }), glf) : glf).getTimeDetail();
          this._tempData.savingInfo.curTime = string;
          this._tempData.savingInfo.curTimeStamp = new Date().getTime();
        }

        getTempData(key) {
          if (this._tempData.hasOwnProperty(key)) return this._tempData[key];else return null;
        }

        initTempData() {
          var data = sys.localStorage.getItem("saving");
          if (!(_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).userInfo.isVisitor) data = (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).userInfo.accountMetadata;
          if (data) this._tempData = JSON.parse(data);else this._tempData = {};

          if (!this._tempData.hasOwnProperty("savingInfo")) {
            this._tempData.savingInfo = {
              //可能需要修改，时间戳可能存在细微误差
              "startTime": (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).getTimeDetail(),
              "timeStamp": new Date().getTime(),
              "curTime": (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).getTimeDetail(),
              "curTimeStamp": new Date().getTime()
            };
          }

          ;
        } // 初始化全局数据


        initGlobalData() {
          if (this._tempData.hasOwnProperty("global")) {
            var gData = this._tempData["global"];
            (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stageProgress = gData.stageProgress;

            if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).versionCode !== gData.versionCode) {
              console.log("版本更新");
              this.savingGlobalDataToTempData(); //记录版本号

              this.scheduleOnce(() => {
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("openVersionNotice");
              }, 0);
            }
          }
        } // 记录全局数据


        savingGlobalDataToTempData() {
          var key = "global";
          var data = {
            "stageProgress": (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).stageProgress,
            "versionCode": (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).versionCode
          };
          this.savingToTempData(key, data);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d517211e555ed41950223d53c873b11b3f715cf1.js.map