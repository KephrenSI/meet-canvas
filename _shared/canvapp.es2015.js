// hepl-mmi/meet-canvas - canvapp - ES2015 version

( function() {
    class CanvApp {
        constructor( sCanvasSelector ) {
            this.canvas = document.querySelector( sCanvasSelector );
            if ( !window.isCanvasSupported( this.canvas ) ) {
                console.error( "Canvas isn't supported!" );

                return;
            }
            this.context = this.canvas.getContext( "2d" );
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        }
    }

    window.CanvApp = CanvApp;
} )();
