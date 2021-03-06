Bridge.assembly("WalkthroughClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.demo.walkthrough.controller.HelloDialog", {
        inherits: [sap.ui.base.ManagedObject],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[sap.ui.core.mvc.View],"pi":[{"n":"oView","pt":sap.ui.core.mvc.View,"ps":0}],"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void},{"a":2,"n":"exit","t":8,"sn":"exit","rt":System.Void},{"a":2,"n":"open","t":8,"sn":"open","rt":System.Void},{"a":2,"n":"oView","t":4,"rt":sap.ui.core.mvc.View,"sn":"oView"}]}; },
        fields: {
            oView: null
        },
        ctors: {
            ctor: function (oView) {
                this.$initialize();
                sap.ui.base.ManagedObject.call(this, oView);
                this.oView = oView;
            }
        },
        methods: {
            exit: function () {
                delete this.oView;
            },
            open: function () {
                var oDialog = this.oView.byId("helloDialog");

                // create dialog lazily
                if (oDialog == null) {
                    var oFragmentController = { onCloseDialog: function (oEvent, oData) {
                        oDialog.close();
                    } };

                    // create dialog via fragment factory
                    oDialog = sap.ui.xmlfragment(this.oView.getId(), "sap.ui.demo.walkthrough.view.HelloDialog", oFragmentController);
                    // connect dialog to the root view of this component (models, lifecycle)
                    this.oView.addDependent(oDialog);

                    // forward compact/cozy style into dialog
                    jQuery.sap.syncStyleClass(this.oView.getController().getOwnerComponent().getContentDensityClass(), this.oView, oDialog);
                }
                ;

                oDialog.open();
            }
        }
    });
});

sap.ui.define(System.Array.init(["sap/ui/base/ManagedObject"], System.String), function () {
    var newObj = UI5.Glue.CreateRawClassObject(sap.ui.demo.walkthrough.controller.HelloDialog);
    return sap.ui.base.ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", newObj);
});
