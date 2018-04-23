/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';

    var base_url = $.environmentVar(
        'https://apibodegas.loadingplay.com/',
        'https://apibodegas.ondev.today/',
        'https://apibodegas.loadingplay.com/');
    var checkout_url = $.environmentVar(
        'https://pay.loadingplay.com',
        'https://lpcheckout.ondev.today',
        'https://pay.loadingplay.com');
    var app_public = $.environmentVar(60,60,60);
    var site_name = $.environmentVar('videocorp', 'videocorp', 'videocorp'); 
