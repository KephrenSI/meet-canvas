// hepl-mmi/meet-canvas - exo-five - ES2015 version

( function( CanvApp ) {

    let oApp;

    class MyCanvApp extends CanvApp {
        drawStar() {
            let oContext = this.context,
                iSteps = 13,
                iCurrentStep = 0,
                iStarSize = 150;

            oContext.translate( this.width / 2, this.height / 2 );

            oContext.strokeStyle = "red";

            while ( ++iCurrentStep <= iSteps ) {
                oContext.strokeRect( iStarSize / 2 * -1, iStarSize / 2 * -1, iStarSize, iStarSize );
                oContext.rotate( 2 * Math.PI / iSteps );
            }
        }

        draw() {
            this.drawStar();
        }
    }

    oApp = new MyCanvApp( "#my-canvas" );

    oApp.draw();

} )( window.CanvApp );
