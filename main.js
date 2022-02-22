jQuery(window).load(function() {
    if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
        var listingFooter = jQuery('<div id="mid-footer"><div class="footer-flexContainer"><div class="footer-flex footer-left"><h2>Remax Maya</h2><br /><p><strong><a href="tel:+5219841149820">+52 1 984 114 9820</a></strong> Mexico</p> <p><strong><a href="tel:412.250.7598">(412) 250-7598</a></strong> U.S./Canada</p><p>+<strong>52 984 110 7715</strong> Office</p><p>Calle 38 Nte. Local 5 Hotel Pueblito Escondido</p><p>Lt 002 Mz 008 Entre Albatros y Flamingos. Zazil ha</p> <p>Playa del Carmen, Mexico 77720</p><div class="footer-social"><h3>Follow Us:</h3><a href="#" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/66f6/80b4/1891/a75fbef8c3ae527bf545/original.png" alt="Twitter" /></a><a href="#" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/a8a8/4945/ca1b/f1b211a60b16b55ec826/original.png" alt="Facebook" /></a><a href="#" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/cca0/6283/0986/bb9621eb9b0e8b4f452a/original.png" alt="YouTube" /></a><a href="#" target="_blank"><img src="https://mediavault.point2.com/p2a/htmltext/d08a/733e/915a/c702a120948e6b47833a/original.png" alt="Google Business" /></a></div></div><div class="footer-flex"><img src="https://mediavault.point2.com/p2a/htmltext/673f/1e2e/5c67/0ecd4b9df18e7f7bb4ee/original.png" alt="Remax Maya" /></div><div class="footer-flex footer-right"><h2 class="title">Riviera Maya Real Estate</h2><ul><li><a href="/Playa_del_Carmen_Real_Estate/page_2566115.html">Browse All Playa del Carmen Real Estate</a></li><li><a href="/Cancun_Real_Estate/page_2566116.html">Browse All Cancun Real Estate</a></li><li><a href="/Tulum_Real_Estate/page_2566117.html">Browse All Tulum Real Estate</a></li><li><a href="/Akumal_Real_Estate/page_2566123.html">Browse All Akumal Real Estate</a></li><li><a href="/Puerto_Aventuras_Real_Estate/page_2566119.html">Browse All Puerto Aventuras Real Estate</a></li><li><a href="/Puerto_Morelos_Real_Estate/page_2566122.html">Browse All Puerto Morelos Real Estate</a></li></ul></div></div><p><img alt="AMPI - Realtor" src="https://mediavault.point2.com/p2a/htmltext/780b/9c37/8398/1848d102673dc1a9e4e0/original.png" initialwidth="220"></p></div><div id="final-footer">Copyright &copy; 2020 Remax Maya Real Estate. All Rights Reserved. <a href="https://abovemedia.ca" title="Real Estate Marketing" target="_blank" rel="nofollow">Real Estate Marketing</a> by AboveMedia Canada.</div>');

        jQuery('body').append(listingFooter);
    }
    jQuery(".row-fluid").last().addClass("footerBG");
});

function addCustomClasses() {
    if (window.location.href.indexOf("listing_") > -1 || window.location.href.indexOf("listingid") > -1 || window.location.href.indexOf("Listing_") > -1) {
        var headerDiv = document.getElementsByClassName('maindiv')[0];
    } else {
        var headerDiv = document.getElementsByClassName('row-fluid')[1];
    }
    headerDiv.classList.add('headerBG');
}
document.ready = addCustomClasses;
(function($) {
    $(function() {
        $('.nav').append($('<div class="nav-mobile"></div>'));
        $('.nav-item').has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');
        $('.nav-mobile').click(function() {
            $('.nav-list').toggle();
        });
        $('.nav-list').on('click', '.nav-click', function() {
            $(this).siblings('.nav-submenu').toggle();
            $(this).children('.nav-arrow').toggleClass('nav-rotate');
        });
        $('.nav-list').on('click', '.mobile-trigger', function() {
            $(this).siblings('.nav-submenu').toggle();
            $(this).prev().toggleClass('nav-rotate');
        });
    });
})(jQuery);
$(window).on("load", function() {
    $('li:contains("Solar")').css('display', 'none');
    $('h4:contains("Heating")').addClass('luxury');
    $('h4:contains("Heating")').html('<a href="https://www.remaxmaya.com"><img src="https://mediavault.point2.com/p2a/htmltext/ec38/f44b/9ded/417a4b58ddcdc6330281/original.jpg" alt="Featured Riviera Maya Real Estate Listing" /><span>Featured Listing</span><br  /><span style="font-size:10px; font-weight:normal;">Click here to see all our featured listings.</span></a>');

});

function replaceForm() {
    hbspt.forms.create({
        portalId: "5708214",
        formId: "9b818c5e-b758-4fb0-91da-81f9d024f61d",
        target: '#_ctl0_body_EmailFormPanel'
    });
}
if (window.location.href.indexOf("EmailAgent.aspx") > -1) {
    $(window).on("load", function() {
        $('#_ctl0_body_EmailFormPanel').empty();
        replaceForm();
    });
}
