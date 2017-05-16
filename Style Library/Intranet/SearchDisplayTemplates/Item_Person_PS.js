/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_473bf9243aaa49bd873cbd5640172ef2(ctx) {
    var ms_outHtml = [];
    var cachePreviousTemplateData = ctx['DisplayTemplateData'];
    ctx['DisplayTemplateData'] = new Object();
    DisplayTemplate_473bf9243aaa49bd873cbd5640172ef2.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['TemplateUrl'] = '~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Person_PS.js';
    ctx['DisplayTemplateData']['TemplateType'] = 'Item';
    ctx['DisplayTemplateData']['TargetControlType'] = ['SearchResults'];
    this.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['ManagedPropertyMapping'] = { 'AboutMe': ['AboutMe'], 'AccountName': ['AccountName'], 'BaseOfficeLocation': ['BaseOfficeLocation'], 'Department': ['Department'], 'HitHighlightedProperties': ['HitHighlightedProperties'], 'Interests': ['Interests'], 'JobTitle': ['JobTitle'], 'LastModifiedTime': ['LastModifiedTime'], 'Memberships': ['Memberships'], 'PastProjects': ['PastProjects'], 'Path': ['Path'], 'PictureURL': ['PictureURL'], 'PreferredName': ['PreferredName'], 'Responsibilities': ['Responsibilities'], 'Schools': ['Schools'], 'ServiceApplicationID': ['ServiceApplicationID'], 'SipAddress': ['SipAddress'], 'Skills': ['Skills'], 'UserProfile_GUID': ['UserProfile_GUID'], 'WorkEmail': ['WorkEmail'], 'WorkId': ['WorkId'], 'YomiDisplayName': ['YomiDisplayName'], 'WorkPhone': ['WorkPhone'], 'MobilePhone': ['MobilePhone'], 'Office': ['Office'], 'PSPeopleSalutation': ['PSPeopleSalutation'], 'PSPeopleBusinessUnit': ['PSPeopleBusinessUnit'], 'PSPeopleJobTitle': ['PSPeopleJobTitle'], 'PSPeopleAlternativeEmail': ['PSPeopleAlternativeEmail'], 'PSPeopleOrganisation': ['PSPeopleOrganisation'], 'PSPeopleBusinessGroup': ['PSPeopleBusinessGroup'] };
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
        $setResultItem(itemId, ctx.CurrentItem);
        var container_id = id + "_peopleContainer";
        var hhProps = Srch.U.createXMLDocument("<root>" + ctx.CurrentItem.HitHighlightedProperties + "</root>");
        var currentpath = ctx.CurrentItem.Path;
        var newpath = currentpath.replace('http://mysite.ourhouse.campus.services:8080/Person.aspx', 'http://ourhouse.parliament.nz/Pages/userprofile.aspx');
        var encodedPath = $urlHtmlEncode(newpath);
        var has_pn = !$isEmptyString(ctx.CurrentItem.PreferredName);
        var has_phno = !$isEmptyString(ctx.CurrentItem.WorkPhone);
        var has_sip = !$isEmptyString(ctx.CurrentItem.SipAddress);
        var has_email = !$isEmptyString(ctx.CurrentItem.WorkEmail);
        var has_jt = !$isEmptyString(ctx.CurrentItem.JobTitle);
        var has_dp = !$isEmptyString(ctx.CurrentItem.Department);
        var has_abme = !$isEmptyString(ctx.CurrentItem.AboutMe);
        var has_resp = !$isEmptyString(ctx.CurrentItem.Responsibilities);
        var has_pp = !$isEmptyString(ctx.CurrentItem.PastProjects);
        var has_ski = !$isEmptyString(ctx.CurrentItem.Skills);
        var has_sch = !$isEmptyString(ctx.CurrentItem.Schools);
        var has_int = !$isEmptyString(ctx.CurrentItem.Interests);
        var has_vlm = !$isEmptyString(ctx.CurrentItem.ProfileViewsLastMonth);
        var has_vlw = !$isEmptyString(ctx.CurrentItem.ProfileViewsLastWeek);
        var has_query = !$isEmptyString(ctx.CurrentItem.ProfileQueriesFoundYou);

        var has_salutation = !$isEmptyString(ctx.CurrentItem.PSPeopleSalutation);
        var has_bu = !$isEmptyString(ctx.CurrentItem.PSPeopleBusinessUnit);
        var has_psjobtitle = !$isEmptyString(ctx.CurrentItem.PSPeopleJobTitle);

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

        function printBusinessUnit(businessUnitProperty) {
            var businessUnitArray = businessUnitProperty.split(';');

            if (businessUnitArray.length > 1) {
                if (identical(businessUnitArray)) {
                    businessUnitProperty = businessUnitArray[0];
                }
                else {
                    businessUnitProperty = "";
                }
            }

            return businessUnitProperty;
        }



        //Test Vars
        var test_mobile = !$isEmptyString(ctx.CurrentItem.MobilePhone);
        var test_office = !$isEmptyString(ctx.CurrentItem.Office);

        var isSelfSrch = (has_vlm == true || has_vlw == true || has_query == true);
        var delimiter = "";
        var userPersonaId = $htmlEncode(id) + "_peopleUserPersona";
        var uSip = ctx.CurrentItem.SipAddress;
        var uEmail = ctx.CurrentItem.WorkEmail;
        var uName = ctx.CurrentItem.PreferredName;
        var uPicUrl = ctx.CurrentItem.PictureURL;
        var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/Item_Person_HoverPanel_PS.js";
        ms_outHtml.push(''
        , '                        <div id="', $htmlEncode(container_id), '" class="ms-srch-people-outerContainer ms-srch-resultHover">'
        , '                            <div id="', $htmlEncode(itemId), '" name="Item" class="ms-srch-people-item" onmouseover="EnsureScriptParams(\'SearchUI.js\', \'HP.Init\', event, \'', $scriptEncode(itemId), '\', \'', $scriptEncode(hoverId), '\', \'', $scriptEncode(hoverUrl), '\');" onmouseout="EnsureScriptParams(\'SearchUI.js\', \'HP.Hide\');">'
        , '                            <div id="', $htmlEncode(hoverId), '" class="ms-srch-hover-outerContainer"></div>'
        , '                                <div id="UserPersonaContainer">'
        , '                                    <div id="UserPersona">'
        , '                                        <div id="', userPersonaId, '"></div>'
        , '                                    </div>'
        , '                                </div>'
        , '                                <div id="UserInfoContainer">'
        , '                                    <div id="ContactInfo">'
        , '                                        <div id="NameField">'
        );

        var encodedName = (has_pn == true) ? $htmlEncode(ctx.CurrentItem.PreferredName) : $htmlEncode(ctx.CurrentItem.YomiDisplayName);
        var displayName = Srch.U.getSingleHHXMLNodeValue(hhProps, "preferredname");
        if ($isEmptyString(displayName)) { displayName = encodedName }
        if (has_salutation == true) {
            displayName = ctx.CurrentItem.PSPeopleSalutation + " " + displayName;
        }
        ms_outHtml.push('	'
        , '                                            <div id="NameValue" class="ms-srch-ellipsis ms-textLarge">'
        , '                                                <a clicktype="Result" id="NameFieldLink" href="', encodedPath, '" title="', encodedName, '">', displayName, '</a>'
        , '                                            </div>'
        , '                                        </div>'
        );
        if (has_psjobtitle == true && printJobTitle(ctx.CurrentItem.PSPeopleJobTitle) != "Multiple roles, please view profile") {
            ms_outHtml.push(''
            , '                                            <div id="JobTitleField">'
            );
            var encodedJtitle = $htmlEncode(printJobTitle(ctx.CurrentItem.PSPeopleJobTitle));
            displayJtitle = encodedJtitle;
            ms_outHtml.push(' '
            , '                                                <div id="JobTitleValue" class="ms-srch-ellipsis" title="', encodedJtitle, '"> ', displayJtitle, ' </div>'
            , '                                            </div>'
            );
        }
        ms_outHtml.push(''
        );
        if (has_bu == true && printBusinessUnit(ctx.CurrentItem.PSPeopleBusinessUnit) != "") {
            ms_outHtml.push(''
            , '                                            <div id="DepartmentField">'
            );
            var encodedBusinessUnit = $htmlEncode(printBusinessUnit(ctx.CurrentItem.PSPeopleBusinessUnit));
            ms_outHtml.push(' '
            , '                                                <div id="DepartmentValue" class="ms-srch-ellipsis" title="', encodedBusinessUnit, '"> ', encodedBusinessUnit, ' </div>'
            , '                                            </div>'
            );
        }

        //Add Custom fields below this line
        ms_outHtml.push(''
        , ''
        );
        if (has_email == true) {
            ms_outHtml.push('									'
            );
            var encodedEmail = $htmlEncode(ctx.CurrentItem.WorkEmail);
            var displayEmail = Srch.U.getSingleHHXMLNodeValue(hhProps, "workemail");
            if ($isEmptyString(displayEmail)) { displayPhone = encodedEmail }
            ms_outHtml.push(' '
            , '												<div class="ms-srch-ellipsis">'
            , '													<a href="mailto:', encodedEmail, '">', encodedEmail, '</a>'
            , '												</div>'
            );
        }

        ms_outHtml.push(''
        , ''
        , '				'
        );
        if (has_phno == true) {
            ms_outHtml.push('									'
            , ''
            , '                                            <div id="WorkPhoneField">'
            );
            var encodedPhone = $htmlEncode(ctx.CurrentItem.WorkPhone);
            var displayPhone = Srch.U.getSingleHHXMLNodeValue(hhProps, "workphone");
            if ($isEmptyString(displayPhone)) { displayPhone = encodedPhone }
            ms_outHtml.push(' '
            , '                                                <div id="WorkPhoneValue" class="ms-srch-ellipsis" title="', encodedPhone, '"> Preferred phone: <a href="tel:', displayPhone,'">', displayPhone, '</a></div>'
            , '                                            </div>'
            );
        }

        ms_outHtml.push(''
        );
        if (printJobTitle(ctx.CurrentItem.PSPeopleJobTitle) == "Multiple roles, please view profile") {
            ms_outHtml.push(''
            , '											<div id="PleaseViewProfile">'
            , '													<br /><div id="ViewProfile" class="ms-srch-ellipsis" title="Please view profile"><i>Multiple roles, view profile</i></div>'
            , '											</div>'
            );
        }
        ms_outHtml.push(''
        , ''
        , ''
        , '                                    </div>'
        );
        if (isSelfSrch == true) {
            ms_outHtml.push(''
            , '                                        <hr class="ms-srch-people-item-separator" />'
            , '                                        <div id="SelfSearchInfo">'
            , '                                            <div id="Heading">'
            , '                                                <a id="EditProfileLink" href="', $urlHtmlEncode(ctx.CurrentItem.EditProfileUrl), '"> ', $htmlEncode(Srch.Res.item_People_EditProfileLink), ' </a>'
            , '                                            </div>'
            , '                                            <div id="Frequency">'
            , '                                                <span id="FieldTitle" class="ms-soften"> ', $htmlEncode(Srch.Res.item_People_SelfSearchFrequency), ' </span>'
            , '                                                <ul id="FrequencyCard">'
            , '                                                    <li id="MonthlyViews">'
            );
            var encodedVal = (ctx.CurrentItem.ProfileViewsLastMonth == 1) ? $htmlEncode(String.format(Srch.Res.item_People_SelfSearchFrequency_ViewsMonths_Singular, ctx.CurrentItem.ProfileViewsLastMonth)) :
                $htmlEncode(String.format(Srch.Res.item_People_SelfSearchFrequency_ViewsMonths_Plural, ctx.CurrentItem.ProfileViewsLastMonth));
            ms_outHtml.push(''
            , '                                                           ', encodedVal, '  '
            , '                                                    </li>'
            , '                                                    <li id="DailyViews">'
            );
            var encodedVal = (ctx.CurrentItem.ProfileViewsLastWeek == 1) ? $htmlEncode(String.format(Srch.Res.item_People_SelfSearchFrequency_ViewsWeeks_Singular, ctx.CurrentItem.ProfileViewsLastWeek)) :
                $htmlEncode(String.format(Srch.Res.item_People_SelfSearchFrequency_ViewsWeeks_Plural, ctx.CurrentItem.ProfileViewsLastWeek));
            ms_outHtml.push(''
            , '                                                        ', encodedVal, '  '
            , '                                                    </li>'
            , '                                                </ul>'
            , '                                            </div>'
            );
            if (has_query == true) {
                ms_outHtml.push('                                        '
                , '                                                <div id="Keywords">'
                , '                                                    <span id="FieldTitle" class="ms-soften"> ', $htmlEncode(Srch.Res.item_People_SelfSearchKeywords), ' </span>'
                );
                var encodedVal = $htmlEncode(Srch.U.getTrimmedString(Srch.U.getUnEncodedMultiValuedResults(ctx.CurrentItem.ProfileQueriesFoundYou, 5, delimiter), 84));
                if (!Srch.U.e(encodedVal)) {
                    ms_outHtml.push(''
                    , '                                                        ', encodedVal, ''
                    );
                }
                ms_outHtml.push(''
                , '                                                </div>    '
                );
            }
            ms_outHtml.push(''
            , ''
            , '                                        </div>'
            );
        }
        ms_outHtml.push(''
        , '                                </div> '
        , '                            </div>'
        , '                        </div>'
        );
        AddPostRenderCallback(ctx, function () {
            EnsureScriptFunc("clienttemplates.js", "RenderUserFieldWorker", function () {
                var getUserPersona = function () {
                    var renderCtx = new ContextInfo();
                    renderCtx.Templates = {};
                    renderCtx.Templates["Fields"] = {};
                    var fieldSchemaData = { "PictureOnly": "1", "PictureSize": "Size_72px" };
                    var listSchema = { "EffectivePresenceEnabled": "1", "PresenceAlt": Srch.Res.item_People_NoPresenceAvailable };
                    var userData = { "title": uName, "email": uEmail, "picture": uPicUrl, "sip": uSip };
                    var personaControlElement = document.getElementById(userPersonaId);
                    if (!Srch.U.n(personaControlElement)) {
                        personaControlElement.innerHTML = RenderUserFieldWorker(renderCtx, fieldSchemaData, userData, listSchema);
                    }
                    if (typeof (ctx.EnqueueImnRequest) == "undefined") { ctx.EnqueueImnRequest = false; }
                    if (ctx.EnqueueImnRequest == false) {
                        ctx.ClientControl.add_oneTimeResultRendered(function () { if (typeof (ProcessImn) != "undefined") { ProcessImn(); } });
                        ctx.EnqueueImnRequest = true;
                    }
                };
                getUserPersona();
            });
        });
        ms_outHtml.push('                        '
        );
    }
    ms_outHtml.push(''
    , '    '
    );

    ctx['ItemValues'] = cachePreviousItemValuesFunction;
    ctx['DisplayTemplateData'] = cachePreviousTemplateData;
    return ms_outHtml.join('');
}
function RegisterTemplate_473bf9243aaa49bd873cbd5640172ef2() {

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("Item_Person", DisplayTemplate_473bf9243aaa49bd873cbd5640172ef2);
    }

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Person_PS.js", DisplayTemplate_473bf9243aaa49bd873cbd5640172ef2);
    }

}
RegisterTemplate_473bf9243aaa49bd873cbd5640172ef2();
if (typeof (RegisterModuleInit) == "function" && typeof (Srch.U.replaceUrlTokens) == "function") {
    RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Person_PS.js"), RegisterTemplate_473bf9243aaa49bd873cbd5640172ef2);
}