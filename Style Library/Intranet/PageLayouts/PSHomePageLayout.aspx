<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="PS" TagName="HomepageContact" Src="~/_controltemplates/15/HomepageContact/HomepageContact.ascx" %>
<%@ Register TagPrefix="PS" TagName="ParliamentPanel" Src="~/_controltemplates/15/ParliamentPanel/ParliamentPanel.ascx" %>
<%@ Register TagPrefix="PS" TagName="QuickLinks" Src="~/_controltemplates/15/QuickLinks/QuickLinks.ascx" %>
<%@ Register TagPrefix="PS" TagName="HouseNextSits" Src="~/_controltemplates/15/HouseSittingDays/HomepageSittingStatus.ascx" %>
<%@ Register TagPrefix="PS" TagName="FindPeople" Src="~/_controltemplates/15/SitePeopleSearchBox/FindPeople.ascx" %>
<%@ Register TagPrefix="PS" TagName="TodaysEvents" Src="~/_controltemplates/15/HomepageTodaysEvents/TodaysEvents.ascx" %>
<%@ Register TagPrefix="PS" TagName="HomepageNewsCarousel" Src="~/_controltemplates/15/HomepageNewsCarousel/HomepageNewsCarousel.ascx" %>
<%@ Register TagPrefix="PS" TagName="HomePageDocumentSearch" Src="~/_controltemplates/15/HomePageDocument/HomePageDocumentSearch.ascx" %>
<%@ Register TagPrefix="PS" TagName="OurHouseandPeople" Src="~/_controltemplates/15/OurHouseandPeople/OurHouseandPeople.ascx" %>
<%@ Register TagPrefix="PS" TagName="Twitter" Src="../../_controltemplates/15/UserProfile/Twitter.ascx" %>
<%@ Register TagPrefix="PS" TagName="DidYouKnow" Src="~/_controltemplates/15/DidYouKnow/DidYouKnow.ascx" %>
<%@ Register TagPrefix="PS" TagName="FeatureLink" Src="~/_controltemplates/15/FeatureLink/FeatureLink.ascx" %>
<%@ Register TagPrefix="PS" TagName="ChoiceSurvey" Src="~/_controltemplates/15/Survey/ChoiceSurvey.ascx" %>
<%@ Register TagPrefix="PS" TagName="EventsCalendar" Src="~/_controltemplates/15/EventsCalendar/EventsCalendar.ascx" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration ID="PSHome" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/home.css%>" after="main.css" runat="server"/>	
	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration3" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/psedit.css%>" after="editmode15.css" runat="server"/>
	</PublishingWebControls:EditModePanel>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderLeftNavBar" runat="server" Visible="false" />
<asp:Content ContentPlaceHolderId="PlaceHolderBreadcrumb" runat="server" Visible="false" />

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<!-- START Main Content Area -->
    <div id="grid1" class="grid">
        <div class="row">
            <div class="block carousel">
                <!-- START News Carousel -->
                <PS:HomepageNewsCarousel id="HomepageNewsCarousel" runat="server"/>	
                <!-- END News Carousel -->
            </div>
            <div class="block aside">
                <aside>
                    <PS:FindPeople runat="server"/>
                    <WebPartPages:WebPartZone runat="server" Title="Right Top" ID="WebPartZone2" Orientation="Vertical"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
                    <PS:QuickLinks id="QuickLinks1" runat="server"/>
                    <WebPartPages:WebPartZone runat="server" Title="Right Middle" ID="WebPartZone3" Orientation="Vertical"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
	            </aside>
            </div>
        </div>
    </div>

    <div id="grid2" class="grid">
        <div class="row">
            <div class="block">
                <PS:HouseNextSits runat="server" id="TodaysEvents1"/>
                <PS:EventsCalendar id="EventsCalendar" runat="server"/>

	            <WebPartPages:WebPartZone runat="server" Title="Main Middle" ID="MainMiddle"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>                
            </div>
            <div class="block">
               <PS:HomePageDocumentSearch runat="server" id="HomePageDocumentSearch1"/>
            </div>
            <div class="block aside">
                <aside>
                    <div class="contactBox noindex">
                        <h2>Useful Contacts</h2> 
                        <PS:HomepageContact id="HomepageContact1" runat="server"/>
                    </div>
                    <WebPartPages:WebPartZone runat="server" Title="Right Bottom" ID="WebPartZone7" Orientation="Vertical"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
	            </aside>
            </div>
        </div>
    </div>

    <div id="grid3" class="grid">
        <div class="row">
            <div class="block">
                <!-- START Our House and People -->
		        <PS:OurHouseandPeople id="OurHouseandPeople" runat="server"/>
		        <WebPartPages:WebPartZone runat="server" Title="Main Left" ID="MainLeft"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
                <!-- End Our House and People -->
            </div>
            <div class="block">
                <PS:FeatureLink id="FeatureLink1" runat="server"/>
                <PS:ChoiceSurvey id="ChoiceSurvey1" runat="server"/>
            </div>
            <div class="block aside">
                <PS:Twitter id="Twitter1" runat="server"></PS:Twitter>
                <WebPartPages:WebPartZone runat="server" Title="Right Middle" ID="WebPartZone5" Orientation="Vertical"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
            </div>
        </div>
    </div>
    
	<div class="primary">
    <PS:DidYouKnow id="DidYouKnow1" runat="server"/>
	</div>
	<!-- END Main Content Area -->

	
	<PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
		<span class="requiredfield"><SharePoint:FileField ID="FileField1" FieldName="FileLeafRef" runat="server" /></span>
        <span class="requiredfield"><SharePoint:TextField ID="TextField2" runat="server" FieldName="Title"></SharePoint:TextField></span>
		<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
		<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
		<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl2" FieldName="PSKeywords" runat="server" />
		<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl3" FieldName="PSBusinessGroups" runat="server" />
		<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl4" FieldName="PSOrganisation" runat="server" />
		<SharePoint:DateTimeField ID="DateTimeField1" FieldName="PSPublishedDate" runat="server" />            
	</PublishingWebControls:EditModePanel>
		
	<SharePointWebControls:ScriptBlock ID="ScriptBlock1" runat="server">if(typeof(MSOLayout_MakeInvisibleIfEmpty) == "function") {MSOLayout_MakeInvisibleIfEmpty();}</SharePointWebControls:ScriptBlock>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageTitleInTitleArea" runat="server"  Visible="false" />
<asp:Content ContentPlaceHolderId="PlaceHolderTitleBreadcrumb" runat="server" Visible="false" /> 
<asp:Content ContentPlaceHolderId="PlaceHolderPageDescription" runat="server" Visible="false" />

