# Random song generator
It's very simple! App.js picks a random number, the induvidual songs are in the /sites folder in a site which redirects it to the youtube music video and index.html can trigger it.
# Contributing
Fork it, ** DUPLICATE **sites/template.html, rename it so the countup continues and in app.js just increase the number in the function by the number of songs.
In sites/template.html, the only thing you need to replace is the URL tag. Please replace it exactly because it's case sensitive.
In app.js please replace ```var number = Math.floor(Math.random() * REPLACE_THIS_NUMBER)+1; ``` the number in "REPLACE_THIS_NUMBER" by just doing ```old number + new songs```