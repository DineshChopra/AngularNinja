# ProgressiveWebApp
* google I/0 2017 : https://www.youtube.com/watch?v=C8KcW1Nj3Mw
* ng-conf 2016 : https://www.youtube.com/watch?v=ecu1vAO23ZM&index=24&list=PLOETEcp3DkCoS_2cW205cfRGl-Xp5jw4K&t=166s
* https://www.youtube.com/watch?v=-ijixHBgxBw

Google Chrome developers channel
https://www.youtube.com/playlist?list=PLNYkxOF6rcIAdnzEsWkg0KpMn2WJwMBmN
https://classroom.udacity.com/courses/ud811


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

npm list
	sw-precache (Integrate with build process, Generate SW code for caching, Maintains resource in app-shell, Hooks into build process (Gulp, grunt))
	sw-toolbox (Loaded by SW at run time, Applies caching strategies to URL patterns, Intalls via Bower npm github)
		toolbox.networkFirst
		toolbox.cacheFirst
		toolbox.fastest
		toolbox.cacheOnly
		toolbox.networkOnly
	url pattern matching
		express like
		regular expression

PWA Architectures
	Move to HTTPS : 
	Use caching strategies for perf and offline by using sw-precache and sw-toolbox apis
	Implement an app shell architecture
	Incorporate add to Homescreen
	Add push notification, Payment api, Credentials api, etc. (if relevant)

Special Cases:
	Cache first, Network fallback
	Network first, Cache fallback
	Cache-network race
	Network Only
	Cache Only

Add to Homescreen
	Add manifest file for Android
	<meta> tags for others
	these specify following
		Name
		Icon
		Startup Url
		Display mode
		Orientation
		Background color
		Theme color

 Push Notification
	App subscribes client to a push service
	App receives client token
	Server sends request to push service using token
	Push service sends message to client
	Service worker displays a notification
	* Even when app & browser are closed
Recommended patterns for PWAs
	Application shell (SSR both shell + content for entry page). Use JavaScript to fetch content for any further routes and do a "take over"
	Application shell (SSR) + use javascript to fetch content once the app shell is loaded
	Server side rendering full page (full page caching)
	Client side rendering full page (full page caching, potential for JSON payload bootstrapping via server)

PWA golder rules
	Never make users scroll horizontally
		take dimensions in percentage
		use meta tags <meta name="viewport" content="width=device-width, initial-scale=1">
		
Push Notifications
	Notification Api
	Push Api

open development app on mobile
open on browser : 
	chrome://inspect
	click on port forwarding
	update <port> and <ip address and port>
	connect mobile with usp and open development mode.

	Now you can access app on mobile and debug same in development machine chrome instance

Firebase deploy
	create firebase app 
	firebase init
		select option
		select application
		It takes some time, let's wait and be it complete 
	firebase deploy