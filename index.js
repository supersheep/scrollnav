var $ = require('jquery');
var win = $(window);

function scrollnav(titles, elems, opt) {
  var activeClass = opt.activeClass || "active";
  var offsetTop = opt.offsetTop || 0;
  titles = $(titles);
  elems = $(elems);
  win.on("scroll", function () {
    var scroll_top = win.scrollTop();
    for (var i = 0; i < elems.length; i++) {
      if (elems.eq(i).offset().top + $(elems).eq(i).height() - offsetTop > scroll_top) {
        break;
      }
    }

    titles.removeClass(activeClass);
    titles.eq(i).addClass(activeClass);
  });
}

module.exports = scrollnav;