# bookmarklets
useful bookmarklets to make browsing easier

## [OnSiteCountDown.bookmarklet](https://github.com/eapo/bookmarklets/blob/master/OnSiteCountDown.js)
Simple countdown timer with predefined defaults. 

### Simple *JavaScript* *Bookmarklet* to create countdown timer on any webpage easy:
1. Create the Bookmarklet
2. Run to show the countdown dialog on the site.
3. `[Alt] + [2]` to start `28 sec` countdown with notification sound at the end.
    - press `[Tab]` first in case the acceskeys are not active

##### Just copy the following code to the *URL* section of the new Bookmark:
```
javascript:/*OnSiteCountDown.js on github.com/eapo/bookmarklets */(function(){var container=document.createElement('div');container.id='container';container.style.cssText='position:fixed;bottom:10vw;left:10vh;width:200px;height:200px;background-color:red;opacity:0.3;border-radius:15px;z-index:9999;user-select:none;cursor:move;box-shadow:#fff 3px 3px 1px;';var close=document.createElement('div');close.style.cssText='position:absolute;top:0;right:0;width:1em;height:1em;border:2px solid #fff;border-radius:15px;text-align:center;font-size:1.3em;font-weight:bold;cursor:pointer;padding:0.7em;color:#fff;line-height:0;text-indent:-0.3em;font-family:monospace;';close.innerHTML='X';close.addEventListener('click', function(){document.body.removeChild(container);});var input=document.createElement('input');input.id='countdown';input.type='number';input.accessKey='s';input.title='Alt + s';input.style.cssText='width:100%;height:76%;font-size:72px;font-weight:bold;text-align:center;color:#fff;background-color:transparent;border:1px inset;border-radius:15px;';input.placeholder='Enter seconds';function playSound(){const ctx=new AudioContext();const osc=ctx.createOscillator();osc.type="sine";osc.frequency.value=432;osc.connect(ctx.destination);osc.start();osc.stop(ctx.currentTime + 0.18);ctx.oncomplete=function(event){const audioBuffer=event.renderedBuffer;const audioData=new Float32Array(audioBuffer.length);}}function startCountdown(){var countdown=parseInt(input.value);container.style.opacity='0.3';var interval=setInterval(function(){countdown--;input.value=countdown;if (countdown === 0){clearInterval(interval);container.style.opacity='1';playSound();}}, 1000);} input.addEventListener('keydown', function(event){if (event.key === 'Enter'){startCountdown();}});var controls=document.createElement('div');controls.style.display='flex';controls.style.justifyContent='space-between';controls.style.marginTop='10px';function addButton(v,a){var set1=document.createElement('button');set1.textContent=v;set1.accessKey=a;set1.title='Alt + '+a;set1.style.cssText='font-size:18px;font-weight:bold;padding:0 1em;font-family:monospace;background:none;border:none;';set1.addEventListener('click', function(event){event.preventDefault();input.value=v;startCountdown();});return set1;} controls.appendChild(addButton(9,1));controls.appendChild(addButton(28,2));controls.appendChild(addButton(57,3));container.appendChild(close);container.appendChild(input);container.appendChild(controls);document.body.appendChild(container);var isDragging=false;var offset ={x: 0, y: 0};container.addEventListener('mousedown', function(event){isDragging=true;offset.x=event.clientX - container.offsetLeft;offset.y=event.clientY - container.offsetTop;});container.addEventListener('mouseup', function(){isDragging=false;});container.addEventListener('mousemove', function(event){if (isDragging){container.style.left=(event.clientX - offset.x) + 'px';container.style.top=(event.clientY - offset.y) + 'px';}});})();
```

## string2qr.bookmarklet
Easy to use QR code generator using the amazing [kaywa.com](http://qrfree.kaywa.com) service.

##### Just copy the following code to the *URL* section of the new Bookmark:

```
javascript:var str=prompt('string2qr','default string');if(str.length>0){content=str;}else{content=document.location.href;}window.open('http://qrfree.kaywa.com/?l=1&s=8&d='+encodeURIComponent(content),'string2qr',false)`
```

## MarkDownLinkIt.bookmarklet

##### Just copy the following code to the *URL* section of the new Bookmark:

```
javascript:/*MarkDownLinkIt! bookmarklet*/ function utoa(t){return window.btoa(unescape(encodeURIComponent(t)))}var str=prompt("HIVE it!","["+document.title+"]("+document.location.href+")");str.length>0?content=str:content=document.location.href,window.open("https://hive.blog/submit.html?body="+utoa(content)+"&title="+utoa(document.title),"_blank",!1);
```

Optionally in case of pressing [OK] will open https://hive.blog/submit.html in a new window. This can be replaced with any other markdown editor to set as default.

## fb-chatdestroyer.bookmarklet

##### Just copy the following code to the *URL* section of the new Bookmark:

```
javascript:function RemoveContentInContainer(selector) { var nodeList = document.querySelectorAll(selector); for (var i = 0, length = nodeList.length; i < length; i++) { if (nodeList[i].parentNode) { nodeList[i].parentNode.removeChild(nodeList[i]);} }}RemoveContentInContainer(".opened");
```

## [bookmarklets/Night-Cafe-UX-booster](https://github.com/eapo/bookmarklets/blob/master/Night-Cafe-UX-booster)
Boosting the [NightCafe Creator](https://creator.nightcafe.studio/) user interface using [jQuery](https://jquery.com/)
Features
- [x] image enlargement
  - [x] on the dashboard of [My Creations](https://creator.nightcafe.studio/my-creations)
  - [x] and on the single page of cretions
  - [x] on the "Voting" section of [Daily Challenges](https://creator.nightcafe.studio/challenges)
- [x] hotkeys for voting
  - [x] on the "Voting" section of [Daily Challenges](https://creator.nightcafe.studio/challenges)

##### Just copy the following code to the *URL* section of the new Bookmark:

```
javascript:/*Night-Cafe UX booster*/(function(){const jq=document.createElement('script'); jq.src = "//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"; document.getElementsByTagName('head')[0].appendChild(jq); jq.onload=function(){ let ad=jQuery('div#ezmobfooter center'); ad.css({"position":"fixed","top":"0","left":"0","z-index":"999","height":"100vh","width":"auto"}).hide(); let nc=jQuery('img[alt="NightCafe Logo"]'); let vw=jQuery('img[sizes="100vw"]'); vw.hover(function(){jQuery(this).css({"margin":"0","position":"fixed","left":"0","max-height":"100%","height":"100vh","max-width":"100%","object-fit":"contain","z-index":"999","width":"auto"}); jQuery('body').css({"margin-left":vw.width()}); }, function(){ jQuery(this).css("z-index","-1"); }); vw.click(function(){ window.open(vw.attr('src'),'_blank');}); let spng=jQuery('span > span > span > img'); spng.hover(function(){ var src = jQuery(this).attr('src'); vw.attr('src',src).attr('srcset',src); }); /*NC Voter*/ var vi=jQuery('.modal-body img'); vi.clone().prependTo(ad); vi.click(function(){ window.open(vi.attr('src'),'_blank');}); jQuery.each(jQuery('.modal-body .css-wohve1'),function(i,val){$(this).attr('accesskey',i+1).append('<small style="font-size:9px;position:absolute;">Alt+'+(i+1)+'</sup>');}); document.addEventListener('keydown',function(e){if(e.keyCode==87){jQuery('span#ezmob-wrapper').css({"position":"fixed","z-index":"999"}); ad.children('img').attr('src',jQuery('.modal-body img').attr('src')).attr('srcset',jQuery('.modal-body img').attr('src')).css({"max-height":"100vh","width":"auto","height":"100vh"}); ad.show(); }; if(e.keyCode==81){ad.hide();}; }); /*NC Creations */ jQuery(".renderIfVisible img").hover(function(){var src=jQuery(this).attr('src'); nc.attr('src',src).css({"position":"fixed","z-index":"999","top":"0","left":"0","min-width":"min-content","width":"min-content"})}); document.addEventListener('keydown',function(e){if(e.keyCode==87){nc.show(); }; if(e.keyCode==81){nc.hide();}; }); };})()
```
