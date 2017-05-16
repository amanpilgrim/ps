/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_8995ded742b8418ab81ac4e66af41c4e(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_8995ded742b8418ab81ac4e66af41c4e.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_CommonHoverPanel_Header.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchHoverPanel'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        var id = ctx.CurrentItem.csr_id;
        var fileType = ctx.CurrentItem.csr_FileType;
        if($isEmptyString(fileType)){
            fileType = HP.GetFriendlyNameForFileType(ctx.CurrentItem);
        }
        var showFileIcon = Boolean(ctx.CurrentItem.csr_ShowFileIcon);
		var titleCSSClass = "ms-srch-hover-title ms-dlg-heading ms-srch-ellipsis";
		var maxViews = 10000;
ms_outHtml.push(''
,'        <div>'
,'            <div class="ms-srch-hover-close">'
,'                <a href="javascript:HP.Close()" id="', $htmlEncode(id + HP.ids.close) ,'" title="', $htmlEncode(Srch.Res.hp_Tooltip_Close) ,'">'
,'                    <img class="js-callout-closeButtonImage" src="', $urlHtmlEncode(GetThemedImageUrl('spcommon.png')) ,'" alt="', $htmlEncode(Srch.Res.hp_Tooltip_Close) ,'" />'
,'                </a>'
,'            </div>'
);
            if (showFileIcon) {
ms_outHtml.push(''
,'                <img class="ms-srch-item-icon ms-positionRelative" id="', $htmlEncode(id + Srch.U.Ids.icon) ,'" onload="this.style.display=\'inline\';this.style.bottom=\'-5px\'" src="', $urlHtmlEncode(Srch.U.getIconUrlByFileExtension(ctx.CurrentItem)) ,'" />'
,'			'
);
			}
            if (!Srch.U.e(ctx.CurrentItem.Title)) {
ms_outHtml.push('		'
,'                <div class="', titleCSSClass ,'" id="', $htmlEncode(id + HP.ids.title) ,'" title="', $htmlEncode(ctx.CurrentItem.Title) ,'">'
,'                    ', $htmlEncode(ctx.CurrentItem.Title) ,''
,'                </div>'
);						
            }
ms_outHtml.push('	'
,'        </div>'
,'        <div class="ms-metadata">'
,'            <div class="ms-srch-hover-filetype">'
);
                if (!Srch.U.e(fileType) && $isNull(ctx.CurrentItem.ServerRedirectedEmbedURL)) {
ms_outHtml.push(''
,'                    <span id="', $htmlEncode(id + HP.ids.fileType) ,'">'
,'                        ', $htmlEncode(fileType) + " " ,''
,'                    </span>'
);
                }                
ms_outHtml.push(''
,'            </div>'
,'        </div>'
);

    AddPostRenderCallback(ctx, function(){
        if (Srch.U.e(ctx.CurrentItem.ServerRedirectedEmbedURL)){
            Srch.U.logClick($get(id), "Hover");
        } else {
            Srch.U.logClick($get(id), "HoverWithWAC");
        }
    });

ms_outHtml.push(''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_8995ded742b8418ab81ac4e66af41c4e() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_CommonHoverPanel_Header", DisplayTemplate_8995ded742b8418ab81ac4e66af41c4e);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_CommonHoverPanel_Header.js", DisplayTemplate_8995ded742b8418ab81ac4e66af41c4e);
}

}
RegisterTemplate_8995ded742b8418ab81ac4e66af41c4e();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_CommonHoverPanel_Header.js"), RegisterTemplate_8995ded742b8418ab81ac4e66af41c4e);
}