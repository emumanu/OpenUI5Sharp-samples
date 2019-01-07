jQuery.sap.require("sap/ui/demo/nav/controller/BaseController");
jQuery.sap.require("sap/ui/model/json/JSONModel");

jQuery.sap.declare({ modName: "sap.ui.demo.nav.controller.employee.Resume", type: "controller" });

Bridge.assembly("RoutingClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.demo.nav.controller.employee.Resume", {
        inherits: [sap.ui.demo.nav.controller.BaseController],
        $metadata : function () { return {"nested":[System.Object],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.String],"pi":[{"n":"sName","pt":System.String,"ps":0}],"sn":"ctor"},{"a":2,"n":"ScriptTop","is":true,"t":8,"sn":"ScriptTop","rt":System.Void},{"a":2,"n":"_onBindingChange","t":8,"pi":[{"n":"oEvent","pt":sap.ui.base.Event,"ps":0},{"n":"oData","pt":System.Object,"ps":1}],"sn":"_onBindingChange","rt":System.Void,"p":[sap.ui.base.Event,System.Object]},{"a":2,"n":"_onRouteMatched","t":8,"pi":[{"n":"oEvent","pt":sap.ui.base.Event,"ps":0},{"n":"oData","pt":System.Object,"ps":1}],"sn":"_onRouteMatched","rt":System.Void,"p":[sap.ui.base.Event,System.Object]},{"ov":true,"a":2,"n":"onInit","t":8,"sn":"onInit","rt":System.Void},{"a":2,"n":"onTabSelect","t":8,"pi":[{"n":"oEvent","pt":sap.ui.base.Event,"ps":0},{"n":"oData","pt":System.Object,"ps":1}],"sn":"onTabSelect","rt":System.Void,"p":[sap.ui.base.Event,System.Object]},{"a":2,"n":"_aValidTabKeys","is":true,"t":4,"rt":System.Array.type(System.Object),"sn":"_aValidTabKeys"}]}; },
        statics: {
            fields: {
                _aValidTabKeys: null
            },
            ctors: {
                init: function () {
                    this._aValidTabKeys = System.Array.init(["Info", "Projects", "Hobbies", "Notes"], System.String);
                }
            }
        },
        ctors: {
            ctor: function (sName) {
                this.$initialize();
                sap.ui.demo.nav.controller.BaseController.ctor.call(this, sName);
            }
        },
        methods: {
            onInit: function () {
                var oRouter = this.getRouter();
                oRouter.getRoute("employeeResume").attachMatched(Bridge.fn.cacheBind(this, this._onRouteMatched));

                this.getView().setModel(new sap.ui.model.json.JSONModel({ }), "view");
            },
            _onRouteMatched: function (oEvent, oData) {
                var $t, $t1, $t2, $t3, $t4, $t5;
                var oArgs = UI5.Extensions.BaseExtensions.getParameterFor(System.Object, System.Object, oEvent, ($t = { ntype: 38, t: System.Object, n: "p" }, ($t2 = ($t1 = {"td":System.Object,"a":2,"n":"arguments","t":4,"rt":System.Object,"sn":"arguments"}, { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), { ntype: 18, t: Function, rt: $t2.t, body: $t2, p: Bridge.toList([$t]) })));
                var oView = this.getView();
                var employeeId = oArgs.employeeId;

                oView.bindElement({ path: System.String.format("/Employees({0})", [employeeId]), events: { change: Bridge.fn.cacheBind(this, this._onBindingChange), dataRequested: function (oEvt, unused) {
                    oView.setBusy(true);
                }, dataReceived: function (oEvt, unused) {
                    oView.setBusy(false);
                } } });

                var oQuery = oArgs["?query"];
                if (!UI5.Glue.IsNullOrUndefined(oQuery) && System.Array.contains(sap.ui.demo.nav.controller.employee.Resume._aValidTabKeys, oQuery.tab, System.Object)) {
                    UI5.Extensions.ModelExtensions.setPropertyFor$3(System.Object, System.Object, oView.getModel("view"), ($t3 = { ntype: 38, t: System.Object, n: "m" }, ($t5 = { ntype: 10, t: System.Object, operand: ($t4 = {"td":System.Object,"a":2,"n":"selectedTabKey","t":4,"rt":System.String,"sn":"selectedTabKey"}, { ntype: 23, t: $t4.rt, expression: $t3, member: $t4 }) }, { ntype: 18, t: Function, rt: $t5.t, body: $t5, p: Bridge.toList([$t3]) })), oQuery.tab);

                    // support lazy loading for the hobbies and notes tab
                    if (Bridge.referenceEquals(oQuery.tab, "Hobbies") || Bridge.referenceEquals(oQuery.tab, "Notes")) {
                        // the target is either "resumeTabHobbies" or "resumeTabNotes"
                        this.getRouter().getTargets().display(System.String.concat("resumeTab", oQuery.tab));
                    }
                } else {
                    // the default query param should be visible at all time
                    this.getRouter().navTo("employeeResume", { employeeId: oArgs.employeeId, query: { tab: sap.ui.demo.nav.controller.employee.Resume._aValidTabKeys[0] } }, true);
                }
            },
            _onBindingChange: function (oEvent, oData) {
                // No data for the binding
                if (this.getView().getBindingContext() == null) {
                    this.getRouter().getTargets().display("notFound");
                }
            },
            onTabSelect: function (oEvent, oData) {
                var $t, $t1, $t2;
                var oCtx = this.getView().getBindingContext();
                this.getRouter().navTo("employeeResume", { employeeId: sapuimodelContextTypedExtensions.getPropertyFor(System.Object, System.Int32, oCtx, ($t = { ntype: 38, t: System.Object, n: "e" }, ($t2 = ($t1 = {"td":System.Object,"a":2,"n":"EmployeeID","t":16,"rt":System.Int32,"g":{"td":System.Object,"a":2,"n":"get_EmployeeID","t":8,"rt":System.Int32,"fg":"EmployeeID","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"td":System.Object,"a":2,"n":"set_EmployeeID","t":8,"p":[System.Int32],"rt":System.Void,"fs":"EmployeeID"},"fn":"EmployeeID"}, { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), { ntype: 18, t: Function, rt: $t2.t, body: $t2, p: Bridge.toList([$t]) })), false), query: { tab: oEvent.getParameter("selectedKey") } }, true);
            }
        }
    });
});
