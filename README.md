# Routing in Material UI

A simple demo of how Routing is integrated with Material UI's LeftNav. Oh and
you'll also get to know how to integrate the LeftNav with the AppBar's
left icon (Hamburger menu icon) click.

## Setup/Testing

```bash
$ git clone [repo_url]
$ npm install
$ node index.js
```

Express is being used which should render `static/index.html` by default since
no route is mentioned nor any other template is being rendered at `/`. Once the
server is running, go to [http://localhost:4000](http://localhost:4000).

## Re-building bundle.js

```bash
$ ./node_modules/.bin/watchify -t babelify index.js -o static/bundle.js
```

Cheers!
