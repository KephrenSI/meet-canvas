// hepl-mmi/meet-canvas - utils - ES2015 version

( function() {

    window.isCanvasSupported = function( $canvasElt ) {
        return !!$canvasElt.getContext;
    };

} )();
