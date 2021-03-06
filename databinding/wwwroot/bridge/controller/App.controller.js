/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.4.0
 */
Bridge.assembly("DatabindingClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.demo.db.controller.App", {
        inherits: [sap.ui.core.mvc.Controller],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.String],"pi":[{"n":"sName","pt":System.String,"ps":0}],"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void},{"a":2,"n":"formatMail","t":8,"pi":[{"n":"sFirstName","pt":System.String,"ps":0},{"n":"sLastName","pt":System.String,"ps":1}],"sn":"formatMail","rt":System.String,"p":[System.String,System.String]},{"a":2,"n":"formatStockValue","t":8,"pi":[{"n":"fUnitPrice","pt":System.Single,"ps":0},{"n":"iStockLevel","pt":System.Int32,"ps":1},{"n":"sCurrCode","pt":System.String,"ps":2}],"sn":"formatStockValue","rt":System.String,"p":[System.Single,System.Int32,System.String]},{"a":2,"n":"onItemSelected","t":8,"pi":[{"n":"oEvent","pt":sap.ui.base.Event,"ps":0},{"n":"oData","pt":System.Object,"ps":1}],"sn":"onItemSelected","rt":System.Void,"p":[sap.ui.base.Event,System.Object]},{"a":2,"n":"productListFactory","t":8,"pi":[{"n":"sId","pt":System.String,"ps":0},{"n":"oContext","pt":sap.ui.model.Context,"ps":1}],"sn":"productListFactory","rt":sap.ui.core.Element,"p":[System.String,sap.ui.model.Context]},{"a":3,"n":"_oProductExtended","t":4,"rt":sap.ui.core.Element,"sn":"_oProductExtended"},{"a":3,"n":"_oProductSimple","t":4,"rt":sap.ui.core.Element,"sn":"_oProductSimple"}]}; },
        fields: {
            _oProductSimple: null,
            _oProductExtended: null
        },
        ctors: {
            ctor: function (sName) {
                this.$initialize();
                sap.ui.core.mvc.Controller.call(this, sName);
            }
        },
        methods: {
            formatMail: function (sFirstName, sLastName) {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                return sap.m.URLHelper.normalizeEmail(System.String.format("{0}.{1}@example.com", sFirstName, sLastName), oBundle.getText("mailSubject", System.Array.init([sFirstName], System.String)), oBundle.getText("mailBody"));
            },
            formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
                var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
                var oLocale = new sap.ui.core.Locale(sBrowserLocale);
                var localizedCurrencyFormat = sap.ui.core.format.NumberFormat.getCurrencyInstance(oLocale);
                return localizedCurrencyFormat.format(System.Array.init([fUnitPrice * iStockLevel, sCurrCode], System.Object));
            },
            onItemSelected: function (oEvent, oData) {
                var oSelectedItem = oEvent.getSource();
                var oContext = oSelectedItem.getBindingContext("products");
                var sPath = oContext.getPath();
                var oProductDetailPanel = this.byId("productDetailsPanel");
                oProductDetailPanel.bindElement({ path: sPath, model: "products" });
            },
            productListFactory: function (sId, oContext) {
                var oUIControl = null;

                // Decide based on the data which fragment to show
                if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) {
                    // The item is discontinued, so use a StandardListItem
                    if (this._oProductSimple == null) {
                        this._oProductSimple = sap.ui.xmlfragment(sId, "sap.ui.demo.db.view.ProductSimple", this);
                    }
                    oUIControl = this._oProductSimple.clone();
                } else {
                    // The item is available, so we will create an ObjectListItem
                    if (this._oProductExtended == null) {
                        this._oProductExtended = sap.ui.xmlfragment(sId, "sap.ui.demo.db.view.ProductExtended", this);
                    }
                    oUIControl = this._oProductExtended.clone();

                    // The item is temporarily out of stock, so we will add a status
                    if (oContext.getProperty("UnitsInStock") < 1) {
                        oUIControl.addAttribute(new sap.m.ObjectAttribute({ text: { path: "i18n>outOfStock" } }));
                    }
                }

                return oUIControl;
            }
        }
    });
});

sap.ui.define(System.Array.init(["sap/ui/core/mvc/Controller", "sap/ui/model/type/Currency"], System.String), function () {
    var newObj = UI5.Glue.CreateRawClassObject(sap.ui.demo.db.controller.App);
    return sap.ui.core.mvc.Controller.extend("sap.ui.demo.db.controller.App", newObj);
});
