#Pokemon Go Route Creator

Can't go outside (or like me, you're lazy), but still want to play? Have a little bit of experience with.. the internet and all that jazz?

This is for you!

I threw this together on my lunch break. Yes, it could be better. But, its not bad for an hours work.

##Prerequisites

Node. I use 4.2.1, but i'm sure others will work.
Latest xcode, an iOS device, and a cable to plug it in.
A google maps API key, cos you aren't having mine! :) (https://developers.google.com/maps/documentation/javascript/tutorial)


##Project Setup

Clone this repo..

`npm install`

Add your API key in index.html where it says "<YOUR GOOGLE MAPS API KEY>".

`grunt serve`

Go to localhost:9000 if all appears to be good.

You should see a map, centered on Birmingham, UK.

TADA!


##xcode setup

Install/update xcode to latest (as of writing its 7.3.1)

Create a project (iOS!).
Run the project.
You'll probably have to click "fix issue" and login to your apple account to get a personal developer account.

If you have a blank app now running on your iOS device, congratulations, the hard part is done.

Create a file on your computer, Save it somewhere, and call it <whatever>.gpx

Create a route. You don't need to worry about speeds and stuff, this calculates times based on you walking at AROUND 12km/h - which seems to be quite close to the "too fast to count towards eggs" speed.

Make sure the ends link up to stop any crazy running between start/end points.

Copy and paste the stuff in the box on the bottom left of the webapp into your gpx file and save it!

Click the little GPS arrow... thing in xcode, and then click "Add GPX file to project".

Select the GPX file you created.

Click the GPS arrow again, and select the file you just added.

Switch to/open pokemon go, and you should magically start walking the route you just put in.

##FOR BEST RESULTS

Try and keep routes realistic. Walk round your nearest town or something like that, rather than somewhere the other side of the world.

##NOTES

xcode will randomly stop running your route, dont catch anything at your current location, or when you warp you'll get softbanned. Just re-run the blank app, click the arrow and select your route again.

I'm not sure what causes xcode to stop running, it seems to be pretty random. I've had it last hours without resetting, and then had it reset 3 times in 5 minutes. Who knows. It doesnt bother me enough for me to have to dig any deeper into the issue.

##IF YOU DO GET SOFT BANNED

In my experience, it normally lasts somewhere between 10 and 30 minutes. It only seems to happen when you interact with the game (e.g catch a pokemon, spin a stop) and then warp somewhere else and try to do the same.

Obviously, YMMV.

##TODO

Improve this guide.
Add a way to center on your/a specified location, but who knows.
Pretend i'm going to clean up the code, but not do it.

##DISCLAIMER

Obviously this is against Niantic TOS, and you risk the ban hammer, but who really cares, its just a game guys.

If you get banned... well, you learned a lesson.
