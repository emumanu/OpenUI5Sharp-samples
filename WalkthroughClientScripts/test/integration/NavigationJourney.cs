using Bridge;
using System;
using System.Linq;
using static Retyped.qunit;
using UI5;
using UI5.Tests;

namespace WalkthroughClientScripts.Tests
{
    [FileName("test/integration/navigationJourney.js")]
    public class NavigationJourney
    {
        [Init(InitPosition.Bottom)]
        public static void Script()
        {
            sap.ui.require(new string[] {
                    "sap/ui/test/opaQunit",
                    "sap/ui/demo/walkthrough/test/integration/pages/app"
                },
                new Action(() => {
                    QUnit.module("Navigation");

                    TestsGlobals.opaTest("Should open the hello dialog", 
                        (sap.ui.test.Opa5 Given, Map<sap.ui.test.Opa5> When, Map<sap.ui.test.Opa5> Then) => {
                            // Arrangements
                            Given.iStartMyAppInAFrame(sap.ui.require_toUrl("sap/ui/demo/walkthrough/test/mockserver") + ".html");
                            
                            // Actions
                            When.Get<OnTheAppPage>().iPressTheSayHelloWithDialogButton();

                            // Assertions
                            Then.Get<OnTheAppPage>().iShouldSeeTheHelloDialog();

                            // Cleanup
                            Then.Get<OnTheAppPage>().iTeardownMyAppFrame();
                        }
                    );
                })
            );
        }
    }
}
