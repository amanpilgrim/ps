<%@ Page language="C#" Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingNavigation" Namespace="Microsoft.SharePoint.Publishing.Navigation" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="SharePointPortalControls" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="PS" TagName="ArticleSearch" Src="~/_controltemplates/15/Articles/ArticleSearch.ascx" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	
	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration ID="PSScroller" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/CSS/jquery-ui.css%>" after="main.css" runat="server"/>
    <SharePointWebControls:CssRegistration ID="PSFilter" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/CSS/filter.css%>" after="main.css" runat="server"/>
    
    <SharePoint:CssRegistration ID="CssRegistration2" name="<% $SPUrl:~sitecollection/Style Library/Intranet/CSS/textext.core.css %>" runat="server"/>
    <SharePoint:CssRegistration ID="CssRegistration4" name="<% $SPUrl:~sitecollection/Style Library/Intranet/CSS/textext.plugin.arrow.css %>" runat="server"/>
    <SharePoint:CssRegistration ID="CssRegistration5" name="<% $SPUrl:~sitecollection/Style Library/Intranet/CSS/textext.plugin.autocomplete.css %>" runat="server"/>
    <SharePoint:CssRegistration ID="CssRegistration6" name="<% $SPUrl:~sitecollection/Style Library/Intranet/CSS/textext.plugin.clear.css %>" runat="server"/>
    <SharePoint:CssRegistration ID="CssRegistration7" name="<% $SPUrl:~sitecollection/Style Library/Intranet/CSS/textext.plugin.focus.css %>" runat="server"/>
    <SharePoint:CssRegistration ID="CssRegistration8" name="<% $SPUrl:~sitecollection/Style Library/Intranet/CSS/textext.plugin.prompt.css %>" runat="server"/>
    <SharePoint:CssRegistration ID="CssRegistration9" name="<% $SPUrl:~sitecollection/Style Library/Intranet/CSS/textext.plugin.tags.css %>" runat="server"/>
        
    <SharePoint:Scriptlink ID="Scriptlink11" runat="server" Name="~sitecollection/Style Library/Intranet/js/jquery-1.8.2.min.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink1" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.core.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink2" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.ajax.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink3" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.arrow.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink4" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.autocomplete.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink5" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.clear.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink6" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.filter.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink7" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.focus.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink8" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.prompt.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink9" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.suggestions.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink10" runat="server" Name="~sitecollection/Style Library/Intranet/js/textext.plugin.tags.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink12" runat="server" Name="~sitecollection/Style Library/Intranet/js/jquery.dataTables.min.js" Language="javascript" />
    <SharePoint:Scriptlink ID="Scriptlink13" runat="server" Name="~sitecollection/Style Library/Intranet/js/dataTables.dataSourcePlugins.js" Language="javascript" />
	
	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration3" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
        <SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/CSS/psedit.css%>" after="editmode15.css" runat="server"/>
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
		<header>
			<h1><span class="requiredfield">
		<SharePoint:TextField ID="TextField2" runat="server" FieldName="Title"></SharePoint:TextField></span></h1>
            <PublishingWebControls:EditModePanel ID="EditModePanel8" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
			    <ul class="functions">                
			    </ul>	
            </PublishingWebControls:EditModePanel>								
		</header>
		<article>			
			<div>	
                <PS:ArticleSearch runat="server" id="ArticleSearch" />
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
		
	<!-- END Main Content Area -->					

	<script language="javascript">if (typeof (MSOLayout_MakeInvisibleIfEmpty) == "function") { MSOLayout_MakeInvisibleIfEmpty(); }</script>
    
</asp:Content>
