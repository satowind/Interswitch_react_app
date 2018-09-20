import React from 'react';




const Svg = ({title,para,styles,color})=> {
      return (
      
        <div className={`col2-6 padding ${styles}`}>
        <h1 className="hch1">{title}</h1>
          <small>{para}</small>
          <br/><br/>
          <svg viewBox="10 10 300 200" className="chart">
            <polyline
              fill="none"
              stroke={color}
              strokeWidth="4"
              points="
                00,120
                20,60
                40,80
                60,20
                80,80
                100,80
                120,60
                140,100
                160,90
                180,80
                200, 110
                220, 10
                240, 70
                260, 100
                280, 100
                300, 40
                320, 0
                340, 100
                360, 100
                380, 120
                400, 60
                420, 70
                440, 80
              "
            />
            
          </svg>

    </div>
       
      );
    }
  
  
  export default Svg;