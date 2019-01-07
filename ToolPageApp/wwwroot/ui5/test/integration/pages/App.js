Bridge.assembly("ClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("ClientScripts.Test.Integration.OnTheAppPage", {
        inherits: [UI5.Tests.BaseIntegrationPage],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[sap.ui.test.Opa5],"pi":[{"n":"Opa5","pt":sap.ui.test.Opa5,"ps":0}],"sn":"ctor"},{"a":2,"n":"RequireScript","is":true,"t":8,"sn":"RequireScript","rt":System.Void},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheErrorButton","t":8,"sn":"iPressTheErrorButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheErrorMessage","t":8,"sn":"iPressTheErrorMessage","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheHomeButton","t":8,"sn":"iPressTheHomeButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheNotificationButton","t":8,"sn":"iPressTheNotificationButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheOrderStatisticsButton","t":8,"sn":"iPressTheOrderStatisticsButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheSettingsButton","t":8,"sn":"iPressTheSettingsButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheStatisticsButton","t":8,"sn":"iPressTheStatisticsButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheUsageStatisticsButton","t":8,"sn":"iPressTheUsageStatisticsButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaActionAttribute()],"v":true,"a":2,"n":"iPressTheUserButton","t":8,"sn":"iPressTheUserButton","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaAssertionAttribute()],"v":true,"a":2,"n":"iShouldSeeMessageToast","t":8,"sn":"iShouldSeeMessageToast","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaAssertionAttribute()],"v":true,"a":2,"n":"iShouldSeeTheErrorMessage","t":8,"sn":"iShouldSeeTheErrorMessage","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaAssertionAttribute()],"v":true,"a":2,"n":"iShouldSeeTheErrorPopover","t":8,"sn":"iShouldSeeTheErrorPopover","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaAssertionAttribute()],"v":true,"a":2,"n":"iShouldSeeTheNotificationPopover","t":8,"sn":"iShouldSeeTheNotificationPopover","rt":Bridge.virtualc("Promise")},{"at":[new UI5.Tests.OpaAssertionAttribute()],"v":true,"a":2,"n":"iShouldSeeTheUserPopover","t":8,"sn":"iShouldSeeTheUserPopover","rt":Bridge.virtualc("Promise")},{"a":2,"n":"sViewName","t":4,"rt":System.String,"sn":"sViewName"}]}; },
        fields: {
            sViewName: null
        },
        ctors: {
            ctor: function (Opa5) {
                this.$initialize();
                UI5.Tests.BaseIntegrationPage.ctor.call(this, Opa5);
            }
        },
        methods: {
            iPressTheErrorButton: function () {
                return this.waitFor({ id: "errorButton", viewName: this.sViewName, actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the error button on App page" });
            },
            iPressTheErrorMessage: function () {
                return this.waitFor({ controlType: "sap.m.MessagePopoverItem", viewName: this.sViewName, matchers: new sap.ui.test.matchers.BindingPath({ modelName: "alerts", path: "/alerts/errors/0" }), actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the error message item" });
            },
            iPressTheNotificationButton: function () {
                return this.waitFor({ id: "notificationButton", viewName: this.sViewName, actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the notification Button on the App page" });
            },
            iPressTheUserButton: function () {
                return this.waitFor({ id: "userButton", viewName: this.sViewName, actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the user Button on the App page" });
            },
            iPressTheSettingsButton: function () {
                return this.waitFor({ controlType: "sap.tnt.NavigationListItem", viewName: this.sViewName, matchers: new sap.ui.test.matchers.BindingPath({ modelName: "side", path: "/navigation/1" }), actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the settings button on the sid navigation" });
            },
            iPressTheStatisticsButton: function () {
                return this.waitFor({ controlType: "sap.tnt.NavigationListItem", viewName: this.sViewName, matchers: new sap.ui.test.matchers.BindingPath({ modelName: "side", path: "/navigation/2" }), actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the statistics button on the sid navigation" });
            },
            iPressTheUsageStatisticsButton: function () {
                return this.waitFor({ controlType: "sap.tnt.NavigationListItem", viewName: this.sViewName, matchers: new sap.ui.test.matchers.BindingPath({ modelName: "side", path: "/navigation/2/items/0" }), actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the usage statistics button on the side navigation" });
            },
            iPressTheOrderStatisticsButton: function () {
                return this.waitFor({ controlType: "sap.tnt.NavigationListItem", viewName: this.sViewName, matchers: new sap.ui.test.matchers.BindingPath({ modelName: "side", path: "/navigation/2/items/1" }), actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the order statistics button on the side navigation" });
            },
            iPressTheHomeButton: function () {
                return this.waitFor({ controlType: "sap.tnt.NavigationListItem", viewName: this.sViewName, matchers: new sap.ui.test.matchers.BindingPath({ modelName: "side", path: "/navigation/0" }), actions: new sap.ui.test.actions.Press(), errorMessage: "Did not find the home button on the sid navigation" });
            },
            iShouldSeeTheErrorPopover: function () {
                return this.waitFor({ id: "errorMessagePopover", viewName: this.sViewName, success: Bridge.fn.bind(this, function (obj) {
                    UI5.Tests.BaseIntegrationPage.Opa5.assert.ok(this.sViewName, "The error popover message was displayed");
                }), errorMessage: "The error popover was not displayed" });
            },
            iShouldSeeTheErrorMessage: function () {
                return this.waitFor({ id: "moreDetailsLink", controlType: "sap.m.Link", viewName: this.sViewName, success: Bridge.fn.bind(this, function (obj) {
                    UI5.Tests.BaseIntegrationPage.Opa5.assert.ok(this.sViewName, "The error message was displayed");
                }), errorMessage: "The error Message was not displayed" });
            },
            iShouldSeeTheNotificationPopover: function () {
                return this.waitFor({ id: "notificationMessagePopover", viewName: this.sViewName, success: Bridge.fn.bind(this, function (obj) {
                    UI5.Tests.BaseIntegrationPage.Opa5.assert.ok(this.sViewName, "The notification popover message was displayed");
                }), errorMessage: "The notification popover was not displayed" });
            },
            iShouldSeeTheUserPopover: function () {
                return this.waitFor({ id: "userMessageActionSheet", viewName: this.sViewName, success: Bridge.fn.bind(this, function (obj) {
                    UI5.Tests.BaseIntegrationPage.Opa5.assert.ok(this.sViewName, "The user popover message was displayed");
                }), errorMessage: "The notification popover was not displayed" });
            },
            iShouldSeeMessageToast: function () {
                return this.waitFor({ pollingInterval: 100, viewName: this.sViewName, check: function () {
                    return sap.ui.test.Opa5.getJQuery()(".sapMMessageToast").length !== 0;
                }, success: function (oView) {
                    UI5.Tests.BaseIntegrationPage.Opa5.assert.ok(oView, "The message toast was displayed");
                }, errorMessage: "The message toast was not displayed" });
            }
        }
    });
});

sap.ui.require(System.Array.init(["sap/ui/test/Opa5", "manu/toolpageapp/fv/test/integration/pages/Common", "sap/ui/test/actions/Press", "sap/ui/test/matchers/BindingPath"], System.String), (function (Opa5, Common) {
    var map = { };

    var testPage = new ClientScripts.Test.Integration.OnTheAppPage(Opa5);
    testPage.sViewName = "App";

    var cpo = testPage.GetPageObject();
    cpo.baseClass = Common;
    map['ClientScripts.Test.Integration.OnTheAppPage'] = cpo;

    sap.ui.test.Opa5.createPageObjects(map);
}));
