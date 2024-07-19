System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, director, em, PreLoad, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, DynamicLoading;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPreLoad(extras) {
    _reporterNs.report("PreLoad", "./PreLoad", _context.meta, extras);
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
      resources = _cc.resources;
      director = _cc.director;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      PreLoad = _unresolved_3.PreLoad;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16d7eG5vo9IBLdWMm1q6dEM", "DynamicLoading", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-14 11:37:52
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-10-27 10:34:22
       * @FilePath: \copy9train\assets\script\preLoad\DynamicLoading.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'SpriteFrame', 'game', 'AssetManager', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DynamicLoading", DynamicLoading = (_dec = ccclass('DynamicLoading'), _dec2 = property(_crd && PreLoad === void 0 ? (_reportPossibleCrUseOfPreLoad({
        error: Error()
      }), PreLoad) : PreLoad), _dec(_class = (_class2 = class DynamicLoading extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "preLoadScript", _descriptor, this);
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("loadTheDirResources");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("loadTheDir");
        }

        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("loadTheDirResources", this.loadTheDirResources.bind(this));
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("loadTheDir", this.loadTheDir.bind(this));
          this.preLoadAllResources(); // this.loadTheDir("anim/enemy/monster");

          director.addPersistRootNode(this.node);
        } // 加载所有资源


        preLoadAllResources() {
          resources.loadDir("", (finished, total, item) => {
            // console.log("finished",finished);
            // console.log("total",total);
            // console.log("item",item);
            this.preLoadScript.updateLoadingProgress(finished / total);
          }, (err, assets) => {
            if (err) {
              console.log(err);
              return;
            } else {
              // console.log("assets",assets);
              // this.preLoadScript.enterMainMenuScene();
              this.preLoadScript.showLoginLayer();
            }
          });
        } // 加载文件夹 assets 为数组


        loadTheDir(dir, callback = null) {
          resources.loadDir(dir, (err, assets) => {
            if (err) {
              console.log(err);
              return;
            } else {
              // console.log("loadTheDir",assets);
              if (callback) callback(assets);
            }
          });
        } //加载具体路径资源 asset为单个资源


        loadTheDirResources(dir, callback = null, errCallback = null) {
          resources.load(dir, (err, assets) => {
            if (err) {
              if (errCallback) errCallback();else console.log(err);
              return;
            } else {
              // console.log("loadTheDirResources",assets);
              if (callback) callback(assets);
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "preLoadScript", [_dec2], {
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
//# sourceMappingURL=a0803b745f7df6f337728515ea1b5666419ba4e4.js.map