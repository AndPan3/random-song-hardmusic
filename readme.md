# Random song generator
It's very simple! `app.js` picks a random number, the individual songs are in the `/sites` folder in a file which redirects to the YouTube music video, and `index.html` can trigger it.
# Contributing
Fork it, **DUPLICATE** `sites/template.html`, rename it so the numbering continues, and in `app.js` just increase the number in the function by the number of songs.
In `sites/template.html`, the only thing you need to replace is the `URL` tag. Please replace it exactly because it's case-sensitive.
In `app.js`, please replace the number in `REPLACE_THIS_NUMBER` in `var number = Math.floor(Math.random() * REPLACE_THIS_NUMBER)+1;` by just doing `old number + new songs`. For example if the `old number` is `10` and you have 2 new songs, replace it with `12` because `10 + 2 = 12`