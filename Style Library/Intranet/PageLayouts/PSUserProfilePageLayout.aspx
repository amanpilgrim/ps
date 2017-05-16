<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointPortalControls" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>


<%@ Register TagPrefix="PS" TagName="UserDetails" Src="~/_controltemplates/15/UserProfile/UserDetails.ascx" %>
<%@ Register TagPrefix="PS" TagName="UserPhoto" Src="~/_controltemplates/15/UserProfile/UserPhoto.ascx" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
    	<script src="/Style Library/Intranet/js/jquery.dataTables.min.js"></script>	
    <script src="/Style Library/Intranet/js/dataTables.dataSourcePlugins.js"></script>
    <link rel="stylesheet" type="text/css" href="/Style Library/Intranet/css/userprofile.css" ms-design-css-conversion="no" />
	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration2" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/psedit.css%>" after="editmode15.css" runat="server"/>
	</PublishingWebControls:EditModePanel>
</asp:Content>

<asp:Content runat="server" contentplaceholderid="PlaceHolderLeftNavBar">
     <WebPartPages:WebPartZone runat="server" Title="Main Central" ID="WebPartZone1"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
    <PS:UserPhoto id="userPhoto" runat="server"/>
</asp:Content>

<asp:Content contentplaceholderid ="PlaceHolderBreadcrumb" runat="server" />

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<!-- START Main Content Area -->
	<div id="top" class="primary">
		<article>
			<header>					
			</header>
			
			<PublishingWebControls:EditModePanel ID="EditModePanel4" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
			    <span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
			    <span><SharePointWebControls:TextField ID="PSSummaryDescription" FieldName="PSSummaryDescription" runat="server"></SharePointWebControls:TextField></span>
				<span><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
				
			</PublishingWebControls:EditModePanel>
            
			<WebPartPages:WebPartZone runat="server" Title="Main Central" ID="MainCentral"><ZoneTemplate></ZoneTemplate></WebPartPages:WebPartZone>
            <PS:UserDetails id="userDetails" runat="server"/>
            <script language="javascript">if (typeof (MSOLayout_MakeInvisibleIfEmpty) == "function") { MSOLayout_MakeInvisibleIfEmpty(); }</script>
		</article>
	</div>
	<!-- END Main Content Area -->
</asp:Content>
