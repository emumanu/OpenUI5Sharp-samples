Bridge.assembly("ClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("ClientScripts.Test.Unit.TestFormatter", {
        inherits: [UI5.Tests.BaseUnitTest],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"DefineScript","is":true,"t":8,"sn":"DefineScript","rt":System.Void},{"a":2,"n":"imageSourceTestCase","t":8,"pi":[{"n":"assert","pt":Bridge.virtualc("Assert"),"ps":0},{"n":"bValue","pt":System.Boolean,"ps":1},{"n":"fExpectedSourceImage","pt":System.String,"ps":2}],"sn":"imageSourceTestCase","rt":System.Void,"p":[Bridge.virtualc("Assert"),System.Boolean,System.String]},{"a":2,"n":"formatter","t":4,"rt":manu.toolpageapp.fv.model.Formatter,"sn":"formatter"},{"a":2,"n":"oDeviceModel","t":4,"rt":sap.ui.model.Model,"sn":"oDeviceModel"}]}; },
        fields: {
            formatter: null,
            oDeviceModel: null
        },
        methods: {
            imageSourceTestCase: function (assert, bValue, fExpectedSourceImage) {
                // Act
                var sImageSrc = this.formatter.srcImageValue(bValue);

                // Assert
                assert.strictEqual(sImageSrc, fExpectedSourceImage, "The right image version is displayed");
            }
        }
    });
});

sap.ui.define(System.Array.init(["manu/toolpageapp/fv/model/formatter", "sap/ui/thirdparty/sinon", "sap/ui/thirdparty/sinon-qunit"], System.String), function (formatter) {
    var testObj = new ClientScripts.Test.Unit.TestFormatter();
    testObj.formatter = formatter;

    QUnit.module("homeImages", { beforeEach: function (assert) {
        testObj.formatter = formatter;
    } });

    QUnit.test("Should display the reduced image on small screen sizes", function (assert) {
        testObj.imageSourceTestCase(assert, true, "/images/homeImage_small.jpg");
    });

    QUnit.test("Should display the original image on large screen sizes", function (assert) {
        testObj.imageSourceTestCase(assert, false, "/images/homeImage.jpg");
    });
});
