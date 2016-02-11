// ==UserScript==
// @name         ShurGif
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Escritura rápida forocoches
// @author       Karucida
// @match        http://www.forocoches.com/foro/forumdisplay.php?f=2
// @include    http://www.forocoches.com/foro/*
// @include    https://raw.githubusercontent.com/Karucida/ShurGif/master/ShurGif.array.js
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @downloadURL    https://raw.githubusercontent.com/Karucida/ShurGif/master/ShurGif.user.js
// @updateURL    https://raw.githubusercontent.com/Karucida/ShurGif/master/ShurGif.meta.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(document).ready(function () {

    var patt = /::\w+::/g;

    var cambiar = function () {
        var text
        var element
        if ($("#vB_Editor_QR_textarea").length > 0) {
            element = "#vB_Editor_QR_textarea"
        } else {
            if ($("#vB_Editor_001_textarea").length > 0) {
                element = "#vB_Editor_001_textarea"
            } else {
                element = "vB_Editor_QE_2_textarea"
            }
        }
        text = $(element).val()
        var defer = $.Deferred(),
            filtered = defer.then(function (text) {
                if (patt.test(text)) {
                    for (x = 0; x <= shor.length; x++) {
                        if (shor[x].test(text)) {
                            $(element).val($(element).val().replace(shor[x], images[x]));
                        }

                    }
                }

            });

        defer.resolve(text);
    }

    $('form[name="vbform"]').on('submit', cambiar);
});