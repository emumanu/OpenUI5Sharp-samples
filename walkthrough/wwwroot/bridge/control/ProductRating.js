Bridge.assembly("WalkthroughClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.demo.walkthrough.control.ProductRating", {
        inherits: [sap.ui.core.Control],
        $metadata : function () { return {"nested":[sap.ui.demo.walkthrough.control.ProductRating.RatingInfo],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.String,System.Object],"pi":[{"n":"sId","pt":System.String,"ps":0},{"n":"mSettings","pt":System.Object,"ps":1}],"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void},{"v":true,"a":2,"n":"_onRate","t":8,"pi":[{"n":"oEvent","pt":sap.ui.base.Event,"ps":0},{"n":"oData","pt":System.Object,"ps":1}],"sn":"_onRate","rt":System.Void,"p":[sap.ui.base.Event,System.Object]},{"v":true,"a":2,"n":"_onSubmit","t":8,"pi":[{"n":"oEvent","pt":sap.ui.base.Event,"ps":0},{"n":"oData","pt":System.Object,"ps":1}],"sn":"_onSubmit","rt":System.Void,"p":[sap.ui.base.Event,System.Object]},{"ov":true,"a":2,"n":"init","t":8,"sn":"init","rt":System.Void},{"a":2,"n":"renderer","t":8,"pi":[{"n":"oRM","pt":sap.ui.core.RenderManager,"ps":0},{"n":"oControl","pt":sap.ui.core.Control,"ps":1}],"sn":"renderer","rt":System.Void,"p":[sap.ui.core.RenderManager,sap.ui.core.Control]},{"v":true,"a":2,"n":"reset","t":8,"sn":"reset","rt":System.Void},{"v":true,"a":2,"n":"setValue","t":8,"pi":[{"n":"fValue","pt":System.Single,"ps":0}],"sn":"setValue","rt":System.Void,"p":[System.Single]},{"a":2,"n":"metadata","is":true,"t":4,"rt":System.Object,"sn":"metadata"}]}; },
        statics: {
            fields: {
                metadata: null
            },
            ctors: {
                init: function () {
                    this.metadata = { properties: function (_o1) {
                            _o1["value"] = { type: "float", defaultValue: 0 };
                            return _o1;
                        }({ }), aggregations: function (_o2) {
                            _o2["_rating"] = { type: "sap.m.RatingIndicator", multiple: false, visibility: "hidden" };
                            _o2["_label"] = { type: "sap.m.Label", multiple: false, visibility: "hidden" };
                            _o2["_button"] = { type: "sap.m.Button", multiple: false, visibility: "hidden" };
                            return _o2;
                        }({ }), events: function (_o3) {
                            _o3["change"] = UI5.Metadata.TypedMetadata.CreateUI5EventInfo(sap.ui.demo.walkthrough.control.ProductRating.RatingInfo);
                            return _o3;
                        }({ }) };
                }
            }
        },
        ctors: {
            ctor: function (sId, mSettings) {
                this.$initialize();
                sap.ui.core.Control.call(this, sId, mSettings);
            }
        },
        methods: {
            init: function () {
                this.setAggregation("_rating", new sap.m.RatingIndicator({ value: this.getProperty("value"), iconSize: "2rem", visualMode: "Half", liveChange: Bridge.fn.cacheBind(this, this._onRate) }));
                this.setAggregation("_label", new sap.m.Label({ text: "{i18n>productRatingLabelInitial}" }).addStyleClass("sapUiSmallMargin"));
                this.setAggregation("_button", new sap.m.Button({ text: "{i18n>productRatingButton}", press: Bridge.fn.cacheBind(this, this._onSubmit) }).addStyleClass("sapUiTinyMarginTopBottom"));
            },
            setValue: function (fValue) {
                this.setProperty("value", fValue, true);
                this.getAggregation("_rating").setValue(fValue);
            },
            reset: function () {
                var oResourceBundle = this.getModel("i18n").getResourceBundle();

                this.setValue(0);
                this.getAggregation("_label").setDesign(sap.m.LabelDesign.Standard);
                this.getAggregation("_rating").setEnabled(true);
                this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelInitial"));
                this.getAggregation("_button").setEnabled(true);
            },
            _onRate: function (oEvent, oData) {
                var oResourceBundle = this.getModel("i18n").getResourceBundle();
                var fValue = oEvent.getParameter("value");

                this.setProperty("value", fValue, true);

                this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelIndicator", System.Array.init([fValue, oEvent.getSource().getMaxValue()], System.Object)));
                this.getAggregation("_label").setDesign(sap.m.LabelDesign.Bold);
            },
            _onSubmit: function (oEvent, oData) {
                var oResourceBundle = this.getModel("i18n").getResourceBundle();

                this.getAggregation("_rating").setEnabled(false);
                this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
                this.getAggregation("_button").setEnabled(false);
                this.fireEvent("change", { value: this.getProperty("value") });
            },
            renderer: function (oRM, oControl) {
                oRM.write("<div");
                oRM.writeControlData(oControl);
                oRM.addClass("myAppDemoWTProductRating");
                oRM.writeClasses();
                oRM.write(">");
                oRM.renderControl(oControl.getAggregation("_rating"));
                oRM.renderControl(oControl.getAggregation("_label"));
                oRM.renderControl(oControl.getAggregation("_button"));
                oRM.write("</div>");
            }
        }
    });

    Bridge.define("sap.ui.demo.walkthrough.control.ProductRating.RatingInfo", {
        $kind: "nested class",
        $metadata : function () { return {"td":sap.ui.demo.walkthrough.control.ProductRating,"att":1048578,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"def":function () { return {};}},{"a":2,"n":"value","t":4,"rt":System.Single,"sn":"value","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; },
        fields: {
            value: 0
        }
    });
});

sap.ui.define(System.Array.init(["sap/ui/core/Control", "sap/m/RatingIndicator", "sap/m/Label", "sap/m/Button"], System.String), function () {
    var newObj = UI5.Glue.CreateRawClassObject(sap.ui.demo.walkthrough.control.ProductRating);
    return sap.ui.core.Control.extend("sap.ui.demo.walkthrough.control.ProductRating", newObj);
});
