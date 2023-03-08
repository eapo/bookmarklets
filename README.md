# bookmarklets
useful bookmarklets to make browsing easier

## [OnSiteCountDown.bookmarklet](https://github.com/eapo/bookmarklets/blob/master/OnSiteCountDown.js)
Simple countdown timer with predefined defaults. 

##### Just copy the following code to the *URL* section of the new Bookmark:
```
javascript:/*OnSiteCountDown.js on github.com/eapo/bookmarklets */(function(){var container=document.createElement('div');container.id='container';container.style.position='fixed';container.style.top='50%';container.style.left='50%';container.style.transform='translate(-50%, -50%)';container.style.width='200px';container.style.height='200px';container.style.backgroundColor='red';container.style.opacity='0.3';container.style.borderRadius='10px';container.style.zIndex='9999';container.style.userSelect='none';container.style.webkitUserSelect='none';container.style.msUserSelect='none';container.style.cursor='move';var close=document.createElement('div');close.style.position='absolute';close.style.top='5px';close.style.right='5px';close.style.width='20px';close.style.height='20px';close.style.backgroundColor='white';close.style.borderRadius='50%';close.style.lineHeight='20px';close.style.textAlign='center';close.style.fontSize='14px';close.style.fontWeight='bold';close.style.cursor='pointer';close.innerHTML='X';close.addEventListener('click', function(){document.body.removeChild(container);});var input=document.createElement('input');input.id='countdown';input.type='number';input.style.width='100%';input.style.height='80%';input.style.fontSize='72px';input.style.fontWeight='bold';input.style.textAlign='center';input.style.color='white';input.style.backgroundColor='transparent';input.placeholder='Enter seconds';var set10=document.createElement('a');set10.href='#';set10.textContent='10';set10.style.cssText='font-size:18px;font-weight:bold;color:#ffffff !important';set10.style.padding="0 1em";set10.addEventListener('click', function(event){event.preventDefault();input.value='10';startCountdown();});var set25=document.createElement('a');set25.href='#';set25.textContent='25';set25.style.cssText='font-size:18px;font-weight:bold;color:#ffffff !important';set25.style.padding="0 1em";set25.addEventListener('click', function(event){event.preventDefault();input.value='25';startCountdown();});var set50=document.createElement('a');set50.href='#';set50.textContent='50';set50.style.cssText='font-size:18px;font-weight:bold;color:#ffffff !important';set50.style.padding="0 1em";set50.addEventListener('click', function(event){event.preventDefault();input.value='50';startCountdown();});function startCountdown(){var countdown=parseInt(input.value);container.style.opacity='0.3';var interval=setInterval(function(){countdown--;input.value=countdown;if (countdown === 0){clearInterval(interval);container.style.opacity='1';}}, 1000);} input.addEventListener('keydown', function(event){if (event.key === 'Enter'){startCountdown();}});var controls=document.createElement('div');controls.style.display='flex';controls.style.justifyContent='space-between';controls.style.marginTop='10px';controls.appendChild(set10);controls.appendChild(set25);controls.appendChild(set50);container.appendChild(close);container.appendChild(input);container.appendChild(controls);document.body.appendChild(container);var isDragging=false;var offset={x: 0, y: 0};container.addEventListener('mousedown', function(event){isDragging=true;offset.x=event.clientX - container.offsetLeft;offset.y=event.clientY - container.offsetTop;});container.addEventListener('mouseup', function(){isDragging=false;});container.addEventListener('mousemove', function(event){if (isDragging){container.style.left=(event.clientX - offset.x) + 'px';container.style.top=(event.clientY - offset.y) + 'px';}});})();
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
