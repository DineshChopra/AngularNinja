# ProgressiveWebApp
* google I/0 2017 : https://www.youtube.com/watch?v=C8KcW1Nj3Mw
* ng-conf 2016 : https://www.youtube.com/watch?v=ecu1vAO23ZM&index=24&list=PLOETEcp3DkCoS_2cW205cfRGl-Xp5jw4K&t=166s
* https://www.youtube.com/watch?v=-ijixHBgxBw

## Goal of PWA...
* Reliable - Fast Loading, work offline and on flanky networks
* Fast/Performance - Smoth animation, Jank free scrolling and seamless navigation
* Engaging (Push Notification) - Launch from the home screen and send push notifications
* Home Icon

Web standard : 
  Server Push : HTTP/2 allows a server to pre-emptively send (or "push") responses (along with corrosponding "promised" requests) to a client in association with a previous client-initiated request. This can be useful when the server knows the client will need to have those responses available in order to fully process the response to the original request.

  --------------

Enable service worker flag true
```
serviceWorker : true
```

npm install @angular/service-worker ng-pwa-tools --save

Service Worker
	Act as a caching agent
	Handle network request
	Store content for offline useful
	Handle push notifications
	Service worker work with Indexed DB
	