cc.game.onStart = function(){
    cc.view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);
    //load resources
    cc.LoaderScene.preload(g_resources, function () {
        cc.director.runScene(new HelloWorldScene());
    }, this);
};

var isMobile=true;

var isDemo = true;

cc.game.run();