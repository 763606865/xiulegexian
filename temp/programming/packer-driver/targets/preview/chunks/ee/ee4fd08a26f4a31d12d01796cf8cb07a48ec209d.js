System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, NodePool, PoolManager, _crd, plm;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dd9c4pCzpdDAodMdKm5AUaB", "PoolManager", undefined);
      /*
       * @Author: li_jiang_wei 739671694@qq.com
       * @Date: 2022-07-05 23:35:56
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-12-14 10:41:52
       * @FilePath: \to-be-immortal\assets\script\global\PoolManager.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['instantiate', 'NodePool']);

      PoolManager = class PoolManager {
        constructor() {
          this.pools = void 0;
          this.prefabs = void 0;
          this.junkyard = void 0;
          this.pools = {};
          this.prefabs = {};
          this.junkyard = new NodePool();
        } //添加对象池和相关预制件到pools


        addPoolToPools(string, pool, prefab) {
          if (this.pools[string]) {
            console.warn("对象池" + string + "已存在");
            return;
          }

          this.pools[string] = pool;
          this.prefabs[string] = prefab;
          console.log("成功添加对象池" + string);
        } // 获取对象池中的对象


        getFromPool(string, isNotice) {
          if (isNotice === void 0) {
            isNotice = false;
          }

          var pool = this.pools[string];
          var prefab = this.prefabs[string]; // if (!pool && !prefab) return console.log("对象池或预制件不存在");

          if (!pool) {
            console.warn("对象池" + string + "不存在");
            return false;
          }

          if (!prefab) throw "预制件" + string + "不存在";
          var obj = null;

          if (pool.size() > 0) {
            obj = pool.get();
            if (isNotice) console.log("从对象池获取" + string + "成功");
          } else {
            obj = instantiate(prefab);
            if (isNotice) console.log("从对象池创建" + string + "成功");
          }

          return obj;
        } //将对象放入对象池


        putToPool(string, obj, isNotice) {
          if (isNotice === void 0) {
            isNotice = false;
          }

          var pool = this.pools[string];

          if (!pool) {
            console.warn(string + "对象池不存在,直接销毁");
            obj.destroy();
            return;
          }

          if (isNotice) console.log("将" + " " + obj.uuid + " 放入对象池" + string);
          pool.put(obj);
        } //放入垃圾场 待处理 等待场景切换时 统一处理


        putToJunkyard(obj, isNotice) {
          if (isNotice === void 0) {
            isNotice = false;
          }

          // if(isNotice) console.log("放入垃圾场"+obj.uuid);
          if (isNotice) console.log("放入垃圾场");
          this.junkyard.put(obj);
        } // 显示所有对象池和预制件


        showAllPoolsAndPrefab() {
          console.log("pools", this.pools);
          console.log("prefabs", this.prefabs);
        } //清空所有对象池 ---> 同时清理垃圾场


        clearAllNodePool() {
          this.clearJunkyard();

          for (var key in this.pools) {
            if (Object.prototype.hasOwnProperty.call(this.pools, key)) {
              var pool = this.pools[key];
              pool.clear();
              delete this.pools[key];
            }
          }

          for (var _key in this.prefabs) {
            if (Object.prototype.hasOwnProperty.call(this.prefabs, _key)) {
              delete this.prefabs[_key];
            }
          }

          console.log("this.pools", this.pools);
          console.log("this.prefabs", this.prefabs);
        } // 清空垃圾场


        clearJunkyard() {
          this.junkyard.clear();
        }

      };

      _export("plm", plm = new PoolManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ee4fd08a26f4a31d12d01796cf8cb07a48ec209d.js.map