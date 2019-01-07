using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using UI5;
using UI5.Extensions;
using UI5.Tests;
using Retyped;

namespace ClientScripts.Test.Integration
{
    [FileName("test/integration/pages/App.js")]
    public class OnTheAppPage : BaseIntegrationPage
    {
        public string sViewName;

        [Init(InitPosition.Bottom)]
        public static void RequireScript()
        {
            sap.ui.require(new string[] {
                    "sap/ui/test/Opa5",
                    "manu/toolpageapp/fv/test/integration/pages/Common",
                    "sap/ui/test/actions/Press",
                    "sap/ui/test/matchers/BindingPath"
                },
                (new Action<sap.ui.test.Opa5, Common>((Opa5, Common) => {
                    var map = new Map<CreatePageObjectsInfo>();

                    OnTheAppPage testPage = new OnTheAppPage(Opa5);
                    testPage.sViewName = "App";

                    CreatePageObjectsInfo cpo = testPage.GetPageObject();
                    cpo.baseClass = Common;
                    map.Set<OnTheAppPage>(cpo);

                    createPageObjects(map);
                })
            ));
        }

        public OnTheAppPage(sap.ui.test.Opa5 Opa5) : base(Opa5)
        {
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheErrorButton()
        {
            return this.waitFor(new WaitForOptions() {
                id = "errorButton",
				viewName = sViewName,
				actions = new sap.ui.test.actions.Press(),
				errorMessage = "Did not find the error button on App page"
            });
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheErrorMessage()
        {
            return this.waitFor(new WaitForOptions() {
                controlType = "sap.m.MessagePopoverItem",
				viewName = sViewName,
				matchers = new sap.ui.test.matchers.BindingPath(new sap.ui.test.matchers.BindingPath.Settings() {
                    modelName = "alerts",
                    path = "/alerts/errors/0"
                }),
                actions = new sap.ui.test.actions.Press(),
				errorMessage = "Did not find the error message item"
             });
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheNotificationButton()
        {
            return this.waitFor(new WaitForOptions() {
                id = "notificationButton",
                viewName = sViewName,
                actions = new sap.ui.test.actions.Press(),
                errorMessage = "Did not find the notification Button on the App page"
            });
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheUserButton()
        {
            return this.waitFor(new WaitForOptions() {
                id = "userButton",
                viewName = sViewName,
                actions = new sap.ui.test.actions.Press(),
                errorMessage = "Did not find the user Button on the App page"
            });
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheSettingsButton()
        {
            return this.waitFor(new WaitForOptions() {
                controlType = "sap.tnt.NavigationListItem",
                viewName = sViewName,
                matchers = new sap.ui.test.matchers.BindingPath(new sap.ui.test.matchers.BindingPath.Settings() {
                    modelName = "side",
                    path = "/navigation/1"
                }),
                actions = new sap.ui.test.actions.Press(),
                errorMessage = "Did not find the settings button on the sid navigation"
            });
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheStatisticsButton()
        {
            return this.waitFor(new WaitForOptions() {
                controlType = "sap.tnt.NavigationListItem",
				viewName = sViewName,
                matchers = new sap.ui.test.matchers.BindingPath(new sap.ui.test.matchers.BindingPath.Settings() {
                    modelName = "side",
                    path = "/navigation/2"
                }),
                actions = new sap.ui.test.actions.Press(),
                errorMessage = "Did not find the statistics button on the sid navigation"
            });
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheUsageStatisticsButton()
        {
            return this.waitFor(new WaitForOptions() {
                controlType = "sap.tnt.NavigationListItem",
				viewName = sViewName,
                matchers = new sap.ui.test.matchers.BindingPath(new sap.ui.test.matchers.BindingPath.Settings() {
                    modelName = "side",
                    path = "/navigation/2/items/0"
                }),
                actions = new sap.ui.test.actions.Press(),
                errorMessage = "Did not find the usage statistics button on the side navigation"
            });
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheOrderStatisticsButton()
        {
            return this.waitFor(new WaitForOptions() {
                controlType = "sap.tnt.NavigationListItem",
                viewName = sViewName,
                matchers = new sap.ui.test.matchers.BindingPath(new sap.ui.test.matchers.BindingPath.Settings() {
                    modelName = "side",
                    path = "/navigation/2/items/1"
                }),
                actions = new sap.ui.test.actions.Press(),
                errorMessage = "Did not find the order statistics button on the side navigation"
            });
        }

        [OpaAction]
        public virtual es5.Promise<object> iPressTheHomeButton()
        {
            return this.waitFor(new WaitForOptions() {
                controlType = "sap.tnt.NavigationListItem",
				viewName = sViewName,
                matchers = new sap.ui.test.matchers.BindingPath(new sap.ui.test.matchers.BindingPath.Settings() {
                    modelName = "side",
                    path = "/navigation/0"
                }),
                actions = new sap.ui.test.actions.Press(),
                errorMessage = "Did not find the home button on the sid navigation"
            });
        }


        [OpaAssertion]
        public virtual es5.Promise<object> iShouldSeeTheErrorPopover()
        {
            return this.waitFor(new WaitForOptions() {
                id = "errorMessagePopover",
                viewName = sViewName,
                success = (Action<object>)((object obj) => {
                    Opa5.assert.ok(sViewName, "The error popover message was displayed");
                }),
                errorMessage = "The error popover was not displayed"
            });
        }

        [OpaAssertion]
        public virtual es5.Promise<object> iShouldSeeTheErrorMessage()
        {
            return this.waitFor(new WaitForOptions() {
                id = "moreDetailsLink",
                controlType = "sap.m.Link",
                viewName = sViewName,
                success = (Action<object>)((object obj) => {
                    Opa5.assert.ok(sViewName, "The error message was displayed");
                }),
                errorMessage = "The error Message was not displayed"
            });
        }

        [OpaAssertion]
        public virtual es5.Promise<object> iShouldSeeTheNotificationPopover()
        {
            return this.waitFor(new WaitForOptions() {
                id = "notificationMessagePopover",
                viewName = sViewName,
                success = (Action<object>)((object obj) => {
                    Opa5.assert.ok(sViewName, "The notification popover message was displayed");
                }),
                errorMessage = "The notification popover was not displayed"
            });
        }

	     [OpaAssertion]
        public virtual es5.Promise<object> iShouldSeeTheUserPopover()
        {
            return this.waitFor(new WaitForOptions() {
				id = "userMessageActionSheet",
				viewName = sViewName,
                success = (Action<object>)((object obj) => {
                    Opa5.assert.ok(sViewName, "The user popover message was displayed");
                }),
                errorMessage = "The notification popover was not displayed"
			});
		}

        [OpaAssertion]
        public virtual es5.Promise<object> iShouldSeeMessageToast()
        {
            return this.waitFor(new WaitForOptions() {
				//increase opa's polling because the message toast is only shown for a brief moment
				pollingInterval = 100,
				viewName = sViewName,
                check = (Func<bool>)(() => {
                    return getJQuery().select(".sapMMessageToast").length != 0;
                }),
                success = (Action<object>)((object oView) => {
                    Opa5.assert.ok(oView, "The message toast was displayed");
                }),
                errorMessage = "The message toast was not displayed"
			});
		}
    }
}
