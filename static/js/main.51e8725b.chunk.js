(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/cake.9a59aa06.jpeg"},function(e,a,t){e.exports=t.p+"static/media/donut.3f4d0321.jpeg"},function(e,a,t){e.exports=t.p+"static/media/cookie.3f1b7485.jpeg"},function(e,a,t){e.exports=t.p+"static/media/candy.7950d1e6.jpeg"},function(e,a,t){e.exports=t.p+"static/media/croissant.e1867ba3.jpeg"},function(e,a,t){e.exports=t.p+"static/media/roll.cd12675a.jpeg"},function(e,a,t){e.exports=t.p+"static/media/cracker.00761bbe.jpeg"},,,,,function(e,a,t){e.exports=t.p+"static/media/devil1.1d495738.png"},,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/victory.d030d23b.png"},function(e,a,t){e.exports=t.p+"static/media/game-over.b06bc8e3.png"},function(e,a,t){e.exports=t.p+"static/media/memory-game.ca2b0758.png"},function(e,a,t){e.exports=t.p+"static/media/dialog_menu.e184b15c.png"},function(e,a,t){e.exports=t.p+"static/media/sfx_player_plane_ex_chomp_01.7c1639c9.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_player_plane_ex_chomp_02.a5961d43.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_player_plane_ex_chomp_03.c981c804.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_player_plane_ex_chomp_04.d62f64be.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_player_plane_ex_chomp_05.18e7316a.mp3"},function(e,a,t){e.exports=t.p+"static/media/devil_voice1.d7ae290c.mp3"},function(e,a,t){e.exports=t.p+"static/media/devil_voice2.ff2d16e5.mp3"},function(e,a,t){e.exports=t.p+"static/media/devil_voice3.ac4cf7bc.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_player_parry_power_increment_p1.b71e8a36.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_player_parry_power_increment_p2.38079b46.mp3"},function(e,a,t){e.exports=t.p+"static/media/VICTORY.6f196df8.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_flower_laughs_01.3c2104a9.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_flower_laughs_02.c396bbc9.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_flower_laughs_03.dc154994.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_flower_laughs_04.d4e97010.mp3"},function(e,a,t){e.exports=t.p+"static/media/sfx_flower_laughs_05.4413fb38.mp3"},function(e,a,t){e.exports=t.p+"static/media/MUS_Mausoleum.064dd73a.mp3"},function(e,a,t){e.exports=t.p+"static/media/shadow.fb0d578b.png"},,function(e,a,t){e.exports=t(57)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(10),r=t.n(i),c=(t(51),t(20)),l=t(11),s=t(12),u=t(15),d=t(16),m=t(22),p=t.n(m),h=function(e){var a=e.cardToCheck,t=e.card,n=e.flipCard,i=e.matchedCards,r=e.disabled;return console.log(t.url),o.a.createElement(p.a,{className:"noSelect",containerStyle:{opacity:"".concat(i?"0":"1"),transition:"all 0.5s ease",marginTop:"".concat(i?"-10px":"0"),marginBottom:"".concat(i?"10px":"0"),cursor:"".concat(i?"auto":"pointer"),userSelect:"none"},isFlipped:i||a,flipSpeedBackToFront:.3,flipSpeedFrontToBack:.3},o.a.createElement("div",{onClick:function(){return r?null:n(t)},className:"card card_back"}),o.a.createElement("div",{onClick:function(){return r?null:n(t)},style:{backgroundImage:"url(".concat(t.url,")"),backgroundSize:"cover"},className:"card card_front"}))},f=t(58),g=function(e){var a,t=e.game,n=(e.soundOff,e.cards),i=e.cardToCheck,r=e.matchedCards,c=e.flipCard,l=e.disabled,s=(e.timeRemaining,e.level);"simple"===s&&(a="card-list__block_simple"),"regular"===s&&(a="card-list__block_regular"),"expert"===s&&(a="card-list__block_expert");var u=t?"":"card-list_disabled";return o.a.createElement(f.a,{in:t,unmountOnExit:!0,timeout:300,classNames:"fade"},o.a.createElement("div",{className:"card-list ".concat(u)},o.a.createElement("div",{className:"card-list__block  ".concat(a)},n.map((function(e,a){return o.a.createElement(h,{key:a,card:e,cardToCheck:JSON.stringify(i).includes(e.id),matchedCards:JSON.stringify(r).includes(e.id),flipCard:c,disabled:l||JSON.stringify(r).includes(e.id)})})))))},v=t(23),_=t.n(v),b=function(e){var a=e.victory,t=e.tryAgain,n=e.goToMenu;return o.a.createElement(f.a,{classNames:"popup__modal",unmountOnExit:!0,in:a,timeout:300},o.a.createElement("div",{className:"popup popup_victory"},o.a.createElement("div",{className:"popup__overlay"},o.a.createElement("div",{className:"modal modal_result"},o.a.createElement("div",{className:"modal__text-block modal__text-block_result"},o.a.createElement("img",{className:"modal__result-img",src:_.a,alt:"victory"})),o.a.createElement("div",{className:"modal__buttons-block modal__buttons-block_result"},o.a.createElement("button",{className:"button button_brown button_result",onClick:function(){return n()}},"Menu"),o.a.createElement("button",{className:"button button_orange button_result",onClick:function(){return a?t():null}},"Start again"))))))},k=t(24),y=t.n(k),S=function(e){var a=e.gameOver,t=e.tryAgain,n=e.goToMenu;return o.a.createElement(f.a,{classNames:"popup__modal",unmountOnExit:!0,in:a,timeout:300},o.a.createElement("div",{className:"popup popup_victory"},o.a.createElement("div",{className:"popup__overlay"},o.a.createElement("div",{className:"modal modal_result"},o.a.createElement("div",{className:"modal__text-block modal__text-block_result"},o.a.createElement("img",{className:"modal__result-img modal__result-img_gameOver",src:y.a,alt:"victory"})),o.a.createElement("div",{className:"modal__buttons-block modal__buttons-block_result"},o.a.createElement("button",{className:"button button_brown button_result",onClick:function(){return n()}},"Menu"),o.a.createElement("button",{className:"button button_orange button_result",onClick:function(){return a?t():null}},"Start again"))))))},C=t(25),E=t.n(C),x=t(26),N=t.n(x),w=t(13),T=t.n(w),O=function(e){var a=e.menu,t=e.chooseDifficulty;return o.a.createElement(f.a,{classNames:"popup__modal",unmountOnExit:!0,in:a,timeout:300},o.a.createElement("div",{className:"main-menu"},o.a.createElement("img",{src:N.a,alt:"dialog",className:"dialog dialog_menu"}),o.a.createElement("img",{className:"devil__image devil__image_menu",src:T.a,alt:"devil"}),o.a.createElement("img",{src:E.a,alt:"memory-game",className:"main-menu__logo"}),o.a.createElement("div",{className:"main-menu__overlay"}),o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal__text-block"},"Don\u2019t let the Fat Devil steal all your sweets! Match the cards ",o.a.createElement("br",null)," on board till the time runs out."),o.a.createElement("div",{className:"modal__buttons-block"},o.a.createElement("button",{className:"button button_menu button_brown",onClick:function(){return t("simple")}},"Simple"),o.a.createElement("button",{className:"button button_menu button_purple",onClick:function(){return t("regular")}},"Regular"),o.a.createElement("button",{className:"button button_menu button_orange",onClick:function(){return t("expert")}},"Expert")))))},M=function(e){var a=e.timeRemaining,t=e.level,n="simple"===t?25:"regular"===t?30:"expert"===t?90:0;return o.a.createElement("div",{className:"progress-bar"},o.a.createElement("div",{className:"progress-bar__ends progress-bar__ends_top"}),o.a.createElement("span",{style:{animation:"progress-bar ".concat(n+.5,"s linear")}}),o.a.createElement("div",{className:"progress-bar__ends progress-bar__ends_bottom"}),o.a.createElement("div",{className:"timer"},a))},A=t(18),j=t(14),D=function(e){var a=e.game,t=e.timeRemaining,n=e.goToMenu,i=e.tryAgain,r=e.level,c=a?"":"top-line_disabled";return o.a.createElement(f.a,{in:a,unmountOnExit:!0,timeout:300,classNames:"fade"},o.a.createElement("div",{className:"top-line ".concat(c)},o.a.createElement("div",{className:"top-line__buttons"},o.a.createElement("button",{onClick:function(){return n()},className:"button button_orange button_top-line"},o.a.createElement(A.a,{icon:j.a})),o.a.createElement("button",{onClick:function(){return i()},className:"button button_brown button_top-line"},o.a.createElement(A.a,{icon:j.b}))),o.a.createElement(M,{timeRemaining:t,level:r})))},R=function(e){var a=e.game?"devil__image_up":"";return o.a.createElement("div",{className:"devil"},o.a.createElement("div",{className:"container"},o.a.createElement("img",{className:"devil__image ".concat(a),src:T.a,alt:"devil"})))},B=function(e){var a=e.game,t=e.menu;return o.a.createElement(f.a,{in:!a&&!t,unmountOnExit:!0,timeout:300,classNames:"fade"},o.a.createElement("div",{className:"curtain"}))},I=t(27),F=t.n(I),J=t(28),G=t.n(J),V=t(29),L=t.n(V),P=t(30),U=t.n(P),z=t(31),H=t.n(z),Y=t(32),q=t.n(Y),K=t(33),Q=t.n(K),W=t(34),X=t.n(W),Z=t(35),$=t.n(Z),ee=t(36),ae=t.n(ee),te=t(37),ne=t.n(te),oe=t(38),ie=t.n(oe),re=t(39),ce=t.n(re),le=t(40),se=t.n(le),ue=t(41),de=t.n(ue),me=t(42),pe=t.n(me),he=t(43),fe=t.n(he),ge=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).flipSound1=new Audio(F.a),e.flipSound2=new Audio(G.a),e.flipSound3=new Audio(L.a),e.flipSound4=new Audio(U.a),e.flipSound5=new Audio(H.a),e.heheStart1=new Audio(q.a),e.heheStart2=new Audio(Q.a),e.heheStart3=new Audio(X.a),e.dingSound1=new Audio($.a),e.dingSound2=new Audio(ae.a),e.victory=new Audio(ne.a),e.laugh1=new Audio(ie.a),e.laugh2=new Audio(ce.a),e.laugh3=new Audio(se.a),e.laugh4=new Audio(de.a),e.laugh5=new Audio(pe.a),e.backgroundMusic=new Audio(fe.a),e}return Object(s.a)(t,[{key:"volumeOff",value:function(){this.backgroundMusic.volume=0,this.laugh1.volume=0,this.laugh2.volume=0,this.laugh3.volume=0,this.laugh4.volume=0,this.laugh5.volume=0,this.victory.volume=0,this.dingSound1.volume=0,this.dingSound2.volume=0,this.heheStart1.volume=0,this.heheStart2.volume=0,this.heheStart3.volume=0,this.flipSound1.volume=0,this.flipSound2.volume=0,this.flipSound3.volume=0,this.flipSound4.volume=0,this.flipSound5.volume=0}},{key:"stopBackground",value:function(){this.backgroundMusic.currentTime=0,this.backgroundMusic.pause()}},{key:"playBackground",value:function(){this.backgroundMusic.volume=.4,this.backgroundMusic.play()}},{key:"pause",value:function(){}},{key:"gameOverLaugh",value:function(){switch(Math.floor(5*Math.random())+1){case 1:this.laugh1.play();break;case 2:this.laugh2.play();break;case 3:this.laugh3.play();break;case 4:this.laugh4.play();break;case 5:this.laugh5.play();break;default:this.laugh1.play()}}},{key:"victoryPlay",value:function(){this.victory.play()}},{key:"cons",value:function(){console.log("Hi!")}},{key:"cardMatch",value:function(){switch(Math.floor(2*Math.random())+1){case 1:this.dingSound1.play();break;case 2:this.dingSound2.play();break;default:this.dingSound1.play()}}},{key:"devilVoice",value:function(){switch(Math.floor(3*Math.random())+1){case 1:this.heheStart1.play();break;case 2:this.heheStart2.play();break;case 3:this.heheStart3.play();break;default:this.heheStart1.play()}}},{key:"flip",value:function(){switch(Math.floor(6*Math.random())+1){case 1:this.flipSound1.play();break;case 2:this.flipSound2.play();break;case 3:this.flipSound3.play();break;case 4:this.flipSound4.play();break;case 5:this.flipSound5.play();break;default:this.flipSound1.play()}}},{key:"cancelFlip",value:function(){this.flipSound.pause()}}]),t}(o.a.Component),ve=t(44),_e=t.n(ve),be=t(2),ke=t.n(be),ye=t(4),Se=t.n(ye),Ce=t(3),Ee=t.n(Ce),xe=t(5),Ne=t.n(xe),we=t(7),Te=t.n(we),Oe=t(6),Me=t.n(Oe),Ae=t(8),je=t.n(Ae),De=[{cards:[{name:"cake",id:1234,url:ke.a},{name:"cookie",id:1235,url:Se.a},{name:"cake",id:1236,url:ke.a},{name:"cookie",id:1237,url:Se.a},{name:"donut",id:1238,url:Ee.a},{name:"donut",id:1239,url:Ee.a},{name:"candy",id:1240,url:Ne.a},{name:"candy",id:1241,url:Ne.a},{name:"roll",id:1242,url:Te.a},{name:"roll",id:1243,url:Te.a},{name:"croissant",id:1244,url:Me.a},{name:"croissant",id:1245,url:Me.a}],difficulty:"simple"},{cards:[{name:"cake",id:1234,url:ke.a},{name:"cookie",id:1235,url:Se.a},{name:"cake",id:1236,url:ke.a},{name:"cookie",id:1237,url:Se.a},{name:"donut",id:1238,url:Ee.a},{name:"donut",id:1239,url:Ee.a},{name:"candy",id:1240,url:Ne.a},{name:"candy",id:1241,url:Ne.a},{name:"roll",id:1242,url:Te.a},{name:"roll",id:1243,url:Te.a},{name:"croissant",id:1244,url:Me.a},{name:"croissant",id:1245,url:Me.a},{name:"cracker",id:1246,url:je.a},{name:"cracker",id:1247,url:je.a},{name:"donut",id:1248,url:Ee.a},{name:"donut",id:1249,url:Ee.a},{name:"cake",id:1250,url:ke.a},{name:"cake",id:1251,url:ke.a}],difficulty:"regular"},{cards:[{name:"cake",id:1234,url:ke.a},{name:"cookie",id:1235,url:Se.a},{name:"cake",id:1236,url:ke.a},{name:"cookie",id:1237,url:Se.a},{name:"donut",id:1238,url:Ee.a},{name:"donut",id:1239,url:Ee.a},{name:"candy",id:1240,url:Ne.a},{name:"candy",id:1241,url:Ne.a},{name:"roll",id:1242,url:Te.a},{name:"roll",id:1243,url:Te.a},{name:"croissant",id:1244,url:Me.a},{name:"croissant",id:1245,url:Me.a},{name:"cracker",id:1246,url:je.a},{name:"cracker",id:1247,url:je.a},{name:"donut",id:1248,url:Ee.a},{name:"donut",id:1249,url:Ee.a},{name:"cake",id:1250,url:ke.a},{name:"cake",id:1251,url:ke.a},{name:"candy",id:1252,url:Ne.a},{name:"candy",id:1253,url:Ne.a},{name:"croissant",id:1254,url:Me.a},{name:"cookie",id:1255,url:Se.a},{name:"cookie",id:1256,url:Se.a},{name:"croissant",id:1257,url:Me.a},{name:"cake",id:1258,url:ke.a},{name:"cake",id:1259,url:ke.a},{name:"cracker",id:1260,url:je.a},{name:"cracker",id:1261,url:je.a}],difficulty:"expert"}],Re=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=a.call.apply(a,[this].concat(o))).audioController=new ge,e.shuffleCards=function(e){var a,t,n;for(n=e.length-1;n>0;n--)a=Math.floor(Math.random()*(n+1)),t=e[n],e[n]=e[a],e[a]=t;return e},e.state={cards:[],cardToCheck:[],matchedCards:[],disabled:!0,victory:!1,gameOver:!1,menu:!0,timeRemaining:null,level:"",game:!1,sound:!0},e.soundOff=function(){e.audioController.volumeOff()},e.goToMenu=function(){e.setState({menu:!0}),e.setState({cardToCheck:[]}),e.setState({matchedCards:[]}),e.setState({disabled:!1}),e.setState({gameOver:!1}),e.setState({victory:!1}),clearInterval(e.countDown),e.audioController.stopBackground(),e.setState({game:!1})},e.startCountDown=function(){return setInterval((function(){console.log("tick"),console.log(e.state.timeRemaining),e.setState((function(e){var a=e.timeRemaining;return{timeRemaining:--a}})),0===e.state.timeRemaining&&e.gameOver()}),1e3)},e.chooseDifficulty=function(a){var t;e.setState({level:a}),"simple"===a&&(t=De[0].cards),"regular"===a&&(t=De[1].cards),"expert"===a&&(t=De[2].cards),e.setState({cards:t},e.startGame(a))},e.startGame=function(a){var t;"simple"===a&&(t=25),"regular"===a&&(t=30),"expert"===a&&(t=90),e.setState({cardToCheck:[]}),e.setState({matchedCards:[]}),e.setState({disabled:!0}),e.setState({menu:!1}),e.setState({timeRemaining:t}),e.setState({game:!0}),setTimeout((function(){var a=e.shuffleCards(e.state.cards);e.setState({cards:a}),e.audioController.playBackground(),e.setState({disabled:!1}),e.countDown=e.startCountDown(),e.audioController.devilVoice()}),500)},e.tryAgain=function(){var a;"simple"===e.state.level&&(a=25),"regular"===e.state.level&&(a=30),"expert"===e.state.level&&(a=90),e.setState({victory:!1}),e.setState({gameOver:!1}),clearInterval(e.countDown),e.setState({cardToCheck:[]}),e.setState({matchedCards:[]}),e.setState({disabled:!0}),e.setState({timeRemaining:a}),e.setState({game:!1}),e.audioController.pause(),setTimeout((function(){var a=e.shuffleCards(e.state.cards);e.setState({cards:a}),e.setState({game:!0}),e.audioController.playBackground(),e.setState({disabled:!1}),e.countDown=e.startCountDown(),e.audioController.devilVoice()}),500)},e.victory=function(){clearInterval(e.countDown),e.setState({victory:!0}),e.setState({game:!1}),e.audioController.victoryPlay(),e.audioController.stopBackground()},e.gameOver=function(){clearInterval(e.countDown),e.setState({gameOver:!0}),e.setState({game:!1}),e.audioController.gameOverLaugh(),e.audioController.stopBackground()},e.menu=function(){e.setState({gameOver:!1}),e.setState({victory:!1}),e.setState({menu:!0}),e.setState({game:!1})},e.setCardToCheck=function(a){console.log(a),e.setState({cardToCheck:[].concat(Object(c.a)(e.state.cardToCheck),[a])})},e.checkForCardMatch=function(a){a.name===e.state.cardToCheck[0].name?e.cardMatch(a,e.state.cardToCheck[0]):e.cardMisMatch(),setTimeout((function(){e.setState({cardToCheck:[]}),e.setState({disabled:!1})}),350)},e.cardMisMatch=function(){e.setState({disabled:!0}),setTimeout((function(){e.setState({cardToCheck:[]}),e.setState({disabled:!1})}),350)},e.cardMatch=function(a,t){setTimeout((function(){e.audioController.cardMatch(),e.setState({matchedCards:[].concat(Object(c.a)(e.state.matchedCards),[a,t])}),e.state.matchedCards.length===e.state.cards.length&&!1===e.state.gameOver&&(clearInterval(e.countDown),setTimeout((function(){return e.victory()}),400))}),350)},e.flipCard=function(a){console.log("flipped!"),console.log(e.state.matchedCards),console.log(e.audioController),e.audioController.cons(),e.audioController.flip(),e.canFlipCard(a)?(console.log("passed"),e.state.cardToCheck.length>0&&e.state.cardToCheck.length<2?(e.setState({disabled:!0}),e.setCardToCheck(a),e.checkForCardMatch(a),console.log(e.state.cardToCheck.length)):(console.log("set"),e.setState({disabled:!1}),e.setCardToCheck(a))):e.setState({cardToCheck:[]})},e.canFlipCard=function(a){return!e.state.disabled&&!JSON.stringify(e.state.matchedCards).includes(a.id)&&!JSON.stringify(e.state.cardToCheck).includes(a.id)},e}return Object(s.a)(t,[{key:"componentDidUpdate",value:function(){console.log("I updated")}},{key:"render",value:function(){return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"container"},o.a.createElement(B,{game:this.state.game,menu:this.state.menu}),o.a.createElement("div",{className:"shadow-block"}),o.a.createElement("img",{src:_e.a,alt:"shadow",className:"shadow"}),o.a.createElement(D,{level:this.state.level,tryAgain:this.tryAgain,goToMenu:this.goToMenu,game:this.state.game,timeRemaining:this.state.timeRemaining}),o.a.createElement(O,{chooseDifficulty:this.chooseDifficulty,menu:this.state.menu,startGame:this.startGame}),o.a.createElement(S,{goToMenu:this.goToMenu,gameOver:this.state.gameOver,tryAgain:this.tryAgain}),o.a.createElement(b,{goToMenu:this.goToMenu,victory:this.state.victory,tryAgain:this.tryAgain}),o.a.createElement(R,{game:this.state.game}),o.a.createElement(g,{cardToCheck:this.state.cardToCheck,flipCard:this.flipCard,cards:this.state.cards,matchedCards:this.state.matchedCards,disabled:this.state.disabled,timeRemaining:this.state.timeRemaining,level:this.state.level,soundOff:this.soundOff,game:this.state.game})))}}]),t}(o.a.Component),Be=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(Re,null))};r.a.render(o.a.createElement(Be,null),document.getElementById("root"))}],[[46,1,2]]]);
//# sourceMappingURL=main.51e8725b.chunk.js.map