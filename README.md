Live reloading for GitBook
==========================

Insert livereload script for the gitbook website.

Add it to your `book.json` with livereload port default to 35729:

```js
{
    "plugins": ["livereload"]
}
```

or use a custom port:

```js
{
    "plugins": ["livereload"],
    "pluginsConfig": {
        "livereload": {
            "port": 35800
        }
    }
}
```
