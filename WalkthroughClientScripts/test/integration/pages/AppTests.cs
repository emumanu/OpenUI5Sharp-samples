using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using static Retyped.qunit;
using UI5;
using UI5.Tests;
using Retyped;

namespace WalkthroughClientScripts.Tests
{
    [FileName("test/integration/pages/app.js")]
    public class OnTheAppPage : BaseIntegrationPage
    {
        [Init(InitPosition.Bottom)]
        public static void RequireScript()
        {
            sap.ui.require(new string[] {
                    "sap/ui/test/Opa5",
                    "sap/ui/test/actions/Press"
                },
                (new Action<sap.ui.test.Opa5>((Opa5) => {
                    var map = new Map<CreatePageObjectsInfo>();

                    OnTheAppPage testPage = new OnTheAppPage(Opa5);
                    map.Set<OnTheAppPage>(testPage.GetPageObject());

                    createPageObjects(map);
                }))
            );
        }

        public OnTheAppPage(sap.ui.test.Opa5 Opa5) : base(Opa5)
        {
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheSayHelloWithDialogButton()
        {
            return this.waitFor(new WaitForOptions() {
                id = "helloDialogButton",
                viewName = "sap.ui.demo.walkthrough.view.HelloPanel",
                actions = new sap.ui.test.actions.Press(),
                errorMessage = "Did not find the 'Say Hello With Dialog' button on the HelloPanel view"
            });
        }

        [OpaAssertion]
        public virtual es5.Promise<object> iShouldSeeTheHelloDialog()
        {
            return this.waitFor(new WaitForOptions() {
                controlType = "sap.m.Dialog",
                success = (Action<object>)((object obj) => {
                    Opa5.assert.ok(true, "The dialog is open");
                }),
                errorMessage = "Did not find the dialog control"
            });
        }
    }
}