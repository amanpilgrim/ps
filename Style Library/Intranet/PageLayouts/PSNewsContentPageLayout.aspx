<%@ Page language="C#"   Inherits="Microsoft.SharePoint.Publishing.PublishingLayoutPage,Microsoft.SharePoint.Publishing,Version=15.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePointWebControls" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="PublishingWebControls" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register TagPrefix="SharePoint" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" namespace="Microsoft.SharePoint.WebControls"%>
<%@ Register Tagprefix="SharePointPortalControls" Namespace="Microsoft.SharePoint.Portal.WebControls" Assembly="Microsoft.SharePoint.Portal, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Taxonomy" Namespace="Microsoft.SharePoint.Taxonomy" Assembly="Microsoft.SharePoint.Taxonomy, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="OfficeWebControls" Namespace="Microsoft.Office.Server.WebControls.FieldTypes" Assembly="Microsoft.Office.Server.UserProfiles, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@Register TagPrefix="PS" Namespace="PS.Intranet.SiteElements.CustomFieldControls" Assembly="PS.Intranet.SiteElements, Version=1.0.0.0, Culture=neutral, PublicKeyToken=4acf9d96094f0c6f" %>
<%@Register TagPrefix="PS" TagName="PageAlert" Src="~/_controltemplates/15/Alert/Alert.ascx" %>
<%@Register TagPrefix="PS" TagName="PageEmailLink" Src="~/_controltemplates/15/EmailLink/EmailLink.ascx" %>
<%@Register TagPrefix="PS" TagName="PrintCurrentPage" Src="~/_controltemplates/15/PrintPage/PrintPage.ascx" %>
<%@Register TagPrefix="PS" TagName="PageFooter" Src="~/_controltemplates/15/PageFooter/PageFooter.ascx" %>
<%@Register TagPrefix="PS" TagName="ShowRelatedInformation" Src="~/_controltemplates/15/RelatedInformation/ShowRelatedInformation.ascx" %>
<%@Register TagPrefix="PS" TagName="NewsImageCarousel" Src="~/_controltemplates/15/News/NewsImageCarousel.ascx" %>
<%@Register TagPrefix="PS" TagName="RecentNewsStories" Src="~/_controltemplates/15/News/RecentNewsStories.ascx" %>
<%@Register TagPrefix="PS" TagName="Video" Src="~/_controltemplates/15/News/Video.ascx" %>
<%@Register TagPrefix="PS" TagName="Twitter" Src="~/_controltemplates/15/Twitter/Twitter.ascx" %>

<asp:Content ContentPlaceholderID="PlaceHolderAdditionalPageHead" runat="server">
	<SharePointWebControls:CssRegistration ID="CssRegistration1" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
	<SharePointWebControls:CssRegistration ID="PSNews" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/news.css%>" after="main.css" runat="server"/>
	<PublishingWebControls:EditModePanel ID="EditModePanel1" runat="server">
		<!-- Styles for edit mode only-->
		<SharePointWebControls:CssRegistration ID="CssRegistration3" name="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/editmode15.css %>"
			After="<% $SPUrl:~sitecollection/Style Library/~language/Themable/Core Styles/pagelayouts15.css %>" runat="server"/>
		<SharePointWebControls:CssRegistration ID="PSEditMode" name="<%$SPUrl:~SiteCollection/Style Library/Intranet/css/psedit.css%>" after="main.css" runat="server"/>
    </PublishingWebControls:EditModePanel>

   <script type="text/javascript">
       function validate() {
           // check that page is in edit mode                   
           if (SP.Ribbon.PageState.Handlers.isInEditMode()) {
               if (jQuery('input[id*="_PSVideoSelectorControl_"]').val() != "" && jQuery('input[id*="_PSGalleryLocationSelectorControl_"]').val() != "") {
                   alert('You can only select either a video or a folder of the page image carousel!');
                   // prevent page postback                               
                   return false;
               }
           }

           return true;
       }
	</script>	


</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderPageHeaderTitle" runat="server"></asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">

    <div id="top" class="primary">
        <PublishingWebControls:EditModePanel ID="EditModePanel2" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
	        <!--News Content Carousel begins-->
            <PS:Video id="Video1" runat="server"/> 
	        <PS:NewsImageCarousel id="NewsImageCarousel" runat="server"/>
	        <!--End News Content Carousel-->
		</PublishingWebControls:EditModePanel>

	
	    <div class="primary narrow">
            <!-- START Top Content Area -->
		    <header>
			    <h1><span class="requiredfield">
			    <SharePoint:TextField ID="TextField1" runat="server" FieldName="Title"></SharePoint:TextField></span></h1>
	
			    <PublishingWebControls:EditModePanel ID="EditModePanel8" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
				    <ul class="functions">
			            <PS:PrintCurrentPage id="printPage" runat="server"/>
					    <PS:PageEmailLink id="pageEmailLink" runat="server"/>
	                    <PS:PageAlert id="pageAlert" runat="server"/>
	          	    </ul>	
	            </PublishingWebControls:EditModePanel>								
		    </header>
		    <!-- END Top Content Area -->
		
		    <!-- START Main Content Area -->
		    <article>
			    <span class="requiredfield">
			    <PublishingWebControls:RichHtmlField ID="PSContent" FieldName="PSContent" HasInitialFocus="True" runat="server"/></span>
	
	            <PublishingWebControls:EditModePanel ID="EditModePanel3" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Edit">
                    <PS:Video id="Video2" runat="server"/> 
	                <PublishingWebControls:RichImageField ID="PSPageImage" FieldName="PSPageImage" runat="server" />
	                <span class="ms-metadata">Insert image for display as thumbnail on news and events landing page and news listing page. This image will not display in the image carousel.</span>
	                <span class="requiredfield"><SharePointWebControls:TextField ID="PSSummaryDescription" FieldName="PSSummaryDescription" runat="server"></SharePointWebControls:TextField></span>
	                <span class="ms-metadata">Enter a max 100 character summary for display on news and events landing page and news listing page.</span>
	                <span class="requiredfield">
	                    <SharePointWebControls:NoteField ID="NoteField1"
	                                                        FieldName="PSNewsCarouselDescription"
	                                                        InputFieldLabel="Carousel summary"
	                                                        runat="server">
	                        <Template>
	                            <asp:TextBox id="TextField" TextMode="MultiLine" runat="server"/><br />
	                            <span id="CarouselCharacterCountdown"></span>  
	                        </Template>   
	                    </SharePointWebControls:NoteField> 
	                </span>
	                <SharePointWebControls:FieldDescription ID="FieldDescription2" FieldName="PSNewsCarouselDescription" runat="server"/>		
	
				    <span class="requiredfield"><SharePoint:FileField ID="FileField1" FieldName="FileLeafRef" runat="server" /></span>
				    <span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl1" FieldName="PSContentOwner" runat="server" /></span>
				    <span class="requiredfield"><Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControlAudience" FieldName="PSTargetAudiences" runat="server" /></span>
				    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl2" FieldName="PSKeywords" runat="server" />
				    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl3" FieldName="PSBusinessGroups" runat="server" />
				    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl4" FieldName="PSOrganisation" runat="server" />
				    <SharePoint:DateTimeField ID="DateTimeField1" FieldName="PSPublishedDate" runat="server" />
	                
	                
	                <SharePoint:DateTimeField ID="DateTimeField2" FieldName="PSNewsDate" runat="server" />
				    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl5" FieldName="PSNewsTopic" runat="server" />
				    <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl6"  FieldName="PSBusinessFunctions" runat="server" />
	                <Taxonomy:TaxonomyFieldControl ID="TaxonomyFieldControl7"  FieldName="PSEventType" runat="server" />
	                <PS:EnhancedUrlSelectorControl ID="PSVideoSelectorControl" FieldName="PSVideo" runat="server" />
	                <PS:EnhancedUrlSelectorControl ID="PSGalleryLocationSelectorControl" FieldName="PSGalleryLocation" runat="server" />		
	                <span class="ms-metadata">Select a folder of the page image carousel.</span>
			    </PublishingWebControls:EditModePanel>
		    </article>

            <PS:PageFooter id="pageLastUpdated" runat="server"/>
	    </div>
        <!--
        <aside class="sidebar">
            <div class="related">
                <h2>Related Stories</h2>
                <ul>
                    <li>
                        <a href="#">
                            <img src="/url" alt="" />
                            <div class="inner">
                                <h3>Title</h3>
                                <div class="meta">
                                    <span class="category">NewsTopic</span>
                                    <span class="date">31 May 2017</span>
                                </div>
			                    <p>Description</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <PS:ShowRelatedInformation ID="ShowRelatedInformation" runat="server" />
            </div>
        </aside>
        -->
        <!-- START Lastest News Links-->
	    <PublishingWebControls:EditModePanel ID="EditModePanel10" runat="server" CssClass="edit-mode-panel" PageDisplayMode="Display">
            <div id="recent" class="grid">
                <div class="row">
                    <div class="block widget recent">
	                    <PS:RecentNewsStories id="RecentNewsStories" runat="server"/>
                    </div>
                    <div id="twitter" class="block">
                        <PS:Twitter id="Twitter1" runat="server"></PS:Twitter>
                    </div>
                </div>
            </div>
	    </PublishingWebControls:EditModePanel>  
	    <!-- END Lastest News Links -->

    </div>
	<!-- END Main Content Area -->
    
</asp:Content>
