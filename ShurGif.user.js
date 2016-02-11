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
    var images = [];
    var shor = [];
    //video caso aislado
    images[0] = "[YOUTUBE]wKnyqzU76jo[/YOUTUBE]";
    shor[0] = /::casoaislado::/g;
    //johncena
    images[1] = "[img]http://i.imgur.com/mIbLbex.gif[/img]";
    shor[1] = /::johncena::/g;
    //pizza demigrante
    images[2] = "[img]http://i.imgur.com/q69yKhY.jpg[/img]";
    shor[2] = /::pizzademigrante::/g;
    //pipas carancha
    images[3] = "[img]http://i.imgur.com/X6JzVWv.jpg[/img]";
    shor[3] = /::pipascarancha::/g;
    //Dont feed the troll
    images[4] = "[img]http://i.imgur.com/Tz2g1cP.gif[/img]";
    shor[4] = /::dontfeedtroll::/g
        //FC is not your army
    images[5] = "[img]http://i.imgur.com/6fMcW50.jpg[/img]";
    shor[5] = /::fcarmy::/g;
    //Yo q se tio xDxD
    images[6] = "[img]http://i.imgur.com/4d32P4q.gif[/img]";
    shor[6] = /::yoqsetio::/g;
    //Lo mejor de las maduras
    images[7] = "[img]http://i.imgur.com/0obMeag.png[/img]";
    shor[7] = /::maduras::/g;
    //moro2
    images[8] = "[img]http://i.imgur.com/vpeNYME.jpg[/img]";
    shor[8] = /::moro2::/g
        //mi novia no es puta
    images[9] = "[img]http://i.imgur.com/vEXeAmo.gif[/img]";
    shor[9] = /::noputa::/g
        //que te pasa
    images[10] = "[img]http://i.imgur.com/gLHZ9MY.gif[/img]";
    shor[10] = /::qetpasa::/g;
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