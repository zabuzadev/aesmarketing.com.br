window.__lter = window.__lter || {
  q: window.__lter && _lter.q || [],
  trackEvent: function() {
    __lter.q.push(Array.prototype.slice.call(arguments))
  }
};
