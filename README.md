# Essence
View GitHub gists behind a proxy which blocks [`gist.github.com`](https://gist.github.com/)

## Bookmarklet
Create a new bookmark with the following in the `URL` or `Location` field to directly view a gist:
```javascript
javascript:(function(){var a=/^(?:.*\/)?([a-f0-9]+)$/.exec(window.location.href),b=a?a[1]:null;b&&(window.location.href="https://yi-jiayu.github.io/essence/#"+b);})()
```

## Caveats
Essence gets the contents of a gist from `api.github.com`, so you're out of luck if that's blocked too.
