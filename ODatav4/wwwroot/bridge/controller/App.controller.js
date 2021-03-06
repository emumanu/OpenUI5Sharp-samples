/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.4.0
 */
Bridge.assembly("ODatav4ClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.core.tutorial.odatav4.controller.App", {
        inherits: [sap.ui.core.mvc.Controller],
        $metadata : function () { return {"nested":[System.Object],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.String],"pi":[{"n":"sName","pt":System.String,"ps":0}],"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void},{"a":2,"n":"_getText","t":8,"pi":[{"n":"sTextId","pt":System.String,"ps":0},{"n":"aArgs","dv":null,"o":true,"pt":System.Array.type(System.String),"ps":1}],"sn":"_getText","rt":System.String,"p":[System.String,System.Array.type(System.String)]},{"a":2,"n":"_setBusy","t":8,"pi":[{"n":"bIsBusy","pt":System.Boolean,"ps":0}],"sn":"_setBusy","rt":System.Void,"p":[System.Boolean]},{"a":2,"n":"_setUIChanges","t":8,"pi":[{"n":"bHasUIChanges","dv":null,"o":true,"pt":System.Nullable$1(System.Boolean),"ps":0}],"sn":"_setUIChanges","rt":System.Void,"p":[System.Nullable$1(System.Boolean)]},{"a":2,"n":"fnDeleteError","t":8,"pi":[{"n":"oError","pt":System.Object,"ps":0}],"sn":"fnDeleteError","rt":System.Object,"p":[System.Object]},{"a":2,"n":"fnDeleteSucces","t":8,"pi":[{"n":"value","pt":System.Object,"ps":0}],"sn":"fnDeleteSucces","rt":System.Object,"p":[System.Object]},{"a":2,"n":"fnResetDataSourceError","t":8,"pi":[{"n":"oError","pt":System.Object,"ps":0}],"sn":"fnResetDataSourceError","rt":System.Object,"p":[System.Object]},{"a":2,"n":"fnResetDataSourceSucces","t":8,"pi":[{"n":"value","pt":System.Object,"ps":0}],"sn":"fnResetDataSourceSucces","rt":System.Object,"p":[System.Object]},{"a":2,"n":"onCreate","t":8,"sn":"onCreate","rt":System.Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"onDelete","t":8,"sn":"onDelete","rt":System.Void},{"ov":true,"a":2,"n":"onInit","t":8,"sn":"onInit","rt":System.Void},{"a":2,"n":"onInputChange","t":8,"pi":[{"n":"oEvt","pt":sap.ui.base.Event,"ps":0}],"sn":"onInputChange","rt":System.Void,"p":[sap.ui.base.Event]},{"a":2,"n":"onMessageBindingChange","t":8,"pi":[{"n":"oEvent","pt":sap.ui.base.Event,"ps":0},{"n":"oData","pt":System.Object,"ps":1}],"sn":"onMessageBindingChange","rt":System.Void,"p":[sap.ui.base.Event,System.Object]},{"a":2,"n":"onRefresh","t":8,"sn":"onRefresh","rt":System.Void},{"a":2,"n":"onResetChanges","t":8,"sn":"onResetChanges","rt":System.Void},{"a":2,"n":"onResetDataSource","t":8,"sn":"onResetDataSource","rt":System.Void},{"a":2,"n":"onSave","t":8,"sn":"onSave","rt":System.Void},{"a":2,"n":"onSearch","t":8,"sn":"onSearch","rt":System.Void},{"a":2,"n":"onSort","t":8,"sn":"onSort","rt":System.Void},{"a":3,"n":"_bTechnicalErrors","t":4,"rt":System.Boolean,"sn":"_bTechnicalErrors","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; },
        fields: {
            _bTechnicalErrors: false
        },
        ctors: {
            ctor: function (sName) {
                this.$initialize();
                sap.ui.core.mvc.Controller.call(this, sName);
            }
        },
        methods: {
            onInit: function () {
                var oMessageManager = sap.ui.getCore().getMessageManager();
                var oMessageModel = oMessageManager.getMessageModel();
                var oMessageModelBinding = oMessageModel.bindList("/", null, System.Array.init([], sap.ui.model.Sorter), new sap.ui.model.Filter("technical", sap.ui.model.FilterOperator.EQ, true));
                var oViewModel = new sap.ui.model.json.JSONModel({ busy: false, hasUIChanges: false, usernameEmpty: true, order: 0 });
                this.getView().setModel(oViewModel, "appView");
                this.getView().setModel(oMessageModel, "message");

                oMessageModelBinding.attachChange(Bridge.fn.cacheBind(this, this.onMessageBindingChange));
                this._bTechnicalErrors = false;
            },
            onCreate: function () {
                var $t, $t1, $t2;
                var oList = this.byId("peopleList");
                var oBinding = oList.getBinding("items");
                var oContext = oBinding.create({ UserName: "", FirstName: "", LastName: "", Age: 18 });

                oContext.created().then(function (value) {
                    oBinding.refresh();
                });

                this._setUIChanges();
                UI5.Extensions.ModelExtensions.setPropertyFor$3(System.Object, System.Boolean, this.getView().getModel("appView"), ($t = { ntype: 38, t: System.Object, n: "m" }, ($t2 = ($t1 = {"td":System.Object,"a":2,"n":"usernameEmpty","t":4,"rt":System.Boolean,"sn":"usernameEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}, { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), { ntype: 18, t: Function, rt: $t2.t, body: $t2, p: Bridge.toList([$t]) })), true);

                return System.Linq.Enumerable.from(oList.getItems()).any(function (oItem) {
                        if (Bridge.referenceEquals(oItem.getBindingContext(), oContext)) {
                            oItem.focus();
                            oItem.setSelected(true);
                            return true;
                        }

                        return false;
                    });
            },
            fnDeleteSucces: function (value) {
                sap.m.MessageToast.show(this._getText("deletionSuccessMessage"));

                return null;
            },
            fnDeleteError: function (oError) {
                sap.m.MessageBox.error(Bridge.toString(oError.message));

                return null;
            },
            onDelete: function () {
                var oSelected = this.byId("peopleList").getSelectedItem();

                if (oSelected != null) {
                    oSelected.getBindingContext().delete("$auto").then(Bridge.fn.cacheBind(this, this.fnDeleteSucces), Bridge.fn.cacheBind(this, this.fnDeleteError));
                }
            },
            onInputChange: function (oEvt) {
                var $t, $t1, $t2, $t3, $t4, $t5;
                if (oEvt.getParameter("escPressed")) {
                    this._setUIChanges(null);
                } else {
                    this._setUIChanges(true);
                    if (sapuimodelContextTypedExtensions.getPropertyFor(System.Object, System.String, oEvt.getSource().getParent().getBindingContext(), ($t = { ntype: 38, t: System.Object, n: "m" }, ($t2 = ($t1 = {"td":System.Object,"a":2,"n":"UserName","t":16,"rt":System.String,"g":{"td":System.Object,"a":2,"n":"get_UserName","t":8,"rt":System.String,"fg":"UserName"},"s":{"td":System.Object,"a":2,"n":"set_UserName","t":8,"p":[System.String],"rt":System.Void,"fs":"UserName"},"fn":"UserName"}, { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), { ntype: 18, t: Function, rt: $t2.t, body: $t2, p: Bridge.toList([$t]) })), false) != null) {
                        UI5.Extensions.ModelExtensions.setPropertyFor$3(System.Object, System.Boolean, this.getView().getModel("appView"), ($t3 = { ntype: 38, t: System.Object, n: "m" }, ($t5 = ($t4 = {"td":System.Object,"a":2,"n":"usernameEmpty","t":4,"rt":System.Boolean,"sn":"usernameEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}, { ntype: 23, t: $t4.rt, expression: $t3, member: $t4 }), { ntype: 18, t: Function, rt: $t5.t, body: $t5, p: Bridge.toList([$t3]) })), false);
                    }
                }
            },
            onRefresh: function () {
                var oBinding = this.byId("peopleList").getBinding("items");

                if (oBinding.hasPendingChanges()) {
                    sap.m.MessageBox.error(this._getText("refreshNotPossibleMessage"));
                    return;
                }
                oBinding.refresh();
                sap.m.MessageToast.show(this._getText("refreshSuccessMessage"));
            },
            onResetChanges: function () {
                this.byId("peopleList").getBinding("items").resetChanges();
                this._bTechnicalErrors = false;
                this._setUIChanges(null);
            },
            fnResetDataSourceSucces: function (value) {
                var oModel = this.getView().getModel();
                oModel.refresh();
                sap.m.MessageToast.show(this._getText("sourceResetSuccessMessage"));

                return null;
            },
            fnResetDataSourceError: function (oError) {
                sap.m.MessageBox.error(Bridge.toString(oError.message));

                return null;
            },
            onResetDataSource: function () {
                var oModel = this.getView().getModel();
                var oOperation = oModel.bindContext("/ResetDataSource(...)");

                oOperation.execute().then(Bridge.fn.cacheBind(this, this.fnResetDataSourceSucces), Bridge.fn.cacheBind(this, this.fnResetDataSourceError));
            },
            onSave: function () {
                var fnSaveError = null;
                var fnSaveSucces = null;




                this._setBusy(true); // Lock UI until submitBatch is resolved.
                fnSaveSucces = Bridge.fn.bind(this, function (value) {
                    this._setBusy(false);
                    sap.m.MessageToast.show(this._getText("changesSentMessage"));
                    this._setUIChanges(false);
                    return null;
                });
                fnSaveError = Bridge.fn.bind(this, function (oError) {
                    this._setBusy(false);
                    this._setUIChanges(false);
                    sap.m.MessageBox.error(Bridge.toString(oError.message));
                    return null;
                });
                this.getView().getModel().submitBatch("peopleGroup").then(fnSaveSucces, fnSaveError);
                this._bTechnicalErrors = false; // If there were technical errors, a new save resets them.
            },
            onSearch: function () {
                var oView = this.getView();
                var sValue = oView.byId("searchField").getValue();
                var oFilter = new sap.ui.model.Filter("LastName", sap.ui.model.FilterOperator.Contains, sValue);

                oView.byId("peopleList").getBinding("items").filter(oFilter, sap.ui.model.FilterType.Application);
            },
            onSort: function () {
                var $t, $t1, $t2, $t3, $t4, $t5;
                var oView = this.getView();
                var aStates = System.Array.init([null, "asc", "desc"], System.String);
                var aStateTextIds = System.Array.init(["sortNone", "sortAscending", "sortDescending"], System.String);
                var sMessage;
                var iOrder = UI5.Extensions.ModelExtensions.getPropertyFor$2(System.Object, System.Int32, oView.getModel("appView"), ($t = { ntype: 38, t: System.Object, n: "m" }, ($t2 = ($t1 = {"td":System.Object,"a":2,"n":"order","t":4,"rt":System.Int32,"sn":"order","box":function ($v) { return Bridge.box($v, System.Int32);}}, { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), { ntype: 18, t: Function, rt: $t2.t, body: $t2, p: Bridge.toList([$t]) })));

                iOrder = (iOrder + 1) % aStates.length;
                var sOrder = aStates[iOrder];
                UI5.Extensions.ModelExtensions.setPropertyFor$3(System.Object, System.Int32, oView.getModel("appView"), ($t3 = { ntype: 38, t: System.Object, n: "m" }, ($t5 = ($t4 = {"td":System.Object,"a":2,"n":"order","t":4,"rt":System.Int32,"sn":"order","box":function ($v) { return Bridge.box($v, System.Int32);}}, { ntype: 23, t: $t4.rt, expression: $t3, member: $t4 }), { ntype: 18, t: Function, rt: $t5.t, body: $t5, p: Bridge.toList([$t3]) })), iOrder);
                if (sOrder != null) {
                    oView.byId("peopleList").getBinding("items").sort(new sap.ui.model.Sorter("LastName", Bridge.referenceEquals(sOrder, "desc")));
                } else {
                    oView.byId("peopleList").getBinding("items").sort();
                }

                sMessage = this._getText("sortMessage", System.Array.init([this._getText(aStateTextIds[iOrder])], System.String));
                sap.m.MessageToast.show(sMessage);
            },
            onMessageBindingChange: function (oEvent, oData) {
                var aContexts = oEvent.getSource().getContexts();
                var aMessages;
                var bMessageOpen = false;

                if (bMessageOpen || (aContexts.length === 0)) {
                    return;
                }

                // Extract and remove the technical messages
                aMessages = System.Linq.Enumerable.from(aContexts).select(function (oContext) {
                        return oContext.getObject();
                    }).ToArray(sap.ui.core.message.Message);
                sap.ui.getCore().getMessageManager().removeMessages(aMessages);

                this._setUIChanges(true);
                this._bTechnicalErrors = true;

                sap.m.MessageBox.error(aMessages[0].getMessage(), { id: "serviceErrorMessageBox", onClose: function (oAction) {
                    bMessageOpen = false;
                } });

                bMessageOpen = true;
            },
            _getText: function (sTextId, aArgs) {
                if (aArgs === void 0) { aArgs = null; }
                return this.getOwnerComponent().getModel("i18n").getResourceBundle().getText(sTextId, aArgs);
            },
            _setUIChanges: function (bHasUIChanges) {
                var $t, $t1, $t2;
                if (bHasUIChanges === void 0) { bHasUIChanges = null; }
                if (this._bTechnicalErrors) {
                    // If there is currently a technical error, then force 'true'.
                    bHasUIChanges = true;
                } else if (bHasUIChanges == null) {
                    // if it is not specified, get it from the model
                    bHasUIChanges = this.getView().getModel().hasPendingChanges();
                }
                var oModel = this.getView().getModel("appView");
                UI5.Extensions.ModelExtensions.setPropertyFor$3(System.Object, System.Nullable$1(System.Boolean), oModel, ($t = { ntype: 38, t: System.Object, n: "m" }, ($t2 = { ntype: 10, t: System.Nullable$1(System.Boolean), operand: ($t1 = {"td":System.Object,"a":2,"n":"hasUIChanges","t":4,"rt":System.Boolean,"sn":"hasUIChanges","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}, { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }) }, { ntype: 18, t: Function, rt: $t2.t, body: $t2, p: Bridge.toList([$t]) })), bHasUIChanges);
            },
            _setBusy: function (bIsBusy) {
                var $t, $t1, $t2;
                var oModel = this.getView().getModel("appView");
                oModel.setProperty("/busy", bIsBusy);
                UI5.Extensions.ModelExtensions.setPropertyFor$3(System.Object, System.Boolean, oModel, ($t = { ntype: 38, t: System.Object, n: "m" }, ($t2 = ($t1 = {"td":System.Object,"a":2,"n":"busy","t":4,"rt":System.Boolean,"sn":"busy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}, { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), { ntype: 18, t: Function, rt: $t2.t, body: $t2, p: Bridge.toList([$t]) })), bIsBusy);
            }
        }
    });
});

sap.ui.define(System.Array.init(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/m/MessageBox", "sap/ui/model/Sorter", "sap/ui/model/Filter", "sap/ui/model/FilterOperator", "sap/ui/model/FilterType", "sap/ui/model/json/JSONModel"], System.String), function () {
    var newObj = UI5.Glue.CreateRawClassObject(sap.ui.core.tutorial.odatav4.controller.App);
    return sap.ui.core.mvc.Controller.extend("sap.ui.core.tutorial.odatav4.controller.App", newObj);
});
