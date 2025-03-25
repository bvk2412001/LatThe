System.register("chunks:///_virtual/Card.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Gameplay.ts","./SoundGame.ts"],(function(exports){var _applyDecoratedDescriptor,_inheritsLoose,_initializerDefineProperty,_assertThisInitialized,cclegacy,_decorator,Sprite,SpriteFrame,Label,Node,Prefab,Input,tween,Vec3,UIOpacity,Tween,Quat,Component,Gameplay,SoundGame;return{setters:[function(e){_applyDecoratedDescriptor=e.applyDecoratedDescriptor,_inheritsLoose=e.inheritsLoose,_initializerDefineProperty=e.initializerDefineProperty,_assertThisInitialized=e.assertThisInitialized},function(e){cclegacy=e.cclegacy,_decorator=e._decorator,Sprite=e.Sprite,SpriteFrame=e.SpriteFrame,Label=e.Label,Node=e.Node,Prefab=e.Prefab,Input=e.Input,tween=e.tween,Vec3=e.Vec3,UIOpacity=e.UIOpacity,Tween=e.Tween,Quat=e.Quat,Component=e.Component},function(e){Gameplay=e.Gameplay},function(e){SoundGame=e.SoundGame}],execute:function(){var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_dec7,_dec8,_dec9,_dec10,_class,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8,_descriptor9;cclegacy._RF.push({},"70e2e0T8rJHmJjpCMq+3xyh","Card",void 0);var ccclass=_decorator.ccclass,property=_decorator.property,Card=exports("Card",(_dec=ccclass("node"),_dec2=property(Sprite),_dec3=property(SpriteFrame),_dec4=property(Sprite),_dec5=property(Label),_dec6=property(Node),_dec7=property(Node),_dec8=property(Node),_dec9=property(Node),_dec10=property(Prefab),_dec((_class2=function(_Component){function Card(){for(var e,t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return e=_Component.call.apply(_Component,[this].concat(i))||this,_initializerDefineProperty(e,"avatar",_descriptor,_assertThisInitialized(e)),_initializerDefineProperty(e,"sprites",_descriptor2,_assertThisInitialized(e)),_initializerDefineProperty(e,"spriteMini",_descriptor3,_assertThisInitialized(e)),_initializerDefineProperty(e,"titleMini",_descriptor4,_assertThisInitialized(e)),_initializerDefineProperty(e,"layout1",_descriptor5,_assertThisInitialized(e)),_initializerDefineProperty(e,"layout2",_descriptor6,_assertThisInitialized(e)),_initializerDefineProperty(e,"layout3",_descriptor7,_assertThisInitialized(e)),e.data=null,_initializerDefineProperty(e,"containSprite",_descriptor8,_assertThisInitialized(e)),_initializerDefineProperty(e,"item",_descriptor9,_assertThisInitialized(e)),e.index=-1,e.sound=null,e.isFlip=!1,e}_inheritsLoose(Card,_Component);var _proto=Card.prototype;return _proto.start=function(){this.node.on(Input.EventType.TOUCH_END,this.BtnTouchEnd,this)},_proto.SetUp=function(e,t,i){this.titleMini.node.active=!1,this.spriteMini.node.active=!1,this.spriteMini.spriteFrame=null,"tl_latthe_phepcong5"==Gameplay.instance.dataMini.id||"tl_latthe_pheptru"==Gameplay.instance.dataMini.id?0==t?this.spriteMini.spriteFrame=e.sprite:(this.sound=e.audio1,this.titleMini.string=e.title):0==i?this.spriteMini.spriteFrame=e.sprite:(this.sound=e.audio1,this.titleMini.string=e.title),this.index=t,this.data=e,this.sound=e.audio0},_proto.BtnTouchEnd=function(){0==Gameplay.instance.startGame||1==Gameplay.instance.isFlip||Gameplay.instance.cardSelects.length>=3||1!=this.isFlip&&(Gameplay.instance.timeSnake=10,0==Gameplay.instance.countSelectCard&&(Gameplay.instance.cardSelect1=this),SoundGame.instance.playEffect(2),Gameplay.instance.countSelectCard++,Gameplay.instance.handTutorial.active=!1,Gameplay.instance.isTutorial=!0,this.FlipCard1(),SoundGame.instance.playSoundCard(this.sound))},_proto.EndTimeFlip=function(){var e=this;this.FlipCard2();var t=Gameplay.instance.cardSelects.findIndex((function(t){return t.data.type==e.data.type}));Gameplay.instance.cardSelects.splice(t,1)},_proto.FlipCard=function(e){var t=this;this.isFlip=!0,Gameplay.instance.isFlip=!0,tween(this.node).to(.2,{scale:new Vec3(0,1,1)}).call((function(){t.avatar.spriteFrame=t.sprites[e],1==e?(t.titleMini.node.active=!0,t.spriteMini.node.active=!0,t.containSprite.active=!0,t.scheduleOnce((function(){Gameplay.instance.isFlip=!1}),.5),2==Gameplay.instance.countSelectCard&&(t.data.type==Gameplay.instance.cardSelect1.data.type&&t.index!=Gameplay.instance.cardSelect1.index?(SoundGame.instance.playDung(),t.scheduleOnce((function(){t.AnimationDung(),Gameplay.instance.cardSelect1.AnimationDung(),t.scheduleOnce((function(){Gameplay.instance.cardSelect1.AnimationWin(),t.AnimationWin(),SoundGame.instance.playEffect(0)}),.6)}),1.5)):(SoundGame.instance.playSai(),t.scheduleOnce((function(){t.FlipCard(0),Gameplay.instance.cardSelect1.FlipCard(0),t.scheduleOnce((function(){Gameplay.instance.cardSelect1=null,Gameplay.instance.countSelectCard=0,t.isFlip=!1,Gameplay.instance.isFlip=!1}),.6)}),1)))):(t.isFlip=!1,Gameplay.instance.isFlip=!1,t.titleMini.node.active=!1,t.spriteMini.node.active=!1,t.containSprite.active=!1)})).to(.2,{scale:new Vec3(1,1,1)}).start()},_proto.FlipCard1=function(){var e=this;Gameplay.instance.handTutorial.active=!1,this.isFlip=!0,Gameplay.instance.isFlip=!0,tween(this.node).to(.2,{scale:new Vec3(0,1,1)}).call((function(){e.avatar.spriteFrame=e.sprites[1],e.titleMini.node.active=!0,e.spriteMini.node.active=!0,e.containSprite.active=!0,e.scheduleOnce(e.EndTimeFlip,4)})).to(.2,{scale:new Vec3(1,1,1)}).call((function(){Gameplay.instance.CheckCorrectCard(e)})).start()},_proto.UnSchedule=function(){this.unschedule(this.EndTimeFlip)},_proto.FlipCard2=function(){var e=this;tween(this.node).to(.2,{scale:new Vec3(0,1,1)}).call((function(){e.isFlip=!1,e.titleMini.node.active=!1,e.spriteMini.node.active=!1,e.containSprite.active=!1,Gameplay.instance.isFlip=!1,e.avatar.spriteFrame=e.sprites[0]})).to(.2,{scale:new Vec3(1,1,1)}).start()},_proto.AnimationDung=function AnimationDung(){var _this6=this,levelCurrent=Gameplay.instance.leveCurrent;2!=levelCurrent&&3!=levelCurrent||1!=this.index||(this.titleMini.string=this.data.title+"="+eval(this.data.title)),this.node.setSiblingIndex(6),tween(this.titleMini.node).to(.3,{scale:new Vec3(2,2,2)}).start(),this.scheduleOnce((function(){tween(_this6.titleMini.node.getComponent(UIOpacity)).to(.3,{opacity:0}).call((function(){_this6.titleMini.node.setScale(new Vec3(1,1,1)),_this6.titleMini.node.getComponent(UIOpacity).opacity=255})).start()}),.3),tween(this.spriteMini.node).to(.3,{scale:new Vec3(2,2,2)}).start(),this.scheduleOnce((function(){tween(_this6.spriteMini.node.getComponent(UIOpacity)).to(.3,{opacity:0}).call((function(){_this6.spriteMini.node.setScale(new Vec3(1,1,1)),_this6.spriteMini.node.getComponent(UIOpacity).opacity=255})).start()}),.3)},_proto.shakeCard=function(){var e=this,t=0,i=this.node.rotation.clone();!function n(){if(t>=1)tween(e.node).to(.2,{rotation:i}).start();else{var a=10*(Math.random()>.5?1:-1),r=Quat.fromEuler(new Quat,0,0,a);tween(e.node).to(.1,{rotation:r}).call((function(){t+=.1,n()})).start()}}()},_proto.AnimationWin=function(){var e=this;console.log(this.node),tween(this.node).to(.3,{scale:new Vec3(1.2,1.2,1.2)}).to(.3,{scale:new Vec3(1,1,1)}).call((function(){e.avatar.spriteFrame=e.sprites[0],e.titleMini.node.active=!1,e.spriteMini.node.active=!1,e.containSprite.active=!1;!function t(){tween(e.node).to(.2,{scale:new Vec3(-e.node.scale.x,e.node.scale.y,1)}).call((function(){e.node.setScale(new Vec3(Math.abs(e.node.scale.x)-.2,e.node.scale.y-.2,1)),t()})).start()}()})).to(1,{worldPosition:Gameplay.instance.countCardNode.worldPosition},{easing:"backIn"}).call((function(){e.node.active=!1,Tween.stopAllByTarget(e.node),e.isFlip=!1,Gameplay.instance.AddScore()})).start()},Card}(Component),_descriptor=_applyDecoratedDescriptor(_class2.prototype,"avatar",[_dec2],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor2=_applyDecoratedDescriptor(_class2.prototype,"sprites",[_dec3],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_descriptor3=_applyDecoratedDescriptor(_class2.prototype,"spriteMini",[_dec4],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor4=_applyDecoratedDescriptor(_class2.prototype,"titleMini",[_dec5],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor5=_applyDecoratedDescriptor(_class2.prototype,"layout1",[_dec6],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor6=_applyDecoratedDescriptor(_class2.prototype,"layout2",[_dec7],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor7=_applyDecoratedDescriptor(_class2.prototype,"layout3",[_dec8],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor8=_applyDecoratedDescriptor(_class2.prototype,"containSprite",[_dec9],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor9=_applyDecoratedDescriptor(_class2.prototype,"item",[_dec10],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_class=_class2))||_class));cclegacy._RF.pop()}}}));

System.register("chunks:///_virtual/Data.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,r,n,a,o,u,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.initializerDefineProperty},function(t){r=t.cclegacy,n=t._decorator,a=t.SpriteFrame,o=t.CCString,u=t.CCInteger,l=t.AudioClip}],execute:function(){var c,p,s,f,b,h,y,g,d,D,m,z,v;r._RF.push({},"3f90a86/2JDfYyThvNzeXHs","Data",void 0);var w=n.ccclass,C=n.property;t("Data",(c=w("Data"),p=C(a),s=C(o),f=C(u),b=C(l),h=C(l),c((d=e((g=function(){i(this,"sprite",d,this),i(this,"title",D,this),i(this,"type",m,this),i(this,"audio0",z,this),i(this,"audio1",v,this)}).prototype,"sprite",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(g.prototype,"title",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),m=e(g.prototype,"type",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),z=e(g.prototype,"audio0",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(g.prototype,"audio1",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/DataGame.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DataMini.ts"],(function(t){var e,a,i,n,r,o,c,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,a=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,c=t.Component},function(t){s=t.DataMini}],execute:function(){var u,l,p,f,D;r._RF.push({},"9d828CnQRxInZLHIPoNZCGi","DataGame",void 0);var d=o.ccclass,y=o.property;t("DataGame",(u=d("DataGame"),l=y(s),u((D=e((f=function(t){function e(){for(var e,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r))||this,i(e,"dataMini",D,n(e)),e}return a(e,t),e}(c)).prototype,"dataMini",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=f))||p));r._RF.pop()}}}));

System.register("chunks:///_virtual/DataMini.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Data.ts"],(function(t){var i,e,r,a,n,o;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.initializerDefineProperty},function(t){r=t.cclegacy,a=t._decorator,n=t.CCString},function(t){o=t.Data}],execute:function(){var c,u,l,s,p,d,f;r._RF.push({},"db0d6jJolRN757Ce273zTd9","DataMini",void 0);var D=a.ccclass,b=a.property;t("DataMini",(c=D("DataMini"),u=b(n),l=b(o),c((d=i((p=function(){e(this,"id",d,this),e(this,"datas",f,this)}).prototype,"id",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=i(p.prototype,"datas",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),s=p))||s));r._RF.pop()}}}));

System.register("chunks:///_virtual/Gameplay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Card.ts","./DataGame.ts","./DataMini.ts","./StarCtrl.ts","./SoundGame.ts"],(function(t){var e,n,i,a,o,r,s,c,u,l,h,d,f,m,p,g,C,S,y,v,w,b,T,D;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.createForOfIteratorHelperLoose,a=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,c=t.Node,u=t.Vec3,l=t.Label,h=t.CCInteger,d=t.tween,f=t.randomRangeInt,m=t.Animation,p=t.UITransform,g=t.UIOpacity,C=t.screen,S=t.Size,y=t.Component},function(t){v=t.Card},function(t){w=t.DataGame},function(t){b=t.DataMini},function(t){T=t.StarCtrl},function(t){D=t.SoundGame}],execute:function(){var z,M,G,N,O,A,P,I,E,L,F,R,k,U,B,W,Q,_,x,H;r._RF.push({},"57249NPi6BATbQMAm/BvRIl","Gameplay",void 0);var j=s.ccclass,K=s.property;t("Gameplay",(z=j("Gameplay"),M=K(c),G=K(u),N=K(w),O=K(c),A=K(l),P=K(l),I=K(c),E=K(h),z(((H=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i))||this,a(e,"cards",R,o(e)),a(e,"possitions",k,o(e)),a(e,"dataGame",U,o(e)),a(e,"countCardNode",B,o(e)),a(e,"countCardLbl",W,o(e)),a(e,"time",Q,o(e)),a(e,"handTutorial",_,o(e)),e.startGame=!1,e.isFlip=!1,e.countSelectCard=0,a(e,"leveCurrent",x,o(e)),e.dataMini=new b,e.cardSelect1=null,e.countCard=0,e.cardSelects=[],e.currentQuestion=0,e.startTime=void 0,e.isTutorial=!1,e.timeNumber=90,e.scheduleTime=null,e.random=0,e.timeSnake=3,e.score=0,e}n(e,t);var r=e.prototype;return r.onLoad=function(){this.startTime=(new Date).getTime(),e.instance=this,console.log("[INFO]: Progress: 1")},r.SetDataMini=function(){this.dataMini=this.dataGame.dataMini[this.leveCurrent]},r.start=function(){var t=this;D.instance.playThaoi(0);var e=this.getParamUrl("input");this.dataGame.dataMini.forEach((function(n,i){n.id==e&&(t.leveCurrent=i)})),this.shuffleAndMoveToOriginal(),this.SetDataMini(),this.SetDataCard(),this.shuffleNodes(this.possitions),D.instance.playEffect(3)},r.getParamUrl=function(t){var e=window.location.href;return new URL(e).searchParams.get(t)},r.shuffleAndMoveToOriginal=function(){var t=this,e=[];this.cards.forEach((function(t){e.push(new Promise((function(e){var n=0;!function i(){if(n>=2)e();else{var a=new u(f(-250,250),f(-250,250),t.position.z);d(t).to(.3,{position:a}).call((function(){n+=.3,i()})).start()}}()})))})),Promise.all(e).then((function(){var e=[];t.cards.forEach((function(n,i){e.push(new Promise((function(e){d(n).to(.3,{worldPosition:t.possitions[i].clone()}).call((function(){e()})).start(),d(n).to(.3,{angle:f(-10,10)}).start()})))})),Promise.all(e).then((function(){D.instance.indexDung=0,t.cards.forEach((function(e){e.getComponent(v).FlipCard(1),t.scheduleOnce((function(){e.getComponent(v).FlipCard(0)}),3)})),0==t.isTutorial?t.scheduleOnce((function(){D.instance.playThaoi(4),t.Tutorial(),t.scheduleOnce((function(){t.startGame=!0,t.CountDownTime()}),5)}),5):(t.startGame=!0,t.CountDownTime())}))}))},r.Tutorial=function(){var t=this;0==this.isTutorial&&(D.instance.playThaoi(4),this.scheduleOnce((function(){t.handTutorial.active=!0,t.handTutorial.setWorldPosition(t.cards[0].worldPosition),t.scheduleOnce((function(){t.handTutorial.active=!1}),4),t.scheduleOnce((function(){t.Tutorial()}),10)}),2))},r.CountDownTime=function(){var t=this;this.scheduleTime=function(){t.timeNumber--,t.timeNumber>=10?t.time.string="00:"+t.timeNumber:t.time.string="00:0"+t.timeNumber,6==t.timeNumber&&(t.time.node.parent.getComponent(m).play("time"),D.instance.playEffect(4)),0==t.timeNumber&&(t.startGame=!1,t.TinhScore(),T.instance.showNode(),t.unschedule(t.scheduleTime))},this.schedule(this.scheduleTime,1)},r.SetDataCard=function(){for(var t=0,e=0;e<3;e++)for(var n=this.dataMini.datas[e+3*this.currentQuestion],i=0;i<2;i++)this.cards[t].getComponent(v).SetUp(n,i,this.random),t++;this.random=1},r.update=function(t){this.timeSnake-=t,this.timeSnake<0&&(this.timeSnake=10,this.cards.forEach((function(t){t.getComponent(v).shakeCard()}))),this.node.getComponent(p).setContentSize(this.getSizeWindow())},r.shuffleNodes=function(t){for(var e=t.length,n=0;n<e;n++){var i=this.getRandomInt(0,e),a=[t[i],t[n]];t[n]=a[0],t[i]=a[1]}return t},r.getRandomInt=function(t,e){return Math.floor(Math.random()*(e-t))+t},r.AddScore=function(){var t=this;this.cardSelect1=null,this.countSelectCard=0,this.score+=1,this.countCard++,this.countCardLbl.string=this.countCard+"/6",this.score%2==0&&D.instance.playEffect(1),6==this.score&&(this.unschedule(this.scheduleTime),this.scheduleOnce((function(){t.countCard=0,t.countCardLbl.string=t.countCard+"/6",t.Reset()}),.5)),12==this.score&&(this.startGame=!1,this.scheduleOnce((function(){T.instance.SetDiem(3),T.instance.showNode()}),2))},r.Reset=function(){this.cards.forEach((function(t){t.angle=0,t.setScale(new u(1,1,1)),t.setPosition(new u(0,0,0)),t.active=!0,t.getComponent(v).layout1.destroyAllChildren(),t.getComponent(v).layout2.destroyAllChildren(),t.getComponent(v).layout3.destroyAllChildren(),t.getComponent(v).titleMini.node.getComponent(g).opacity=255,t.getComponent(v).titleMini.node.setScale(new u(1,1,1))})),this.startGame=!1,this.currentQuestion=1,this.shuffleNodes(this.possitions),this.shuffleAndMoveToOriginal(),this.SetDataMini(),this.SetDataCard()},r.TinhScore=function(){this.score>10?T.instance.SetDiem(3):this.score>6?T.instance.SetDiem(2):T.instance.SetDiem(1)},r.getSizeWindow=function(){var t=0,e=0,n=C.windowSize.width/1366,i=C.windowSize.height/1024;return n>i?(e=C.windowSize.width/i,t=1024):(t=C.windowSize.height/n,e=1366),new S(e,t)},r.btnBack=function(){console.log("[ACTION]: BACK")},r.CheckCorrectCard=function(t){var n=this;console.log(this.cardSelects);for(var a,o,r=function(){var e=o.value;if(t.data.type==e.data.type)return t.UnSchedule(),e.UnSchedule(),D.instance.playEffect(0),n.scheduleOnce((function(){D.instance.playDung(),t.AnimationDung(),e.AnimationDung(),n.scheduleOnce((function(){t.AnimationWin(),e.AnimationWin();var i=n.cardSelects.findIndex((function(t){return t.data.type==e.data.type}));n.cardSelects.splice(i,1),n.scheduleOnce((function(){n.isFlip=!1}),1)}),1)}),1),{v:void 0}},s=i(this.cardSelects);!(o=s()).done;)if(a=r())return a.v;e.instance.cardSelects.push(t),this.cardSelects.length>1&&D.instance.playEffect(5),3==this.cardSelects.length?D.instance.playSai():this.isFlip=!1},e}(y)).instance=null,R=e((F=H).prototype,"cards",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),k=e(F.prototype,"possitions",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),U=e(F.prototype,"dataGame",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=e(F.prototype,"countCardNode",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=e(F.prototype,"countCardLbl",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Q=e(F.prototype,"time",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=e(F.prototype,"handTutorial",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=e(F.prototype,"leveCurrent",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),L=F))||L));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SoundManager.ts","./StarCtrl.ts","./Card.ts","./Data.ts","./DataGame.ts","./DataMini.ts","./Gameplay.ts","./ScaleButton.ts","./SoundGame.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ScaleButton.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,i,o,r,a,s,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.CCFloat,c=t.Vec3,u=t.Component}],execute:function(){var l,p,h,d,f;r._RF.push({},"a34904VxlxMrbkiRn4O/Pee","ScaleButton",void 0);var g=a.ccclass,v=a.property;t("ScaleButton",(l=g("ScaleButton"),p=v(s),l((f=e((d=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,i(e,"size",f,o(e)),e}n(e,t);var r=e.prototype;return r.start=function(){},r.isMobile=function(){return/android|iphone|ipod/.test(navigator.userAgent.toLowerCase())},r.isIpad=function(){return/ipad/.test(navigator.userAgent.toLowerCase())||/macintosh/.test(navigator.userAgent.toLowerCase())&&"ontouchend"in document},r.update=function(t){1==this.isMobile()&&(this.node.scale=new c(this.size,this.size,this.size))},e}(u)).prototype,"size",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1.5}}),h=d))||h));r._RF.pop()}}}));

System.register("chunks:///_virtual/SoundGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,i,r,o,a,u,l,c,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,u=e.AudioSource,l=e.AudioClip,c=e.randomRangeInt,s=e.Component}],execute:function(){var p,f,h,g,y,b,d,S,m,z,w,v,D,O,x,G,P,R;o._RF.push({},"c60aeKR0SpJ/ZzQ85MSPWPe","SoundGame",void 0);var _=a.ccclass,A=a.property;e("SoundGame",(p=_("SoundGame"),f=A(u),h=A(u),g=A(l),y=A(l),b=A(l),d=A(l),S=A(l),p(((R=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return n=e.call.apply(e,[this].concat(o))||this,i(n,"source",w,r(n)),i(n,"sourceBg",v,r(n)),i(n,"thoais",D,r(n)),i(n,"bg",O,r(n)),i(n,"dung",x,r(n)),i(n,"sai",G,r(n)),i(n,"effect",P,r(n)),n.indexDung=0,n}t(n,e);var o=n.prototype;return o.onLoad=function(){n.instance=this},o.start=function(){},o.playThaoi=function(e){this.source.playOneShot(this.thoais[e],1)},o.playDung=function(){1!=this.indexDung&&(this.indexDung=1,this.source.playOneShot(this.dung[c(0,this.dung.length)],1))},o.playSai=function(){this.source.playOneShot(this.sai[c(0,this.sai.length)],1)},o.playEffect=function(e){this.source.playOneShot(this.effect[e],1)},o.playSoundCard=function(e){this.source.playOneShot(e,1)},n}(s)).instance=null,w=n((z=R).prototype,"source",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=n(z.prototype,"sourceBg",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=n(z.prototype,"thoais",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=n(z.prototype,"bg",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=n(z.prototype,"dung",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),G=n(z.prototype,"sai",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),P=n(z.prototype,"effect",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=z))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/SoundManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,i,t,r,o,a,u,l,c;return{setters:[function(n){e=n.applyDecoratedDescriptor,i=n.inheritsLoose,t=n.initializerDefineProperty,r=n.assertThisInitialized},function(n){o=n.cclegacy,a=n._decorator,u=n.AudioSource,l=n.AudioClip,c=n.Component}],execute:function(){var s,p,d,f,g,y,h,m,b,S;o._RF.push({},"67f65S9g4NP37ZdgmmLBncW","SoundManager",void 0);var v=a.ccclass,_=a.property;n("SoundManager",(s=v("SoundManager"),p=_(u),d=_(l),f=_(l),s(((S=function(n){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o))||this,t(e,"audio",h,r(e)),t(e,"sao",m,r(e)),t(e,"Endgame",b,r(e)),e}i(e,n);var o=e.prototype;return o.__preload=function(){e.instance=this},o.playSao=function(){this.audio.playOneShot(this.sao,.5)},o.playEndgame=function(){this.audio.playOneShot(this.Endgame,.5)},e}(c)).instance=void 0,h=e((y=S).prototype,"audio",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(y.prototype,"sao",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(y.prototype,"Endgame",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/StarCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SoundManager.ts","./Gameplay.ts"],(function(t){var n,e,a,i,o,r,c,l,s,u,p,d,f,h;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,a=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,r=t._decorator,c=t.Node,l=t.tween,s=t.Vec3,u=t.director,p=t.Animation,d=t.Component},function(t){f=t.SoundManager},function(t){h=t.Gameplay}],execute:function(){var m,g,b,y,S,w,v,C,T,A;o._RF.push({},"66c26VKi6dFdZP42VJLPg7G","StarCtrl",void 0);var G=r.ccclass,N=r.property;t("StarCtrl",(m=G("StarCtrl"),g=N(c),b=N(c),y=N(c),m(((A=function(t){function n(){for(var n,e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return n=t.call.apply(t,[this].concat(o))||this,a(n,"nodetinhsao",v,i(n)),a(n,"board",C,i(n)),a(n,"stars",T,i(n)),n.diem=0,n}e(n,t);var o=n.prototype;return o.__preload=function(){null==n.instance&&(n.instance=this)},o.start=function(){},o.showNode=function(){var t=this;console.log("[RESULT]: "+(((new Date).getTime()-h.instance.startTime)/1e3).toFixed(2)+" - "+this.diem),f.instance.playEndgame(),this.nodetinhsao.active=!0,l(this.nodetinhsao).to(.5,{scale:new s(.4,.4,1)}).call((function(){l(t.board).to(.5,{scale:new s(1,1,1)}).call((function(){t.ShowStars()})).start()})).start()},o.btnReset=function(){f.instance=null,n.instance=null,u.loadScene("Gameplay")},o.btnBackGame=function(){console.log("[ACTION]: BACK")},o.btnNextGame=function(){console.log("[ACTION]: NEXTGAME")},o.btnListgame=function(){console.log("[ACTION]: SHOWLISTGAME")},o.ShowStars=function(){var t=this;this.stars.forEach((function(n,e){e<t.diem&&t.scheduleOnce((function(){l(n).to(.2,{scale:new s(1,1,1)}).call((function(){n.getComponent(p).play("scale"),f.instance.playSao()})).start()}),.2*e)}))},o.SetDiem=function(t){this.diem=t},n}(d)).instance=void 0,v=n((w=A).prototype,"nodetinhsao",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=n(w.prototype,"board",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=n(w.prototype,"stars",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),S=w))||S));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});