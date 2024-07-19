System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sys, em, ggConfig, ggd, glf, _dec, _class, _crd, ccclass, property, WX_GAME;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggConfig(extras) {
    _reporterNs.report("ggConfig", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "../global/globalData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../global/globalFun", _context.meta, extras);
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
      sys = _cc.sys;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggConfig = _unresolved_3.ggConfig;
      ggd = _unresolved_3.ggd;
    }, function (_unresolved_4) {
      glf = _unresolved_4.glf;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1c8cbW2NUxMCoMPVVuv5wHA", "wxGame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WX_GAME", WX_GAME = (_dec = ccclass('WX_GAME'), _dec(_class = class WX_GAME extends Component {
        constructor() {
          super(...arguments);
          this._videoAd = null;
          this._bannerAd = null;
          this._curAdIndex = 0;
        }

        onLoad() {
          if (!(_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).isOpenAd) return; //没开启 直接停止初始化

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("showWxVideoAd", this.showWxVideoAd.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("showBanner", this.showBanner.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("hideBanner", this.hideBanner.bind(this)); // em.add("initRewardAdByPlayTimes", this.initRewardAdByPlayTimes.bind(this));
          //如果是微信小游戏

          if (sys.platform == sys.Platform.WECHAT_GAME) {
            director.addPersistRootNode(this.node);
            this.init();
          }
        }
        /**
         * @description 初始化微信广告
         * @errorCode  
         * @code1000	后端接口调用失败
         * @code1001	参数错误
         * @code1002	广告单元无效
         * @code1003	内部错误
         * @code1004	无合适的广告
         * @code1005	广告组件审核中
         * @code1006	广告组件被驳回
         * @code1007	广告组件被封禁
         * @code1008	广告单元已关闭
        */


        init() {
          console.log("初始化微信场景"); //初始化微信分享功能

          wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          }); // this.initBannerAd();
          // this.initRewardAdByPlayTimes();

          this.initRewardAd();
        }

        initBannerAd() {
          // 创建 Banner 广告实例，提前初始化
          // let gap = (wx.getSystemInfoSync().screenWidth - 200) / 2;
          this._bannerAd = wx.createBannerAd({
            adUnitId: 'adunit-fa354a32215cecf4',
            style: {
              left: 0,
              top: wx.getSystemInfoSync().screenHeight - 100,
              // bottom:0,
              width: wx.getSystemInfoSync().screenWidth
            }
          });

          this._bannerAd.onLoad(() => {
            console.log('banner 广告加载成功');
          });

          this._bannerAd.onError(err => {
            console.log(err);

            switch (err.errCode) {
              case 1000:
                console.log("后端接口调用失败");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "后端接口调用失败");
                break;

              case 1001:
                console.log("参数错误");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "参数错误");
                break;

              case 1002:
                console.log("广告单元无效");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告单元无效");
                break;

              case 1003:
                console.log("内部错误");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "内部错误");
                break;

              case 1004:
                console.log("无合适的广告");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "无合适的广告");
                break;

              case 1005:
                console.log("广告组件审核中");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件审核中");
                break;

              case 1006:
                console.log("广告组件被驳回");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件被驳回");
                break;

              case 1007:
                console.log("广告组件被封禁");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件被封禁");
                break;

              case 1008:
                console.log("广告单元已关闭");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告单元已关闭");
                break;

              default:
                break;
            }
          });

          this._bannerAd.show();
        } // 在适合的场景显示 Banner 广告


        showBanner() {
          if (this._bannerAd) this._bannerAd.show();
        }

        hideBanner() {
          if (this._bannerAd) this._bannerAd.hide();
        } //直接初始化 进初始化一次


        initRewardAd() {
          // 创建激励视频广告实例，提前初始化
          this._videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-4fd8f9b38c4adb1f"
          });

          this._videoAd.onLoad(() => {
            console.log('激励视频 广告加载成功');
          });

          this._videoAd.onError(err => {
            console.log(err);

            switch (err.errCode) {
              case 1000:
                console.log("后端接口调用失败");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "后端接口调用失败");
                break;

              case 1001:
                console.log("参数错误");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "参数错误");
                break;

              case 1002:
                console.log("广告单元无效");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告单元无效");
                break;

              case 1003:
                console.log("内部错误");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "内部错误");
                break;

              case 1004:
                console.log("无合适的广告");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "无合适的广告");
                break;

              case 1005:
                console.log("广告组件审核中");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件审核中");
                break;

              case 1006:
                console.log("广告组件被驳回");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件被驳回");
                break;

              case 1007:
                console.log("广告组件被封禁");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件被封禁");
                break;

              case 1008:
                console.log("广告单元已关闭");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告单元已关闭");
                break;

              default:
                break;
            }

            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).afterPlayAdError();
          });

          this._videoAd.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
              // 正常播放结束，可以下发游戏奖励
              (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).afterPlayAdComplete();
            } else {
              // 播放中途退出，不下发游戏奖励
              console.log("播放中途退出，不下发游戏奖励");
              /*  */

              (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).afterPlayAdError();
            }
          });
        } //通过播放次数初始化广告


        initRewardAdByPlayTimes() {
          var index = this.getIndexByPlayTimes();
          var adUnitId = (_crd && ggConfig === void 0 ? (_reportPossibleCrUseOfggConfig({
            error: Error()
          }), ggConfig) : ggConfig).adUnitIds[index]; // 创建激励视频广告实例，提前初始化

          this._videoAd = wx.createRewardedVideoAd({
            adUnitId: adUnitId
          });

          this._videoAd.onLoad(() => {
            console.log('激励视频 广告加载成功');
          });

          this._videoAd.onError(err => {
            console.log(err);

            switch (err.errCode) {
              case 1000:
                console.log("后端接口调用失败");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "后端接口调用失败");
                break;

              case 1001:
                console.log("参数错误");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "参数错误");
                break;

              case 1002:
                console.log("广告单元无效");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告单元无效");
                break;

              case 1003:
                console.log("内部错误");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "内部错误");
                break;

              case 1004:
                console.log("无合适的广告");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "无合适的广告");
                break;

              case 1005:
                console.log("广告组件审核中");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件审核中");
                break;

              case 1006:
                console.log("广告组件被驳回");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件被驳回");
                break;

              case 1007:
                console.log("广告组件被封禁");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告组件被封禁");
                break;

              case 1008:
                console.log("广告单元已关闭");
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("tipsViewShow", "广告单元已关闭");
                break;

              default:
                break;
            }

            (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
              error: Error()
            }), glf) : glf).afterPlayAdError();
          });

          this._videoAd.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
              (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
                error: Error()
              }), ggd) : ggd).playAdTimes++;

              var _index = this.getIndexByPlayTimes();

              if (_index !== this._curAdIndex) this.initRewardAdByPlayTimes(); // 正常播放结束，可以下发游戏奖励

              (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).afterPlayAdComplete();
            } else {
              // 播放中途退出，不下发游戏奖励
              console.log("播放中途退出，不下发游戏奖励");
              /*  */

              (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).afterPlayAdError();
            }
          });
        } // 通过播放次数获得下标


        getIndexByPlayTimes() {
          var index = 0;
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).playAdTimes > 3) index = 1;
          if ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).playAdTimes > 6) index = 2;
          return index;
        } // 展示视频广告


        showWxVideoAd() {
          // 用户触发广告后，显示激励视频广告
          this._videoAd.show().catch(() => {
            // 失败重试
            this._videoAd.load().then(() => this._videoAd.show()).catch(err => {
              console.log('激励视频 广告显示失败');
            });
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afc19216c7b7a22909a3a6cb4ac180b00a2727f3.js.map