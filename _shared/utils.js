"use strict";

(function () {

    window.isCanvasSupported = function ($canvasElt) {
        return !!$canvasElt.getContext;
    };
})();
