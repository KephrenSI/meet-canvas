"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    var CanvApp = function CanvApp(sCanvasSelector) {
        _classCallCheck(this, CanvApp);

        this.canvas = document.querySelector(sCanvasSelector);
        if (!window.isCanvasSupported(this.canvas)) {
            console.error("Canvas isn't supported!");

            return;
        }
        this.context = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    };

    window.CanvApp = CanvApp;
})();
