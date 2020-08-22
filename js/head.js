function show_runtime() {
        window.setTimeout("show_runtime()", 1000);
        X = new Date("8/18/2019 23:59:59");
        Y = new Date();
        T = (Y.getTime() - X.getTime());
        M = 24 * 60 * 60 * 1000;
        a = T / M;
        A = Math.floor(a);
        b = (a - A) * 24;
        B = Math.floor(b);
        c = (b - B) * 60;
        C = Math.floor((b - B) * 60);
        D = Math.floor((c - C) * 60);
        document.getElementById("webtime").innerHTML = "网站已运行了: " + A + "天" + B + "小时" + C + "分" + D + "秒"
    }
    show_runtime();

$(function () {
  $('.toggle-menu').on('click', function () {
    if (!$('.menus').is(':visible')) {
      $('.menus').velocity('stop')
        .velocity('transition.slideDownIn', { duration: 300 })
    } else {
      $('.menus').velocity('stop')
        .velocity('transition.slideUpOut', { duration: 300 })
    }
  })
  $(document).on('click touchstart', function (e) {
    var flag = $('.menus')[0].contains(e.target) || $('.toggle-menu')[0].contains(e.target)
    if (!flag && $('.toggle-menu').is(':visible')) {
      $('.menus').velocity('stop')
        .velocity('transition.slideUpOut', { duration: 300 })
    }
  })
  $(window).on('resize', function (e) {
    if (!$('.toggle-menu').is(':visible')) {
      if (!$('.menus').is(':visible')) {
        $('.menus').velocity('stop')
          .velocity('transition.slideDownIn', { duration: 300 })
      }
    }
  })
});

jQuery(document).ready(function() {
    function c() {
        /* 排除首页（记得自行修改下首页地址） */
    if (location.href != "http://itstim.xyz"&&location.href != "http://server.itstim.xyz:4000") { document.title = document[a] ? "_(:3」∠)_" + d : "(°∀°)ﾉ" + d  }
    }
    var a, b, d = document.title;
    "undefined" != typeof document.hidden ? (a = "hidden", b = "visibilitychange") : "undefined" != typeof document.mozHidden ? (a = "mozHidden", b = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (a = "webkitHidden", b = "webkitvisibilitychange");
    "undefined" == typeof document.addEventListener && "undefined" == typeof document[a] || document.addEventListener(b, c, !1)
});

