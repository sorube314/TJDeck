javascript:function tjLoadScript(a){var b=new XMLHttpRequest;b.open("GET",a+"?v="+Date.now(),!0),b.responseType="text";var c=eval;b.addEventListener("load",function(){return 200!==b.status&&304!==b.status?void alert("script\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F"):void c(b.responseText)}),b.send()}tjLoadScript("https://p.eriri.net/tj-deck/main-debug.js");