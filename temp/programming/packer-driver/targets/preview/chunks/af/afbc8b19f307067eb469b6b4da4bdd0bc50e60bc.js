// import { em } from "../global/EventManager";
// window.SDK_OPTIONS = {
//     gameId: "b12v1ztvlfebknd0tt6u2fci29din302",
//     onEvent: function (a) {
//         switch (a.name) {
//             case "SDK_GAME_PAUSE":
//                 em.dispatch("muteAudio");
//                 console.log("SDK_GAME_PAUSE");
//                 // pause game logic / mute audio
//                 break;
//             case "SDK_GAME_START":
//                 em.dispatch("resumeAudio");
//                 console.log("SDK_GAME_START");
//                 // advertisement done, resume game logic and unmute audio
//                 break;
//             case "SDK_READY":
//                 // when sdk is ready
//                 console.log("sdk init completed.");
//                 break;
//         }
//     }
// };
// (function (a, b, c) {
//     var d = a.getElementsByTagName(b)[0];
//     a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
// })(document, "script", "gamemonetize-sdk"); 
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb456kBbFJNn4k61gmkPq3v", "GameMonetize.com-SDK", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afbc8b19f307067eb469b6b4da4bdd0bc50e60bc.js.map