/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_25dc97425e8b474e83a3ab63870da8f1(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_25dc97425e8b474e83a3ab63870da8f1.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_WebPage.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'Description':['Description'], 'EditorOWSUSER':['EditorOWSUSER'], 'LastModifiedTime':['LastModifiedTime'], 'CollapsingStatus':['CollapsingStatus'], 'DocId':['DocId'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'FileExtension':['FileExtension'], 'ViewsLifeTime':['ViewsLifeTime'], 'ParentLink':['ParentLink'], 'FileType':['FileType'], 'IsContainer':['IsContainer'], 'SecondaryFileExtension':['SecondaryFileExtension'], 'DisplayAuthor':['DisplayAuthor'], 'PSContentOwner':['PSContentOwner'], 'PSPublishedDate':['PSPublishedDate']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
); 
        if(!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)){
            var id = ctx.ClientControl.get_nextUniqueId();
            var itemId = id + Srch.U.Ids.item;
            var hoverId = id + Srch.U.Ids.hover;
            var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_WebPage_HoverPanel.js";
            $setResultItem(itemId, ctx.CurrentItem);
            ctx.currentItem_ShowHoverPanelCallback = Srch.U.getShowHoverPanelCallback(itemId, hoverId, hoverUrl);
            ctx.currentItem_HideHoverPanelCallback = Srch.U.getHideHoverPanelCallback();
			ctx.CurrentItem.csr_ShowViewMetadata = true;
			var has_PSContentOwner = ctx.CurrentItem.PSContentOwner;
			var has_PSPublishedDate = ctx.CurrentItem.PSPublishedDate;
ms_outHtml.push(''
,'            <div id="', $htmlEncode(itemId) ,'" name="Item" data-displaytemplate="WebPageItem" class="ms-srch-item" onmouseover="', ctx.currentItem_ShowHoverPanelCallback ,'" onmouseout="', ctx.currentItem_HideHoverPanelCallback ,'">							'
,'				',ctx.RenderBody(ctx),'	'
); 
        if(has_PSContentOwner) {
		
			var contentOwnerId = itemId + "_PSContentOwner";
ms_outHtml.push('				'
,'			<div id="', $htmlEncode(contentOwnerId) ,'" class="ms-srch-item-summary">'
,'				Content owner: ', $htmlEncode(ctx.CurrentItem.PSContentOwner) ,' &#160;&#160;&#160;&#160;'
,'			</div>	'
); 
        }
ms_outHtml.push('		'
,''
); 
        if(has_PSPublishedDate) {
			
			var publishedDate = itemId + "_PSPublishedDate";
ms_outHtml.push('				'
,'			<div id="', $htmlEncode(publishedDate) ,'" class="ms-srch-item-summary">'
,'				Published Date: ', $htmlEncode(ctx.CurrentItem.PSPublishedDate.format("dd/MM/yyyy")) ,''
,'			</div>	'
); 
        }
ms_outHtml.push('			'
,'                <div id="', $htmlEncode(hoverId) ,'" class="ms-srch-hover-outerContainer"></div>'
,'            </div>'
); 
        } 
ms_outHtml.push(''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_25dc97425e8b474e83a3ab63870da8f1() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_WebPage", DisplayTemplate_25dc97425e8b474e83a3ab63870da8f1);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_WebPage.js", DisplayTemplate_25dc97425e8b474e83a3ab63870da8f1);
}

}
RegisterTemplate_25dc97425e8b474e83a3ab63870da8f1();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_WebPage.js"), RegisterTemplate_25dc97425e8b474e83a3ab63870da8f1);
}