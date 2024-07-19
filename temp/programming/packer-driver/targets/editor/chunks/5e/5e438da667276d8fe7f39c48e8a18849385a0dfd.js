System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, dynamicAtlasManager, _crd, tagData, groupIndex, attackInterval, ggd, ggConfig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      dynamicAtlasManager = _cc.dynamicAtlasManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12677v3hZxChoqJeg+2NXbN", "globalData", undefined);

      // //开启动态和图
      // macro.CLEANUP_IMAGE_CACHE = false;
      // dynamicAtlasManager.enabled = true;
      // 关闭动态和图
      __checkObsolete__(['dynamicAtlasManager', 'macro']);

      dynamicAtlasManager.enabled = false;

      _export("tagData", tagData = /*#__PURE__*/function (tagData) {
        tagData[tagData["hero"] = 10] = "hero";
        tagData[tagData["sword"] = 11] = "sword";
        tagData[tagData["fan"] = 12] = "fan";
        tagData[tagData["guard"] = 13] = "guard";
        tagData[tagData["spell"] = 14] = "spell";
        tagData[tagData["darts"] = 15] = "darts";
        tagData[tagData["friend1Skill1"] = 16] = "friend1Skill1";
        tagData[tagData["monster"] = 17] = "monster";
        tagData[tagData["wall"] = 18] = "wall";
        tagData[tagData["boss"] = 19] = "boss";
        tagData[tagData["fireBall"] = 20] = "fireBall";
        tagData[tagData["fireBallFire"] = 21] = "fireBallFire";
        tagData[tagData["trackDisappear"] = 22] = "trackDisappear";
        tagData[tagData["enemySkill"] = 23] = "enemySkill";
        tagData[tagData["obstacle"] = 24] = "obstacle";
        tagData[tagData["puppet"] = 25] = "puppet";
        tagData[tagData["destroyWeapon"] = 26] = "destroyWeapon";
        tagData[tagData["randomSkillReward"] = 27] = "randomSkillReward";
        return tagData;
      }({}));

      _export("groupIndex", groupIndex = {
        DEFAULT: 2 ** 0,
        enemy: 2 ** 1,
        self: 2 ** 2,
        obstacle: 2 ** 3,
        enemySkill: 2 ** 4,
        heroWeapon: 2 ** 5,
        itemInPlaying: 2 ** 6 //游戏过程中的物品

      }); //攻击间隔 


      _export("attackInterval", attackInterval = {
        monsterCollideHero: 1,
        guard: 0.5,
        spell: 0.1,
        f1s1: 1 / 60,
        boss1: 1,
        boss2: 1
      }); //全局通用数据 global game data


      _export("ggd", ggd = {
        stopAll: false,
        curStage: 1,
        totalStage: 80,
        isOpenAd: true,
        // platform: "GooglePlay",
        platform: "wxGame",
        versionCode: "wx-v-1.0.3.2",
        curAdRewardType: "",
        //当前广告奖励类型 --->通过该字段判断发放奖励类型
        //需要记录的
        stageProgress: 1,
        userInfo: {
          isVisitor: true,
          token: "",
          accountMetadata: null
        },
        phoneInfo: {
          imei: ""
        },
        //播放广告次数
        playAdTimes: 0
      }); //全局游戏配置 global game config


      _export("ggConfig", ggConfig = {
        framingInitMonster: true,
        //分帧生成怪物
        dynamicSupFrame: false,
        //动态辅助框
        quadTreeRange: {
          w: 700,
          h: 1300
        },
        adUnitIds: ["adunit-e4f9eda3feb2de98", "adunit-4fd8f9b38c4adb1f", "adunit-6337803394072dcc"]
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5e438da667276d8fe7f39c48e8a18849385a0dfd.js.map