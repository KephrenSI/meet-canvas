"use strict";

(function () {

    var oApp = void 0,
        iFlagHeight = 200;

    oApp = {
        "canvas": null,
        "context": null,
        "width": null,
        "height": null
    };

    oApp.setup = function () {
        this.canvas = document.querySelector("#my-canvas");
        if (!window.isCanvasSupported(this.canvas)) {
            console.error("Canvas isn't supported!");

            return;
        }
        this.context = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.draw();
    };

    oApp.drawSwissFlag = function () {
        var oContext = this.context,
            iFlagWidth = iFlagHeight * 1.5,
            iCrossThickness = iFlagHeight * 0.1875,
            iCrossSize = iCrossThickness + 2 * (iCrossThickness + iCrossThickness * 0.166666667);

        oContext.fillStyle = "#da291c";
        oContext.fillRect((this.width - iFlagWidth) / 2, (this.height - iFlagHeight) / 2, iFlagWidth, iFlagHeight);

        oContext.clearRect((this.width - iCrossThickness) / 2, (this.height - iCrossSize) / 2, iCrossThickness, iCrossSize);
        oContext.clearRect((this.width - iCrossSize) / 2, (this.height - iCrossThickness) / 2, iCrossSize, iCrossThickness);
    };

    oApp.draw = function () {
        this.drawSwissFlag();
    };

    oApp.setup();
})();
