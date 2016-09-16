// hepl-mmi/meet-canvas - exo-seven - ES2015 version

( function( CanvApp ) {

    let oApp;

    class MyCanvApp extends CanvApp {
        setup() {
            let oSourceImage = new Image();

            oSourceImage.addEventListener( "load", () => {
                this.context.drawImage( oSourceImage, 0, 0 );

                this._originalImageData = this.context.getImageData( 0, 0, this.width, this.height );
            } );
            oSourceImage.src = "../_shared/big-kitten.jpg";

            for ( let sFilter of [ "no-red", "negative", "bw", "reset" ] ) {
                document.getElementById( sFilter ).addEventListener( "click", oApp.buttonClicked.bind( oApp ) );
            }
        }

        buttonClicked( oEvent ) {
            let oImageData,
                oModifiedImageData;

            oEvent.preventDefault();

            oImageData = this.context.getImageData( 0, 0, this.width, this.height );

            switch ( oEvent.target.id ) {
                case "no-red":
                    oModifiedImageData = this.applyNoRedFilter( oImageData );
                    break;
                case "negative":
                    oModifiedImageData = this.applyNegativeFilter( oImageData );
                    break;
                case "bw":
                    oModifiedImageData = this.applyBlackAndWhiteFilter( oImageData );
                    break;
                case "reset":
                default:
                    oModifiedImageData = this._originalImageData;
                    break;
            }

            this.context.putImageData( oModifiedImageData, 0, 0 );
        }

        applyNoRedFilter( oImageData ) {
            let i = 0;

            // oImageData.data is an array of red, green, blue & alpha value for each pixel of our canvas.
            // We use this do-while loop to jump by four cases at each step.
            do {
                oImageData.data[ i ] = 0;
            } while ( ( oImageData.data[ i += 4 ] ) != null );

            return oImageData;
        }

        applyNegativeFilter( oImageData ) {
            let i = 0;

            do {
                oImageData.data[ i ] = 255 - oImageData.data[ i ]; // red
                oImageData.data[ i + 1 ] = 255 - oImageData.data[ i + 1 ]; // green
                oImageData.data[ i + 2 ] = 255 - oImageData.data[ i + 2 ]; // blue
            } while ( ( oImageData.data[ i += 4 ] ) != null );

            return oImageData;
        }

        applyBlackAndWhiteFilter( oImageData ) {
            let i = 0;

            do {
                // cf. https://fr.wikipedia.org/wiki/Luminance#Matri.C3.A7age
                let iLuminance = ( oImageData.data[ i ] * 0.299 ) + ( oImageData.data[ i + 1 ] * 0.587 ) + ( oImageData.data[ i + 2 ] * 0.114 );

                oImageData.data[ i ] = iLuminance; // red
                oImageData.data[ i + 1 ] = iLuminance; // green
                oImageData.data[ i + 2 ] = iLuminance; // blue
            } while ( ( oImageData.data[ i += 4 ] ) != null );

            return oImageData;
        }
    }

    oApp = new MyCanvApp( "#my-canvas" );

    oApp.setup();

} )( window.CanvApp );
