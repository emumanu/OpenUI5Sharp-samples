sap.ui.getCore().attachInit(function () {
    sap.ui.require(System.Array.init(["sap/ui/demo/nav/root/mockserver", "sap/m/Shell", "sap/ui/core/ComponentContainer"], System.String), function (mockserver) {
        mockserver.init();

        new sap.m.Shell({ app: new sap.ui.core.ComponentContainer({ name: "sap.ui.demo.nav", settings: { id: "nav" } }) }).placeAt("content");
    });
});

Bridge.assembly("RoutingClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("sap.ui.demo.nav.startup");
});
