/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_05af7e66c63249f28c6c5f55e7745706(ctx) {
    var ms_outHtml = [];
    var cachePreviousTemplateData = ctx['DisplayTemplateData'];
    ctx['DisplayTemplateData'] = new Object();
    DisplayTemplate_05af7e66c63249f28c6c5f55e7745706.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['TemplateUrl'] = '~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Picture.js';
    ctx['DisplayTemplateData']['TemplateType'] = 'Item';
    ctx['DisplayTemplateData']['TargetControlType'] = ['SearchResults'];
    this.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['ManagedPropertyMapping'] = { 'Title': ['Title'], 'Path': ['Path'], 'Description': ['Description'], 'EditorOWSUSER': ['EditorOWSUSER'], 'LastModifiedTime': ['LastModifiedTime'], 'CollapsingStatus': ['CollapsingStatus'], 'DocId': ['DocId'], 'HitHighlightedSummary': ['HitHighlightedSummary'], 'HitHighlightedProperties': ['HitHighlightedProperties'], 'FileExtension': ['FileExtension'], 'ViewsLifeTime': ['ViewsLifeTime'], 'ParentLink': ['ParentLink'], 'FileType': ['FileType'], 'IsContainer': ['IsContainer'], 'SecondaryFileExtension': ['SecondaryFileExtension'], 'DisplayAuthor': ['DisplayAuthor'], 'PictureHeight': ['PictureHeight'], 'PictureWidth': ['PictureWidth'], 'ImageDateCreated': ['ImageDateCreated'], 'PictureThumbnailURL': ['PictureThumbnailURL'], 'PictureURL': ['PictureURL'], 'PSImageCaption': ['PSImageCaption'], 'PSFileSize': ['PSFileSize'], 'PSReuseable': ['PSReuseable'] };
    var cachePreviousItemValuesFunction = ctx['ItemValues'];
    ctx['ItemValues'] = function (slotOrPropName) {
        return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
    };

    ms_outHtml.push('', ''
    );
    if (!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)) {
        var id = ctx.ClientControl.get_nextUniqueId();
        var itemId = id + Srch.U.Ids.item;
        var hoverId = id + Srch.U.Ids.hover;
        var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/PS_Item_Picture_HoverPanel.js";
        $setResultItem(itemId, ctx.CurrentItem);
        //ctx.CurrentItem.OriginalPath = ctx.CurrentItem.PictureURL;
        ctx.CurrentItem.Path = ctx.CurrentItem.PictureURL;
        var xml = ctx.CurrentItem.HitHighlightedProperties;
        var has_PSReuseable = ctx.CurrentItem.PSReuseable;
        
        if (ctx.CurrentItem.HitHighlightedProperties) {
            if (ctx.CurrentItem.OriginalPath) {
                var checkString = "<HHUrl>" + ctx.CurrentItem.OriginalPath + "</HHUrl>";

                if (xml.indexOf(checkString) !== -1) {
                    ctx.CurrentItem.HitHighlightedProperties = ctx.CurrentItem.HitHighlightedProperties.replace(ctx.CurrentItem.OriginalPath, ctx.CurrentItem.PictureURL);
                }
            }
        }



        ctx.currentItem_ShowHoverPanelCallback = Srch.U.getShowHoverPanelCallback(itemId, hoverId, hoverUrl);
        ctx.currentItem_HideHoverPanelCallback = Srch.U.getHideHoverPanelCallback();
        ms_outHtml.push(''
        , '            <div id="', $htmlEncode(itemId), '" name="Item" data-displaytemplate="PictureItem" class="ms-srch-item" onmouseover="', ctx.currentItem_ShowHoverPanelCallback, '" onmouseout="', ctx.currentItem_HideHoverPanelCallback, '">'
        );
        if (!Srch.U.n(ctx.CurrentItem.PictureThumbnailURL) && !ctx.CurrentItem.IsContainer) {
            ctx.CurrentItem.csr_PathLength = Srch.U.pathTruncationLengthWithPreview;
            ctx.CurrentItem.csr_PreviewImage = ctx.CurrentItem.PictureThumbnailURL;
        }
        ms_outHtml.push(''
        , '				', ctx.RenderBody(ctx), ''
        , '				'
        );

        /**
 * Convert number of bytes into human readable format
 *
 * @param integer bytes     Number of bytes to convert
 * @param integer precision Number of digits after the decimal separator
 * @return string
 */
        function bytesToSize(bytes, precision) {
            var kilobyte = 1024;
            var megabyte = kilobyte * 1024;
            var gigabyte = megabyte * 1024;
            var terabyte = gigabyte * 1024;

            if ((bytes >= 0) && (bytes < kilobyte)) {
                return bytes + ' B';

            } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
                return (bytes / kilobyte).toFixed(precision) + ' KB';

            } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
                return (bytes / megabyte).toFixed(precision) + ' MB';

            } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
                return (bytes / gigabyte).toFixed(precision) + ' GB';

            } else if (bytes >= terabyte) {
                return (bytes / terabyte).toFixed(precision) + ' TB';

            } else {
                return bytes + ' B';
            }
        }
        if (ctx.CurrentItem.PSReuseable == "Enquire") {
            ctx.CurrentItem.PSReuseable = "Enquire (click view metadata)";
        }

        if (has_PSReuseable) {

            var imageSize = bytesToSize(ctx.CurrentItem.PSFileSize, 1)
            var contentOwnerId = itemId + "_PSContentOwner";
            ms_outHtml.push('				'
            , '			<div id="', $htmlEncode(contentOwnerId), '" class="ms-srch-item-summary">'
            , '				Type: Picture'
            , '				<br />'
            , '				Reusable: ', $htmlEncode(ctx.CurrentItem.PSReuseable), ' &#160;&#160;&#160;&#160;'
            , '				<br />'
            , '				Size: ', $htmlEncode(imageSize), ''
            , '			</div>	'
            );
        }
        ms_outHtml.push(''
        , '				'
        , '                <div id="', $htmlEncode(hoverId), '" class="ms-srch-hover-outerContainer"></div>'
        , '            </div>'
        );
    }
    ms_outHtml.push(''
    , '    '
    );

    ctx['ItemValues'] = cachePreviousItemValuesFunction;
    ctx['DisplayTemplateData'] = cachePreviousTemplateData;
    return ms_outHtml.join('');
}
function RegisterTemplate_05af7e66c63249f28c6c5f55e7745706() {

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("Item_Picture", DisplayTemplate_05af7e66c63249f28c6c5f55e7745706);
    }

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Picture.js", DisplayTemplate_05af7e66c63249f28c6c5f55e7745706);
    }

}
RegisterTemplate_05af7e66c63249f28c6c5f55e7745706();
if (typeof (RegisterModuleInit) == "function" && typeof (Srch.U.replaceUrlTokens) == "function") {
    RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Picture.js"), RegisterTemplate_05af7e66c63249f28c6c5f55e7745706);
}