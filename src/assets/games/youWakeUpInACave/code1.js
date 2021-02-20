gdjs.Scene2Code = {};
gdjs.Scene2Code.GDdirtObjects1= [];
gdjs.Scene2Code.GDdirtObjects2= [];
gdjs.Scene2Code.GDdirtObjects3= [];

gdjs.Scene2Code.conditionTrue_0 = {val:false};
gdjs.Scene2Code.condition0IsTrue_0 = {val:false};
gdjs.Scene2Code.condition1IsTrue_0 = {val:false};
gdjs.Scene2Code.condition2IsTrue_0 = {val:false};
gdjs.Scene2Code.condition3IsTrue_0 = {val:false};
gdjs.Scene2Code.condition4IsTrue_0 = {val:false};
gdjs.Scene2Code.conditionTrue_1 = {val:false};
gdjs.Scene2Code.condition0IsTrue_1 = {val:false};
gdjs.Scene2Code.condition1IsTrue_1 = {val:false};
gdjs.Scene2Code.condition2IsTrue_1 = {val:false};
gdjs.Scene2Code.condition3IsTrue_1 = {val:false};
gdjs.Scene2Code.condition4IsTrue_1 = {val:false};


gdjs.Scene2Code.eventsList0x707f74 = function(runtimeScene) {

{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
if (gdjs.Scene2Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
gdjs.Scene2Code.condition1IsTrue_0.val = false;
if ( gdjs.Scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2Code.condition1IsTrue_0.val = !(gdjs.evtTools.inventory.isEquipped(runtimeScene, "pinventory", "sword"));
}}
if (gdjs.Scene2Code.condition1IsTrue_0.val) {
{}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
gdjs.Scene2Code.condition1IsTrue_0.val = false;
gdjs.Scene2Code.condition2IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.inventory.isEquipped(runtimeScene, "pinventory", "sword");
}if ( gdjs.Scene2Code.condition0IsTrue_0.val ) {
if ( gdjs.Scene2Code.condition1IsTrue_0.val ) {
{
gdjs.Scene2Code.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
}}
}
if (gdjs.Scene2Code.condition2IsTrue_0.val) {
{}}

}


}; //End of gdjs.Scene2Code.eventsList0x707f74
gdjs.Scene2Code.eventsList0x6b2b44 = function(runtimeScene) {

{


{
}

}


{



}


}; //End of gdjs.Scene2Code.eventsList0x6b2b44
gdjs.Scene2Code.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
if (gdjs.Scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene2Code.eventsList0x707f74(runtimeScene);} //End of subevents
}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
if (gdjs.Scene2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene2Code.eventsList0x6b2b44(runtimeScene);} //End of subevents
}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
gdjs.Scene2Code.condition1IsTrue_0.val = false;
gdjs.Scene2Code.condition2IsTrue_0.val = false;
gdjs.Scene2Code.condition3IsTrue_0.val = false;
if ( gdjs.Scene2Code.condition0IsTrue_0.val ) {
{
gdjs.Scene2Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "e"));
}if ( gdjs.Scene2Code.condition1IsTrue_0.val ) {
if ( gdjs.Scene2Code.condition2IsTrue_0.val ) {
{
{gdjs.Scene2Code.conditionTrue_1 = gdjs.Scene2Code.condition3IsTrue_0;
gdjs.Scene2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7110428);
}
}}
}
}
if (gdjs.Scene2Code.condition3IsTrue_0.val) {
{runtimeScene.getVariables().get("Playerhealth").sub(1);
}{}}

}


{


gdjs.Scene2Code.condition0IsTrue_0.val = false;
{
gdjs.Scene2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Playerhealth")) == 0;
}if (gdjs.Scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gameover", true);
}}

}


{


{
}

}


}; //End of gdjs.Scene2Code.eventsList0x5b6e18


gdjs.Scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene2Code.GDdirtObjects1.length = 0;
gdjs.Scene2Code.GDdirtObjects2.length = 0;
gdjs.Scene2Code.GDdirtObjects3.length = 0;

gdjs.Scene2Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Scene2Code'] = gdjs.Scene2Code;
