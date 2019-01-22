        //canvas context
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        //render circles

        // Render circles on canvas
        const render = ( dataLength, circleStructSize ) => {

            // Get circle data from C - Typed Array
            let circles = new Int32Array( Module.buffer, _getCircles( canvas.width, canvas.height ), dataLength )

            // Clear existing canvas to re-render
            ctx.clearRect( 0, 0, canvas.width, canvas.height )

            // Loop data and get circle chunks
            for( let i = 0; i < circles.length; i+=circleStructSize ) {

                // Get circle data chunk
                let circle = circles.slice( i, i+circleStructSize )

                // Draw circle
                ctx.beginPath()
                ctx.arc(circle[0], circle[1], circle[2], 0, 2*Math.PI, false)
                ctx.fillStyle = `rgba(${circle[3]},${circle[4]},${circle[5]},0.75)`
                ctx.fill()
            }

            // Request next animation frame and re-render with updated circles
            window.requestAnimationFrame( () => {
                render( dataLength, circleStructSize )
            })  
        }