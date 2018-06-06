(function () {
  const match = /^(?:.*\/)?([a-f0-9]+)$/.exec(window.location.href);
  const ID = match ? match[1] : null;
  if (ID) {
    window.location.href = 'https://yi-jiayu.github.io/essence/#' + ID;
  }
})();
