/**
 * @version 1.0.0.0
 * @copyright Copyright ©  2018
 * @compiler Bridge.NET 17.4.0
 */
Bridge.assembly("WalkthroughClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.demo.walkthrough.controller.App", {
        inherits: [sap.ui.core.mvc.Controller],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.String],"pi":[{"n":"sName","pt":System.String,"ps":0}],"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void},{"ov":true,"a":2,"n":"onInit","t":8,"sn":"onInit","rt":System.Void},{"a":2,"n":"onOpenDialog","t":8,"sn":"onOpenDialog","rt":System.Void}]}; },
        ctors: {
            ctor: function (sName) {
                this.$initialize();
                sap.ui.core.mvc.Controller.call(this, sName);
            }
        },
        methods: {
            onInit: function () {
                this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
            },
            onOpenDialog: function () {
                this.getOwnerComponent().openHelloDialog();
            }
        }
    });
});

sap.ui.define(System.Array.init(["sap/ui/core/mvc/Controller"], System.String), function () {
    var newObj = UI5.Glue.CreateRawClassObject(sap.ui.demo.walkthrough.controller.App);
    return sap.ui.core.mvc.Controller.extend("sap.ui.demo.walkthrough.controller.App", newObj);
});
