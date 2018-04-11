/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

//browser detection scripts

var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome && !isOpera; // Chrome 1+
var isIE = /*@@cc_on!@@*/ false || !!document.documentMode; // At least IE6
var clickHandler = ('ontouchstart' in document.documentElement ? "touchstart" : "click");
clickHandler = 'click';
if (isIE) {
    $("html").addClass("ie" + document.documentMode);
    IEVersion = document.documentMode;
}

if (isSafari) {
    $("html").addClass("safari " + isiPhone());
}


var orientation = 'landscape';

function detectIPadOrientation() {
    if (orientation == 0) {
        orientation = 'portrait';
    } else if (orientation == 90) {
        orientation = 'landscape';
    } else if (orientation == -90) {
        orientation = 'landscape';
    } else if (orientation == 180) {
        orientation = 'portrait';
    }

}

function setOrientation() {
    orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
}
setOrientation();
window.onorientationchange = detectIPadOrientation;

function isiPhone() {

    if (navigator.platform.indexOf("iPhone") != -1)
        return 'iphone';
    if (navigator.platform.indexOf("iPod") != -1)
        return 'ipod';
    if (navigator.platform.indexOf("iPad") != -1)
        return 'ipad';
}


(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function(key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function(key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    };

}));


var documentId = $('body').data('id');

$(document).ready(function() {
    licenseId = $.cookie("licenseId");
});

document.addEventListener('touchstart', function(e) {
    storeDocumentData();
}, false);
document.addEventListener('click', function(e) {
    storeDocumentData();
}, false);

$(function() {
    $(document).on('click', '.tick', function() {
        $(this).toggleClass('ticked');
    });
    $('#resetBtn').on('click', function() {
        resetForm();
    });
    documentId = $('body').data('id');
    loadDocumentData();
    $('.jump').keyup(function(e) {
        if ($(this).val().length == $(this).attr('maxlength')) {
            var ntabindex = parseInt($(this).attr('tabindex'));
            ntabindex++;
            $('input[tabindex=' + ntabindex + ']').focus();
        }
    })

});




function loadDocumentData() {

   $('input[type=text]').each(function(i, e) {
        //var storedValue = localStorage.getItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'));

      var storedValue = localStorage.getItem($(e).attr('id'));
      //alert(storedValue.toString());
      //alert($(e).attr('id'));
      $(e).val(storedValue.toString());
       // alert($(e).val(storedValue));
        //alert(licenseId + 'document' + documentId + '-' + $(e).attr('id'));
    });
    $('textarea').each(function(i, e) {
      //var storedValue = localStorage.getItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'));
      var storedValue = localStorage.getItem($(e).attr('id'));
     // alert("stella3");
      $(e).val(storedValue.toString());
    });
}

function resetForm() {
    $('input[type=text]').each(function(i, e) {
        $(e).val('');
    });
    $('textarea').each(function(i, e) {
        $(e).val('');
    });
    $('input[type=checkbox').each(function(i, e) {
        $(e).prop('checked', false);
    });
}

function store()
{
      $('input[type=text]').each(function (i, e) {
     localStorage.setItem($(e).attr('id'), $(e).val());

    });
  $('textarea').each(function (i, e) {

      localStorage.setItem($(e).attr('id'), $(e).val());

    });
    $('input[type=checkbox').each(function(i, e) {
  
      localStorage.setItem($(e).attr('id'), $(e).val());

    });
}

function storeDocumentData() {

    // $('input[type=text]').each(function(i, e) {
    //     localStorage.setItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'), $(e).val());
    // });
    // $('textarea').each(function(i, e) {
    //     localStorage.setItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'), $(e).val());
    // });
    // $('input[type=checkbox').each(function(i, e) {
    //     localStorage.setItem(licenseId + 'document' + documentId + '-' + $(e).attr('id'), $(e).prop('checked'));
    // });
}

function makeUnselectable(node) {
    var bodyId = $(node).find('body').attr('id');
    var doc = node.getElementById(bodyId);
    makeUnselectableRecursive(doc);
    $.each($('input[type=text],textarea'), function(i, e) {
        $(e).removeAttr('unselectable');
    });
}

function makeUnselectableRecursive(node) {
    if (node != null) {
        if (node.nodeType == 1) {
            node.setAttribute("unselectable", "on");
        }
        var child = node.firstChild;
        while (child) {

            makeUnselectableRecursive(child);
            child = child.nextSibling;
        }
    }
}



//--------------------- code for app_init starts here ---------------------
// block-1
var extLoaded = false;
var intLoaded = false;

var isIE = false;
var urlPath = window.location.pathname;
var arrTemp = urlPath.split('/');
var currentPage = arrTemp[arrTemp.length - 1];
var currentDir = arrTemp[arrTemp.length - 2];

function idrLoad() {
    idrLoaded = true;
    var bounds;
    var heights = new Array(160, 160, 160, 160, 160, 160, 160, 160, 160, 160);
    IDRViewer.makeNavBar(10, 3, 1125, 1125, 0, heights, '.jpg', bounds);
         document.getElementById("hide").remove();

    // var objTag = document.getElementById('svgImage');
    // objTag.addEventListener("load", function() {
    //     IDRViewer.makeNavBar(10, 3, 1125, 1125, 0, heights, '.jpg', bounds);
    //     document.getElementById("hide").remove();
    // }, false);
}
// block-1

// block-2
// Ensure that we're not replacing any onload events
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(function() {
    var pageNo = currentPage.substr(0, currentPage.indexOf('.'));
    if (currentDir == "Clown") {
        var f1 = [
            ['ta_1', 680]
        ];
        load2(f1);
    } else if (currentDir == "Cirkus") {
        var f3 = [
            ['t1_3', 236],
            ['t2_3', 313],
            ['t3_3', 391],
            ['t7_3', 1078],
            ['t8_3', 2557]
        ];

        var f4 = [
            ['t1_4', 236],
            ['t2_4', 357],
            ['t3_4', 391],
            ['t4_4', 313],
            ['t7_4', 1736],
            ['tf_4', 745],
            ['tg_4', 1284],
            ['ti_4', 1295],
            ['tn_4', 718],
            ['to_4', 1182],
            ['tr_4', 825],
            ['ts_4', 1313],
            ['tv_4', 1266],
            ['tx_4', 743],
            ['ty_4', 1009],
            ['t10_4', 643],
            ['t14_4', 511],
            ['t15_4', 479],
            ['t16_4', 412],
            ['t17_4', 362],
            ['t19_4', 1002]
        ];

        var f5 = [
            ['t1_9', 236],
            ['t2_9', 313],
            ['t3_9', 413],
            ['t4_9', 391],
            ['t7_9', 1736],
            ['tb_9', 959],
            ['td_9', 974],
            ['te_9', 908],
            ['tf_9', 1165],
            ['th_9', 1122],
            ['tj_9', 1052],
            ['tl_9', 1024],
            ['to_9', 511],
            ['tp_9', 479],
            ['tq_9', 412],
            ['tr_9', 362]
        ];

        var f6 = [
            ['t1_7', 236],
            ['t2_7', 313],
            ['t3_7', 391],
            ['t7_7', 1108],
            ['t8_7', 1386],
            ['t9_7', 794],
            ['ta_7', 399],
            ['tb_7', 631],
            ['tc_7', 588],
            ['td_7', 622]
        ];

        var f7 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t4_8', 1059],
            ['t6_8', 1382]
        ];

        var f8 = [
            ['t1_5', 236],
            ['t2_5', 357],
            ['t3_5', 313],
            ['t4_5', 391],
            ['t8_5', 1773],
            ['tu_5', 374]
        ];

        var f9 = [
            ['t1_6', 236],
            ['t2_6', 313],
            ['t3_6', 391],
            ['t6_6', 1970],
            ['t7_6', 1995],
            ['t8_6', 2023],
            ['t9_6', 339],
            ['ta_6', 534],
            ['th_6', 484],
            ['tj_6', 606],
            ['tk_6', 331],
            ['tm_6', 272],
            ['tn_6', 753]
        ];

        var f10 = [
            ['t2_10', 236],
            ['t3_10', 313],
            ['t4_10', 413],
            ['t5_10', 391],
            ['t8_10', 1773],
            ['tn_10', 374]
        ];

        var f11 = [
            ['ta_1', 680]
        ];

        var f12 = [
            ['t3_2', 357],
            ['t4_2', 357],
            ['t5_2', 500],
            ['t6_2', 345]
        ];
        if (pageNo == 'Cirkus') {
            load2(f3);
        } else if (pageNo == 'Homonymer') {
            load2(f4);
        } else if (pageNo == 'Homonymer1') {
            load2(f5);
        } else if (pageNo == 'Jag-en_cirkusartist') {
            load2(f6);
        } else if (pageNo == 'Jag-en_cirkusartist1') {
            load2(f7);
        } else if (pageNo == 'J-ljudet') {
            load2(f8);
        } else if (pageNo == 'J-ljudet1') {
            load2(f9);
        } else if (pageNo == 'J-ljudet2') {
            load2(f10);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f11);
        } else if (pageNo == 'Valj_sida') {
            load2(f12);
        }
    } else if (currentDir == "Djur") {
        var f3 = [
            ['t1_3', 236],
            ['t2_3', 313],
            ['t3_3', 391],
            ['t7_3', 1882],
            ['t8_3', 1807]
        ];

        var f4 = [
            ['t1_4', 236],
            ['t2_4', 313],
            ['t3_4', 391],
            ['t6_4', 906],
            ['tk_4', 1091],
            ['tl_4', 955]
        ];

        var f5 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t5_8', 1020],
            ['t6_8', 639]
        ];

        var f6 = [
            ['t1_7', 236],
            ['t2_7', 313],
            ['t3_7', 391],
            ['t9_7', 1068],
            ['ta_7', 1196],
            ['tb_7', 358],
            ['tc_7', 572],
            ['td_7', 868],
            ['te_7', 506],
            ['tf_7', 515],
            ['tg_7', 768]
        ];

        var f7 = [
            ['t1_5', 236],
            ['t2_5', 357],
            ['t3_5', 313],
            ['t4_5', 391],
            ['t8_5', 389],
            ['tb_5', 1773],
            ['tw_5', 385],
            ['tz_5', 655]
        ];

        var f8 = [
            ['t1_6', 236],
            ['t2_6', 313],
            ['t3_6', 391],
            ['t6_6', 1970],
            ['t7_6', 1516],
            ['t8_6', 1688],
            ['t9_6', 413],
            ['tb_6', 352]
        ];

        var f9 = [
            ['t1_9', 236],
            ['t2_9', 313],
            ['t3_9', 413],
            ['t4_9', 391],
            ['t7_9', 389],
            ['t9_9', 1773],
            ['tj_9', 385],
            ['tm_9', 655]
        ];

        var f10 = [
            ['ta_1', 680]
        ];

        var f11 = [
            ['t3_2', 357],
            ['t4_2', 500],
            ['t5_2', 345]
        ];
        if (pageNo == 'Djur') {
            load2(f3);
        } else if (pageNo == 'Djurens_laten') {
            load2(f4);
        } else if (pageNo == 'Fakta_om') {
            load2(f5);
        } else if (pageNo == 'Fakta_om_ett_djur') {
            load2(f6);
        } else if (pageNo == 'Ng-ljudet') {
            load2(f7);
        } else if (pageNo == 'Ng-ljudet1') {
            load2(f8);
        } else if (pageNo == 'Ng-ljudet2') {
            load2(f9);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f10);
        } else if (pageNo == 'Valj_sida') {
            load2(f11);
        }
    } else if (currentDir == "Halloween") {

        var f3 = [
            ['t1_4', 236],
            ['t2_4', 357],
            ['t3_4', 313],
            ['t4_4', 391],
            ['t6_4', 1216],
            ['t8_4', 1184],
            ['ta_4', 1092],
            ['tc_4', 1202],
            ['te_4', 1235],
            ['tg_4', 1542],
            ['ti_4', 1283],
            ['tl_4', 747],
            ['tm_4', 885],
            ['tu_4', 723],
            ['tw_4', 403],
            ['t12_4', 342],
            ['t13_4', 253],
            ['t14_4', 449],
            ['t15_4', 971]
        ];

        var f4 = [
            ['t1_9', 236],
            ['t2_9', 313],
            ['t3_9', 413],
            ['t4_9', 391],
            ['t6_9', 1160],
            ['t8_9', 1279],
            ['ta_9', 1121],
            ['tc_9', 1268],
            ['tf_9', 747],
            ['tg_9', 885],
            ['to_9', 342],
            ['tp_9', 253],
            ['tq_9', 449]
        ];

        var f5 = [
            ['t1_3', 236],
            ['t2_3', 313],
            ['t3_3', 391],
            ['t6_3', 2160],
            ['t7_3', 1635]
        ];

        var f6 = [
            ['t1_7', 236],
            ['t2_7', 313],
            ['t3_7', 391],
            ['t8_7', 1108],
            ['ta_7', 1109],
            ['tb_7', 371],
            ['tc_7', 609],
            ['td_7', 556],
            ['te_7', 527],
            ['tf_7', 610]
        ];

        var f7 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t5_8', 1059],
            ['t6_8', 1109]
        ];

        var f8 = [
            ['t1_6', 236],
            ['t2_6', 357],
            ['t3_6', 313],
            ['t4_6', 391],
            ['tu_6', 1462],
            ['tv_6', 1314],
            ['tw_6', 1665],
            ['tx_6', 777],
            ['tz_6', 1202],
            ['t1d_6', 711],
            ['t1e_6', 720],
            ['t1h_6', 777]
        ];

        var f9 = [
            ['t1_11', 236],
            ['t2_11', 313],
            ['t3_11', 413],
            ['t4_11', 391],
            ['t12_11', 1665],
            ['t13_11', 777],
            ['t14_11', 777],
            ['t15_11', 1202],
            ['t1j_11', 711],
            ['t1k_11', 720],
            ['t1n_11', 777]
        ];

        var f10 = [
            ['t1_5', 236],
            ['t2_5', 357],
            ['t3_5', 313],
            ['t4_5', 391],
            ['t8_5', 1523],
            ['t9_5', 809],
            ['tb_5', 1273],
            ['tf_5', 764],
            ['t1b_5', 562],
            ['t1c_5', 614],
            ['t1d_5', 542],
            ['t1e_5', 405]
        ];

        var f11 = [
            ['t1_10', 236],
            ['t2_10', 313],
            ['t3_10', 413],
            ['t4_10', 391],
            ['t5_10', 1523],
            ['t6_10', 809],
            ['t8_10', 1273],
            ['te_10', 764],
            ['tx_10', 562],
            ['ty_10', 614],
            ['tz_10', 542],
            ['t10_10', 405]
        ];

        var f12 = [
            ['ta_1', 680]
        ];

        var f13 = [
            ['t3_2', 357],
            ['t4_2', 357],
            ['t5_2', 357],
            ['t6_2', 500],
            ['t7_2', 345]
        ];
        if (pageNo == 'Analogier') {
            load2(f3);
        } else if (pageNo == 'Analogier1') {
            load2(f4);
        } else if (pageNo == 'Halloween') {
            load2(f5);
        } else if (pageNo == 'Nar_det_spokade') {
            load2(f6);
        } else if (pageNo == 'Nar_det_spokade1') {
            load2(f7);
        } else if (pageNo == 'Sammansatta_ord') {
            load2(f8);
        } else if (pageNo == 'Sammansatta_ord1') {
            load2(f9);
        } else if (pageNo == 'Substantiv') {
            load2(f10);
        } else if (pageNo == 'Substantiv1') {
            load2(f11);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f12);
        } else if (pageNo == 'Valj_sida') {
            load2(f13);
        }
    } else if (currentDir == "Rasten") {

        var f3 = [
            ['t1_7', 236],
            ['t2_7', 313],
            ['t3_7', 391],
            ['t4_7', 771],
            ['t7_7', 1108],
            ['t9_7', 829],
            ['ta_7', 337],
            ['tb_7', 853],
            ['tc_7', 445],
            ['td_7', 538],
            ['te_7', 592]
        ];

        var f4 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t4_8', 1059],
            ['t5_8', 829]
        ];

        var f5 = [
            ['t1_4', 236],
            ['t2_4', 313],
            ['t3_4', 391],
            ['t5_4', 1045],
            ['t6_4', 2100],
            ['t7_4', 1010],
            ['tl_4', 1166]
        ];

        var f6 = [
            ['t1_3', 236],
            ['t2_3', 391],
            ['t3_3', 313],
            ['t6_3', 1296],
            ['t7_3', 824],
            ['t8_3', 753],
            ['t9_3', 1081],
            ['ta_3', 815],
            ['tb_3', 1013],
            ['tc_3', 1069]
        ];

        var f7 = [
            ['ta_1', 680]
        ];

        var f8 = [
            ['t3_2', 313],
            ['t4_2', 357],
            ['t5_2', 357],
            ['t6_2', 500]
        ];

        var f9 = [
            ['t1_5', 236],
            ['t2_5', 357],
            ['t3_5', 313],
            ['t4_5', 391],
            ['t6_5', 486],
            ['t7_5', 286],
            ['t8_5', 942],
            ['tu_5', 1666],
            ['tv_5', 1139],
            ['tw_5', 513],
            ['tx_5', 238],
            ['t10_5', 238],
            ['t14_5', 376],
            ['t16_5', 443]
        ];

        var f10 = [
            ['t1_6', 236],
            ['t2_6', 357],
            ['t3_6', 313],
            ['t4_6', 391],
            ['t5_6', 1108],
            ['t6_6', 1434],
            ['t7_6', 1032],
            ['tg_6', 1176],
            ['th_6', 1485],
            ['ty_6', 1666]
        ];

        var f11 = [
            ['t1_9', 236],
            ['t2_9', 313],
            ['t3_9', 413],
            ['t4_9', 391],
            ['t6_9', 286],
            ['t7_9', 942],
            ['t8_9', 1666],
            ['t9_9', 1139],
            ['tb_9', 376],
            ['td_9', 443],
            ['te_9', 3112],
            ['tf_9', 3129],
            ['tg_9', 2805]
        ];

        var f12 = [
            ['t1_10', 236],
            ['t2_10', 313],
            ['t3_10', 413],
            ['t4_10', 391],
            ['t6_10', 1108],
            ['t7_10', 1434],
            ['t8_10', 1032],
            ['tf_10', 1666]
        ];
        if (pageNo == 'En_rolig_rast') {
            load2(f3);
        } else if (pageNo == 'En_rolig_rast1') {
            load2(f4);
        } else if (pageNo == 'Ord_om_kanslor') {
            load2(f5);
        } else if (pageNo == 'Rasten') {
            load2(f6);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f7);
        } else if (pageNo == 'Valj_sida') {
            load2(f8);
        } else if (pageNo == 'Vokaler_och_konsonanter') {
            load2(f9);
        } else if (pageNo == 'Vokaler_och_konsonanter1') {
            load2(f10);
        } else if (pageNo == 'Vokaler_och_konsonanter2') {
            load2(f11);
        } else if (pageNo == 'Vokaler_och_konsonanter3') {
            load2(f12);
        }
    } else if (currentDir == "Sommarlovet") {
        var f3 = [
            ['t1_5', 236],
            ['t2_5', 313],
            ['t3_5', 357],
            ['t4_5', 391],
            ['t6_5', 968],
            ['t7_5', 1238],
            ['t8_5', 1878]
        ];

        var f4 = [
            ['t1_10', 236],
            ['t2_10', 313],
            ['t3_10', 413],
            ['t4_10', 391],
            ['t7_10', 968],
            ['t8_10', 1238]
        ];

        var f5 = [
            ['t1_6', 236],
            ['t2_6', 313],
            ['t3_6', 357],
            ['t4_6', 391],
            ['t5_6', 1290],
            ['t6_6', 513],
            ['t7_6', 1082],
            ['t8_6', 633],
            ['t9_6', 1028],
            ['ta_6', 1635]
        ];

        var f6 = [
            ['t1_11', 236],
            ['t2_11', 313],
            ['t3_11', 413],
            ['t4_11', 391],
            ['t6_11', 1290],
            ['t7_11', 1028]
        ];

        var f7 = [
            ['t1_7', 236],
            ['t2_7', 313],
            ['t3_7', 391],
            ['t4_7', 771],
            ['t7_7', 1108],
            ['t9_7', 1568],
            ['ta_7', 371],
            ['tb_7', 468],
            ['tc_7', 479],
            ['td_7', 843]
        ];

        var f8 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t4_8', 1059],
            ['t6_8', 1568]
        ];

        var f9 = [
            ['t1_4', 236],
            ['t2_4', 313],
            ['t3_4', 357],
            ['t4_4', 391],
            ['t7_4', 662],
            ['t8_4', 1299],
            ['t9_4', 977],
            ['ta_4', 666],
            ['tb_4', 649],
            ['tc_4', 425],
            ['td_4', 660],
            ['te_4', 607],
            ['tf_4', 772],
            ['tg_4', 686],
            ['th_4', 455],
            ['ti_4', 668],
            ['tj_4', 597],
            ['tk_4', 431],
            ['tl_4', 468]
        ];

        var f10 = [
            ['t1_9', 236],
            ['t2_9', 313],
            ['t3_9', 413],
            ['t4_9', 391],
            ['t7_9', 662],
            ['t8_9', 656],
            ['t9_9', 642],
            ['ta_9', 643],
            ['tb_9', 407],
            ['tc_9', 431],
            ['td_9', 468]
        ];

        var f11 = [
            ['t1_3', 236],
            ['t2_3', 313],
            ['t3_3', 391],
            ['t6_3', 719],
            ['t9_3', 1448],
            ['ta_3', 1081]
        ];

        var f12 = [
            ['ta_1', 680]
        ];

        var f13 = [
            ['t3_2', 357],
            ['t4_2', 357],
            ['t5_2', 357],
            ['t6_2', 500],
            ['t7_2', 345]
        ];
        if (pageNo == 'Alfabetet') {
            load2(f3);
        } else if (pageNo == 'Alfabetet1') {
            load2(f4);
        } else if (pageNo == 'Alfabetisk_ordning') {
            load2(f5);
        } else if (pageNo == 'Alfabetisk_ordning1') {
            load2(f6);
        } else if (pageNo == 'En_dag_pa_sommarlovet') {
            load2(f7);
        } else if (pageNo == 'En_dag_pa_sommarlovet1') {
            load2(f8);
        } else if (pageNo == 'Liknelser') {
            load2(f9);
        } else if (pageNo == 'Liknelser1') {
            load2(f10);
        } else if (pageNo == 'Sommarlovet') {
            load2(f11);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f12);
        } else if (pageNo == 'Valj_sida') {
            load2(f13);
        }
    } else if (currentDir == "Skatten") {
        var f3 = [
            ['t1_4', 236],
            ['t2_4', 313],
            ['t3_4', 391],
            ['t5_4', 718],
            ['t7_4', 411],
            ['t9_4', 1003],
            ['ta_4', 327],
            ['tb_4', 237],
            ['td_4', 955],
            ['te_4', 980],
            ['tf_4', 1266],
            ['tg_4', 278],
            ['th_4', 955],
            ['ti_4', 278],
            ['tj_4', 678],
            ['tk_4', 277],
            ['tl_4', 1338],
            ['tm_4', 278],
            ['tn_4', 842],
            ['to_4', 277],
            ['tp_4', 755],
            ['tq_4', 277],
            ['tr_4', 459],
            ['ts_4', 570],
            ['tt_4', 363],
            ['tx_4', 371]
        ];

        var f4 = [
            ['t1_3', 236],
            ['t2_3', 313],
            ['t3_3', 391],
            ['t6_3', 613],
            ['t7_3', 1448],
            ['t8_3', 1081]
        ];

        var f5 = [
            ['t1_7', 236],
            ['t2_7', 313],
            ['t3_7', 391],
            ['t4_7', 771],
            ['t7_7', 1108],
            ['ta_7', 946],
            ['tb_7', 552],
            ['tc_7', 579],
            ['td_7', 667],
            ['te_7', 634],
            ['tf_7', 581]
        ];

        var f6 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t4_8', 1059]
        ];

        var f7 = [
            ['ta_1', 680]
        ];

        var f8 = [
            ['t3_2', 357],
            ['t4_2', 357],
            ['t5_2', 500],
            ['t6_2', 345]
        ];

        var f9 = [
            ['t1_5', 236],
            ['t2_5', 313],
            ['t3_5', 357],
            ['t4_5', 391],
            ['t5_5', 880],
            ['t6_5', 695],
            ['t7_5', 534],
            ['t8_5', 534],
            ['t9_5', 483],
            ['ta_5', 483],
            ['tc_5', 1127],
            ['tw_5', 1334],
            ['tx_5', 608]
        ];

        var f10 = [
            ['t1_6', 236],
            ['t2_6', 313],
            ['t3_6', 357],
            ['t4_6', 391],
            ['t5_6', 1597],
            ['t6_6', 885],
            ['t7_6', 1002],
            ['t8_6', 1283],
            ['ta_6', 1334],
            ['tf_6', 934],
            ['tg_6', 763],
            ['th_6', 589],
            ['ti_6', 1055],
            ['tj_6', 454],
            ['tm_6', 517],
            ['tn_6', 442],
            ['to_6', 517],
            ['tp_6', 442],
            ['tq_6', 795],
            ['tt_6', 795],
            ['tw_6', 454]
        ];

        var f11 = [
            ['t1_9', 236],
            ['t2_9', 313],
            ['t3_9', 413],
            ['t4_9', 391],
            ['t6_9', 880],
            ['t7_9', 534],
            ['t8_9', 483],
            ['tl_9', 1334],
            ['tm_9', 608]
        ];

        var f12 = [
            ['t1_10', 236],
            ['t2_10', 313],
            ['t3_10', 413],
            ['t4_10', 391],
            ['t6_10', 1283],
            ['t7_10', 1334],
            ['tc_10', 597],
            ['td_10', 643],
            ['te_10', 1078],
            ['tf_10', 1165]
        ];
        if (pageNo == 'Istallet_for_sen_sa') {
            load2(f3);
        } else if (pageNo == 'Skatten') {
            load2(f4);
        } else if (pageNo == 'Skatten1') {
            load2(f5);
        } else if (pageNo == 'Skatten2') {
            load2(f6);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f7);
        } else if (pageNo == 'Valj_sida') {
            load2(f8);
        } else if (pageNo == 'Vokaler_har_tva_ljud') {
            load2(f9);
        } else if (pageNo == 'Vokaler_har_tva_ljud1') {
            load2(f10);
        } else if (pageNo == 'Vokaler_har_tva_ljud2') {
            load2(f11);
        } else if (pageNo == 'Vokaler_har_tva_ljud3') {
            load2(f12);
        }
    } else if (currentDir == "Staden") {

        var f3 = [
            ['t1_4', 236],
            ['t2_4', 313],
            ['t3_4', 391],
            ['t6_4', 1090],
            ['t7_4', 885],
            ['t8_4', 1095]
        ];

        var f4 = [
            ['t2_3', 236],
            ['t3_3', 313],
            ['t4_3', 391],
            ['t7_3', 1270],
            ['t8_3', 845],
            ['t9_3', 753],
            ['ta_3', 1081],
            ['tb_3', 1342],
            ['tc_3', 1408],
            ['td_3', 1409]
        ];

        var f5 = [
            ['t2_7', 236],
            ['t3_7', 313],
            ['t4_7', 391],
            ['t8_7', 1108],
            ['ta_7', 1330],
            ['tb_7', 768],
            ['tc_7', 968],
            ['td_7', 414],
            ['te_7', 485],
            ['tf_7', 1024]
        ];

        var f6 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t4_8', 1059],
            ['t6_8', 1330]
        ];

        var f7 = [
            ['t2_6', 236],
            ['t3_6', 313],
            ['t4_6', 391],
            ['t7_6', 541],
            ['t8_6', 638],
            ['t9_6', 1202],
            ['ta_6', 772],
            ['tc_6', 344],
            ['td_6', 310],
            ['te_6', 249],
            ['tf_6', 481],
            ['tg_6', 339],
            ['th_6', 374],
            ['ti_6', 433],
            ['tj_6', 219],
            ['tk_6', 417],
            ['tl_6', 553],
            ['tm_6', 885]
        ];

        var f8 = [
            ['ta_1', 680]
        ];

        var f9 = [
            ['t3_2', 357],
            ['t4_2', 500],
            ['t5_2', 345]
        ];

        var f10 = [
            ['t2_5', 236],
            ['t3_5', 357],
            ['t4_5', 313],
            ['t5_5', 391],
            ['t8_5', 1062],
            ['t9_5', 371],
            ['ta_5', 1083],
            ['tb_5', 577],
            ['t14_5', 621],
            ['t15_5', 579],
            ['t17_5', 307],
            ['t18_5', 388],
            ['t19_5', 313]
        ];

        var f11 = [
            ['t2_9', 236],
            ['t3_9', 313],
            ['t4_9', 413],
            ['t5_9', 391],
            ['t6_9', 1083],
            ['t9_9', 1062],
            ['ta_9', 371],
            ['tb_9', 577],
            ['tq_9', 356],
            ['tr_9', 621],
            ['ts_9', 579],
            ['tu_9', 307],
            ['tv_9', 388],
            ['tw_9', 313]
        ];
        if (pageNo == 'Ljud') {
            load2(f3);
        } else if (pageNo == 'Staden') {
            load2(f4);
        } else if (pageNo == 'Stadens_superhjalte') {
            load2(f5);
        } else if (pageNo == 'Stadens_superhjalte1') {
            load2(f6);
        } else if (pageNo == 'Synonymer') {
            load2(f7);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f8);
        } else if (pageNo == 'Valj_sida') {
            load2(f9);
        } else if (pageNo == 'Verb') {
            load2(f10);
        } else if (pageNo == 'Verb1') {
            load2(f11);
        }
    } else if (currentDir == "Vinter") {
        var f3 = [
            ['t1_5', 236],
            ['t2_5', 357],
            ['t3_5', 313],
            ['t4_5', 391],
            ['t7_5', 1147],
            ['t8_5', 477],
            ['t9_5', 1190],
            ['ta_5', 682],
            ['t14_5', 806],
            ['t15_5', 650],
            ['t16_5', 358]
        ];
        var f4 = [
            ['t1_9', 236],
            ['t2_9', 313],
            ['t3_9', 413],
            ['t4_9', 391],
            ['t5_9', 1190],
            ['t8_9', 1147],
            ['t9_9', 477],
            ['ta_9', 682],
            ['tq_9', 806],
            ['tr_9', 650],
            ['ts_9', 358]
        ];

        var f5 = [
            ['t1_4', 236],
            ['t2_4', 313],
            ['t3_4', 391],
            ['t4_4', 739],
            ['t7_4', 506],
            ['ta_4', 694],
            ['td_4', 711],
            ['tg_4', 1252],
            ['tj_4', 771],
            ['tm_4', 983],
            ['tq_4', 718],
            ['t16_4', 955],
            ['t17_4', 1002]
        ];

        var f6 = [
            ['t1_7', 236],
            ['t2_7', 313],
            ['t3_7', 391],
            ['t8_7', 1108],
            ['ta_7', 371],
            ['tb_7', 543],
            ['tc_7', 479],
            ['td_7', 388],
            ['te_7', 527]
        ];

        var f7 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t4_8', 1059]
        ];

        var f8 = [
            ['t1_6', 236],
            ['t2_6', 313],
            ['t3_6', 391],
            ['t4_6', 708],
            ['t5_6', 755],
            ['t6_6', 773],
            ['t8_6', 388],
            ['t9_6', 319],
            ['ta_6', 260],
            ['tb_6', 393],
            ['tc_6', 249],
            ['td_6', 368],
            ['te_6', 289],
            ['tf_6', 258],
            ['tg_6', 211],
            ['th_6', 315],
            ['ti_6', 277],
            ['tj_6', 325],
            ['tk_6', 219],
            ['tl_6', 338],
            ['t12_6', 553],
            ['t13_6', 885],
            ['t16_6', 541],
            ['t17_6', 638]
        ];
        var f9 = [
            ['ta_1', 680]
        ];

        var f10 = [
            ['t3_2', 345],
            ['t4_2', 500],
            ['t5_2', 357]
        ];

        var f11 = [
            ['t1_3', 236],
            ['t2_3', 313],
            ['t3_3', 391],
            ['t6_3', 613],
            ['t7_3', 1448],
            ['t8_3', 1081]
        ];

        if (pageNo == 'Adjektiv') {
            load2(f3);
        } else if (pageNo == 'Adjektiv1') {
            load2(f4);
        } else if (pageNo == 'Istallet_for_sa') {
            load2(f5);
        } else if (pageNo == 'Snostormen') {
            load2(f6);
        } else if (pageNo == 'Snostormen1') {
            load2(f7);
        } else if (pageNo == 'Synonymer') {
            load2(f8);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f9);
        } else if (pageNo == 'Valj_sida') {
            load2(f10);
        } else if (pageNo == 'Vinter') {
            load2(f11);
        }
    } else if (currentDir == "Simhallen") {
        var f3 = [
            ['t1_5', 236],
            ['t2_5', 357],
            ['t3_5', 313],
            ['t4_5', 391],
            ['t7_5', 1839],
            ['to_5', 1101],
            ['tp_5', 846],
            ['tr_5', 584],
            ['ts_5', 821],
            ['tu_5', 597],
            ['tz_5', 266],
            ['t11_5', 522],
            ['t13_5', 1393],
            ['t17_5', 512],
            ['t18_5', 861],
            ['t19_5', 202],
            ['t1b_5', 1002]
        ];

        var f4 = [
            ['t1_6', 236],
            ['t2_6', 313],
            ['t3_6', 391],
            ['t5_6', 800],
            ['t6_6', 885],
            ['tj_6', 435],
            ['tm_6', 315],
            ['to_6', 703],
            ['tr_6', 1161],
            ['ts_6', 1089]
        ];

        var f5 = [
            ['t1_9', 236],
            ['t2_9', 313],
            ['t3_9', 413],
            ['t4_9', 391],
            ['t5_9', 1101],
            ['t6_9', 444],
            ['t7_9', 202],
            ['t8_9', 348],
            ['tc_9', 1839]
        ];

        var f6 = [
            ['t1_7', 236],
            ['t2_7', 313],
            ['t3_7', 391],
            ['t5_7', 749],
            ['t9_7', 1125],
            ['ta_7', 834],
            ['tb_7', 958],
            ['tc_7', 1144],
            ['td_7', 1128]
        ];

        var f7 = [
            ['t1_8', 236],
            ['t2_8', 313],
            ['t3_8', 391],
            ['t4_8', 1077],
            ['t6_8', 749]
        ];

        var f8 = [
            ['t1_4', 236],
            ['t2_4', 313],
            ['t3_4', 391],
            ['t5_4', 1295],
            ['tp_4', 1843],
            ['tq_4', 601],
            ['tr_4', 515],
            ['tt_4', 779],
            ['tu_4', 720]
        ];

        var f9 = [
            ['t1_3', 236],
            ['t2_3', 313],
            ['t3_3', 391],
            ['t6_3', 1330],
            ['t7_3', 942],
            ['t8_3', 753],
            ['t9_3', 1081],
            ['ta_3', 680],
            ['tb_3', 731],
            ['tc_3', 751]
        ];

        var f10 = [
            ['ta_1', 680]
        ];

        var f11 = [
            ['t3_2', 357],
            ['t4_2', 500],
            ['t5_2', 345]
        ];

        if (pageNo == 'A-ljudet') {
            load2(f3);
        } else if (pageNo == 'A-ljudet1') {
            load2(f4);
        } else if (pageNo == 'A-ljudet2') {
            load2(f5);
        } else if (pageNo == 'I_simhallen') {
            load2(f6);
        } else if (pageNo == 'I_simhallen1') {
            load2(f7);
        } else if (pageNo == 'Satt_ord_pa_kanslor') {
            load2(f8);
        } else if (pageNo == 'Simhallen') {
            load2(f9);
        } else if (pageNo == 'Valj_kapitel') {
            load2(f10);
        } else if (pageNo == 'Valj_sida') {
            load2(f11);
        }
    }

});

function adjustWordSpacing(widths) {
    var i, allLinesDone = false;
    var isDone = [];
    var currentSpacing = [];
    var elements = [];

    // Initialise arrays
    for (i = 0; i < widths.length; i++) {
        elements[i] = document.getElementById(widths[i][0]);
        if (isIE) widths[i][1] = widths[i][1] * 4;
        currentSpacing[i] = Math.floor((widths[i][1] - elements[i].offsetWidth) / elements[i].innerHTML.match(/\s.|&nbsp;./g).length); //min
        if (isIE) currentSpacing[i] = Math.floor(currentSpacing[i] / 4);
        isDone[i] = false;
    }

    while (!allLinesDone) {
        // Add each adjustment to the render queue without forcing a render
        for (i = 0; i < widths.length; i++) {
            if (!isDone[i]) {
                elements[i].style.wordSpacing = currentSpacing[i] + 'px';
            }
        }

        allLinesDone = true;
        // If elements still need to be wider, add 1 to the word spacing
        for (i = 0; i < widths.length; i++) {
            if (!isDone[i] && currentSpacing[i] < 160) {
                if (elements[i].offsetWidth >= widths[i][1]) {
                    isDone[i] = true;
                } else {
                    currentSpacing[i]++;
                    allLinesDone = false;
                }
            }
        }
    }

    for (i = 0; i < widths.length; i++) {
        elements[i].style.wordSpacing = (currentSpacing[i] - 1) + 'px';
    }
}
// block-2

function load1() {}

function load2(val) {
    var timeout = 100;
    if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) timeout = 500;
    setTimeout(function() {
        adjustWordSpacing(val);
    }, timeout);
}

// block-3
if (extLoaded) {
    idrLoad();
} else {
    intLoaded = true;
}

makeUnselectable(document);
// block-3
//------------- code for app_init ends here -------------------------
