gdjs.gameoverCode = {};
gdjs.gameoverCode.GDhgfgfghObjects1= [];
gdjs.gameoverCode.GDhgfgfghObjects2= [];

gdjs.gameoverCode.conditionTrue_0 = {val:false};
gdjs.gameoverCode.condition0IsTrue_0 = {val:false};


gdjs.gameoverCode.eventsList0x5b6e18 = function(runtimeScene) {

{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", false);
}}

}


}; //End of gdjs.gameoverCode.eventsList0x5b6e18


gdjs.gameoverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameoverCode.GDhgfgfghObjects1.length = 0;
gdjs.gameoverCode.GDhgfgfghObjects2.length = 0;

gdjs.gameoverCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['gameoverCode'] = gdjs.gameoverCode;
