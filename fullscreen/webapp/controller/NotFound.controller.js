sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("student11.com.sap.training.ux402.fullscreen.fullscreen.controller.NotFound", {
            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },
            onNavBack: function () {
                var oHistory, sPreviousHash;

                oHistory = sap.ui.core.routing.History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo('Overview', true); //True sinaliza que não grava historico
                }
            }
        });
    });
