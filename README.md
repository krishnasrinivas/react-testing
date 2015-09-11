$ npm install
$ node index.js

## Re-building bundle.js

```bash
$ ./node_modules/.bin/watchify -t babelify index.js -o static/bundle.js
```
