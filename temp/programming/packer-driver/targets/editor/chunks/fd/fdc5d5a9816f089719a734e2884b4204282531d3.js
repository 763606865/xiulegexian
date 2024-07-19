System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, KeyValuePair, ObserverObj, Line, RVOMath, Simulator, Vector2, Agent, _crd;

  function _reportPossibleCrUseOfKeyValuePair(extras) {
    _reporterNs.report("KeyValuePair", "./commonDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObserverObj(extras) {
    _reporterNs.report("ObserverObj", "./commonDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLine(extras) {
    _reporterNs.report("Line", "./Line", _context.meta, extras);
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
      KeyValuePair = _unresolved_2.KeyValuePair;
      ObserverObj = _unresolved_2.ObserverObj;
    }, function (_unresolved_3) {
      Line = _unresolved_3.default;
    }, function (_unresolved_4) {
      RVOMath = _unresolved_4.default;
    }, function (_unresolved_5) {
      Simulator = _unresolved_5.default;
    }, function (_unresolved_6) {
      Vector2 = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d8246SaSchO063ebx7y7tLI", "Agent", undefined);

      _export("default", Agent = class Agent {
        constructor() {
          this.agentNeighbors_ = [];
          this.obstacleNeighbors_ = [];
          this.orcaLines_ = [];
          this.position_ = void 0;
          this.prefVelocity_ = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2)(0, 0);
          this.velocity_ = void 0;
          this.id_ = void 0;
          this.maxNeighbors_ = void 0;
          this.maxSpeed_ = void 0;
          this.neighborDist_ = void 0;
          this.radius_ = void 0;
          this.timeHorizon_ = void 0;
          this.timeHorizonObst_ = void 0;
          this.needDelete_ = false;
          this.newVelocity_ = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2)(0, 0);
        }

        update() {
          this.velocity_ = this.newVelocity_;
          let v2 = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).addition(this.position_, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).multiply2((_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.timeStep_, this.velocity_));
          this.position_ = v2;
        }

        insertObstacleNeighbor(obstacle, rangeSq) {
          let nextObstacle = obstacle.next_;
          let distSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).distSqPointLineSegment(obstacle.point_, nextObstacle.point_, this.position_);

          if (distSq < rangeSq) {
            this.obstacleNeighbors_.push(new (_crd && KeyValuePair === void 0 ? (_reportPossibleCrUseOfKeyValuePair({
              error: Error()
            }), KeyValuePair) : KeyValuePair)(distSq, obstacle));
            let i = this.obstacleNeighbors_.length - 1;

            while (i != 0 && distSq < this.obstacleNeighbors_[i - 1].Key) {
              this.obstacleNeighbors_[i] = this.obstacleNeighbors_[i - 1];
              --i;
            }

            this.obstacleNeighbors_[i] = new (_crd && KeyValuePair === void 0 ? (_reportPossibleCrUseOfKeyValuePair({
              error: Error()
            }), KeyValuePair) : KeyValuePair)(distSq, obstacle);
          }
        }

        insertAgentNeighbor(agent, rangeSq) {
          if (agent && this != agent) {
            let distSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(this.position_, agent.position_));

            if (distSq < rangeSq.value) {
              if (this.agentNeighbors_.length < this.maxNeighbors_) {
                this.agentNeighbors_.push(new (_crd && KeyValuePair === void 0 ? (_reportPossibleCrUseOfKeyValuePair({
                  error: Error()
                }), KeyValuePair) : KeyValuePair)(distSq, agent));
              }

              let i = this.agentNeighbors_.length - 1;

              while (i != 0 && distSq < this.agentNeighbors_[i - 1].Key) {
                this.agentNeighbors_[i] = this.agentNeighbors_[i - 1];
                --i;
              }

              this.agentNeighbors_[i] = new (_crd && KeyValuePair === void 0 ? (_reportPossibleCrUseOfKeyValuePair({
                error: Error()
              }), KeyValuePair) : KeyValuePair)(distSq, agent);

              if (this.agentNeighbors_.length == this.maxNeighbors_) {
                rangeSq.value = this.agentNeighbors_[this.agentNeighbors_.length - 1].Key;
              }
            }
          }
        }

        computeNeighbors() {
          this.obstacleNeighbors_ = [];
          let rangeSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(this.timeHorizonObst_ * this.maxSpeed_ + this.radius_);
          (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
            error: Error()
          }), Simulator) : Simulator).Instance.kdTree_.computeObstacleNeighbors(this, rangeSq);
          this.agentNeighbors_ = [];

          if (this.maxNeighbors_ > 0) {
            let obserObj = new (_crd && ObserverObj === void 0 ? (_reportPossibleCrUseOfObserverObj({
              error: Error()
            }), ObserverObj) : ObserverObj)();
            obserObj.value = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(this.neighborDist_);
            (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
              error: Error()
            }), Simulator) : Simulator).Instance.kdTree_.computeAgentNeighbors(this, obserObj);
          }
        }

        computeNewVelocity() {
          this.orcaLines_ = [];
          let invTimeHorizonObst = 1 / this.timeHorizonObst_;

          for (let i = 0; i < this.obstacleNeighbors_.length; ++i) {
            let obstacle1 = this.obstacleNeighbors_[i].Value;
            let obstacle2 = obstacle1.next_;
            let relativePosition1 = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(obstacle1.point_, this.position_);
            let relativePosition2 = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(obstacle2.point_, this.position_);
            let alreadyCovered = false;

            for (let j = 0; j < this.orcaLines_.length; ++j) {
              if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).det((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(invTimeHorizonObst, relativePosition1), this.orcaLines_[j].point), this.orcaLines_[j].direction) - invTimeHorizonObst * this.radius_ >= -(_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).RVO_EPSILON && (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).det((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(invTimeHorizonObst, relativePosition2), this.orcaLines_[j].point), this.orcaLines_[j].direction) - invTimeHorizonObst * this.radius_ >= -(_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).RVO_EPSILON) {
                alreadyCovered = true;
                break;
              }
            }

            if (alreadyCovered) {
              continue;
            }

            let distSq1 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq(relativePosition1);
            let distSq2 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq(relativePosition2);
            let radiusSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(this.radius_);
            let obstacleVector = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(obstacle2.point_, obstacle1.point_);
            let s = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(-1, relativePosition1), obstacleVector) / (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq(obstacleVector);
            let distSqLine = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(-1, relativePosition1), (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(s, obstacleVector)));
            let line = new (_crd && Line === void 0 ? (_reportPossibleCrUseOfLine({
              error: Error()
            }), Line) : Line)();

            if (s < 0 && distSq1 <= radiusSq) {
              if (obstacle1.convex_) {
                line.point = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(0, 0);
                line.direction = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).normalize(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(-relativePosition1.y, relativePosition1.x));
                this.orcaLines_.push(line);
              }

              continue;
            } else if (s > 1 && distSq2 <= radiusSq) {
              if (obstacle2.convex_ && (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).det(relativePosition2, obstacle2.direction_) >= 0) {
                line.point = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(0, 0);
                line.direction = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).normalize(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(-relativePosition2.y, relativePosition2.x));
                this.orcaLines_.push(line);
              }

              continue;
            } else if (s >= 0 && s < 1 && distSqLine <= radiusSq) {
              line.point = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(0, 0);
              line.direction = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(-1, obstacle1.direction_);
              this.orcaLines_.push(line);
              continue;
            }

            let leftLegDirection, rightLegDirection;

            if (s < 0 && distSqLine <= radiusSq) {
              if (!obstacle1.convex_) continue;
              obstacle2 = obstacle1;
              let leg1 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).sqrt(distSq1 - radiusSq);
              leftLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(relativePosition1.x * leg1 - relativePosition1.y * this.radius_, relativePosition1.x * this.radius_ + relativePosition1.y * leg1), distSq1);
              rightLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(relativePosition1.x * leg1 + relativePosition1.y * this.radius_, -relativePosition1.x * this.radius_ + relativePosition1.y * leg1), distSq1);
            } else if (s > 1 && distSqLine <= radiusSq) {
              if (!obstacle2.convex_) continue;
              obstacle1 = obstacle2;
              let leg2 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).sqrt(distSq2 - radiusSq);
              leftLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(relativePosition2.x * leg2 - relativePosition2.y * this.radius_, relativePosition2.x * this.radius_ + relativePosition2.y * leg2), distSq2);
              rightLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(relativePosition2.x * leg2 + relativePosition2.y * this.radius_, -relativePosition2.x * this.radius_ + relativePosition2.y * leg2), distSq2);
            } else {
              if (obstacle1.convex_) {
                let leg1 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).sqrt(distSq1 - radiusSq);
                leftLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(relativePosition1.x * leg1 - relativePosition1.y * this.radius_, relativePosition1.x * this.radius_ + relativePosition1.y * leg1), distSq1);
              } else {
                leftLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).multiply2(-1, obstacle1.direction_);
              }

              if (obstacle2.convex_) {
                let leg2 = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).sqrt(distSq2 - radiusSq);
                rightLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(relativePosition2.x * leg2 - relativePosition2.y * this.radius_, relativePosition2.x * this.radius_ + relativePosition2.y * leg2), distSq2);
              } else {
                //这个地方我不太确定是不是写错了，原文是用的obstacle1.direction_
                rightLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).multiply2(-1, obstacle1.direction_);
              }
            }

            let leftNeighbor = obstacle1.previous_;
            let isLeftLegForeign = false;
            let isRightLegForeign = false;

            if (obstacle1.convex_ && (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(leftLegDirection, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(-1, leftNeighbor.direction_)) >= 0) {
              leftLegDirection = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(-1, leftNeighbor.direction_);
              isLeftLegForeign = true;
            }

            if (obstacle2.convex_ && (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(rightLegDirection, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(-1, obstacle2.direction_)) <= 0) {
              rightLegDirection = obstacle2.direction_;
              isRightLegForeign = true;
            }

            let leftCutOff = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(invTimeHorizonObst, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(obstacle1.point_, this.position_));
            let rightCutOff = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(invTimeHorizonObst, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(obstacle2.point_, this.position_));
            let cutOffVector = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(rightCutOff, leftCutOff);
            let t = obstacle1 == obstacle2 ? 0.5 : (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(this.velocity_, leftCutOff), cutOffVector) / (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq(cutOffVector);
            let tLeft = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(this.velocity_, leftCutOff), leftLegDirection);
            let tRight = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(this.velocity_, rightCutOff), rightLegDirection);

            if (t < 0 && tLeft < 0 || obstacle1 == obstacle2 && tLeft < 0 && tRight < 0) {
              let unitW = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).normalize((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(this.velocity_, leftCutOff));
              line.direction = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(unitW.y, -unitW.x);
              line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(leftCutOff, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(this.radius_ * invTimeHorizonObst, unitW));
              this.orcaLines_.push(line);
              continue;
            } else if (t > 1 && tRight < 0) {
              let unitW = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).normalize((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(this.velocity_, rightCutOff));
              line.direction = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(unitW.y, -unitW.x);
              line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(rightCutOff, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(this.radius_ * invTimeHorizonObst, unitW));
              this.orcaLines_.push(line);
              continue;
            }

            let distSqCutoff = t < 0 || t > 1 || obstacle1 == obstacle2 ? (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_POSITIVEINFINITY : (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(this.velocity_, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).addition(leftCutOff, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(t, cutOffVector))));
            let distSqLeft = tLeft < 0 ? (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_POSITIVEINFINITY : (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(this.velocity_, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).addition(leftCutOff, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(tLeft, leftLegDirection))));
            let distSqRight = tRight < 0 ? (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_POSITIVEINFINITY : (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(this.velocity_, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).addition(rightCutOff, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(tRight, rightLegDirection))));

            if (distSqCutoff <= distSqLeft && distSqCutoff <= distSqRight) {
              line.direction = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(-1, obstacle1.direction_);
              line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(leftCutOff, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(this.radius_ * invTimeHorizonObst, new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(-line.direction.y, line.direction.x)));
              this.orcaLines_.push(line);
              continue;
            }

            if (distSqLeft <= distSqRight) {
              if (isLeftLegForeign) continue;
              line.direction = leftLegDirection;
              line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(leftCutOff, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(this.radius_ * invTimeHorizonObst, new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(-line.direction.y, line.direction.x)));
              this.orcaLines_.push(line);
              continue;
            }

            if (isRightLegForeign) continue;
            line.direction = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(-1, rightLegDirection);
            line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).addition(rightCutOff, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(this.radius_ * invTimeHorizonObst, new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2)(-line.direction.y, line.direction.x)));
            this.orcaLines_.push(line);
          }

          let numObstLines = this.orcaLines_.length;
          let invTimeHorizon = 1.0 / this.timeHorizon_;

          for (let i = 0; i < this.agentNeighbors_.length; ++i) {
            let other = this.agentNeighbors_[i].Value;
            if (!other) continue;
            let relativePosition = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(other.position_, this.position_);
            let relativeVelocity = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(this.velocity_, other.velocity_);
            let distSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).absSq(relativePosition);
            let combinedRadius = this.radius_ + other.radius_;
            let combinedRadiusSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).sqr(combinedRadius);
            let line = new (_crd && Line === void 0 ? (_reportPossibleCrUseOfLine({
              error: Error()
            }), Line) : Line)();
            let u = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2)();

            if (distSq > combinedRadiusSq) {
              let w = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(relativeVelocity, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(invTimeHorizon, relativePosition));
              let wLengthSq = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).absSq(w);
              let dotProduct1 = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply(w, relativePosition);

              if (dotProduct1 < 0 && (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).sqr(dotProduct1) > combinedRadiusSq * wLengthSq) {
                let wLength = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).sqrt(wLengthSq);
                let unitW = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).division(w, wLength);
                line.direction = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2)(unitW.y, -unitW.x);
                u = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).multiply2(combinedRadius * invTimeHorizon - wLength, unitW);
              } else {
                let leg = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).sqrt(distSq - combinedRadiusSq);

                if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).det(relativePosition, w) > 0) {
                  line.direction = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2)(relativePosition.x * leg - relativePosition.y * combinedRadius, relativePosition.x * combinedRadius + relativePosition.y * leg), distSq);
                } else {
                  line.direction = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).division(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2)(relativePosition.x * leg + relativePosition.y * combinedRadius, -relativePosition.x * combinedRadius + relativePosition.y * leg), -distSq);
                }

                let dotProduct2 = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).multiply(relativeVelocity, line.direction);
                u = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).subtract((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).multiply2(dotProduct2, line.direction), relativeVelocity);
              }
            } else {
              let invTimeStep = 1 / (_crd && Simulator === void 0 ? (_reportPossibleCrUseOfSimulator({
                error: Error()
              }), Simulator) : Simulator).Instance.timeStep_;
              let w = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(relativeVelocity, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(invTimeStep, relativePosition));
              let wLength = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).abs(w);
              let unitW = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).division(w, wLength);
              line.direction = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(unitW.y, -unitW.x);
              u = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(combinedRadius * invTimeStep - wLength, unitW);
            }

            line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).addition(this.velocity_, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(0.5, u));
            this.orcaLines_[this.orcaLines_.length] = line;
          }

          let tempVelocity_ = new (_crd && ObserverObj === void 0 ? (_reportPossibleCrUseOfObserverObj({
            error: Error()
          }), ObserverObj) : ObserverObj)(new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2)(this.newVelocity_.x, this.newVelocity_.y));
          let lineFail = this.linearProgram2(this.orcaLines_, this.maxSpeed_, this.prefVelocity_, false, tempVelocity_);

          if (lineFail < this.orcaLines_.length) {
            this.linearProgram3(this.orcaLines_, numObstLines, lineFail, this.maxSpeed_, tempVelocity_);
          }

          this.newVelocity_ = tempVelocity_.value;
        }

        linearProgram1(lines, lineNo, radius, optVelocity, directionOpt, result) {
          let dotProduct = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).multiply(lines[lineNo].point, lines[lineNo].direction);
          let discriminant = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(dotProduct) + (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(radius) - (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).absSq(lines[lineNo].point);

          if (discriminant < 0) {
            return false;
          }

          let sqrtDiscriminant = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqrt(discriminant);
          let tLeft = -dotProduct - sqrtDiscriminant;
          let tRight = -dotProduct + sqrtDiscriminant;

          for (let i = 0; i < lineNo; ++i) {
            let denominator = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(lines[lineNo].direction, lines[i].direction);
            let numerator = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(lines[i].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(lines[lineNo].point, lines[i].point));

            if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).fabs(denominator) <= (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).RVO_EPSILON) {
              if (numerator < 0) {
                return false;
              }

              continue;
            }

            let t = numerator / denominator;

            if (denominator > 0) {
              tRight = Math.min(tRight, t);
            } else {
              tLeft = Math.max(tLeft, t);
            }

            if (tLeft > tRight) {
              return false;
            }
          }

          if (directionOpt) {
            if ((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply(optVelocity, lines[lineNo].direction) > 0) {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(tRight, lines[lineNo].direction));
            } else {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(tLeft, lines[lineNo].direction));
            }
          } else {
            let t = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply(lines[lineNo].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(optVelocity, lines[lineNo].point));

            if (t < tLeft) {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(tLeft, lines[lineNo].direction));
            } else if (t > tRight) {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(tRight, lines[lineNo].direction));
            } else {
              result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).addition(lines[lineNo].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).multiply2(t, lines[lineNo].direction));
            }
          }

          return true;
        }

        linearProgram2(lines, radius, optVelocity, directionOpt, result) {
          if (directionOpt) {
            result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(radius, optVelocity);
          } else if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).absSq(optVelocity) > (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
            error: Error()
          }), RVOMath) : RVOMath).sqr(radius)) {
            result.value = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).multiply2(radius, (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).normalize(optVelocity));
          } else {
            result.value = optVelocity;
          }

          for (let i = 0; i < lines.length; ++i) {
            if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(lines[i].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(lines[i].point, result.value)) > 0) {
              let tempResult = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(result.value.x, result.value.y);

              if (!this.linearProgram1(lines, i, radius, optVelocity, directionOpt, result)) {
                result.value = tempResult;
                return i;
              }
            }
          }

          return lines.length;
        }

        linearProgram3(lines, numObstLines, beginLine, radius, result) {
          let distance = 0;

          for (let i = beginLine; i < lines.length; ++i) {
            if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).det(lines[i].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(lines[i].point, result.value)) > distance) {
              let projLines = [];

              for (let ii = 0; ii < numObstLines; ++ii) {
                projLines[projLines.length] = lines[ii];
              }

              for (let j = numObstLines; j < i; ++j) {
                let line = new (_crd && Line === void 0 ? (_reportPossibleCrUseOfLine({
                  error: Error()
                }), Line) : Line)();
                let determinant = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).det(lines[i].direction, lines[j].direction);

                if ((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).fabs(determinant) <= (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).RVO_EPSILON) {
                  if ((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).multiply(lines[i].direction, lines[j].direction) > 0.0) {
                    continue;
                  } else {
                    line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                      error: Error()
                    }), Vector2) : Vector2).multiply2(0.5, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                      error: Error()
                    }), Vector2) : Vector2).addition(lines[i].point, lines[j].point));
                  }
                } else {
                  line.point = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).addition(lines[i].point, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).multiply2((_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                    error: Error()
                  }), RVOMath) : RVOMath).det(lines[j].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                    error: Error()
                  }), Vector2) : Vector2).subtract(lines[i].point, lines[j].point)) / determinant, lines[i].direction));
                }

                line.direction = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                  error: Error()
                }), RVOMath) : RVOMath).normalize((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                  error: Error()
                }), Vector2) : Vector2).subtract(lines[j].direction, lines[i].direction));
                projLines[projLines.length] = line;
              }

              let tempResult = new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(result.value.x, result.value.y);

              if (this.linearProgram2(projLines, radius, new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2)(-lines[i].direction.y, lines[i].direction.x), true, result) < projLines.length) {
                result.value = tempResult;
              }

              distance = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).det(lines[i].direction, (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
                error: Error()
              }), Vector2) : Vector2).subtract(lines[i].point, result.value));
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fdc5d5a9816f089719a734e2884b4204282531d3.js.map