Bridge.assembly("WalkthroughClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("WalkthroughClientScripts.Tests.OnTheAppPage", {
        inherits: [UI5.Tests.BaseIntegrationPage],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[sap.ui.test.Opa5],"pi":[{"n":"Opa5","pt":sap.ui.test.Opa5,"ps":0}],"sn":"ctor"},{"a":2,"n":"RequireScript","is":true,"t":8,"sn":"RequireScript","rt":System.Void},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheSayHelloWithDialogButton","t":8,"sn":"iPressTheSayHelloWithDialogButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaAssertionAttribute()],"v":true,"a":2,"n":"iShouldSeeTheHelloDialog","t":8,"sn":"iShouldSeeTheHelloDialog","rt":Bridge.virtualc("Promise")}]}; },
        ctors: {
            ctor: function (Opa5) {
                this.$initialize();
                UI5.Tests.BaseIntegrationPage.ctor.call(this, Opa5);
            }
        },
        methods: {
            iPressTheSayHelloWithDialogButton: function () {
                return this.waitFor({ id: "helloDialogButton", viewName: "sap.ui.demo.walkthrough.view.HelloPanel", actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the 'Say Hello With Dialog' button on the HelloPanel view" });
            },
            iShouldSeeTheHelloDialog: function () {
                return this.waitFor({ controlType: "sap.m.Dialog", success: function (obj) {
                    UI5.Tests.BaseIntegrationPage.Opa5.assert.ok(true, "The dialog is open");
                }, errorMessage: "Did not find the dialog control" });
            }
        }
    });
});

sap.ui.require(System.Array.init(["sap/ui/test/Opa5", "sap/ui/test/actions/Press"], System.String), (function (Opa5) {
    var map = { };

    var testPage = new WalkthroughClientScripts.Tests.OnTheAppPage(Opa5);
    map['WalkthroughClientScripts.Tests.OnTheAppPage'] = testPage.GetPageObject();

    sap.ui.test.Opa5.createPageObjects(map);
}));
