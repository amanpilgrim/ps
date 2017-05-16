using Microsoft.SharePoint;

namespace PS.Intranet.UI.Intranet.WebEventReceiver
{
    public class WebEventReceiver: SPWebEventReceiver
    {
        public override void WebProvisioned(SPWebEventProperties properties)
        {
            var site = properties.Web;
            var rootSite = site.Site.RootWeb;

            site.MasterUrl = rootSite.MasterUrl;
            site.CustomMasterUrl = rootSite.CustomMasterUrl;
            site.Update();
        }
    }
}
