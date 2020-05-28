
function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
    __.prototype = b.prototype;
    d.prototype = new __();
};
window.generateEUI = {};
generateEUI.paths = {};
generateEUI.styles = undefined;
generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"}
generateEUI.paths['resource/skins/Box1Skin.exml'] = window.Box1Skin = (function (_super) {
	__extends(Box1Skin, _super);
	function Box1Skin() {
		_super.call(this);
		this.skinParts = ["img_body"];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this.img_body_i()];
	}
	var _proto = Box1Skin.prototype;

	_proto.img_body_i = function () {
		var t = new eui.Image();
		this.img_body = t;
		t.source = "bottle1_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Box1Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box2Skin.exml'] = window.Box2Skin = (function (_super) {
	__extends(Box2Skin, _super);
	function Box2Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box2Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle2_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Box2Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box3Skin.exml'] = window.Box3Skin = (function (_super) {
	__extends(Box3Skin, _super);
	function Box3Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box3Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle3_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Box3Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box4Skin.exml'] = window.Box4Skin = (function (_super) {
	__extends(Box4Skin, _super);
	function Box4Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box4Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle4_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Box4Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box5Skin.exml'] = window.Box5Skin = (function (_super) {
	__extends(Box5Skin, _super);
	function Box5Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box5Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle5_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Box5Skin;
})(eui.Skin);generateEUI.paths['resource/skins/Box6Skin.exml'] = window.Box6Skin = (function (_super) {
	__extends(Box6Skin, _super);
	function Box6Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 231;
		this.width = 146;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = Box6Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "bottle6_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return Box6Skin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSceneSkin.exml'] = window.GameScene = (function (_super) {
	__extends(GameScene, _super);
	var GameScene$Skin1 = 	(function (_super) {
		__extends(GameScene$Skin1, _super);
		function GameScene$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_start1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin1;
	})(eui.Skin);

	var GameScene$Skin2 = 	(function (_super) {
		__extends(GameScene$Skin2, _super);
		function GameScene$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_replay1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameScene$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_replay_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScene$Skin2;
	})(eui.Skin);

	function GameScene() {
		_super.call(this);
		this.skinParts = ["bg1","bg2","score","bottleGroup","boxGroup","mainmenuButton","restartButton","endScore","gameOverGroup"];
		
		this.height = 950;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.bg1_i(),this.bg2_i(),this._Image2_i(),this.score_i(),this.bottleGroup_i(),this.boxGroup_i(),this.gameOverGroup_i()];
	}
	var _proto = GameScene.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "gamebg_png";
		t.top = 0;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.source = "conveyer_png";
		t.x = 226.5;
		t.y = 120;
		return t;
	};
	_proto.bg2_i = function () {
		var t = new eui.Image();
		this.bg2 = t;
		t.source = "conveyer_png";
		t.x = 226.5;
		t.y = -710;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "gameui1_png";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.anchorOffsetX = 0;
		t.text = "0";
		t.textColor = 0x000000;
		t.width = 72;
		t.x = 458.67;
		t.y = 79;
		return t;
	};
	_proto.bottleGroup_i = function () {
		var t = new eui.Group();
		this.bottleGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 824.24;
		t.width = 109.09;
		t.x = 242.27;
		t.y = 125.21;
		return t;
	};
	_proto.boxGroup_i = function () {
		var t = new eui.Group();
		this.boxGroup = t;
		t.x = 0;
		t.y = 244;
		t.elementsContent = [this._Box1_i(),this._Box2_i(),this._Box3_i(),this._Box4_i(),this._Box5_i(),this._Box6_i()];
		return t;
	};
	_proto._Box1_i = function () {
		var t = new Box();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 231;
		t.skinName = "Box1Skin";
		t.type = 1;
		t.width = 146;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Box2_i = function () {
		var t = new Box();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 231;
		t.skinName = "Box2Skin";
		t.type = 2;
		t.width = 146;
		t.x = 0;
		t.y = 231;
		return t;
	};
	_proto._Box3_i = function () {
		var t = new Box();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 231;
		t.skinName = "Box3Skin";
		t.type = 3;
		t.width = 146;
		t.x = 0;
		t.y = 474.45;
		return t;
	};
	_proto._Box4_i = function () {
		var t = new Box();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 231;
		t.skinName = "Box6Skin";
		t.type = 6;
		t.width = 146;
		t.x = 454;
		t.y = 475;
		return t;
	};
	_proto._Box5_i = function () {
		var t = new Box();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 231;
		t.skinName = "Box5Skin";
		t.type = 5;
		t.width = 146;
		t.x = 461;
		t.y = 231;
		return t;
	};
	_proto._Box6_i = function () {
		var t = new Box();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 231;
		t.skinName = "Box4Skin";
		t.type = 4;
		t.width = 146;
		t.x = 454;
		t.y = 0;
		return t;
	};
	_proto.gameOverGroup_i = function () {
		var t = new eui.Group();
		this.gameOverGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Rect1_i(),this._Image3_i(),this._Image4_i(),this.mainmenuButton_i(),this.restartButton_i(),this._Label1_i(),this.endScore_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 1;
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "overrole_png";
		t.x = 187;
		t.y = 391;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "overpanel_png";
		t.x = 60;
		t.y = 5;
		return t;
	};
	_proto.mainmenuButton_i = function () {
		var t = new eui.Button();
		this.mainmenuButton = t;
		t.label = "";
		t.x = 134.5;
		t.y = 813.45;
		t.skinName = GameScene$Skin1;
		return t;
	};
	_proto.restartButton_i = function () {
		var t = new eui.Button();
		this.restartButton = t;
		t.label = "";
		t.x = 138;
		t.y = 744;
		t.skinName = GameScene$Skin2;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 58;
		t.text = "得分:";
		t.textColor = 0xffffff;
		t.x = 170.5;
		t.y = 140;
		return t;
	};
	_proto.endScore_i = function () {
		var t = new eui.Label();
		this.endScore = t;
		t.size = 58;
		t.text = "0";
		t.x = 318.36;
		t.y = 140;
		return t;
	};
	return GameScene;
})(eui.Skin);generateEUI.paths['resource/skins/StartSkin.exml'] = window.StartSkin = (function (_super) {
	__extends(StartSkin, _super);
	var StartSkin$Skin3 = 	(function (_super) {
		__extends(StartSkin$Skin3, _super);
		function StartSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_play1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_play_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSkin$Skin3;
	})(eui.Skin);

	function StartSkin() {
		_super.call(this);
		this.skinParts = ["startButton"];
		
		this.height = 950;
		this.width = 600;
		this.elementsContent = [this._Image1_i(),this.startButton_i(),this._Label1_i()];
	}
	var _proto = StartSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto.startButton_i = function () {
		var t = new eui.Button();
		this.startButton = t;
		t.label = "";
		t.x = 134.5;
		t.y = 726.32;
		t.skinName = StartSkin$Skin3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.italic = true;
		t.size = 60;
		t.text = "拖动瓶子";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 180;
		t.y = 139.12;
		return t;
	};
	return StartSkin;
})(eui.Skin);