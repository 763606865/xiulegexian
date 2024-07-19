System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Queue, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "54a10/Onh9HBJIkeKY3XN7P", "Queue", undefined);

      _export("Queue", Queue = class Queue {
        constructor() {
          this.list = [];
        }

        enqueue(data) {
          this.list.push(data);
        }

        dequeue() {
          //出队
          if (this.empty()) {
            console.log("无法出队");
            return false;
          }

          return this.list.shift();
        }

        front() {
          //查看/获取队首元素
          if (this.empty()) {
            console.log("无法查看");
          }

          return this.list[0];
        }

        back() {
          //查看/获取队尾元素
          if (this.empty()) {
            console.log("无法查看");
          }

          return this.list[this.list.length - 1];
        }

        toString() {
          //显示队列所有元素
          return this.list.join('\n');
        }

        clear() {
          delete this.list;
          this.list = [];
        } //清空当前队列


        empty() {
          if (this.list.length === 0) {
            console.log("队列为空");
            return true;
          }
        } //判断当前队列是否为空


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1b0f5bef334babe1502b2194c9ee86e27d3dddcb.js.map