sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("student11.com.sap.training.ux402.fullscreen.fullscreen.controller.Carrier", {
            getRouter: function () {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },
            onPress: function (oEvent) {
                var oItem = oEvent.getSource();
                var oCtx = oItem.getBindingContext();
                var sCarrid = oCtx.getProperty("Carrid");

                this.getRouter().navTo("Flights", { carrid: sCarrid }, false);
            }
        });
    });
