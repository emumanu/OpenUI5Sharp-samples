jQuery.sap.require("manu/toolpageapp/fv/controller/BaseController");

Bridge.assembly("ClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("manu.toolpageapp.fv.controller.Home", {
        inherits: [manu.toolpageapp.fv.controller.BaseController],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[System.Object],"pi":[{"n":"sName","pt":System.Object,"ps":0}],"sn":"ctor"},{"a":2,"n":"DefineScript","is":true,"t":8,"sn":"DefineScript","rt":System.Void},{"a":2,"n":"RequireScript","is":true,"t":8,"sn":"RequireScript","rt":System.Void},{"ov":true,"a":2,"n":"onInit","t":8,"sn":"onInit","rt":System.Void},{"a":2,"n":"Device","t":4,"rt":sap.ui.Device,"sn":"Device"},{"a":2,"n":"formatter","t":4,"rt":System.Object,"sn":"formatter"}]}; },
        fields: {
            formatter: null,
            Device: null
        },
        ctors: {
            ctor: function (sName) {
                this.$initialize();
                manu.toolpageapp.fv.controller.BaseController.ctor.call(this, sName);
            }
        },
        methods: {
            onInit: function () {
                var oViewModel = new sap.ui.model.json.JSONModel({ isPhone: this.Device.system.phone });
                this.setModel(oViewModel, "view");
                this.Device.media.attachHandler(Bridge.fn.bind(this, function (oDevice) {
                    var $t, $t1, $t2;
                    UI5.Extensions.ModelExtensions.setPropertyFor$3(System.Object, System.Boolean, this.getModelFor(System.Object, "view"), ($t = { ntype: 38, t: System.Object, n: "p" }, ($t2 = ($t1 = {"td":System.Object,"a":2,"n":"isPhone","t":4,"rt":System.Boolean,"sn":"isPhone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}, { ntype: 23, t: $t1.rt, expression: $t, member: $t1 }), { ntype: 18, t: Function, rt: $t2.t, body: $t2, p: Bridge.toList([$t]) })), Bridge.referenceEquals(oDevice.name, "Phone"));
                }));
            }
        }
    });
});

sap.ui.define(System.Array.init(["manu/toolpageapp/fv/model/formatter", "sap/ui/Device", "sap/ui/model/json/JSONModel"], System.String), function (Formatter, Device) {
    var newObj = UI5.Glue.CreateRawClassObject(manu.toolpageapp.fv.controller.Home);
    newObj.formatter = Formatter;
    newObj.Device = Device;
    return manu.toolpageapp.fv.controller.BaseController.extend("manu.toolpageapp.fv.controller.Home", newObj);
});
