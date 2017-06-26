﻿<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c"  %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointPortalControls" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@Register TagPrefix="PS" Namespace="PS.Intranet.SiteElements.CustomFieldControls" Assembly="PS.Intranet.SiteElements, Version=1.0.0.0, Culture=neutral, PublicKeyToken=4acf9d96094f0c6f" %>
<%@Register TagPrefix="PS" TagName="PageFooter" Src="~/_controltemplates/15/PageFooter/PageFooter.ascx" %>
<%@Register TagPrefix="PS" TagName="ShowRelatedInformation" Src="~/_controltemplates/15/RelatedInformation/ShowRelatedInformation.ascx" %>
<%@Register TagPrefix="PS" TagName="RelatedInformationLinks" Src="~/_controltemplates/15/RelatedInformation/Links/RelatedInformationLinks.ascx" %>
<%@Register TagPrefix="PS" TagName="PageImage" Src="~/_controltemplates/15/PageImage/PageImage.ascx" %>
<%@Register TagPrefix="PS" TagName="EventGalleries" Src="~/_controltemplates/15/NewsAndEvents/EventGalleries.ascx" %>
<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
    <script src="/Style Library/Intranet/js/jquery.colorbox.js"></script>

	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration ID="PSGallery" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/gallery.css%>" After="main.css" runat="server"/>
    <PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration2" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/psedit.css%>" after="editmode15.css" runat="server"/>
	</PublishingWebControls:EditModePanel>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<!-- START Main Content Area -->
	<div id="top" class="primary">
		<article>
			<header>
		<h1><span class="requiredfield">
		<SharePoint:TextField ID="TextField2" runat="server" FieldName="Title"></SharePoint:TextField></span></h1>									
			</header>
            
            <PublishingWebControls:EditModePanel ID="EditModePanel8" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
                <PS:PageImage ID="PageImage" FieldName="PSPageImage" ImageRenditionName="Content Image" runat="server" />
            </PublishingWebControls:EditModePanel>
            
            <PublishingWebControls:EditModePanel ID="EditModePanel10" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
                <PublishingWebControls:RichImageField ID="RichImageField2" FieldName="PSPageImage" runat="server" />
            </PublishingWebControls:EditModePanel>

            <div class="clear">
				<PublishingWebControls:RichHtmlField ID="PSContent" FieldName="PSContent" HasInitialFocus="True" runat="server"/>
			</div>

			<PublishingWebControls:EditModePanel ID="EditModePanel9" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
		        <PS:EventGalleries id="EventGalleries" runat="server"/>
            </PublishingWebControls:EditModePanel>
            

			<PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
			    <span class="requiredfield"><SharePoint:FileField ID="FileField1" FieldName="FileLeafRef" runat="server" /></span>
				<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
				<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl2" FieldName="PSKeywords" runat="server" />
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl3" FieldName="PSBusinessGroups" runat="server" />
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl4" FieldName="PSOrganisation" runat="server" />
				<SharePoint:DateTimeField ID="DateTimeField1" FieldName="PSPublishedDate" runat="server" />
			</PublishingWebControls:EditModePanel>
            
            <script language="javascript">if (typeof (MSOLayout_MakeInvisibleIfEmpty) == "function") { MSOLayout_MakeInvisibleIfEmpty(); }</script>
		</article>
	</div>
	<!-- END Main Content Area -->
</asp:Content>
