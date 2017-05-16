using System;
using Microsoft.SharePoint;
using Microsoft.SharePoint.Utilities;
using Microsoft.SharePoint.Publishing;

namespace PS.Intranet.UI.Intranet
{
    public class SiteFeatureReceiver : SPFeatureReceiver
    {
        public override void FeatureActivated(SPFeatureReceiverProperties properties)
        {
            var siteCollection = (SPSite)properties.Feature.Parent;
            var masterUrlProperty = properties.Feature.Properties["MasterPage"];
            var masterUrl = masterUrlProperty.Value;

            UnCustomizedPageLayout(properties);

            if (String.IsNullOrEmpty(masterUrl) == false)
            {
                masterUrl = SPUrlUtility.CombineUrl(siteCollection.ServerRelativeUrl, "_catalogs/masterpage/" + masterUrl);

                foreach (SPWeb site in siteCollection.AllWebs)
                {
                    try
                    {
                        if (!site.Url.ToLower().Contains("search"))
                        {
                            //set the setting pages as seattle.master
                            site.MasterUrl = SPUrlUtility.CombineUrl(siteCollection.ServerRelativeUrl, "_catalogs/masterpage/seattle.master");

                            site.CustomMasterUrl = masterUrl;
                            site.Update();
                        }
                    }
                    finally
                    {
                        if (site!=null)
                        {
                            site.Dispose();
                        }
                    }
                }
            }
        }

        public void UnCustomizedPageLayout(SPFeatureReceiverProperties properties)
        {
            var site = (SPSite)properties.Feature.Parent;

            using (var web = site.OpenWeb())
            {
                var pubSite = new PublishingSite(site);
                var pageLayouts = pubSite.PageLayouts;

                foreach (var layout in pageLayouts)
                {
                        var currFile = web.GetFile(layout.ServerRelativeUrl);
                        currFile.RevertContentStream();
                }
            }
        }

        public override void FeatureDeactivating(SPFeatureReceiverProperties properties)
        {
            var siteCollection = (SPSite)properties.Feature.Parent;
            var masterUrl = SPUrlUtility.CombineUrl(siteCollection.ServerRelativeUrl, "_catalogs/masterpage/seattle.master");

            UnCustomizedPageLayout(properties);

            foreach (SPWeb site in siteCollection.AllWebs)
            {
                try
                {
                    site.MasterUrl = masterUrl;
                    site.CustomMasterUrl = masterUrl;
                    site.Update();
                }
                finally
                {
                    if (site!=null)
                    {
                        site.Dispose();
                    }
                }
            }
        }
    }
}
