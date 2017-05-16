/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_0cfd3001680947e6a5ed53254dea2d1b(ctx) {
    var ms_outHtml = [];
    var cachePreviousTemplateData = ctx['DisplayTemplateData'];
    ctx['DisplayTemplateData'] = new Object();
    DisplayTemplate_0cfd3001680947e6a5ed53254dea2d1b.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['TemplateUrl'] = '~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Person_HoverPanel_PS.js';
    ctx['DisplayTemplateData']['TemplateType'] = 'Item';
    ctx['DisplayTemplateData']['TargetControlType'] = ['SearchHoverPanel'];
    this.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['ManagedPropertyMapping'] = { 'AboutMe': ['AboutMe'], 'AccountName': ['AccountName'], 'BaseOfficeLocation': ['BaseOfficeLocation'], 'Department': ['Department'], 'HitHighlightedProperties': ['HitHighlightedProperties'], 'Interests': ['Interests'], 'JobTitle': ['JobTitle'], 'LastModifiedTime': ['LastModifiedTime'], 'Memberships': ['Memberships'], 'PastProjects': ['PastProjects'], 'Path': ['Path'], 'PictureURL': ['PictureURL'], 'PreferredName': ['PreferredName'], 'Responsibilities': ['Responsibilities'], 'Schools': ['Schools'], 'ServiceApplicationID': ['ServiceApplicationID'], 'SipAddress': ['SipAddress'], 'Skills': ['Skills'], 'UserProfile_GUID': ['UserProfile_GUID'], 'WorkEmail': ['WorkEmail'], 'WorkId': ['WorkId'], 'YomiDisplayName': ['YomiDisplayName'], 'WorkPhone': ['WorkPhone'], 'MobilePhone': ['MobilePhone'], 'Office': ['Office'], 'PSPeopleSalutation': ['PSPeopleSalutation'], 'PSPeopleBusinessUnit': ['PSPeopleBusinessUnit'], 'PSPeopleJobTitle': ['PSPeopleJobTitle'], 'PSPeopleAlternativeEmail': ['PSPeopleAlternativeEmail'], 'PSPeopleOrganisation': ['PSPeopleOrganisation'], 'PSPeopleBusinessGroup': ['PSPeopleBusinessGroup'] };
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
        var hhProps = Srch.U.createXMLDocument("<root>" + ctx.CurrentItem.HitHighlightedProperties + "</root>");
        var has_acc = !$isEmptyString(ctx.CurrentItem.AccountName);
        var has_abme = !$isEmptyString(ctx.CurrentItem.AboutMe);
        var has_bol = !$isEmptyString(ctx.CurrentItem.BaseOfficeLocation);
        var has_office = !$isEmptyString(ctx.CurrentItem.Office);
        var has_resp = !$isEmptyString(ctx.CurrentItem.Responsibilities);
        var has_ski = !$isEmptyString(ctx.CurrentItem.Skills);
        var has_pp = !$isEmptyString(ctx.CurrentItem.PastProjects);
        var has_sch = !$isEmptyString(ctx.CurrentItem.Schools);
        var has_memb = !$isEmptyString(ctx.CurrentItem.Memberships);
        var has_mob = !$isEmptyString(ctx.CurrentItem.MobilePhone);
        var has_int = !$isEmptyString(ctx.CurrentItem.Interests);
        var has_wkem = !$isEmptyString(ctx.CurrentItem.WorkEmail);
        var has_vlm = !$isEmptyString(ctx.CurrentItem.ProfileViewsLastMonth);
        var has_vlw = !$isEmptyString(ctx.CurrentItem.ProfileViewsLastWeek);
        var has_query = !$isEmptyString(ctx.CurrentItem.ProfileQueriesFoundYou);
        var has_phno = !$isEmptyString(ctx.CurrentItem.WorkPhone);

        var has_salutation = !$isEmptyString(ctx.CurrentItem.PSPeopleSalutation);
        var has_bu = !$isEmptyString(ctx.CurrentItem.PSPeopleBusinessUnit);
        var has_psjobtitle = !$isEmptyString(ctx.CurrentItem.PSPeopleJobTitle);

        var has_psorganisation = !$isEmptyString(ctx.CurrentItem.PSPeopleOrganisation);
        var has_psalternativeemail = !$isEmptyString(ctx.CurrentItem.PSPeopleAlternativeEmail);
        var has_psbusinessgroup = !$isEmptyString(ctx.CurrentItem.PSPeopleBusinessGroup);

        //Split multi value variables

        function identical(array) {
            for (var i = 0; i < array.length - 1; i++) {
                if (array[i] != array[i + 1]) {
                    return false;
                }
            }
            return true;
        }

        function printJobTitle(jobTitleProperty) {

            var jobTitleArray = jobTitleProperty.split(';');

            if (jobTitleArray.length > 1) {
                if (identical(jobTitleArray)) {
                    jobTitleProperty = jobTitleArray[0];
                }
                else {
                    jobTitleProperty = "Multiple roles, please view profile";
                }
            }
            return jobTitleProperty;
        }

        function printMultiValueProperty(property) {
            var businessUnitArray = property.split(';');

            if (businessUnitArray.length > 1) {
                if (identical(businessUnitArray)) {
                    property = businessUnitArray[0];
                }
                else {
                    property = "";
                }
            }

            return property;
        }




        var isSelfSrch = (has_vlm == true || has_vlw == true || has_query == true);
        var infoAvailable = false;
        var delimiter = "";
        var uname = ctx.CurrentItem.PreferredName;
        var aname = ctx.CurrentItem.AccountName;
        var isExpResult = false;
        if (!$isNull(ctx.CurrentItem.ParentTableReference) && !$isNull(ctx.CurrentItem.ParentTableReference.QueryRuleId)) {
            var orQRId = new SP.Guid(ctx.CurrentItem.ParentTableReference.QueryRuleId);
            var exQRId = new SP.Guid("915bafaa-12da-492c-89b3-516f811dbf8c");
            if (!$isNull(orQRId) && !$isNull(exQRId) && orQRId.equals(exQRId)) {
                isExpResult = true;
            }
        }
        if ($isEmptyString(uname)) { uname = ctx.CurrentItem.YomiDisplayName }
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
        if (!Srch.U.e(uname) && !Srch.U.e(ctx.CurrentItem.Path)) {
            var encodedName = $htmlEncode(uname);
            var displayName = Srch.U.getSingleHHXMLNodeValue(hhProps, "preferredname");
            if ($isEmptyString(displayName)) { displayName = encodedName }
            if (has_salutation == true) {
                displayName = ctx.CurrentItem.PSPeopleSalutation + " " + displayName;
            }
            ms_outHtml.push('                        '
            , '                                <h2 class="ms-dlg-heading ms-srch-ellipsis">', displayName, '</h2>'
            , '								<br />'
            );
        }
        ms_outHtml.push(' '
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
        if (has_psjobtitle == true && printJobTitle(ctx.CurrentItem.PSPeopleJobTitle) != "Multiple roles, please view profile") {
            ms_outHtml.push('									'
            );
            var encodedPSJobTitle = $htmlEncode(printJobTitle(ctx.CurrentItem.PSPeopleJobTitle));

            ms_outHtml.push(' '
            , '											<li id="PSJobTitle">'
            , '												<div class="ms-srch-hover-text">'
            , '													<p>', encodedPSJobTitle, '</p>'
            , '												</div>'
            , '											</li>'
            );
        }

        ms_outHtml.push(''
        , ''
        );
        if (has_bu == true && printMultiValueProperty(ctx.CurrentItem.PSPeopleBusinessUnit) != "") {
            ms_outHtml.push('									'
            );
            var encodedPSBusinessUnit = $htmlEncode(printMultiValueProperty(ctx.CurrentItem.PSPeopleBusinessUnit));
            ms_outHtml.push(' '
            , '											<li id="PSBusinessUnit">'
            , '												<div class="ms-srch-hover-text">'
            , '													<p>', encodedPSBusinessUnit, '</p>'
            , '												</div>'
            , '											</li>'
            );
        }
        ms_outHtml.push(''
        );
        if (has_psbusinessgroup == true) {
            var businessGroupToPrint = printMultiValueProperty(ctx.CurrentItem.PSPeopleBusinessGroup)
            if (businessGroupToPrint != "") {
                ms_outHtml.push('									'
                , '											<li id="PSBusinessGroup">'
                , '												<div class="ms-srch-hover-text">'
                , '													<p>', businessGroupToPrint, '</p>'
                , '												</div>'
                , '											</li>'
                );
            }
        }
        ms_outHtml.push(''
        );
        if (has_psorganisation == true) {
            var organisationToPrint = printMultiValueProperty(ctx.CurrentItem.PSPeopleOrganisation)
            if (organisationToPrint != "") {
                ms_outHtml.push('									'
                , '											<li id="PSBusinessGroup">'
                , '												<div class="ms-srch-hover-text">'
                , '													<p>', organisationToPrint, '</p>'
                , '												</div>'
                , '											</li>'
                );
            }
        }
        ms_outHtml.push('         '
        );
        if (has_wkem == true) {
            ms_outHtml.push('									'
            );
            var encodedEmail = $htmlEncode(ctx.CurrentItem.WorkEmail);
            var displayEmail = Srch.U.getSingleHHXMLNodeValue(hhProps, "workemail");
            if ($isEmptyString(displayEmail)) { displayEmail = encodedEmail }
            ms_outHtml.push(' '
            , '											<li id="WorkEmail">'
            , '												<div class="ms-srch-hover-text">'
            , '													<a href="mailto:', encodedEmail, '">', encodedEmail, '</a>'
            , '												</div>'
            , '											</li>'
            );
        }

        ms_outHtml.push(''
        , ''
        );
        if (has_psalternativeemail == true) {
            ms_outHtml.push('									'
            );
            var psalternativeemail = $htmlEncode(ctx.CurrentItem.PSPeopleAlternativeEmail);
            var displayEmail = Srch.U.getSingleHHXMLNodeValue(hhProps, "psalternativeemail");
            if ($isEmptyString(displayEmail)) { displayPhone = psalternativeemail }
            ms_outHtml.push(' '
            , '											<li id="WorkEmail">'
            , '												<div class="ms-srch-hover-text">'
            , '													<a href="mailto:', psalternativeemail, '">', psalternativeemail, '</a>'
            , '												</div>'
            , '											</li>'
            );
        }

        ms_outHtml.push(''
        , ''
        );
        if (has_phno == true) {
            ms_outHtml.push('									'
            );
            var encodedPreferredPhone = $htmlEncode(ctx.CurrentItem.WorkPhone);
            ms_outHtml.push(' '
            , '											<li id="PreferredPhone">'
            , '												<div class="ms-srch-hover-text">'
            , '													Preferred phone: ', encodedPreferredPhone, ''
            , '												</div>'
            , '											</li>'
            );
        }

        ms_outHtml.push(''
        , ''
        );
        if (has_mob == true) {
            ms_outHtml.push('									'
            );
            var encodedMobilePhone = $htmlEncode(ctx.CurrentItem.MobilePhone);
            var displayMobilePhone = Srch.U.getSingleHHXMLNodeValue(hhProps, "mobilephone");
            if ($isEmptyString(displayMobilePhone)) { displayMobilePhone = encodedMobilePhone }
            ms_outHtml.push(' '
            , '											<li id="MobilePhone">'
            , '												<div class="ms-srch-hover-text">'
            , '													Mobile: ', encodedMobilePhone, ''
            , '												</div>'
            , '											</li>'
            );
        }

        ms_outHtml.push(''
        , ''
        );
        if (isExpResult == false) {
            ms_outHtml.push('                        '
            , '                              <div id="', dynTagId, '"></div>'
            );
        }
        ms_outHtml.push('   '
        , '                        </ul>'
        , '                    </div>'
        , '                    <div id="', $htmlEncode(id + HP.ids.actions), '" class="ms-srch-hover-actions">'
        , '                        <div class="ms-srch-hover-action">'
        , '                            <a id="', visitId, '" class="ms-calloutLink ms-uppercase" href="', $urlHtmlEncode(ctx.CurrentItem.Path), '" title="', $htmlEncode(Srch.Res.hp_PeopleItem_ViewProfile), '">'
        , '                                ', $htmlEncode(Srch.Res.hp_PeopleItem_ViewProfile), ' '
        , '                            </a>'
        , '                        </div>'
        , '           '
        , '                    </div>'
        );
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
        var userId = ctx.CurrentItem.UserProfile_GUID;

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
function RegisterTemplate_0cfd3001680947e6a5ed53254dea2d1b() {

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("Item_Person_HoverPanel", DisplayTemplate_0cfd3001680947e6a5ed53254dea2d1b);
    }

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Person_HoverPanel_PS.js", DisplayTemplate_0cfd3001680947e6a5ed53254dea2d1b);
    }

}
RegisterTemplate_0cfd3001680947e6a5ed53254dea2d1b();
if (typeof (RegisterModuleInit) == "function" && typeof (Srch.U.replaceUrlTokens) == "function") {
    RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Person_HoverPanel_PS.js"), RegisterTemplate_0cfd3001680947e6a5ed53254dea2d1b);
}