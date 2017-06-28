<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointPortalControls" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@Register TagPrefix="PS" TagName="DocumentFilter" Src="~/_controltemplates/15/Document/DocumentFilter.ascx" %>
<%@Register TagPrefix="PS" TagName="DocumentList" Src="~/_controltemplates/15/Document/DocumentList.ascx" %>
<%@Register TagPrefix="PS" Namespace="PS.Intranet.SiteElements.CustomFieldControls" Assembly="PS.Intranet.SiteElements, Version=1.0.0.0, Culture=neutral, PublicKeyToken=4acf9d96094f0c6f" %>
<%@Register TagPrefix="PS" TagName="DocumentsMostViewed" Src="~/_controltemplates/15/HomePageDocument/DocumentsMostViewed.ascx" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<script src="/Style Library/Intranet/js/jquery.dataTables.min.js"></script>	
	<script src="/Style Library/Intranet/js/jquery.dataTables.columnFilter.js"></script>	
    <script src="/Style Library/Intranet/js/dataTables.dataSourcePlugins.js"></script>

	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration ID="PSFilter" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/CSS/filter.css?Rev=2016.03.01 %>" after="main.css" runat="server"/>
    <SharePointWebControls:CssRegistration ID="PSNews" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/CSS/news.css%>" after="main.css" runat="server"/>
	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration2" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/CSS/psedit.css%>" after="editmode15.css" runat="server"/>
	</PublishingWebControls:EditModePanel>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageHeaderTitle" runat="server">
    <PublishingWebControls:EditModePanel ID="EditModePanel7" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
        <h1><SharePoint:TextField ID="TextField3" runat="server" FieldName="Title"></SharePoint:TextField></h1>
    </PublishingWebControls:EditModePanel>
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
	<!-- START Main Content Area -->
	<div id="top" class="primary">
	    <div class="primary narrow">
	        <article>
			    <header>
							
			    </header>
			    <PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
                    <span class="requiredfield"><SharePoint:TextField ID="TextField2" runat="server" FieldName="Title"></SharePoint:TextField></span>
			        <table>				    
					    <tr>
						    <td style="vertical-align:top;">
							    <span class="requiredfield"><SharePointWebControls:TextField ID="PSSummaryDescription" FieldName="PSSummaryDescription" runat="server"></SharePointWebControls:TextField></span>
							    <span class="ms-metadata">Enter a max 100 character summary for display on the Resource Centre page.</span>
							    <PublishingWebControls:RichHtmlField ID="PSContent" FieldName="PSContent" HasInitialFocus="True" runat="server"/>
							    <span class="requiredfield"><SharePoint:FileField ID="FileField1" FieldName="FileLeafRef" runat="server" /></span>
							    <span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
							    <span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
							    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl2" FieldName="PSKeywords" runat="server" />
							    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl3" FieldName="PSBusinessGroups" runat="server" />
							    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl4" FieldName="PSOrganisation" runat="server" />
							    <SharePoint:DateTimeField ID="DateTimeField1" FieldName="PSPublishedDate" runat="server" />
						    </td>
						    <td class="DocCenterRightPanel">
							    <WebPartPages:WebPartZone id="WebPartZone1" runat="server" title="RightPanel">
								    <ZoneTemplate>
								    </ZoneTemplate>
							    </WebPartPages:WebPartZone>
						    </td>
					    </tr>
			        </table>
			    </PublishingWebControls:EditModePanel>
                
	            <PublishingWebControls:EditModePanel ID="EditModePanel4" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
	                <PublishingWebControls:RichHtmlField ID="RichHtmlField2" FieldName="PSContent" HasInitialFocus="True" runat="server"/>								        
	            </PublishingWebControls:EditModePanel>
			
		    </article>
            
	          <PublishingWebControls:EditModePanel ID="EditModePanel3" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
	                <PS:DocumentFilter runat="server" ID="DocumentFilter" />
	          </PublishingWebControls:EditModePanel>
            
	        <PublishingWebControls:EditModePanel ID="EditModePanel5" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
	            <PS:DocumentList runat="server" ID="DocumentList" />					        
	        </PublishingWebControls:EditModePanel>
	    </div>
        
        <aside class="sidebar">
            <PublishingWebControls:EditModePanel ID="EditModePanel6" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
                <WebPartPages:WebPartZone id="WebPartZone2" runat="server" title="RightPanel">
                    <ZoneTemplate>
                    </ZoneTemplate>
                </WebPartPages:WebPartZone>
                
                <PS:DocumentsMostViewed ID="DocumentsMostViewed" runat="server" NumberOfDocuments="10" IsHomePage="false"  />
	        </PublishingWebControls:EditModePanel>
        </aside>
		
	</div>
	<!-- END Main Content Area -->
</asp:Content>
