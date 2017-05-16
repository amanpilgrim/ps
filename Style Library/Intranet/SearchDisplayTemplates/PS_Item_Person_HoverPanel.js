/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_bb144966c50a4b00bd8e6675633ffef1(ctx) {
    var ms_outHtml = [];
    var cachePreviousTemplateData = ctx['DisplayTemplateData'];
    ctx['DisplayTemplateData'] = new Object();
    DisplayTemplate_bb144966c50a4b00bd8e6675633ffef1.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['TemplateUrl'] = '~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person_HoverPanel.js';
    ctx['DisplayTemplateData']['TemplateType'] = 'Item';
    ctx['DisplayTemplateData']['TargetControlType'] = ['SearchHoverPanel'];
    this.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['ManagedPropertyMapping'] = { 'PSPersonAccountName': ['PSPersonAccountName'], 'PSPersonFirstName': ['PSPersonFirstName'], 'PSPersonLastName': ['PSPersonLastName'], 'PSPersonFullName': ['PSPersonFullName'], 'PSPersonSalutation': ['PSPersonSalutation'], 'PSPersonPreferredName': ['PSPersonPreferredName'], 'PSPersonPreferredPhone': ['PSPersonPreferredPhone'], 'PSPersonEmail': ['PSPersonEmail'], 'PSPersonAlternativeEmail': ['PSPersonAlternativeEmail'], 'PSPersonMobileNumber': ['PSPersonMobileNumber'], 'PSPersonParty': ['PSPersonParty'], 'PSPersonJobTitle': ['PSPersonJobTitle'], 'PSPersonPhone': ['PSPersonPhone'], 'PSPersonOrganisation': ['PSPersonOrganisation'], 'PSPersonBusinessGroup': ['PSPersonBusinessGroup'], 'PSPersonBusinessUnit': ['PSPersonBusinessUnit'], 'PSPersonLocation': ['PSPersonLocation'], 'PSPersonMemberOffice': ['PSPersonMemberOffice'], 'PSPersonRole': ['PSPersonRole'], 'PSPersonPortfolio': ['PSPersonPortfolio'], 'PSPersonPhotoUrl': ['PSPersonPhotoUrl'], 'PSPersonId': ['PSPersonId'], 'PSPersonPreferredFullName': ['PSPersonPreferredFullName'] };
    var cachePreviousItemValuesFunction = ctx['ItemValues'];
    ctx['ItemValues'] = function (slotOrPropName) {
        return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
    };

    ms_outHtml.push('', ''
    );
    if (!$isNull(ctx.CurrentItem)) {
        var id = ctx.CurrentItem.id;
        var encodedId = $htmlEncode(ctx.CurrentItem.csr_id);
        var followId = encodedId + "_hoverFollow";
        var dynTagId = encodedId + "_hoverDynTag";
        var dynTagIdRel = encodedId + "_hoverDynTagRel";
        var visitId = encodedId + "_hoverVisit";
        var encodedPath = $urlHtmlEncode(location.protocol + '//' + location.hostname + "/pages/userprofile.aspx?personid=" + ctx.CurrentItem.PSPersonId);

        var infoAvailable = false;
        var isExpResult = false;
        if (!$isNull(ctx.CurrentItem.ParentTableReference) && !$isNull(ctx.CurrentItem.ParentTableReference.QueryRuleId)) {
            var orQRId = new SP.Guid(ctx.CurrentItem.ParentTableReference.QueryRuleId);
            var exQRId = new SP.Guid("915bafaa-12da-492c-89b3-516f811dbf8c");
            if (!$isNull(orQRId) && !$isNull(exQRId) && orQRId.equals(exQRId)) {
                isExpResult = true;
            }
        }
        ms_outHtml.push(''
        , '            <div class="ms-srch-hover-innerContainer ms-srch-hover-standardSize" id="', $htmlEncode(id + HP.ids.inner), '">'
        , '                <div class="ms-srch-hover-arrowBorder" id="', $htmlEncode(id + HP.ids.arrowBorder), '"></div>'
        , '                <div class="ms-srch-hover-arrow" id="', $htmlEncode(id + HP.ids.arrow), '"></div>'
        , '                <div class="ms-srch-hover-content" id="', $htmlEncode(id + HP.ids.content), '" data-displaytemplate="PeopleHoverPanel">'
        , '                    <div id="', $htmlEncode(id + HP.ids.header), '" class="ms-srch-hover-header">'
        , '                        <div class="ms-srch-hover-close">'
        , '                            <a href="javascript:HP.Close()" id="', $htmlEncode(id + HP.ids.close), '" title="', $htmlEncode(Srch.Res.hp_Tooltip_Close), '">'
        , '                                <img src="', $urlHtmlEncode(SP.Utilities.VersionUtility.getImageUrl(Srch.SU.closeImage)), '" alt="', $htmlEncode(Srch.Res.hp_Tooltip_Close), '" />'
        , '                            </a>'
        , '                        </div>'
        , '                        <div class="ms-srch-hover-title">'
        );
        var displayName = $htmlEncode(ctx.CurrentItem.PSPersonPreferredFullName);
        ms_outHtml.push('                        '
        , '                                <h2 class="ms-dlg-heading ms-srch-ellipsis"><strong>', displayName, '</strong></h2>'
        , '								<br />'
        , '                        </div>'
        , '                    </div>'
        , '                    <div id="', $htmlEncode(id + HP.ids.body), '" class="ms-srch-hover-body ms-srch-people-hover-categories">'
        , '                        <ul id="Categories">'
        );
        if (isExpResult == true) {
            ms_outHtml.push('                        '
            , '                              <div id="', dynTagId, '"></div>'
            );
        }
        ms_outHtml.push('   '
        , ''
        );
        var has_jobtitle = !$isEmptyString(ctx.CurrentItem.PSPersonJobTitle);
        if (has_jobtitle == true) {
            var jobTitle = ctx.CurrentItem.PSPersonJobTitle + "";

            ms_outHtml.push(' '
            , '											<li id="PSJobTitle">'
            , '												<div class="ms-srch-hover-text">'
            , '													', jobTitle, ''
            , '													<p></p>'
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push(''
        );
        var has_bu = !$isEmptyString(ctx.CurrentItem.PSPersonBusinessUnit);
        if (has_bu == true) {
            var businessUnit = ctx.CurrentItem.PSPersonBusinessUnit;
            businessUnit = $htmlEncode(businessUnit);
            ms_outHtml.push(' '
            , '											<li id="PSBusinessUnit">'
            , '												<div class="ms-srch-hover-text">'
            , '													Business Unit: ', businessUnit, ''
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push(''
        );
        var has_bg = !$isEmptyString(ctx.CurrentItem.PSPersonBusinessGroup);
        if (has_bg == true) {
            var businessGroup = ctx.CurrentItem.PSPersonBusinessGroup;
            businessGroup = $htmlEncode(businessGroup);
            ms_outHtml.push('									'
            , '											<li id="PSBusinessGroup">'
            , '												<div class="ms-srch-hover-text">'
            , '													Business Group: ', businessGroup, ''
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push(''
        );
        var has_psorganisation = !$isEmptyString(ctx.CurrentItem.PSPersonOrganisation);
        if (has_psorganisation == true) {
            var organisation = ctx.CurrentItem.PSPersonOrganisation;
            organisation = $htmlEncode(organisation);
            ms_outHtml.push('									'
            , '											<li id="Li1">'
            , '												<div class="ms-srch-hover-text">'
            , '													Organisation: <strong>', organisation, '</strong>'
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push('         '
        );
        var has_pslocation = !$isEmptyString(ctx.CurrentItem.PSPersonLocation);
        if (has_pslocation == true) {
            var calloutlocation = ctx.CurrentItem.PSPersonLocation;
            calloutlocation = $htmlEncode(calloutlocation);
            ms_outHtml.push('									'
            , '											<li id="LILocation">'
            , '												<div class="ms-srch-hover-text">'
            , '													Location: ', calloutlocation, ''
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push('         '
        );


        var has_email = !$isEmptyString(ctx.CurrentItem.PSPersonEmail);
        if (has_email == true) {
            var email = $htmlEncode(ctx.CurrentItem.PSPersonEmail);
            ms_outHtml.push(' '
            , '											<li id="WorkEmail">'
            , '												<div class="ms-srch-hover-text">'
            , '													<p></p>'
            , '													<a href="mailto:', email, '">', email, '</a>'
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push(''
        , ''
        );
        var has_phno = !$isEmptyString(ctx.CurrentItem.PSPersonPreferredPhone);
        if (has_phno == true) {
            var phone = $htmlEncode(ctx.CurrentItem.PSPersonPreferredPhone);
            ms_outHtml.push(' '
            , '											<li id="PreferredPhone">'
            , '												<div class="ms-srch-hover-text">'
            , '													Preferred phone: <strong><a href="tel:', phone, '">', phone, '</a></strong>'
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push(''
        , ''
        );
        var has_mob = !$isEmptyString(ctx.CurrentItem.PSPersonMobileNumber);
        if (has_mob == true) {
            var mobile = $htmlEncode(ctx.CurrentItem.PSPersonMobileNumber);
            ms_outHtml.push(' '
            , '											<li id="MobilePhone">'
            , '												<div class="ms-srch-hover-text">'
            , '													Mobile: <a href="tel:', mobile, '">', mobile, '</a>'
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push(''
        , ''
        );
        if (isExpResult == false) {
            ms_outHtml.push('                        '
            , '                              <div id="Div1"></div>'
            );
        }
        ms_outHtml.push('   '
        , '                        </ul>'
        , '                    </div>'
        , '                    <div id="', $htmlEncode(id + HP.ids.actions), '" class="ms-srch-hover-actions">'
        , '                        <div class="ms-srch-hover-action">'
        , '                            <a id="', visitId, '" class="ms-calloutLink ms-uppercase" href="', encodedPath, '" title="', $htmlEncode(Srch.Res.hp_PeopleItem_ViewProfile), '">'
        , '                                ', Srch.Res.hp_PeopleItem_ViewProfile, ' '
        , '                            </a>'
        , '                        </div>'
        , '           '
        , '                    </div>'
        );
        var uname = displayName;
        AddPostRenderCallback(ctx, function () {
            var docCtrlElem = document.getElementById(dynTagId);
            Srch.PSU.documentsByQuery(ctx.ClientControl, uname, docCtrlElem, infoAvailable, isExpResult);
        });
        ms_outHtml.push(''
        );
        var queryUserId = null;
        if (ctx.ScriptApplicationManager && ctx.ScriptApplicationManager.states) {
            queryUserId = ctx.ScriptApplicationManager.states.currentUserProfileId;
        }
        var userId = id;

        AddPostRenderCallback(ctx, function () {
            Srch.PSU.relatedThroughByQuery(ctx.ClientControl, userId, queryUserId, dynTagIdRel, infoAvailable);
        });
        ms_outHtml.push(''
        , ''
        , '                </div>'
        , '            </div>'
        );
    }
    ms_outHtml.push('            '
    , '    '
    );

    ctx['ItemValues'] = cachePreviousItemValuesFunction;
    ctx['DisplayTemplateData'] = cachePreviousTemplateData;
    return ms_outHtml.join('');
}
function RegisterTemplate_bb144966c50a4b00bd8e6675633ffef1() {

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("Item_Person_HoverPanel", DisplayTemplate_bb144966c50a4b00bd8e6675633ffef1);
    }

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person_HoverPanel.js", DisplayTemplate_bb144966c50a4b00bd8e6675633ffef1);
    }

}
RegisterTemplate_bb144966c50a4b00bd8e6675633ffef1();
if (typeof (RegisterModuleInit) == "function" && typeof (Srch.U.replaceUrlTokens) == "function") {
    RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person_HoverPanel.js"), RegisterTemplate_bb144966c50a4b00bd8e6675633ffef1);
}