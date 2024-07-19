System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Button, EventHandler, native, em, ggd, _crd, glf;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "./EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfggd(extras) {
    _reporterNs.report("ggd", "./globalData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Button = _cc.Button;
      EventHandler = _cc.EventHandler;
      native = _cc.native;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      ggd = _unresolved_3.ggd;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "449eazAx+VFQq/a5iitUUii", "globalFun", undefined);

      __checkObsolete__(['Button', 'Component', 'Contact2DType', 'EventHandler', 'native', 'Node', 'PhysicsSystem2D']);

      _export("glf", glf = {
        //创建组件提供的按钮 或 修改内部调用 
        createButton: (scriptNode, buttonNode, scriptName, callbackName, param = '') => {
          let flag = scriptNode && buttonNode && scriptName && callbackName; // console.log("scriptNode", scriptNode);
          // console.log("buttonNode", buttonNode);
          // console.log("scriptName", scriptName);
          // console.log("callbackName", callbackName);

          if (!flag) {
            console.log("参数错误 无法生成按钮 请重新设置");
            return;
          }

          let buttonHandler = new EventHandler();
          buttonHandler.target = scriptNode;
          buttonHandler.component = scriptName;
          buttonHandler.handler = callbackName;
          buttonHandler.customEventData = param; // console.log(buttonHandler);

          let button = buttonNode.getComponent(Button);
          if (!button) button = buttonNode.addComponent(Button);
          button.clickEvents[0] = buttonHandler; //替换原先的
          // console.log("button", button);
          // button.clickEvents.push(buttonHandler);
          // console.log("创建成功");
        },

        /**
         * @description: 获取圆四周的点 
         * @param {number} r 圆的半径
         * @param {number} total 圆的总数
         * @注 圆的总数必须是四的倍数
         */
        getCirclePos(r, total) {
          if (total < 4) throw "圆上点数过少 请输入大于4的数字";
          if (total % 4 !== 0) throw "生成的在圆上的点的总数错误，不是4的倍数" + total;
          let quarter = total / 4;
          let arr = [];

          for (let i = 1; i < quarter; i++) {
            //第一象限
            let y = r * Math.sin(Math.PI / 180 * i / quarter * 90);
            let x = Math.sqrt(r * r - y * y);
            arr.push([x, y], [x, -y], [-x, y], [-x, -y]);
          }

          ;
          arr.push([0, r], [0, -r], [r, 0], [-r, 0]);
          return arr;
        },

        /**
         * @description: 获取时间详情
         * 
         */
        getTimeDetail() {
          var newDate = new Date(); //保留两位有效数字

          let getTimeData = function (time) {
            return (Array(2).join("0") + time).slice(-2);
          };

          return newDate.getFullYear() + "." + (newDate.getMonth() + 1) + "." + newDate.getDate() + "  " + getTimeData(newDate.getHours()) + ":" + getTimeData(newDate.getMinutes()) + ":" + getTimeData(newDate.getSeconds());
        },

        //获得三角形队列
        getTriangleRow(rowTotal) {
          let initPos = {
            x: 0,
            y: 0
          };
          let arr = [];
          let unitGap = 50;

          for (let i = 0; i < rowTotal; i++) {
            let total = i + 1;
            arr[i] = [];

            for (let j = 0; j < total; j++) {
              if (total % 2 == 0) {
                //偶数层 2 4 6
                arr[i].push([initPos.x + j * unitGap - Math.floor(total / 2) * unitGap + unitGap / 2, initPos.y]);
              } else {
                //奇数层  1 3 5 整体作揖unitGap/2 个单位
                arr[i].push([initPos.x + j * unitGap - Math.floor(total / 2) * unitGap, initPos.y]);
              }
            }
          }

          return arr;
        },

        playAd() {
          switch ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).platform) {
            case "GooglePlay":
              native.reflection.callStaticMethod("com/cocos/game/AppActivity", "createAds", "()V");
              break;

            case "wxGame":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("showWxVideoAd");
              break;

            default:
              break;
          }
        },

        // 广告播放成功后的回调
        afterPlayAdComplete() {
          switch ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curAdRewardType) {
            case "getItems":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getItemsRewardByAds");
              break;

            case "rebirthHero":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("rebirthHero");
              break;

            case "getDoubleReward":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getDoubleReward");
              break;

            case "getAllUpgradeReward":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingWeaponManagerFun", "getAllUpgradeRewardComplete");
              break;

            case "updateUpgradeReward":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingWeaponManagerFun", "updateUpgradeRewardComplete");
              break;

            case "getEquBox":
              console.log("领取装备箱子");
              let random = Math.random();

              if (random > 0.995) {
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("addItemToSS", "史诗装备箱", 1);
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("showGets", {
                  "史诗装备箱": 1
                });
              } else if (random > 0.98) {
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("addItemToSS", "传说装备箱", 1);
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("showGets", {
                  "传说装备箱": 1
                });
              } else if (random > 0.8) {
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("addItemToSS", "稀有装备箱", 1);
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("showGets", {
                  "稀有装备箱": 1
                });
              } else {
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("addItemToSS", "实用装备箱", 1);
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("showGets", {
                  "实用装备箱": 1
                });
              }

              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingGameRewardFun", "afterPlayEquVideo");
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("usingHeroInfoLayerFun", "isShowAdBtn");
              break;

            default:
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("tipsViewShow", "参数类型错误：" + (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
                error: Error()
              }), ggd) : ggd).curAdRewardType);
              break;
          } // let url = gUrl.list.adClickCount;
          // let data = null;
          // hr.post(url, data, () => { });

        },

        // 广告播放失败后的回调
        afterPlayAdError() {
          switch ((_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
            error: Error()
          }), ggd) : ggd).curAdRewardType) {
            case "getItems":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("tipsViewShow", "获取奖励失败");
              break;

            case "rebirthHero":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("closeRebirthAd");
              break;

            case "getDoubleReward":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("closeGetDoubleRewardAd");
              break;

            case "getEquBox":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("tipsViewShow", "获取奖励失败");
              break;

            case "getAllUpgradeReward":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("tipsViewShow", "获取奖励失败");
              break;

            case "updateUpgradeReward":
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("tipsViewShow", "刷新奖励失败");
              break;

            default:
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("tipsViewShow", "参数类型错误：" + (_crd && ggd === void 0 ? (_reportPossibleCrUseOfggd({
                error: Error()
              }), ggd) : ggd).curAdRewardType);
              break;
          }
        },

        //获取两点间的飞行方向
        getTwoPointFlyDir(p1, p2) {
          // console.log("p1",p1);
          // console.log("p2",p2);
          let x = p1.x - p2.x;
          let y = p1.y - p2.y;
          let dir = {
            x: 0,
            y: 0
          };

          if (x === 0 && y === 0) {
            dir.x = 1;
            dir.y = 0;
          } else if (x === 0) {
            dir.x = 0;
            dir.y = Math.abs(y) / y;
          } else if (y === 0) {
            dir.x = Math.abs(x) / x;
            dir.y = 0;
          } else if (Math.abs(x) >= Math.abs(y)) {
            dir.x = Math.abs(x) / x;
            dir.y = y / Math.abs(x);
          } else {
            dir.x = x / Math.abs(y);
            dir.y = Math.abs(y) / y;
          }

          return dir;
        },

        //两点间的距离是否大于某值
        towPointDisGreaterThanValue(p1, p2, v) {
          let x = p1.x - p2.x;
          let y = p1.y - p2.y;
          return x * x + y * y > v;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5fda120570cf39d528e564bad43ba5ab89e89825.js.map