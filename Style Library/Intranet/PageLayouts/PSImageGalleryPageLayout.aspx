<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="SharePointPortalControls" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@Register TagPrefix="PS" Namespace="PS.Intranet.SiteElements.CustomFieldControls" Assembly="PS.Intranet.SiteElements, Version=1.0.0.0, Culture=neutral, PublicKeyToken=4acf9d96094f0c6f" %>
<%@Register TagPrefix="PS" TagName="PageEmailLink" Src="~/_controltemplates/15/EmailLink/EmailLink.ascx" %>
<%@Register TagPrefix="PS" TagName="PrintCurrentPage" Src="~/_controltemplates/15/PrintPage/PrintPage.ascx" %>
<%@Register TagPrefix="PS" TagName="PageFooter" Src="~/_controltemplates/15/PageFooter/PageFooter.ascx" %>
<%@Register TagPrefix="PS" TagName="ShowRelatedInformation" Src="~/_controltemplates/15/RelatedInformation/ShowRelatedInformation.ascx" %>
<%@Register TagPrefix="PS" TagName="RelatedInformationContacts" Src="~/_controltemplates/15/RelatedInformation/Contacts/RelatedInformationContacts.ascx" %>
<%@Register TagPrefix="PS" TagName="RelatedInformationLinks" Src="~/_controltemplates/15/RelatedInformation/Links/RelatedInformationLinks.ascx" %>
<%@Register TagPrefix="PS" TagName="ImageGallery" Src="~/_controltemplates/15/ImageGallery/ImageGallery.ascx" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<script src="/Style Library/Intranet/js/jquery.colorbox.js"></script>	
	
	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration ID="PSGallery" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/gallery.css%>" after="main.css" runat="server"/>
	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration3" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/psedit.css%>" after="editmode15.css" runat="server"/>
	</PublishingWebControls:EditModePanel>
    <script type="text/javascript">
        $(document).ready(function () {
            if ($('#galleryStartDate').text().trim() == "" || $('#galleryEndDate').text().trim() == "")
                $('#galleryDateDivider').hide();
        });
	</script>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<!-- START Main Content Area -->
	<div id="top" class="primary">
		<header>
			<h1><span class="requiredfield"><SharePoint:TextField ID="TextField2" runat="server" FieldName="Title"></SharePoint:TextField></span></h1>
			<ul class="functions">
			    <PS:PrintCurrentPage id="printPage" runat="server"/>
				<PS:PageEmailLink id="pageEmailLink" runat="server"/>
                <!--
                <li><SharePointPortalControls:AverageRatingFieldControl ID="AverageRatingFieldControl1" FieldName="AverageRating" runat="server" /></li>
                -->
            </ul>									
		</header>
		<article>
		    <div class="clear">
				<strong>Photos:</strong> 
				<span id="galleryStartDate"><SharePoint:DateTimeField ID="DateTimeField5" FieldName="PSGalleryStartDate" runat="server" /></span> <span id="galleryDateDivider">-</span> 
				<span id="galleryEndDate"><SharePoint:DateTimeField ID="DateTimeField6" FieldName="PSGalleryEndDate" runat="server" /></span>
			</div>
			
			<div class="clear">
				<PublishingWebControls:RichHtmlField ID="PSContent" FieldName="PSContent" HasInitialFocus="True" runat="server"/>
			</div>
			
            <PublishingWebControls:EditModePanel ID="EditModePanel8" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
			    <PS:ImageGallery id="ImageGallery" runat="server"/> 
			</PublishingWebControls:EditModePanel>

            <PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
			    <span class="requiredfield"><SharePoint:FileField ID="FileField1" FieldName="FileLeafRef" runat="server" /></span>
				<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
				<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl2" FieldName="PSKeywords" runat="server" />
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl3" FieldName="PSBusinessGroups" runat="server" />
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl4" FieldName="PSOrganisation" runat="server" />
				<SharePoint:DateTimeField ID="DateTimeField1" FieldName="PSPublishedDate" runat="server" />

                <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl7"  FieldName="PSEventType" runat="server" />
                <span class="requiredfield"><PS:EnhancedUrlSelectorControl ID="EnhancedUrlSelectorControl1" FieldName="PSGalleryLocation" runat="server" /></span>
                <span class="ms-metadata">Select a folder of the image gallery location.</span>                
			</PublishingWebControls:EditModePanel>
            			
			<PS:ShowRelatedInformation ID="ShowRelatedInformation" runat="server"/>				

            <PS:PageFooter id="pageLastUpdated" runat="server"/>	
		</article>					
		<script language="javascript">if (typeof (MSOLayout_MakeInvisibleIfEmpty) == "function") { MSOLayout_MakeInvisibleIfEmpty(); }</script>
	</div>
	<!-- END Main Content Area -->
</asp:Content>
