System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, GameUrl, _crd, gUrl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3aae4J8o09Gs4/vxL+TUr7x", "GameUrl", undefined);

      GameUrl = class GameUrl {
        constructor() {
          // curUrl = "http://47.97.222.77:3001";
          // curUrl = "http://localhost:30001";
          // curUrl = "http://123.60.190.86";
          this.curUrl = "https://www.xiulegexian.com:8083";
          this.list = {};
          this.initUrl(); //配置游戏访问具体路径
        } //配置游访问具体路径


        initUrl() {
          // this.list.login = this.curUrl + "/game/toBeImmortal/login"; //获取服务端记录
          // this.list.getPrize = this.curUrl + "/game/toBeImmortal/prize"; //推送记录到服务端
          this.list.register = this.curUrl + "/xiuXian/player/registry";
          this.list.login = this.curUrl + "/xiuXian/player/login";
          this.list.savingData = this.curUrl + "/xiuXian/player/syncAccountMetadata";
          this.list.adClickCount = this.curUrl + "/xiuXian/statistics/adClick";
        }

        //展示所有接口路径
        showAllUrl() {
          for (var key in this.list) {
            if (Object.hasOwnProperty.call(this.list, key)) {
              var url = this.list[key];
              console.log("key:", key);
              console.log("url:", url);
            }

            ;
          }

          ;
        }

      };
      ;

      _export("gUrl", gUrl = new GameUrl());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=abce9e30e7a09cd87a35cbe48e94fef5895e89b4.js.map