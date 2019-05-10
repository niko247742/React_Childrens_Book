import React from 'react';




function Spider() {
   
    

    
      
    //   function eyes(x, y, size, event) {
    //     var canvas = document.createElement("canvas"),
    //         context = canvas.getContext("2d");
    //     document.body.appendChild(canvas);
    //     canvas.style.position = "absolute";
    //     canvas.style.left = (x - size - 5) + "px";
    //     canvas.style.top = (y - size  / 2 - 5) + "px";
        
    //     var rect = canvas.getBoundingClientRect();
    //     canvas.width = size * 2 + 10;
    //     canvas.height = size + 10;
      
    //     onMouseMove(event);
        
    //     document.addEventListener("mousemove", onMouseMove);
      
    //     function onMouseMove(event) {
    //       var x = event.clientX - rect.left,
    //           y = event.clientY - rect.top;
    //       context.clearRect(0, 0, size * 2 + 10, size + 10);
    //       drawEye(x, y, size / 2 + 5, size / 2 + 5);
    //       drawEye(x, y, size * 1.5 + 5, size / 2 + 5);
    //     }
        
    //     function drawEye(x, y, cx, cy) {
    //       var dx = x - cx,
    //           dy = y - cy,
    //           angle = Math.atan2(dy, dx);
    //       context.save();
    //       context.translate(cx, cy);
    //       context.rotate(angle);
    //       context.beginPath();
    //       context.arc(0, 0, size / 2, 0, Math.PI * 2);
    //       context.stroke();
    //       context.beginPath();
    //       context.arc(size * 0.4, 0, size * 0.1, 0, Math.PI * 2);
    //       context.fill();
    //       context.restore();
    //     }
     // }

    return (
        <div className = "container">
            <svg version="1.1" 
                id="spider" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                x="0px" 
                y="0px"
                height = "50vh"
                width = "50vw"
                viewBox="0 0 252 64" 
                xmlSpace="preserve">

                <g id="rightLeg1">
            <g>
                <g>
                    <polygon fill="#1E1D1D" points="221.5,57.2 219.2,59.4 198.9,40 175.4,51.2 173.9,48.5 199.6,36.3 199.7,36.6 199.8,36.5 			"/>
                </g>
            </g>
            <ellipse fill="#1E1D1D" cx="222.7" cy="57.5" rx="4.8" ry="3.1"/>
        </g>
                <g id="rightLeg2">
            <g>
                <g>
                    <polygon fill="#1E1D1D" points="235,48.5 232.4,51.1 209.8,28.5 183.6,41.6 182,38.4 210.6,24.1 210.8,24.5 210.9,24.4 			"/>
                </g>
            </g>
            <ellipse fill="#1E1D1D" cx="236.4" cy="48.9" rx="5.4" ry="3.6"/>
        </g>
                <g id="rightLeg3">
            <g>
                <g>
                    <polygon fill = "#1E1D1D" points="240.6,38.1 237.9,40.8 213.7,16.7 185.8,30.7 184,27.3 214.5,12.1 214.8,12.5 214.8,12.4 			"/>
                </g>
            </g>
            <ellipse fill = "#1E1D1D" cx="242.1" cy="38.5" rx="5.7" ry="3.8"/>
        </g>
                <g id="rightLeg4">
            <g>
                <g>
                    <polygon fill ="#1E1D1D" points="244.2,27.7 241.3,30.6 215.6,4.9 185.9,19.8 184,16.2 216.5,0 216.7,0.5 216.8,0.4 			"/>
                </g>
            </g>
            <ellipse fill="#1E1D1D" cx="245.8" cy="28.2" rx="6.1" ry="4.1"/>
        </g>
                <g id="leftLeg1">
            <g>
                <g>
                    <polygon fill="#1E1D1D" points="30,57.2 32.2,59.4 52.5,40 76.1,51.2 77.5,48.5 51.9,36.3 51.7,36.6 51.6,36.5 			"/>
                </g>
            </g>
            <ellipse fill="#1E1D1D" cx="28.7" cy="57.5" rx="4.8" ry="3.1"/>
        </g>
                <g id="leftLeg2">
            <g>
                <g>
                    <polygon fill="#1E1D1D" points="16.5,48.5 19,51.1 41.6,28.5 67.8,41.6 69.4,38.4 40.8,24.1 40.6,24.5 40.5,24.4 			"/>
                </g>
            </g>
            <ellipse fill ="#1E1D1D" cx="15" cy="48.9" rx="5.4" ry="3.6"/>
        </g>
                <g id="leftLeg3">
            <g>
                <g>
                    <polygon fill ="#1E1D1D" points="10.8,38.1 13.5,40.8 37.7,16.7 65.7,30.7 67.4,27.3 36.9,12.1 36.7,12.5 36.6,12.4 			"/>
                </g>
            </g>
            <ellipse fill="#1E1D1D" cx="9.3" cy="38.5" rx="5.7" ry="3.8"/>
        </g>
                <g id="leftLeg4">
            <g>
                <g>
                    <polygon fill = "#1E1D1D" points="7.2,27.7 10.1,30.6 35.8,4.9 65.5,19.8 67.4,16.2 34.9,0 34.7,0.5 34.6,0.4 			"/>
                </g>
            </g>
            <ellipse fill = "#1E1D1D" cx="5.6" cy="28.2" rx="6.1" ry="4.1"/>
            <ellipse fill = "#1E1D1D" cx="5.6" cy="28.2" rx="6.1" ry="4.1"/>
        </g>
                <g id="bodyShadow">
            <ellipse fill = "#1E1D1D" cx="125.1" cy="31.6" rx="67.9" ry="29.8"/>
        </g>
                <g id="mainBody">
            <ellipse fill='#353333' cx="127.2" cy="33.2" rx="59.8" ry="25.3"/>
        </g>
                    <circle id="leftEyeWhite" fill='#F7F5F5' cx="113" cy="25.1" r="9.1"/>
                    <g id="leftEye">
                    <circle fill = "#1E1D1D" cx="115" cy="27.1" r="5.1"/>
                </g>
                    <circle id="rightEyeWhi" fill='#F7F5F5' cx="139.3" cy="25.1" r="9.1"/>
                <g id="rightEye">
                    <circle fill = "#1E1D1D" cx="141.4" cy="27.1" r="5.1"/>
                </g>
                <path id="mouth" fill = "#1E1D1D" d="M172.8,    30.2c7.4,2.5-21.5,20.3-45.6,20.3S73.7,32.2,81.6,32.2c6.1,0,22.6,16.2,46.6,16.2
            S166.7,28.2,172.8,30.2z"/>
            </svg>
        </div>
        

    )
}


export default Spider