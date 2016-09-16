// hepl-mmi/meet-canvas - exo-one - ES2015 version

( function() {

    let oApp,
        fIsCanvasSupported;

    oApp = {
        "canvas": null,
        "context": null,
        "width": null,
        "height": null,
    };

    fIsCanvasSupported = function( $canvasElt ) {
        return !!$canvasElt.getContext;
    };

    oApp.setup = function() {
        this.canvas = document.querySelector( "#my-canvas" );
        if ( !fIsCanvasSupported( this.canvas ) ) {
            console.error( "Canvas isn't supported!" );

            return;
        }
        this.context = this.canvas.getContext( "2d" );
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.draw();
    };

    oApp.drawSquares = function() {
        let oContext = this.context,
            iHalfWidth = this.width / 2,
            iHalfHeight = this.height / 2;

        oContext.fillStyle = "#ffffaa";
        oContext.fillRect( 0, 0, iHalfWidth, iHalfHeight );
        oContext.fillStyle = "#aaffff";
        oContext.fillRect( iHalfWidth, 0, iHalfWidth, iHalfHeight );
        oContext.fillStyle = "#ffaaaa";
        oContext.fillRect( 0, iHalfHeight, iHalfWidth, iHalfHeight );
        oContext.fillStyle = "#aaffaa";
        oContext.fillRect( iHalfWidth, iHalfHeight, iHalfWidth, iHalfHeight );
    };

    oApp.drawText = function() {
        let oContext = this.context;

        oContext.font = "100 24px Helvetica, sans-serif";
        oContext.fillStyle = "black";
        oContext.textBaseline = "top";
        oContext.fillText( "Javascript, kittens & psycho colors FTW", 20, 20 );
    };

    oApp.drawImage = function() {
        let oContext = this.context,
            oImage = new Image();

        oImage.addEventListener( "load", () => oContext.drawImage( oImage, ( this.width - oImage.width ) / 2, ( this.height - oImage.height ) / 2 ) );
        oImage.src = "../_shared/small-kitten.png";
    };

    oApp.drawStroke = function() {
        let oContext = this.context;

        oContext.strokeStyle = "red";
        oContext.strokeRect( 10, 10, this.width - 20, this.height - 20 );
    };

    oApp.draw = function() {
        this.drawSquares();
        this.drawText();
        this.drawImage();
        this.drawStroke();
    };

    oApp.setup();

} )();
