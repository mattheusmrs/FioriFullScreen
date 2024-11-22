/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student11comsaptrainingux402fullscreen/fullscreen/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
