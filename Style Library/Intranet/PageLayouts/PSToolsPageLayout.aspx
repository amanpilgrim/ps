﻿<%@ Page Language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" Namespace="Microsoft.SharePoint.WebControls" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="PS" Namespace="PS.Intranet.SiteElements.CustomFieldControls" Assembly="PS.Intranet.SiteElements, Version=1.0.0.0, Culture=neutral, PublicKeyToken=4acf9d96094f0c6f" %>
<%@Register TagPrefix="PS" TagName="NewsListing" Src="~/_controltemplates/15/News/NewsListing.ascx" %>
<%@Register TagPrefix="PS" TagName="ShowRelatedInformation" Src="~/_controltemplates/15/RelatedInformation/ShowRelatedInformation.ascx" %>
<%@ Register TagPrefix="PS" TagName="PageAlert" Src="~/_controltemplates/15/Alert/Alert.ascx" %>
<%@ Register TagPrefix="PS" TagName="PageEmailLink" Src="~/_controltemplates/15/EmailLink/EmailLink.ascx" %>
<%@ Register TagPrefix="PS" TagName="PrintCurrentPage" Src="~/_controltemplates/15/PrintPage/PrintPage.ascx" %>
<%@ Register TagPrefix="PS" TagName="ApplicationLinkListing" Src="~/_controltemplates/15/ApplicationLinkListing/ApplicationLinkListing.ascx" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="PS" Namespace="PS.Intranet.UI.CONTROLTEMPLATES.News" Assembly="PS.Intranet.UI, Version=1.0.0.0, Culture=neutral, PublicKeyToken=9c7198c36522c7fd" %>

<asp:Content contentplaceholderid="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration3" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/psedit.css%>" after="editmode15.css" runat="server"/>
	</PublishingWebControls:EditModePanel>
</asp:Content>

<asp:Content contentplaceholderid="PlaceHolderMain" runat="server">
	<!-- START Main Content Area -->
	<div id="top" class="primary">
	<div class="primary narrow">
		<article>
			<header>
			<h1><span class="requiredfield">
		<SharePoint:TextField ID="TextField2" runat="server" FieldName="Title"></SharePoint:TextField></span></h1>
            <PublishingWebControls:EditModePanel ID="EditModePanel8" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
			    <ul class="functions">
		            <PS:PrintCurrentPage id="printPage" runat="server"/>
				    <PS:PageEmailLink id="pageEmailLink" runat="server"/>	                
	                <PS:PageAlert id="pageAlert" runat="server"/>
			    </ul>	
            </PublishingWebControls:EditModePanel>								
		</header>
            
            

            <div class="clear">
				<PublishingWebControls:RichHtmlField ID="PSContent" FieldName="PSContent" HasInitialFocus="True" runat="server"/>
			</div>

            <PublishingWebControls:EditModePanel ID="EditModePanel3" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
			    <span class="requiredfield"><SharePoint:FileField ID="FileField1" FieldName="FileLeafRef" runat="server" /></span>
                <span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
				<span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl2" FieldName="PSKeywords" runat="server" />
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl3" FieldName="PSBusinessGroups" runat="server" />
				<Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl4" FieldName="PSOrganisation" runat="server" />
				<SharePoint:DateTimeField ID="DateTimeField1" FieldName="PSPublishedDate" runat="server" />	
                

			</PublishingWebControls:EditModePanel>

            <PS:ApplicationLinkListing ID="ApplicationLinkListing" runat="server"/>	
		</article>
    </div>
    <PS:ShowRelatedInformation ID="ShowRelatedInformation" runat="server"/>							
            																		
	<script language="javascript">if (typeof (MSOLayout_MakeInvisibleIfEmpty) == "function") { MSOLayout_MakeInvisibleIfEmpty(); }</script>
    </div>
	<!-- END Main Content Area -->	
</asp:Content>
