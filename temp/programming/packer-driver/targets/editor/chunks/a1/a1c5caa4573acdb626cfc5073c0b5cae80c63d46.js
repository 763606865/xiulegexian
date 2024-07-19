System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Sprite, Label, find, sys, EditBox, em, gUrl, ggd, hr, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, PreLoad;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgUrl(extras) {
    _reporterNs.report("gUrl", "../global/GameUrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
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
      director = _cc.director;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      find = _cc.find;
      sys = _cc.sys;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      gUrl = _unresolved_3.gUrl;
    }, function (_unresolved_4) {
      ggd = _unresolved_4.ggd;
    }, function (_unresolved_5) {
      hr = _unresolved_5.hr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0945a1ycZVIXowKyhXL17x/", "PreLoad", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Sprite', 'Label', 'Game', 'game', 'find', 'sys', 'Settings', 'profiler', 'EditBox']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PreLoad", PreLoad = (_dec = ccclass('PreLoad'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class PreLoad extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "fillSprite", _descriptor, this);

          _initializerDefineProperty(this, "progressLabel", _descriptor2, this);

          _initializerDefineProperty(this, "versionCode", _descriptor3, this);

          this._curAccountString = void 0;
          this._curPasswordString = void 0;
        }

        onLoad() {
          // console.log("sys.os", sys.os);
          // console.log("sys.osVersion", sys.osVersion);
          find("Canvas/gameName").active = true;
          find("Canvas/loadingProgressBg").active = true;
          director.preloadScene("mainMenu"); // this.enterMainMenuScene();

          this.versionCode.string = (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).versionCode;
        }

        onDestroy() {
          if ((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).eventIsDefined("hideBanner")) (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("hideBanner");
        }

        start() {// profiler.hideStats();//关闭fps
        } //刷新加载进度


        updateLoadingProgress(fillRange) {
          if (fillRange <= this.fillSprite.fillRange) return;
          this.fillSprite.fillRange = fillRange;
          this.progressLabel.string = (fillRange * 100).toFixed(2) + "%"; // this.progressLabel.string = (fillRange * 100)|0;
        } //进入主界面场景


        enterMainMenuScene() {
          director.loadScene("mainMenu");
        }

        showLoginLayer() {
          // let platform = "wx";
          // if (platform=="wx") {
          //     this.onBtnAsVisitor();
          //     return;
          // }
          find("Canvas/gameName").active = false;
          find("Canvas/loadingProgressBg").active = false;
          find("Canvas/loginLayer").active = true; //通过本地缓存信息显示登录信息

          let data = sys.localStorage.getItem("loginInfo");

          if (data) {
            console.log("账号密码输入框显示data 还没写");
            console.log("data", data);
            data = JSON.parse(data);
            find("Canvas/loginLayer/inputAccount").getComponent(EditBox).string = data.account;
            find("Canvas/loginLayer/inputPassword").getComponent(EditBox).string = data.password;
            this._curAccountString = data.account;
            this._curPasswordString = data.password;
          }
        }

        inputAccount(box) {
          this._curAccountString = box.string;
        }

        inputPassword(box) {
          this._curPasswordString = box.string;
        }

        onBtnLogin() {
          let url = (_crd && gUrl === void 0 ? (_reportPossibleCrUseOfgUrl({
            error: Error()
          }), gUrl) : gUrl).list.login;
          let data = {
            "loginIdentity": this._curAccountString,
            "credential": this._curPasswordString
          };
          let cb = this.loginComplete.bind(this);
          let eb = this.loginError.bind(this);
          let tb = this.loginTimeout.bind(this);
          (_crd && hr === void 0 ? (_reportPossibleCrUseOfhr({
            error: Error()
          }), hr) : hr).post(url, data, cb, eb, tb);
          find("Canvas/loading/Label").getComponent(Label).string = "登录中...";
          find("Canvas/loading").active = true;
        }

        loginComplete(res) {
          find("Canvas/loading").active = false; //出现报错

          console.log("loginComplete", res);

          if (res.code == 200) {
            (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).userInfo.isVisitor = false;
            (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).userInfo.token = res.data.token;
            (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
              error: Error()
            }), ggd) : ggd).userInfo.accountMetadata = res.data.accountMetadata; // ggd.userInfo.token = res.data.data.token;
            // ggd.userInfo.accountMetadata = res.data.data.accountMetadata;
            //存储当前账号密码

            let data = {
              "account": this._curAccountString,
              "password": this._curPasswordString
            };
            sys.localStorage.setItem("loginInfo", JSON.stringify(data));
            this.enterMainMenuScene();
          } else {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", res.message);
          }
        }

        loginError() {
          find("Canvas/loading").active = false;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", "网络异常，请重试或通过游客登录。");
        }

        loginTimeout() {
          find("Canvas/loading").active = false;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", "网络延迟，请重试或通过游客登录。");
        }

        onBtnRegister() {
          let url = (_crd && gUrl === void 0 ? (_reportPossibleCrUseOfgUrl({
            error: Error()
          }), gUrl) : gUrl).list.register;
          let data = {
            "nickname": this._curAccountString,
            "password": this._curPasswordString
          };
          let cb = this.registerComplete.bind(this);
          let eb = this.registerComplete.bind(this);
          let tb = this.registerTimeout.bind(this);
          (_crd && hr === void 0 ? (_reportPossibleCrUseOfhr({
            error: Error()
          }), hr) : hr).post(url, data, cb, eb, tb);
          find("Canvas/loading/Label").getComponent(Label).string = "注册中...";
          find("Canvas/loading").active = true;
        }

        registerComplete(res) {
          console.log("registerComplete", res);

          if (res.code == 200) {
            find("Canvas/loading").active = false;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "注册成功，请登录");
          } else {
            find("Canvas/loading").active = false;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", res.message);
          }
        }

        registerError() {
          find("Canvas/loading").active = false;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", "网络异常，请重试或通过游客登录。");
        }

        registerTimeout() {
          find("Canvas/loading").active = false;
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", "网络延迟，请重试或通过游客登录。");
        }

        onBtnAsVisitor() {
          (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).userInfo.isVisitor = true;
          this.enterMainMenuScene();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fillSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "versionCode", [_dec4], {
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
//# sourceMappingURL=a1c5caa4573acdb626cfc5073c0b5cae80c63d46.js.map