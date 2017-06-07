/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_1b0fa837d176451d9f602f7b213b6758(ctx) {
    var ms_outHtml = [];
    var cachePreviousTemplateData = ctx['DisplayTemplateData'];
    ctx['DisplayTemplateData'] = new Object();
    DisplayTemplate_1b0fa837d176451d9f602f7b213b6758.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['TemplateUrl'] = '~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person.js';
    ctx['DisplayTemplateData']['TemplateType'] = 'Item';
    ctx['DisplayTemplateData']['TargetControlType'] = ['SearchResults'];
    this.DisplayTemplateData = ctx['DisplayTemplateData'];

    ctx['DisplayTemplateData']['ManagedPropertyMapping'] = { 'PSPersonAccountName': ['PSPersonAccountName'], 'PSPersonFirstName': ['PSPersonFirstName'], 'PSPersonLastName': ['PSPersonLastName'], 'PSPersonFullName': ['PSPersonFullName'], 'PSPersonSalutation': ['PSPersonSalutation'], 'PSPersonPreferredName': ['PSPersonPreferredName'], 'PSPersonPreferredPhone': ['PSPersonPreferredPhone'], 'PSPersonEmail': ['PSPersonEmail'], 'PSPersonAlternativeEmail': ['PSPersonAlternativeEmail'], 'PSPersonMobileNumber': ['PSPersonMobileNumber'], 'PSPersonParty': ['PSPersonParty'], 'PSPersonJobTitle': ['PSPersonJobTitle'], 'PSPersonPhone': ['PSPersonPhone'], 'PSPersonOrganisation': ['PSPersonOrganisation'], 'PSPersonBusinessGroup': ['PSPersonBusinessGroup'], 'PSPersonBusinessUnit': ['PSPersonBusinessUnit'], 'PSPersonLocation': ['PSPersonLocation'], 'PSPersonMemberOffice': ['PSPersonMemberOffice'], 'PSPersonRole': ['PSPersonRole'], 'PSPersonPortfolio': ['PSPersonPortfolio'], 'PSPersonPhotoUrl': ['PSPersonPhotoUrl'], 'PSPersonId': ['PSPersonId'], 'PSPersonPreferredFullName': ['PSPersonPreferredFullName'], 'HitHighlightedProperties': ['HitHighlightedProperties'], 'HitHighlightedSummary': ['HitHighlightedSummary'], 'PSPeopleOrganisation': ['PSPeopleOrganisation'], 'MobilePhone': ['MobilePhone'] };
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

        var accountName = ctx.CurrentItem.PSPersonAccountName;
        var personid = ctx.CurrentItem.PSPersonId;
        var encodedPath = $urlHtmlEncode(location.protocol + '//' + location.hostname + "/pages/userprofile.aspx?personid=" + personid);
        var delimiter = "";
        var userPersonaId = $htmlEncode(id) + "_peopleUserPersona";
        var hoverUrl = "~sitecollection/_catalogs/masterpage/Display Templates/Search/PS_Item_Person_HoverPanel.js";

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
        var csr_id = ctx.CurrentItem.csr_id;
        var parentLinkHitHighlighted = Srch.U.getHighlightedProperty(csr_id, ctx.CurrentItem, "PSPersonEmail");

        if (parentLinkHitHighlighted == null) {
            parentLinkHitHighlighted = $htmlEncode(ctx.CurrentItem.PSPersonEmail);
        }

        // Person full name
        var csr_id_fullname = ctx.CurrentItem.csr_id;

        var FullNameLinkHitHighlighted = Srch.U.getHighlightedProperty(csr_id_fullname, ctx.CurrentItem, "PSPersonPreferredFullName");

        if (FullNameLinkHitHighlighted == null) {
            FullNameLinkHitHighlighted = $htmlEncode(ctx.CurrentItem.PSPersonPreferredFullName);
        }

        // Business unit name
        var csr_id_businessunit = ctx.CurrentItem.csr_id;

        var BusinessunitLinkHitHighlighted = Srch.U.getHighlightedProperty(csr_id_businessunit, ctx.CurrentItem, "PSPersonBusinessUnit");

        if (BusinessunitLinkHitHighlighted == null) {
            BusinessunitLinkHitHighlighted = $htmlEncode(ctx.CurrentItem.PSPersonBusinessUnit);
        }

        //Organisation
        var has_psorganisation = !$isEmptyString(ctx.CurrentItem.PSPersonOrganisation);
        var has_mob = !$isEmptyString(ctx.CurrentItem.PSPersonMobileNumber);
        var hhProps = Srch.U.createXMLDocument("<root>" + ctx.CurrentItem.HitHighlightedProperties + "</root>");
        ms_outHtml.push(''
, '            '
, '                <div id="', $htmlEncode(container_id), '" class="ms-srch-people-outerContainer ms-srch-resultHover">'
, ''
, '                    <a clicktype="Result" id="UserProfileRed" href="', encodedPath, '" style="display: block;color:black;">'
, ''
, '                        <div id="', $htmlEncode(itemId), '" name="Item" class="ms-srch-people-item">'
, '                            <div id="', $htmlEncode(hoverId), '" class="ms-srch-hover-outerContainer"></div>'
, '                            <div id="UserPersonaContainer">'
, '                                <div id="UserPersona">'
, '                                    <div id="', userPersonaId, '"></div>'
, '                                </div>'
, '                            </div>'
, ''
, ''
, '                            <div id="UserInfoContainer">'
, ''
, '                                <div id="ContactInfo">'
, '                                    <div id="NameField">'
);
        var displayName = $htmlEncode(ctx.CurrentItem.PSPersonPreferredFullName);
        ms_outHtml.push(''
, '                                        <!--<div id="NameValue" class="ms-srch-ellipsis ms-textLarge">-->'
, '                                        <div id="NameValue" class="ms-srch-ellipsis ms-textLarge">'
, '                                            <div id="NameFieldLink" class="ms-srch-ellipsis" title="', displayName, '">', FullNameLinkHitHighlighted, '</div>'
, '                                            <!--<a clicktype="Result" class="ms-srch-ellipsis" id="NameFieldLink" href="', encodedPath, '" title="', displayName, '">', FullNameLinkHitHighlighted, '</a>-->'
, '                                        </div>'
, '                                    </div>'
);
        var has_jobtitle = !$isEmptyString(ctx.CurrentItem.PSPersonJobTitle);
        if (has_jobtitle == true) {
            var jobTitle = ctx.CurrentItem.PSPersonJobTitle + "";
            jobTitle = printJobTitle(jobTitle);
            ms_outHtml.push(''
, '                                    <div id="JobTitleField">'
, '                                        <div id="JobTitleValue" class="ms-srch-ellipsis" title="', jobTitle, '"> ', jobTitle, ' </div>'
, '                                    </div>'
);
        }
        ms_outHtml.push(''
);
        var has_bu = !$isEmptyString(ctx.CurrentItem.PSPersonBusinessUnit);
        if (has_bu == true) {
            var businessUnit = ctx.CurrentItem.PSPersonBusinessUnit;
            businessUnit = $htmlEncode(businessUnit);
            ms_outHtml.push(''
, '                                    <!--<div id="BusinessUnitField">-->'
, '                                    <div id="BusinessUnitField">'
, '                                        <!--<div id="BusinessUnitValue" class="ms-srch-ellipsis" title="', businessUnit, '">Business Unit: ', businessUnit, ' </div>-->'
, '                                        <div id="BusinessUnitValue" class="ms-srch-ellipsis" title="', businessUnit, '">Business Unit: ', BusinessunitLinkHitHighlighted, ' </div>'
, '                                    </div>'
);
        }
        ms_outHtml.push(''
);

        if (has_psorganisation == true) {
            var organisation = ctx.CurrentItem.PSPersonOrganisation;
            organisation = $htmlEncode(organisation);
            ms_outHtml.push(''
, '                                    <div id="OrganisationField">'
, '                                        <div id="OrganisationValue" class="ms-srch-ellipsis" title="', organisation, '">Organisation:<strong> ', organisation, ' </strong></div>'
, '                                    </div>'
);
        }
        ms_outHtml.push(''
);
        var has_lo = !$isEmptyString(ctx.CurrentItem.PSPersonLocation);
        if (has_lo == true) {
            var personLocation = ctx.CurrentItem.PSPersonLocation;
            personLocation = $htmlEncode(personLocation);
            ms_outHtml.push(''
, '                                    <div id="LocationField">'
, '                                        <div id="LocationValue" class="ms-srch-ellipsis" title="', personLocation, '">Location: ', personLocation, ' </div>'
, '                                    </div>'
);
        }
        ms_outHtml.push(''
, ''
, '                                </div>'
, ''
, '                            </div>'
, ''
, '                        </div>'
, '                    </a>'
, '                    '
, ''
, '                    <div id="UserInfoContainerlink">'
, ''
, '                        <div id="ContactInfolink" style="margin-left: 90px;">'
, '                           '
);
        var has_email = !$isEmptyString(ctx.CurrentItem.PSPersonEmail);
        if (has_email == true) {
            var email = $htmlEncode(ctx.CurrentItem.PSPersonEmail);
            ms_outHtml.push(''
, '                            <!--<div id="EmailField">'
, '            <div class="ms-srch-ellipsis"><a href="mailto:', email, '">', email, '</a></div>-->'
, '                            <div id="EmailField">'
, '                                <div class="ms-srch-ellipsis"><a href="mailto:', email, '">', parentLinkHitHighlighted, '</a></div>'
, '                            </div>'
, ''
, '                            <!--<div id="EmailField">'
, '                <div id="EmailFieldValue" class="ms-srch-ellipsis" title="', email, '"> ', parentLinkHitHighlighted, ' </div>'
, '            </div>-->'
);
        }
        ms_outHtml.push(''
);
        var has_phno = !$isEmptyString(ctx.CurrentItem.PSPersonPreferredPhone);
        if (has_phno == true) {
            var phone = $htmlEncode(ctx.CurrentItem.PSPersonPreferredPhone);
            ms_outHtml.push(''
, '                            <div id="PhoneFieldlink">'
, '                                <div id="PhoneValuelink" class="ms-srch-ellipsis" title="', phone, '">Preferred phone: <a href="tel:', phone, '">', phone, '</a></div>'
, '                            </div>'
, ''
, '                            <!--<div id="PhoneField">'
, '                <div id="PhoneValue" class="ms-srch-ellipsis" title="', phone, '">Preferred phone: ', phone, ' </div>'
, '            </div>-->'
);
        }

        ms_outHtml.push(''
);
        if (has_mob == true) {
            var encodedMobilePhone = $htmlEncode(ctx.CurrentItem.PSPersonMobileNumber);
            var displayMobilePhone = Srch.U.getSingleHHXMLNodeValue(hhProps, "mobilephone");
            if ($isEmptyString(displayMobilePhone)) { displayMobilePhone = encodedMobilePhone }
            ms_outHtml.push(''
, '                            <div id="MobileFieldlink">'
, '                                <div id="MobileValuelink" class="ms-srch-ellipsis" title="', encodedMobilePhone, '">Mobile: <a href="tel:', encodedMobilePhone, '">', encodedMobilePhone, '</a></div>'
, '                            </div>'
, '                            <!--<div id="MobileField">'
, '                <div id="MobileValue" class="ms-srch-ellipsis" title="', encodedMobilePhone, '">Mobile: ', encodedMobilePhone, ' </div>'
, '            </div>-->'
);
        }

        ms_outHtml.push(''
, ''
, '                        </div>'
, ''
, '                    </div>'
, '                '
, '                 </div>'
, '                   '
, '                    <!--<a clicktype="Result" id="UserProfileRed" href="', encodedPath, '" style="display: block;"> </a>-->'
, '                    <!--<a clicktype="Result" id="UserProfileRed1" href="', encodedPath, '" style="display: block;">-->'
, ''
, '                        <!--<div id="', $htmlEncode(itemId), '" name="Item" class="ms-srch-people-item" onmouseover="EnsureScriptParams(\'SearchUI.js\', \'HP.Init\', event, \'', $scriptEncode(itemId), '\', \'', $scriptEncode(hoverId), '\', \'', $scriptEncode(hoverUrl), '\');" onmouseout="EnsureScriptParams(\'SearchUI.js\', \'HP.Hide\');">-->'
, '                       '
, '                    <!--</a>-->'
);
        var uName = displayName;
        var uEmail = email;
        var uPicUrl = $urlHtmlEncode(location.protocol + '//' + location.hostname + '/userphotos/' + ctx.CurrentItem.PSPersonId + '.jpg?renditionid=12');
        var uSip = email;

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
                        personaControlElement.innerHTML = personaControlElement.innerHTML.replace('img class', 'img onerror="this.src=\'/_layouts/15/images/person.gif?rev=23\'" class');
                    }
                    if (typeof (ctx.EnqueueImnRequest) == "undefined") { ctx.EnqueueImnRequest = false; }
                    if (ctx.EnqueueImnRequest == false) {
                        ctx.ClientControl.add_oneTimeResultRendered(function () { if (typeof (ProcessImn) != "undefined") { ProcessImn(); } });
                        ctx.EnqueueImnRequest = true;
                    }
                };
                getUserPersona();
            });
        }); ms_outHtml.push(''
);
    }
    ms_outHtml.push(''
, ''
);

    ctx['ItemValues'] = cachePreviousItemValuesFunction;
    ctx['DisplayTemplateData'] = cachePreviousTemplateData;
    return ms_outHtml.join('');
}
function RegisterTemplate_1b0fa837d176451d9f602f7b213b6758() {

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("Item_Person", DisplayTemplate_1b0fa837d176451d9f602f7b213b6758);
    }

    if ("undefined" != typeof (Srch) && "undefined" != typeof (Srch.U) && typeof (Srch.U.registerRenderTemplateByName) == "function") {
        Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person.js", DisplayTemplate_1b0fa837d176451d9f602f7b213b6758);
    }
    //
    $includeCSS("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person.js", "~sitecollection/Style Library/Intranet/CSS/Peoplesearch.css");
    //
}
RegisterTemplate_1b0fa837d176451d9f602f7b213b6758();
if (typeof (RegisterModuleInit) == "function" && typeof (Srch.U.replaceUrlTokens) == "function") {
    RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fPS_Item_Person.js"), RegisterTemplate_1b0fa837d176451d9f602f7b213b6758);
}