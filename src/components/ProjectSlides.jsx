import React from "react";

function ProjectSlides(props){
    return (
        
        <a href={props.projectlink}>
        
        <img onMouseEnter={props.mouseenter} onMouseLeave={props.mouseleave} className={props.projectclassname} src={props.projectimg} alt={props.projectalt} />
        
        </a>

    )
}

export default ProjectSlides;