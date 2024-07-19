System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Obstacle, RVOMath, Simulator, Vector2, ObstacleTreeNode, AgentTreeNode, FloatPair, KdTree, _crd;

  function _reportPossibleCrUseOfAgent(extras) {
    _reporterNs.report("Agent", "./Agent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserverObj(extras) {
    _reporterNs.report("ObserverObj", "./commonDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObstacle(extras) {
    _reporterNs.report("Obstacle", "./Obstacle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRVOMath(extras) {
    _reporterNs.report("RVOMath", "./RVOMath", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSimulator(extras) {
    _reporterNs.report("Simulator", "./Simulator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector2", "./Vector2", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Obstacle = _unresolved_2.default;
    }, function (_unresolved_3) {
      RVOMath = _unresolved_3.default;
    }, function (_unresolved_4) {
      Simulator = _unresolved_4.default;
    }, function (_unresolved_5) {
      Vector2 = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7407QBpWlOnaiR+sD4b0nc", "KdTree", undefined);

      ObstacleTreeNode = class ObstacleTreeNode {
        constructor() {
          this.obstacle_ = void 0;
          this.left_ = void 0;
          this.right_ = void 0;
        }

      };
      AgentTreeNode = class AgentTreeNode {
        constructor() {
          this.begin_ = void 0;
          this.end_ = void 0;
          this.left_ = void 0;
          this.right_ = void 0;
          this.maxX_ = void 0;
          this.maxY_ = void 0;
          this.minX_ = void 0;
          this.minY_ = void 0;
        }

      };
      FloatPair = class FloatPair {
        constructor(a, b) {
          this.a_ = void 0;
          this.b_ = void 0;
          this.a_ = a;
          this.b_ = b;
        }
        /**
         * 小于
         * @param pair1 
         * @param pair2 
         * @returns 
         */


        static Lessthan(pair1, pair2) {
          return pair1.a_ < pair2.a_ || !(pair2.a_ < pair1.a_) && pair1.b_ < pair2.b_;
        }
        /**
         * 小于等于
         * @param pair1 
         * @param pair2 
         * @returns 
         */


        static LessthanOrEqual(pair1, pair2) {
          return pair1.a_ == pair2.a_ && pair1.b_ == pair2.b_ || FloatPair.Lessthan(pair1, pair2);
        }
        /**
         * 大于
         * @param pair1 
         * @param pair2 
         * @returns 
         */


        static Morethan(pair1, pair2) {
          return !FloatPair.LessthanOrEqual(pair1, pair2);
        }
        /**
         * 大于等于
         * @param pair1 
         * @param pair2 
         * @returns 
         */


        static MorethanOrEqual(pair1, pair2) {
          return !FloatPair.Lessthan(pair1, pair2);
        }

      };

      _export("default", KdTree = class KdTree {
        constructor() {
          this.agents_ = void 0;
          this.obstacleTree_ = void 0;
          this.agentTree_ = void 0;
          this.MAX_LEAF_SIZE = 10;
        }

        buildAgentTree() {
          if (this.agents_ == null || this.agents_.length != (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.agents_.length) {
            this.agents_ = new Array((_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
              error: Error()
            }), Simulator) : Simulator).Instance.agents_.length);

            for (var i = 0; i < this.agents_.length; ++i) {
              this.agents_[i] = (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
                error: Error()
              }), Simulator) : Simulator).Instance.agents_[i];
            }

            this.agentTree_ = [];
            var len = 2 * this.agents_.length;

            for (var _i = 0; _i < len; ++_i) {
              this.agentTree_[_i] = new AgentTreeNode();
            }
          }

          if (this.agents_.length != 0) {
            this.buildAgentTreeRecursive(0, this.agents_.length, 0);
          }
        }

        buildAgentTreeRecursive(begin, end, node) {
          this.agentTree_[node].begin_ = begin;
          this.agentTree_[node].end_ = end;
          this.agentTree_[node].minX_ = this.agentTree_[node].maxX_ = this.agents_[begin].position_.x;
          this.agentTree_[node].minY_ = this.agentTree_[node].maxY_ = this.agents_[begin].position_.y;

          for (var i = begin + 1; i < end; ++i) {
            this.agentTree_[node].maxX_ = Math.max(this.agentTree_[node].maxX_, this.agents_[i].position_.x);
            this.agentTree_[node].minX_ = Math.min(this.agentTree_[node].minX_, this.agents_[i].position_.x);
            this.agentTree_[node].maxY_ = Math.max(this.agentTree_[node].maxY_, this.agents_[i].position_.y);
            this.agentTree_[node].minY_ = Math.min(this.agentTree_[node].minY_, this.agents_[i].position_.y);
          }

          if (end - begin > this.MAX_LEAF_SIZE) {
            var isVertical = this.agentTree_[node].maxX_ - this.agentTree_[node].minX_ > this.agentTree_[node].maxY_ - this.agentTree_[node].minY_;
            var splitValue = 0.5 * (isVertical ? this.agentTree_[node].maxX_ + this.agentTree_[node].minX_ : this.agentTree_[node].maxY_ + this.agentTree_[node].minY_);
            var left = begin;
            var right = end;

            while (left < right) {
              while (left < right && (isVertical ? this.agents_[left].position_.x : this.agents_[left].position_.y) < splitValue) {
                ++left;
              }

              while (right > left && (isVertical ? this.agents_[right - 1].position_.x : this.agents_[right - 1].position_.y) >= splitValue) {
                --right;
              }

              if (left < right) {
                var tempAgent = this.agents_[left];
                this.agents_[left] = this.agents_[right - 1];
                this.agents_[right - 1] = tempAgent;
                ++left;
                --right;
              }
            }

            var leftSize = left - begin;

            if (leftSize == 0) {
              ++leftSize;
              ++left;
              ++right;
            }

            this.agentTree_[node].left_ = node + 1;
            this.agentTree_[node].right_ = node + 2 * leftSize;
            this.buildAgentTreeRecursive(begin, left, this.agentTree_[node].left_);
            this.buildAgentTreeRecursive(left, end, this.agentTree_[node].right_);
          }
        }

        buildObstacleTree() {
          this.obstacleTree_ = new ObstacleTreeNode();
          var num = (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.obstacles_.length;
          var obstacles = [];

          for (var i = 0; i < num; ++i) {
            obstacles[obstacles.length] = (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
              error: Error()
            }), Simulator) : Simulator).Instance.obstacles_[i];
          }

          this.obstacleTree_ = this.buildObstacleTreeRecursive(obstacles);
        }

        buildObstacleTreeRecursive(obstacles) {
          if (!obstacles || obstacles.length == 0) return;
          var node = new ObstacleTreeNode();
          var optimalSplit = 0;
          var minLeft = obstacles.length;
          var minRight = obstacles.length;

          for (var _i2 = 0; _i2 < obstacles.length; ++_i2) {
            var leftSize = 0;
            var rightSize = 0;
            var _obstacleI = obstacles[_i2];
            var _obstacleI2 = _obstacleI.next_;

            for (var j = 0; j < obstacles.length; ++j) {
              if (_i2 == j) {
                continue;
              }

              var obstacleJ1 = obstacles[j];
              var obstacleJ2 = obstacleJ1.next_;
              var j1LeftOfI = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).leftOf(_obstacleI.point_, _obstacleI2.point_, obstacleJ1.point_);
              var j2LeftOfI = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).leftOf(_obstacleI.point_, _obstacleI2.point_, obstacleJ2.point_);

              if (j1LeftOfI >= -(_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).RVO_EPSILON && j2LeftOfI >= -(_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).RVO_EPSILON) {
                ++leftSize;
              } else if (j1LeftOfI <= (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).RVO_EPSILON && j2LeftOfI <= (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).RVO_EPSILON) {
                ++rightSize;
              } else {
                ++leftSize;
                ++rightSize;
              }

              if (FloatPair.MorethanOrEqual(new FloatPair(Math.max(leftSize, rightSize), Math.min(leftSize, rightSize)), new FloatPair(Math.max(minLeft, minRight), Math.min(minLeft, minRight)))) {
                break;
              }
            }

            if (FloatPair.Lessthan(new FloatPair(Math.max(leftSize, rightSize), Math.min(leftSize, rightSize)), new FloatPair(Math.max(minLeft, minRight), Math.min(minLeft, minRight)))) {
              minLeft = leftSize;
              minRight = rightSize;
              optimalSplit = _i2;
            }
          }

          var leftObstacles = new Array(minLeft);
          var rightObstacles = new Array(minRight);
          var leftCounter = 0;
          var rightCounter = 0;
          var i = optimalSplit;
          var obstacleI1 = obstacles[i];
          var obstacleI2 = obstacleI1.next_;

          for (var _j = 0; _j < obstacles.length; ++_j) {
            if (i == _j) {
              continue;
            }

            var _obstacleJ = obstacles[_j];
            var _obstacleJ2 = _obstacleJ.next_;

            var _j1LeftOfI = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).leftOf(obstacleI1.point_, obstacleI2.point_, _obstacleJ.point_);

            var _j2LeftOfI = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).leftOf(obstacleI1.point_, obstacleI2.point_, _obstacleJ2.point_);

            if (_j1LeftOfI >= -(_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_EPSILON && _j2LeftOfI >= -(_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_EPSILON) {
              leftObstacles[leftCounter++] = obstacles[_j];
            } else if (_j1LeftOfI <= (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_EPSILON && _j2LeftOfI <= (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_EPSILON) {
              rightObstacles[rightCounter++] = obstacles[_j];
            } else {
              var t = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).det((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(obstacleI2.point_, obstacleI1.point_), (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(_obstacleJ.point_, obstacleI1.point_)) / (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).det((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(obstacleI2.point_, obstacleI1.point_), (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(_obstacleJ.point_, _obstacleJ2.point_));
              var splitPoint = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(_obstacleJ.point_, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(t, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(_obstacleJ2.point_, _obstacleJ.point_)));
              var newObstacle = new (_crd && Obstacle === void 0 ? (_reportPossibleCrUseOfObstacle({
                error: Error()
              }), Obstacle) : Obstacle)();
              newObstacle.point_ = splitPoint;
              newObstacle.previous_ = _obstacleJ;
              newObstacle.next_ = _obstacleJ2;
              newObstacle.convex_ = true;
              newObstacle.direction_ = _obstacleJ.direction_;
              newObstacle.id_ = (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
                error: Error()
              }), Simulator) : Simulator).Instance.obstacles_.length;
              (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
                error: Error()
              }), Simulator) : Simulator).Instance.obstacles_.push(newObstacle);
              _obstacleJ.next_ = newObstacle;
              _obstacleJ2.previous_ = newObstacle;

              if (_j1LeftOfI > 0.0) {
                leftObstacles[leftCounter++] = _obstacleJ;
                rightObstacles[rightCounter++] = newObstacle;
              } else {
                rightObstacles[rightCounter++] = _obstacleJ;
                leftObstacles[leftCounter++] = newObstacle;
              }
            }
          }

          node.obstacle_ = obstacleI1;
          node.left_ = this.buildObstacleTreeRecursive(leftObstacles);
          node.right_ = this.buildObstacleTreeRecursive(rightObstacles);
          return node;
        }

        computeObstacleNeighbors(agent, rangeSq) {
          this.queryObstacleTreeRecursive(agent, rangeSq, this.obstacleTree_);
        }

        queryObstacleTreeRecursive(agent, rangeSq, node) {
          if (!agent || !node) return;
          var obstacle1 = node.obstacle_;
          var obstacle2 = obstacle1.next_;
          var agentLeftOfLine = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).leftOf(obstacle1.point_, obstacle2.point_, agent.position_);
          this.queryObstacleTreeRecursive(agent, rangeSq, agentLeftOfLine >= 0 ? node.left_ : node.right_);
          var distSqLine = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(agentLeftOfLine) / (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).subtract(obstacle2.point_, obstacle1.point_));

          if (distSqLine < rangeSq) {
            if (agentLeftOfLine < 0) {
              agent.insertObstacleNeighbor(node.obstacle_, rangeSq);
            }

            this.queryObstacleTreeRecursive(agent, rangeSq, agentLeftOfLine >= 0 ? node.right_ : node.left_);
          }
        }

        computeAgentNeighbors(agent, obserObj) {
          this.queryAgentTreeRecursive(agent, obserObj, 0);
        }

        queryAgentTreeRecursive(agent, obserObj, node) {
          var agentTree = this.agentTree_[node];

          if (agentTree.end_ - agentTree.begin_ <= this.MAX_LEAF_SIZE) {
            for (var i = agentTree.begin_; i < agentTree.end_; ++i) {
              agent.insertAgentNeighbor(this.agents_[i], obserObj);
            }
          } else {
            var distSqLeft = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(Math.max(0, this.agentTree_[this.agentTree_[node].left_].minX_ - agent.position_.x)) + (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(Math.max(0, agent.position_.x - this.agentTree_[this.agentTree_[node].left_].maxX_)) + (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(Math.max(0, this.agentTree_[this.agentTree_[node].left_].minY_ - agent.position_.y)) + (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(Math.max(0, agent.position_.y - this.agentTree_[this.agentTree_[node].left_].maxY_)); // let distSqRight = RVOMath.sqr(Math.max(0, this.agentTree_[this.agentTree_[node].right_].minX_ - agent.position_.x)) + RVOMath.sqr(Math.max(0, agent.position_.x - this.agentTree_[this.agentTree_[node].right_].maxX_)) + RVOMath.sqr(Math.max(0, this.agentTree_[this.agentTree_[node].right_].minY_ - agent.position_.y)) + RVOMath.sqr(Math.max(0, agent.position_.y - this.agentTree_[this.agentTree_[node].right_].maxY_));

            var treeNode = this.agentTree_[this.agentTree_[node].right_];
            var distSqRight_1 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(Math.max(0, treeNode.minX_ - agent.position_.x));
            var distSqRight_2 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(Math.max(0, agent.position_.x - treeNode.maxX_));
            var distSqRight_3 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(Math.max(0, treeNode.minY_ - agent.position_.y));
            var distSqRight_4 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(Math.max(0, agent.position_.y - treeNode.maxY_));
            var distSqRight = distSqRight_1 + distSqRight_2 + distSqRight_3 + distSqRight_4;

            if (distSqLeft < distSqRight) {
              if (distSqLeft < obserObj.value) {
                this.queryAgentTreeRecursive(agent, obserObj, this.agentTree_[node].left_);

                if (distSqRight < obserObj.value) {
                  this.queryAgentTreeRecursive(agent, obserObj, this.agentTree_[node].right_);
                }
              }
            } else {
              if (distSqRight < obserObj.value) {
                this.queryAgentTreeRecursive(agent, obserObj, this.agentTree_[node].right_);

                if (distSqLeft < obserObj.value) {
                  this.queryAgentTreeRecursive(agent, obserObj, this.agentTree_[node].left_);
                }
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3c61f4562ae47f8490a3ccc5fa0d81e099d9fd7f.js.map