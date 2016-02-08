// ==UserScript==
// @name         ShurGif
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Karucida
// @match        http://www.forocoches.com/foro/forumdisplay.php?f=2
// @include    http://www.forocoches.com/foro/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(document).ready(function () {
    var imagen = [];
    /*imagen[0] = "Aquí va la imagén 1";
    imagen[1] = "Aquí va la imagén 2";*/
    var sustituto = [];
    /*sustituto[0] = /::uno::/g;
    sustituto[1] = /::dos::/g;*/
    var cambiar = function () {
        var texto
        var element
        if ($("#vB_Editor_QR_textarea").length > 0) {
            element = "#vB_Editor_QR_textarea"
        } else {
            element = "#vB_Editor_001_textarea"
        }
        texto = $(element).val()
        var defer = $.Deferred(),
            filtered = defer.then(function (text) {
                if (patt.test(texto)) {
                    for (x = 0; x < sustituto.length; x++) {
                        if (sustituto[x].test(texto)) {
                            $(element).val($(element).val().replace(sustituto[x], imagen[x]));
                        }

                    }
                }

            });

        defer.resolve(text);
    }

    $('form[name="vbform"]').on('submit', cambiar);
});