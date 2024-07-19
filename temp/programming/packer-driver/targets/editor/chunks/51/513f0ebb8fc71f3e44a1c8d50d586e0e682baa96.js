System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Sprite, Color, Vec3, Label, em, _dec, _class, _crd, ccclass, property, TipView;

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
      tween = _cc.tween;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39f4bK1+n9Lsp/dZy6C5YpZ", "TipView", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-08-11 09:31:53
       * @LastEditors: li_jiang_wei_12345 739671694@qq.com
       * @LastEditTime: 2022-09-08 14:21:13
       * @FilePath: \copy9train\assets\script\system\TipView.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Sprite', 'Color', 'Vec3', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TipView", TipView = (_dec = ccclass('TipView'), _dec(_class = class TipView extends Component {
        onLoad() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).add("tipsViewShow", this.tipsViewShow.bind(this));
        }

        onDestroy() {
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).remove("tipsViewShow");
        } //显示信息


        tipsViewShow(string = "请传参", time = 1) {
          this.node.children[0].getComponent(Label).string = string;
          let animT = .5;
          let t1 = tween().to(animT, {
            scale: new Vec3(1, 1, 1)
          }, {
            onUpdate: (target, ratio) => {
              let color = target.getComponent(Sprite).color;
              target.getComponent(Sprite).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 255), ratio);
            }
          });
          let t2 = tween().to(animT, {
            scale: new Vec3(1, 1, 1)
          }, {
            onUpdate: (target, ratio) => {
              let color = target.getComponent(Sprite).color;
              target.getComponent(Sprite).color = Color.lerp(new Color(), color, new Color(color.r, color.g, color.b, 0), ratio);
            }
          });
          let wait = tween().delay(time);
          let t = tween(this.node).sequence(t1, wait, t2);
          t.start();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=513f0ebb8fc71f3e44a1c8d50d586e0e682baa96.js.map