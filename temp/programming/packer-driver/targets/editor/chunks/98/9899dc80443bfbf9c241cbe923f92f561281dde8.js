System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Agent, KdTree, Obstacle, RVOMath, Vector2, Simulator, _crd;

  function _reportPossibleCrUseOfAgent(extras) {
    _reporterNs.report("Agent", "./Agent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfKdTree(extras) {
    _reporterNs.report("KdTree", "./KdTree", _context.meta, extras);
  }

  function _reportPossibleCrUseOfObstacle(extras) {
    _reporterNs.report("Obstacle", "./Obstacle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRVOMath(extras) {
    _reporterNs.report("RVOMath", "./RVOMath", _context.meta, extras);
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
      Agent = _unresolved_2.default;
    }, function (_unresolved_3) {
      KdTree = _unresolved_3.default;
    }, function (_unresolved_4) {
      Obstacle = _unresolved_4.default;
    }, function (_unresolved_5) {
      RVOMath = _unresolved_5.default;
    }, function (_unresolved_6) {
      Vector2 = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "40f08r891lIkbr1wTpURuaG", "Simulator", undefined);

      _export("default", Simulator = class Simulator {
        static get Instance() {
          if (!Simulator._instance) {
            Simulator._instance = new Simulator();
          }

          return Simulator._instance;
        }

        constructor() {
          this.agentNo2indexDict_ = void 0;
          this.index2agentNoDict_ = void 0;
          this.agents_ = [];
          this.obstacles_ = [];
          this.kdTree_ = void 0;
          this.timeStep_ = void 0;
          this.defaultAgent_ = void 0;
          this.globalTime_ = void 0;
          this.agentMap = {};
          this.init();
        }

        init() {
          this.agents_ = [];
          this.agentNo2indexDict_ = new Map();
          this.index2agentNoDict_ = new Map();
          this.defaultAgent_ = null;
          this.kdTree_ = new (_crd && KdTree === void 0 ? (_reportPossibleCrUseOfKdTree({
            error: Error()
          }), KdTree) : KdTree)();
          this.obstacles_ = [];
          this.globalTime_ = 0;
          this.timeStep_ = 0.1;
        }

        doStep() {
          this.updateDeleteAgent();
          this.kdTree_.buildAgentTree();

          for (let i = 0, j = this.agents_.length; i < j; i++) {
            let agent = this.agents_[i];
            agent.computeNeighbors();
            agent.computeNewVelocity();
          }

          for (let i = 0, j = this.agents_.length; i < j; i++) {
            let agent = this.agents_[i];
            agent.update();
          }

          this.globalTime_ += this.timeStep_;
          return this.globalTime_;
        }

        updateDeleteAgent() {
          let isDelete = false;

          for (let i = this.agents_.length - 1; i >= 0; i--) {
            if (this.agents_[i].needDelete_) {
              this.agents_.splice(i, 1);
              isDelete = true;
            }
          }

          if (isDelete) this.onDelAgent();
        }

        addAgent(position) {
          if (this.defaultAgent_ == null) return -1;
          let agent = new (_crd && Agent === void 0 ? (_reportPossibleCrUseOfAgent({
            error: Error()
          }), Agent) : Agent)();
          agent.id_ = Simulator.s_totalID;
          Simulator.s_totalID++;
          agent.maxNeighbors_ = this.defaultAgent_.maxNeighbors_;
          agent.maxSpeed_ = this.defaultAgent_.maxSpeed_;
          agent.neighborDist_ = this.defaultAgent_.neighborDist_;
          agent.position_ = position;
          agent.radius_ = this.defaultAgent_.radius_;
          agent.timeHorizon_ = this.defaultAgent_.timeHorizon_;
          agent.timeHorizonObst_ = this.defaultAgent_.timeHorizonObst_;
          agent.velocity_ = this.defaultAgent_.velocity_;
          this.agents_.push(agent);
          this.onAddAgent();
          this.agentMap[agent.id_] = agent;
          return agent.id_;
        }

        addObstacle(vertices) {
          if (vertices.length < 2) return -1;
          let obstacleNo = this.obstacles_.length;

          for (let i = 0; i < vertices.length; ++i) {
            let obstacle = new (_crd && Obstacle === void 0 ? (_reportPossibleCrUseOfObstacle({
              error: Error()
            }), Obstacle) : Obstacle)();
            obstacle.point_ = vertices[i];

            if (i != 0) {
              obstacle.previous_ = this.obstacles_[this.obstacles_.length - 1];
              obstacle.previous_.next_ = obstacle;
            }

            if (i == vertices.length - 1) {
              obstacle.next_ = this.obstacles_[obstacleNo];
              obstacle.next_.previous_ = obstacle;
            }

            obstacle.direction_ = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
              error: Error()
            }), RVOMath) : RVOMath).normalize((_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2).subtract(vertices[i == vertices.length - 1 ? 0 : i + 1], vertices[i]));

            if (vertices.length == 2) {
              obstacle.convex_ = true;
            } else {
              obstacle.convex_ = (_crd && RVOMath === void 0 ? (_reportPossibleCrUseOfRVOMath({
                error: Error()
              }), RVOMath) : RVOMath).leftOf(vertices[i == 0 ? vertices.length - 1 : i - 1], vertices[i], vertices[i == vertices.length - 1 ? 0 : i + 1]) >= 0;
            }

            obstacle.id_ = this.obstacles_.length;
            this.obstacles_.push(obstacle);
          }

          return obstacleNo;
        } //通过sid  删除代理


        delAgentBySid(sid) {
          // console.log("待删除sid：" + sid);
          let agent = this.agentMap[sid];

          if (agent) {
            agent.needDelete_ = true; // this.agentMap[sid] = null;

            delete this.agentMap[sid];
          }
        }

        onDelAgent() {
          this.agentNo2indexDict_.clear();
          this.index2agentNoDict_.clear();

          for (let i = 0; i < this.agents_.length; i++) {
            let agentNo = this.agents_[i].id_;
            this.agentNo2indexDict_.set(agentNo, i);
            this.index2agentNoDict_.set(i, agentNo);
          }
        }

        onAddAgent() {
          if (this.agents_.length == 0) return;
          let index = this.agents_.length - 1;
          let agentNo = this.agents_[index].id_;
          this.agentNo2indexDict_.set(agentNo, index);
          this.index2agentNoDict_.set(index, agentNo);
        }

        getAgentPosition(agentNo) {
          let agent = this.agents_[this.agentNo2indexDict_.get(agentNo)];

          if (agent) {
            return agent.position_;
          } else {
            return new (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
              error: Error()
            }), Vector2) : Vector2)(0, 0);
          }
        }

        getAgentPrefVelocity(agentNo) {
          return this.agents_[this.agentNo2indexDict_.get(agentNo)].prefVelocity_;
        }

        setTimeStep(timeStep) {
          this.timeStep_ = timeStep;
        }

        setAgentDefaults(neighborDist, maxNeighbors, timeHorizon, timeHorizonObst, radius, maxSpeed, velocity) {
          if (this.defaultAgent_ == null) {
            this.defaultAgent_ = new (_crd && Agent === void 0 ? (_reportPossibleCrUseOfAgent({
              error: Error()
            }), Agent) : Agent)();
          }

          this.defaultAgent_.maxNeighbors_ = maxNeighbors;
          this.defaultAgent_.maxSpeed_ = maxSpeed;
          this.defaultAgent_.neighborDist_ = neighborDist;
          this.defaultAgent_.radius_ = radius;
          this.defaultAgent_.timeHorizon_ = timeHorizon;
          this.defaultAgent_.timeHorizonObst_ = timeHorizonObst;
          this.defaultAgent_.velocity_ = velocity;
        }

        processObstacles() {
          this.kdTree_.buildObstacleTree();
        }

        setAgentPrefVelocity(agentNo, prefVelocity) {
          let agent = this.agents_[this.agentNo2indexDict_.get(agentNo)];
          if (agent) agent.prefVelocity_ = prefVelocity; // this.agents_[this.agentNo2indexDict_.get(agentNo)].prefVelocity_ = prefVelocity;
        } // public setAgentPrefVelocity(agentNo: number, prefVelocity: Vector2) {
        //     this.agents_[this.agentNo2indexDict_.get(agentNo)].prefVelocity_ = prefVelocity;
        // }


      });

      Simulator._instance = void 0;
      Simulator.s_totalID = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9899dc80443bfbf9c241cbe923f92f561281dde8.js.map