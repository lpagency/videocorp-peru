/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';

var getIncludeParameters = function()
{
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[ scripts.length - 6 ];
    // var scripts = document.getElementsByTagName('script');
    // var myScript = scripts[ scripts.length - 1 ];

    var queryString = myScript.src.replace(/^[^\?]+\??/,'');

    var params = parseQuery( queryString );

    function parseQuery ( query ) {
        var Params = new Object ();
        if ( ! query ) return Params; // return empty object
        var Pairs = query.split(/[;&]/);
        for ( var i = 0; i < Pairs.length; i++ ) {
            var KeyVal = Pairs[i].split('=');
            if ( ! KeyVal || KeyVal.length != 2 ) continue;
            var key = unescape( KeyVal[0] );
            var val = unescape( KeyVal[1] );
            val = val.replace(/\+/g, ' ');
            Params[key] = val;
        }
        return Params;
    }

    return params;
};

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

$(document).ready(function() 
{
    var params = getIncludeParameters();
    var tag = '';

    try
    {
        tag = Utils.getUrlParameter('tag');
        tag = tag.replaceAll("%20", " ");
    }
    catch(ex)
    {
        // nothing here... 
    }

    $("#"+tag).addClass("active");
    if (tag === undefined || tag === 'todos'){
        $("#todos").addClass("active");
    }

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

    window.config = {
        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 5, 
        'tag': tag,
        'ignore_stock': false,
        'infinite_scroll': true,
        'checkout_url': checkout_url, 
        'operator' :'or',
        'templateOrigin': '#product_template',
        'onLoad': function(products) 
        {

        }
    };

    $(document).ecommerce(config);

    $(document).on("click", ".subcateg", function(ev){
        ev.preventDefault();
        config.tag=$(this).attr('tag');

        $(".products").html("");
        $(document).ecommerce('destroy');
        $(document).ecommerce(config);

    });

    $(document).ready(function()
    {
        window.config.tag = "audio_profesional";
        $(document).ecommerce('destroy');
        $(".products-pro").ecommerce(config);
    });

    $(document).ready(function()
    {
        window.config.tag = "educacion";
        $(".products-ed").html("");
        $(document).ecommerce('destroy');
        $(".products-ed").ecommerce(config);
    });

    $(document).ready(function()
    {
        window.config.tag = "audiovisual";
        $(".products-audio").html("");
        $(document).ecommerce('destroy');
        $(".products-audio").ecommerce(config);
    });

    $(document).ready(function()
    {
        window.config.tag = "accesorios";
        $(".products-ac").html("");
        $(document).ecommerce('destroy');
        $(".products-ac").ecommerce(config);
    });
});
