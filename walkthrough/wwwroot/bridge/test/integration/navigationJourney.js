Bridge.assembly("WalkthroughClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("WalkthroughClientScripts.Tests.NavigationJourney", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void}]}; }
    });
});

sap.ui.require(System.Array.init(["sap/ui/test/opaQunit", "sap/ui/demo/walkthrough/test/integration/pages/app"], System.String), function () {
    QUnit.module("Navigation");

    opaTest("Should open the hello dialog", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyAppInAFrame((sap.ui.require.toUrl("sap/ui/demo/walkthrough/test/mockserver") || "") + ".html");

        // Actions
        When['WalkthroughClientScripts.Tests.OnTheAppPage'].iPressTheSayHelloWithDialogButton();

        // Assertions
        Then['WalkthroughClientScripts.Tests.OnTheAppPage'].iShouldSeeTheHelloDialog();

        // Cleanup
        Then['WalkthroughClientScripts.Tests.OnTheAppPage'].iTeardownMyAppFrame();
    });
});
