// hepl-mmi/meet-canvas - exo-four - ES2015 version

( function( CanvApp ) {

    let oApp;

    class MyCanvApp extends CanvApp {
        drawHouse() {
            let oContext = this.context;

            oContext.lineWidth = 5;
            oContext.strokeStyle = "red";

            // roof
            oContext.beginPath();
            oContext.moveTo( 40, 80 );
            oContext.lineTo( 80, 40 );
            oContext.lineTo( 120, 80 );

            // wall
            oContext.moveTo( 60, 80 );
            oContext.lineTo( 60, 120 );
            oContext.lineTo( 100, 120 );
            oContext.lineTo( 100, 80 );

            // door
            oContext.rect( 75, 100, 10, 20 );

            oContext.stroke();
        }

        drawSun() {
            let oContext = this.context;

            oContext.fillStyle = "yellow";
            oContext.strokeStyle = "orange";

            oContext.beginPath();
            oContext.arc( 180, 40, 30, 0, Math.PI * 2, true );

            oContext.fill();
            oContext.stroke();
        }

        drawPalmTree() {
            let oContext = this.context;

            oContext.strokeStyle = "limegreen";

            oContext.beginPath();
            oContext.moveTo( 20, 120 );
            oContext.arcTo( 20, 0, 100, 100, 20 );

            oContext.stroke();
        }

        drawWaves() {
            let oContext = this.context;

            oContext.strokeStyle = "turquoise";

            oContext.beginPath();
            oContext.moveTo( 20, 150 );
            oContext.bezierCurveTo( 80, 130, 80, 180, 140, 150 );
            oContext.moveTo( 20, 170 );
            oContext.bezierCurveTo( 80, 150, 80, 200, 140, 170 );

            oContext.stroke();
        }

        draw() {
            this.drawHouse();
            this.drawSun();
            this.drawPalmTree();
            this.drawWaves();
        }
    }

    oApp = new MyCanvApp( "#my-canvas" );

    oApp.draw();

} )( window.CanvApp );
