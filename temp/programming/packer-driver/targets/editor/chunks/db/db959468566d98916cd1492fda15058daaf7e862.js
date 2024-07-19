System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ggd, EventManager, _crd, em;

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "./globalData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ggd = _unresolved_2.ggd;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65fecLrBN5EdbS9KOtfYHkX", "EventManager", undefined);

      EventManager = class EventManager {
        constructor() {
          this.event = {};
        }

        add(type, callback) {
          if (!type || !callback) throw new Error("事件名称或回调函数未定义");
          if (this.event[type]) throw new Error(type + ",该事件名称已使用 请使用其它名称"); // if (this.event.hasOwnProperty(type)) return console.log("该事件名称已使用 请使用其它名称");
          else {
            this.event[type] = {};
            this.event[type].callback = callback; // console.log("事件" + type + "添加成功");
          }
        }

        dispatch(type, ...params) {
          if (!type) throw new Error("事件名称参数为空");
          if (!this.event[type]) throw new Error("事件" + type + "未注册");
          let callback = this.event[type].callback;
          return callback(...params);
        } //事件是否定义


        eventIsDefined(type) {
          if (!this.event[type]) return false;else return true;
        }

        remove(type) {
          if (!type) throw new Error("事件名称参数为空");
          if (!this.event[type]) throw new Error("移除的事件不存在:" + type);
          delete this.event[type].callback;
          delete this.event[type];
        }

        showAllEvents() {
          console.log(this.event);
        }

      }; // console.log("修了个仙 Google Play version-beta-1.0.3");

      console.log((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
        error: Error()
      }), ggd) : ggd).versionCode);

      _export("em", em = new EventManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=db959468566d98916cd1492fda15058daaf7e862.js.map