/*global QUnit*/

sap.ui.define([
	"student11saptraining/helloworld/controller/HelloView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HelloView Controller");

	QUnit.test("I should test the HelloView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
