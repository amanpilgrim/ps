(function ($) {
    $(document).ready(function () {

        // Code addressing pressing enter while using site search in body of homepage
        
        $("#ctl00_PlaceHolderMain_ctl00_searchTextBox").keypress(function (event) {

            var keycode = (event.keyCode ? event.keyCode : event.which);
            if (keycode == '13') {
                $('#ctl00_PlaceHolderMain_ctl00_searchPeopleButton').click();
            }

        });
        
        var nameWidth = $("#zz5_Menu").width();
        var nameWidthzz4 = $("#zz4_Menu").width();
        var CalculatedRightString = "";
        var CalculatedRightInt = 100;
        
        if (nameWidth) {
            CalculatedRightInt = CalculatedRightInt + nameWidth;
            CalculatedRightString = CalculatedRightInt + "px";
        }
        else {
            CalculatedRightInt = CalculatedRightInt + nameWidthzz4;
            CalculatedRightString = CalculatedRightInt + "px";
        }


        $("#CustomHeaderNavigation").css('right', CalculatedRightString);

        //var CalculatedRightInt = $("#zz5_Menu").width() + 100;

        // Detect if in edit mode

        var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;

        if (inDesignMode == "1") {
            // Add no spellcheck classes to people picker fields

            jQuery(".contact input").addClass("ms-spellcheck-false");
            jQuery(".contact textarea").attr("excludeFromSpellCheck", "true");

            // Set character countdown on News Carousel field
            if ($('#CarouselCharacterCountdown').length) {
                //var input = $('#ctl00_PlaceHolderMain_EditModePanel3_NoteField1_ctl00_TextField');
                //var characterLimit = getCarouselCharacterLimit();
                var left = getCarouselCharacterLimit();

                var charsRemaining = left - $('#ctl00_PlaceHolderMain_EditModePanel3_NoteField1_ctl00_TextField').val().length;

                $('#CarouselCharacterCountdown').text('Characters left: ' + charsRemaining);
                $('#ctl00_PlaceHolderMain_EditModePanel3_NoteField1_ctl00_TextField').keyup(function () {
                    left = getCarouselCharacterLimit() - $(this).val().length;
                    if (left < 0) {
                        $('#CarouselCharacterCountdown').css({ 'color': 'red' });
                    }
                    if (left >= 0) {
                        $('#CarouselCharacterCountdown').css({ 'color': 'black' });
                    }
                    $('#CarouselCharacterCountdown').text('Characters left: ' + left);
                });
            };
        }

        function getCarouselCharacterLimit() {

            var img = $('#ctl00_PlaceHolderMain_EditModePanel3_PSPageImage_ctl00_RichImageField_ImageFieldDisplay').children("img");

            var imgString = (img.prop('src'));

            if (imgString) {
                return 250;
            }
            else {
                return 500;
            }
        }

        if (window.PIE) {
            $('.jspArrowUp, .jspArrowDown, .container input[type="submit"], .roundedCorner, .gradientRoundedC, button, .button, .tools, .roundedCornerShadow, .shadow, .narrowRoundedCShadow, .gradientHalfC, .calBox span, .calBox .day, .calBox .month, .roundedHalfC, .gradientHalfC, .tabBox .inner').each(function () {
                PIE.attach(this);
            });
        }

        /* Checking if Left-hand Nav has Children */
        var menuItems = $("ul[class*='ms-core-listMenu-root'] > li");

        menuItems.each(function (index) {
            if ($(this).children('ul').length > 0) {
                $(this).addClass('hasChildren');
            }
            $('.selected').parents('li.hasChildren').addClass('open');
        });

        /* Text Editor Overrides */
        $(".ms-rtestate-write").attr({
            PrefixStyleSheet: 'psstyle-rte',
            AllowFontsMenu: 'False',
            AllowImagePositioning: 'False',
            AllowFontColorsMenu: 'False'
        });

        // Hide/Show
        $('.sectionBox dl, .sectionBox dd, .sectionBox .answer').hide();

        $('.sectionBox h2').click(function () {
            $(this).toggleClass('open');
            $(this).next().next().slideToggle('fast');
        });

        $('.sectionBox dt').click(function () {
            $(this).toggleClass('open');
            $(this).next('dd').slideToggle('fast').next('dd').slideToggle('fast');
        });

        $('#expand').click(function () {
            $('.sectionBox dl, .answer').show();
            $('.sectionBox h2').addClass('open');

        });
        $('#collapse').click(function () {
            $('.sectionBox dl, .sectionBox dd, .answer').hide();
            $('.sectionBox h2, .sectionBox dt').removeClass('open');
        });

        // Section Printing
        $('a.printFAQ')
        	.attr('href', 'javascript:void( 0 )')
        	.click(function () {

        	    var printDivId = $(this).parents('.printable').attr('id');
        	    $('#' + printDivId).print();

        	    return (false);
        	});

        // News Content Carousel 
        function updateIndex() {
            var totalNewsFeaturesCount = $('.newsfeature').length;
            var $totalNewsFeatures = $('.totalNewsFeatures');
            $totalNewsFeatures.text(totalNewsFeaturesCount);

            // Find all items with class 'newsfeature' and then find the
            // the index of the item that has class 'current'
            var $currentIndex = $('.newscurrent');
            var index = $('.newsfeature').index($currentIndex);
            //alert(index + 1);
            var $currentNewsIndex = $('.currentIndex');
            $currentNewsIndex.text(index + 1);

            if (totalNewsFeaturesCount > 1) {
                if (totalNewsFeaturesCount === (index + 1)) {
                    $('.nextcontrol').addClass('disabletone');
                    $('.nextNews').addClass('disable');

                }
                else if ((index + 1) === 1) {

                    $('.prevcontrol').addClass('disabletone');
                    $('.previousNews').addClass('disable');
                }
                else {
                    $('li').removeClass('disabletone');
                    $('a').removeClass('disable');
                };
            } else {
                $('.newscarouselNav').addClass('newsremove');
            };
        };

        updateIndex();

        $('.newscarouselNav a.previousNews').click(function () {
            $('.newsfeature.newscurrent').prev('.newsfeature').addClass('newscurrent');
            $('.newsfeature.newscurrent').next('.newsfeature').removeClass('newscurrent');
            updateIndex();
        });


        $('.newscarouselNav a.nextNews').click(function () {
            $('.newsfeature.newscurrent').next('.newsfeature').addClass('newscurrent');
            $('.newsfeature.newscurrent').prev('.newsfeature').removeClass('newscurrent');
            updateIndex();
        });

        // Image Gallery

        var classnames = new Array();
        var elements = $('[class^=imageSet]');

        for (var i = 0; i < elements.length; i++) {
            classnames.push(elements[i].className.split(' ')[0]);
        }

        var uniqueNames = [];
        $.each(classnames, function (i, el) {
            el = '.' + el;
            if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
        });

        popupBox(uniqueNames);

        function popupBox(selectorArray) {
            if (selectorArray.length) {
                $.each(selectorArray, function (index, value) {
                    var $gallery = $(value);
                    if ($gallery.length) {
                        $gallery.colorbox({ rel: $gallery.selector });
                        if ($('#cboxContent').length) {
                            $('#cboxContent').append('<div id="cboxDate"></div>', '<div id="cboxGalleryDetails"><h1 id="cboxGalleryName"></h1><span id="cboxGalleryDate"></span></div>', '<div id="cboxMetadata"><a href="" onclick="" >Show metadata</a></div>');

                            $(document).bind('cbox_complete', function () {
                                var date = $.colorbox.element().data("date");
                                var galleryname = $.colorbox.element().data("galleryname");
                                //$('#cboxDate').text(date);
                                //var reuseable = $.colorbox.element().data("reusable");
                                var metadataUrl = $.colorbox.element().data("metadata");
                                var divDownload = $("#cboxDownload");

                                /*if (reuseable.toLowerCase() == 'false') {
                                    if (divDownload) {
                                        divDownload[0].innerHTML = "";
                                    }
                                }
                                else {
                                    if (divDownload) {
                                        divDownload[0].innerHTML = '<a href="" target="_blank">Reusable</a>';
                                        var download = $.colorbox.element().attr('href');
                                        //pointing to image library
                                        download = download.substring(0, download.lastIndexOf('/'));
                                        $('#cboxDownload a').attr('href', download);
                                    }
                                }*/
                                if (date != "") {
                                    $("#cboxGalleryDate").text(date);
                                    $("#cboxGalleryDate").show();
                                } else
                                    $("#cboxGalleryDate").hide();

                                $("#cboxGalleryName").text(galleryname);
                                                                
                                var divMetadata = $("#cboxMetadata");
                                var onclickvalue = "return OpenDialog('" + metadataUrl + "', 'Image')";

                                divMetadata[0].innerHTML = '<a href="#" onclick="" >Show metadata</a>';
                                $('#cboxMetadata a').attr('onclick', onclickvalue);
                            });
                        }
                    }
                });
            }
        }
        
        var method;
        var noop = function () { };
        var methods = [
            'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
            'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
            'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
            'timeStamp', 'trace', 'warn'
        ];
        var length = methods.length;
        var console = (window.console = window.console || {});

        while (length--) {
            method = methods[length];

            // Only stub undefined methods.
            if (!console[method]) {
                console[method] = noop;
            }
        }

    });// close doc ready	
})(jQuery);

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/

var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}