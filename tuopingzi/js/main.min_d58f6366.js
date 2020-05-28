var __reflect=this&&this.__reflect||function(t,e,r){t.__class__=e,r?r.push(e):r=[e],t.__types__=t.__types__?r.concat(t.__types__):r},__extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);r.prototype=e.prototype,t.prototype=new r},__awaiter=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))(function(o,i){function s(t){try{a(n.next(t))}catch(e){i(e)}}function u(t){try{a(n["throw"](t))}catch(e){i(e)}}function a(t){t.done?o(t.value):new r(function(e){e(t.value)}).then(s,u)}a((n=n.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function r(t){return function(e){return n([t,e])}}function n(r){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,i&&(s=i[2&r[0]?"return":r[0]?"throw":"next"])&&!(s=s.call(i,r[1])).done)return s;switch(i=0,s&&(r=[0,s.value]),r[0]){case 0:case 1:s=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(s=a.trys,!(s=s.length>0&&s[s.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){a.label=r[1];break}if(6===r[0]&&a.label<s[1]){a.label=s[1],s=r;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(r);break}s[2]&&a.ops.pop(),a.trys.pop();continue}r=e.call(t,a)}catch(n){r=[6,n],i=0}finally{o=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var o,i,s,u,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return u={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,r){function n(n){e.call(r,n,t)}if(RES.hasRes(t)){var o=RES.getRes(t);o?n(o):RES.getResAsync(t,n,this)}else RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var bottleType;!function(t){t[t.None=0]="None",t[t.bottle1=1]="bottle1",t[t.bottle2=2]="bottle2",t[t.bottle3=3]="bottle3",t[t.bottle4=4]="bottle4",t[t.bottle5=5]="bottle5",t[t.bottle6=6]="bottle6"}(bottleType||(bottleType={}));var Bottles=function(t){function e(e){var r=t.call(this)||this;return r.type=e,r}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t,this.source=RES.getRes(bottleType[t]+"_png")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSelect",{get:function(){return this._isSelect},set:function(t){this._isSelect=t,t?this.alpha=.5:this.alpha=1},enumerable:!0,configurable:!0}),e}(eui.Image);__reflect(Bottles.prototype,"Bottles");var Box=function(t){function e(){var e=t.call(this)||this;return e._num=0,e}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},set:function(t){this._type=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"num",{get:function(){return this._num},set:function(t){this._num=t;var e=this.getChildAt(0);e.source=RES.getRes("bottle"+this.type+"_"+t+"_png")},enumerable:!0,configurable:!0}),e.prototype.addBottle=function(){return this.num++,this._num>=6?(this.packing(),!0):!1},e.prototype.packing=function(){this.num=0},e}(eui.Component);__reflect(Box.prototype,"Box");var Game=function(t){function e(){var e=t.call(this)||this;return e.speed=0,e.timeOnEnterFrame=0,e.isOver=!1,e.timeCount=0,e._scoreNum=0,e.skinName="GameScene",e.speed=5,e.addEventListener(egret.Event.ENTER_FRAME,e.rollBg,e),e.bottleGroup.addEventListener(egret.Event.ENTER_FRAME,e.creatBottle,e),e.timeOnEnterFrame=egret.getTimer(),e.addEventListener(egret.TouchEvent.TOUCH_BEGIN,e.touchBegin,e),e.addEventListener(egret.TouchEvent.TOUCH_MOVE,e.touchMove,e),e.addEventListener(egret.TouchEvent.TOUCH_END,e.touchEnd,e),e.showBottle=new Bottles(1),e.showBottle.anchorOffsetX=12.5,e.showBottle.anchorOffsetY=45,e.showBottle.scaleX=2,e.showBottle.scaleY=2,e.showBottle.visible=!1,e.addChild(e.showBottle),e.restartButton.addEventListener(egret.TouchEvent.TOUCH_TAP,e.restart,e),e.mainmenuButton.addEventListener(egret.TouchEvent.TOUCH_TAP,e.toMainMenu,e),e}return __extends(e,t),e.prototype.rollBg=function(){this.isOver||(this.bg1.y+=this.speed,this.bg1.y>=this.height&&(this.bg1.y=-this.bg1.height+(this.height-this.bg1.height)),this.bg2.y+=this.speed,this.bg2.y>=this.height&&(this.bg2.y=-this.bg2.height+(this.height-this.bg2.height)))},e.prototype.creatBottle=function(){if(!this.isOver){var t=egret.getTimer(),e=(t-this.timeOnEnterFrame)/1e3;if(this.timeOnEnterFrame=egret.getTimer(),this.timeCount+=e,this.timeCount>=1){this.timeCount=0;var r=Math.floor(6*Math.random()+1),n=new Bottles(r);n.x=Math.random()*this.bottleGroup.width,this.bottleGroup.addChild(n)}for(var o=this.bottleGroup.numChildren-1;o>=0;o--){var i=this.bottleGroup.getChildAt(o);i.y+=this.speed,i.y>=this.height&&(this.bottleGroup.removeChild(i),this.gameOver())}}},e.prototype.touchBegin=function(t){for(var e=this.bottleGroup.numChildren-1;e>=0;e--){var r=this.bottleGroup.getChildAt(e);r.hitTestPoint(t.stageX,t.stageY)&&(r.isSelect=!0,this.touchBottle=r,this.showBottle.type=this.touchBottle.type,this.showBottle.visible=!0)}},e.prototype.touchMove=function(t){this.touchBottle&&(this.showBottle.x=t.stageX,this.showBottle.y=t.stageY)},e.prototype.touchEnd=function(t){null!=this.touchBottle&&(this.touchBottle.isSelect=!1),this.showBottle.visible=!1;for(var e=0;e<this.boxGroup.numChildren;e++){var r=this.boxGroup.getChildAt(e);if(r.hitTestPoint(t.stageX,t.stageY)&&r.type==this.touchBottle.type){this.bottleGroup.removeChild(this.touchBottle),r.addBottle()&&(this.scoreNum+=5),this.scoreNum++;break}}},e.prototype.gameOver=function(){this.gameOverGroup.visible=!0,this.isOver=!0},e.prototype.restart=function(){this.scoreNum=0,this.bottleGroup.removeChildren(),this.isOver=!1,this.gameOverGroup.visible=!1;for(var t=0;t<this.boxGroup.numChildren;t++){var e=this.boxGroup.getChildAt(t);e.num=0}},e.prototype.toMainMenu=function(){this.parent.removeChild(this)},Object.defineProperty(e.prototype,"scoreNum",{get:function(){return this._scoreNum},set:function(t){this._scoreNum=t,this.score.text=this.endScore.text=t.toString()},enumerable:!0,configurable:!0}),e}(eui.Component);__reflect(Game.prototype,"Game");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[4,platform.login()];case 2:return e.sent(),[4,platform.getUserInfo()];case 3:return t=e.sent(),console.log(t),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return r.sent(),this.stage.removeChild(t),[3,5];case 4:return e=r.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,r){var n=new eui.Theme("resource/default.thm.json",t.stage);n.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){this.start_scence=new StartScene,this.addChild(this.start_scence),this.start_scence.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.toGame,this)},e.prototype.toGame=function(){var t=new Game;this.addChild(t)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var StartScene=function(t){function e(){var e=t.call(this)||this;return e.skinName="StartSkin",e}return __extends(e,t),e}(eui.Component);__reflect(StartScene.prototype,"StartScene");var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,r,n){function o(t){e.call(n,t)}function i(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),r.call(n))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(n,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),RES.getResByUrl(t,o,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);