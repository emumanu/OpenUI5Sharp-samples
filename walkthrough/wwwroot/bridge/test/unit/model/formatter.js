Bridge.assembly("WalkthroughClientScripts", function ($asm, globals) {
    "use strict";

    Bridge.define("WalkthroughClientScripts.Tests.FormatterTests", {
        inherits: [UI5.Tests.BaseUnitTest],
        $metadata : function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Script","is":true,"t":8,"sn":"Script","rt":System.Void}]}; }
    });
});

sap.ui.require(System.Array.init(["sap/ui/demo/walkthrough/model/formatter", "sap/ui/model/resource/ResourceModel", "sap/ui/thirdparty/sinon", "sap/ui/thirdparty/sinon-qunit"], System.String), function (formatter) {
    var oResourceModel = null;

    QUnit.module("Test Module", { beforeEach: function (assert) {
        oResourceModel = new sap.ui.model.resource.ResourceModel({ bundleUrl: jQuery.sap.getModulePath("sap.ui.demo.walkthrough", "/i18n/i18n.properties") });
    }, afterEach: function (assert) {
        oResourceModel.destroy();
    } });

    QUnit.test("Should return the translated texts", function (assert) {
        // Arrange
        var oModel = this.stub();
        oModel.withArgs("i18n").returns(oResourceModel);
        var oViewStub = { getModel: oModel };
        var oControllerStub = { getView: this.stub().returns(oViewStub) };

        // System under test
        var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
    });
});
