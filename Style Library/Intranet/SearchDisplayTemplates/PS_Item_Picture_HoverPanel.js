/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_3d6866e9dedb4339aeeded19cc308dec(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_3d6866e9dedb4339aeeded19cc308dec.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Picture_HoverPanel.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchHoverPanel'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'Description':['Description'], 'EditorOWSUSER':['EditorOWSUSER'], 'LastModifiedTime':['LastModifiedTime'], 'CollapsingStatus':['CollapsingStatus'], 'DocId':['DocId'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'FileExtension':['FileExtension'], 'ViewsLifeTime':['ViewsLifeTime'], 'ParentLink':['ParentLink'], 'FileType':['FileType'], 'IsContainer':['IsContainer'], 'SecondaryFileExtension':['SecondaryFileExtension'], 'DisplayAuthor':['DisplayAuthor'], 'PictureHeight':['PictureHeight'], 'PictureWidth':['PictureWidth'], 'ImageDateCreated':['ImageDateCreated'], 'PictureThumbnailURL':['PictureThumbnailURL'], 'PictureURL':['PictureURL'], 'PSImageCaption':['PSImageCaption']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        var i = 0;
        var id = ctx.CurrentItem.csr_id;
        ctx.CurrentItem.csr_FileType = "Picture Item";
        //ctx.CurrentItem.csr_ShowViewLibrary = true;
		ctx.CurrentItem.csr_ShowViewMetadata = true;
        //ctx.currentItem_ShowChangedBySnippet = 
		
		var has_PSImageCaption = !$isEmptyString(ctx.CurrentItem.PSImageCaption);
ms_outHtml.push(''
,'        <div class="ms-srch-hover-innerContainer ms-srch-hover-standardSize" id="', $htmlEncode(id + HP.ids.inner) ,'">'
,'            <div class="ms-srch-hover-arrowBorder" id="', $htmlEncode(id + HP.ids.arrowBorder) ,'"></div>'
,'            <div class="ms-srch-hover-arrow" id="', $htmlEncode(id + HP.ids.arrow) ,'"></div>'
,'            <div class="ms-srch-hover-content" id="', $htmlEncode(id + HP.ids.content) ,'" data-displaytemplate="PictureHoverPanel">'
,'                <div id="', $htmlEncode(id + HP.ids.header) ,'" class="ms-srch-hover-header">'
,'                    ', ctx.RenderHeader(ctx) ,''
,'                </div>'
,'                <div id="', $htmlEncode(id + HP.ids.body) ,'" class="ms-srch-hover-body">'
);
                    if(!Srch.U.n(ctx.CurrentItem.PictureURL)){
                        ctx.CurrentItem.csr_DataShown = true;
ms_outHtml.push(''
,'                        <div class="ms-srch-hover-imageContainer">'
,'                            <img id="', $htmlEncode(id + HP.ids.preview) ,'" alt="', $htmlEncode(Srch.Res.hp_Alt_ImagePreview) ,'" src="', $urlHtmlEncode(ctx.CurrentItem.PictureURL) ,'" onload="this.style.display=\'block\';" />'
,'                        </div>'
);
                    }
ms_outHtml.push(''
,''
);
                    if(has_PSImageCaption){
					
						var encodedPSImageCaption = $htmlEncode(ctx.CurrentItem.PSImageCaption);
					
ms_outHtml.push(''
,'						<div class="ms-srch-hover-subTitle"><h3 class="ms-soften">Image caption</h3></div>'
,'						<span class="ms-srch-hover-text"> ', encodedPSImageCaption ,' </span>'
);
                    }
ms_outHtml.push(''
,''
,'                    ', ctx.RenderBody(ctx) ,''
,'                </div>'
,'                <div id="', $htmlEncode(id + HP.ids.actions) ,'" class="ms-srch-hover-actions">'
,'                    ', ctx.RenderFooter(ctx) ,''
,'                </div>'
,'            </div>'
,'        </div>'
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_3d6866e9dedb4339aeeded19cc308dec() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_Picture_HoverPanel", DisplayTemplate_3d6866e9dedb4339aeeded19cc308dec);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Picture_HoverPanel.js", DisplayTemplate_3d6866e9dedb4339aeeded19cc308dec);
}

}
RegisterTemplate_3d6866e9dedb4339aeeded19cc308dec();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Picture_HoverPanel.js"), RegisterTemplate_3d6866e9dedb4339aeeded19cc308dec);
}