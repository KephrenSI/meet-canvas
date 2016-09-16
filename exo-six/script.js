"use strict";

(function (CanvApp) {

    var oSource = void 0,
        oCopy = void 0,
        fSetup = void 0,
        fCopySourceAtMousePosition = void 0;

    oSource = new CanvApp("#source");
    oCopy = new CanvApp("#copy");

    fSetup = function fSetup() {
        var oImage = new Image();

        oImage.addEventListener("load", function () {
            var oImageData = void 0;

            oSource.context.drawImage(oImage, 0, 0);

            oImageData = oSource.context.getImageData(0, 0, oCopy.width, oCopy.height);

            oCopy.context.putImageData(oImageData, 0, 0);
        });
        oImage.src = "../_shared/big-kitten.jpg";

        oSource.canvas.addEventListener("mousemove", fCopySourceAtMousePosition);
    };

    fCopySourceAtMousePosition = function fCopySourceAtMousePosition(oEvent) {
        var oSourceCanvasRect = oSource.canvas.getBoundingClientRect(),
            iSourceCanvasFrameX = oEvent.clientX - oSourceCanvasRect.left - oCopy.width / 2,
            iSourceCanvasFrameY = oEvent.clientY - oSourceCanvasRect.top - oCopy.height / 2,
            oImageData = void 0;

        iSourceCanvasFrameX < 0 && (iSourceCanvasFrameX = 0);
        iSourceCanvasFrameY < 0 && (iSourceCanvasFrameY = 0);

        iSourceCanvasFrameX > oSource.width - oCopy.width && (iSourceCanvasFrameX = oSource.width - oCopy.width);
        iSourceCanvasFrameY > oSource.height - oCopy.height && (iSourceCanvasFrameY = oSource.height - oCopy.height);

        oImageData = oSource.context.getImageData(iSourceCanvasFrameX, iSourceCanvasFrameY, oCopy.width, oCopy.height);

        oCopy.context.putImageData(oImageData, 0, 0);
    };

    fSetup();
})(window.CanvApp);
