# bookmarklets
useful bookmarklets to make browsing easier

## string2qr.bookmarklet
Easy to use QR code generator using the amazing [kaywa.com](http://qrfree.kaywa.com) service.

Just copy the following code to the *URL* section of the new Bookmark:

```
javascript:var str=prompt('string2qr','default string');if(str.length>0){content=str;}else{content=document.location.href;}window.open('http://qrfree.kaywa.com/?l=1&s=8&d='+encodeURIComponent(content),'string2qr',false)`
```

## fb-chatdestroyer.bookmarklet

Just copy the following code to the *URL* section of the new Bookmark:

```
javascript:function RemoveContentInContainer(selector) { var nodeList = document.querySelectorAll(selector); for (var i = 0, length = nodeList.length; i < length; i++) { if (nodeList[i].parentNode) { nodeList[i].parentNode.removeChild(nodeList[i]);} }}RemoveContentInContainer(".opened");
```
