System.register("chunks:///_virtual/Card.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Gameplay.ts","./SoundGame.ts"],(function(exports){var _applyDecoratedDescriptor,_inheritsLoose,_initializerDefineProperty,_assertThisInitialized,cclegacy,_decorator,Sprite,SpriteFrame,Label,Node,Prefab,Input,Vec3,instantiate,tween,Tween,Quat,Component,Gameplay,SoundGame;return{setters:[function(e){_applyDecoratedDescriptor=e.applyDecoratedDescriptor,_inheritsLoose=e.inheritsLoose,_initializerDefineProperty=e.initializerDefineProperty,_assertThisInitialized=e.assertThisInitialized},function(e){cclegacy=e.cclegacy,_decorator=e._decorator,Sprite=e.Sprite,SpriteFrame=e.SpriteFrame,Label=e.Label,Node=e.Node,Prefab=e.Prefab,Input=e.Input,Vec3=e.Vec3,instantiate=e.instantiate,tween=e.tween,Tween=e.Tween,Quat=e.Quat,Component=e.Component},function(e){Gameplay=e.Gameplay},function(e){SoundGame=e.SoundGame}],execute:function(){var _dec,_dec2,_dec3,_dec4,_dec5,_dec6,_dec7,_dec8,_dec9,_dec10,_class,_class2,_descriptor,_descriptor2,_descriptor3,_descriptor4,_descriptor5,_descriptor6,_descriptor7,_descriptor8,_descriptor9;cclegacy._RF.push({},"70e2e0T8rJHmJjpCMq+3xyh","Card",void 0);var ccclass=_decorator.ccclass,property=_decorator.property,Card=exports("Card",(_dec=ccclass("node"),_dec2=property(Sprite),_dec3=property(SpriteFrame),_dec4=property(Sprite),_dec5=property(Label),_dec6=property(Node),_dec7=property(Node),_dec8=property(Node),_dec9=property(Node),_dec10=property(Prefab),_dec((_class2=function(_Component){function Card(){for(var e,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return e=_Component.call.apply(_Component,[this].concat(i))||this,_initializerDefineProperty(e,"avatar",_descriptor,_assertThisInitialized(e)),_initializerDefineProperty(e,"sprites",_descriptor2,_assertThisInitialized(e)),_initializerDefineProperty(e,"spriteMini",_descriptor3,_assertThisInitialized(e)),_initializerDefineProperty(e,"titleMini",_descriptor4,_assertThisInitialized(e)),_initializerDefineProperty(e,"layout1",_descriptor5,_assertThisInitialized(e)),_initializerDefineProperty(e,"layout2",_descriptor6,_assertThisInitialized(e)),_initializerDefineProperty(e,"layout3",_descriptor7,_assertThisInitialized(e)),e.data=null,_initializerDefineProperty(e,"containSprite",_descriptor8,_assertThisInitialized(e)),_initializerDefineProperty(e,"item",_descriptor9,_assertThisInitialized(e)),e.index=-1,e.sound=null,e.isFlip=!1,e}_inheritsLoose(Card,_Component);var _proto=Card.prototype;return _proto.start=function(){this.node.on(Input.EventType.TOUCH_END,this.BtnTouchEnd,this)},_proto.SetUp=function SetUp(data,index){if(this.index=index,this.data=data,0==index){this.sound=data.audio0;var levelCurrent=Gameplay.instance.leveCurrent;if(0!=levelCurrent&&1!=levelCurrent&&7!=levelCurrent&&11!=levelCurrent&&12!=levelCurrent&&13!=levelCurrent&&14!=levelCurrent&&15!=levelCurrent&&16!=levelCurrent&&17!=levelCurrent&&18!=levelCurrent&&19!=levelCurrent&&20!=levelCurrent&&21!=levelCurrent||(this.spriteMini.spriteFrame=data.sprite),2==levelCurrent||3==levelCurrent||4==levelCurrent||5==levelCurrent||6==levelCurrent||8==levelCurrent||9==levelCurrent){var number=eval(data.title);if(number<=4){this.containSprite.setScale(new Vec3(1/number,1/number,1/number));for(var i=0;i<number;i++){var newItem=instantiate(this.item);this.layout2.addChild(newItem),newItem.getComponent(Sprite).spriteFrame=data.sprite}}else{var top=Math.floor(number/2),bot=number-top;top>=bot&&this.containSprite.setScale(new Vec3(1/top,1/top,1/top)),top<bot&&this.containSprite.setScale(new Vec3(1/bot,1/bot,1/bot));for(var _i=0;_i<top;_i++){var _newItem=instantiate(this.item);this.layout1.addChild(_newItem),_newItem.getComponent(Sprite).spriteFrame=data.sprite}for(var _i2=0;_i2<bot;_i2++){var _newItem2=instantiate(this.item);this.layout3.addChild(_newItem2),_newItem2.getComponent(Sprite).spriteFrame=data.sprite}}}}1==index&&(this.sound=data.audio1,this.titleMini.string=data.title)},_proto.BtnTouchEnd=function(){0!=Gameplay.instance.startGame&&1!=Gameplay.instance.isFlip&&2!=Gameplay.instance.countSelectCard&&1!=this.isFlip&&(Gameplay.instance.timeSnake=10,0==Gameplay.instance.countSelectCard&&(Gameplay.instance.cardSelect1=this),SoundGame.instance.playEffect(2),Gameplay.instance.countSelectCard++,this.FlipCard(1),SoundGame.instance.playSoundCard(this.sound))},_proto.FlipCard=function(e){var t=this;this.isFlip=!0,Gameplay.instance.isFlip=!0,tween(this.node).to(.2,{scale:new Vec3(0,1,1)}).call((function(){t.avatar.spriteFrame=t.sprites[e],1==e?(t.titleMini.node.active=!0,t.spriteMini.node.active=!0,t.containSprite.active=!0,Gameplay.instance.isFlip=!1,2==Gameplay.instance.countSelectCard&&(t.data.type==Gameplay.instance.cardSelect1.data.type&&t.index!=Gameplay.instance.cardSelect1.index?(SoundGame.instance.playDung(),t.scheduleOnce((function(){t.AnimationWin(),Gameplay.instance.cardSelect1.AnimationWin(),SoundGame.instance.playEffect(0)}),.3)):(SoundGame.instance.playSai(),t.scheduleOnce((function(){t.FlipCard(0),Gameplay.instance.cardSelect1.FlipCard(0),Gameplay.instance.cardSelect1=null,Gameplay.instance.countSelectCard=0,t.isFlip=!1,Gameplay.instance.isFlip=!1}),1)))):(t.isFlip=!1,Gameplay.instance.isFlip=!1,t.titleMini.node.active=!1,t.spriteMini.node.active=!1,t.containSprite.active=!1)})).to(.2,{scale:new Vec3(1,1,1)}).start()},_proto.shakeCard=function(){var e=this,t=0,i=this.node.rotation.clone();!function r(){if(t>=1)tween(e.node).to(.2,{rotation:i}).start();else{var n=10*(Math.random()>.5?1:-1),a=Quat.fromEuler(new Quat,0,0,n);tween(e.node).to(.1,{rotation:a}).call((function(){t+=.1,r()})).start()}}()},_proto.AnimationWin=function(){var e=this;tween(this.node).to(.3,{scale:new Vec3(1.2,1.2,1.2)}).to(.3,{scale:new Vec3(1,1,1)}).call((function(){e.avatar.spriteFrame=e.sprites[0],e.titleMini.node.active=!1,e.spriteMini.node.active=!1,e.containSprite.active=!1;!function t(){tween(e.node).to(.2,{scale:new Vec3(-e.node.scale.x,e.node.scale.y,1)}).call((function(){e.node.setScale(new Vec3(Math.abs(e.node.scale.x)-.2,e.node.scale.y-.2,1)),t()})).start()}()})).to(1,{worldPosition:Gameplay.instance.countCardNode.worldPosition},{easing:"backIn"}).call((function(){e.node.active=!1,Tween.stopAllByTarget(e.node),e.isFlip=!1,Gameplay.instance.AddScore()})).start()},Card}(Component),_descriptor=_applyDecoratedDescriptor(_class2.prototype,"avatar",[_dec2],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor2=_applyDecoratedDescriptor(_class2.prototype,"sprites",[_dec3],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_descriptor3=_applyDecoratedDescriptor(_class2.prototype,"spriteMini",[_dec4],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor4=_applyDecoratedDescriptor(_class2.prototype,"titleMini",[_dec5],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor5=_applyDecoratedDescriptor(_class2.prototype,"layout1",[_dec6],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor6=_applyDecoratedDescriptor(_class2.prototype,"layout2",[_dec7],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor7=_applyDecoratedDescriptor(_class2.prototype,"layout3",[_dec8],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor8=_applyDecoratedDescriptor(_class2.prototype,"containSprite",[_dec9],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_descriptor9=_applyDecoratedDescriptor(_class2.prototype,"item",[_dec10],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_class=_class2))||_class));cclegacy._RF.pop()}}}));

System.register("chunks:///_virtual/Data.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,r,n,a,o,u,l;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.initializerDefineProperty},function(t){r=t.cclegacy,n=t._decorator,a=t.SpriteFrame,o=t.CCString,u=t.CCInteger,l=t.AudioClip}],execute:function(){var c,p,s,f,b,h,y,g,d,D,m,z,v;r._RF.push({},"3f90a86/2JDfYyThvNzeXHs","Data",void 0);var w=n.ccclass,C=n.property;t("Data",(c=w("Data"),p=C(a),s=C(o),f=C(u),b=C(l),h=C(l),c((d=e((g=function(){i(this,"sprite",d,this),i(this,"title",D,this),i(this,"type",m,this),i(this,"audio0",z,this),i(this,"audio1",v,this)}).prototype,"sprite",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(g.prototype,"title",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),m=e(g.prototype,"type",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),z=e(g.prototype,"audio0",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(g.prototype,"audio1",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=g))||y));r._RF.pop()}}}));

System.register("chunks:///_virtual/DataGame.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DataMini.ts"],(function(t){var e,a,i,n,r,o,c,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,a=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,c=t.Component},function(t){s=t.DataMini}],execute:function(){var u,l,p,f,D;r._RF.push({},"9d828CnQRxInZLHIPoNZCGi","DataGame",void 0);var d=o.ccclass,y=o.property;t("DataGame",(u=d("DataGame"),l=y(s),u((D=e((f=function(t){function e(){for(var e,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r))||this,i(e,"dataMini",D,n(e)),e}return a(e,t),e}(c)).prototype,"dataMini",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),p=f))||p));r._RF.pop()}}}));

System.register("chunks:///_virtual/DataMini.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Data.ts"],(function(t){var i,e,r,a,n,o;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.initializerDefineProperty},function(t){r=t.cclegacy,a=t._decorator,n=t.CCString},function(t){o=t.Data}],execute:function(){var c,u,l,s,p,d,f;r._RF.push({},"db0d6jJolRN757Ce273zTd9","DataMini",void 0);var D=a.ccclass,b=a.property;t("DataMini",(c=D("DataMini"),u=b(n),l=b(o),c((d=i((p=function(){e(this,"id",d,this),e(this,"datas",f,this)}).prototype,"id",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=i(p.prototype,"datas",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),s=p))||s));r._RF.pop()}}}));

System.register("chunks:///_virtual/Gameplay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Card.ts","./DataGame.ts","./DataMini.ts","./StarCtrl.ts","./SoundGame.ts"],(function(t){var e,n,i,a,r,o,s,c,u,l,h,d,f,m,p,C,g,b,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,s=t.Node,c=t.Vec3,u=t.Label,l=t.CCInteger,h=t.tween,d=t.randomRangeInt,f=t.Animation,m=t.Component},function(t){p=t.Card},function(t){C=t.DataGame},function(t){g=t.DataMini},function(t){b=t.StarCtrl},function(t){v=t.SoundGame}],execute:function(){var y,S,w,T,D,G,M,N,P,A,z,L,R,E,O,k,F,I;r._RF.push({},"57249NPi6BATbQMAm/BvRIl","Gameplay",void 0);var Q=o.ccclass,U=o.property;t("Gameplay",(y=Q("Gameplay"),S=U(s),w=U(c),T=U(C),D=U(s),G=U(u),M=U(u),N=U(l),y(((I=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return e=t.call.apply(t,[this].concat(r))||this,i(e,"cards",z,a(e)),i(e,"possitions",L,a(e)),i(e,"dataGame",R,a(e)),i(e,"countCardNode",E,a(e)),i(e,"countCardLbl",O,a(e)),i(e,"time",k,a(e)),e.startGame=!1,e.isFlip=!1,e.countSelectCard=0,i(e,"leveCurrent",F,a(e)),e.dataMini=new g,e.cardSelect1=null,e.countCard=0,e.currentQuestion=0,e.timeNumber=90,e.scheduleTime=null,e.timeSnake=3,e.score=0,e}n(e,t);var r=e.prototype;return r.onLoad=function(){e.instance=this},r.SetDataMini=function(){this.dataMini=this.dataGame.dataMini[this.leveCurrent]},r.start=function(){var t=this,e=this.getParamUrl("input");this.dataGame.dataMini.forEach((function(n,i){n.id==e&&(t.leveCurrent=i)})),this.shuffleAndMoveToOriginal(),this.SetDataMini(),this.SetDataCard(),this.shuffleNodes(this.possitions),v.instance.playEffect(3)},r.getParamUrl=function(t){var e=window.location.href;return new URL(e).searchParams.get(t)},r.shuffleAndMoveToOriginal=function(){var t=this,e=[];this.cards.forEach((function(t){e.push(new Promise((function(e){var n=0;!function i(){if(n>=2)e();else{var a=new c(d(-250,250),d(-250,250),t.position.z);h(t).to(.3,{position:a}).call((function(){n+=.3,i()})).start()}}()})))})),Promise.all(e).then((function(){var e=[];t.cards.forEach((function(n,i){e.push(new Promise((function(e){h(n).to(.3,{worldPosition:t.possitions[i].clone()}).call((function(){e()})).start(),h(n).to(.3,{angle:d(-10,10)}).start()})))})),Promise.all(e).then((function(){0==t.leveCurrent&&v.instance.playThaoi(0),1==t.leveCurrent&&v.instance.playThaoi(1),t.leveCurrent>1&&t.leveCurrent<11&&v.instance.playThaoi(3),t.leveCurrent>=11&&v.instance.playThaoi(2),t.cards.forEach((function(e){e.getComponent(p).FlipCard(1),t.scheduleOnce((function(){e.getComponent(p).FlipCard(0),t.scheduleOnce((function(){t.startGame=!0,t.scheduleTime&&t.unschedule(t.scheduleTime),t.CountDownTime()}),.4)}),2)}))}))}))},r.CountDownTime=function(){var t=this;this.scheduleTime=function(){t.timeNumber--,t.time.string="00:"+t.timeNumber,6==t.timeNumber&&t.time.node.parent.getComponent(f).play("time"),0==t.timeNumber&&(t.startGame=!1,t.TinhScore(),b.instance.showNode(),t.unschedule(t.scheduleTime))},this.schedule(this.scheduleTime,1)},r.SetDataCard=function(){for(var t=0,e=0;e<3;e++)for(var n=this.dataMini.datas[e+3*this.currentQuestion],i=0;i<2;i++)this.cards[t].getComponent(p).SetUp(n,i),t++},r.update=function(t){this.timeSnake-=t,this.timeSnake<0&&(this.timeSnake=10,this.cards.forEach((function(t){t.getComponent(p).shakeCard()})))},r.shuffleNodes=function(t){for(var e=t.length,n=0;n<e;n++){var i=this.getRandomInt(0,e),a=[t[i],t[n]];t[n]=a[0],t[i]=a[1]}return t},r.getRandomInt=function(t,e){return Math.floor(Math.random()*(e-t))+t},r.AddScore=function(){var t=this;this.cardSelect1=null,this.countSelectCard=0,this.isFlip=!1,this.score+=1,this.countCard++,this.countCardLbl.string=this.countCard+"/6",this.score%2==0&&v.instance.playEffect(1),6==this.score&&(this.unschedule(this.scheduleTime),this.scheduleOnce((function(){t.countCard=0,t.countCardLbl.string=t.countCard+"/6",t.Reset()}),.5)),12==this.score&&(this.startGame=!1,this.scheduleOnce((function(){b.instance.SetDiem(3),b.instance.showNode()}),2))},r.Reset=function(){this.cards.forEach((function(t){t.angle=0,t.setScale(new c(1,1,1)),t.setPosition(new c(0,0,0)),t.active=!0,t.getComponent(p).layout1.destroyAllChildren(),t.getComponent(p).layout2.destroyAllChildren(),t.getComponent(p).layout3.destroyAllChildren()})),this.startGame=!1,this.currentQuestion=1,this.shuffleNodes(this.possitions),this.shuffleAndMoveToOriginal(),this.SetDataMini(),this.SetDataCard()},r.TinhScore=function(){this.score>10?b.instance.SetDiem(3):this.score>6?b.instance.SetDiem(2):b.instance.SetDiem(1)},e}(m)).instance=null,z=e((A=I).prototype,"cards",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),L=e(A.prototype,"possitions",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),R=e(A.prototype,"dataGame",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(A.prototype,"countCardNode",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(A.prototype,"countCardLbl",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(A.prototype,"time",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(A.prototype,"leveCurrent",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),P=A))||P));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./SoundManager.ts","./StarCtrl.ts","./Card.ts","./Data.ts","./DataGame.ts","./DataMini.ts","./Gameplay.ts","./SoundGame.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/SoundGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var n,t,i,o,r,a,u,c,l,s;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,u=e.AudioSource,c=e.AudioClip,l=e.randomRangeInt,s=e.Component}],execute:function(){var p,f,h,y,d,g,b,S,m,z,v,D,w,O;r._RF.push({},"c60aeKR0SpJ/ZzQ85MSPWPe","SoundGame",void 0);var x=a.ccclass,G=a.property;e("SoundGame",(p=x("SoundGame"),f=G(u),h=G(c),y=G(c),d=G(c),g=G(c),p(((O=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n=e.call.apply(e,[this].concat(r))||this,i(n,"source",m,o(n)),i(n,"thoais",z,o(n)),i(n,"dung",v,o(n)),i(n,"sai",D,o(n)),i(n,"effect",w,o(n)),n.indexDung=0,n}t(n,e);var r=n.prototype;return r.onLoad=function(){n.instance=this},r.playThaoi=function(e){this.source.playOneShot(this.thoais[e],.5)},r.playDung=function(){1!=this.indexDung&&(this.indexDung=1,this.source.playOneShot(this.dung[l(0,this.dung.length)],.5))},r.playSai=function(){this.source.playOneShot(this.sai[l(0,this.sai.length)],.5)},r.playEffect=function(e){this.source.playOneShot(this.effect[e],.5)},r.playSoundCard=function(e){this.source.playOneShot(e,.5)},n}(s)).instance=null,m=n((S=O).prototype,"source",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(S.prototype,"thoais",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),v=n(S.prototype,"dung",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=n(S.prototype,"sai",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=n(S.prototype,"effect",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=S))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/SoundManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var e,i,t,r,o,a,u,l,c;return{setters:[function(n){e=n.applyDecoratedDescriptor,i=n.inheritsLoose,t=n.initializerDefineProperty,r=n.assertThisInitialized},function(n){o=n.cclegacy,a=n._decorator,u=n.AudioSource,l=n.AudioClip,c=n.Component}],execute:function(){var s,p,d,f,g,y,h,m,b,S;o._RF.push({},"67f65S9g4NP37ZdgmmLBncW","SoundManager",void 0);var v=a.ccclass,_=a.property;n("SoundManager",(s=v("SoundManager"),p=_(u),d=_(l),f=_(l),s(((S=function(n){function e(){for(var e,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return e=n.call.apply(n,[this].concat(o))||this,t(e,"audio",h,r(e)),t(e,"sao",m,r(e)),t(e,"Endgame",b,r(e)),e}i(e,n);var o=e.prototype;return o.__preload=function(){e.instance=this},o.playSao=function(){this.audio.playOneShot(this.sao,.5)},o.playEndgame=function(){this.audio.playOneShot(this.Endgame,.5)},e}(c)).instance=void 0,h=e((y=S).prototype,"audio",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=e(y.prototype,"sao",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(y.prototype,"Endgame",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=y))||g));o._RF.pop()}}}));

System.register("chunks:///_virtual/StarCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./SoundManager.ts"],(function(t){var n,e,o,i,a,r,c,l,s,u,f,p;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,c=t.Node,l=t.tween,s=t.Vec3,u=t.Animation,f=t.Component},function(t){p=t.SoundManager}],execute:function(){var d,h,b,g,m,S,y,v,w,C;a._RF.push({},"66c26VKi6dFdZP42VJLPg7G","StarCtrl",void 0);var A=r.ccclass,N=r.property;t("StarCtrl",(d=A("StarCtrl"),h=N(c),b=N(c),g=N(c),d(((C=function(t){function n(){for(var n,e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return n=t.call.apply(t,[this].concat(a))||this,o(n,"nodetinhsao",y,i(n)),o(n,"board",v,i(n)),o(n,"stars",w,i(n)),n.diem=0,n}e(n,t);var a=n.prototype;return a.__preload=function(){null==n.instance&&(n.instance=this)},a.start=function(){},a.showNode=function(){var t=this;p.instance.playEndgame(),this.nodetinhsao.active=!0,l(this.nodetinhsao).to(.5,{scale:new s(.4,.4,1)}).call((function(){l(t.board).to(.5,{scale:new s(1,1,1)}).call((function(){t.ShowStars()})).start()})).start()},a.btnReset=function(){p.instance=null,n.instance=null},a.btnBackGame=function(){console.log("[ACTION]: BACK")},a.btnNextGame=function(){console.log("[ACTION]: NEXTGAME")},a.btnListgame=function(){console.log("[ACTION]: SHOWLISTGAME")},a.ShowStars=function(){var t=this;this.stars.forEach((function(n,e){e<t.diem&&t.scheduleOnce((function(){l(n).to(.2,{scale:new s(1,1,1)}).call((function(){n.getComponent(u).play("scale"),p.instance.playSao()})).start()}),.2*e)}))},a.SetDiem=function(t){this.diem=t},n}(f)).instance=void 0,y=n((S=C).prototype,"nodetinhsao",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=n(S.prototype,"board",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=n(S.prototype,"stars",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=S))||m));a._RF.pop()}}}));

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