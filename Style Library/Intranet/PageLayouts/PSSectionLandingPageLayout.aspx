<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="SharePointPortalControls" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@Register TagPrefix="PS" TagName="Section" Src="~/_controltemplates/15/Section/Section.ascx" %>
<%@Register TagPrefix="PS" Namespace="PS.Intranet.SiteElements.CustomFieldControls" Assembly="PS.Intranet.SiteElements, Version=1.0.0.0, Culture=neutral, PublicKeyToken=4acf9d96094f0c6f" %>
<%@Register TagPrefix="PS" TagName="ShowRelatedInformation" Src="~/_controltemplates/15/RelatedInformation/ShowRelatedInformation.ascx" %>
<%@Register TagPrefix="PS" TagName="PageImage" Src="~/_controltemplates/15/PageImage/PageImage.ascx" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration ID="PSSection" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/section.css%>" after="main.css" runat="server"/>
    <script type="text/javascript">
        $(document).ready(function () {
            
            if ($('#sublandingPagePullQuote') && $('#sublandingPagePullQuote').text().trim().length === 0) {
                $('#sublandingPagePullQuote').hide();
            }
                
        });
      
    </script>
	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration3" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/psedit.css%>" after="editmode15.css" runat="server"/>
	</PublishingWebControls:EditModePanel>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<!-- START Main Content Area -->
	<div class="primary">
		<article>
            <PublishingWebControls:EditModePanel ID="EditModePanel9" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
                <PS:PageImage ID="PageImage" FieldName="PSPageImage" ImageRenditionName="Section Image" runat="server" />
			</PublishingWebControls:EditModePanel>
            
            <PublishingWebControls:EditModePanel ID="EditModePanel10" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
                <PublishingWebControls:RichImageField ID="RichImageField2" FieldName="PSPageImage" runat="server" />
                <SharePointWebControls:FieldDescription FieldName="PSPageImage" runat="server"/>
            </PublishingWebControls:EditModePanel>

			<PublishingWebControls:EditModePanel ID="EditModePanel8" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
				<header>		    
			        <h1><SharePoint:TextField ID="TextField5" runat="server" FieldName="Title"></SharePoint:TextField></h1>
			        <!--<p class="translation">[TRANSLATION]</p>-->
				</header>
		    </PublishingWebControls:EditModePanel>
		  
            <div class="content">                
                <PublishingWebControls:EditModePanel ID="EditModePanel4" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
			        <span class="requiredfield"><SharePoint:TextField ID="TextField2" runat="server" FieldName="Title"></SharePoint:TextField></span>
			   </PublishingWebControls:EditModePanel>
                <PublishingWebControls:RichHtmlField ID="PSContent" FieldName="PSContent" HasInitialFocus="True" runat="server"/>
            
	            <PublishingWebControls:EditModePanel ID="EditModePanel7" runat="server" PageDisplayMode="Display">    
		            <blockquote id="sublandingPagePullQuote">
		                <SharePointWebControls:TextField ID="TextField3" runat="server" FieldName="PSPullQuote" />
		            </blockquote> 
                </PublishingWebControls:EditModePanel>
		   
                <PublishingWebControls:EditModePanel ID="EditModePanel5" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
	                <SharePointWebControls:TextField ID="TextField1" runat="server" FieldName="PSPullQuote" />
                </PublishingWebControls:EditModePanel>
             
			    <PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
				    <PS:Section id="Section" runat="server"/>
			    </PublishingWebControls:EditModePanel>	
			
			    <PublishingWebControls:EditModePanel ID="EditModePanel3" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
			        <span class="requiredfield"><SharePoint:FileField ID="FileField1" FieldName="FileLeafRef" runat="server" /></span>
				    <span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
				    <span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
				    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl2" FieldName="PSKeywords" runat="server" />
				    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl3" FieldName="PSBusinessGroups" runat="server" />
				    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl4" FieldName="PSOrganisation" runat="server" />
				    <SharePoint:DateTimeField ID="DateTimeField1" FieldName="PSPublishedDate" runat="server" />
			    </PublishingWebControls:EditModePanel>
			</div>
        </article>
            
        <PS:ShowRelatedInformation ID="ShowRelatedInformation" runat="server" />
            
        <script language="javascript">if (typeof (MSOLayout_MakeInvisibleIfEmpty) == "function") { MSOLayout_MakeInvisibleIfEmpty(); }</script>
		
	</div>
	<!-- END Main Content Area -->
</asp:Content>
