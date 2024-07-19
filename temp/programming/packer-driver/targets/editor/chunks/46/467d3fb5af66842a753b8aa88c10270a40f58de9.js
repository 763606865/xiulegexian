System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, find, instantiate, Label, Sprite, Color, NodePool, UITransform, SpriteFrame, Animation, Tween, tween, Vec3, em, glf, plm, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, SkillBookLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfem(extras) {
    _reporterNs.report("em", "../global/EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfglf(extras) {
    _reporterNs.report("glf", "../global/globalFun", _context.meta, extras);
  }

  function _reportPossibleCrUseOfplm(extras) {
    _reporterNs.report("plm", "../global/PoolManager", _context.meta, extras);
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
      Node = _cc.Node;
      find = _cc.find;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
      NodePool = _cc.NodePool;
      UITransform = _cc.UITransform;
      SpriteFrame = _cc.SpriteFrame;
      Animation = _cc.Animation;
      Tween = _cc.Tween;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      em = _unresolved_2.em;
    }, function (_unresolved_3) {
      glf = _unresolved_3.glf;
    }, function (_unresolved_4) {
      plm = _unresolved_4.plm;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cdb8SMhhdF5JZZxaW7u/Sm", "SkillBookLayer", undefined);
      /*
       * @Author: li_jiang_wei_12345 739671694@qq.com
       * @Date: 2022-09-19 14:16:09
       * @LastEditors: li_jiang_wei 739671694@qq.com
       * @LastEditTime: 2022-12-12 00:19:12
       * @FilePath: \to-be-immortal\assets\script\mainMenu\SkillBookLayer.ts
       * @Description: 
       * 
       * Copyright (c) 2022 by li_jiang_wei_12345 739671694@qq.com, All Rights Reserved. 
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'find', 'instantiate', 'Label', 'Sprite', 'Color', 'NodePool', 'UITransform', 'ColorKey', 'SpriteFrame', 'Animation', 'Tween', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SkillBookLayer", SkillBookLayer = (_dec = ccclass('SkillBookLayer'), _dec2 = property([SpriteFrame]), _dec3 = property(Node), _dec4 = property([SpriteFrame]), _dec(_class = (_class2 = class SkillBookLayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "typeSFs", _descriptor, this);

          _initializerDefineProperty(this, "guideFinger", _descriptor2, this);

          _initializerDefineProperty(this, "skillBg", _descriptor3, this);

          this._loadingList = {
            _skillBookClass: false,
            _skillBook: false
          };
          this._skillBookClass = void 0;
          this._skillBook = void 0;
          this._bookContent = void 0;
          this._curSelectBook = void 0;
          this._finishBookList = [];
          this._bookPrefabList = {};
          this._usingBookList = {
            "身法": "",
            "心法": "",
            "武技": "",
            "绝技": "",
            "神通": ""
          };
          this._guideRewardBookName = void 0;
          this._guideRewardBookType = void 0;
        }

        onLoad() {
          let prefab = find("switchBook/bookPrefab", this.node);
          (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
            error: Error()
          }), plm) : plm).addPoolToPools("SBLBookPrefab", new NodePool(), prefab);
          this._bookContent = find("ScrollView/view/content", this.node);
        }

        onEnable() {
          if (!(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData").SkillBookLayer) {
            this.startSkillBookLayerGuide();
          }

          this.updateBookListView();
        }

        start() {
          this.dynamicLoadPrefabs();
          this.initData();
          this.initUsingBook();
        } // 初始化数据


        initData() {
          let all = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getTempData", "SkillBookLayer");

          if (all) {
            this._finishBookList = all.finishBookList;
            this._usingBookList = all.usingBookList;
          }

          ;
        } // 动态加载预制件 注：或许需要添加loading...


        dynamicLoadPrefabs() {
          let dir1 = "prefabs/mainMenu/skillBookClass";
          let dir2 = "prefabs/mainMenu/skillBook";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", dir1, assets => {
            this._skillBookClass = assets;
            this._loadingList._skillBookClass = true;
            this.initBookListView();
          });
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", dir2, assets => {
            this._skillBook = assets;
            this._loadingList._skillBook = true;
            this.initBookListView();
          });
        } //初始化秘籍列表显示


        initBookListView() {
          if (!this.isCompleteLoading()) return;
          let list = this.getSkillBookClassList();

          for (const key in list) {
            if (Object.prototype.hasOwnProperty.call(list, key)) {
              const arr = list[key];
              let bookClass = instantiate(this._skillBookClass);
              bookClass.parent = this._bookContent; // bookClass.getChildByName("Label").getComponent(Label).string = key;

              switch (key) {
                case "绝技":
                  bookClass.getChildByName("type").getComponent(Sprite).spriteFrame = this.typeSFs[0];
                  break;

                case "秘法":
                  bookClass.getChildByName("type").getComponent(Sprite).spriteFrame = this.typeSFs[1];
                  break;

                case "身法":
                  bookClass.getChildByName("type").getComponent(Sprite).spriteFrame = this.typeSFs[2];
                  break;

                case "神通":
                  bookClass.getChildByName("type").getComponent(Sprite).spriteFrame = this.typeSFs[3];
                  break;

                case "武技":
                  bookClass.getChildByName("type").getComponent(Sprite).spriteFrame = this.typeSFs[4];
                  break;

                case "心法":
                  bookClass.getChildByName("type").getComponent(Sprite).spriteFrame = this.typeSFs[5];
                  break;

                default:
                  break;
              }

              arr.forEach(data => {
                let book = instantiate(this._skillBook);
                let loadUrl = "images/icons/icon_" + data.name2 + "/spriteFrame";
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => book.getChildByName("Sprite").getComponent(Sprite).spriteFrame = assets);

                if (this._finishBookList.indexOf(data.name) < 0) {
                  //未学习的功法
                  book.getComponent(Sprite).spriteFrame = this.skillBg[0];
                  book.getChildByName("Label").getComponent(Label).color = new Color(30, 30, 30, 255); // book.getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255, 255);

                  if ((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                    error: Error()
                  }), em) : em).dispatch("getItemTotalByIdOrName", data.name) > 0) {
                    let anim = book.getComponent(Animation);
                    this.scheduleOnce(() => {
                      anim.play();
                    }, 0);
                  }
                } else {
                  book.getComponent(Sprite).spriteFrame = this.skillBg[1]; // book.getChildByName("Label").getComponent(Label).color = new Color(255, 204, 0, 255);

                  book.getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255, 255); //判断功法是否可以学习 可以学习且没有学的情况下播放动画
                }

                book.getChildByName("Label").getComponent(Label).string = data.name;
                book.parent = find("/type/content", bookClass);
                (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                  error: Error()
                }), glf) : glf).createButton(this.node, book, "SkillBookLayer", "onBtnShowBookDetail", data.name);
                this._bookPrefabList[data.name] = book;
              }); // let total = Math.ceil(arr.length / 4);//4为适配结果，具体根据效果展示

              let total = Math.ceil(arr.length / 5); //5为适配结果，具体根据效果展示
              // let height = find("/type/content", bookClass).getComponent(UITransform).contentSize.y * total + find("/type", bookClass).getComponent(UITransform).contentSize.y;

              let height = 280 * total + find("/type", bookClass).getComponent(UITransform).contentSize.y; //120 skillBook 预制件的高度

              bookClass.getComponent(UITransform).setContentSize(bookClass.getComponent(UITransform).contentSize.width, height);
              console.log("height", height);
              console.log("contentSize.y", find("/type/content", bookClass).getComponent(UITransform).contentSize.y);
            }
          }

          if (!(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData").SkillBookLayer) {
            let book = this._bookPrefabList[this._guideRewardBookName];
            Tween.stopAllByTag(4);
            let guide = this.guideFinger;
            guide.active = true;
            guide.parent = book;
            guide.setPosition(0, 150, 0);
            let a1 = tween().by(0.5, {
              position: new Vec3(0, -100, 0)
            });
            let a2 = tween().by(0.5, {
              position: new Vec3(0, 100, 0)
            });
            let action = tween(guide).sequence(a1, a2);
            action = tween(guide).repeatForever(action);
            action.tag(4);
            action.start();
          }
        } // 刷新秘籍列表显示


        updateBookListView() {
          for (const key in this._bookPrefabList) {
            if (Object.prototype.hasOwnProperty.call(this._bookPrefabList, key)) {
              const book = this._bookPrefabList[key];

              if ((_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("getItemTotalByIdOrName", key) > 0 && this._finishBookList.indexOf(key) < 0) {
                let anim = book.getComponent(Animation);
                anim.play();
              }
            }
          }
        } // 是否完成加载


        isCompleteLoading() {
          for (const key in this._loadingList) {
            if (Object.prototype.hasOwnProperty.call(this._loadingList, key)) {
              const isEnd = this._loadingList[key];
              if (!isEnd) return false;
            }
          }

          return true;
        }
        /**
         * @description: 对获取的功法秘籍进行分类
         * @returns {object} 返回分类结果
         */


        getSkillBookClassList() {
          let all = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getAllAboutSkillBook"); // console.log("all", all);

          let list = {};
          all.forEach(book => {
            if (list.hasOwnProperty(book.type)) {
              list[book.type].push(book);
            } else {
              list[book.type] = [book];
            }
          });
          return list;
        } //显示功法秘籍详情


        onBtnShowBookDetail(e, p) {
          let node = find("bookDetail", this.node);
          let label = find("/bookDetail/study/Label", this.node).getComponent(Label);
          label.string = "领悟";
          node.active = true;
          this._curSelectBook = p;

          if (this._finishBookList.indexOf(this._curSelectBook) > -1) {
            label.string = "已掌握";
          }

          let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", p);
          console.log("onBtnShowBookDetail", data);
          node.getChildByName("bookName").getComponent(Label).string = data.name + "\n" + data.lv + "阶功法"; // node.getChildByName("bookDescription").getComponent(Label).string = data.description + "\n\n" + data.description2;

          node.getChildByName("bookDescription").getComponent(Label).string = "\n\n" + data.description;
        }

        closeBookDetail() {
          find("bookDetail", this.node).active = false;
        } // 学习秘籍


        onBtnStudyBook() {
          //判断秘籍是否已经学习
          if (this._finishBookList.indexOf(this._curSelectBook) > -1) {
            // em.dispatch("tipsViewShow", "已掌握该功法", 3);
            return;
          } // let flag = true;


          let flag = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("reduceItemFromSS", this._curSelectBook, 1);

          if (flag) {
            this._finishBookList.push(this._curSelectBook);

            find("/bookDetail/study/Label", this.node).getComponent(Label).string = "已掌握";
            let book = this._bookPrefabList[this._curSelectBook];
            let anim = book.getComponent(Animation);
            anim.stop();
            book.getComponent(Sprite).spriteFrame = this.skillBg[1]; // book.getChildByName("Label").getComponent(Label).color = new Color(255, 204, 0, 255);

            book.getChildByName("Label").getComponent(Label).color = new Color(255, 255, 255, 255);
            this.savingFinishBookData();

            if (!(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("getGuideData").SkillBookLayer) {
              this.startGuideSetSkill();
            }
          } else {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("tipsViewShow", "缺少秘籍:" + this._curSelectBook, 3);
          }

          console.log(this._finishBookList);
        } //记录已学习的功法


        savingFinishBookData() {
          let data = {
            finishBookList: this._finishBookList,
            usingBookList: this._usingBookList
          };
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("savingToTempData", "SkillBookLayer", data);
        } // 初始化携带功法


        initUsingBook() {
          // let node = find("usingBook",this.node);
          for (const type in this._usingBookList) {
            if (Object.prototype.hasOwnProperty.call(this._usingBookList, type)) {
              const skillName = this._usingBookList[type];

              if ("" !== skillName) {
                let sprite = find("usingBook/" + type, this.node).getChildByName("sprite").getComponent(Sprite);
                let loadUrl = "images/icons/icon_" + skillName + "/spriteFrame";
                (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                  error: Error()
                }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);
              }
            }
          }
        } //点击切换携带功法按钮


        onBtnSwitchBook(e, type) {
          console.log("切换" + type);
          find("switchBook", this.node).active = true;
          find("switchBook/bg/title", this.node).getComponent(Label).string = type; // let list = this.getSkillBookClassList()[p];

          this.initSwitchBook(type);
        } // 初始化切换秘籍界面


        initSwitchBook(type) {
          let par = find("switchBook/bg/content", this.node);
          this._finishBookList;

          this._finishBookList.forEach(bookName => {
            let data = (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("usingHeroBasePropertyFun", "getSkillBookDataByIdOrName", bookName);

            if (data.type == type) {
              // console.log(data);
              let prefab = (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
                error: Error()
              }), plm) : plm).getFromPool("SBLBookPrefab");
              let sprite = prefab.getComponent(Sprite);
              prefab.parent = par;
              prefab.getChildByName("name").getComponent(Label).string = data.name;
              let loadUrl = "images/icons/icon_" + data.name2 + "/spriteFrame";
              (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
                error: Error()
              }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);
              (_crd && glf === void 0 ? (_reportPossibleCrUseOfglf({
                error: Error()
              }), glf) : glf).createButton(this.node, prefab, "SkillBookLayer", "switchBook", type + "@" + data.name2);
            }

            ;
          });
        } // 切换携带功法


        switchBook(e, p) {
          console.log("p", p);

          if (!(_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("getGuideData").SkillBookLayer) {
            this.guideFinger.active = false;
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("setGuideData", "SkillBookLayer", true);
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("initMainMenuByGuideData");
          }

          let ps = p.split("@");
          let type = ps[0];
          let skillName = ps[1];
          let sprite = find("usingBook/" + type, this.node).getChildByName("sprite").getComponent(Sprite);
          let loadUrl = "images/icons/icon_" + skillName + "/spriteFrame";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("loadTheDirResources", loadUrl, assets => sprite.spriteFrame = assets);
          this._usingBookList[type] = skillName;
          console.log("this._usingBookList", this._usingBookList);
          this.closeSwitchBook();
          this.savingFinishBookData();
        }

        closeSwitchBook() {
          find("switchBook", this.node).active = false;
          let par = find("switchBook/bg/content", this.node);

          while (par.children.length) {
            let child = par.children[0];
            child.removeFromParent();
            (_crd && plm === void 0 ? (_reportPossibleCrUseOfplm({
              error: Error()
            }), plm) : plm).putToPool("SBLBookPrefab", child);
          }
        }

        startSkillBookLayerGuide() {
          let guideTips = "首次进入，随机获取一本一阶功法（剑雨术、一剑隔世和万剑归冢）。每次进入功法界面，如果看到不断闪烁的功法，则表明此功法可以掌握，请赶快领悟并使用。";
          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("openGuideTips", guideTips);
          find("Canvas/menuLayer/guideFinger").active = false;
          let random = Math.random();
          let tips;

          if (random > 0.7) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", "万剑归冢", 1);
            tips = "获得一阶功法：万剑归冢x1";
            this._guideRewardBookName = "万剑归冢";
            this._guideRewardBookType = "神通";
          } else if (random > 0.3) {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", "一剑隔世", 1);
            tips = "获得一阶功法：一剑隔世x1";
            this._guideRewardBookName = "一剑隔世";
            this._guideRewardBookType = "绝技";
          } else {
            (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
              error: Error()
            }), em) : em).dispatch("addItemToSS", "剑雨术", 1);
            tips = "获得一阶功法：剑雨术x1";
            this._guideRewardBookName = "剑雨术";
            this._guideRewardBookType = "武技";
          }

          (_crd && em === void 0 ? (_reportPossibleCrUseOfem({
            error: Error()
          }), em) : em).dispatch("tipsViewShow", tips);
        } // 开始引导设置技能


        startGuideSetSkill() {
          let par = find("Canvas/menuLayer/SkillBookLayer/usingBook/" + this._guideRewardBookType);
          Tween.stopAllByTag(4);
          let guide = this.guideFinger;
          guide.active = true;
          guide.parent = par;
          guide.setPosition(0, 150, 0);
          let a1 = tween().by(0.5, {
            position: new Vec3(0, -100, 0)
          });
          let a2 = tween().by(0.5, {
            position: new Vec3(0, 100, 0)
          });
          let action = tween(guide).sequence(a1, a2);
          action = tween(guide).repeatForever(action);
          action.tag(4);
          action.start();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "typeSFs", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "guideFinger", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "skillBg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=467d3fb5af66842a753b8aa88c10270a40f58de9.js.map