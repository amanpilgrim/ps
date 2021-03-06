﻿<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:webpartpageexpansion="full" meta:progid="SharePoint.WebPartPage.Document" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="SharePointPortalControls" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="PS" TagName="EmergencyContactSummary" Src="~/_controltemplates/15/HomepageContact/HomepageEmergencyContact.ascx" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	
	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration ID="PSScroller" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/jquery-ui.css%>" after="main.css" runat="server"/>
    <SharePointWebControls:CssRegistration ID="PSFilter" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/filter.css%>" after="main.css" runat="server"/>

	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration3" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/psedit.css%>" after="editmode15.css" runat="server"/>
	</PublishingWebControls:EditModePanel>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageHeaderTitle" runat="server">
    <PublishingWebControls:EditModePanel ID="EditModePanel6" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
        <h1><SharePoint:TextField ID="TextField3" runat="server" FieldName="Title"></SharePoint:TextField></h1>
    </PublishingWebControls:EditModePanel>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<!-- START Secondary Area -->
    <PublishingWebControls:EditModePanel ID="EditModePanel4" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
	    <aside>
	    </aside>	
    </PublishingWebControls:EditModePanel>
	<!-- END Secondary Area -->	
	
	<!-- START Main Content Area -->
	<div id="top" class="primary">
         <div class="primary narrow">
		<header>
            <PublishingWebControls:EditModePanel ID="EditModePanel5" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
                 <span class="requiredfield"><SharePoint:TextField ID="TextField2" runat="server" FieldName="Title"></SharePoint:TextField></span>

            </PublishingWebControls:EditModePanel>
			 <PublishingWebControls:EditModePanel ID="EditModePanel8" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
			    <ul class="functions">                
			    </ul>	
            </PublishingWebControls:EditModePanel>								
		</header>
		<article>			
			<div>	
                <PS:EmergencyContactSummary runat="server" id="EmergencyContact" />
            </div>
            
			<PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
               
			    <PublishingWebControls:RichHtmlField ID="PSContent" FieldName="PSContent" HasInitialFocus="True" runat="server"/>
			    <span class="requiredfield"><SharePointWebControls:TextField ID="PSSummaryDescription" FieldName="PSSummaryDescription" runat="server"></SharePointWebControls:TextField></span>
                <span class="ms-metadata">Enter a max 100 character summary for display on the Resource Centre page.</span>
			    <span class="requiredfield"><SharePoint:FileField ID="FileField1" FieldName="FileLeafRef" runat="server" /></span>
				<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
				<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl2" FieldName="PSKeywords" runat="server" />
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl3" FieldName="PSBusinessGroups" runat="server" />
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl4" FieldName="PSOrganisation" runat="server" />
				<SharePoint:DateTimeField ID="DateTimeField1" FieldName="PSPublishedDate" runat="server" />
                <SharePoint:DateTimeField ID="DateTimeField2" FieldName="PSNextReviewDate" runat="server" />
			</PublishingWebControls:EditModePanel>
            
			
			<PublishingWebControls:EditModePanel ID="EditModePanel3" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
	        </PublishingWebControls:EditModePanel>			
		</article>
	</div>	
		</div>
	<!-- END Main Content Area -->					

	<script language="javascript">if (typeof (MSOLayout_MakeInvisibleIfEmpty) == "function") { MSOLayout_MakeInvisibleIfEmpty(); }</script>
    
</asp:Content>
