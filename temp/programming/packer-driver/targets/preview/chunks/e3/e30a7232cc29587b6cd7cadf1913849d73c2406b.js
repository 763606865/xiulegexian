System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider2D, Sprite, find, em, _dec, _class, _crd, ccclass, property, Puppet;

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
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
      BoxCollider2D = _cc.BoxCollider2D;
      Sprite = _cc.Sprite;
      find = _cc.find;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0e8bhfWAhNZZ3kUrOHPoj2", "Puppet", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-11-23 10:38:29
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-11-23 16:22:23
       * @FilePath: \to-be-immortal\assets\script\hero\Puppet.ts
       * @Description:
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider2D', 'Contact2DType', 'Sprite', 'find']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Puppet", Puppet = (_dec = ccclass('Puppet'), _dec(_class = class Puppet extends Component {
        constructor() {
          super(...arguments);
          this._maxBlood = void 0;
          this._curBlood = void 0;
        }

        //在node上直接添加回调，方便调用
        initNodeCallBack() {
          this.node.updateBloodProgress = this.updateBloodProgress.bind(this); // this.node.updateBloodProgress = this.updateBloodProgress;

          this.updateBloodProgress(0);
        }

        initBoxCollider(tag, group) {
          if (!tag) throw "tag is" + tag; // let collider = this.node.addComponent(BoxCollider2D);

          var collider = this.node.getComponent(BoxCollider2D);
          if (!collider) collider = this.node.addComponent(BoxCollider2D);
          collider.tag = tag;
          collider.group = group; // console.log("collider", collider);
          // collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        } //刷新血条


        updateBloodProgress(changeValue) {
          // console.log("刷新血条，changeValue", changeValue);
          console.log("刷新傀儡血条", changeValue);
          this._curBlood += changeValue;

          if (this._curBlood < 0) {
            this._curBlood = 0;
            this.puppetDied();
          }

          ;
          if (this._curBlood > this._maxBlood) this._curBlood = this._maxBlood;
          var sprite = find("bloodProgressBg/bloodProgress", this.node).getComponent(Sprite);
          sprite.fillRange = this._curBlood / this._maxBlood;
          console.log("this._curBlood", this._curBlood);
          console.log("this._maxBlood", this._maxBlood);
        } // 傀儡死亡


        puppetDied() {
          console.log("傀儡死亡");
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroControlFun", "resetHeroPuppet");
          this.node.destroy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e30a7232cc29587b6cd7cadf1913849d73c2406b.js.map