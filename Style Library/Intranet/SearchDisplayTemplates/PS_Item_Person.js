/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_2413309c14c74df1ab6051c90d8d884a(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_2413309c14c74df1ab6051c90d8d884a.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchResults'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'PSPersonAccountName':['PSPersonAccountName'], 'PSPersonFirstName':['PSPersonFirstName'], 'PSPersonLastName':['PSPersonLastName'], 'PSPersonFullName':['PSPersonFullName'], 'PSPersonSalutation':['PSPersonSalutation'], 'PSPersonPreferredName':['PSPersonPreferredName'], 'PSPersonPreferredPhone':['PSPersonPreferredPhone'], 'PSPersonEmail':['PSPersonEmail'], 'PSPersonAlternativeEmail':['PSPersonAlternativeEmail'], 'PSPersonMobileNumber':['PSPersonMobileNumber'], 'PSPersonParty':['PSPersonParty'], 'PSPersonJobTitle':['PSPersonJobTitle'], 'PSPersonPhone':['PSPersonPhone'], 'PSPersonOrganisation':['PSPersonOrganisation'], 'PSPersonBusinessGroup':['PSPersonBusinessGroup'], 'PSPersonBusinessUnit':['PSPersonBusinessUnit'], 'PSPersonLocation':['PSPersonLocation'], 'PSPersonMemberOffice':['PSPersonMemberOffice'], 'PSPersonRole':['PSPersonRole'], 'PSPersonPortfolio':['PSPersonPortfolio'], 'PSPersonPhotoUrl':['PSPersonPhotoUrl'], 'PSPersonId':['PSPersonId'], 'PSPersonPreferredFullName':['PSPersonPreferredFullName'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'PSPeopleOrganisation':['PSPeopleOrganisation'], 'MobilePhone':['MobilePhone']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
,'      '
);
    // reset OnPostRender so it only runs once (we can't access Control Template)
    ctx.OnPostRender = [];
    ctx.OnPostRender.push(function(){
        // set each result min-height 
        var minHeight = $('.people-result:first-child').css('padding-left');
        $('.people-result').css('min-height', minHeight);

        // prepend label to filter
        $('.ms-srch-result #Actions').before('<label>Sort by</label>');
    });
ms_outHtml.push(''
,'        '
,''
,'        '
);
              if(!$isNull(ctx.CurrentItem) && !$isNull(ctx.ClientControl)){
              var id = ctx.ClientControl.get_nextUniqueId();
              var itemId = id + Srch.U.Ids.item;
              var hoverId = id + Srch.U.Ids.hover;
              $setResultItem(itemId, ctx.CurrentItem);
              var container_id = id + "_peopleContainer";

              var accountName = ctx.CurrentItem.PSPersonAccountName;
              var personid = ctx.CurrentItem.PSPersonId;
              var encodedPath = $urlHtmlEncode(location.protocol + '//' + location.hostname + "/pages/userprofile.aspx?personid=" + personid);
              var delimiter = "";
              var userPersonaId = $htmlEncode(id) + "_peopleUserPersona";
              var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/PS_Item_Person_HoverPanel.js";

              //Split multi value variables

              function identical(array) {
              for(var i = 0; i < array.length - 1; i++) {
              if(array[i] != array[i+1]) {
              return false;
              }
              }
              return true;
              }

              function printJobTitle(jobTitleProperty){

              var jobTitleArray = jobTitleProperty.split(';');

              if(jobTitleArray.length > 1){
              if(identical(jobTitleArray)){
              jobTitleProperty = jobTitleArray[0];
              }
              else{
              jobTitleProperty= "Multiple roles, please view profile";
              }
              }
              return jobTitleProperty;
              }
               var csr_id = ctx.CurrentItem.csr_id;
              var parentLinkHitHighlighted = Srch.U.getHighlightedProperty(csr_id, ctx.CurrentItem, "PSPersonEmail");

                if (parentLinkHitHighlighted == null)
                  {
                    parentLinkHitHighlighted = $htmlEncode(ctx.CurrentItem.PSPersonEmail);
                   }

        // Preferred full name
               var csr_id_fullname=ctx.CurrentItem.csr_id;

              var PreferredFullNameLinkHitHighlighted = Srch.U.getHighlightedProperty(csr_id_fullname, ctx.CurrentItem, "PSPersonPreferredFullName");

                if (PreferredFullNameLinkHitHighlighted == null)
                  {
                      PreferredFullNameLinkHitHighlighted = $htmlEncode(ctx.CurrentItem.PSPersonPreferredFullName);
                   }

                // Person full name
               var csr_id_fullname=ctx.CurrentItem.csr_id;

              var FullNameLinkHitHighlighted = Srch.U.getHighlightedProperty(csr_id_fullname, ctx.CurrentItem, "PSPersonFullName");

                if (FullNameLinkHitHighlighted == null)
                  {
                      FullNameLinkHitHighlighted = $htmlEncode(ctx.CurrentItem.PSPersonFullName);
                   }


              // Business unit name
               var csr_id_businessunit=ctx.CurrentItem.csr_id;

              var BusinessunitLinkHitHighlighted = Srch.U.getHighlightedProperty(csr_id_businessunit, ctx.CurrentItem, "PSPersonBusinessUnit");

                if (BusinessunitLinkHitHighlighted == null)
                  {
                    BusinessunitLinkHitHighlighted = $htmlEncode(ctx.CurrentItem.PSPersonBusinessUnit);
                   }

              //Organisation
              var has_psorganisation = !$isEmptyString(ctx.CurrentItem.PSPersonOrganisation);
              var has_mob = !$isEmptyString(ctx.CurrentItem.PSPersonMobileNumber);
              var hhProps = Srch.U.createXMLDocument("<root>" + ctx.CurrentItem.HitHighlightedProperties + "</root>");
              ms_outHtml.push(''
,'        <div class="people-result">'
);
                var displayName = $htmlEncode(ctx.CurrentItem.PSPersonPreferredFullName);
                var uPicUrl = $urlHtmlEncode(location.protocol + '//' + location.hostname + '/userphotos/'+ ctx.CurrentItem.PSPersonId + '.jpg?RenditionID=12');
            ms_outHtml.push(''
,'            <a href="#"><img src="', uPicUrl ,'" alt="', displayName ,'" class="profile-image" /></a>'
,'            <a href="', encodedPath ,'" class="detail clearfix">'
,'                <div class="dataset">'
,'                    <h2>', FullNameLinkHitHighlighted ,'</h2>'
);
                            var has_jobtitle = !$isEmptyString(ctx.CurrentItem.PSPersonJobTitle);
                            if(has_jobtitle == true) {
                            var jobTitle = ctx.CurrentItem.PSPersonJobTitle + "";
                            jobTitle = printJobTitle(jobTitle);
                    ms_outHtml.push(''
,'                    <div class="title">', jobTitle ,'</div>'
);
                    }
                    ms_outHtml.push(''
,'                </div>'
,'                <ul class="dataset">'
,'                    <li><label>Preferred name:</label>', PreferredFullNameLinkHitHighlighted ,'</li>'
);

                            if(has_psorganisation == true) {
                            var organisation = ctx.CurrentItem.PSPersonOrganisation;
                            organisation = $htmlEncode(organisation);
                    ms_outHtml.push(''
,'                    <li><label>Organisation:</label>', organisation ,'</li>'
);
                        }
                    ms_outHtml.push(''
,'                </ul>'
,'                <span class="fa fa-chevron-right"></span>'
,'            </a>'
,''
,'            <div class="detail clearfix">'
,'                <ul class="dataset">'
,'                    <li>'
,'                        <div id="UserPersona">'
,'                            <div id="', userPersonaId ,'"></div>'
,'                        </div>                             '
,'                    </li>'
);
                        var has_phno = !$isEmptyString(ctx.CurrentItem.PSPersonPreferredPhone);
                        if(has_phno == true) {
                        var phone = $htmlEncode(ctx.CurrentItem.PSPersonPreferredPhone);
                    ms_outHtml.push(''
,'                    <li><label>Preferred phone:</label><a href="tel:', phone ,'">', phone ,'</a></li>'
);
                        }

                    ms_outHtml.push(''
);
                        if(has_mob == true) {
                        var encodedMobilePhone = $htmlEncode(ctx.CurrentItem.PSPersonMobileNumber);
                        var displayMobilePhone = Srch.U.getSingleHHXMLNodeValue(hhProps, "mobilephone");
                        if ($isEmptyString(displayMobilePhone)) { displayMobilePhone = encodedMobilePhone }
                    ms_outHtml.push(''
,'                    <li><label>Mobile:</label><a href="tel:', encodedMobilePhone ,'">', encodedMobilePhone ,'</a></li>'
);
                        }

                    ms_outHtml.push(''
);
                        var has_email = !$isEmptyString(ctx.CurrentItem.PSPersonEmail);
                        if(has_email == true) {
                        var email = $htmlEncode(ctx.CurrentItem.PSPersonEmail);
                    ms_outHtml.push(''
,'                    <li><a href="mailto:', email ,'">', parentLinkHitHighlighted ,'</a></li>'
);
                        }
                    ms_outHtml.push(''
,'                </ul>'
,'                <ul class="dataset">'
);
                    var has_lo = !$isEmptyString(ctx.CurrentItem.PSPersonLocation);
                    if(has_lo == true) {
                    var personLocation = ctx.CurrentItem.PSPersonLocation;
                    personLocation = $htmlEncode(personLocation);
                    ms_outHtml.push(''
,'                    <li><label>Location:</label>', personLocation ,'</li>'
);
                    }
                    ms_outHtml.push(''
);
                    var has_bu = !$isEmptyString(ctx.CurrentItem.PSPersonBusinessUnit);
                    if(has_bu == true) {
                    var businessUnit = ctx.CurrentItem.PSPersonBusinessUnit;
                    businessUnit = $htmlEncode(businessUnit);
                    ms_outHtml.push(''
,'                    <li><label>Business Unit:</label>', BusinessunitLinkHitHighlighted ,'</li>'
);
                    }
                    ms_outHtml.push(''
,'                </ul>'
,'            </div>'
,'        </div>'
,''
);
        }
        ms_outHtml.push(''
,''
);
    var uName = displayName;
    var uEmail = email;
    var uPicUrl = $urlHtmlEncode(location.protocol + '//' + location.hostname + '/userphotos/'+ ctx.CurrentItem.PSPersonId + '.jpg?renditionid=12');
    var uSip = email;

    AddPostRenderCallback(ctx, function(){
    EnsureScriptFunc("clienttemplates.js", "RenderUserFieldWorker", function() {
    var getUserPersona = function() {
    var renderCtx = new ContextInfo();
    renderCtx.Templates = {};
    renderCtx.Templates["Fields"] = {};
    var fieldSchemaData = { "DefaultRender":"1", "PictureSize": "None"};
    var listSchema = {"EffectivePresenceEnabled": "1", "PresenceAlt": Srch.Res.item_People_NoPresenceAvailable};
    var userData = {"title": uName, "email": uEmail, "picture": uPicUrl, "sip": uSip};
    var personaControlElement = document.getElementById(userPersonaId);
    if (!Srch.U.n(personaControlElement))
    {
    personaControlElement.innerHTML = RenderUserFieldWorker(renderCtx, fieldSchemaData, userData, listSchema);
    personaControlElement.innerHTML = personaControlElement.innerHTML.replace('img class', 'img onerror="this.src=\'/_layouts/15/images/person.gif?rev=23\'" class') ;
    }
    if(typeof(ctx.EnqueueImnRequest) == "undefined") { ctx.EnqueueImnRequest = false; }
    if (ctx.EnqueueImnRequest == false) {
    ctx.ClientControl.add_oneTimeResultRendered(function(){ if (typeof(ProcessImn) != "undefined") { ProcessImn(); } });
    ctx.EnqueueImnRequest = true;
    }
    };
    getUserPersona();
    });
    });ms_outHtml.push(''
,'        '
,''
,''
,'    '
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_2413309c14c74df1ab6051c90d8d884a() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_Person", DisplayTemplate_2413309c14c74df1ab6051c90d8d884a);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person.js", DisplayTemplate_2413309c14c74df1ab6051c90d8d884a);
}

}
RegisterTemplate_2413309c14c74df1ab6051c90d8d884a();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person.js"), RegisterTemplate_2413309c14c74df1ab6051c90d8d884a);
}