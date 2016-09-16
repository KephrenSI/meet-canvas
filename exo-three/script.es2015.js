// hepl-mmi/meet-canvas - exo-three - ES2015 version

( function() {

    let oApp;

    oApp = {
        "canvas": null,
        "context": null,
        "width": null,
        "height": null,
    };

    oApp.setup = function() {
        this.canvas = document.querySelector( "#my-canvas" );
        if ( !window.isCanvasSupported( this.canvas ) ) {
            console.error( "Canvas isn't supported!" );

            return;
        }
        this.context = this.canvas.getContext( "2d" );
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.draw();
    };

    oApp.drawFirstTriangle = function() {
        let oContext = this.context;

        oContext.fillStyle = "yellowgreen";
        oContext.strokeStyle = "steelblue";
        oContext.lineWidth = 20;

        oContext.beginPath();
        oContext.moveTo( 25, 25 );
        oContext.lineTo( 100, 25 );
        oContext.lineTo( 100, 100 );
        oContext.closePath();

        oContext.fill();
        oContext.stroke();
    };

    // round joins without closing path
    oApp.drawSecondTriangle = function() {
        let oContext = this.context;

        oContext.fillStyle = "yellowgreen";
        oContext.strokeStyle = "steelblue";
        oContext.lineWidth = 20;
        oContext.lineJoin = "round";

        oContext.beginPath();
        oContext.moveTo( 300, 100 );
        oContext.lineTo( 220, 100 );
        oContext.lineTo( 220, 25 );
        oContext.lineTo( 300, 100 );

        oContext.fill();
        oContext.stroke();
    };

    // round joins and closing path
    oApp.drawThirdTriangle = function() {
        let oContext = this.context;

        oContext.fillStyle = "yellowgreen";
        oContext.strokeStyle = "steelblue";
        oContext.lineWidth = 20;
        oContext.lineJoin = "round";

        oContext.beginPath();
        oContext.moveTo( 400, 100 );
        oContext.lineTo( 350, 100 );
        oContext.lineTo( 350, 25 );
        oContext.lineTo( 400, 100 );
        oContext.closePath();

        oContext.fill();
        oContext.stroke();
    };

    oApp.draw = function() {
        this.drawFirstTriangle();
        this.drawSecondTriangle();
        this.drawThirdTriangle();
    };

    oApp.setup();

} )();
