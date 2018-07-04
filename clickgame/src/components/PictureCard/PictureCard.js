import React from "react";
import "./PictureCard.css";


const PictureCard = props => (
    
        
        
    <div className="picture" value={props.id}>
                 
        <div className="img-container" >
        
            <img alt={props.alt} src={props.image} onClick={props.handleIncrement} />
            
        </div>
        
        
        
      
    </div>
);

export default PictureCard;