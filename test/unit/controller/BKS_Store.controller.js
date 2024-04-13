/*global QUnit*/

sap.ui.define([
	"project1/controller/BKS_Store.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BKS_Store Controller");

	QUnit.test("I should test the BKS_Store controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
