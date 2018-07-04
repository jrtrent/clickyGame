import React from "react";
import "./Grid.css";

const Grid = props => (
<div class="grid-container">
    <div class={ `item${props.id}` }>{props.children}</div>
   

</div>
);

export default Grid;
