Bridge.assembly("ODatav4ClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.core.tutorial.odata4.model.Models", {
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void},{"v":true,"a":2,"n":"createDeviceModel","t":8,"sn":"createDeviceModel","rt":sap.ui.model.Model},{"a":2,"n":"Device","t":4,"rt":System.Object,"sn":"Device"}]}; },
        fields: {
            Device: null
        },
        ctors: {
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            createDeviceModel: function () {
                var oModel = new sap.ui.model.json.JSONModel(this.Device);
                oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
                return oModel;
            }
        }
    });
});

sap.ui.define(System.Array.init(["sap/ui/model/json/JSONModel", "sap/ui/Device"], System.String), function (Model, Device) {
    var newObj = UI5.Glue.CreateRawClassObject(sap.ui.core.tutorial.odata4.model.Models);
    newObj.Device = Device;
    return newObj;
});
