System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, LevelManager, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0208bjby31EyYWzQE6+eHxF", "LevelManager", undefined);

      /**
       * 类说明  等级管理类
       * @class LevelManager
       * @constructor {Object}  obj 初始化数据对象
       * @property {Number} level 当前技能等级
       * @property {Number} maxLevel 当前技能最大等级
       * @property {Number} curExp 当前技能最大等级
       * @property {Object} levelMappingExpList 当前技能等级经验映射表
       * @property {Number} maxExp 当前技能满级经验
       */
      _export("LevelManager", LevelManager = class LevelManager {
        constructor(obj) {
          this.level = void 0;
          this.maxLevel = void 0;
          this.curExp = void 0;
          this.maxExp = void 0;
          this.levelMappingExpList = void 0;
          this.level = obj.level;
          this.maxLevel = obj.maxLevel;
          this.curExp = obj.curExp;
          this.levelMappingExpList = obj.levelMappingExpList; //可以单独拿出来

          this.maxExp = this.levelMappingExpList[this.maxLevel - 1].exp;
          console.log("levelManager", this);
        }
        /**
         * @method addExp 增加经验
         * @return {boolean} 是否升级；
         */


        addExp(num) {
          // console.log("this.curExp ",this.curExp );
          // console.log("this.maxExp  ",this.maxExp  );
          // console.log("num",num);
          //新增 最大等级限制
          if (this.curExp >= this.maxExp || this.level >= this.maxLevel) return console.log("经验已满");
          this.curExp += num; // console.log("经验+" + num);

          if (this.curExp >= this.maxExp) this.curExp = this.maxExp; // console.log("this.curExp",this.curExp);
          // console.log("this.maxExp",this.maxExp);

          if (this.isUpgrade()) {
            this.upgrade();
            return true;
          }

          ;
        } // 是否能够升级


        isUpgrade() {
          return this.curExp >= this.levelMappingExpList[this.level].exp;
        } // 升级


        upgrade() {
          let len = this.maxLevel;
          let start = this.level + 1;
          let afterLv;

          for (let i = start; i < len; i++) {
            // let exp = this.levelMappingExpList[i].exp;
            let exp = this.levelMappingExpList[i - 1].exp;

            if (exp > this.curExp) {
              afterLv = i - 1;
              break;
            }

            if (i == len - 1 && exp <= this.curExp) afterLv = this.maxLevel;
          }

          let addNum = afterLv - this.level;
          this.level = afterLv;
          console.log("等级+" + addNum);
        } //获取经验进度


        getExpProgress() {
          if (this.level == 1) return this.curExp / this.levelMappingExpList[this.level].exp;else {
            let fontLvExp = this.levelMappingExpList[this.level - 1].exp;
            let curLvExp = this.levelMappingExpList[this.level - 0].exp; // console.log("fontLvExp",fontLvExp);
            // console.log("curLvExp",curLvExp);
            // console.log("this.curExp - fontLvExp",this.curExp - fontLvExp);
            // console.log("curLvExp - fontLvExp",curLvExp - fontLvExp);

            return (this.curExp - fontLvExp) / (curLvExp - fontLvExp);
          }
          ;
        } // 返回当前等级


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2edc6436bb868600af2287c4b6d4c65073605cd.js.map